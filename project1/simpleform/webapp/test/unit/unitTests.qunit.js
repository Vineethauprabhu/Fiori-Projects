/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comapplexus/simpleform/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
