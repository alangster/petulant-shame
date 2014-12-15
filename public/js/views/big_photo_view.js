
BigPhotoView = Backbone.View.extend({

	el: '#photo',

	events: {
		'click #add-to-cart': 'addToCart',
		'click #remove-from-cart': 'removeFromCart',
		'click #empty-cart': 'emptyCart'
	},

	render: function(photo) {
		this.adjustCurrentPhoto(photo);

		var source = $('#big-photo-template').html();
		var template = Handlebars.compile(source);
		var html = template(photo.toJSON());
		this.$el.html(html);
		return this;
	},

	adjustCurrentPhoto: function(photo) {
		if (this.currentPhoto) {
			var p1 = this.currentPhoto;
			this.currentPhoto.set('big', false);
		}
		this.currentPhoto = photo;
		this.currentPhoto.set('big', true);
	},

	addToCart: function() {
		app.appView.addItem(this.currentPhoto);
	},

	removeFromCart: function() {
		app.appView.removeItem(this.currentPhoto);
	},

	emptyCart: function() {
		console.log('in BigPhotoView');
		app.appView.emptyAll();
	}

});