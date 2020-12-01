// Vendor Scripts
require("./vendor/modernizr/modernizr.min");
let $ = require("jquery");
require("@popperjs/core");
require("bootstrap");
require("datatables.net-dt")(window, $);
require("datatables.net-responsive-dt")(window, $);
require("datatables.net-searchpanes-dt")(window, $);
require("datatables.net-select-dt")(window, $);

//  Core JS
require("./assets/js/main");
