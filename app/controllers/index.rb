require 'json'

get '/' do
	@photos = Client.new.pics(params[:insta_id])
	erb :index
end

get '/photos/:insta_id' do
	Client.new.pics(params[:insta_id]).to_json
end

post '/checkout' do
	p "PARAMS"

	info = params["order"].map {|item| JSON.parse(item)}
	info.each {|item| p item}
end
