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


# {"order"=>
	# ["{\"url\":\"http://scontent-a.cdninstagram.com/hphotos-xfa1/t51.2885-15/10864667_659212420855146_696113430_n.jpg\",\"insta_id\":\"891600110973735860_8194723\",\"price\":66.49,\"inCart\":true,\"big\":false}", 
	 # "{\"url\":\"http://scontent-a.cdninstagram.com/hphotos-xaf1/t51.2885-15/10852570_364284390409747_1512143019_n.jpg\",\"insta_id\":\"884824985695802345_8194723\",\"price\":49.17,\"inCart\":true,\"big\":true}"]}