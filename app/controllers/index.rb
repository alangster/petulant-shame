get '/' do
	@photos = Client.new.pics(params[:insta_id])
	erb :index
end

get '/photos/:insta_id' do
	Client.new.pics(params[:insta_id]).to_json
end
