/*global QUnit*/

sap.ui.define([
	"comapplexus/project1/controller/Myfirstfioriapp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Myfirstfioriapp Controller");

	QUnit.test("I should test the Myfirstfioriapp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
