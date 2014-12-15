
ShoppingCartView = Backbone.View.extend({

	el: '#cart',

	initialize: function() {
		this.listenTo(this.collection, 'add', this.render);
		this.listenTo(this.collection, 'remove', this.render);
		this.render();
	},

	render: function() {
		var source = $('#cart-template');
		var template = Handlebars.compile(source.html());
		var html = template(this.collection);
		this.$el.html(html);
		return this;
	}
		
});