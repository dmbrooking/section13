source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

gem 'rails', '~> 5.2.1'

gem 'active_model_serializers', '~> 0.10.7'
gem 'bcrypt', '~> 3.1.7'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'jwt', '~> 1.5.6'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.11'
gem 'rack-cors', '~> 1.0.2'
gem 'versionist', '~> 1.7.0'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'pry-byebug', '~> 3.6.0'
  gem 'pry-rails', '~> 0.3.4'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'overcommit', '~> 0.45.0'
  gem 'rubocop', '~> 0.58.2', require: false
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'database_cleaner', '~> 1.7.0'
  gem 'factory_bot_rails', '~> 4.8.2', require: false
  gem 'faker', '~> 1.9.1'
  gem 'rspec-rails', '~> 3.7.2'
  gem 'shoulda-matchers', '~> 3.1.2'
  gem 'simplecov', '~> 0.16.1', require: false
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
