define(['underscore', 'backbone', 'leaflet'], function(_, Backbone, L) {
	'use strict';

	return Backbone.View.extend({
		initialize: function(params) {
			params.object.setIcon(this.markerIcon);
			params.object.setHint(typeof this.hintText == 'function' ? this.hintText(params) : this.hintText);
			this.listenTo(params.object, 'click', this.onClick);

			if (typeof this.onMouseOver != 'undefined' && typeof this.onMouseOut != 'undefined') {
				this.listenTo(params.object, 'mouseover', this.onMouseOver);
				this.listenTo(params.object, 'mouseout', this.onMouseOut);
			}

			this.params = params;
		},

		hintText: function(params) {
			return 'Вихрь в ' + params.data.caption;
		},

		markerIcon: L.icon({
			iconUrl: '/img/objects/hole.svg',
			iconSize: [50, 50],
			iconAnchor: [7, 7]
		}),

		onClick: function() {
			var data = this.params.data;
			this.params.appModel.load(data.region, data.map, data.goto);
		}
	});

});
