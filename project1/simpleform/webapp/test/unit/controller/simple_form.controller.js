/*global QUnit*/

sap.ui.define([
	"comapplexus/simpleform/controller/simple_form.controller"
], function (Controller) {
	"use strict";

	QUnit.module("simple_form Controller");

	QUnit.test("I should test the simple_form controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
