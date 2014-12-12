
ThumbView = Backbone.View.extend({
	tagName: 'li',

	events: {
		'click img': 'magnify'
	},

	initialize: function() {
		this.$frame = app.appView.$('#photo');
		this.magnifyFirst();
	},
	
	render: function() {
		var source = $('#thumbnail-template').html();
		var template = Handlebars.compile(source);
		var html = template(this.model.toJSON());
    this.$el.html(html);
		return this;
	},

	magnify: function() {
		// var source = $('#big-photo-template').html();
		// var template = Handlebars.compile(source);
		// var html = template(this.model.toJSON());
		// this.$frame.html(html);

		// need to tell the BigPhotoView to render and pass it the model
	},

	magnifyFirst: function() {
		if (this.model === app.appView.collection.models[0]) {
			this.magnify();
		}
	}
});
