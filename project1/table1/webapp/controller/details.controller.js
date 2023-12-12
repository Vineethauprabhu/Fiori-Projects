sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment) {
        "use strict";
        var router;
        return Controller.extend("com.applexus.table1.controller.details", {

            onInit: function () {
                router = this.getOwnerComponent().getRouter();
                router.getRoute("Route1").attachPatternMatched(this.receive,this);
            },
           
          receive:function(oEvent)
          {
            var index=oEvent.mParameters.arguments.pass;
            console.log(index);
            var spath = "/fruit/"+index;
            this.byId("SimpleForm").bindElement({path:spath});
          },
          handleValueHelp: function (oEvent) {
            debugger;
            var that = this;
            if (!this.oSupplyPop) {
                Fragment.load({
                    name: "com.applexus.table1.fragment.searchcity",
                    id: "supply",
                    type: "XML",
                    controller: this
                }).then(function (oPopup) {
                    // oMyButton is now usable
                    that.oSupplyPop = oPopup;
                    that.oSupplyPop.setTitle("Select Supplier");
                    that.getView().addDependent(that.oSupplyPop);
                    that.oSupplyPop.bindAggregation("items", {
                        path: '/city',
                        template: new sap.m.DisplayListItem({
                            label: "{cityName}",
                            value: "{cityName}"
                        })
                    })
                    that.oSupplyPop.open();
                });
            }
            else {

                this.oSupplyPop.open();
            }

        },
        });

    });
