get '/' do
	erb :index
end

get '/photos' do
	Client.new.pics(params[:id])
end
