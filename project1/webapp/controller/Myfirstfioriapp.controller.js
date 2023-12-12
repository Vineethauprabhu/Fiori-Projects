sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.applexus.project1.controller.Myfirstfioriapp", {
            onInit: function () {

            },
            onPress:function(){
              var x = parseInt(this.getView().byId("input1").getValue());
              var y = parseInt(this.getView().byId("input2").getValue());
              var z;
              z = x + y; 
              alert(z);               
            }
        });
    });
