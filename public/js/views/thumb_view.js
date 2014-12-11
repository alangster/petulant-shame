
ThumbView = Backbone.View.extend({
	tagName: 'li',

	events: {
		'click img': 'magnify'
	},

	template: _.template("<div class='thumb'><img src='<%= url %>'/></div>"),
	
	magnifiedTemplate: _.template("<div id='big'><img src='<%= url %>'/></div>"),

	initialize: function() {
		this.$frame = app.appView.$('#photo');
		this.magnifyFirst();
	},
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	magnify: function() {
		this.$frame.html(this.magnifiedTemplate(this.model.toJSON()));
	},

	magnifyFirst: function() {
		if (this.model === app.appView.collection.models[0]) {this.magnify();}
	}
});
