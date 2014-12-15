
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
		app.appView.toMagnify(this.model);
	},

	magnifyFirst: function() {
		if (app.appView.firstPhoto(this.model)) {this.magnify();}
	}
});
