/*global QUnit*/

sap.ui.define([
	"comapplexus/project2/controller/food_app.controller"
], function (Controller) {
	"use strict";

	QUnit.module("food_app Controller");

	QUnit.test("I should test the food_app controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
