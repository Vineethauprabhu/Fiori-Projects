/*global QUnit*/

sap.ui.define([
	"comapplexus/calculator/controller/Calulator.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Calulator Controller");

	QUnit.test("I should test the Calulator controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
