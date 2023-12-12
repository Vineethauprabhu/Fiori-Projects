/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comapplexus/food_ordering_app_test1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
