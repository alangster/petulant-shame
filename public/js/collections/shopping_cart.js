
ShoppingCart = Backbone.Collection.extend({

	model: Photo,

	addAdjust: function(item) {
		item.set('inCart', true);
		var total = parseFloat(this.total);
		var itemPrice = item.get('price');
		this.total = (total + itemPrice).toFixed(2);
	},

	initialize: function(models, options) {
		_.extend(this, _.pick(options, 'total'));
		this.on('add', this.addAdjust);
	},

});