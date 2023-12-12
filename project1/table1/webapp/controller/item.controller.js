sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";
        var router;
        return Controller.extend("com.applexus.table1.controller.item", {

            onInit: function () {
                router = this.getOwnerComponent().getRouter();

            },

            onFilter: function (oEvent) {


                var aFilter = [];
                var sQuery = oEvent.getSource().getValue();
                if (sQuery) {
                    var filter1 = new Filter("name", FilterOperator.Contains, sQuery);
                    var filter2 = new Filter("taste", FilterOperator.Contains, sQuery);
                    var filter3 = new Filter("price", FilterOperator.Contains, sQuery);
                    aFilter.push(filter1);
                    aFilter.push(filter2);
                    aFilter.push(filter3)
                    var masterfilter = new Filter({
                        filters: aFilter,
                        and: false
                    })
                }
                // filter binding
                var oList = this.byId("fruitslist");
                var oBinding = oList.getBinding("items");
                oBinding.filter(masterfilter);
            },
            onDelete: function () {
                var oList = this.byId("fruitslist");
                var items = oList.getSelectedItems();
                for (var i = 0; i < items.length; i++) {
                    oList.removeItem(items[i]);
                }
            }
            ,
            onNavPress: function (oEvent) {
                var oSelecteditem = oEvent.getSource();
                var spath = oSelecteditem.getBindingContextPath();
                console.log(spath);
                var index = spath.split('/')[2];
                console.log(index);
                router.navTo("Route1",{
                    pass : index
                });
            }


        });

    });
