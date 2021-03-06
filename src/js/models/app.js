define(['backbone'], function(Backbone) {
	'use strict';

	return Backbone.Model.extend({
		load: function(region, level, center) {
			this.set({
				location: {
					region: region,
					level: level
				},
				center: center
			});
		},

		center: function(center) {
			this.set('center', center);
		}
	});

});
