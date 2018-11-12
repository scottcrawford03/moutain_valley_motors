# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#

env :GEM_PATH, '/usr/local/bundle/gems/'
set :bundle_command, 'bundle exec'
set :environment, 'development'
job_type :runner,  "cd :path && :bundle_command rails runner -e :environment ':task' :output"
set :output, "log/cron.log"
#
every 1.day, at: '4:30 am' do
  puts "running import"
  runner "ImportService.import!"
end

every 1.minute do
  puts "running import test"
  runner "ImportService.import_test!"
end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever
