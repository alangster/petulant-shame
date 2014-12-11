
class Client

	def pics(max_id = nil)
		if max_id
			url = "https://api.instagram.com/v1/users/8194723/media/recent/?count=5&max_id=#{max_id}&client_id=#{ENV['CLIENT_ID']}"
		else
			url = "https://api.instagram.com/v1/users/8194723/media/recent/?count=5&client_id=#{ENV['CLIENT_ID']}"
		end
		uri = URI(url)
		request = Net::HTTP::Get.new(uri)
		response = Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
			http.request(request)
		end

		res = JSON.parse(response.body)
		std_img_with_ids = res['data'].map {|d| { :url => d['images']['standard_resolution']['url'], :insta_id =>  d['id'], :price => sprintf('%.2f', rand(39.99..100.00)).to_f}}
		std_img_with_ids
	end

end