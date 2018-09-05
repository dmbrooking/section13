describe 'Quarter API', type: :request do
  let!(:inactive_quarters) { create_list(:quarter, 4) }
  let!(:active_quarter) { create(:quarter, active: true) }

  let!(:user) { create(:user) }

  describe 'GET /api/quarters' do
    before { get '/api/quarters', params: {}, headers: valid_headers }

    it 'returns quarters' do
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['quarters'].size).to eq(5)
    end
  end

  describe 'GET /api/quarters/active' do
    before { get '/api/quarters/active', params: {}, headers: valid_headers }

    it 'returns the active quarter' do
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['quarter']['year']).to eq(active_quarter.year)
      expect(json['quarter']['quarter']).to eq(active_quarter.quarter)
    end
  end

  describe 'POST /api/quarters/inactivate' do
    before { post '/api/quarters/inactivate', params: { quarter: active_quarter }.to_json, headers: valid_headers }

    it 'marks active quarter as inactive' do
      expect(response).to have_http_status(200)
      quarter = Quarter.find(active_quarter.id)
      expect(quarter.active).to be_falsey
    end
  end

  describe 'POST /api/quarters/activate' do
    it 'marks given quarter as active if no other active quarters' do
      post '/api/quarters/inactivate', params: { quarter: active_quarter }.to_json, headers: valid_headers
      post '/api/quarters/activate', params: { quarter: inactive_quarters[0] }.to_json, headers: valid_headers
      expect(response).to have_http_status(200)
      quarter = Quarter.find(inactive_quarters[0].id)
      expect(quarter.active).to be_truthy
    end

    it 'returns a 422 if there is already an active quarter' do
      post '/api/quarters/activate', params: { quarter: inactive_quarters[0] }.to_json, headers: valid_headers
      expect(response).to have_http_status(422)
      quarter = Quarter.find(inactive_quarters[0].id)
      expect(quarter.active).to be_falsey
    end
  end
end
