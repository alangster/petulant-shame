var app = app || {};

$(function() {
	
	Photos = Backbone.Collection.extend({
		url: '/photos',
		model: app.Photo,
	});

});
