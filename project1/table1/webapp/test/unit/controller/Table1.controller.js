/*global QUnit*/

sap.ui.define([
	"comapplexus/table1/controller/Table1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Table1 Controller");

	QUnit.test("I should test the Table1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
