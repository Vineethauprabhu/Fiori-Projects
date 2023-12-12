sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, models) {
        "use strict";

        return Controller.extend("com.applexus.simpleform.controller.simple_form",
            {
                onInit: function () {
                    let model = models.info("../model/sampledata.json");
                    let model2 = models.info("../model/sampledata2.json");
                    this.getView().setModel(model, "emp1");
                    this.getView().setModel(model2);
                }
                ,
                onPress: function (event) {
                    if (event.getSource().getPressed()) {
                        this.getView().byId("in1").bindValue('emp1>/Empdetails/0/name');
                        this.getView().byId("in2").bindValue('emp1>/Empdetails/0/age');
                        this.getView().byId("in3").bindValue('emp1>/Empdetails/0/salary');
                        this.getView().byId("in4").bindValue('emp1>/Empdetails/0/department');
                    }
                    else {
                        this.getView().byId("in1").bindValue('/Employees/0/name');
                        this.getView().byId("in2").bindValue('/Employees/0/age');
                        this.getView().byId("in3").bindValue('/Employees/0/salary');
                        this.getView().byId("in4").bindValue('/Employees/0/department');
                    }
                },
                handleUploadComplete: function (oEvent) {
                    var sResponse = oEvent.getParameter("response"),
                        iHttpStatusCode = parseInt(/\d{3}/.exec(sResponse)[0]),
                        sMessage;

                    if (sResponse) {
                        sMessage = iHttpStatusCode === 200 ? sResponse + " (Upload Success)" : sResponse + " (Upload Error)";
                        MessageToast.show(sMessage);
                    }
                },

                handleUploadPress: function () {
                    debugger;
                    var oFileUploader = this.byId("fileUploader");
                    oFileUploader.checkFileReadable().then(function () {
                        oFileUploader.upload();

                    }, function (error) {
                        MessageToast.show("The file cannot be read. It may have changed.");
                    }).then(function () {
                        oFileUploader.clear();
                    });
                }
            });
    });
