sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models",
    "../model/formatter",
    "sap/ui/core/format/NumberFormat"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,models,formatter) {
        "use strict";

        return Controller.extend("com.applexus.table1.controller.Screen", {
            formatter:formatter,
            onInit: function () {
            let sample = models.load("../model/data.json")
            this.getView().setModel(sample);
            },
            onSelect:function(oEvent)
            {
             var orow = oEvent.getParameter('rowContext');
             var spath = orow.getPath();
             var obj = this.getView("SimpleForm");
             obj.bindElement({path:spath});
            }      
        });
    });
