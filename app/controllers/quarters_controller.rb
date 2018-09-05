class QuartersController < BaseController
  def index
    quarters = Quarter.all
    json_response(quarters: quarters)
  end

  def active
    json_response(quarter: Quarter.where(active: true)[0])
  end

  def inactivate
    quarter = Quarter.where(year: params[:quarter][:year], quarter: params[:quarter][:quarter])[0]
    quarter.inactivate
    json_response(message: 'ok')
  end

  def activate
    quarter = Quarter.where(year: params[:quarter][:year], quarter: params[:quarter][:quarter])[0]
    quarter.activate
    json_response(message: 'ok')
  end
end
