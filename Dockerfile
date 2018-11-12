FROM ruby:2.4.3-slim

LABEL maintainer="scottcrawford03@gmail.com"

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install curl and cron
RUN apt-get update && apt-get install -y \
  curl build-essential libssl-dev libpq-dev cron

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 8.2.1

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v

# Configure the main working directory
RUN mkdir -p /app
WORKDIR /app

# Copy the Gemfile as well as the Gemfile.lock and install
# the RubyGems. This is a separate step so the dependencies
# will be cached unless changes to one of those two files
# are made.
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install --jobs 20 --retry 5 --without production

# Same for npm packages
COPY package.json yarn.lock ./
RUN npm install --global yarn
RUN yarn install

# Copy the main application.
COPY . ./

# Expose port 3000 to the Docker host, so we can access it
# from the outside.
EXPOSE 80
WORKDIR /app

RUN touch /app/log/cron.log

RUN bundle exec whenever --update-crontab --set environment=development
RUN cron
CMD bundle exec rails s -b 0.0.0.0