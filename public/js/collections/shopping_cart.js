
ShoppingCart = Backbone.Collection.extend({

	model: Photo,

	setCookie: function() {
		document.cookie = JSON.stringify(this.models); 
	},

	addAdjust: function(item) {
		item.set('inCart', true);
		var total = parseFloat(this.total);
		var itemPrice = item.get('price');
		this.total = (total + itemPrice).toFixed(2);
		this.setCookie();
	},

	deleteAdjust: function(item) {
		item.set('inCart', false);
		var total = parseFloat(this.total);
		var itemPrice = item.get('price');
		this.total = (total - itemPrice).toFixed(2);
		this.setCookie();
	},

	initialize: function(models, options) {
		_.extend(this, _.pick(options, 'total'));
		this.on('add', this.addAdjust);
		this.on('remove', this.deleteAdjust);
		this.setCookie();
	},

	orderInfo: function() {
		return this.models.map(function(item) {
			return JSON.stringify(item);
		});
	},

	submitOrder: function() {
		var data = {"order": this.orderInfo()};
		$.post('/checkout', data);
	}

});