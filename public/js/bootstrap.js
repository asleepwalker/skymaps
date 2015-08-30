require.config({
	paths: {
		'backbone': '../assets/backbone',
		'jquery': '../assets/jquery.min',
		'leaflet': '../assets/leaflet',
		'leaflet.label': '../assets/leaflet.label',
		'underscore': '../assets/underscore-min',
		'tinyscrollbar': '../assets/jquery.tinyscrollbar.min',
		'rrose': '../assets/rrose-src'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'leaflet': {
			exports: 'L'
		},
		'leaflet.label': {
			deps: ['leaflet']
		},
		'rrose': {
			deps: ['leaflet']
		},
		'tinyscrollbar': {
			deps: ['jquery']
		}
	}
});

require(['backbone', 'models/app', 'views/app', 'router'], function(Backbone, AppModel, AppView, Router) {
	'use strict';

	var appModel = new AppModel(),
		appView = new AppView({ model: appModel }),
		router = new Router(appModel);

	Backbone.history.start({ pushState: true, root: '/' });
});