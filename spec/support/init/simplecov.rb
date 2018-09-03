require 'simplecov'

SimpleCov.minimum_coverage 95.00
SimpleCov.minimum_coverage_by_file 80
SimpleCov.refuse_coverage_drop

SimpleCov.start :rails do
  add_filter 'app/channels'
  add_filter do |source_file|
    source_file.lines.count < 5
  end

  add_group 'Services', 'app/services'
end
