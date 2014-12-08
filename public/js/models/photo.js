var app = app || {};
$(function() {
	app.Photo = Backbone.Model.extend({
		defaults: {
			url: '',
			id: 1
		}
	});
});

