sap.ui.define(
    [
        "sap/ui/core/format/NumberFormat"
    ],
    function (NumberFormat) {
        "use strict";
        return {
            myformatter: function (inp) {
                if (inp) {
                    return inp.toUpperCase();
                }
            },
            curr_formatter:function (inp3, inp4) {
                debugger;
                if (inp3) {
                    debugger;
                    var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                        currencyCode: false
                    });
                    return oCurrencyFormat.format(inp3, inp4)
                }
            }
        };

    });
