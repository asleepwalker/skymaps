define(['backbone', 'leaflet', 'models/map', 'views/map', 'models/navigator', 'views/navigator'], function(Backbone, L, MapModel, MapView, NavigatorModel, NavigatorView) {
	'use strict';

	return Backbone.View.extend({
		el: $('#map'),
		initialize: function() {
			this.leafletMap = new L.Map('map', {
				attributionControl: false,
				crs: L.CRS.Simple,
				zoomControl: false
			});
			this.navigator = new NavigatorView({
				model: this.model
			});
			this.listenTo(this.model, 'change:location', this.open);
			this.listenTo(this.model, 'change:center', this.center);
		},
		open: function() {
			/*var mapModel = new MapModel({
				app: this.model
			});*/
			var mapView = new MapView({
				container: this.leafletMap,
				//model: mapModel
				model: this.model
			});
		},
		center: function() {
			var center = this.model.get('center');
			if (center) {
				this.leafletMap.setView([ -center.y, center.x ], 0);
			}
		}
	});

});
