/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comapplexus/table1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
