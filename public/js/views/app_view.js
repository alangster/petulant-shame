
AppView = Backbone.View.extend({
	el: 'body',

	events: {
		'click #more': 'morePhotos'
	},
	
	initialize: function() {
		this.$list = this.$('#photos');

		this.listenTo(this.collection, 'reset', this.add);
		this.listenTo(this.collection, 'add', this.addPhoto);
	},

	addPhoto: function(photo) {
		var view = new ThumbView({model: photo});
		this.$list.append(view.render().el);
	},

	add: function() {
		this.collection.each(this.addPhoto, this);
	},

	morePhotos: function() {
		var lastPhoto = this.collection.models[(this.collection.models.length - 1)];
		var lastPhotoId = lastPhoto.get('insta_id');
		var self = this;
		$.get('/photos/' + lastPhotoId)
			.done(function(response) {
				self.collection.add(JSON.parse(response));
			});
	}
});
