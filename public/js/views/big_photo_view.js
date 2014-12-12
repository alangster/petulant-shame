
BigPhotoView = Backbone.View.extend({

	el: '#photo',

	render: function(photo) {
		var source = $('#big-photo-template').html();
		var template = Handlebars.compile(source);
		var html = template(photo.toJSON());
		this.$el.html(html);
		return this;
	}

});