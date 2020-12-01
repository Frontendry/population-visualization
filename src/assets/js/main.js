/**
 * ------------------------------------------------------------------------
 * More Imports
 * ------------------------------------------------------------------------
 */

// SVG Injector
import Papa from "papaparse";

// Bootstrap Icons
let bootstrapIcons = require("svg-url-loader!../imgs/svgs/bootstrap-icons/icons-sprite/bootstrap-icons.svg");

/**
 * ------------------------------------------------------------------------
 * Main JS Functions
 * ------------------------------------------------------------------------
 */

(function ($) {
  "use strict";

  const windowEl = window,
    html = document.html,
    bodyEl = document.body,
    dataTablesContsEls = document.querySelectorAll(".data-tables"),
    arrSum = (arr) => arr.reduce((a, b) => a + b, 0),
    nodeToArrayConverter = (nodelist) => Array.prototype.slice.call(nodelist),
    dataTablesPlugin = (table) => {
      let $table = $(table);

      // Init DataTables Plugin
      $table.DataTable({
        columnDefs: [
          {
            orderable: true,
            className: "select-checkbox",
            targets: 0,
          },
        ],
        select: {
          style: "os",
          selector: "td:first-child",
        },
      });

      // Adjust Some Elements
      let $dataTablesWrapper = $table.closest(".data-tables-section"),
        $dataTablesHeader = $dataTablesWrapper.find(".data-tables-header"),
        $datatables_length = $dataTablesWrapper
          .find(".dataTables_length")
          .addClass("d-flex align-items-center")
          .appendTo($dataTablesHeader),
        $datatables_filter = $dataTablesWrapper.find(".dataTables_filter"),
        $dataTables_info = $dataTablesWrapper.find(".dataTables_info"),
        $dataTables_Paginate = $dataTablesWrapper.find(".dataTables_paginate");

      $datatables_length
        .find("label")
        .addClass(
          "text-gray-600 text-uppercase font-size-xs letter-spacing-1 d-flex align-items-center"
        );

      $datatables_length
        .find("select")
        .addClass(
          "form-control custom-select text-gray-600 font-size-xs letter-spacing-1 mx-2"
        );

      $datatables_filter.addClass("px-3");

      $datatables_filter
        .find("label")
        .contents()
        .filter(function () {
          return this.nodeType == 3;
        })
        .remove();

      $datatables_filter
        .find("label")
        .addClass("text-gray-800 d-flex align-items-center mb-0 py-2")
        .prepend(
          `<svg class="bi" width="18" height="18" fill="currentColor"><use xlink:href="${bootstrapIcons}#search"/></svg>`
        );

      $datatables_filter
        .find("input")
        .addClass("form-control border-0 shadow-none pl-3")
        .attr("placeholder", "Type here to search");

      $($dataTables_info)
        .add($dataTables_Paginate)
        .wrapAll(
          '<div class="dataTables-footer d-flex align-items-center justify-content-between p-3"/>'
        );

      $dataTables_info.addClass(
        "text-gray-600 text-uppercase font-size-xs letter-spacing-1"
      );

      $dataTables_Paginate.addClass(
        "text-uppercase font-size-xs letter-spacing-1 d-flex align-items-center"
      );
    };

  const app = {
    appinit: () => {
      app.checkJs();
      app.onaData();
    },
    checkJs: () => {
      if (Modernizr) {
        $(html).removeClass("no-js").addClass("js");
      }
    },

    onaData: () => {
      const dataURL =
        "https://raw.githubusercontent.com/onaio/zim-data/master/demographics/zim-province/Zimbabwe%20Population%20Data%20-%20province.csv";

      const getCSVData = (fileURL) => {
        return new Promise(function (complete, error) {
          Papa.parse(fileURL, { download: true, complete, error });
        });
      };

      getCSVData(dataURL).then(function (results) {
        let response = results.data,
          // Clean up empty fields
          dataResults = response.filter((result) => result.length > 1);

        if (dataResults.length > 0) {
          let dataRep = {
            dataRepInit: () => {
              dataRep.dataTables();
            },
            dataTables: () => {
              // Create Data Tables
              let dataTablesContsElsArray = nodeToArrayConverter(
                dataTablesContsEls
              );

              // Loop Through each Data Table Wrapper
              dataTablesContsElsArray.forEach((dataTablesContsEl) => {
                // jQuerify each data table wrapper
                let $dataTablesContsEl = $(dataTablesContsEl),
                  $dataTablesContsElAncestor = $dataTablesContsEl.closest(
                    ".data-tables-section"
                  ),
                  // remove preloader
                  $preloaderParent = $dataTablesContsElAncestor
                    .find(".spinner")
                    .parent(".preloader-cont")
                    .removeClass("d-flex")
                    .addClass("d-none"),
                  // Append '<table>' element
                  $dataTable = $(
                    "<table class='table border-bottom border-gray-300 mb-0'/>"
                  ).appendTo($dataTablesContsEl),
                  // Append '<thead>' element
                  $dataTableTHead = $(
                    "<thead><tr class='bg-gray-200 text-gray-600 font-size-xs text-uppercase letter-spacing-1'/></thead>"
                  ).appendTo($dataTable),
                  //Select '<thead>' row
                  $dataTableTHeadRow = $dataTableTHead.find("tr"),
                  // Append '<tbody>' element
                  $dataTableTBody = $("<tbody/>").appendTo($dataTable),
                  // Select the first row of the CSV response for <thead> cell data
                  dataTableTHeadData = dataResults[0],
                  // Remove the first row of the CSV response for <tbody> cell data
                  dataTableTBodyData = dataResults.filter(function (
                    value,
                    index,
                    arr
                  ) {
                    return index > 0;
                  }),
                  populationPerProvince = dataTableTBodyData.map((el) =>
                    parseInt(el[4])
                  ),
                  totalCountryPopulation = arrSum(populationPerProvince);

                // Make the first row of the CSV response as '<th>'
                dataTableTHeadData.push("Country Share");
                dataTableTHeadData.forEach((singleDataTableTHeadData) => {
                  $dataTableTHeadRow.append(
                    `<th class="py-3 font-weight-normal">${singleDataTableTHeadData.replace(
                      /_/gi,
                      " "
                    )}</th>`
                  );
                });

                // Append subsequent rows after the first row of the CSV response to '<tbody>'
                dataTableTBodyData.forEach((dataTableTBodyRowData) => {
                  let $dataTableTBodyRow = $("<tr class='font-size-sm'>"),
                    provincePopulation = parseInt(dataTableTBodyRowData[4]),
                    countryShare =
                      (provincePopulation / totalCountryPopulation) * 100;

                  dataTableTBodyRowData.push(`${countryShare.toFixed(2)}%`);

                  dataTableTBodyRowData.forEach((dataTableTBodyCellData) => {
                    let $dataTableTBodyCell = $(
                      `<td>${dataTableTBodyCellData}</td>`
                    );

                    $dataTableTBodyRow.append($dataTableTBodyCell);
                  });

                  $dataTableTBodyRow.appendTo($dataTableTBody);
                });

                // Call Datatable Plugin
                dataTablesPlugin($dataTable);
              });
            },
          };

          dataRep.dataRepInit();
        }
      });
    },
  };
  $(document).ready(() => {
    app.appinit();
  });
})(jQuery);
