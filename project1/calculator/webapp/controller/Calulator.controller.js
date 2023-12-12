sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.applexus.calculator.controller.Calulator", {
            onInit: function () {
            },
            onButtonClick: function (event) {
                var button = event.getSource();
                var buttontext = button.getText();
                var inputfield = this.byId("Input");
                var CurrentValue = inputfield.getValue();
                switch(buttontext){
                    case 'C':
                        inputfield.setValue("");
                         break;
                    case '=':
                        inputfield.setValue(eval(CurrentValue));
                        break;
                    default:
                        inputfield.setValue(CurrentValue + buttontext); 
                        break;
                }               
            },
        });
    });
