/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../src/assets/js/main.js":
/*!********************************!*\
  !*** ../src/assets/js/main.js ***!
  \********************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! papaparse */ "../node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery-exposed.js");
/**
 * ------------------------------------------------------------------------
 * More Imports
 * ------------------------------------------------------------------------
 */
// SVG Injector
 // Bootstrap Icons

var bootstrapIcons = __webpack_require__(/*! svg-url-loader!../imgs/svgs/bootstrap-icons/icons-sprite/bootstrap-icons.svg */ "../node_modules/svg-url-loader/index.js!../src/assets/imgs/svgs/bootstrap-icons/icons-sprite/bootstrap-icons.svg");
/**
 * ------------------------------------------------------------------------
 * Main JS Functions
 * ------------------------------------------------------------------------
 */


(function ($) {
  "use strict";

  var windowEl = window,
      html = document.html,
      bodyEl = document.body,
      bgImgsEls = document.querySelectorAll(".bg-img"),
      dataTablesContsEls = document.querySelectorAll(".data-tables"),
      arrSum = function arrSum(arr) {
    return arr.reduce(function (a, b) {
      return a + b;
    }, 0);
  },
      nodeToArrayConverter = function nodeToArrayConverter(nodelist) {
    return Array.prototype.slice.call(nodelist);
  },
      imgToBg = function imgToBg(el) {
    var img = el.querySelector("img"),
        imgUrl = img.getAttribute("src");
    el.style.backgroundImage = "url(" + imgUrl + ")";
    $(img).remove();
  },
      dataTablesPlugin = function dataTablesPlugin(table) {
    var $table = $(table); // Init DataTables Plugin

    $table.DataTable({
      columnDefs: [{
        orderable: true,
        className: "select-checkbox",
        targets: 0
      }],
      select: {
        style: "os",
        selector: "td:first-child"
      }
    }); // Adjust Some Elements

    var $dataTablesWrapper = $table.closest(".data-tables-section"),
        $dataTablesHeader = $dataTablesWrapper.find(".data-tables-header"),
        $datatables_length = $dataTablesWrapper.find(".dataTables_length").addClass("d-flex align-items-center").appendTo($dataTablesHeader),
        $datatables_filter = $dataTablesWrapper.find(".dataTables_filter"),
        $dataTables_info = $dataTablesWrapper.find(".dataTables_info"),
        $dataTables_Paginate = $dataTablesWrapper.find(".dataTables_paginate");
    $datatables_length.find("label").addClass("text-gray-600 text-uppercase font-size-xs letter-spacing-1 d-flex align-items-center");
    $datatables_length.find("select").addClass("form-control custom-select text-gray-600 font-size-xs letter-spacing-1 mx-2");
    $datatables_filter.addClass("px-3");
    $datatables_filter.find("label").contents().filter(function () {
      return this.nodeType == 3;
    }).remove();
    $datatables_filter.find("label").addClass("text-gray-800 d-flex align-items-center mb-0 py-2").prepend("<svg class=\"bi\" width=\"18\" height=\"18\" fill=\"currentColor\"><use xlink:href=\"".concat(bootstrapIcons, "#search\"/></svg>"));
    $datatables_filter.find("input").addClass("form-control border-0 shadow-none pl-3").attr("placeholder", "Type here to search");
    $($dataTables_info).add($dataTables_Paginate).wrapAll('<div class="dataTables-footer d-flex align-items-center justify-content-between p-3"/>');
    $dataTables_info.addClass("text-gray-600 text-uppercase font-size-xs letter-spacing-1");
    $dataTables_Paginate.addClass("text-uppercase font-size-xs letter-spacing-1 d-flex align-items-center");
  };

  var app = {
    appinit: function appinit() {
      app.checkJs();
      app.bgImgs();
      app.dataTables();
      app.onaData();
    },
    checkJs: function checkJs() {
      if (Modernizr) {
        $(html).removeClass("no-js").addClass("js");
      }
    },
    bgImgs: function bgImgs() {
      var allBgImgsConts = [],
          bgImgsArray = nodeToArrayConverter(bgImgsEls);
      allBgImgsConts = allBgImgsConts.concat(bgImgsArray);
      allBgImgsConts.forEach(function (bgImgCont) {
        imgToBg(bgImgCont);
      });
    },
    dataTables: function dataTables() {
      var $dataTablesEls = $(".table-test");
      $dataTablesEls.DataTable({
        columnDefs: [{
          orderable: true,
          className: "select-checkbox",
          targets: 0
        }],
        select: {
          style: "os",
          selector: "td:first-child"
        }
      });
    },
    onaData: function onaData() {
      var dataURL = "https://raw.githubusercontent.com/onaio/zim-data/master/demographics/zim-province/Zimbabwe%20Population%20Data%20-%20province.csv";
      papaparse__WEBPACK_IMPORTED_MODULE_0___default().parse(dataURL, {
        download: true,
        complete: function complete(results) {
          var response = results.data,
              // Clean up empty fields
          dataResults = response.filter(function (result) {
            return result.length > 1;
          });

          if (dataResults.length > 0) {
            var dataRep = {
              dataRepInit: function dataRepInit() {
                dataRep.dataTables();
              },
              dataTables: function dataTables() {
                // Create Data Tables
                var dataTablesContsElsArray = nodeToArrayConverter(dataTablesContsEls); // Loop Through each Data Table Wrapper

                dataTablesContsElsArray.forEach(function (dataTablesContsEl) {
                  // jQuerify each data table wrapper
                  var $dataTablesContsEl = $(dataTablesContsEl),
                      // Append '<table>' element
                  $dataTable = $("<table class='table border-bottom border-gray-300 mb-0'/>").appendTo($dataTablesContsEl),
                      // Append '<thead>' element
                  $dataTableTHead = $("<thead><tr class='bg-gray-200 text-gray-600 font-size-xs text-uppercase letter-spacing-1'/></thead>").appendTo($dataTable),
                      //Select '<thead>' row
                  $dataTableTHeadRow = $dataTableTHead.find("tr"),
                      // Append '<tbody>' element
                  $dataTableTBody = $("<tbody/>").appendTo($dataTable),
                      // Select the first row of the CSV response for <thead> cell data
                  dataTableTHeadData = dataResults[0],
                      // Remove the first row of the CSV response for <tbody> cell data
                  dataTableTBodyData = dataResults.filter(function (value, index, arr) {
                    return index > 0;
                  }),
                      populationPerProvince = dataTableTBodyData.map(function (el) {
                    return parseInt(el[4]);
                  }),
                      totalCountryPopulation = arrSum(populationPerProvince); // Make the first row of the CSV response as '<th>'

                  dataTableTHeadData.push("Country Share");
                  dataTableTHeadData.forEach(function (singleDataTableTHeadData) {
                    $dataTableTHeadRow.append("<th class=\"py-3 font-weight-normal\">".concat(singleDataTableTHeadData.replace(/_/gi, " "), "</th>"));
                  }); // Append subsequent rows after the first row of the CSV response to '<tbody>'

                  dataTableTBodyData.forEach(function (dataTableTBodyRowData) {
                    var $dataTableTBodyRow = $("<tr class='font-size-sm'>"),
                        provincePopulation = parseInt(dataTableTBodyRowData[4]),
                        countryShare = provincePopulation / totalCountryPopulation * 100;
                    dataTableTBodyRowData.push("".concat(countryShare.toFixed(2), "%"));
                    dataTableTBodyRowData.forEach(function (dataTableTBodyCellData) {
                      var $dataTableTBodyCell = $("<td>".concat(dataTableTBodyCellData, "</td>"));
                      $dataTableTBodyRow.append($dataTableTBodyCell);
                    });
                    $dataTableTBodyRow.appendTo($dataTableTBody);
                  }); // Call Datatable Plugin

                  dataTablesPlugin($dataTable);
                });
              }
            };
            dataRep.dataRepInit();
          }
        }
      });
    }
  };
  $(document).ready(function () {
    app.appinit();
  });
})(jQuery);

/***/ }),

/***/ "../node_modules/jquery/dist/jquery-exposed.js":
/*!*****************************************************!*\
  !*** ../node_modules/jquery/dist/jquery-exposed.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ___EXPOSE_LOADER_IMPORT___ = __webpack_require__(/*! -!./jquery.js */ "../node_modules/jquery/dist/jquery.js");
var ___EXPOSE_LOADER_GET_GLOBAL_THIS___ = __webpack_require__(/*! ../../expose-loader/dist/runtime/getGlobalThis.js */ "../node_modules/expose-loader/dist/runtime/getGlobalThis.js");
var ___EXPOSE_LOADER_GLOBAL_THIS___ = ___EXPOSE_LOADER_GET_GLOBAL_THIS___;
___EXPOSE_LOADER_GLOBAL_THIS___["$"] = ___EXPOSE_LOADER_IMPORT___;
___EXPOSE_LOADER_GLOBAL_THIS___["jquery"] = ___EXPOSE_LOADER_IMPORT___;
___EXPOSE_LOADER_GLOBAL_THIS___["jQuery"] = ___EXPOSE_LOADER_IMPORT___;
module.exports = ___EXPOSE_LOADER_IMPORT___;


/***/ }),

/***/ "../node_modules/expose-loader/dist/runtime/getGlobalThis.js":
/*!*******************************************************************!*\
  !*** ../node_modules/expose-loader/dist/runtime/getGlobalThis.js ***!
  \*******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.g, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// eslint-disable-next-line func-names
module.exports = function () {
  if (typeof globalThis === "object") {
    return globalThis;
  }

  var g;

  try {
    // This works if eval is allowed (see CSP)
    // eslint-disable-next-line no-new-func
    g = this || new Function("return this")();
  } catch (e) {
    // This works if the window reference is available
    if (typeof window === "object") {
      return window;
    } // This works if the self reference is available


    if (typeof self === "object") {
      return self;
    } // This works if the global reference is available


    if (typeof __webpack_require__.g !== "undefined") {
      return __webpack_require__.g;
    }
  }

  return g;
}();

/***/ }),

/***/ "../node_modules/jquery/dist/jquery.js":
/*!*********************************************!*\
  !*** ../node_modules/jquery/dist/jquery.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, top-level-this-exports, __webpack_exports__ */
/*! CommonJS bailout: this is used directly at 40:46-50 */
/*! CommonJS bailout: module.exports is used directly at 18:43-57 */
/*! CommonJS bailout: module.exports is used directly at 27:2-16 */
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "../node_modules/papaparse/papaparse.min.js":
/*!**************************************************!*\
  !*** ../node_modules/papaparse/papaparse.min.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, module */
/*! CommonJS bailout: this is used directly at 7:150-154 */
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.3.0
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,b={parse:function(e,t){var i=(t=t||{}).dynamicTyping||!1;U(i)&&(t.dynamicTypingFunction=i,i={});if(t.dynamicTyping=i,t.transform=!!U(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var r=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(i=f.URL||f.webkitURL||null,r=s.toString(),b.BLOB_URL||(b.BLOB_URL=i.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var i,r;return t.onmessage=m,t.id=h++,a[t.id]=t}();return r.userStep=t.step,r.userChunk=t.chunk,r.userComplete=t.complete,r.userError=t.error,t.step=U(t.step),t.chunk=U(t.chunk),t.complete=U(t.complete),t.error=U(t.error),delete t.worker,void r.postMessage({input:e,config:t,workerId:r.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&U(e.read)&&U(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,m=!0,_=",",v="\r\n",s='"',a=s+s,i=!1,r=null,o=!1;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(_=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(i=t.skipEmptyLines);"string"==typeof t.newline&&(v=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(m=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");r=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s);"boolean"==typeof t.escapeFormulae&&(o=t.escapeFormulae)}();var h=new RegExp(q(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,i);if("object"==typeof e[0])return f(r||u(e[0]),e,i)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:u(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],i);throw new Error("Unable to serialize unrecognized input");function u(e){if("object"!=typeof e)return[];var t=[];for(var i in e)t.push(i);return t}function f(e,t,i){var r="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&m){for(var a=0;a<e.length;a++)0<a&&(r+=_),r+=y(e[a],a);0<t.length&&(r+=v)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(i&&!n&&(u="greedy"===i?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===i&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(r+=_);var g=n&&s?e[p]:p;r+=y(t[o][g],p)}o<t.length-1&&(!i||0<h&&!f)&&(r+=v)}}return r}function y(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===o&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var i=e.toString().replace(h,a),r="boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(_)||" "===i.charAt(0)||" "===i.charAt(i.length-1);return r?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=w,b.ParserHandle=i,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var i=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},i)})}),e(),this;function e(){if(0!==h.length){var e,t,i,r,n=h[0];if(U(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,i=n.inputElem,r=s.reason,void(U(o.error)&&o.error({name:e},t,i,r));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){U(a)&&a(e,n.file,n.inputElem),u()},b.parse(n.file,n.instanceConfig)}else U(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=E(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new i(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&U(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e;this._partialLine="";var n=this._handle.parse(r,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=r.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(U(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!U(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){U(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var r;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(r=new XMLHttpRequest,this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),n||(r.onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)),r.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)r.setRequestHeader(t,e[t])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;r.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{r.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===r.status&&this._chunkError()}},this._chunkLoaded=function(){4===r.readyState&&(r.status<200||400<=r.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:r.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substring(t.lastIndexOf("/")+1))}(r),this.parseChunk(r.responseText)))},this._chunkError=function(e){var t=r.statusText||e;this._sendError(new Error(t))}}function c(e){var r,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((r=new FileReader).onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)):r=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var i=r.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(r.error)}}function p(e){var i;u.call(this,e=e||{}),this.stream=function(e){return i=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=i.substring(0,t),i=i.substring(t)):(e=i,i=""),this._finished=!i,this.parseChunk(e)}}}function g(e){u.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=y(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function i(_){var a,o,h,r=Math.pow(2,53),n=-r,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,i=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(U(_.step)){var p=_.step;_.step=function(e){if(c=e,m())g();else{if(g(),0===c.data.length)return;i+=e.data.length,_.preview&&i>_.preview?o.abort():(c.data=c.data[0],p(c,t))}}}function v(e){return"greedy"===_.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function g(){if(c&&h&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),h=!1),_.skipEmptyLines)for(var e=0;e<c.data.length;e++)v(c.data[e])&&c.data.splice(e--,1);return m()&&function(){if(!c)return;function e(e,t){U(_.transformHeader)&&(e=_.transformHeader(e,t)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;m()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!_.header&&!_.dynamicTyping&&!_.transform)return c;function e(e,t){var i,r=_.header?{}:[];for(i=0;i<e.length;i++){var n=i,s=e[i];_.header&&(n=i>=l.length?"__parsed_extra":l[i]),_.transform&&(s=_.transform(s,n)),s=y(n,s),"__parsed_extra"===n?(r[n]=r[n]||[],r[n].push(s)):r[n]=s}return _.header&&(i>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+i,f+t):i<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+i,f+t)),r}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);_.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function m(){return _.header&&0===l.length}function y(e,t){return i=e,_.dynamicTypingFunction&&void 0===_.dynamicTyping[i]&&(_.dynamicTyping[i]=_.dynamicTypingFunction(i)),!0===(_.dynamicTyping[i]||_.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<r)return!0}return!1}(t)?parseFloat(t):u.test(t)?new Date(t):""===t?null:t):t;var i}function k(e,t,i,r){var n={type:e,code:t,message:i};void 0!==r&&(n.row=r),c.errors.push(n)}this.parse=function(e,t,i){var r=_.quoteChar||'"';if(_.newline||(_.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(q(t)+"([^]*?)"+q(t),"gm"),r=(e=e.replace(i,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<r[0].length;if(1===r.length||s)return"\n";for(var a=0,o=0;o<r.length;o++)"\n"===r[o][0]&&a++;return a>=r.length/2?"\r\n":"\r"}(e,r)),h=!1,_.delimiter)U(_.delimiter)&&(_.delimiter=_.delimiter(e),c.meta.delimiter=_.delimiter);else{var n=function(e,t,i,r,n){var s,a,o,h;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<n.length;u++){var f=n[u],d=0,l=0,c=0;o=void 0;for(var p=new w({comments:r,delimiter:f,newline:t,preview:10}).parse(e),g=0;g<p.data.length;g++)if(i&&v(p.data[g]))c++;else{var m=p.data[g].length;l+=m,void 0!==o?0<m&&(d+=Math.abs(m-o),o=m):o=m}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===h||h<l)&&1.99<l&&(a=d,s=f,h=l)}return{successful:!!(_.delimiter=s),bestDelimiter:s}}(e,_.newline,_.skipEmptyLines,_.comments,_.delimitersToGuess);n.successful?_.delimiter=n.bestDelimiter:(h=!0,_.delimiter=b.DefaultDelimiter),c.meta.delimiter=_.delimiter}var s=E(_);return _.preview&&_.header&&s.preview++,a=e,o=new w(s),c=o.parse(a,t,i),g(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=U(_.chunk)?"":a.substring(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(t.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,U(_.complete)&&_.complete(c),a=""}}function q(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function w(e){var O,D=(e=e||{}).delimiter,I=e.newline,T=e.comments,A=e.step,L=e.preview,F=e.fastMode,z=O=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(z=e.escapeChar),("string"!=typeof D||-1<b.BAD_DELIMITERS.indexOf(D))&&(D=","),T===D)throw new Error("Comment character same as delimiter");!0===T?T="#":("string"!=typeof T||-1<b.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==I&&"\r"!==I&&"\r\n"!==I&&(I="\n");var M=0,j=!1;this.parse=function(a,t,i){if("string"!=typeof a)throw new Error("Input must be a string");var r=a.length,e=D.length,n=I.length,s=T.length,o=U(A),h=[],u=[],f=[],d=M=0;if(!a)return R();if(F||!1!==F&&-1===a.indexOf(O)){for(var l=a.split(I),c=0;c<l.length;c++){if(f=l[c],M+=f.length,c!==l.length-1)M+=I.length;else if(i)return R();if(!T||f.substring(0,s)!==T){if(o){if(h=[],b(f.split(D)),S(),j)return R()}else b(f.split(D));if(L&&L<=c)return h=h.slice(0,L),R(!0)}}return R()}for(var p=a.indexOf(D,M),g=a.indexOf(I,M),m=new RegExp(q(z)+q(O),"g"),_=a.indexOf(O,M);;)if(a[M]!==O)if(T&&0===f.length&&a.substring(M,M+s)===T){if(-1===g)return R();M=g+n,g=a.indexOf(I,M),p=a.indexOf(D,M)}else{if(-1!==p&&(p<g||-1===g)){if(!(p<_)){f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}var v=x(p,_,g);if(v&&void 0!==v.nextDelim){p=v.nextDelim,_=v.quoteSearch,f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}}if(-1===g)break;if(f.push(a.substring(M,g)),C(g+n),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0)}else for(_=M,M++;;){if(-1===(_=a.indexOf(O,_+1)))return i||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:M}),E();if(_===r-1)return E(a.substring(M,_).replace(m,O));if(O!==z||a[_+1]!==z){if(O===z||0===_||a[_-1]!==z){-1!==p&&p<_+1&&(p=a.indexOf(D,_+1)),-1!==g&&g<_+1&&(g=a.indexOf(I,_+1));var y=w(-1===g?p:Math.min(p,g));if(a[_+1+y]===D){f.push(a.substring(M,_).replace(m,O)),a[M=_+1+y+e]!==O&&(_=a.indexOf(O,M)),p=a.indexOf(D,M),g=a.indexOf(I,M);break}var k=w(g);if(a.substring(_+1+k,_+1+k+n)===I){if(f.push(a.substring(M,_).replace(m,O)),C(_+1+k+n),p=a.indexOf(D,M),_=a.indexOf(O,M),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:M}),_++}}else _++}return E();function b(e){h.push(e),d=M}function w(e){var t=0;if(-1!==e){var i=a.substring(_+1,e);i&&""===i.trim()&&(t=i.length)}return t}function E(e){return i||(void 0===e&&(e=a.substring(M)),f.push(e),M=r,b(f),o&&S()),R()}function C(e){M=e,b(f),f=[],g=a.indexOf(I,M)}function R(e){return{data:h,errors:u,meta:{delimiter:D,linebreak:I,aborted:j,truncated:!!e,cursor:d+(t||0)}}}function S(){A(R()),h=[],u=[]}function x(e,t,i){var r={nextDelim:void 0,quoteSearch:void 0},n=a.indexOf(O,t+1);if(t<e&&e<n&&(n<i||-1===i)){var s=a.indexOf(D,n);if(-1===s)return r;n<s&&(n=a.indexOf(O,n+1)),r=x(s,n,i)}else r={nextDelim:e,quoteSearch:t};return r}},this.abort=function(){j=!0},this.getCharIndex=function(){return M}}function m(e){var t=e.data,i=a[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(U(i.userStep)){for(var s=0;s<t.results.data.length&&(i.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!r);s++);delete t.results}else U(i.userChunk)&&(i.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var i=a[e];U(i.userComplete)&&i.userComplete(t),i.terminate(),delete a[e]}function v(){throw new Error("Not implemented.")}function E(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=E(e[i]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function U(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var i=b.parse(t.input,t.config);i&&f.postMessage({workerId:b.WORKER_ID,results:i,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(u.prototype)).constructor=g,b});

/***/ }),

/***/ "../node_modules/svg-url-loader/index.js!../src/assets/imgs/svgs/bootstrap-icons/icons-sprite/bootstrap-icons.svg":
/*!************************************************************************************************************************!*\
  !*** ../node_modules/svg-url-loader/index.js!../src/assets/imgs/svgs/bootstrap-icons/icons-sprite/bootstrap-icons.svg ***!
  \************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 1:0-14 */
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3csymbol viewBox='0 0 16 16' class='bi bi-alarm' fill='currentColor' id='alarm' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.5 0a.5.5 0 000 1H7v1.07a7.001 7.001 0 00-3.273 12.474l-.602.602a.5.5 0 00.707.708l.746-.746A6.97 6.97 0 008 16a6.97 6.97 0 003.422-.892l.746.746a.5.5 0 00.707-.708l-.601-.602A7.001 7.001 0 009 2.07V1h.5a.5.5 0 000-1h-3zm1.038 3.018a6.093 6.093 0 01.924 0 6 6 0 11-.924 0zM8.5 5.5a.5.5 0 00-1 0v3.362l-1.429 2.38a.5.5 0 10.858.515l1.5-2.5A.5.5 0 008.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 014.387 1.86 2.5 2.5 0 000 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 013.527 3.527A2.5 2.5 0 0013.5 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-alarm-fill' fill='currentColor' id='alarm-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 .5a.5.5 0 01.5-.5h3a.5.5 0 010 1H9v1.07a7.001 7.001 0 013.274 12.474l.601.602a.5.5 0 01-.707.708l-.746-.746A6.97 6.97 0 018 16a6.97 6.97 0 01-3.422-.892l-.746.746a.5.5 0 01-.707-.708l.602-.602A7.001 7.001 0 017 2.07V1h-.5A.5.5 0 016 .5zM.86 5.387A2.5 2.5 0 114.387 1.86 8.035 8.035 0 00.86 5.387zM11.613 1.86a2.5 2.5 0 113.527 3.527 8.035 8.035 0 00-3.527-3.527zM8.5 5.5a.5.5 0 00-1 0v3.362l-1.429 2.38a.5.5 0 10.858.515l1.5-2.5A.5.5 0 008.5 9V5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-align-bottom' fill='currentColor' id='align-bottom' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6 2a1 1 0 011-1h2a1 1 0 011 1v10a1 1 0 01-1 1H7a1 1 0 01-1-1V2z'/%3e%3cpath fill-rule='evenodd' d='M1 14.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-align-center' fill='currentColor' id='align-center' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8 1a.5.5 0 01.5.5V6h-1V1.5A.5.5 0 018 1zm0 14a.5.5 0 01-.5-.5V10h1v4.5a.5.5 0 01-.5.5zM2 7a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-align-end' fill='currentColor' id='align-end' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.5 1a.5.5 0 00-.5.5v13a.5.5 0 001 0v-13a.5.5 0 00-.5-.5z'/%3e%3cpath d='M13 7a1 1 0 00-1-1H2a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1V7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-align-middle' fill='currentColor' id='align-middle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6 13a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 00-1-1H7a1 1 0 00-1 1v10zM1 8a.5.5 0 00.5.5H6v-1H1.5A.5.5 0 001 8zm14 0a.5.5 0 01-.5.5H10v-1h4.5a.5.5 0 01.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-align-start' fill='currentColor' id='align-start' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.5 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z'/%3e%3cpath d='M3 7a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-align-top' fill='currentColor' id='align-top' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6 14a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1H7a1 1 0 00-1 1v10z'/%3e%3cpath fill-rule='evenodd' d='M1 1.5a.5.5 0 00.5.5h13a.5.5 0 000-1h-13a.5.5 0 00-.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-alt' fill='currentColor' id='alt' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 13.5a.5.5 0 00.5.5h3.797a.5.5 0 00.439-.26L11 3h3.5a.5.5 0 000-1h-3.797a.5.5 0 00-.439.26L5 13H1.5a.5.5 0 00-.5.5zm10 0a.5.5 0 00.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-app' fill='currentColor' id='app' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11 2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V5a3 3 0 00-3-3zM5 1a4 4 0 00-4 4v6a4 4 0 004 4h6a4 4 0 004-4V5a4 4 0 00-4-4H5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-app-indicator' fill='currentColor' id='app-indicator' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.5 2A3.5 3.5 0 002 5.5v5A3.5 3.5 0 005.5 14h5a3.5 3.5 0 003.5-3.5V8a.5.5 0 011 0v2.5a4.5 4.5 0 01-4.5 4.5h-5A4.5 4.5 0 011 10.5v-5A4.5 4.5 0 015.5 1H8a.5.5 0 010 1H5.5z'/%3e%3cpath d='M16 3a3 3 0 11-6 0 3 3 0 016 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-archive' fill='currentColor' id='archive' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1v7.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 12.5V5a1 1 0 01-1-1V2zm2 3v7.5A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-archive-fill' fill='currentColor' id='archive-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7a.5.5 0 000 1h5a.5.5 0 000-1h-5zM.8 1a.8.8 0 00-.8.8V3a.8.8 0 00.8.8h14.4A.8.8 0 0016 3V1.8a.8.8 0 00-.8-.8H.8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-90deg-down' fill='currentColor' id='arrow-90deg-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.854 14.854a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L4 13.293V3.5A2.5 2.5 0 016.5 1h8a.5.5 0 010 1h-8A1.5 1.5 0 005 3.5v9.793l3.146-3.147a.5.5 0 01.708.708l-4 4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-90deg-left' fill='currentColor' id='arrow-90deg-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.146 4.854a.5.5 0 010-.708l4-4a.5.5 0 11.708.708L2.707 4H12.5A2.5 2.5 0 0115 6.5v8a.5.5 0 01-1 0v-8A1.5 1.5 0 0012.5 5H2.707l3.147 3.146a.5.5 0 11-.708.708l-4-4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-90deg-right' fill='currentColor' id='arrow-90deg-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.854 4.854a.5.5 0 000-.708l-4-4a.5.5 0 00-.708.708L13.293 4H3.5A2.5 2.5 0 001 6.5v8a.5.5 0 001 0v-8A1.5 1.5 0 013.5 5h9.793l-3.147 3.146a.5.5 0 00.708.708l4-4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-90deg-up' fill='currentColor' id='arrow-90deg-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.854 1.146a.5.5 0 00-.708 0l-4 4a.5.5 0 10.708.708L4 2.707V12.5A2.5 2.5 0 006.5 15h8a.5.5 0 000-1h-8A1.5 1.5 0 015 12.5V2.707l3.146 3.147a.5.5 0 10.708-.708l-4-4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-bar-down' fill='currentColor' id='arrow-bar-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 3.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM8 6a.5.5 0 01.5.5v5.793l2.146-2.147a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L7.5 12.293V6.5A.5.5 0 018 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-bar-left' fill='currentColor' id='arrow-bar-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12.5 15a.5.5 0 01-.5-.5v-13a.5.5 0 011 0v13a.5.5 0 01-.5.5zM10 8a.5.5 0 01-.5.5H3.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L3.707 7.5H9.5a.5.5 0 01.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-bar-right' fill='currentColor' id='arrow-bar-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 8a.5.5 0 00.5.5h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 00-.708.708L12.293 7.5H6.5A.5.5 0 006 8zm-2.5 7a.5.5 0 01-.5-.5v-13a.5.5 0 011 0v13a.5.5 0 01-.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-bar-up' fill='currentColor' id='arrow-bar-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 10a.5.5 0 00.5-.5V3.707l2.146 2.147a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L7.5 3.707V9.5a.5.5 0 00.5.5zm-7 2.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-clockwise' fill='currentColor' id='arrow-clockwise' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 3a5 5 0 104.546 2.914.5.5 0 01.908-.417A6 6 0 118 2v1z'/%3e%3cpath d='M8 4.466V.534a.25.25 0 01.41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 018 4.466z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-counterclockwise' fill='currentColor' id='arrow-counterclockwise' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 3a5 5 0 11-4.546 2.914.5.5 0 00-.908-.417A6 6 0 108 2v1z'/%3e%3cpath d='M8 4.466V.534a.25.25 0 00-.41-.192L5.23 2.308a.25.25 0 000 .384l2.36 1.966A.25.25 0 008 4.466z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down' fill='currentColor' id='arrow-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-circle' fill='currentColor' id='arrow-down-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M8 4a.5.5 0 01.5.5v5.793l2.146-2.147a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L7.5 10.293V4.5A.5.5 0 018 4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-circle-fill' fill='currentColor' id='arrow-down-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4.5a.5.5 0 00-1 0v5.793L5.354 8.146a.5.5 0 10-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V4.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-left' fill='currentColor' id='arrow-down-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 13.5a.5.5 0 00.5.5h6a.5.5 0 000-1H3.707L13.854 2.854a.5.5 0 00-.708-.708L3 12.293V7.5a.5.5 0 00-1 0v6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-left-circle' fill='currentColor' id='arrow-down-left-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M10.828 5.172a.5.5 0 00-.707 0L6.025 9.268V6.5a.5.5 0 00-1 0v3.975a.5.5 0 00.5.5H9.5a.5.5 0 000-1H6.732l4.096-4.096a.5.5 0 000-.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-left-circle-fill' fill='currentColor' id='arrow-down-left-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zm-5.879-2.828a.5.5 0 11.707.707L6.732 9.975H9.5a.5.5 0 110 1H5.525a.5.5 0 01-.5-.5V6.5a.5.5 0 111 0v2.768l4.096-4.096z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-left-square' fill='currentColor' id='arrow-down-left-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M10.828 5.172a.5.5 0 00-.707 0L6.025 9.268V6.5a.5.5 0 00-1 0v3.975a.5.5 0 00.5.5H9.5a.5.5 0 000-1H6.732l4.096-4.096a.5.5 0 000-.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-left-square-fill' fill='currentColor' id='arrow-down-left-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm8.121 5.172a.5.5 0 11.707.707L6.732 9.975H9.5a.5.5 0 110 1H5.525a.5.5 0 01-.5-.5V6.5a.5.5 0 111 0v2.768l4.096-4.096z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-right' fill='currentColor' id='arrow-down-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 13.5a.5.5 0 01-.5.5h-6a.5.5 0 010-1h4.793L2.146 2.854a.5.5 0 11.708-.708L13 12.293V7.5a.5.5 0 011 0v6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-right-circle' fill='currentColor' id='arrow-down-right-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M5.172 5.172a.5.5 0 01.707 0l4.096 4.096V6.5a.5.5 0 111 0v3.975a.5.5 0 01-.5.5H6.5a.5.5 0 010-1h2.768L5.172 5.879a.5.5 0 010-.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-right-circle-fill' fill='currentColor' id='arrow-down-right-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zM5.879 5.172a.5.5 0 00-.707.707l4.096 4.096H6.5a.5.5 0 100 1h3.975a.5.5 0 00.5-.5V6.5a.5.5 0 00-1 0v2.768L5.879 5.172z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-right-square' fill='currentColor' id='arrow-down-right-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M5.172 5.172a.5.5 0 01.707 0l4.096 4.096V6.5a.5.5 0 111 0v3.975a.5.5 0 01-.5.5H6.5a.5.5 0 010-1h2.768L5.172 5.879a.5.5 0 010-.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-right-square-fill' fill='currentColor' id='arrow-down-right-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm3.879 5.172a.5.5 0 00-.707.707l4.096 4.096H6.5a.5.5 0 100 1h3.975a.5.5 0 00.5-.5V6.5a.5.5 0 00-1 0v2.768L5.879 5.172z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-short' fill='currentColor' id='arrow-down-short' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 4a.5.5 0 01.5.5v5.793l2.146-2.147a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L7.5 10.293V4.5A.5.5 0 018 4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-square' fill='currentColor' id='arrow-down-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M8 4a.5.5 0 01.5.5v5.793l2.146-2.147a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L7.5 10.293V4.5A.5.5 0 018 4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-square-fill' fill='currentColor' id='arrow-down-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm6.5 4.5a.5.5 0 00-1 0v5.793L5.354 8.146a.5.5 0 10-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V4.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-down-up' fill='currentColor' id='arrow-down-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.5 15a.5.5 0 00.5-.5V2.707l3.146 3.147a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 10.708.708L11 2.707V14.5a.5.5 0 00.5.5zm-7-14a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L4 13.293V1.5a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-left' fill='currentColor' id='arrow-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-left-circle' fill='currentColor' id='arrow-left-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-left-circle-fill' fill='currentColor' id='arrow-left-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zm-4.5.5a.5.5 0 000-1H5.707l2.147-2.146a.5.5 0 10-.708-.708l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708-.708L5.707 8.5H11.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-left-right' fill='currentColor' id='arrow-left-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 11.5a.5.5 0 00.5.5h11.793l-3.147 3.146a.5.5 0 00.708.708l4-4a.5.5 0 000-.708l-4-4a.5.5 0 00-.708.708L13.293 11H1.5a.5.5 0 00-.5.5zm14-7a.5.5 0 01-.5.5H2.707l3.147 3.146a.5.5 0 11-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 11.708.708L2.707 4H14.5a.5.5 0 01.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-left-short' fill='currentColor' id='arrow-left-short' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-left-square' fill='currentColor' id='arrow-left-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-left-square-fill' fill='currentColor' id='arrow-left-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm9.5 8.5a.5.5 0 000-1H5.707l2.147-2.146a.5.5 0 10-.708-.708l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708-.708L5.707 8.5H11.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-repeat' fill='currentColor' id='arrow-repeat' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M11.534 7h3.932a.25.25 0 01.192.41l-1.966 2.36a.25.25 0 01-.384 0l-1.966-2.36a.25.25 0 01.192-.41zm-11 2h3.932a.25.25 0 00.192-.41L2.692 6.23a.25.25 0 00-.384 0L.342 8.59A.25.25 0 00.534 9z'/%3e%3cpath fill-rule='evenodd' d='M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 11-.771-.636A6.002 6.002 0 0113.917 7H12.9A5.002 5.002 0 008 3zM3.1 9a5.002 5.002 0 008.757 2.182.5.5 0 11.771.636A6.002 6.002 0 012.083 9H3.1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-return-left' fill='currentColor' id='arrow-return-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.5 1.5a.5.5 0 01.5.5v4.8a2.5 2.5 0 01-2.5 2.5H2.707l3.347 3.346a.5.5 0 01-.708.708l-4.2-4.2a.5.5 0 010-.708l4-4a.5.5 0 11.708.708L2.707 8.3H12.5A1.5 1.5 0 0014 6.8V2a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-return-right' fill='currentColor' id='arrow-return-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.5 1.5A.5.5 0 001 2v4.8a2.5 2.5 0 002.5 2.5h9.793l-3.347 3.346a.5.5 0 00.708.708l4.2-4.2a.5.5 0 000-.708l-4-4a.5.5 0 00-.708.708L13.293 8.3H3.5A1.5 1.5 0 012 6.8V2a.5.5 0 00-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-right' fill='currentColor' id='arrow-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-right-circle' fill='currentColor' id='arrow-right-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M4 8a.5.5 0 00.5.5h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H4.5A.5.5 0 004 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-right-circle-fill' fill='currentColor' id='arrow-right-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zm-11.5.5a.5.5 0 010-1h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-right-short' fill='currentColor' id='arrow-right-short' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-right-square' fill='currentColor' id='arrow-right-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M4 8a.5.5 0 00.5.5h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H4.5A.5.5 0 004 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-right-square-fill' fill='currentColor' id='arrow-right-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm2.5 8.5a.5.5 0 010-1h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up' fill='currentColor' id='arrow-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15a.5.5 0 00.5-.5V2.707l3.146 3.147a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 10.708.708L7.5 2.707V14.5a.5.5 0 00.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-circle' fill='currentColor' id='arrow-up-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M8 12a.5.5 0 00.5-.5V5.707l2.146 2.147a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L7.5 5.707V11.5a.5.5 0 00.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-circle-fill' fill='currentColor' id='arrow-up-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zm-7.5 3.5a.5.5 0 01-1 0V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V11.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-left' fill='currentColor' id='arrow-up-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2.5a.5.5 0 01.5-.5h6a.5.5 0 010 1H3.707l10.147 10.146a.5.5 0 01-.708.708L3 3.707V8.5a.5.5 0 01-1 0v-6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-left-circle' fill='currentColor' id='arrow-up-left-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M10.828 10.828a.5.5 0 01-.707 0L6.025 6.732V9.5a.5.5 0 01-1 0V5.525a.5.5 0 01.5-.5H9.5a.5.5 0 010 1H6.732l4.096 4.096a.5.5 0 010 .707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-left-circle-fill' fill='currentColor' id='arrow-up-left-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zm-5.879 2.828a.5.5 0 10.707-.707L6.732 6.025H9.5a.5.5 0 000-1H5.525a.5.5 0 00-.5.5V9.5a.5.5 0 101 0V6.732l4.096 4.096z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-left-square' fill='currentColor' id='arrow-up-left-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M10.828 10.828a.5.5 0 01-.707 0L6.025 6.732V9.5a.5.5 0 01-1 0V5.525a.5.5 0 01.5-.5H9.5a.5.5 0 010 1H6.732l4.096 4.096a.5.5 0 010 .707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-left-square-fill' fill='currentColor' id='arrow-up-left-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm8.121 10.828a.5.5 0 10.707-.707L6.732 6.025H9.5a.5.5 0 000-1H5.525a.5.5 0 00-.5.5V9.5a.5.5 0 001 0V6.732l4.096 4.096z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-right' fill='currentColor' id='arrow-up-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-right-circle' fill='currentColor' id='arrow-up-right-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M5.172 10.828a.5.5 0 00.707 0l4.096-4.096V9.5a.5.5 0 101 0V5.525a.5.5 0 00-.5-.5H6.5a.5.5 0 000 1h2.768l-4.096 4.096a.5.5 0 000 .707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-right-circle-fill' fill='currentColor' id='arrow-up-right-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zM5.879 10.828a.5.5 0 11-.707-.707l4.096-4.096H6.5a.5.5 0 010-1h3.975a.5.5 0 01.5.5V9.5a.5.5 0 01-1 0V6.732l-4.096 4.096z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-right-square' fill='currentColor' id='arrow-up-right-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M5.172 10.828a.5.5 0 00.707 0l4.096-4.096V9.5a.5.5 0 101 0V5.525a.5.5 0 00-.5-.5H6.5a.5.5 0 000 1h2.768l-4.096 4.096a.5.5 0 000 .707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-right-square-fill' fill='currentColor' id='arrow-up-right-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm3.879 10.828a.5.5 0 11-.707-.707l4.096-4.096H6.5a.5.5 0 010-1h3.975a.5.5 0 01.5.5V9.5a.5.5 0 01-1 0V6.732l-4.096 4.096z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-short' fill='currentColor' id='arrow-up-short' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 12a.5.5 0 00.5-.5V5.707l2.146 2.147a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L7.5 5.707V11.5a.5.5 0 00.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-square' fill='currentColor' id='arrow-up-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M8 12a.5.5 0 00.5-.5V5.707l2.146 2.147a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L7.5 5.707V11.5a.5.5 0 00.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrow-up-square-fill' fill='currentColor' id='arrow-up-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm6.5 4.5a.5.5 0 00-1 0v5.793L5.354 8.146a.5.5 0 10-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V4.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrows-angle-contract' fill='currentColor' id='arrows-angle-contract' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M.172 15.828a.5.5 0 00.707 0l4.096-4.096V14.5a.5.5 0 101 0v-3.975a.5.5 0 00-.5-.5H1.5a.5.5 0 000 1h2.768L.172 15.121a.5.5 0 000 .707zM15.828.172a.5.5 0 00-.707 0l-4.096 4.096V1.5a.5.5 0 10-1 0v3.975a.5.5 0 00.5.5H14.5a.5.5 0 000-1h-2.768L15.828.879a.5.5 0 000-.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrows-angle-expand' fill='currentColor' id='arrows-angle-expand' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.828 10.172a.5.5 0 00-.707 0l-4.096 4.096V11.5a.5.5 0 00-1 0v3.975a.5.5 0 00.5.5H4.5a.5.5 0 000-1H1.732l4.096-4.096a.5.5 0 000-.707zm4.344-4.344a.5.5 0 00.707 0l4.096-4.096V4.5a.5.5 0 101 0V.525a.5.5 0 00-.5-.5H11.5a.5.5 0 000 1h2.768l-4.096 4.096a.5.5 0 000 .707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrows-collapse' fill='currentColor' id='arrows-collapse' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 8a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 011 8zm7-8a.5.5 0 01.5.5v3.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L7.5 4.293V.5A.5.5 0 018 0zm-.5 11.707l-1.146 1.147a.5.5 0 01-.708-.708l2-2a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.708L8.5 11.707V15.5a.5.5 0 01-1 0v-3.793z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrows-expand' fill='currentColor' id='arrows-expand' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 8a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 011 8zM7.646.146a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.708L8.5 1.707V5.5a.5.5 0 01-1 0V1.707L6.354 2.854a.5.5 0 11-.708-.708l2-2zM8 10a.5.5 0 01.5.5v3.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L7.5 14.293V10.5A.5.5 0 018 10z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrows-fullscreen' fill='currentColor' id='arrows-fullscreen' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.828 10.172a.5.5 0 00-.707 0l-4.096 4.096V11.5a.5.5 0 00-1 0v3.975a.5.5 0 00.5.5H4.5a.5.5 0 000-1H1.732l4.096-4.096a.5.5 0 000-.707zm4.344 0a.5.5 0 01.707 0l4.096 4.096V11.5a.5.5 0 111 0v3.975a.5.5 0 01-.5.5H11.5a.5.5 0 010-1h2.768l-4.096-4.096a.5.5 0 010-.707zm0-4.344a.5.5 0 00.707 0l4.096-4.096V4.5a.5.5 0 101 0V.525a.5.5 0 00-.5-.5H11.5a.5.5 0 000 1h2.768l-4.096 4.096a.5.5 0 000 .707zm-4.344 0a.5.5 0 01-.707 0L1.025 1.732V4.5a.5.5 0 01-1 0V.525a.5.5 0 01.5-.5H4.5a.5.5 0 010 1H1.732l4.096 4.096a.5.5 0 010 .707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-arrows-move' fill='currentColor' id='arrows-move' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.646.146a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.708L8.5 1.707V5.5a.5.5 0 01-1 0V1.707L6.354 2.854a.5.5 0 11-.708-.708l2-2zM8 10a.5.5 0 01.5.5v3.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L7.5 14.293V10.5A.5.5 0 018 10zM.146 8.354a.5.5 0 010-.708l2-2a.5.5 0 11.708.708L1.707 7.5H5.5a.5.5 0 010 1H1.707l1.147 1.146a.5.5 0 01-.708.708l-2-2zM10 8a.5.5 0 01.5-.5h3.793l-1.147-1.146a.5.5 0 01.708-.708l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L14.293 8.5H10.5A.5.5 0 0110 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-aspect-ratio' fill='currentColor' id='aspect-ratio' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 3.5A1.5 1.5 0 011.5 2h13A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5v-9zM1.5 3a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-13z'/%3e%3cpath fill-rule='evenodd' d='M2 4.5a.5.5 0 01.5-.5h3a.5.5 0 010 1H3v2.5a.5.5 0 01-1 0v-3zm12 7a.5.5 0 01-.5.5h-3a.5.5 0 010-1H13V8.5a.5.5 0 011 0v3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-aspect-ratio-fill' fill='currentColor' id='aspect-ratio-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.5 2A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13zm1 2a.5.5 0 00-.5.5v3a.5.5 0 001 0V5h2.5a.5.5 0 000-1h-3zm11 8a.5.5 0 00.5-.5v-3a.5.5 0 00-1 0V11h-2.5a.5.5 0 000 1h3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-asterisk' fill='currentColor' id='asterisk' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 011 1v5.268l4.562-2.634a1 1 0 111 1.732L10 8l4.562 2.634a1 1 0 11-1 1.732L9 9.732V15a1 1 0 11-2 0V9.732l-4.562 2.634a1 1 0 11-1-1.732L6 8 1.438 5.366a1 1 0 011-1.732L7 6.268V1a1 1 0 011-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-at' fill='currentColor' id='at' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-award' fill='currentColor' id='award' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.669.864L8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193l-1.51-.229L8 1.126l-1.355.702-1.51.229-.684 1.365-1.086 1.072L3.614 6l-.25 1.506 1.087 1.072.684 1.365 1.51.229L8 10.874l1.356-.702 1.509-.229.684-1.365 1.086-1.072L12.387 6l.248-1.506-1.086-1.072-.684-1.365z'/%3e%3cpath d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-award-fill' fill='currentColor' id='award-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z'/%3e%3cpath d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-back' fill='currentColor' id='back' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h8a2 2 0 012 2v2h2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-2H2a2 2 0 01-2-2V2zm2-1a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-backspace' fill='currentColor' id='backspace' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.603 2h7.08a1 1 0 011 1v10a1 1 0 01-1 1h-7.08a1 1 0 01-.76-.35L1 8l4.844-5.65A1 1 0 016.603 2zm7.08-1a2 2 0 012 2v10a2 2 0 01-2 2h-7.08a2 2 0 01-1.519-.698L.241 8.65a1 1 0 010-1.302L5.084 1.7A2 2 0 016.603 1h7.08zM5.829 5.146a.5.5 0 000 .708L7.976 8l-2.147 2.146a.5.5 0 00.707.708l2.147-2.147 2.146 2.147a.5.5 0 00.707-.708L9.39 8l2.146-2.146a.5.5 0 00-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 00-.707 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-backspace-fill' fill='currentColor' id='backspace-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15.683 3a2 2 0 00-2-2h-7.08a2 2 0 00-1.519.698L.241 7.35a1 1 0 000 1.302l4.843 5.65A2 2 0 006.603 15h7.08a2 2 0 002-2V3zM5.829 5.854a.5.5 0 11.707-.708l2.147 2.147 2.146-2.147a.5.5 0 11.707.708L9.39 8l2.146 2.146a.5.5 0 01-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 01-.707-.708L7.976 8 5.829 5.854z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-backspace-reverse' fill='currentColor' id='backspace-reverse' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.08 2H2a1 1 0 00-1 1v10a1 1 0 001 1h7.08a1 1 0 00.76-.35L14.682 8 9.839 2.35A1 1 0 009.08 2zM2 1a2 2 0 00-2 2v10a2 2 0 002 2h7.08a2 2 0 001.519-.698l4.843-5.651a1 1 0 000-1.302L10.6 1.7A2 2 0 009.08 1H2zm7.854 4.146a.5.5 0 010 .708L7.707 8l2.147 2.146a.5.5 0 01-.708.708L7 8.707l-2.146 2.147a.5.5 0 01-.708-.708L6.293 8 4.146 5.854a.5.5 0 11.708-.708L7 7.293l2.146-2.147a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-backspace-reverse-fill' fill='currentColor' id='backspace-reverse-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 3a2 2 0 012-2h7.08a2 2 0 011.519.698l4.843 5.651a1 1 0 010 1.302L10.6 14.3a2 2 0 01-1.52.7H2a2 2 0 01-2-2V3zm9.854 2.854a.5.5 0 00-.708-.708L7 7.293 4.854 5.146a.5.5 0 10-.708.708L6.293 8l-2.147 2.146a.5.5 0 00.708.708L7 8.707l2.146 2.147a.5.5 0 00.708-.708L7.707 8l2.147-2.146z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-4k' fill='currentColor' id='badge-4k' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4.807 5.001C4.021 6.298 3.203 7.6 2.5 8.917v.971h2.905V11h1.112V9.888h.733V8.93h-.733V5.001h-1.71zm-1.23 3.93v-.032a46.781 46.781 0 011.766-3.001h.062V8.93H3.577zm9.831-3.93h-1.306L9.835 7.687h-.057V5H8.59v6h1.187V9.075l.615-.699L12.072 11H13.5l-2.232-3.415 2.14-2.584z'/%3e%3cpath fill-rule='evenodd' d='M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-4k-fill' fill='currentColor' id='badge-4k-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3.577 8.9v.03h1.828V5.898h-.062a46.781 46.781 0 00-1.766 3.001z'/%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm2.372 3.715l.435-.714h1.71v3.93h.733v.957h-.733V11H5.405V9.888H2.5v-.971c.574-1.077 1.225-2.142 1.872-3.202zm7.73-.714h1.306l-2.14 2.584L13.5 11h-1.428l-1.679-2.624-.615.7V11H8.59V5.001h1.187v2.686h.057L12.102 5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-8k' fill='currentColor' id='badge-8k' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4.837 11.114c1.406 0 2.333-.725 2.333-1.766 0-.945-.712-1.38-1.256-1.49v-.053c.496-.15 1.02-.55 1.02-1.331 0-.914-.831-1.587-2.084-1.587-1.257 0-2.087.673-2.087 1.587 0 .773.51 1.177 1.02 1.331v.053c-.546.11-1.258.54-1.258 1.494 0 1.042.906 1.762 2.312 1.762zm.013-3.643c-.545 0-.95-.356-.95-.866s.405-.852.95-.852c.545 0 .945.343.945.852 0 .51-.4.866-.945.866zm0 2.786c-.65 0-1.142-.395-1.142-.984S4.2 8.28 4.85 8.28c.646 0 1.143.404 1.143.993s-.497.984-1.143.984zM13.408 5h-1.306L9.835 7.685h-.057V5H8.59v5.998h1.187V9.075l.615-.699 1.679 2.623H13.5l-2.232-3.414L13.408 5z'/%3e%3cpath fill-rule='evenodd' d='M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-8k-fill' fill='currentColor' id='badge-8k-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3.9 6.605c0 .51.405.866.95.866.545 0 .945-.356.945-.866s-.4-.852-.945-.852c-.545 0-.95.343-.95.852zm-.192 2.668c0 .589.492.984 1.142.984.646 0 1.143-.395 1.143-.984S5.496 8.28 4.85 8.28c-.65 0-1.142.404-1.142.993z'/%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm5.17 7.348c0 1.041-.927 1.766-2.333 1.766-1.406 0-2.312-.72-2.312-1.762 0-.954.712-1.384 1.257-1.494v-.053c-.51-.154-1.02-.558-1.02-1.331 0-.914.831-1.587 2.088-1.587 1.253 0 2.083.673 2.083 1.587 0 .782-.523 1.182-1.02 1.331v.053c.545.11 1.257.545 1.257 1.49zM12.102 5h1.306l-2.14 2.584 2.232 3.415h-1.428l-1.679-2.624-.615.699v1.925H8.59V5h1.187v2.685h.057L12.102 5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-ad' fill='currentColor' id='badge-ad' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'/%3e%3cpath d='M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-ad-fill' fill='currentColor' id='badge-ad-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm6.209 6.32c0-1.28.694-2.044 1.753-2.044.655 0 1.156.294 1.336.769h.053v-2.36h1.16V11h-1.138v-.747h-.057c-.145.474-.69.804-1.367.804-1.055 0-1.74-.764-1.74-2.043v-.695zm3.142.017c0-.699-.422-1.138-1.002-1.138-.584 0-.954.444-.954 1.239v.453c0 .8.374 1.248.972 1.248.588 0 .984-.44.984-1.2v-.602zM4.17 9.457L3.7 11H2.5l2.013-5.999H5.9L7.905 11H6.644l-.47-1.542H4.17zm1.767-.883l-.734-2.426H5.15l-.734 2.426h1.52z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-cc' fill='currentColor' id='badge-cc' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3.708 7.755c0-1.111.488-1.753 1.319-1.753.681 0 1.138.47 1.186 1.107H7.36V7c-.052-1.186-1.024-2-2.342-2C3.414 5 2.5 6.05 2.5 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114H6.213c-.048.615-.496 1.05-1.186 1.05-.84 0-1.319-.62-1.319-1.727v-.743zm6.14 0c0-1.111.488-1.753 1.318-1.753.682 0 1.139.47 1.187 1.107H13.5V7c-.053-1.186-1.024-2-2.342-2C9.554 5 8.64 6.05 8.64 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.743z'/%3e%3cpath fill-rule='evenodd' d='M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-cc-fill' fill='currentColor' id='badge-cc-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm3.027 4.002c-.83 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.319 1.727.69 0 1.138-.435 1.186-1.05H7.36v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747C2.5 6.051 3.414 5 5.018 5c1.318 0 2.29.813 2.342 2v.11H6.213c-.048-.638-.505-1.108-1.186-1.108zm6.14 0c-.831 0-1.319.642-1.319 1.753v.743c0 1.107.48 1.727 1.318 1.727.69 0 1.139-.435 1.187-1.05H13.5v.114c-.057 1.147-1.028 1.938-2.342 1.938-1.613 0-2.518-1.028-2.518-2.729v-.747c0-1.7.914-2.751 2.518-2.751 1.318 0 2.29.813 2.342 2v.11h-1.147c-.048-.638-.505-1.108-1.187-1.108z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-hd' fill='currentColor' id='badge-hd' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'/%3e%3cpath d='M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-hd-fill' fill='currentColor' id='badge-hd-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.53 5.968h-.843v4.06h.843c1.117 0 1.622-.667 1.622-2.02 0-1.354-.51-2.04-1.622-2.04z'/%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm5.396 3.001V11H6.209V8.43H3.687V11H2.5V5.001h1.187v2.44h2.522V5h1.187zM8.5 11V5.001h2.188c1.824 0 2.685 1.09 2.685 2.984C13.373 9.893 12.5 11 10.69 11H8.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-tm' fill='currentColor' id='badge-tm' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.295 11V5.995H7V5H2.403v.994h1.701V11h1.19zm3.397 0V7.01h.058l1.428 3.239h.773l1.42-3.24h.057V11H13.5V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H7.634V11h1.06z'/%3e%3cpath fill-rule='evenodd' d='M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-tm-fill' fill='currentColor' id='badge-tm-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm3.295 3.995V11H4.104V5.995h-1.7V5H7v.994H5.295zM8.692 7.01V11H7.633V5.001h1.209l1.71 3.894h.039l1.71-3.894H13.5V11h-1.072V7.01h-.057l-1.42 3.239h-.773L8.75 7.008h-.058z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-vo' fill='currentColor' id='badge-vo' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4.508 11h1.429l1.99-5.999H6.61L5.277 9.708H5.22L3.875 5.001H2.5L4.508 11zM13.5 8.39v-.77c0-1.696-.962-2.733-2.566-2.733-1.604 0-2.571 1.029-2.571 2.734v.769c0 1.691.967 2.724 2.57 2.724 1.605 0 2.567-1.033 2.567-2.724zm-1.204-.778v.782c0 1.156-.571 1.732-1.362 1.732-.796 0-1.363-.576-1.363-1.732v-.782c0-1.156.567-1.736 1.363-1.736.79 0 1.362.58 1.362 1.736z'/%3e%3cpath fill-rule='evenodd' d='M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-badge-vo-fill' fill='currentColor' id='badge-vo-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.296 8.394v-.782c0-1.156-.571-1.736-1.362-1.736-.796 0-1.363.58-1.363 1.736v.782c0 1.156.567 1.732 1.363 1.732.79 0 1.362-.576 1.362-1.732z'/%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm11.5 5.62v.77c0 1.691-.962 2.724-2.566 2.724-1.604 0-2.571-1.033-2.571-2.724v-.77c0-1.704.967-2.733 2.57-2.733 1.605 0 2.567 1.037 2.567 2.734zM5.937 11H4.508L2.5 5.001h1.375L5.22 9.708h.057L6.61 5.001h1.318L5.937 11z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bag' fill='currentColor' id='bag' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1a2.5 2.5 0 00-2.5 2.5V4h5v-.5A2.5 2.5 0 008 1zm3.5 3v-.5a3.5 3.5 0 10-7 0V4H1v10a2 2 0 002 2h10a2 2 0 002-2V4h-3.5zM2 5v9a1 1 0 001 1h10a1 1 0 001-1V5H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bag-check' fill='currentColor' id='bag-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1a2.5 2.5 0 00-2.5 2.5V4h5v-.5A2.5 2.5 0 008 1zm3.5 3v-.5a3.5 3.5 0 10-7 0V4H1v10a2 2 0 002 2h10a2 2 0 002-2V4h-3.5zM2 5v9a1 1 0 001 1h10a1 1 0 001-1V5H2z'/%3e%3cpath fill-rule='evenodd' d='M10.854 8.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L7.5 10.793l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bag-check-fill' fill='currentColor' id='bag-check-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.5 3.5a2.5 2.5 0 015 0V4h-5v-.5zm6 0V4H15v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4h3.5v-.5a3.5 3.5 0 117 0zm-.646 5.354a.5.5 0 00-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bag-dash' fill='currentColor' id='bag-dash' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1a2.5 2.5 0 00-2.5 2.5V4h5v-.5A2.5 2.5 0 008 1zm3.5 3v-.5a3.5 3.5 0 10-7 0V4H1v10a2 2 0 002 2h10a2 2 0 002-2V4h-3.5zM2 5v9a1 1 0 001 1h10a1 1 0 001-1V5H2z'/%3e%3cpath fill-rule='evenodd' d='M5.5 10a.5.5 0 01.5-.5h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bag-dash-fill' fill='currentColor' id='bag-dash-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.5 3.5a2.5 2.5 0 015 0V4h-5v-.5zm6 0V4H15v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4h3.5v-.5a3.5 3.5 0 117 0zM6 9.5a.5.5 0 000 1h4a.5.5 0 000-1H6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bag-fill' fill='currentColor' id='bag-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1a2.5 2.5 0 00-2.5 2.5V4h5v-.5A2.5 2.5 0 008 1zm3.5 3v-.5a3.5 3.5 0 10-7 0V4H1v10a2 2 0 002 2h10a2 2 0 002-2V4h-3.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bag-plus' fill='currentColor' id='bag-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1a2.5 2.5 0 00-2.5 2.5V4h5v-.5A2.5 2.5 0 008 1zm3.5 3v-.5a3.5 3.5 0 10-7 0V4H1v10a2 2 0 002 2h10a2 2 0 002-2V4h-3.5zM2 5v9a1 1 0 001 1h10a1 1 0 001-1V5H2z'/%3e%3cpath fill-rule='evenodd' d='M8 7.5a.5.5 0 01.5.5v1.5H10a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0v-1.5H6a.5.5 0 010-1h1.5V8a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bag-plus-fill' fill='currentColor' id='bag-plus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.5 3.5a2.5 2.5 0 015 0V4h-5v-.5zm6 0V4H15v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4h3.5v-.5a3.5 3.5 0 117 0zM8.5 8a.5.5 0 00-1 0v1.5H6a.5.5 0 000 1h1.5V12a.5.5 0 001 0v-1.5H10a.5.5 0 000-1H8.5V8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bag-x' fill='currentColor' id='bag-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1a2.5 2.5 0 00-2.5 2.5V4h5v-.5A2.5 2.5 0 008 1zm3.5 3v-.5a3.5 3.5 0 10-7 0V4H1v10a2 2 0 002 2h10a2 2 0 002-2V4h-3.5zM2 5v9a1 1 0 001 1h10a1 1 0 001-1V5H2z'/%3e%3cpath fill-rule='evenodd' d='M6.146 8.146a.5.5 0 01.708 0L8 9.293l1.146-1.147a.5.5 0 11.708.708L8.707 10l1.147 1.146a.5.5 0 01-.708.708L8 10.707l-1.146 1.147a.5.5 0 01-.708-.708L7.293 10 6.146 8.854a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bag-x-fill' fill='currentColor' id='bag-x-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.5 3.5a2.5 2.5 0 015 0V4h-5v-.5zm6 0V4H15v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4h3.5v-.5a3.5 3.5 0 117 0zM6.854 8.146a.5.5 0 10-.708.708L7.293 10l-1.147 1.146a.5.5 0 00.708.708L8 10.707l1.146 1.147a.5.5 0 00.708-.708L8.707 10l1.147-1.146a.5.5 0 00-.708-.708L8 9.293 6.854 8.146z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bar-chart' fill='currentColor' id='bar-chart' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V2a1 1 0 00-1-1h-2zM6 7a1 1 0 011-1h2a1 1 0 011 1v7a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm-5 4a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1H2a1 1 0 01-1-1v-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bar-chart-fill' fill='currentColor' id='bar-chart-fill' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='4' height='5' x='1' y='10' rx='1'/%3e%3crect width='4' height='9' x='6' y='6' rx='1'/%3e%3crect width='4' height='14' x='11' y='1' rx='1'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bar-chart-line' fill='currentColor' id='bar-chart-line' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11 2a1 1 0 011-1h2a1 1 0 011 1v12h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1v-3a1 1 0 011-1h2a1 1 0 011 1v3h1V7a1 1 0 011-1h2a1 1 0 011 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bar-chart-line-fill' fill='currentColor' id='bar-chart-line-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11 2a1 1 0 011-1h2a1 1 0 011 1v12h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1v-3a1 1 0 011-1h2a1 1 0 011 1v3h1V7a1 1 0 011-1h2a1 1 0 011 1v7h1V2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bar-chart-steps' fill='currentColor' id='bar-chart-steps' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M.5 0a.5.5 0 01.5.5v15a.5.5 0 01-1 0V.5A.5.5 0 01.5 0z'/%3e%3crect width='5' height='2' x='2' y='1' rx='.5'/%3e%3crect width='8' height='2' x='4' y='5' rx='.5'/%3e%3cpath d='M6 9.5a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-1zm2 4a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-basket' fill='currentColor' id='basket' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.757 1.071a.5.5 0 01.172.686L3.383 6h9.234L10.07 1.757a.5.5 0 11.858-.514L13.783 6H15a1 1 0 011 1v1a1 1 0 01-1 1v4.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 13.5V9a1 1 0 01-1-1V7a1 1 0 011-1h1.217L5.07 1.243a.5.5 0 01.686-.172zM2 9v4.5A1.5 1.5 0 003.5 15h9a1.5 1.5 0 001.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3A.5.5 0 014 10zm2 0a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3A.5.5 0 016 10zm2 0a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3A.5.5 0 018 10zm2 0a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5zm2 0a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-basket-fill' fill='currentColor' id='basket-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.071 1.243a.5.5 0 01.858.514L3.383 6h9.234L10.07 1.757a.5.5 0 11.858-.514L13.783 6H15.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H15v5a2 2 0 01-2 2H3a2 2 0 01-2-2V9H.5a.5.5 0 01-.5-.5v-2A.5.5 0 01.5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 10-1 0v3a.5.5 0 001 0v-3zm2.5 0a.5.5 0 10-1 0v3a.5.5 0 001 0v-3zm2.5 0a.5.5 0 10-1 0v3a.5.5 0 001 0v-3zm2.5 0a.5.5 0 10-1 0v3a.5.5 0 001 0v-3zm2.5 0a.5.5 0 10-1 0v3a.5.5 0 001 0v-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-basket2' fill='currentColor' id='basket2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 10a1 1 0 012 0v2a1 1 0 01-2 0v-2zm3 0a1 1 0 012 0v2a1 1 0 01-2 0v-2zm3 0a1 1 0 112 0v2a1 1 0 01-2 0v-2z'/%3e%3cpath fill-rule='evenodd' d='M5.757 1.071a.5.5 0 01.172.686L3.383 6h9.234L10.07 1.757a.5.5 0 11.858-.514L13.783 6H15.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-.623l-1.844 6.456a.75.75 0 01-.722.544H3.69a.75.75 0 01-.722-.544L1.123 8H.5a.5.5 0 01-.5-.5v-1A.5.5 0 01.5 6h1.717L5.07 1.243a.5.5 0 01.686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-basket2-fill' fill='currentColor' id='basket2-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.929 1.757a.5.5 0 10-.858-.514L2.217 6H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h.623l1.844 6.456A.75.75 0 003.69 15h8.622a.75.75 0 00.722-.544L14.877 8h.623a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1.717L10.93 1.243a.5.5 0 10-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 012 0v2a1 1 0 11-2 0v-2zm3 0a1 1 0 012 0v2a1 1 0 11-2 0v-2zm4-1a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-basket3' fill='currentColor' id='basket3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.757 1.071a.5.5 0 01.172.686L3.383 6h9.234L10.07 1.757a.5.5 0 11.858-.514L13.783 6H15.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-1A.5.5 0 01.5 6h1.717L5.07 1.243a.5.5 0 01.686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 00.729.574h9.606a.75.75 0 00.73-.574L15.056 9h-.972l-1.479 6h-9.21z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-basket3-fill' fill='currentColor' id='basket3-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.757 1.071a.5.5 0 01.172.686L3.383 6h9.234L10.07 1.757a.5.5 0 11.858-.514L13.783 6H15.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-1A.5.5 0 01.5 6h1.717L5.07 1.243a.5.5 0 01.686-.172z'/%3e%3cpath d='M2.468 15.426L.943 9h14.114l-1.525 6.426a.75.75 0 01-.729.574H3.197a.75.75 0 01-.73-.574z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-battery' fill='currentColor' id='battery' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 5H2a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1zM2 4a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H2z'/%3e%3cpath d='M14.5 9.5a1.5 1.5 0 000-3v3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-battery-charging' fill='currentColor' id='battery-charging' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14.5 9.5a1.5 1.5 0 000-3v3z'/%3e%3cpath fill-rule='evenodd' d='M9.585 2.568a.5.5 0 01.226.58L8.677 6.832h1.99a.5.5 0 01.364.843l-5.334 5.667a.5.5 0 01-.842-.49L5.99 9.167H4a.5.5 0 01-.364-.843l5.333-5.667a.5.5 0 01.616-.09z'/%3e%3cpath fill-rule='evenodd' d='M6.332 4H2a2 2 0 00-2 2v4a2 2 0 002 2h2.072l.307-1H2a1 1 0 01-1-1V6a1 1 0 011-1h3.391l.941-1zM4.45 6H2v4h1.313a1.5 1.5 0 01-.405-2.361L4.45 6zm.976 5l-.308 1H6.96l.21-.224h.001l.73-.776H6.53l-.085.09.028-.09H5.426zm1.354-1H5.733l.257-.833H4a.5.5 0 01-.364-.843l.793-.843L5.823 6h1.373L5.157 8.167h1.51a.5.5 0 01.478.647L6.78 10zm.69 0h1.374l1.394-1.482.793-.842a.5.5 0 00-.364-.843h-1.99L8.933 6H7.887l-.166.54-.199.646A.5.5 0 008 7.833h1.51L7.47 10zm.725-5H9.24l.308-1H7.706l-.942 1h1.374l.085-.09-.028.09zm2.4-1l-.308 1H12a1 1 0 011 1v4a1 1 0 01-1 1H9.276l-.942 1H12a2 2 0 002-2V6a2 2 0 00-2-2h-1.405zm-.378 6H12V8.02a1.499 1.499 0 01-.241.341L10.217 10zM12 6.646V6h-.646a1.5 1.5 0 01.646.646z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-battery-full' fill='currentColor' id='battery-full' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 5H2a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1zM2 4a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H2z'/%3e%3cpath d='M2 6h10v4H2V6zm12.5 3.5a1.5 1.5 0 000-3v3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-battery-half' fill='currentColor' id='battery-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 5H2a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1zM2 4a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H2z'/%3e%3cpath d='M2 6h5v4H2V6zm12.5 3.5a1.5 1.5 0 000-3v3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bell' fill='currentColor' id='bell' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8 16a2 2 0 002-2H6a2 2 0 002 2z'/%3e%3cpath fill-rule='evenodd' d='M8 1.918l-.797.161A4.002 4.002 0 004 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 00-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 111.99 0A5.002 5.002 0 0113 6c0 .88.32 4.2 1.22 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bell-fill' fill='currentColor' id='bell-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8 16a2 2 0 002-2H6a2 2 0 002 2zm.995-14.901a1 1 0 10-1.99 0A5.002 5.002 0 003 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bezier' fill='currentColor' id='bezier' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 10.5A1.5 1.5 0 011.5 9h1A1.5 1.5 0 014 10.5v1A1.5 1.5 0 012.5 13h-1A1.5 1.5 0 010 11.5v-1zm1.5-.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm10.5.5A1.5 1.5 0 0113.5 9h1a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-1zm1.5-.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM6 4.5A1.5 1.5 0 017.5 3h1A1.5 1.5 0 0110 4.5v1A1.5 1.5 0 018.5 7h-1A1.5 1.5 0 016 5.5v-1zM7.5 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z'/%3e%3cpath d='M6 4.5H1.866a1 1 0 100 1h2.668A6.517 6.517 0 001.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 013.185-3.185A1.503 1.503 0 016 5.5v-1zm3.957 1.358A1.5 1.5 0 0010 5.5v-1h4.134a1 1 0 110 1h-2.668a6.517 6.517 0 012.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 00-3.185-3.185z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bezier2' fill='currentColor' id='bezier2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 2.5A1.5 1.5 0 012.5 1h1A1.5 1.5 0 015 2.5h4.134a1 1 0 110 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0112.5 11h1a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5H6.866a1 1 0 110-1h1.711a2.839 2.839 0 01-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 013.5 5h-1A1.5 1.5 0 011 3.5v-1zM2.5 2a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm10 10a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bicycle' fill='currentColor' id='bicycle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 4.5a.5.5 0 01.5-.5H6a.5.5 0 010 1v.5h4.14l.386-1.158A.5.5 0 0111 4h1a.5.5 0 010 1h-.64l-.311.935.807 1.29a3 3 0 11-.848.53l-.508-.812-2.076 3.322A.5.5 0 018 10.5H5.959a3 3 0 11-1.815-3.274L5 5.856V5h-.5a.5.5 0 01-.5-.5zm1.5 2.443l-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057L9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 00-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 104.937 10.5H3a.5.5 0 01-.424-.765l1.027-1.643zm7.947.53a2 2 0 10.848-.53l1.026 1.643a.5.5 0 11-.848.53L11.55 8.623z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-binoculars' fill='currentColor' id='binoculars' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 2.5A1.5 1.5 0 014.5 1h1A1.5 1.5 0 017 2.5V5h2V2.5A1.5 1.5 0 0110.5 1h1A1.5 1.5 0 0113 2.5v2.382a.5.5 0 00.276.447l.895.447A1.5 1.5 0 0115 7.118V14.5a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 14.5v-3a.5.5 0 01.146-.354l.854-.853V9.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v.793l.854.853A.5.5 0 017 11.5v3A1.5 1.5 0 015.5 16h-3A1.5 1.5 0 011 14.5V7.118a1.5 1.5 0 01.83-1.342l.894-.447A.5.5 0 003 4.882V2.5zM4.5 2a.5.5 0 00-.5.5V3h2v-.5a.5.5 0 00-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 01-.83 1.342l-.894.447A.5.5 0 002 7.118V13h4v-1.293l-.854-.853A.5.5 0 015 10.5v-1A1.5 1.5 0 016.5 8h3A1.5 1.5 0 0111 9.5v1a.5.5 0 01-.146.354l-.854.853V13h4V7.118a.5.5 0 00-.276-.447l-.895-.447A1.5 1.5 0 0112 4.882V4h-2v1.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V4zm4-1h2v-.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V3zm4 11h-4v.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V14zm-8 0H2v.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V14z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-binoculars-fill' fill='currentColor' id='binoculars-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4.5 1A1.5 1.5 0 003 2.5V3h4v-.5A1.5 1.5 0 005.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 00.276.447l.895.447A1.5 1.5 0 0115 7.118V13H9v-1.5a.5.5 0 01.146-.354l.854-.853V9.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v.793l.854.853A.5.5 0 017 11.5V13H1V7.118a1.5 1.5 0 01.83-1.342l.894-.447A.5.5 0 003 4.882V4h4zM1 14v.5A1.5 1.5 0 002.5 16h3A1.5 1.5 0 007 14.5V14H1zm8 0v.5a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0110.5 1h1A1.5 1.5 0 0113 2.5V3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-blockquote-left' fill='currentColor' id='blockquote-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm5 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm-5 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z'/%3e%3cpath d='M3.734 6.352a6.586 6.586 0 00-.445.275 1.94 1.94 0 00-.346.299 1.38 1.38 0 00-.252.369c-.058.129-.1.295-.123.498h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 01-.187.463c-.12.14-.289.21-.503.21-.336 0-.577-.108-.721-.327C2.072 8.619 2 8.328 2 7.969c0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352zm2.168 0a6.588 6.588 0 00-.445.275 1.94 1.94 0 00-.346.299c-.113.12-.199.246-.257.375a1.75 1.75 0 00-.118.492h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 01-.187.463c-.12.14-.289.21-.504.21-.335 0-.576-.108-.72-.327-.145-.223-.217-.514-.217-.873 0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-blockquote-right' fill='currentColor' id='blockquote-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z'/%3e%3cpath d='M12.168 6.352c.184.105.332.197.445.275.114.074.229.174.346.299.11.117.193.24.252.369s.1.295.123.498h-.281c-.243 0-.432.06-.569.182-.14.117-.21.29-.21.521 0 .164.062.318.187.463.121.14.289.21.504.21.336 0 .576-.108.72-.327.145-.223.217-.514.217-.873 0-.254-.054-.485-.164-.692a2.436 2.436 0 00-.398-.562c-.16-.168-.33-.31-.51-.428-.18-.117-.33-.213-.451-.287l-.211.352zm-2.168 0c.184.105.332.197.445.275.114.074.229.174.346.299.113.12.2.246.258.375.055.125.094.289.117.492h-.281c-.242 0-.432.06-.569.182-.14.117-.21.29-.21.521 0 .164.062.318.187.463.121.14.289.21.504.21.336 0 .576-.108.72-.327.145-.223.217-.514.217-.873 0-.254-.054-.485-.164-.692a2.438 2.438 0 00-.398-.562c-.16-.168-.33-.31-.51-.428-.18-.117-.33-.213-.451-.287L10 6.352z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-book' fill='currentColor' id='book' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 000 2.5v11a.5.5 0 00.707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 00.78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0016 13.5v-11a.5.5 0 00-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-book-fill' fill='currentColor' id='book-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 000 2.5v11a.5.5 0 00.707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 00.78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0016 13.5v-11a.5.5 0 00-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-book-half' fill='currentColor' id='book-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.5 2.687v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 000 2.5v11a.5.5 0 00.707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 00.78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0016 13.5v-11a.5.5 0 00-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark' fill='currentColor' id='bookmark' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark-check' fill='currentColor' id='bookmark-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M10.854 5.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7.5 7.793l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark-check-fill' fill='currentColor' id='bookmark-check-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0a2 2 0 00-2 2v13.5a.5.5 0 00.74.439L8 13.069l5.26 2.87A.5.5 0 0014 15.5V2a2 2 0 00-2-2H4zm6.854 5.854a.5.5 0 00-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark-dash' fill='currentColor' id='bookmark-dash' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M5.5 6.5A.5.5 0 016 6h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark-dash-fill' fill='currentColor' id='bookmark-dash-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0a2 2 0 00-2 2v13.5a.5.5 0 00.74.439L8 13.069l5.26 2.87A.5.5 0 0014 15.5V2a2 2 0 00-2-2H4zm2 6a.5.5 0 000 1h4a.5.5 0 000-1H6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark-fill' fill='currentColor' id='bookmark-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.74.439L8 13.069l-5.26 2.87A.5.5 0 012 15.5V2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark-heart' fill='currentColor' id='bookmark-heart' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark-heart-fill' fill='currentColor' id='bookmark-heart-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0a2 2 0 00-2 2v13.5a.5.5 0 00.74.439L8 13.069l5.26 2.87A.5.5 0 0014 15.5V2a2 2 0 00-2-2H4zm4 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark-plus' fill='currentColor' id='bookmark-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M8 4a.5.5 0 01.5.5V6H10a.5.5 0 010 1H8.5v1.5a.5.5 0 01-1 0V7H6a.5.5 0 010-1h1.5V4.5A.5.5 0 018 4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark-plus-fill' fill='currentColor' id='bookmark-plus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0a2 2 0 00-2 2v13.5a.5.5 0 00.74.439L8 13.069l5.26 2.87A.5.5 0 0014 15.5V2a2 2 0 00-2-2H4zm4.5 4.5a.5.5 0 00-1 0V6H6a.5.5 0 000 1h1.5v1.5a.5.5 0 001 0V7H10a.5.5 0 000-1H8.5V4.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark-star' fill='currentColor' id='bookmark-star' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z'/%3e%3cpath d='M7.84 4.1a.178.178 0 01.32 0l.634 1.285a.178.178 0 00.134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 00-.051.158l.242 1.414a.178.178 0 01-.258.187l-1.27-.668a.178.178 0 00-.165 0l-1.27.668a.178.178 0 01-.257-.187l.242-1.414a.178.178 0 00-.05-.158l-1.03-1.001a.178.178 0 01.098-.303l1.42-.206a.178.178 0 00.134-.098L7.84 4.1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark-star-fill' fill='currentColor' id='bookmark-star-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0a2 2 0 00-2 2v13.5a.5.5 0 00.74.439L8 13.069l5.26 2.87A.5.5 0 0014 15.5V2a2 2 0 00-2-2H4zm4.16 4.1a.178.178 0 00-.32 0l-.634 1.285a.178.178 0 01-.134.098l-1.42.206a.178.178 0 00-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 00.258.187l1.27-.668a.178.178 0 01.165 0l1.27.668a.178.178 0 00.257-.187L9.368 7.15a.178.178 0 01.05-.158l1.028-1.001a.178.178 0 00-.098-.303l-1.42-.206a.178.178 0 01-.134-.098L8.16 4.1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark-x' fill='currentColor' id='bookmark-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M6.146 5.146a.5.5 0 01.708 0L8 6.293l1.146-1.147a.5.5 0 11.708.708L8.707 7l1.147 1.146a.5.5 0 01-.708.708L8 7.707 6.854 8.854a.5.5 0 11-.708-.708L7.293 7 6.146 5.854a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmark-x-fill' fill='currentColor' id='bookmark-x-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0a2 2 0 00-2 2v13.5a.5.5 0 00.74.439L8 13.069l5.26 2.87A.5.5 0 0014 15.5V2a2 2 0 00-2-2H4zm2.854 5.146a.5.5 0 10-.708.708L7.293 7 6.146 8.146a.5.5 0 10.708.708L8 7.707l1.146 1.147a.5.5 0 10.708-.708L8.707 7l1.147-1.146a.5.5 0 00-.708-.708L8 6.293 6.854 5.146z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmarks' fill='currentColor' id='bookmarks' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 4a2 2 0 012-2h6a2 2 0 012 2v11.5a.5.5 0 01-.777.416L7 13.101l-4.223 2.815A.5.5 0 012 15.5V4zm2-1a1 1 0 00-1 1v10.566l3.723-2.482a.5.5 0 01.554 0L11 14.566V4a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M4.268 1H12a1 1 0 011 1v11.768l.223.148A.5.5 0 0014 13.5V2a2 2 0 00-2-2H6a2 2 0 00-1.732 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookmarks-fill' fill='currentColor' id='bookmarks-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 4a2 2 0 012-2h6a2 2 0 012 2v11.5a.5.5 0 01-.777.416L7 13.101l-4.223 2.815A.5.5 0 012 15.5V4z'/%3e%3cpath fill-rule='evenodd' d='M4.268 1H12a1 1 0 011 1v11.768l.223.148A.5.5 0 0014 13.5V2a2 2 0 00-2-2H6a2 2 0 00-1.732 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bookshelf' fill='currentColor' id='bookshelf' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.5 0a.5.5 0 01.5.5V2h10V.5a.5.5 0 011 0v15a.5.5 0 01-1 0V15H3v.5a.5.5 0 01-1 0V.5a.5.5 0 01.5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bootstrap' fill='currentColor' id='bootstrap' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 1H4a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3zM4 0a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4H4z'/%3e%3cpath fill-rule='evenodd' d='M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bootstrap-fill' fill='currentColor' id='bootstrap-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.002 0a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bootstrap-reboot' fill='currentColor' id='bootstrap-reboot' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.161 8a6.84 6.84 0 106.842-6.84.58.58 0 010-1.16 8 8 0 11-6.556 3.412l-.663-.577a.58.58 0 01.227-.997l2.52-.69a.58.58 0 01.728.633l-.332 2.592a.58.58 0 01-.956.364l-.643-.56A6.812 6.812 0 001.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-border-style' fill='currentColor' id='border-style' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 3.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-1zm0 4a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1zm0 4a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm8 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-4 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm8 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-4-4a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-border-width' fill='currentColor' id='border-width' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 3.5A.5.5 0 01.5 3h15a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-2zm0 5A.5.5 0 01.5 8h15a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-1zm0 4a.5.5 0 01.5-.5h15a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bounding-box' fill='currentColor' id='bounding-box' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1H5v2H3v6h2v2h6v-2h2V5h-2V3zm1-2v3h3V1h-3zm3 11h-3v3h3v-3zM4 15v-3H1v3h3zM1 4h3V1H1v3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bounding-box-circles' fill='currentColor' id='bounding-box-circles' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 1a1 1 0 100 2 1 1 0 000-2zM0 2a2 2 0 013.937-.5h8.126A2 2 0 1114.5 3.937v8.126a2 2 0 11-2.437 2.437H3.937A2 2 0 111.5 12.063V3.937A2 2 0 010 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 011.437-1.437V3.937A2.004 2.004 0 0112.063 2.5H3.937A2.004 2.004 0 012.5 3.937zM14 1a1 1 0 100 2 1 1 0 000-2zM2 13a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box' fill='currentColor' id='box' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.186 1.113a.5.5 0 00-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 011.114 0l7.129 2.852A.5.5 0 0116 3.5v8.662a1 1 0 01-.629.928l-7.185 2.874a.5.5 0 01-.372 0L.63 13.09a1 1 0 01-.63-.928V3.5a.5.5 0 01.314-.464L7.443.184z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-down' fill='currentColor' id='box-arrow-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 10a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-2a.5.5 0 000 1h2A1.5 1.5 0 0014 9.5v-8A1.5 1.5 0 0012.5 0h-9A1.5 1.5 0 002 1.5v8A1.5 1.5 0 003.5 11h2a.5.5 0 000-1h-2z'/%3e%3cpath fill-rule='evenodd' d='M7.646 15.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 14.293V5.5a.5.5 0 00-1 0v8.793l-2.146-2.147a.5.5 0 00-.708.708l3 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-down-left' fill='currentColor' id='box-arrow-down-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.364 12.5a.5.5 0 00.5.5H14.5a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0014.5 0h-10A1.5 1.5 0 003 1.5v6.636a.5.5 0 101 0V1.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H7.864a.5.5 0 00-.5.5z'/%3e%3cpath fill-rule='evenodd' d='M0 15.5a.5.5 0 00.5.5h5a.5.5 0 000-1H1.707l8.147-8.146a.5.5 0 00-.708-.708L1 14.293V10.5a.5.5 0 00-1 0v5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-down-right' fill='currentColor' id='box-arrow-down-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.636 12.5a.5.5 0 01-.5.5H1.5A1.5 1.5 0 010 11.5v-10A1.5 1.5 0 011.5 0h10A1.5 1.5 0 0113 1.5v6.636a.5.5 0 01-1 0V1.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h6.636a.5.5 0 01.5.5z'/%3e%3cpath fill-rule='evenodd' d='M16 15.5a.5.5 0 01-.5.5h-5a.5.5 0 010-1h3.793L6.146 6.854a.5.5 0 11.708-.708L15 14.293V10.5a.5.5 0 011 0v5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-in-down' fill='currentColor' id='box-arrow-in-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 6a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-2a.5.5 0 010-1h2A1.5 1.5 0 0114 6.5v8a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 14.5v-8A1.5 1.5 0 013.5 5h2a.5.5 0 010 1h-2z'/%3e%3cpath fill-rule='evenodd' d='M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-in-down-left' fill='currentColor' id='box-arrow-in-down-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.636 2.5a.5.5 0 00-.5-.5H2.5A1.5 1.5 0 001 3.5v10A1.5 1.5 0 002.5 15h10a1.5 1.5 0 001.5-1.5V6.864a.5.5 0 00-1 0V13.5a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h6.636a.5.5 0 00.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M5 10.5a.5.5 0 00.5.5h5a.5.5 0 000-1H6.707l8.147-8.146a.5.5 0 00-.708-.708L6 9.293V5.5a.5.5 0 00-1 0v5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-in-down-right' fill='currentColor' id='box-arrow-in-down-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.364 2.5a.5.5 0 01.5-.5H13.5A1.5 1.5 0 0115 3.5v10a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 012 13.5V6.864a.5.5 0 111 0V13.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H6.864a.5.5 0 01-.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M11 10.5a.5.5 0 01-.5.5h-5a.5.5 0 010-1h3.793L1.146 1.854a.5.5 0 11.708-.708L10 9.293V5.5a.5.5 0 011 0v5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-in-left' fill='currentColor' id='box-arrow-in-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10 3.5a.5.5 0 00-.5-.5h-8a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-2a.5.5 0 011 0v2A1.5 1.5 0 019.5 14h-8A1.5 1.5 0 010 12.5v-9A1.5 1.5 0 011.5 2h8A1.5 1.5 0 0111 3.5v2a.5.5 0 01-1 0v-2z'/%3e%3cpath fill-rule='evenodd' d='M4.146 8.354a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H14.5a.5.5 0 010 1H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-in-right' fill='currentColor' id='box-arrow-in-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 3.5a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-2a.5.5 0 00-1 0v2A1.5 1.5 0 006.5 14h8a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-8A1.5 1.5 0 005 3.5v2a.5.5 0 001 0v-2z'/%3e%3cpath fill-rule='evenodd' d='M11.854 8.354a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H1.5a.5.5 0 000 1h8.793l-2.147 2.146a.5.5 0 00.708.708l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-in-up' fill='currentColor' id='box-arrow-in-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 10a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-2a.5.5 0 000 1h2A1.5 1.5 0 0014 9.5v-8A1.5 1.5 0 0012.5 0h-9A1.5 1.5 0 002 1.5v8A1.5 1.5 0 003.5 11h2a.5.5 0 000-1h-2z'/%3e%3cpath fill-rule='evenodd' d='M7.646 4.146a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V14.5a.5.5 0 01-1 0V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-in-up-left' fill='currentColor' id='box-arrow-in-up-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.636 13.5a.5.5 0 01-.5.5H2.5A1.5 1.5 0 011 12.5v-10A1.5 1.5 0 012.5 1h10A1.5 1.5 0 0114 2.5v6.636a.5.5 0 01-1 0V2.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h6.636a.5.5 0 01.5.5z'/%3e%3cpath fill-rule='evenodd' d='M5 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1H6.707l8.147 8.146a.5.5 0 01-.708.708L6 6.707V10.5a.5.5 0 01-1 0v-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-in-up-right' fill='currentColor' id='box-arrow-in-up-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.364 13.5a.5.5 0 00.5.5H13.5a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0013.5 1h-10A1.5 1.5 0 002 2.5v6.636a.5.5 0 101 0V2.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H6.864a.5.5 0 00-.5.5z'/%3e%3cpath fill-rule='evenodd' d='M11 5.5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h3.793l-8.147 8.146a.5.5 0 00.708.708L10 6.707V10.5a.5.5 0 001 0v-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-left' fill='currentColor' id='box-arrow-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 12.5a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-8a.5.5 0 00-.5.5v2a.5.5 0 01-1 0v-2A1.5 1.5 0 016.5 2h8A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 015 12.5v-2a.5.5 0 011 0v2z'/%3e%3cpath fill-rule='evenodd' d='M.146 8.354a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L1.707 7.5H10.5a.5.5 0 010 1H1.707l2.147 2.146a.5.5 0 01-.708.708l-3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-right' fill='currentColor' id='box-arrow-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10 12.5a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v2a.5.5 0 001 0v-2A1.5 1.5 0 009.5 2h-8A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h8a1.5 1.5 0 001.5-1.5v-2a.5.5 0 00-1 0v2z'/%3e%3cpath fill-rule='evenodd' d='M15.854 8.354a.5.5 0 000-.708l-3-3a.5.5 0 00-.708.708L14.293 7.5H5.5a.5.5 0 000 1h8.793l-2.147 2.146a.5.5 0 00.708.708l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-up' fill='currentColor' id='box-arrow-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 6a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-2a.5.5 0 010-1h2A1.5 1.5 0 0114 6.5v8a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 14.5v-8A1.5 1.5 0 013.5 5h2a.5.5 0 010 1h-2z'/%3e%3cpath fill-rule='evenodd' d='M7.646.146a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 1.707V10.5a.5.5 0 01-1 0V1.707L5.354 3.854a.5.5 0 11-.708-.708l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-up-left' fill='currentColor' id='box-arrow-up-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.364 3.5a.5.5 0 01.5-.5H14.5A1.5 1.5 0 0116 4.5v10a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 013 14.5V7.864a.5.5 0 111 0V14.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H7.864a.5.5 0 01-.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M0 .5A.5.5 0 01.5 0h5a.5.5 0 010 1H1.707l8.147 8.146a.5.5 0 01-.708.708L1 1.707V5.5a.5.5 0 01-1 0v-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-arrow-up-right' fill='currentColor' id='box-arrow-up-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.636 3.5a.5.5 0 00-.5-.5H1.5A1.5 1.5 0 000 4.5v10A1.5 1.5 0 001.5 16h10a1.5 1.5 0 001.5-1.5V7.864a.5.5 0 00-1 0V14.5a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h6.636a.5.5 0 00.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M16 .5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h3.793L6.146 9.146a.5.5 0 10.708.708L15 1.707V5.5a.5.5 0 001 0v-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-box-seam' fill='currentColor' id='box-seam' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.186 1.113a.5.5 0 00-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 011.114 0l7.129 2.852A.5.5 0 0116 3.5v8.662a1 1 0 01-.629.928l-7.185 2.874a.5.5 0 01-.372 0L.63 13.09a1 1 0 01-.63-.928V3.5a.5.5 0 01.314-.464L7.443.184z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-braces' fill='currentColor' id='braces' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bricks' fill='currentColor' id='bricks' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 .5A.5.5 0 01.5 0h15a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H14v2h1.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H14v2h1.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H2v-2H.5a.5.5 0 01-.5-.5v-3A.5.5 0 01.5 6H2V4H.5a.5.5 0 01-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2H15V1H5.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-briefcase' fill='currentColor' id='briefcase' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-6h-1v6a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-6H0v6z'/%3e%3cpath fill-rule='evenodd' d='M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v2.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 00-.5.5v1.616l6.871 1.832a.5.5 0 00.258 0L15 6.116V4.5a.5.5 0 00-.5-.5h-13zM5 2.5A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-briefcase-fill' fill='currentColor' id='briefcase-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5V6.85L8.129 8.947a.5.5 0 01-.258 0L0 6.85v5.65z'/%3e%3cpath fill-rule='evenodd' d='M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v1.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-brightness-alt-high' fill='currentColor' id='brightness-alt-high' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.041 10.5h5.918a3 3 0 00-5.918 0zM4 11a4 4 0 118 0 .5.5 0 01-.5.5h-7A.5.5 0 014 11zm4-8a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 3zm8 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 11a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zm10.657-5.657a.5.5 0 010 .707l-1.414 1.414a.5.5 0 11-.707-.707l1.414-1.414a.5.5 0 01.707 0zM4.464 7.464a.5.5 0 01-.707 0L2.343 6.05a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-brightness-alt-high-fill' fill='currentColor' id='brightness-alt-high-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 11a4 4 0 118 0 .5.5 0 01-.5.5h-7A.5.5 0 014 11zm4-8a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 3zm8 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 11a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zm10.657-5.657a.5.5 0 010 .707l-1.414 1.414a.5.5 0 11-.707-.707l1.414-1.414a.5.5 0 01.707 0zM4.464 7.464a.5.5 0 01-.707 0L2.343 6.05a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-brightness-alt-low' fill='currentColor' id='brightness-alt-low' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.5 5.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 6a.5.5 0 110-1 .5.5 0 010 1zm-11 0a.5.5 0 110-1 .5.5 0 010 1zm9.743-4.036a.5.5 0 11-.707-.707.5.5 0 01.707.707zm-8.486 0a.5.5 0 11.707-.707.5.5 0 01-.707.707z'/%3e%3cpath fill-rule='evenodd' d='M5.041 10.5h5.918a3 3 0 00-5.918 0zM4 11a4 4 0 118 0 .5.5 0 01-.5.5h-7A.5.5 0 014 11z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-brightness-alt-low-fill' fill='currentColor' id='brightness-alt-low-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.5 5.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 6a.5.5 0 110-1 .5.5 0 010 1zm-11 0a.5.5 0 110-1 .5.5 0 010 1zm9.743-4.036a.5.5 0 11-.707-.707.5.5 0 01.707.707zm-8.486 0a.5.5 0 11.707-.707.5.5 0 01-.707.707z'/%3e%3cpath fill-rule='evenodd' d='M4 11a4 4 0 118 0 .5.5 0 01-.5.5h-7A.5.5 0 014 11z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-brightness-high' fill='currentColor' id='brightness-high' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 11a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-brightness-high-fill' fill='currentColor' id='brightness-high-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12 8a4 4 0 11-8 0 4 4 0 018 0z'/%3e%3cpath fill-rule='evenodd' d='M8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-brightness-low' fill='currentColor' id='brightness-low' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 11a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8z'/%3e%3cpath d='M8.5 2.5a.5.5 0 11-1 0 .5.5 0 011 0zm0 11a.5.5 0 11-1 0 .5.5 0 011 0zm5-5a.5.5 0 110-1 .5.5 0 010 1zm-11 0a.5.5 0 110-1 .5.5 0 010 1zm9.743-4.036a.5.5 0 11-.707-.707.5.5 0 01.707.707zm-7.779 7.779a.5.5 0 11-.707-.707.5.5 0 01.707.707zm7.072 0a.5.5 0 11.707-.707.5.5 0 01-.707.707zM3.757 4.464a.5.5 0 11.707-.707.5.5 0 01-.707.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-brightness-low-fill' fill='currentColor' id='brightness-low-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12 8a4 4 0 11-8 0 4 4 0 018 0zM8.5 2.5a.5.5 0 11-1 0 .5.5 0 011 0zm0 11a.5.5 0 11-1 0 .5.5 0 011 0zm5-5a.5.5 0 110-1 .5.5 0 010 1zm-11 0a.5.5 0 110-1 .5.5 0 010 1zm9.743-4.036a.5.5 0 11-.707-.707.5.5 0 01.707.707zm-7.779 7.779a.5.5 0 11-.707-.707.5.5 0 01.707.707zm7.072 0a.5.5 0 11.707-.707.5.5 0 01-.707.707zM3.757 4.464a.5.5 0 11.707-.707.5.5 0 01-.707.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-broadcast' fill='currentColor' id='broadcast' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.05 3.05a7 7 0 000 9.9.5.5 0 01-.707.707 8 8 0 010-11.314.5.5 0 01.707.707zm2.122 2.122a4 4 0 000 5.656.5.5 0 01-.708.708 5 5 0 010-7.072.5.5 0 01.708.708zm5.656-.708a.5.5 0 01.708 0 5 5 0 010 7.072.5.5 0 11-.708-.708 4 4 0 000-5.656.5.5 0 010-.708zm2.122-2.12a.5.5 0 01.707 0 8 8 0 010 11.313.5.5 0 01-.707-.707 7 7 0 000-9.9.5.5 0 010-.707z'/%3e%3cpath d='M10 8a2 2 0 11-4 0 2 2 0 014 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-broadcast-pin' fill='currentColor' id='broadcast-pin' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.05 3.05a7 7 0 000 9.9.5.5 0 01-.707.707 8 8 0 010-11.314.5.5 0 01.707.707zm2.122 2.122a4 4 0 000 5.656.5.5 0 01-.708.708 5 5 0 010-7.072.5.5 0 01.708.708zm5.656-.708a.5.5 0 01.708 0 5 5 0 010 7.072.5.5 0 11-.708-.708 4 4 0 000-5.656.5.5 0 010-.708zm2.122-2.12a.5.5 0 01.707 0 8 8 0 010 11.313.5.5 0 01-.707-.707 7 7 0 000-9.9.5.5 0 010-.707zM6 8a2 2 0 112.5 1.937V15.5a.5.5 0 01-1 0V9.937A2 2 0 016 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-brush' fill='currentColor' id='brush' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15.825.12a.5.5 0 01.132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 01-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 01-3.078.132 3.658 3.658 0 01-.563-.135 1.382 1.382 0 01-.465-.247.714.714 0 01-.204-.288.622.622 0 01.004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 01.596.04zM4.705 11.912a1.23 1.23 0 00-.419-.1c-.247-.013-.574.05-.88.479a11.01 11.01 0 00-.5.777l-.104.177c-.107.181-.213.362-.32.528-.206.317-.438.61-.76.861a7.127 7.127 0 002.657-.12c.559-.139.843-.569.993-1.06a3.121 3.121 0 00.126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 001.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.591 1.927-5.566 4.66-7.302 6.792-.442.543-.796 1.243-1.042 1.826a11.507 11.507 0 00-.276.721l.575.575zm-4.973 3.04l.007-.005a.031.031 0 01-.007.004zm3.582-3.043l.002.001h-.002z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-brush-fill' fill='currentColor' id='brush-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15.825.12a.5.5 0 01.132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 01-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 01-3.078.132 3.658 3.658 0 01-.563-.135 1.382 1.382 0 01-.465-.247.714.714 0 01-.204-.288.622.622 0 01.004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 01.596.04z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bucket' fill='currentColor' id='bucket' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.522 5H2a.5.5 0 00-.494.574l1.372 9.149A1.5 1.5 0 004.36 16h7.278a1.5 1.5 0 001.483-1.277l1.373-9.149A.5.5 0 0014 5h-.522A5.5 5.5 0 002.522 5zm1.005 0h8.945a4.5 4.5 0 00-8.945 0zm9.892 1H2.581l1.286 8.574A.5.5 0 004.36 15h7.278a.5.5 0 00.494-.426L13.42 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bucket-fill' fill='currentColor' id='bucket-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.522 5H2a.5.5 0 00-.494.574l1.372 9.149A1.5 1.5 0 004.36 16h7.278a1.5 1.5 0 001.483-1.277l1.373-9.149A.5.5 0 0014 5h-.522A5.5 5.5 0 002.522 5zm1.005 0h8.945a4.5 4.5 0 00-8.945 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bug' fill='currentColor' id='bug' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.355.522a.5.5 0 01.623.333l.291.956A4.979 4.979 0 018 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 11.957.29l-.41 1.352A4.985 4.985 0 0113 6h.5a.5.5 0 00.5-.5V5a.5.5 0 011 0v.5A1.5 1.5 0 0113.5 7H13v1h1.5a.5.5 0 010 1H13v1h.5a1.5 1.5 0 011.5 1.5v.5a.5.5 0 11-1 0v-.5a.5.5 0 00-.5-.5H13a5 5 0 01-10 0h-.5a.5.5 0 00-.5.5v.5a.5.5 0 11-1 0v-.5A1.5 1.5 0 012.5 10H3V9H1.5a.5.5 0 010-1H3V7h-.5A1.5 1.5 0 011 5.5V5a.5.5 0 011 0v.5a.5.5 0 00.5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 01.333-.623zM4 7v4a4 4 0 003.5 3.97V7H4zm4.5 0v7.97A4 4 0 0012 11V7H8.5zM12 6H4a3.99 3.99 0 011.333-2.982A3.983 3.983 0 018 2c1.025 0 1.959.385 2.666 1.018A3.989 3.989 0 0112 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bug-fill' fill='currentColor' id='bug-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.978.855a.5.5 0 10-.956.29l.41 1.352A4.985 4.985 0 003 6h10a4.985 4.985 0 00-1.432-3.503l.41-1.352a.5.5 0 10-.956-.29l-.291.956A4.978 4.978 0 008 1a4.979 4.979 0 00-2.731.811l-.29-.956zM13 6v1H8.5v8.975A5 5 0 0013 11h.5a.5.5 0 01.5.5v.5a.5.5 0 101 0v-.5a1.5 1.5 0 00-1.5-1.5H13V9h1.5a.5.5 0 000-1H13V7h.5A1.5 1.5 0 0015 5.5V5a.5.5 0 00-1 0v.5a.5.5 0 01-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 01-.5-.5V5a.5.5 0 00-1 0v.5A1.5 1.5 0 002.5 7H3v1H1.5a.5.5 0 000 1H3v1h-.5A1.5 1.5 0 001 11.5v.5a.5.5 0 101 0v-.5a.5.5 0 01.5-.5H3a5 5 0 004.5 4.975z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-building' fill='currentColor' id='building' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.763.075A.5.5 0 0115 .5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-1v1.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V10a.5.5 0 01.342-.474L6 7.64V4.5a.5.5 0 01.276-.447l8-4a.5.5 0 01.487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V15h2V1.309l-7 3.5V15z'/%3e%3cpath d='M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-bullseye' fill='currentColor' id='bullseye' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M8 13A5 5 0 108 3a5 5 0 000 10zm0 1A6 6 0 108 2a6 6 0 000 12z'/%3e%3cpath fill-rule='evenodd' d='M8 11a3 3 0 100-6 3 3 0 000 6zm0 1a4 4 0 100-8 4 4 0 000 8z'/%3e%3cpath d='M9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calculator' fill='currentColor' id='calculator' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1zM4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4z'/%3e%3cpath d='M4 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-2zm0 4a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm0 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm0 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm3-6a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm0 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm0 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm3-6a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm0 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calculator-fill' fill='currentColor' id='calculator-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2 .5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-2zm0 4a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM4.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM4 12.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 6a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM7 9.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM10 6.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 2.5a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar' fill='currentColor' id='calendar' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-check' fill='currentColor' id='calendar-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z'/%3e%3cpath fill-rule='evenodd' d='M10.854 7.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7.5 9.793l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-check-fill' fill='currentColor' id='calendar-check-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 .5a.5.5 0 00-1 0V1H2a2 2 0 00-2 2v1h16V3a2 2 0 00-2-2h-1V.5a.5.5 0 00-1 0V1H4V.5zM16 14V5H0v9a2 2 0 002 2h12a2 2 0 002-2zm-5.146-5.146a.5.5 0 00-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-date' fill='currentColor' id='calendar-date' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z'/%3e%3cpath d='M6.445 11.688V6.354h-.633A12.6 12.6 0 004.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-date-fill' fill='currentColor' id='calendar-date-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 .5a.5.5 0 00-1 0V1H2a2 2 0 00-2 2v1h16V3a2 2 0 00-2-2h-1V.5a.5.5 0 00-1 0V1H4V.5zM16 14V5H0v9a2 2 0 002 2h12a2 2 0 002-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm.066-2.544c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2zm-2.957-2.89v5.332H5.77v-4.61h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 011.313-.805h.632z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-day' fill='currentColor' id='calendar-day' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z'/%3e%3cpath d='M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 00-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 100-.855.426.426 0 00-.43.43zm.094 5.093h.672V7.418h-.672v4.105z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-day-fill' fill='currentColor' id='calendar-day-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 .5a.5.5 0 00-1 0V1H2a2 2 0 00-2 2v1h16V3a2 2 0 00-2-2h-1V.5a.5.5 0 00-1 0V1H4V.5zM16 14V5H0v9a2 2 0 002 2h12a2 2 0 002-2zm-4.785-6.145a.425.425 0 01-.43-.425c0-.242.192-.43.43-.43a.428.428 0 110 .855zm.336.563v4.105h-.672V8.418h.672zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 00-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-event' fill='currentColor' id='calendar-event' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z'/%3e%3cpath d='M11 6.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-event-fill' fill='currentColor' id='calendar-event-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 .5a.5.5 0 00-1 0V1H2a2 2 0 00-2 2v1h16V3a2 2 0 00-2-2h-1V.5a.5.5 0 00-1 0V1H4V.5zM16 14V5H0v9a2 2 0 002 2h12a2 2 0 002-2zm-3.5-7a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-fill' fill='currentColor' id='calendar-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V5h16V4H0V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-minus' fill='currentColor' id='calendar-minus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z'/%3e%3cpath fill-rule='evenodd' d='M5.5 9.5A.5.5 0 016 9h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-minus-fill' fill='currentColor' id='calendar-minus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 .5a.5.5 0 00-1 0V1H2a2 2 0 00-2 2v1h16V3a2 2 0 00-2-2h-1V.5a.5.5 0 00-1 0V1H4V.5zM16 14V5H0v9a2 2 0 002 2h12a2 2 0 002-2zM6 10a.5.5 0 000 1h4a.5.5 0 000-1H6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-month' fill='currentColor' id='calendar-month' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z'/%3e%3cpath d='M2.56 11.332L3.1 9.73h1.984l.54 1.602h.718L4.444 6h-.696L1.85 11.332h.71zm1.544-4.527L4.9 9.18H3.284l.8-2.375h.02zm5.746.422h-.676V9.77c0 .652-.414 1.023-1.004 1.023-.539 0-.98-.246-.98-1.012V7.227h-.676v2.746c0 .941.606 1.425 1.453 1.425.656 0 1.043-.28 1.188-.605h.027v.539h.668V7.227zm2.258 5.046c-.563 0-.91-.304-.985-.636h-.687c.094.683.625 1.199 1.668 1.199.93 0 1.746-.527 1.746-1.578V7.227h-.649v.578h-.019c-.191-.348-.637-.64-1.195-.64-.965 0-1.64.679-1.64 1.886v.34c0 1.23.683 1.902 1.64 1.902.558 0 1.008-.293 1.172-.648h.02v.605c0 .645-.423 1.023-1.071 1.023zm.008-4.53c.648 0 1.062.527 1.062 1.359v.253c0 .848-.39 1.364-1.062 1.364-.692 0-1.098-.512-1.098-1.364v-.253c0-.868.406-1.36 1.098-1.36z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-month-fill' fill='currentColor' id='calendar-month-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 .5a.5.5 0 00-1 0V1H2a2 2 0 00-2 2v1h16V3a2 2 0 00-2-2h-1V.5a.5.5 0 00-1 0V1H4V.5zM16 14V5H0v9a2 2 0 002 2h12a2 2 0 002-2zM2.56 12.332l.54-1.602h1.984l.54 1.602h.718L4.444 7h-.696L1.85 12.332h.71zm1.544-4.527L4.9 10.18H3.284l.8-2.375h.02zm5.746.422h-.676v2.543c0 .652-.414 1.023-1.004 1.023-.539 0-.98-.246-.98-1.012V8.227h-.676v2.746c0 .941.606 1.425 1.453 1.425.656 0 1.043-.28 1.188-.605h.027v.539h.668V8.227zm1.273 4.41c.075.332.422.636.985.636.648 0 1.07-.378 1.07-1.023v-.605h-.02c-.163.355-.613.648-1.171.648-.957 0-1.64-.672-1.64-1.902v-.34c0-1.207.675-1.887 1.64-1.887.558 0 1.004.293 1.195.64h.02v-.577h.648v4.03c0 1.052-.816 1.579-1.746 1.579-1.043 0-1.574-.516-1.668-1.2h.687zm2.055-2.535c0-.832-.414-1.36-1.062-1.36-.692 0-1.098.492-1.098 1.36v.253c0 .852.406 1.364 1.098 1.364.671 0 1.062-.516 1.062-1.364v-.253z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-plus' fill='currentColor' id='calendar-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z'/%3e%3cpath fill-rule='evenodd' d='M8 7a.5.5 0 01.5.5V9H10a.5.5 0 010 1H8.5v1.5a.5.5 0 01-1 0V10H6a.5.5 0 010-1h1.5V7.5A.5.5 0 018 7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-plus-fill' fill='currentColor' id='calendar-plus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 .5a.5.5 0 00-1 0V1H2a2 2 0 00-2 2v1h16V3a2 2 0 00-2-2h-1V.5a.5.5 0 00-1 0V1H4V.5zM16 14V5H0v9a2 2 0 002 2h12a2 2 0 002-2zM8.5 8.5a.5.5 0 00-1 0V10H6a.5.5 0 000 1h1.5v1.5a.5.5 0 001 0V11H10a.5.5 0 000-1H8.5V8.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-range' fill='currentColor' id='calendar-range' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z'/%3e%3cpath d='M9 7a1 1 0 011-1h5v2h-5a1 1 0 01-1-1zM1 9h4a1 1 0 010 2H1V9z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-range-fill' fill='currentColor' id='calendar-range-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 .5a.5.5 0 00-1 0V1H2a2 2 0 00-2 2v1h16V3a2 2 0 00-2-2h-1V.5a.5.5 0 00-1 0V1H4V.5zM16 7V5H0v5h5a1 1 0 110 2H0v2a2 2 0 002 2h12a2 2 0 002-2V9h-6a1 1 0 110-2h6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-week' fill='currentColor' id='calendar-week' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z'/%3e%3cpath d='M11 6.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-5 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-week-fill' fill='currentColor' id='calendar-week-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 .5a.5.5 0 00-1 0V1H2a2 2 0 00-2 2v1h16V3a2 2 0 00-2-2h-1V.5a.5.5 0 00-1 0V1H4V.5zM16 14V5H0v9a2 2 0 002 2h12a2 2 0 002-2zM9.5 7a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm3 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM2 10.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm3.5-.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-x' fill='currentColor' id='calendar-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z'/%3e%3cpath fill-rule='evenodd' d='M6.146 7.146a.5.5 0 01.708 0L8 8.293l1.146-1.147a.5.5 0 11.708.708L8.707 9l1.147 1.146a.5.5 0 01-.708.708L8 9.707l-1.146 1.147a.5.5 0 01-.708-.708L7.293 9 6.146 7.854a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar-x-fill' fill='currentColor' id='calendar-x-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 .5a.5.5 0 00-1 0V1H2a2 2 0 00-2 2v1h16V3a2 2 0 00-2-2h-1V.5a.5.5 0 00-1 0V1H4V.5zM16 14V5H0v9a2 2 0 002 2h12a2 2 0 002-2zM6.854 8.146a.5.5 0 10-.708.708L7.293 10l-1.147 1.146a.5.5 0 00.708.708L8 10.707l1.146 1.147a.5.5 0 00.708-.708L8.707 10l1.147-1.146a.5.5 0 00-.708-.708L8 9.293 6.854 8.146z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2' fill='currentColor' id='calendar2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H2z'/%3e%3cpath d='M2.5 4a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-check' fill='currentColor' id='calendar2-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H2z'/%3e%3cpath d='M2.5 4a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V4z'/%3e%3cpath fill-rule='evenodd' d='M10.854 8.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L7.5 10.793l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-check-fill' fill='currentColor' id='calendar2-check-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 3.5c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1zm8.854 5.354a.5.5 0 00-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-date' fill='currentColor' id='calendar2-date' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H2z'/%3e%3cpath d='M2.5 4a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V4zm3.945 8.688V7.354h-.633A12.6 12.6 0 004.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-date-fill' fill='currentColor' id='calendar2-date-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 3.5c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1zm7.336 9.29c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm.066-2.544c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2zm-2.957-2.89v5.332H5.77v-4.61h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 011.313-.805h.632z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-day' fill='currentColor' id='calendar2-day' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H2z'/%3e%3cpath d='M2.5 4a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V4zm2.184 8.523v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 00-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 100-.855.426.426 0 00-.43.43zm.094 5.093h.672V8.418h-.672v4.105z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-day-fill' fill='currentColor' id='calendar2-day-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 3.5c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1zm9.215 4.355a.425.425 0 01-.43-.425c0-.242.192-.43.43-.43a.428.428 0 110 .855zm.336.563v4.105h-.672V8.418h.672zm-6.867 4.105v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 00-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-event' fill='currentColor' id='calendar2-event' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H2z'/%3e%3cpath d='M2.5 4a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V4zM11 7.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-event-fill' fill='currentColor' id='calendar2-event-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 3.5c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1zM11.5 7a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-fill' fill='currentColor' id='calendar2-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 .5a.5.5 0 00-1 0V1H2a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2h-1V.5a.5.5 0 00-1 0V1H4V.5zM2.545 3c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5H2.545z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-minus' fill='currentColor' id='calendar2-minus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H2z'/%3e%3cpath d='M2.5 4a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V4z'/%3e%3cpath fill-rule='evenodd' d='M5.5 10.5A.5.5 0 016 10h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-minus-fill' fill='currentColor' id='calendar2-minus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 3.5c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1zM6 10a.5.5 0 000 1h4a.5.5 0 000-1H6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-month' fill='currentColor' id='calendar2-month' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H2z'/%3e%3cpath d='M2.5 4a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V4zm.06 8.332l.54-1.602h1.984l.54 1.602h.718L4.444 7h-.696L1.85 12.332h.71zm1.544-4.527L4.9 10.18H3.284l.8-2.375h.02zm5.746.422h-.676v2.543c0 .652-.414 1.023-1.004 1.023-.539 0-.98-.246-.98-1.012V8.227h-.676v2.746c0 .941.606 1.425 1.453 1.425.656 0 1.043-.28 1.188-.605h.027v.539h.668V8.227zm2.258 5.046c-.563 0-.91-.304-.985-.636h-.687c.094.683.625 1.199 1.668 1.199.93 0 1.746-.527 1.746-1.578V8.227h-.649v.578h-.019c-.191-.348-.637-.64-1.195-.64-.965 0-1.64.679-1.64 1.886v.34c0 1.23.683 1.902 1.64 1.902.558 0 1.008-.293 1.172-.648h.02v.605c0 .645-.423 1.023-1.071 1.023zm.008-4.53c.648 0 1.062.527 1.062 1.359v.253c0 .848-.39 1.364-1.062 1.364-.692 0-1.098-.512-1.098-1.364v-.253c0-.868.406-1.36 1.098-1.36z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-month-fill' fill='currentColor' id='calendar2-month-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 3.5c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1zm.56 8.832l.54-1.602h1.984l.54 1.602h.718L4.444 7h-.696L1.85 12.332h.71zm1.544-4.527L4.9 10.18H3.284l.8-2.375h.02zm5.746.422h-.676v2.543c0 .652-.414 1.023-1.004 1.023-.539 0-.98-.246-.98-1.012V8.227h-.676v2.746c0 .941.606 1.425 1.453 1.425.656 0 1.043-.28 1.188-.605h.027v.539h.668V8.227zm1.273 4.41c.075.332.422.636.985.636.648 0 1.07-.378 1.07-1.023v-.605h-.02c-.163.355-.613.648-1.171.648-.957 0-1.64-.672-1.64-1.902v-.34c0-1.207.675-1.887 1.64-1.887.558 0 1.004.293 1.195.64h.02v-.577h.648v4.03c0 1.052-.816 1.579-1.746 1.579-1.043 0-1.574-.516-1.668-1.2h.687zm2.055-2.535c0-.832-.414-1.36-1.062-1.36-.692 0-1.098.492-1.098 1.36v.253c0 .852.406 1.364 1.098 1.364.671 0 1.062-.516 1.062-1.364v-.253z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-plus' fill='currentColor' id='calendar2-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H2z'/%3e%3cpath d='M2.5 4a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V4z'/%3e%3cpath fill-rule='evenodd' d='M8 8a.5.5 0 01.5.5V10H10a.5.5 0 010 1H8.5v1.5a.5.5 0 01-1 0V11H6a.5.5 0 010-1h1.5V8.5A.5.5 0 018 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-plus-fill' fill='currentColor' id='calendar2-plus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 3.5c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1zm6.5 5a.5.5 0 00-1 0V10H6a.5.5 0 000 1h1.5v1.5a.5.5 0 001 0V11H10a.5.5 0 000-1H8.5V8.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-range' fill='currentColor' id='calendar2-range' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H2z'/%3e%3cpath d='M2.5 4a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V4zM9 8a1 1 0 011-1h5v2h-5a1 1 0 01-1-1zm-8 2h4a1 1 0 110 2H1v-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-range-fill' fill='currentColor' id='calendar2-range-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 3.5c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1zM10 7a1 1 0 000 2h5V7h-5zm-4 4a1 1 0 00-1-1H1v2h4a1 1 0 001-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-week' fill='currentColor' id='calendar2-week' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H2z'/%3e%3cpath d='M2.5 4a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V4zM11 7.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-5 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-week-fill' fill='currentColor' id='calendar2-week-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 3.5c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1zM8.5 7a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm3 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM3 10.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm3.5-.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-x' fill='currentColor' id='calendar2-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v11a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H2z'/%3e%3cpath d='M2.5 4a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V4z'/%3e%3cpath fill-rule='evenodd' d='M6.146 8.146a.5.5 0 01.708 0L8 9.293l1.146-1.147a.5.5 0 11.708.708L8.707 10l1.147 1.146a.5.5 0 01-.708.708L8 10.707l-1.146 1.147a.5.5 0 01-.708-.708L7.293 10 6.146 8.854a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar2-x-fill' fill='currentColor' id='calendar2-x-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 3.5c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1zm4.854 4.646a.5.5 0 10-.708.708L7.293 10l-1.147 1.146a.5.5 0 00.708.708L8 10.707l1.146 1.147a.5.5 0 00.708-.708L8.707 10l1.147-1.146a.5.5 0 00-.708-.708L8 9.293 6.854 8.146z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar3' fill='currentColor' id='calendar3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z'/%3e%3cpath fill-rule='evenodd' d='M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar3-event' fill='currentColor' id='calendar3-event' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z'/%3e%3cpath fill-rule='evenodd' d='M12 7a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar3-event-fill' fill='currentColor' id='calendar3-event-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2h16a2 2 0 00-2-2H2zm14 3H0v11a2 2 0 002 2h12a2 2 0 002-2V3zm-2 3a1 1 0 11-2 0 1 1 0 012 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar3-fill' fill='currentColor' id='calendar3-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 2a2 2 0 012-2h12a2 2 0 012 2H0z'/%3e%3cpath fill-rule='evenodd' d='M0 3h16v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar3-range' fill='currentColor' id='calendar3-range' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z'/%3e%3cpath fill-rule='evenodd' d='M7 10a1 1 0 000-2H1v2h6zm2-3a1 1 0 010-2h6v2H9z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar3-range-fill' fill='currentColor' id='calendar3-range-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2h16a2 2 0 00-2-2H2zm14 3H0v5h6a1 1 0 010 2H0v4a2 2 0 002 2h12a2 2 0 002-2V7h-6a1 1 0 110-2h6V3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar3-week' fill='currentColor' id='calendar3-week' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z'/%3e%3cpath fill-rule='evenodd' d='M12 7a1 1 0 100-2 1 1 0 000 2zm-5 3a1 1 0 100-2 1 1 0 000 2zm2-3a1 1 0 100-2 1 1 0 000 2zm-5 3a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar3-week-fill' fill='currentColor' id='calendar3-week-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2h16a2 2 0 00-2-2H2zm14 3H0v11a2 2 0 002 2h12a2 2 0 002-2V3zm-2 3a1 1 0 11-2 0 1 1 0 012 0zM7 9a1 1 0 11-2 0 1 1 0 012 0zm3-2a1 1 0 100-2 1 1 0 000 2zM4 9a1 1 0 11-2 0 1 1 0 012 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar4' fill='currentColor' id='calendar4' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v1h14V3a1 1 0 00-1-1H2zm13 3H1v9a1 1 0 001 1h12a1 1 0 001-1V5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar4-event' fill='currentColor' id='calendar4-event' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v1h14V3a1 1 0 00-1-1H2zm13 3H1v9a1 1 0 001 1h12a1 1 0 001-1V5z'/%3e%3crect width='2' height='2' x='11' y='7' rx='.5'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar4-range' fill='currentColor' id='calendar4-range' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v1h14V3a1 1 0 00-1-1H2zm13 3H1v9a1 1 0 001 1h12a1 1 0 001-1V5z'/%3e%3cpath d='M9 7.5a.5.5 0 01.5-.5H15v2H9.5a.5.5 0 01-.5-.5v-1zm-2 3a.5.5 0 00-.5-.5H1v2h5.5a.5.5 0 00.5-.5v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-calendar4-week' fill='currentColor' id='calendar4-week' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM2 2a1 1 0 00-1 1v1h14V3a1 1 0 00-1-1H2zm13 3H1v9a1 1 0 001 1h12a1 1 0 001-1V5z'/%3e%3cpath d='M11 7.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-2 3a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm-3 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-camera' fill='currentColor' id='camera' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15 12V6a1 1 0 00-1-1h-1.172a3 3 0 01-2.12-.879l-.83-.828A1 1 0 009.173 3H6.828a1 1 0 00-.707.293l-.828.828A3 3 0 013.172 5H2a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1zM2 4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.172a2 2 0 01-1.414-.586l-.828-.828A2 2 0 009.172 2H6.828a2 2 0 00-1.414.586l-.828.828A2 2 0 013.172 4H2z'/%3e%3cpath fill-rule='evenodd' d='M8 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 1a3.5 3.5 0 100-7 3.5 3.5 0 000 7z'/%3e%3cpath d='M3 6.5a.5.5 0 11-1 0 .5.5 0 011 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-camera-fill' fill='currentColor' id='camera-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.5 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'/%3e%3cpath fill-rule='evenodd' d='M2 4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.172a2 2 0 01-1.414-.586l-.828-.828A2 2 0 009.172 2H6.828a2 2 0 00-1.414.586l-.828.828A2 2 0 013.172 4H2zm.5 2a.5.5 0 100-1 .5.5 0 000 1zm9 2.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-camera-reels' fill='currentColor' id='camera-reels' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a2 2 0 012-2h7.5a2 2 0 011.983 1.738l3.11-1.382A1 1 0 0116 7.269v7.462a1 1 0 01-1.406.913l-3.111-1.382A2 2 0 019.5 16H2a2 2 0 01-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 00-1 1v6a1 1 0 001 1h7.5a1 1 0 001-1V8a1 1 0 00-1-1H2z'/%3e%3cpath fill-rule='evenodd' d='M3 5a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 100-6 3 3 0 000 6z'/%3e%3cpath fill-rule='evenodd' d='M9 5a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 100-6 3 3 0 000 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-camera-reels-fill' fill='currentColor' id='camera-reels-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a2 2 0 012-2h7.5a2 2 0 011.983 1.738l3.11-1.382A1 1 0 0116 7.269v7.462a1 1 0 01-1.406.913l-3.111-1.382A2 2 0 019.5 16H2a2 2 0 01-2-2V8z'/%3e%3ccircle cx='3' cy='3' r='3'/%3e%3ccircle cx='9' cy='3' r='3'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-camera-video' fill='currentColor' id='camera-video' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 5a2 2 0 012-2h7.5a2 2 0 011.983 1.738l3.11-1.382A1 1 0 0116 4.269v7.462a1 1 0 01-1.406.913l-3.111-1.382A2 2 0 019.5 13H2a2 2 0 01-2-2V5zm11.5 5.175l3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 00-1 1v6a1 1 0 001 1h7.5a1 1 0 001-1V5a1 1 0 00-1-1H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-camera-video-fill' fill='currentColor' id='camera-video-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 5a2 2 0 012-2h7.5a2 2 0 011.983 1.738l3.11-1.382A1 1 0 0116 4.269v7.462a1 1 0 01-1.406.913l-3.111-1.382A2 2 0 019.5 13H2a2 2 0 01-2-2V5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-camera-video-off' fill='currentColor' id='camera-video-off' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.961 12.365a1.99 1.99 0 00.522-1.103l3.11 1.382A1 1 0 0016 11.731V4.269a1 1 0 00-1.406-.913l-3.111 1.382A2 2 0 009.5 3H4.272l.714 1H9.5a1 1 0 011 1v6a1 1 0 01-.144.518l.605.847zM1.428 4.18A.999.999 0 001 5v6a1 1 0 001 1h5.014l.714 1H2a2 2 0 01-2-2V5c0-.675.334-1.272.847-1.634l.58.814zM15 11.73l-3.5-1.555v-4.35L15 4.269v7.462zm-4.407 3.56l-10-14 .814-.58 10 14-.814.58z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-camera-video-off-fill' fill='currentColor' id='camera-video-off-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.961 12.365a1.99 1.99 0 00.522-1.103l3.11 1.382A1 1 0 0016 11.731V4.269a1 1 0 00-1.406-.913l-3.111 1.382A2 2 0 009.5 3H4.272l6.69 9.365zm-10.114-9A2.001 2.001 0 000 5v6a2 2 0 002 2h5.728L.847 3.366zm9.746 11.925l-10-14 .814-.58 10 14-.814.58z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-camera2' fill='currentColor' id='camera2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9 5C7.343 5 5 6.343 5 8a4 4 0 014-4v1z'/%3e%3cpath fill-rule='evenodd' d='M14.333 3h-2.015A5.97 5.97 0 009 2a5.972 5.972 0 00-3.318 1H1.667C.747 3 0 3.746 0 4.667v6.666C0 12.253.746 13 1.667 13h4.015c.95.632 2.091 1 3.318 1a5.973 5.973 0 003.318-1h2.015c.92 0 1.667-.746 1.667-1.667V4.667C16 3.747 15.254 3 14.333 3zM1.5 5a.5.5 0 100-1 .5.5 0 000 1zM9 13A5 5 0 109 3a5 5 0 000 10z'/%3e%3cpath d='M2 3a1 1 0 011-1h1a1 1 0 010 2H3a1 1 0 01-1-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-capslock' fill='currentColor' id='capslock' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.27 1.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM14.346 8.5L8 1.731 1.654 8.5H4.5a1 1 0 011 1v1h5v-1a1 1 0 011-1h2.846zm-9.846 5a1 1 0 011-1h5a1 1 0 011 1v1a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1zm6 0h-5v1h5v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-capslock-fill' fill='currentColor' id='capslock-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.27 1.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM4.5 13.5a1 1 0 011-1h5a1 1 0 011 1v1a1 1 0 01-1 1h-5a1 1 0 01-1-1v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-card-checklist' fill='currentColor' id='card-checklist' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z'/%3e%3cpath fill-rule='evenodd' d='M7 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-1.496-.854a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0zM7 9.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-1.496-.854a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 01.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-card-heading' fill='currentColor' id='card-heading' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z'/%3e%3cpath fill-rule='evenodd' d='M3 8.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z'/%3e%3cpath d='M3 5.5a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-card-image' fill='currentColor' id='card-image' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.5 3h-13a.5.5 0 00-.5.5v9c0 .013 0 .027.002.04V12l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71a.5.5 0 01.577-.094L15 9.499V3.5a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13zm4.502 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-card-list' fill='currentColor' id='card-list' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z'/%3e%3cpath fill-rule='evenodd' d='M5 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 8zm0-2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z'/%3e%3ccircle cx='3.5' cy='5.5' r='.5'/%3e%3ccircle cx='3.5' cy='8' r='.5'/%3e%3ccircle cx='3.5' cy='10.5' r='.5'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-card-text' fill='currentColor' id='card-text' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z'/%3e%3cpath fill-rule='evenodd' d='M3 5.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 8a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8zm0 2.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-down' fill='currentColor' id='caret-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 001.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 00-.753 1.659z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-down-fill' fill='currentColor' id='caret-down-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-down-square' fill='currentColor' id='caret-down-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.544 6.295A.5.5 0 014 6h8a.5.5 0 01.374.832l-4 4.5a.5.5 0 01-.748 0l-4-4.5a.5.5 0 01-.082-.537z'/%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-down-square-fill' fill='currentColor' id='caret-down-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 4a.5.5 0 00-.374.832l4 4.5a.5.5 0 00.748 0l4-4.5A.5.5 0 0012 6H4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-left' fill='currentColor' id='caret-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 010-1.506l5.48-4.796A1 1 0 0111 3.204v9.592a1 1 0 01-1.659.753z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-left-fill' fill='currentColor' id='caret-left-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 00-1.659-.753l-5.48 4.796a1 1 0 000 1.506z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-left-square' fill='currentColor' id='caret-left-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M10.205 12.456A.5.5 0 0010.5 12V4a.5.5 0 00-.832-.374l-4.5 4a.5.5 0 000 .748l4.5 4a.5.5 0 00.537.082z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-left-square-fill' fill='currentColor' id='caret-left-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm10.5 10a.5.5 0 01-.832.374l-4.5-4a.5.5 0 010-.748l4.5-4A.5.5 0 0110.5 4v8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-right' fill='currentColor' id='caret-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-right-fill' fill='currentColor' id='caret-right-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-right-square' fill='currentColor' id='caret-right-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M5.795 12.456A.5.5 0 015.5 12V4a.5.5 0 01.832-.374l4.5 4a.5.5 0 010 .748l-4.5 4a.5.5 0 01-.537.082z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-right-square-fill' fill='currentColor' id='caret-right-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm5.5 10a.5.5 0 00.832.374l4.5-4a.5.5 0 000-.748l-4.5-4A.5.5 0 005.5 4v8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-up' fill='currentColor' id='caret-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.204 11L8 5.519 12.796 11H3.204zm-.753-.659l4.796-5.48a1 1 0 011.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 01-.753-1.659z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-up-fill' fill='currentColor' id='caret-up-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 00.753-1.659l-4.796-5.48a1 1 0 00-1.506 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-up-square' fill='currentColor' id='caret-up-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M3.544 10.705A.5.5 0 004 11h8a.5.5 0 00.374-.832l-4-4.5a.5.5 0 00-.748 0l-4 4.5a.5.5 0 00-.082.537z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-caret-up-square-fill' fill='currentColor' id='caret-up-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm4 9a.5.5 0 01-.374-.832l4-4.5a.5.5 0 01.748 0l4 4.5A.5.5 0 0112 11H4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cart' fill='currentColor' id='cart' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.491.592l-1.5 8A.5.5 0 0113 12H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cart-check' fill='currentColor' id='cart-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.491.592l-1.5 8A.5.5 0 0113 12H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z'/%3e%3cpath fill-rule='evenodd' d='M11.354 5.646a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L8 8.293l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cart-check-fill' fill='currentColor' id='cart-check-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M.5 1a.5.5 0 000 1h1.11l.401 1.607 1.498 7.985A.5.5 0 004 12h1a2 2 0 100 4 2 2 0 000-4h7a2 2 0 100 4 2 2 0 000-4h1a.5.5 0 00.491-.408l1.5-8A.5.5 0 0014.5 3H2.89l-.405-1.621A.5.5 0 002 1H.5zM4 14a1 1 0 112 0 1 1 0 01-2 0zm7 0a1 1 0 112 0 1 1 0 01-2 0zm.354-7.646a.5.5 0 00-.708-.708L8 8.293 6.854 7.146a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cart-dash' fill='currentColor' id='cart-dash' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.491.592l-1.5 8A.5.5 0 0113 12H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z'/%3e%3cpath fill-rule='evenodd' d='M6 7.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cart-dash-fill' fill='currentColor' id='cart-dash-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M.5 1a.5.5 0 000 1h1.11l.401 1.607 1.498 7.985A.5.5 0 004 12h1a2 2 0 100 4 2 2 0 000-4h7a2 2 0 100 4 2 2 0 000-4h1a.5.5 0 00.491-.408l1.5-8A.5.5 0 0014.5 3H2.89l-.405-1.621A.5.5 0 002 1H.5zM4 14a1 1 0 112 0 1 1 0 01-2 0zm7 0a1 1 0 112 0 1 1 0 01-2 0zM6.5 7a.5.5 0 000 1h4a.5.5 0 000-1h-4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cart-fill' fill='currentColor' id='cart-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.491.592l-1.5 8A.5.5 0 0113 12H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cart-plus' fill='currentColor' id='cart-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.491.592l-1.5 8A.5.5 0 0113 12H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z'/%3e%3cpath fill-rule='evenodd' d='M8.5 5a.5.5 0 01.5.5V7h1.5a.5.5 0 010 1H9v1.5a.5.5 0 01-1 0V8H6.5a.5.5 0 010-1H8V5.5a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cart-plus-fill' fill='currentColor' id='cart-plus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M.5 1a.5.5 0 000 1h1.11l.401 1.607 1.498 7.985A.5.5 0 004 12h1a2 2 0 100 4 2 2 0 000-4h7a2 2 0 100 4 2 2 0 000-4h1a.5.5 0 00.491-.408l1.5-8A.5.5 0 0014.5 3H2.89l-.405-1.621A.5.5 0 002 1H.5zM4 14a1 1 0 112 0 1 1 0 01-2 0zm7 0a1 1 0 112 0 1 1 0 01-2 0zM9 5.5a.5.5 0 00-1 0V7H6.5a.5.5 0 000 1H8v1.5a.5.5 0 001 0V8h1.5a.5.5 0 000-1H9V5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cart-x' fill='currentColor' id='cart-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.491.592l-1.5 8A.5.5 0 0113 12H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z'/%3e%3cpath fill-rule='evenodd' d='M6.646 5.646a.5.5 0 01.708 0L8.5 6.793l1.146-1.147a.5.5 0 01.708.708L9.207 7.5l1.147 1.146a.5.5 0 01-.708.708L8.5 8.207 7.354 9.354a.5.5 0 11-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cart-x-fill' fill='currentColor' id='cart-x-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M.5 1a.5.5 0 000 1h1.11l.401 1.607 1.498 7.985A.5.5 0 004 12h1a2 2 0 100 4 2 2 0 000-4h7a2 2 0 100 4 2 2 0 000-4h1a.5.5 0 00.491-.408l1.5-8A.5.5 0 0014.5 3H2.89l-.405-1.621A.5.5 0 002 1H.5zM4 14a1 1 0 112 0 1 1 0 01-2 0zm7 0a1 1 0 112 0 1 1 0 01-2 0zM7.354 5.646a.5.5 0 10-.708.708L7.793 7.5 6.646 8.646a.5.5 0 10.708.708L8.5 8.207l1.146 1.147a.5.5 0 00.708-.708L9.207 7.5l1.147-1.146a.5.5 0 00-.708-.708L8.5 6.793 7.354 5.646z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cart2' fill='currentColor' id='cart2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2.5A.5.5 0 01.5 2H2a.5.5 0 01.485.379L2.89 4H14.5a.5.5 0 01.485.621l-1.5 6A.5.5 0 0113 11H4a.5.5 0 01-.485-.379L1.61 3H.5a.5.5 0 01-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zm9-1a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cart3' fill='currentColor' id='cart3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cart4' fill='currentColor' id='cart4' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2.5A.5.5 0 01.5 2H2a.5.5 0 01.485.379L2.89 4H14.5a.5.5 0 01.485.621l-1.5 6A.5.5 0 0113 11H4a.5.5 0 01-.485-.379L1.61 3H.5a.5.5 0 01-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zm9-1a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cash' fill='currentColor' id='cash' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15 4H1v8h14V4zM1 3a1 1 0 00-1 1v8a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H1z'/%3e%3cpath d='M13 4a2 2 0 002 2V4h-2zM3 4a2 2 0 01-2 2V4h2zm10 8a2 2 0 012-2v2h-2zM3 12a2 2 0 00-2-2v2h2zm7-4a2 2 0 11-4 0 2 2 0 014 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cash-stack' fill='currentColor' id='cash-stack' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14 3H1a1 1 0 011-1h12a1 1 0 011 1h-1z'/%3e%3cpath fill-rule='evenodd' d='M15 5H1v8h14V5zM1 4a1 1 0 00-1 1v8a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H1z'/%3e%3cpath d='M13 5a2 2 0 002 2V5h-2zM3 5a2 2 0 01-2 2V5h2zm10 8a2 2 0 012-2v2h-2zM3 13a2 2 0 00-2-2v2h2zm7-4a2 2 0 11-4 0 2 2 0 014 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cast' fill='currentColor' id='cast' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.646 9.354l-3.792 3.792a.5.5 0 00.353.854h7.586a.5.5 0 00.354-.854L8.354 9.354a.5.5 0 00-.708 0z'/%3e%3cpath d='M11.414 11H14.5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h3.086l-1 1H1.5A1.5 1.5 0 010 10.5v-7A1.5 1.5 0 011.5 2h13A1.5 1.5 0 0116 3.5v7a1.5 1.5 0 01-1.5 1.5h-2.086l-1-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat' fill='currentColor' id='chat' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.678 11.894a1 1 0 01.287.801 10.97 10.97 0 01-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 01.71-.074A8.06 8.06 0 008 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 01-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 00.244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.52.263-1.639.742-3.468 1.105z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-dots' fill='currentColor' id='chat-dots' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.678 11.894a1 1 0 01.287.801 10.97 10.97 0 01-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 01.71-.074A8.06 8.06 0 008 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 01-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 00.244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.52.263-1.639.742-3.468 1.105z'/%3e%3cpath d='M5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-dots-fill' fill='currentColor' id='chat-dots-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-fill' fill='currentColor' id='chat-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 008 15z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-left' fill='currentColor' id='chat-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v11.586l2-2A2 2 0 014.414 11H14a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12.793a.5.5 0 00.854.353l2.853-2.853A1 1 0 014.414 12H14a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-left-dots' fill='currentColor' id='chat-left-dots' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v11.586l2-2A2 2 0 014.414 11H14a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12.793a.5.5 0 00.854.353l2.853-2.853A1 1 0 014.414 12H14a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath d='M5 6a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-left-dots-fill' fill='currentColor' id='chat-left-dots-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4.414a1 1 0 00-.707.293L.854 15.146A.5.5 0 010 14.793V2zm5 4a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-left-fill' fill='currentColor' id='chat-left-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12.793a.5.5 0 00.854.353l2.853-2.853A1 1 0 014.414 12H14a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-left-quote' fill='currentColor' id='chat-left-quote' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v11.586l2-2A2 2 0 014.414 11H14a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12.793a.5.5 0 00.854.353l2.853-2.853A1 1 0 014.414 12H14a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M7.066 4.76A1.665 1.665 0 004 5.668a1.667 1.667 0 002.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 10.6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 008 5.668a1.667 1.667 0 002.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 10.6.58c1.486-1.54 1.293-3.214.682-4.112z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-left-quote-fill' fill='currentColor' id='chat-left-quote-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4.414a1 1 0 00-.707.293L.854 15.146A.5.5 0 010 14.793V2zm7.194 2.766c.087.124.163.26.227.401.428.948.393 2.377-.942 3.706a.446.446 0 01-.612.01.405.405 0 01-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 7.333 4 6.587 4 5.667 4 4.747 4.776 4 5.734 4c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324.085.083.161.174.227.272zM11 7.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666 0-.92.777-1.667 1.734-1.667.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324.085.083.161.174.227.272.087.124.164.26.228.401.428.948.392 2.377-.942 3.706a.446.446 0 01-.613.01.405.405 0 01-.011-.59c.42-.416.672-.831.81-1.22z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-left-text' fill='currentColor' id='chat-left-text' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v11.586l2-2A2 2 0 014.414 11H14a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12.793a.5.5 0 00.854.353l2.853-2.853A1 1 0 014.414 12H14a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M3 3.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 6a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 6zm0 2.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-left-text-fill' fill='currentColor' id='chat-left-text-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4.414a1 1 0 00-.707.293L.854 15.146A.5.5 0 010 14.793V2zm3.5 1a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 2.5a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 2.5a.5.5 0 000 1h5a.5.5 0 000-1h-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-quote' fill='currentColor' id='chat-quote' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.678 11.894a1 1 0 01.287.801 10.97 10.97 0 01-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 01.71-.074A8.06 8.06 0 008 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 01-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 00.244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.52.263-1.639.742-3.468 1.105z'/%3e%3cpath d='M7.468 7.667c0 .92-.776 1.666-1.734 1.666S4 8.587 4 7.667C4 6.747 4.776 6 5.734 6s1.734.746 1.734 1.667z'/%3e%3cpath fill-rule='evenodd' d='M6.157 6.936a.438.438 0 01-.56.293.413.413 0 01-.274-.527c.08-.23.23-.44.477-.546a.891.891 0 01.698.014c.387.16.72.545.923.997.428.948.393 2.377-.942 3.706a.446.446 0 01-.612.01.405.405 0 01-.011-.59c1.093-1.087 1.058-2.158.77-2.794-.152-.336-.354-.514-.47-.563zm-.035-.012h-.001.001z'/%3e%3cpath d='M11.803 7.667c0 .92-.776 1.666-1.734 1.666-.957 0-1.734-.746-1.734-1.666 0-.92.777-1.667 1.734-1.667.958 0 1.734.746 1.734 1.667z'/%3e%3cpath fill-rule='evenodd' d='M10.492 6.936a.438.438 0 01-.56.293.413.413 0 01-.274-.527c.08-.23.23-.44.477-.546a.891.891 0 01.698.014c.387.16.72.545.924.997.428.948.392 2.377-.942 3.706a.446.446 0 01-.613.01.405.405 0 01-.011-.59c1.093-1.087 1.058-2.158.77-2.794-.152-.336-.354-.514-.469-.563zm-.034-.012h-.002.002z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-quote-fill' fill='currentColor' id='chat-quote-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766c.087.124.163.26.227.401.428.948.393 2.377-.942 3.706a.446.446 0 01-.612.01.405.405 0 01-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 9.333 4 8.587 4 7.667 4 6.747 4.776 6 5.734 6c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324.085.083.161.174.227.272zM11 9.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666 0-.92.777-1.667 1.734-1.667.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324.085.083.161.174.227.272.087.124.164.26.228.401.428.948.392 2.377-.942 3.706a.446.446 0 01-.613.01.405.405 0 01-.011-.59c.42-.416.672-.831.81-1.22z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-right' fill='currentColor' id='chat-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 1h12a1 1 0 011 1v11.586l-2-2A2 2 0 0011.586 11H2a1 1 0 01-1-1V2a1 1 0 011-1zm12-1a2 2 0 012 2v12.793a.5.5 0 01-.854.353l-2.853-2.853a1 1 0 00-.707-.293H2a2 2 0 01-2-2V2a2 2 0 012-2h12z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-right-dots' fill='currentColor' id='chat-right-dots' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 1h12a1 1 0 011 1v11.586l-2-2A2 2 0 0011.586 11H2a1 1 0 01-1-1V2a1 1 0 011-1zm12-1a2 2 0 012 2v12.793a.5.5 0 01-.854.353l-2.853-2.853a1 1 0 00-.707-.293H2a2 2 0 01-2-2V2a2 2 0 012-2h12z'/%3e%3cpath d='M5 6a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-right-dots-fill' fill='currentColor' id='chat-right-dots-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 2a2 2 0 00-2-2H2a2 2 0 00-2 2v8a2 2 0 002 2h9.586a1 1 0 01.707.293l2.853 2.853a.5.5 0 00.854-.353V2zM5 6a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-right-fill' fill='currentColor' id='chat-right-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 0a2 2 0 012 2v12.793a.5.5 0 01-.854.353l-2.853-2.853a1 1 0 00-.707-.293H2a2 2 0 01-2-2V2a2 2 0 012-2h12z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-right-quote' fill='currentColor' id='chat-right-quote' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 1h12a1 1 0 011 1v11.586l-2-2A2 2 0 0011.586 11H2a1 1 0 01-1-1V2a1 1 0 011-1zm12-1a2 2 0 012 2v12.793a.5.5 0 01-.854.353l-2.853-2.853a1 1 0 00-.707-.293H2a2 2 0 01-2-2V2a2 2 0 012-2h12z'/%3e%3cpath fill-rule='evenodd' d='M7.066 4.76A1.665 1.665 0 004 5.668a1.667 1.667 0 002.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 10.6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 008 5.668a1.667 1.667 0 002.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 10.6.58c1.486-1.54 1.293-3.214.682-4.112z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-right-quote-fill' fill='currentColor' id='chat-right-quote-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 2a2 2 0 00-2-2H2a2 2 0 00-2 2v8a2 2 0 002 2h9.586a1 1 0 01.707.293l2.853 2.853a.5.5 0 00.854-.353V2zM7.194 4.766c.087.124.163.26.227.401.428.948.393 2.377-.942 3.706a.446.446 0 01-.612.01.405.405 0 01-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 7.333 4 6.587 4 5.667 4 4.747 4.776 4 5.734 4c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324.085.083.161.174.227.272zM11 7.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666 0-.92.777-1.667 1.734-1.667.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324.085.083.161.174.227.272.087.124.164.26.228.401.428.948.392 2.377-.942 3.706a.446.446 0 01-.613.01.405.405 0 01-.011-.59c.42-.416.672-.831.81-1.22z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-right-text' fill='currentColor' id='chat-right-text' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 1h12a1 1 0 011 1v11.586l-2-2A2 2 0 0011.586 11H2a1 1 0 01-1-1V2a1 1 0 011-1zm12-1a2 2 0 012 2v12.793a.5.5 0 01-.854.353l-2.853-2.853a1 1 0 00-.707-.293H2a2 2 0 01-2-2V2a2 2 0 012-2h12z'/%3e%3cpath fill-rule='evenodd' d='M3 3.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 6a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 6zm0 2.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-right-text-fill' fill='currentColor' id='chat-right-text-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 2a2 2 0 00-2-2H2a2 2 0 00-2 2v8a2 2 0 002 2h9.586a1 1 0 01.707.293l2.853 2.853a.5.5 0 00.854-.353V2zM3.5 3a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 2.5a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 2.5a.5.5 0 000 1h5a.5.5 0 000-1h-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-square' fill='currentColor' id='chat-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v8a1 1 0 001 1h2.5a2 2 0 011.6.8L8 14.333 9.9 11.8a2 2 0 011.6-.8H14a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v8a2 2 0 002 2h2.5a1 1 0 01.8.4l1.9 2.533a1 1 0 001.6 0l1.9-2.533a1 1 0 01.8-.4H14a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-square-dots' fill='currentColor' id='chat-square-dots' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v8a1 1 0 001 1h2.5a2 2 0 011.6.8L8 14.333 9.9 11.8a2 2 0 011.6-.8H14a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v8a2 2 0 002 2h2.5a1 1 0 01.8.4l1.9 2.533a1 1 0 001.6 0l1.9-2.533a1 1 0 01.8-.4H14a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath d='M5 6a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-square-dots-fill' fill='currentColor' id='chat-square-dots-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2.5a1 1 0 00-.8.4l-1.9 2.533a1 1 0 01-1.6 0L5.3 12.4a1 1 0 00-.8-.4H2a2 2 0 01-2-2V2zm5 4a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-square-fill' fill='currentColor' id='chat-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v8a2 2 0 002 2h2.5a1 1 0 01.8.4l1.9 2.533a1 1 0 001.6 0l1.9-2.533a1 1 0 01.8-.4H14a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-square-quote' fill='currentColor' id='chat-square-quote' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v8a1 1 0 001 1h2.5a2 2 0 011.6.8L8 14.333 9.9 11.8a2 2 0 011.6-.8H14a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v8a2 2 0 002 2h2.5a1 1 0 01.8.4l1.9 2.533a1 1 0 001.6 0l1.9-2.533a1 1 0 01.8-.4H14a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M7.066 4.76A1.665 1.665 0 004 5.668a1.667 1.667 0 002.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 10.6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 008 5.668a1.667 1.667 0 002.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 10.6.58c1.486-1.54 1.293-3.214.682-4.112z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-square-quote-fill' fill='currentColor' id='chat-square-quote-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2.5a1 1 0 00-.8.4l-1.9 2.533a1 1 0 01-1.6 0L5.3 12.4a1 1 0 00-.8-.4H2a2 2 0 01-2-2V2zm7.194 2.766c.087.124.163.26.227.401.428.948.393 2.377-.942 3.706a.446.446 0 01-.612.01.405.405 0 01-.011-.59c.419-.416.672-.831.809-1.22-.269.165-.588.26-.93.26C4.775 7.333 4 6.587 4 5.667 4 4.747 4.776 4 5.734 4c.271 0 .528.06.756.166l.008.004c.169.07.327.182.469.324.085.083.161.174.227.272zM11 7.073c-.269.165-.588.26-.93.26-.958 0-1.735-.746-1.735-1.666 0-.92.777-1.667 1.734-1.667.271 0 .528.06.756.166l.008.004c.17.07.327.182.469.324.085.083.161.174.227.272.087.124.164.26.228.401.428.948.392 2.377-.942 3.706a.446.446 0 01-.613.01.405.405 0 01-.011-.59c.42-.416.672-.831.81-1.22z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-square-text' fill='currentColor' id='chat-square-text' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v8a1 1 0 001 1h2.5a2 2 0 011.6.8L8 14.333 9.9 11.8a2 2 0 011.6-.8H14a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v8a2 2 0 002 2h2.5a1 1 0 01.8.4l1.9 2.533a1 1 0 001.6 0l1.9-2.533a1 1 0 01.8-.4H14a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M3 3.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 6a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 6zm0 2.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-square-text-fill' fill='currentColor' id='chat-square-text-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2.5a1 1 0 00-.8.4l-1.9 2.533a1 1 0 01-1.6 0L5.3 12.4a1 1 0 00-.8-.4H2a2 2 0 01-2-2V2zm3.5 1a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 2.5a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 2.5a.5.5 0 000 1h5a.5.5 0 000-1h-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-text' fill='currentColor' id='chat-text' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.678 11.894a1 1 0 01.287.801 10.97 10.97 0 01-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 01.71-.074A8.06 8.06 0 008 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 01-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 00.244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.52.263-1.639.742-3.468 1.105z'/%3e%3cpath fill-rule='evenodd' d='M4 5.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM4 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 014 8zm0 2.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chat-text-fill' fill='currentColor' id='chat-text-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 000 1h7a.5.5 0 000-1h-7zm0 2.5a.5.5 0 000 1h7a.5.5 0 000-1h-7zm0 2.5a.5.5 0 000 1h4a.5.5 0 000-1h-4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-check' fill='currentColor' id='check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.97 4.97a.75.75 0 011.071 1.05l-3.992 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 01.02-.022z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-check-all' fill='currentColor' id='check-all' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.97 4.97a.75.75 0 011.071 1.05l-3.992 4.99a.75.75 0 01-1.08.02L2.324 8.384a.75.75 0 111.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 01.02-.022zm-.92 5.14l.92.92a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 10-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-check-circle' fill='currentColor' id='check-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M10.97 4.97a.75.75 0 011.071 1.05l-3.992 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 01.02-.022z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-check-circle-fill' fill='currentColor' id='check-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zm-3.97-3.03a.75.75 0 00-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 00-1.06 1.06L6.97 11.03a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 00-.01-1.05z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-check-square' fill='currentColor' id='check-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M10.97 4.97a.75.75 0 011.071 1.05l-3.992 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 01.02-.022z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-check-square-fill' fill='currentColor' id='check-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm10.03 4.97a.75.75 0 00-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 00-1.06 1.06L6.97 11.03a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 00-.01-1.05z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-check2' fill='currentColor' id='check2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-check2-all' fill='currentColor' id='check2-all' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12.354 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L5 10.293l6.646-6.647a.5.5 0 01.708 0z'/%3e%3cpath d='M6.25 8.043l-.896-.897a.5.5 0 10-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 00.708 0l7-7a.5.5 0 00-.708-.708L8.5 10.293l-.543-.543-.707.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-check2-circle' fill='currentColor' id='check2-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z'/%3e%3cpath fill-rule='evenodd' d='M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-check2-square' fill='currentColor' id='check2-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z'/%3e%3cpath fill-rule='evenodd' d='M1.5 13A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V8a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h8a.5.5 0 000-1H3A1.5 1.5 0 001.5 3v10z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-bar-contract' fill='currentColor' id='chevron-bar-contract' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.646 14.854a.5.5 0 00.708 0L8 11.207l3.646 3.647a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 000 .708zm0-13.708a.5.5 0 01.708 0L8 4.793l3.646-3.647a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 010-.708zM1 8a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 011 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-bar-down' fill='currentColor' id='chevron-bar-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.646 4.146a.5.5 0 01.708 0L8 7.793l3.646-3.647a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 010-.708zM1 11.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-bar-expand' fill='currentColor' id='chevron-bar-expand' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.646 10.146a.5.5 0 01.708 0L8 13.793l3.646-3.647a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 010-.708zm0-4.292a.5.5 0 00.708 0L8 2.207l3.646 3.647a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 000 .708zM1 8a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 011 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-bar-left' fill='currentColor' id='chevron-bar-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.854 3.646a.5.5 0 010 .708L8.207 8l3.647 3.646a.5.5 0 01-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 01.708 0zM4.5 1a.5.5 0 00-.5.5v13a.5.5 0 001 0v-13a.5.5 0 00-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-bar-right' fill='currentColor' id='chevron-bar-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.146 3.646a.5.5 0 000 .708L7.793 8l-3.647 3.646a.5.5 0 00.708.708l4-4a.5.5 0 000-.708l-4-4a.5.5 0 00-.708 0zM11.5 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-bar-up' fill='currentColor' id='chevron-bar-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.646 11.854a.5.5 0 00.708 0L8 8.207l3.646 3.647a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 000 .708zM2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 000-.8H2.8a.4.4 0 00-.4.4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-compact-down' fill='currentColor' id='chevron-compact-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.553 6.776a.5.5 0 01.67-.223L8 9.44l5.776-2.888a.5.5 0 11.448.894l-6 3a.5.5 0 01-.448 0l-6-3a.5.5 0 01-.223-.67z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-compact-left' fill='currentColor' id='chevron-compact-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.224 1.553a.5.5 0 01.223.67L6.56 8l2.888 5.776a.5.5 0 11-.894.448l-3-6a.5.5 0 010-.448l3-6a.5.5 0 01.67-.223z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-compact-right' fill='currentColor' id='chevron-compact-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.776 1.553a.5.5 0 01.671.223l3 6a.5.5 0 010 .448l-3 6a.5.5 0 11-.894-.448L9.44 8 6.553 2.224a.5.5 0 01.223-.671z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-compact-up' fill='currentColor' id='chevron-compact-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.776 5.553a.5.5 0 01.448 0l6 3a.5.5 0 11-.448.894L8 6.56 2.224 9.447a.5.5 0 11-.448-.894l6-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-contract' fill='currentColor' id='chevron-contract' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.646 13.854a.5.5 0 00.708 0L8 10.207l3.646 3.647a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 000 .708zm0-11.708a.5.5 0 01.708 0L8 5.793l3.646-3.647a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-double-down' fill='currentColor' id='chevron-double-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.646 6.646a.5.5 0 01.708 0L8 12.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z'/%3e%3cpath fill-rule='evenodd' d='M1.646 2.646a.5.5 0 01.708 0L8 8.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-double-left' fill='currentColor' id='chevron-double-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.354 1.646a.5.5 0 010 .708L2.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z'/%3e%3cpath fill-rule='evenodd' d='M12.354 1.646a.5.5 0 010 .708L6.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-double-right' fill='currentColor' id='chevron-double-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L9.293 8 3.646 2.354a.5.5 0 010-.708z'/%3e%3cpath fill-rule='evenodd' d='M7.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L13.293 8 7.646 2.354a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-double-up' fill='currentColor' id='chevron-double-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.646 2.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 3.707 2.354 9.354a.5.5 0 11-.708-.708l6-6z'/%3e%3cpath fill-rule='evenodd' d='M7.646 6.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 7.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-down' fill='currentColor' id='chevron-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-expand' fill='currentColor' id='chevron-expand' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.646 9.146a.5.5 0 01.708 0L8 12.793l3.646-3.647a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 010-.708zm0-2.292a.5.5 0 00.708 0L8 3.207l3.646 3.647a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0l-4 4a.5.5 0 000 .708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-left' fill='currentColor' id='chevron-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-right' fill='currentColor' id='chevron-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-chevron-up' fill='currentColor' id='chevron-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-circle' fill='currentColor' id='circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-circle-fill' fill='currentColor' id='circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='8'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-circle-half' fill='currentColor' id='circle-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15V1a7 7 0 110 14zm0 1A8 8 0 118 0a8 8 0 010 16z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-circle-square' fill='currentColor' id='circle-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 6a6 6 0 1112 0A6 6 0 010 6z'/%3e%3cpath d='M12.93 5h1.57a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1.57a6.953 6.953 0 01-1-.22v1.79A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 4h-1.79c.097.324.17.658.22 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-clipboard' fill='currentColor' id='clipboard' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z'/%3e%3cpath fill-rule='evenodd' d='M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-clipboard-check' fill='currentColor' id='clipboard-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z'/%3e%3cpath fill-rule='evenodd' d='M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3zm4.354 7.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7.5 9.793l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-clipboard-data' fill='currentColor' id='clipboard-data' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z'/%3e%3cpath fill-rule='evenodd' d='M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3z'/%3e%3cpath d='M4 11a1 1 0 112 0v1a1 1 0 11-2 0v-1zm6-4a1 1 0 112 0v5a1 1 0 11-2 0V7zM7 9a1 1 0 012 0v3a1 1 0 11-2 0V9z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-clipboard-minus' fill='currentColor' id='clipboard-minus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z'/%3e%3cpath fill-rule='evenodd' d='M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3zm-1 9.5A.5.5 0 016 9h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-clipboard-plus' fill='currentColor' id='clipboard-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z'/%3e%3cpath fill-rule='evenodd' d='M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3zM8 7a.5.5 0 01.5.5V9H10a.5.5 0 010 1H8.5v1.5a.5.5 0 01-1 0V10H6a.5.5 0 010-1h1.5V7.5A.5.5 0 018 7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-clipboard-x' fill='currentColor' id='clipboard-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 1.5H3a2 2 0 00-2 2V14a2 2 0 002 2h10a2 2 0 002-2V3.5a2 2 0 00-2-2h-1v1h1a1 1 0 011 1V14a1 1 0 01-1 1H3a1 1 0 01-1-1V3.5a1 1 0 011-1h1v-1z'/%3e%3cpath fill-rule='evenodd' d='M9.5 1h-3a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zm-3-1A1.5 1.5 0 005 1.5v1A1.5 1.5 0 006.5 4h3A1.5 1.5 0 0011 2.5v-1A1.5 1.5 0 009.5 0h-3zm-.354 7.146a.5.5 0 01.708 0L8 8.293l1.146-1.147a.5.5 0 11.708.708L8.707 9l1.147 1.146a.5.5 0 01-.708.708L8 9.707l-1.146 1.147a.5.5 0 01-.708-.708L7.293 9 6.146 7.854a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-clock' fill='currentColor' id='clock' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm8-7A8 8 0 110 8a8 8 0 0116 0z'/%3e%3cpath fill-rule='evenodd' d='M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-clock-fill' fill='currentColor' id='clock-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-clock-history' fill='currentColor' id='clock-history' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.515 1.019A7 7 0 008 1V0a8 8 0 01.589.022l-.074.997zm2.004.45a7.003 7.003 0 00-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 00-.439-.27l.493-.87a8.025 8.025 0 01.979.654l-.615.789a6.996 6.996 0 00-.418-.302zm1.834 1.79a6.99 6.99 0 00-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 00-.214-.468l.893-.45a7.976 7.976 0 01.45 1.088l-.95.313a7.023 7.023 0 00-.179-.483zm.53 2.507a6.991 6.991 0 00-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 01-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 01-.401.432l-.707-.707z'/%3e%3cpath fill-rule='evenodd' d='M8 1a7 7 0 104.95 11.95l.707.707A8.001 8.001 0 118 0v1z'/%3e%3cpath fill-rule='evenodd' d='M7.5 3a.5.5 0 01.5.5v5.21l3.248 1.856a.5.5 0 01-.496.868l-3.5-2A.5.5 0 017 9V3.5a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud' fill='currentColor' id='cloud' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.406 3.342A5.53 5.53 0 018 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 00-2.941 1.1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-arrow-down' fill='currentColor' id='cloud-arrow-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.406 3.342A5.53 5.53 0 018 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 00-2.941 1.1z'/%3e%3cpath fill-rule='evenodd' d='M7.646 10.854a.5.5 0 00.708 0l2-2a.5.5 0 00-.708-.708L8.5 9.293V5.5a.5.5 0 00-1 0v3.793L6.354 8.146a.5.5 0 10-.708.708l2 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-arrow-down-fill' fill='currentColor' id='cloud-arrow-down-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 2a5.53 5.53 0 00-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L7.5 9.293V5.5a.5.5 0 011 0v3.793l1.146-1.147a.5.5 0 01.708.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-arrow-up' fill='currentColor' id='cloud-arrow-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.406 3.342A5.53 5.53 0 018 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 00-2.941 1.1z'/%3e%3cpath fill-rule='evenodd' d='M7.646 5.146a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.708L8.5 6.707V10.5a.5.5 0 01-1 0V6.707L6.354 7.854a.5.5 0 11-.708-.708l2-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-arrow-up-fill' fill='currentColor' id='cloud-arrow-up-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 2a5.53 5.53 0 00-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L7.5 6.707V10.5a.5.5 0 001 0V6.707l1.146 1.147a.5.5 0 00.708-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-check' fill='currentColor' id='cloud-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.406 3.342A5.53 5.53 0 018 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 00-2.941 1.1z'/%3e%3cpath fill-rule='evenodd' d='M10.354 6.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7 8.793l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-check-fill' fill='currentColor' id='cloud-check-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 2a5.53 5.53 0 00-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 4.854a.5.5 0 00-.708-.708L7 8.793 5.854 7.646a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-download' fill='currentColor' id='cloud-download' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.406 1.342A5.53 5.53 0 018 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 010-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 00-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 010 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z'/%3e%3cpath fill-rule='evenodd' d='M7.646 15.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 14.293V5.5a.5.5 0 00-1 0v8.793l-2.146-2.147a.5.5 0 00-.708.708l3 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-download-fill' fill='currentColor' id='cloud-download-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a5.53 5.53 0 00-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 011 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.354 15.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 00-.708.708l3 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-fill' fill='currentColor' id='cloud-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.406 3.342A5.53 5.53 0 018 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-minus' fill='currentColor' id='cloud-minus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.406 3.342A5.53 5.53 0 018 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 00-2.941 1.1z'/%3e%3cpath fill-rule='evenodd' d='M5.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-minus-fill' fill='currentColor' id='cloud-minus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 2a5.53 5.53 0 00-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zM6 7.5a.5.5 0 000 1h4a.5.5 0 000-1H6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-plus' fill='currentColor' id='cloud-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.406 3.342A5.53 5.53 0 018 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 00-2.941 1.1z'/%3e%3cpath fill-rule='evenodd' d='M8 5.5a.5.5 0 01.5.5v1.5H10a.5.5 0 010 1H8.5V10a.5.5 0 01-1 0V8.5H6a.5.5 0 010-1h1.5V6a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-plus-fill' fill='currentColor' id='cloud-plus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 2a5.53 5.53 0 00-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm.5 4a.5.5 0 00-1 0v1.5H6a.5.5 0 000 1h1.5V10a.5.5 0 001 0V8.5H10a.5.5 0 000-1H8.5V6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-slash' fill='currentColor' id='cloud-slash' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.112 5.112a3.125 3.125 0 00-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11l-1-1H3.781C2.231 12 1 10.785 1 9.318c0-1.365 1.064-2.513 2.46-2.666l.446-.05v-.447c0-.075.006-.152.018-.231l-.812-.812zm2.55-1.45l-.725-.725A5.512 5.512 0 018 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 01-1.516 2.711l-.733-.733C14.498 11.378 15 10.626 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3c-.875 0-1.678.26-2.339.661zm7.984 10.692l-12-12 .708-.708 12 12-.707.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-slash-fill' fill='currentColor' id='cloud-slash-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.112 5.112a3.125 3.125 0 00-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11L3.112 5.112zm11.372 7.372L4.937 2.937A5.512 5.512 0 018 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 01-1.516 2.711zm-.838 1.87l-12-12 .708-.708 12 12-.707.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-upload' fill='currentColor' id='cloud-upload' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.406 1.342A5.53 5.53 0 018 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 010-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 00-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 010 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z'/%3e%3cpath fill-rule='evenodd' d='M7.646 4.146a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V14.5a.5.5 0 01-1 0V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cloud-upload-fill' fill='currentColor' id='cloud-upload-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a5.53 5.53 0 00-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 01-1 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-code' fill='currentColor' id='code' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.854 4.146a.5.5 0 010 .708L2.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm4.292 0a.5.5 0 000 .708L13.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-code-slash' fill='currentColor' id='code-slash' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 01-.955-.294l4-13a.5.5 0 01.625-.33z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-code-square' fill='currentColor' id='code-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M6.854 4.646a.5.5 0 010 .708L4.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0zm2.292 0a.5.5 0 000 .708L11.793 8l-2.647 2.646a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-collection' fill='currentColor' id='collection' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.5 13.5h-13A.5.5 0 011 13V6a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v7a.5.5 0 01-.5.5zm-13 1A1.5 1.5 0 010 13V6a1.5 1.5 0 011.5-1.5h13A1.5 1.5 0 0116 6v7a1.5 1.5 0 01-1.5 1.5h-13zM2 3a.5.5 0 00.5.5h11a.5.5 0 000-1h-11A.5.5 0 002 3zm2-2a.5.5 0 00.5.5h7a.5.5 0 000-1h-7A.5.5 0 004 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-collection-fill' fill='currentColor' id='collection-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 13a1.5 1.5 0 001.5 1.5h13A1.5 1.5 0 0016 13V6a1.5 1.5 0 00-1.5-1.5h-13A1.5 1.5 0 000 6v7z'/%3e%3cpath fill-rule='evenodd' d='M2 3a.5.5 0 00.5.5h11a.5.5 0 000-1h-11A.5.5 0 002 3zm2-2a.5.5 0 00.5.5h7a.5.5 0 000-1h-7A.5.5 0 004 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-collection-play' fill='currentColor' id='collection-play' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.5 13.5h-13A.5.5 0 011 13V6a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v7a.5.5 0 01-.5.5zm-13 1A1.5 1.5 0 010 13V6a1.5 1.5 0 011.5-1.5h13A1.5 1.5 0 0116 6v7a1.5 1.5 0 01-1.5 1.5h-13zM2 3a.5.5 0 00.5.5h11a.5.5 0 000-1h-11A.5.5 0 002 3zm2-2a.5.5 0 00.5.5h7a.5.5 0 000-1h-7A.5.5 0 004 1z'/%3e%3cpath fill-rule='evenodd' d='M6.258 6.563a.5.5 0 01.507.013l4 2.5a.5.5 0 010 .848l-4 2.5A.5.5 0 016 12V7a.5.5 0 01.258-.437z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-collection-play-fill' fill='currentColor' id='collection-play-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.5 14.5A1.5 1.5 0 010 13V6a1.5 1.5 0 011.5-1.5h13A1.5 1.5 0 0116 6v7a1.5 1.5 0 01-1.5 1.5h-13zm5.265-7.924A.5.5 0 006 7v5a.5.5 0 00.765.424l4-2.5a.5.5 0 000-.848l-4-2.5zM2 3a.5.5 0 00.5.5h11a.5.5 0 000-1h-11A.5.5 0 002 3zm2-2a.5.5 0 00.5.5h7a.5.5 0 000-1h-7A.5.5 0 004 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-columns' fill='currentColor' id='columns' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15 2H1v12h14V2zM1 1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V2a1 1 0 00-1-1H1z'/%3e%3cpath fill-rule='evenodd' d='M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-columns-gap' fill='currentColor' id='columns-gap' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 1H1v3h5V1zM1 0a1 1 0 00-1 1v3a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 00-1 1v3a1 1 0 001 1h5a1 1 0 001-1v-3a1 1 0 00-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 00-1 1v7a1 1 0 001 1h5a1 1 0 001-1V8a1 1 0 00-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 00-1 1v7a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1h-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-command' fill='currentColor' id='command' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 2a1.5 1.5 0 100 3H5V3.5A1.5 1.5 0 003.5 2zM6 5V3.5A2.5 2.5 0 103.5 6H5v4H3.5A2.5 2.5 0 106 12.5V11h4v1.5a2.5 2.5 0 102.5-2.5H11V6h1.5A2.5 2.5 0 1010 3.5V5H6zm4 1H6v4h4V6zm1-1h1.5A1.5 1.5 0 1011 3.5V5zm0 6v1.5a1.5 1.5 0 101.5-1.5H11zm-6 0H3.5A1.5 1.5 0 105 12.5V11z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 17' class='bi bi-compass' fill='currentColor' id='compass' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 16.016a7.5 7.5 0 001.962-14.74A1 1 0 009 0H7a1 1 0 00-.962 1.276A7.5 7.5 0 008 16.016zm6.5-7.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z'/%3e%3cpath d='M6.94 7.44l4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 17' class='bi bi-compass-fill' fill='currentColor' id='compass-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15.5 8.516a7.5 7.5 0 11-9.462-7.24A1 1 0 017 0h2a1 1 0 01.962 1.276 7.503 7.503 0 015.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cone' fill='currentColor' id='cone' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.03 1.88c.252-1.01 1.688-1.01 1.94 0l2.905 11.62H14a.5.5 0 010 1H2a.5.5 0 010-1h2.125L7.03 1.88z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cone-striped' fill='currentColor' id='cone-striped' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.97 4.88l.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 01.037.96l-6 2a.5.5 0 01-.316 0l-6-2a.5.5 0 01.037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-controller' fill='currentColor' id='controller' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.119 2.693c.904.19 1.75.495 2.235.98.407.408.779 1.05 1.094 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.815-.059 1.602-.328 2.21a1.42 1.42 0 01-1.445.83c-.636-.067-1.115-.394-1.513-.773a11.307 11.307 0 01-.739-.809c-.126-.147-.25-.291-.368-.422-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.422-.243.283-.494.576-.739.81-.398.378-.877.705-1.513.772a1.42 1.42 0 01-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772.486-.485 1.331-.79 2.235-.98.932-.196 2.03-.292 3.119-.292 1.089 0 2.187.096 3.119.292zm-6.032.979c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 00-.748 2.295 12.351 12.351 0 00-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 00.426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.505C4.861 9.97 5.978 9.026 8 9.026s3.139.943 3.965 1.855c.164.182.307.35.44.505.214.25.403.472.615.674.318.303.601.468.929.503a.42.42 0 00.426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 00-.339-2.406 13.753 13.753 0 00-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z'/%3e%3cpath d='M11.5 6.026a.5.5 0 11-1 0 .5.5 0 011 0zm-1 1a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm-1 1a.5.5 0 11-1 0 .5.5 0 011 0zm-7-2.5h1v3h-1v-3z'/%3e%3cpath d='M3.5 6.526h3v1h-3v-1zM3.051 3.26a.5.5 0 01.354-.613l1.932-.518a.5.5 0 01.258.966l-1.932.518a.5.5 0 01-.612-.354zm9.976 0a.5.5 0 00-.353-.613l-1.932-.518a.5.5 0 10-.259.966l1.932.518a.5.5 0 00.612-.354z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cpu' fill='currentColor' id='cpu' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5 0a.5.5 0 01.5.5V2h1V.5a.5.5 0 011 0V2h1V.5a.5.5 0 011 0V2h1V.5a.5.5 0 011 0V2A2.5 2.5 0 0114 4.5h1.5a.5.5 0 010 1H14v1h1.5a.5.5 0 010 1H14v1h1.5a.5.5 0 010 1H14v1h1.5a.5.5 0 010 1H14a2.5 2.5 0 01-2.5 2.5v1.5a.5.5 0 01-1 0V14h-1v1.5a.5.5 0 01-1 0V14h-1v1.5a.5.5 0 01-1 0V14h-1v1.5a.5.5 0 01-1 0V14A2.5 2.5 0 012 11.5H.5a.5.5 0 010-1H2v-1H.5a.5.5 0 010-1H2v-1H.5a.5.5 0 010-1H2v-1H.5a.5.5 0 010-1H2A2.5 2.5 0 014.5 2V.5A.5.5 0 015 0zm-.5 3A1.5 1.5 0 003 4.5v7A1.5 1.5 0 004.5 13h7a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0011.5 3h-7zM5 6.5A1.5 1.5 0 016.5 5h3A1.5 1.5 0 0111 6.5v3A1.5 1.5 0 019.5 11h-3A1.5 1.5 0 015 9.5v-3zM6.5 6a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cpu-fill' fill='currentColor' id='cpu-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.5.5a.5.5 0 00-1 0V2A2.5 2.5 0 002 4.5H.5a.5.5 0 000 1H2v1H.5a.5.5 0 000 1H2v1H.5a.5.5 0 000 1H2v1H.5a.5.5 0 000 1H2A2.5 2.5 0 004.5 14v1.5a.5.5 0 001 0V14h1v1.5a.5.5 0 001 0V14h1v1.5a.5.5 0 001 0V14h1v1.5a.5.5 0 001 0V14a2.5 2.5 0 002.5-2.5h1.5a.5.5 0 000-1H14v-1h1.5a.5.5 0 000-1H14v-1h1.5a.5.5 0 000-1H14v-1h1.5a.5.5 0 000-1H14A2.5 2.5 0 0011.5 2V.5a.5.5 0 00-1 0V2h-1V.5a.5.5 0 00-1 0V2h-1V.5a.5.5 0 00-1 0V2h-1V.5zm1 4.5A1.5 1.5 0 005 6.5v3A1.5 1.5 0 006.5 11h3A1.5 1.5 0 0011 9.5v-3A1.5 1.5 0 009.5 5h-3zm0 1a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-credit-card' fill='currentColor' id='credit-card' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v1h14V4a1 1 0 00-1-1H2zm13 4H1v5a1 1 0 001 1h12a1 1 0 001-1V7z'/%3e%3cpath d='M2 10a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-credit-card-2-back' fill='currentColor' id='credit-card-2-back' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'/%3e%3cpath d='M11 5.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1zM1 9h14v2H1V9z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-credit-card-2-back-fill' fill='currentColor' id='credit-card-2-back-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 4a2 2 0 012-2h12a2 2 0 012 2v5H0V4zm11.5 1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-2z'/%3e%3cpath d='M0 11v1a2 2 0 002 2h12a2 2 0 002-2v-1H0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-credit-card-2-front' fill='currentColor' id='credit-card-2-front' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'/%3e%3cpath d='M2 5.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-1z'/%3e%3cpath fill-rule='evenodd' d='M2 8.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm3 0a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm3 0a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm3 0a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-credit-card-2-front-fill' fill='currentColor' id='credit-card-2-front-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2.5 1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-2zm0 3a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h1a.5.5 0 000-1h-1zm3 0a.5.5 0 000 1h1a.5.5 0 000-1h-1zm3 0a.5.5 0 000 1h1a.5.5 0 000-1h-1zm3 0a.5.5 0 000 1h1a.5.5 0 000-1h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-credit-card-fill' fill='currentColor' id='credit-card-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 4a2 2 0 012-2h12a2 2 0 012 2v1H0V4z'/%3e%3cpath fill-rule='evenodd' d='M0 7v5a2 2 0 002 2h12a2 2 0 002-2V7H0zm3 2a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1H3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 18 18' class='bi bi-crop' fill='currentColor' id='crop' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5.5A.5.5 0 014 1v13h13a.5.5 0 010 1h-2v2a.5.5 0 01-1 0v-2H3.5a.5.5 0 01-.5-.5V4H1a.5.5 0 010-1h2V1a.5.5 0 01.5-.5zm2.5 3a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v8a.5.5 0 01-1 0V4H6.5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cup' fill='currentColor' id='cup' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 2a1 1 0 011-1h11a1 1 0 011 1v1h.5A1.5 1.5 0 0116 4.5v7a1.5 1.5 0 01-1.5 1.5h-.55a2.5 2.5 0 01-2.45 2h-8A2.5 2.5 0 011 12.5V2zm13 10h.5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 003.5 14h8a1.5 1.5 0 001.5-1.5V2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cup-fill' fill='currentColor' id='cup-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 2a1 1 0 011-1h11a1 1 0 011 1v1h.5A1.5 1.5 0 0116 4.5v7a1.5 1.5 0 01-1.5 1.5h-.55a2.5 2.5 0 01-2.45 2h-8A2.5 2.5 0 011 12.5V2zm13 10h.5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5H14v8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 17' class='bi bi-cup-straw' fill='currentColor' id='cup-straw' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13.964 1.18a.5.5 0 01-.278.65l-2.255.902-.462 2.08c.375.096.714.216.971.368.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.955 9.068a1.28 1.28 0 01-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 01-.524-.93L3.51 6.132A.78.78 0 013.5 6c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 4.614 6.867 4.5 8 4.5c.712 0 1.389.045 1.985.127l.527-2.37a.5.5 0 01.302-.355l2.5-1a.5.5 0 01.65.279zM9.768 5.608A13.991 13.991 0 008 5.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 004.645 6c.146.073.362.15.648.222C5.967 6.39 6.924 6.5 8 6.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756a5.513 5.513 0 001.325-.297l-.845 8.03c-.013.12-.06.185-.102.214-.357.249-1.167.69-2.438.69-1.27 0-2.08-.441-2.438-.69-.041-.029-.09-.094-.102-.214l-.845-8.03c.137.046.283.088.435.126.774.194 1.817.308 2.95.308.742 0 1.445-.049 2.06-.137zm-5.593-1.48s.003.002.005.006l-.005-.006zm7.066 0l-.005.006a.026.026 0 01.005-.006zM11.354 6a3.282 3.282 0 01-.703.235l.1-.446c.264.069.464.142.603.211z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cursor' fill='currentColor' id='cursor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.082 2.182a.5.5 0 01.103.557L8.528 15.467a.5.5 0 01-.917-.007L5.57 10.694.803 8.652a.5.5 0 01-.006-.916l12.728-5.657a.5.5 0 01.556.103zM2.25 8.184l3.897 1.67a.5.5 0 01.262.263l1.67 3.897L12.743 3.52 2.25 8.184z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cursor-fill' fill='currentColor' id='cursor-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.082 2.182a.5.5 0 01.103.557L8.528 15.467a.5.5 0 01-.917-.007L5.57 10.694.803 8.652a.5.5 0 01-.006-.916l12.728-5.657a.5.5 0 01.556.103z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-cursor-text' fill='currentColor' id='cursor-text' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5 2a.5.5 0 01.5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0110.5 1.5a.5.5 0 010 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 00-.436.294V7.5H9a.5.5 0 010 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 010 1 4.165 4.165 0 01-2.06-.566A4.561 4.561 0 018 13.65a4.561 4.561 0 01-.44.285 4.165 4.165 0 01-2.06.566.5.5 0 010-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 010-1h.5V3.228a3.49 3.49 0 00-.436-.294A3.166 3.166 0 005.5 2.5.5.5 0 015 2zm3.352 1.355zm-.704 9.29z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dash' fill='currentColor' id='dash' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 014 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dash-circle' fill='currentColor' id='dash-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M4 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 014 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dash-circle-fill' fill='currentColor' id='dash-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zM4.5 7.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dash-square' fill='currentColor' id='dash-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M4 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 014 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dash-square-fill' fill='currentColor' id='dash-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm2.5 7.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-diagram-2' fill='currentColor' id='diagram-2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 3.5A1.5 1.5 0 017.5 2h1A1.5 1.5 0 0110 3.5v1A1.5 1.5 0 018.5 6v1H11a.5.5 0 01.5.5v1a.5.5 0 01-1 0V8h-5v.5a.5.5 0 01-1 0v-1A.5.5 0 015 7h2.5V6A1.5 1.5 0 016 4.5v-1zM8.5 5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1zM3 11.5A1.5 1.5 0 014.5 10h1A1.5 1.5 0 017 11.5v1A1.5 1.5 0 015.5 14h-1A1.5 1.5 0 013 12.5v-1zm1.5-.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm4.5.5a1.5 1.5 0 011.5-1.5h1a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-1A1.5 1.5 0 019 12.5v-1zm1.5-.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-diagram-2-fill' fill='currentColor' id='diagram-2-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 3.5A1.5 1.5 0 017.5 2h1A1.5 1.5 0 0110 3.5v1A1.5 1.5 0 018.5 6v1H11a.5.5 0 01.5.5v1a.5.5 0 01-1 0V8h-5v.5a.5.5 0 01-1 0v-1A.5.5 0 015 7h2.5V6A1.5 1.5 0 016 4.5v-1zm-3 8A1.5 1.5 0 014.5 10h1A1.5 1.5 0 017 11.5v1A1.5 1.5 0 015.5 14h-1A1.5 1.5 0 013 12.5v-1zm6 0a1.5 1.5 0 011.5-1.5h1a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-1A1.5 1.5 0 019 12.5v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-diagram-3' fill='currentColor' id='diagram-3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 3.5A1.5 1.5 0 017.5 2h1A1.5 1.5 0 0110 3.5v1A1.5 1.5 0 018.5 6v1H14a.5.5 0 01.5.5v1a.5.5 0 01-1 0V8h-5v.5a.5.5 0 01-1 0V8h-5v.5a.5.5 0 01-1 0v-1A.5.5 0 012 7h5.5V6A1.5 1.5 0 016 4.5v-1zM8.5 5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1zM0 11.5A1.5 1.5 0 011.5 10h1A1.5 1.5 0 014 11.5v1A1.5 1.5 0 012.5 14h-1A1.5 1.5 0 010 12.5v-1zm1.5-.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm4.5.5A1.5 1.5 0 017.5 10h1a1.5 1.5 0 011.5 1.5v1A1.5 1.5 0 018.5 14h-1A1.5 1.5 0 016 12.5v-1zm1.5-.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm4.5.5a1.5 1.5 0 011.5-1.5h1a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-1zm1.5-.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-diagram-3-fill' fill='currentColor' id='diagram-3-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 3.5A1.5 1.5 0 017.5 2h1A1.5 1.5 0 0110 3.5v1A1.5 1.5 0 018.5 6v1H14a.5.5 0 01.5.5v1a.5.5 0 01-1 0V8h-5v.5a.5.5 0 01-1 0V8h-5v.5a.5.5 0 01-1 0v-1A.5.5 0 012 7h5.5V6A1.5 1.5 0 016 4.5v-1zm-6 8A1.5 1.5 0 011.5 10h1A1.5 1.5 0 014 11.5v1A1.5 1.5 0 012.5 14h-1A1.5 1.5 0 010 12.5v-1zm6 0A1.5 1.5 0 017.5 10h1a1.5 1.5 0 011.5 1.5v1A1.5 1.5 0 018.5 14h-1A1.5 1.5 0 016 12.5v-1zm6 0a1.5 1.5 0 011.5-1.5h1a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-diamond' fill='currentColor' id='diamond' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 010-2.098L6.95.435zm1.4.7a.495.495 0 00-.7 0L1.134 7.65a.495.495 0 000 .7l6.516 6.516a.495.495 0 00.7 0l6.516-6.516a.495.495 0 000-.7L8.35 1.134z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-diamond-fill' fill='currentColor' id='diamond-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 010-2.098L6.95.435z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-diamond-half' fill='currentColor' id='diamond-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 010 .7L8.35 14.866a.493.493 0 01-.35.145V.989z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dice-1' fill='currentColor' id='dice-1' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13 1H3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zM3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3z'/%3e%3ccircle cx='8' cy='8' r='1.5'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dice-1-fill' fill='currentColor' id='dice-1-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3zm5 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dice-2' fill='currentColor' id='dice-2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13 1H3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zM3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3z'/%3e%3ccircle cx='4' cy='4' r='1.5'/%3e%3ccircle cx='12' cy='12' r='1.5'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dice-2-fill' fill='currentColor' id='dice-2-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 3a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H3a3 3 0 01-3-3V3zm5.5 1a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dice-3' fill='currentColor' id='dice-3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13 1H3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zM3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3z'/%3e%3ccircle cx='4' cy='4' r='1.5'/%3e%3ccircle cx='12' cy='12' r='1.5'/%3e%3ccircle cx='8' cy='8' r='1.5'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dice-3-fill' fill='currentColor' id='dice-3-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3zm2.5 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dice-4' fill='currentColor' id='dice-4' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13 1H3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zM3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3z'/%3e%3ccircle cx='4' cy='4' r='1.5'/%3e%3ccircle cx='12' cy='4' r='1.5'/%3e%3ccircle cx='12' cy='12' r='1.5'/%3e%3ccircle cx='4' cy='12' r='1.5'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dice-4-fill' fill='currentColor' id='dice-4-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3zm1 5.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM4 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dice-5' fill='currentColor' id='dice-5' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13 1H3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zM3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3z'/%3e%3ccircle cx='4' cy='4' r='1.5'/%3e%3ccircle cx='12' cy='4' r='1.5'/%3e%3ccircle cx='12' cy='12' r='1.5'/%3e%3ccircle cx='4' cy='12' r='1.5'/%3e%3ccircle cx='8' cy='8' r='1.5'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dice-5-fill' fill='currentColor' id='dice-5-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3zm2.5 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dice-6' fill='currentColor' id='dice-6' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13 1H3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zM3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3z'/%3e%3ccircle cx='4' cy='4' r='1.5'/%3e%3ccircle cx='12' cy='4' r='1.5'/%3e%3ccircle cx='12' cy='12' r='1.5'/%3e%3ccircle cx='12' cy='8' r='1.5'/%3e%3ccircle cx='4' cy='12' r='1.5'/%3e%3ccircle cx='4' cy='8' r='1.5'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dice-6-fill' fill='currentColor' id='dice-6-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 0a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3H3zm1 5.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM4 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-display' fill='currentColor' id='display' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 010 1H5a.5.5 0 010-1h.75z'/%3e%3cpath fill-rule='evenodd' d='M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 00-.254.302A1.46 1.46 0 001 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 00.538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 00.254-.302 1.464 1.464 0 00.143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 00-.302-.254A1.46 1.46 0 0013.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-display-fill' fill='currentColor' id='display-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6 12c0 .667-.083 1.167-.25 1.5H5a.5.5 0 000 1h6a.5.5 0 000-1h-.75c-.167-.333-.25-.833-.25-1.5h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-distribute-horizontal' fill='currentColor' id='distribute-horizontal' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.5 1a.5.5 0 00-.5.5v13a.5.5 0 001 0v-13a.5.5 0 00-.5-.5zm-13 0a.5.5 0 00-.5.5v13a.5.5 0 001 0v-13a.5.5 0 00-.5-.5z'/%3e%3cpath d='M6 13a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 00-1-1H7a1 1 0 00-1 1v10z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-distribute-vertical' fill='currentColor' id='distribute-vertical' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 1.5a.5.5 0 00.5.5h13a.5.5 0 000-1h-13a.5.5 0 00-.5.5zm0 13a.5.5 0 00.5.5h13a.5.5 0 000-1h-13a.5.5 0 00-.5.5z'/%3e%3cpath d='M2 7a1 1 0 011-1h10a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-door-closed' fill='currentColor' id='door-closed' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 2a1 1 0 011-1h8a1 1 0 011 1v13h1.5a.5.5 0 010 1h-13a.5.5 0 010-1H3V2zm1 13h8V2H4v13z'/%3e%3cpath d='M9 9a1 1 0 102 0 1 1 0 00-2 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-door-closed-fill' fill='currentColor' id='door-closed-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 1a1 1 0 00-1 1v13H1.5a.5.5 0 000 1h13a.5.5 0 000-1H13V2a1 1 0 00-1-1H4zm2 9a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-door-open' fill='currentColor' id='door-open' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 15.5a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0113 2.5V15h-1V2.5a.5.5 0 00-.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M10.828.122A.5.5 0 0111 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 01.43-.495l7-1a.5.5 0 01.398.117z'/%3e%3cpath d='M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-door-open-fill' fill='currentColor' id='door-open-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.5 15a.5.5 0 000 1h13a.5.5 0 000-1H13V2.5A1.5 1.5 0 0011.5 1H11V.5a.5.5 0 00-.57-.495l-7 1A.5.5 0 003 1.5V15H1.5zM11 2v13h1V2.5a.5.5 0 00-.5-.5H11zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-dot' fill='currentColor' id='dot' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-download' fill='currentColor' id='download' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-droplet' fill='currentColor' id='droplet' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 01-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 005.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0010 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z'/%3e%3cpath fill-rule='evenodd' d='M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-droplet-fill' fill='currentColor' id='droplet-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 16a6 6 0 006-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 006 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-droplet-half' fill='currentColor' id='droplet-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 01-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 005.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z'/%3e%3cpath fill-rule='evenodd' d='M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-earbuds' fill='currentColor' id='earbuds' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 01-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 01-.346.659l-.593.19a.548.548 0 01-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 002.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 00.346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-easel' fill='currentColor' id='easel' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.473.337a.5.5 0 00-.946 0L6.954 2h2.092L8.473.337zM12.15 11h-1.058l1.435 4.163a.5.5 0 00.946-.326L12.15 11zM8.5 11h-1v2.5a.5.5 0 001 0V11zm-3.592 0H3.85l-1.323 3.837a.5.5 0 10.946.326L4.908 11z'/%3e%3cpath fill-rule='evenodd' d='M14 3H2v7h12V3zM2 2a1 1 0 00-1 1v7a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-easel-fill' fill='currentColor' id='easel-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.473.337a.5.5 0 00-.946 0L6.954 2h2.092L8.473.337zM12.15 11h-1.058l1.435 4.163a.5.5 0 00.946-.326L12.15 11zM8.5 11h-1v2.5a.5.5 0 001 0V11zm-3.592 0H3.85l-1.323 3.837a.5.5 0 10.946.326L4.908 11zM1 3a1 1 0 011-1h12a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-egg' fill='currentColor' id='egg' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15a5 5 0 005-5c0-1.956-.69-4.286-1.742-6.12-.524-.913-1.112-1.658-1.704-2.164C8.956 1.206 8.428 1 8 1c-.428 0-.956.206-1.554.716-.592.506-1.18 1.251-1.704 2.164C3.69 5.714 3 8.044 3 10a5 5 0 005 5zm0 1a6 6 0 006-6c0-4.314-3-10-6-10S2 5.686 2 10a6 6 0 006 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-egg-fill' fill='currentColor' id='egg-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14 10a6 6 0 01-12 0C2 5.686 5 0 8 0s6 5.686 6 10z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-egg-fried' fill='currentColor' id='egg-fried' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13.665 6.113a1 1 0 01-.667-.977L13 5a4 4 0 00-6.483-3.136 1 1 0 01-.8.2 4 4 0 00-3.693 6.61 1 1 0 01.2 1 4 4 0 006.67 4.087 1 1 0 011.262-.152 2.5 2.5 0 003.715-2.905 1 1 0 01.341-1.113 2.001 2.001 0 00-.547-3.478zM14 5c0 .057 0 .113-.003.17a3.001 3.001 0 01.822 5.216 3.5 3.5 0 01-5.201 4.065 5 5 0 01-8.336-5.109A5 5 0 015.896 1.08 5 5 0 0114 5z'/%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-eject' fill='currentColor' id='eject' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.27 1.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H1.656C.78 9.5.326 8.455.926 7.816L7.27 1.047zM14.346 8.5L8 1.731 1.654 8.5h12.692zM.5 11.5a1 1 0 011-1h13a1 1 0 011 1v1a1 1 0 01-1 1h-13a1 1 0 01-1-1v-1zm14 0h-13v1h13v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-eject-fill' fill='currentColor' id='eject-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.27 1.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H1.656C.78 9.5.326 8.455.926 7.816L7.27 1.047zM.5 11.5a1 1 0 011-1h13a1 1 0 011 1v1a1 1 0 01-1 1h-13a1 1 0 01-1-1v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-emoji-angry' fill='currentColor' id='emoji-angry' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M4.285 12.433a.5.5 0 00.683-.183A3.498 3.498 0 018 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 00.866-.5A4.498 4.498 0 008 9.5a4.5 4.5 0 00-3.898 2.25.5.5 0 00.183.683z'/%3e%3cpath d='M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z'/%3e%3cpath fill-rule='evenodd' d='M4.053 4.276a.5.5 0 01.67-.223l2 1a.5.5 0 11-.447.894l-2-1a.5.5 0 01-.223-.67zm7.894 0a.5.5 0 00-.67-.223l-2 1a.5.5 0 10.447.894l2-1a.5.5 0 00.223-.67z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-emoji-dizzy' fill='currentColor' id='emoji-dizzy' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M9.146 5.146a.5.5 0 01.708 0l.646.647.646-.647a.5.5 0 01.708.708l-.647.646.647.646a.5.5 0 01-.708.708l-.646-.647-.646.647a.5.5 0 11-.708-.708l.647-.646-.647-.646a.5.5 0 010-.708zm-5 0a.5.5 0 01.708 0l.646.647.646-.647a.5.5 0 11.708.708l-.647.646.647.646a.5.5 0 11-.708.708L5.5 7.207l-.646.647a.5.5 0 11-.708-.708l.647-.646-.647-.646a.5.5 0 010-.708z'/%3e%3cpath d='M10 11a2 2 0 11-4 0 2 2 0 014 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-emoji-expressionless' fill='currentColor' id='emoji-expressionless' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M4 10.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm5 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-emoji-frown' fill='currentColor' id='emoji-frown' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M4.285 12.433a.5.5 0 00.683-.183A3.498 3.498 0 018 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 00.866-.5A4.498 4.498 0 008 9.5a4.5 4.5 0 00-3.898 2.25.5.5 0 00.183.683z'/%3e%3cpath d='M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-emoji-laughing' fill='currentColor' id='emoji-laughing' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M12.331 9.5a1 1 0 010 1A4.998 4.998 0 018 13a4.998 4.998 0 01-4.33-2.5A1 1 0 014.535 9h6.93a1 1 0 01.866.5z'/%3e%3cpath d='M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-emoji-neutral' fill='currentColor' id='emoji-neutral' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M4 10.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z'/%3e%3cpath d='M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-emoji-smile' fill='currentColor' id='emoji-smile' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M4.285 9.567a.5.5 0 01.683.183A3.498 3.498 0 008 11.5a3.498 3.498 0 003.032-1.75.5.5 0 11.866.5A4.498 4.498 0 018 12.5a4.498 4.498 0 01-3.898-2.25.5.5 0 01.183-.683z'/%3e%3cpath d='M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-emoji-smile-upside-down' fill='currentColor' id='emoji-smile-upside-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1a7 7 0 110 14A7 7 0 018 1zm0-1a8 8 0 110 16A8 8 0 018 0z'/%3e%3cpath fill-rule='evenodd' d='M4.285 6.433a.5.5 0 00.683-.183A3.498 3.498 0 018 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 00.866-.5A4.498 4.498 0 008 3.5a4.5 4.5 0 00-3.898 2.25.5.5 0 00.183.683z'/%3e%3cpath d='M7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-emoji-sunglasses' fill='currentColor' id='emoji-sunglasses' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M4.285 9.567a.5.5 0 01.683.183A3.498 3.498 0 008 11.5a3.498 3.498 0 003.032-1.75.5.5 0 11.866.5A4.498 4.498 0 018 12.5a4.498 4.498 0 01-3.898-2.25.5.5 0 01.183-.683zM6.5 6.497V6.5h-1c0-.568.447-.947.862-1.154C6.807 5.123 7.387 5 8 5s1.193.123 1.638.346c.415.207.862.586.862 1.154h-1v-.003l-.003-.01a.213.213 0 00-.036-.053.86.86 0 00-.27-.194C8.91 6.1 8.49 6 8 6c-.491 0-.912.1-1.19.24a.86.86 0 00-.271.194.213.213 0 00-.036.054l-.003.01z'/%3e%3cpath d='M2.31 5.243A1 1 0 013.28 4H6a1 1 0 011 1v1a2 2 0 01-2 2h-.438a2 2 0 01-1.94-1.515L2.31 5.243zM9 5a1 1 0 011-1h2.72a1 1 0 01.97 1.243l-.311 1.242A2 2 0 0111.439 8H11a2 2 0 01-2-2V5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-envelope' fill='currentColor' id='envelope' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l7 4.2 7-4.2V4a1 1 0 00-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 002 13h12a1 1 0 00.966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-envelope-fill' fill='currentColor' id='envelope-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 002 14h12a2 2 0 001.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-envelope-open' fill='currentColor' id='envelope-open' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.47 1.318a1 1 0 00-.94 0l-6 3.2A1 1 0 001 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 00-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 002 15h12a1 1 0 00.965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 011.882 0l6 3.2A2 2 0 0116 5.4V14a2 2 0 01-2 2H2a2 2 0 01-2-2V5.4a2 2 0 011.059-1.765l6-3.2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-envelope-open-fill' fill='currentColor' id='envelope-open-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.941.435a2 2 0 00-1.882 0l-6 3.2A2 2 0 000 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 00-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 002 16h12a2 2 0 001.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-exclamation' fill='currentColor' id='exclamation' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-exclamation-circle' fill='currentColor' id='exclamation-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath d='M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-exclamation-circle-fill' fill='currentColor' id='exclamation-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zM8 4a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0l.35-3.507A.905.905 0 008 4zm.002 6a1 1 0 100 2 1 1 0 000-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-exclamation-diamond' fill='currentColor' id='exclamation-diamond' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 010-2.098L6.95.435zm1.4.7a.495.495 0 00-.7 0L1.134 7.65a.495.495 0 000 .7l6.516 6.516a.495.495 0 00.7 0l6.516-6.516a.495.495 0 000-.7L8.35 1.134z'/%3e%3cpath d='M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-exclamation-diamond-fill' fill='currentColor' id='exclamation-diamond-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0l.35-3.507A.905.905 0 008 4zm.002 6a1 1 0 100 2 1 1 0 000-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-exclamation-octagon' fill='currentColor' id='exclamation-octagon' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.54.146A.5.5 0 014.893 0h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z'/%3e%3cpath d='M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-exclamation-octagon-fill' fill='currentColor' id='exclamation-octagon-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.46.146A.5.5 0 0011.107 0H4.893a.5.5 0 00-.353.146L.146 4.54A.5.5 0 000 4.893v6.214a.5.5 0 00.146.353l4.394 4.394a.5.5 0 00.353.146h6.214a.5.5 0 00.353-.146l4.394-4.394a.5.5 0 00.146-.353V4.893a.5.5 0 00-.146-.353L11.46.146zM8 4a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0l.35-3.507A.905.905 0 008 4zm.002 6a1 1 0 100 2 1 1 0 000-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-exclamation-square' fill='currentColor' id='exclamation-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath d='M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-exclamation-square-fill' fill='currentColor' id='exclamation-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm6 4a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0l.35-3.507A.905.905 0 008 4zm.002 6a1 1 0 100 2 1 1 0 000-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 17 16' class='bi bi-exclamation-triangle' fill='currentColor' id='exclamation-triangle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.938 2.016a.146.146 0 00-.054.057L1.027 13.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L8.12 2.073a.146.146 0 00-.054-.057A.13.13 0 008.002 2a.13.13 0 00-.064.016zm1.044-.45a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z'/%3e%3cpath d='M7.002 12a1 1 0 112 0 1 1 0 01-2 0zM7.1 5.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 5.995z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 17 16' class='bi bi-exclamation-triangle-fill' fill='currentColor' id='exclamation-triangle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.982 1.566a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0l.35-3.507A.905.905 0 008 5zm.002 6a1 1 0 100 2 1 1 0 000-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-exclude' fill='currentColor' id='exclude' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h8a2 2 0 012 2v2h2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-2H2a2 2 0 01-2-2V2zm12 2v7a1 1 0 01-1 1H4V5a1 1 0 011-1h7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-eye' fill='currentColor' id='eye' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z'/%3e%3cpath fill-rule='evenodd' d='M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-eye-fill' fill='currentColor' id='eye-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'/%3e%3cpath fill-rule='evenodd' d='M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-eye-slash' fill='currentColor' id='eye-slash' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 00-2.79.588l.77.771A5.944 5.944 0 018 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0114.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z'/%3e%3cpath d='M11.297 9.176a3.5 3.5 0 00-4.474-4.474l.823.823a2.5 2.5 0 012.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 01-4.474-4.474l.823.823a2.5 2.5 0 002.829 2.829z'/%3e%3cpath d='M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 001.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 018 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709z'/%3e%3cpath fill-rule='evenodd' d='M13.646 14.354l-12-12 .708-.708 12 12-.708.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-eye-slash-fill' fill='currentColor' id='eye-slash-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.79 12.912l-1.614-1.615a3.5 3.5 0 01-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 002.79-.588zM5.21 3.088A7.028 7.028 0 018 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 00-4.474-4.474L5.21 3.089z'/%3e%3cpath d='M5.525 7.646a2.5 2.5 0 002.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 012.829 2.829z'/%3e%3cpath fill-rule='evenodd' d='M13.646 14.354l-12-12 .708-.708 12 12-.708.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-eyeglasses' fill='currentColor' id='eyeglasses' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 6a2 2 0 100 4 2 2 0 000-4zm2.625.547a3 3 0 00-5.584.953H.5a.5.5 0 000 1h.541A3 3 0 007 8a1 1 0 012 0 3 3 0 005.959.5h.541a.5.5 0 000-1h-.541a3 3 0 00-5.584-.953A1.993 1.993 0 008 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 10-4 0 2 2 0 004 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file' fill='currentColor' id='file' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-arrow-down' fill='currentColor' id='file-arrow-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M8 5a.5.5 0 01.5.5v3.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L7.5 9.293V5.5A.5.5 0 018 5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-arrow-down-fill' fill='currentColor' id='file-arrow-down-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM8 5a.5.5 0 01.5.5v3.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L7.5 9.293V5.5A.5.5 0 018 5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-arrow-up' fill='currentColor' id='file-arrow-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M8 11a.5.5 0 00.5-.5V6.707l1.146 1.147a.5.5 0 00.708-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L7.5 6.707V10.5a.5.5 0 00.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-arrow-up-fill' fill='currentColor' id='file-arrow-up-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM7.5 6.707V10.5a.5.5 0 001 0V6.707l1.146 1.147a.5.5 0 00.708-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L7.5 6.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-binary' fill='currentColor' id='file-binary' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath d='M5.526 13.09c.976 0 1.524-.79 1.524-2.205 0-1.412-.548-2.203-1.524-2.203-.978 0-1.526.79-1.526 2.203 0 1.415.548 2.206 1.526 2.206zm-.832-2.205c0-1.05.29-1.612.832-1.612.358 0 .607.247.733.721L4.7 11.137a6.749 6.749 0 01-.006-.252zm.832 1.614c-.36 0-.606-.246-.732-.718l1.556-1.145c.003.079.005.164.005.249 0 1.052-.29 1.614-.829 1.614zm5.329.501v-.595H9.73V8.772h-.69l-1.19.786v.688L8.986 9.5h.05v2.906h-1.18V13h3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-binary-fill' fill='currentColor' id='file-binary-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM7.05 10.885c0 1.415-.548 2.206-1.524 2.206C4.548 13.09 4 12.3 4 10.885c0-1.412.548-2.203 1.526-2.203.976 0 1.524.79 1.524 2.203zM5.526 9.273c-.542 0-.832.563-.832 1.612 0 .088.003.173.006.252l1.56-1.143c-.126-.474-.375-.72-.733-.72zm-.732 2.508c.126.472.372.718.732.718.54 0 .83-.563.83-1.614 0-.085-.003-.17-.006-.25l-1.556 1.146zm6.061.624V13h-3v-.595h1.181V9.5h-.05l-1.136.747v-.688l1.19-.786h.69v3.633h1.125z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-break' fill='currentColor' id='file-break' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 10.5a.5.5 0 01.5-.5h15a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z'/%3e%3cpath d='M12 0H4a2 2 0 00-2 2v7h1V2a1 1 0 011-1h8a1 1 0 011 1v7h1V2a2 2 0 00-2-2zm2 12h-1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2H2v2a2 2 0 002 2h8a2 2 0 002-2v-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-break-fill' fill='currentColor' id='file-break-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v7h12V2a2 2 0 00-2-2zm2 12H2v2a2 2 0 002 2h8a2 2 0 002-2v-2zM0 10.5a.5.5 0 01.5-.5h15a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-check' fill='currentColor' id='file-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M10.854 6.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7.5 8.793l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-check-fill' fill='currentColor' id='file-check-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zm-1.146 6.854a.5.5 0 00-.708-.708L7.5 8.793 6.354 7.646a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-code' fill='currentColor' id='file-code' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M8.646 5.646a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L10.293 8 8.646 6.354a.5.5 0 010-.708zm-1.292 0a.5.5 0 00-.708 0l-2 2a.5.5 0 000 .708l2 2a.5.5 0 00.708-.708L5.707 8l1.647-1.646a.5.5 0 000-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-code-fill' fill='currentColor' id='file-code-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM6.646 5.646a.5.5 0 11.708.708L5.707 8l1.647 1.646a.5.5 0 01-.708.708l-2-2a.5.5 0 010-.708l2-2zm2.708 0a.5.5 0 10-.708.708L10.293 8 8.646 9.646a.5.5 0 00.708.708l2-2a.5.5 0 000-.708l-2-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-diff' fill='currentColor' id='file-diff' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M5.5 10.5A.5.5 0 016 10h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5zM8 4a.5.5 0 01.5.5V6H10a.5.5 0 010 1H8.5v1.5a.5.5 0 01-1 0V7H6a.5.5 0 010-1h1.5V4.5A.5.5 0 018 4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-diff-fill' fill='currentColor' id='file-diff-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM8.5 4.5a.5.5 0 00-1 0V6H6a.5.5 0 000 1h1.5v1.5a.5.5 0 001 0V7H10a.5.5 0 000-1H8.5V4.5zM6 10a.5.5 0 000 1h4a.5.5 0 000-1H6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark' fill='currentColor' id='file-earmark' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-arrow-down' fill='currentColor' id='file-earmark-arrow-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M8 6a.5.5 0 01.5.5v3.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L7.5 10.293V6.5A.5.5 0 018 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-arrow-down-fill' fill='currentColor' id='file-earmark-arrow-down-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 01-1-1zm-.5 3.5a.5.5 0 00-1 0v3.793l-1.146-1.147a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l2-2a.5.5 0 00-.708-.708L8.5 11.293V7.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-arrow-up' fill='currentColor' id='file-earmark-arrow-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M8 12a.5.5 0 00.5-.5V7.707l1.146 1.147a.5.5 0 00.708-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L7.5 7.707V11.5a.5.5 0 00.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-arrow-up-fill' fill='currentColor' id='file-earmark-arrow-up-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 01-1-1zM6.354 9.854a.5.5 0 01-.708-.708l2-2a.5.5 0 01.708 0l2 2a.5.5 0 01-.708.708L8.5 8.707V12.5a.5.5 0 01-1 0V8.707L6.354 9.854z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-binary' fill='currentColor' id='file-earmark-binary' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3zM5.526 14.09c.976 0 1.524-.79 1.524-2.205 0-1.412-.548-2.203-1.524-2.203-.978 0-1.526.79-1.526 2.203 0 1.415.548 2.206 1.526 2.206zm-.832-2.205c0-1.05.29-1.612.832-1.612.358 0 .607.247.733.721L4.7 12.137a6.749 6.749 0 01-.006-.252zm.832 1.614c-.36 0-.606-.246-.732-.718l1.556-1.145c.003.079.005.164.005.249 0 1.052-.29 1.614-.829 1.614zm5.329.501v-.595H9.73V9.772h-.69l-1.19.786v.688l1.136-.747h.05v2.906h-1.18V14h3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-binary-fill' fill='currentColor' id='file-earmark-binary-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 01-1-1zm-1.95 7.885c0 1.415-.548 2.206-1.524 2.206C4.548 14.09 4 13.3 4 11.885c0-1.412.548-2.203 1.526-2.203.976 0 1.524.79 1.524 2.203zm-1.524-1.612c-.542 0-.832.563-.832 1.612 0 .088.003.173.006.252l1.559-1.143c-.126-.474-.375-.72-.733-.72zm-.732 2.508c.126.472.372.718.732.718.54 0 .83-.563.83-1.614 0-.085-.003-.17-.006-.25l-1.556 1.146zm6.061.624V14h-3v-.595h1.181V10.5h-.05l-1.136.747v-.688l1.19-.786h.69v3.633h1.125z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-break' fill='currentColor' id='file-earmark-break' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9 0H4a2 2 0 00-2 2v7h1V2a1 1 0 011-1h5v2.5A1.5 1.5 0 0010.5 5H13v4h1V5L9 0zm5 12h-1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2H2v2a2 2 0 002 2h8a2 2 0 002-2v-2zM0 10.5a.5.5 0 01.5-.5h15a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-break-fill' fill='currentColor' id='file-earmark-break-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V9H2V2zm0 10v2a2 2 0 002 2h8a2 2 0 002-2v-2H2zm7-8l.5-2.5 3 3L10 5a1 1 0 01-1-1zm-9 6.5a.5.5 0 01.5-.5h15a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-check' fill='currentColor' id='file-earmark-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M10.854 7.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7.5 9.793l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-check-fill' fill='currentColor' id='file-earmark-check-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 01-1-1zm1.354 4.354a.5.5 0 00-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-code' fill='currentColor' id='file-earmark-code' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M8.646 6.646a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L10.293 9 8.646 7.354a.5.5 0 010-.708zm-1.292 0a.5.5 0 00-.708 0l-2 2a.5.5 0 000 .708l2 2a.5.5 0 00.708-.708L5.707 9l1.647-1.646a.5.5 0 000-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-code-fill' fill='currentColor' id='file-earmark-code-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 01-1-1zM6.646 7.646a.5.5 0 11.708.708L5.707 10l1.647 1.646a.5.5 0 01-.708.708l-2-2a.5.5 0 010-.708l2-2zm4.708 2l-2-2a.5.5 0 10-.708.708L10.293 10l-1.647 1.646a.5.5 0 00.708.708l2-2a.5.5 0 000-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-diff' fill='currentColor' id='file-earmark-diff' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M5.5 11.5A.5.5 0 016 11h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5zM8 5a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 018 5z'/%3e%3cpath fill-rule='evenodd' d='M5.5 7.5A.5.5 0 016 7h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-diff-fill' fill='currentColor' id='file-earmark-diff-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 01-1-1zM8 6a.5.5 0 01.5.5V8H10a.5.5 0 010 1H8.5v1.5a.5.5 0 01-1 0V9H6a.5.5 0 010-1h1.5V6.5A.5.5 0 018 6zm-2.5 6.5A.5.5 0 016 12h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-easel' fill='currentColor' id='file-earmark-easel' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3zm-1 3a.5.5 0 10-1 0h1zm1.527 5H8.973l.553 1.658a.5.5 0 10.948-.316L10.027 11zM8.5 11h-1v1a.5.5 0 001 0v-1zm-1.473 0H5.973l-.447 1.342a.5.5 0 10.948.316L7.027 11z'/%3e%3cpath fill-rule='evenodd' d='M4 7.5A1.5 1.5 0 015.5 6h5A1.5 1.5 0 0112 7.5v2a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 014 9.5v-2zM5.5 7a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-easel-fill' fill='currentColor' id='file-earmark-easel-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 01-1-1zM8.5 6a.5.5 0 10-1 0h-2A1.5 1.5 0 004 7.5v2A1.5 1.5 0 005.5 11h.473l-.447 1.342a.5.5 0 10.948.316L7.027 11H7.5v1a.5.5 0 001 0v-1h.473l.553 1.658a.5.5 0 10.948-.316L10.027 11h.473A1.5 1.5 0 0012 9.5v-2A1.5 1.5 0 0010.5 6h-2zM5 7.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-fill' fill='currentColor' id='file-earmark-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4.707A1 1 0 0013.707 4L10 .293A1 1 0 009.293 0H4zm5.5 1.5v2a1 1 0 001 1h2l-3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-font' fill='currentColor' id='file-earmark-font' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3zm1.443 3H5.057L5 8h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v5.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V6.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-font-fill' fill='currentColor' id='file-earmark-font-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 01-1-1zM5.057 6h5.886L11 8h-.5c-.18-1.096-.356-1.192-1.694-1.235l-.298-.01v5.09c0 .47.1.582.903.655v.5H6.59v-.5c.799-.073.898-.184.898-.654V6.755l-.293.01C5.856 6.808 5.68 6.905 5.5 8H5l.057-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-image' fill='currentColor' id='file-earmark-image' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 16a2 2 0 002-2V4.5L9.5 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8zM3 2a1 1 0 011-1h5.5v2A1.5 1.5 0 0011 4.5h2V10l-2.083-2.083a.5.5 0 00-.76.063L8 11 5.835 9.7a.5.5 0 00-.611.076L3 12V2z'/%3e%3cpath fill-rule='evenodd' d='M6.502 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-image-fill' fill='currentColor' id='file-earmark-image-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0a2 2 0 00-2 2v10.293l2.87-2.87a1 1 0 011.222-.15l1.77 1.06L9.75 7.69a1 1 0 011.52-.126L14 10.293V4.707A1 1 0 0013.707 4L10 .293A1 1 0 009.293 0H4zM2 14v-.293l3.578-3.577 2.165 1.299.396.237.268-.375 2.157-3.02L14 11.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2zM9.5 1.5v2a1 1 0 001 1h2l-3-3zm-1.498 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-lock' fill='currentColor' id='file-earmark-lock' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M8 6a1 1 0 00-1 1v1h2V7a1 1 0 00-1-1zm2 2.076V7a2 2 0 10-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V9.3c0-.627-.46-1.058-1-1.224zM6.105 9.125C6.02 9.193 6 9.258 6 9.3v2.4c0 .042.02.107.105.175A.637.637 0 006.5 12h3a.64.64 0 00.395-.125c.085-.068.105-.133.105-.175V9.3c0-.042-.02-.107-.105-.175A.637.637 0 009.5 9h-3a.637.637 0 00-.395.125z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-lock-fill' fill='currentColor' id='file-earmark-lock-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 01-1-1zM7 7a1 1 0 012 0v1H7V7zm3 0v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 114 0zM6 9.3c0-.042.02-.107.105-.175A.637.637 0 016.5 9h3a.64.64 0 01.395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 019.5 12h-3a.637.637 0 01-.395-.125C6.02 11.807 6 11.742 6 11.7V9.3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-lock2' fill='currentColor' id='file-earmark-lock2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 6a1 1 0 00-1 1v1h2V7a1 1 0 00-1-1zm2 2.076V7a2 2 0 10-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V9.3c0-.627-.46-1.058-1-1.224z'/%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-lock2-fill' fill='currentColor' id='file-earmark-lock2-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 01-1-1zM7 7a1 1 0 012 0v1H7V7zm3 0v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 114 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-medical' fill='currentColor' id='file-earmark-medical' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M7 5a.5.5 0 01.5.5v.634l.549-.317a.5.5 0 11.5.866L8 7l.549.317a.5.5 0 11-.5.866L7.5 7.866V8.5a.5.5 0 01-1 0v-.634l-.549.317a.5.5 0 11-.5-.866L6 7l-.549-.317a.5.5 0 01.5-.866l.549.317V5.5A.5.5 0 017 5zm-2 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-medical-fill' fill='currentColor' id='file-earmark-medical-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 01-1-1zM6.5 5.5a.5.5 0 00-1 0v.634l-.549-.317a.5.5 0 10-.5.866L5 7l-.549.317a.5.5 0 10.5.866l.549-.317V8.5a.5.5 0 101 0v-.634l.549.317a.5.5 0 10.5-.866L7 7l.549-.317a.5.5 0 10-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-minus' fill='currentColor' id='file-earmark-minus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M5.5 9a.5.5 0 01.5-.5h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-minus-fill' fill='currentColor' id='file-earmark-minus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 01-1-1zM6 8.5a.5.5 0 000 1h4a.5.5 0 000-1H6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-music' fill='currentColor' id='file-earmark-music' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M9.757 5.67A1 1 0 0111 6.64v1.75l-2 .5v3.61c0 .495-.301.883-.662 1.123C7.974 13.866 7.499 14 7 14c-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123C6.026 11.134 6.501 11 7 11c.356 0 .7.068 1 .196V6.89a1 1 0 01.757-.97l1-.25z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-music-fill' fill='currentColor' id='file-earmark-music-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 01-1-1zM11 6.64a1 1 0 00-1.243-.97l-1 .25A1 1 0 008 6.89v4.306A2.572 2.572 0 007 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377.5 0 .974-.134 1.338-.377.36-.24.662-.628.662-1.123V8.89l2-.5V6.64z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-person' fill='currentColor' id='file-earmark-person' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M8 11a3 3 0 100-6 3 3 0 000 6z'/%3e%3cpath d='M8 12c4 0 5 1.755 5 1.755V14a1 1 0 01-1 1H4a1 1 0 01-1-1v-.245S4 12 8 12z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-person-fill' fill='currentColor' id='file-earmark-person-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 01-1-1zM11 8a3 3 0 11-6 0 3 3 0 016 0zm2 5.755S12 12 8 12s-5 1.755-5 1.755V14a1 1 0 001 1h8a1 1 0 001-1v-.245z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-play' fill='currentColor' id='file-earmark-play' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6 11.117V6.883a.5.5 0 01.757-.429l3.528 2.117a.5.5 0 010 .858l-3.528 2.117a.5.5 0 01-.757-.43z'/%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-play-fill' fill='currentColor' id='file-earmark-play-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 01-1-1zM6 6.883v4.234a.5.5 0 00.757.429l3.528-2.117a.5.5 0 000-.858L6.757 6.454a.5.5 0 00-.757.43z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-plus' fill='currentColor' id='file-earmark-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M8 6.5a.5.5 0 01.5.5v1.5H10a.5.5 0 010 1H8.5V11a.5.5 0 01-1 0V9.5H6a.5.5 0 010-1h1.5V7a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-plus-fill' fill='currentColor' id='file-earmark-plus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 01-1-1zM8.5 7a.5.5 0 00-1 0v1.5H6a.5.5 0 000 1h1.5V11a.5.5 0 001 0V9.5H10a.5.5 0 000-1H8.5V7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-post' fill='currentColor' id='file-earmark-post' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3zM4 6.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7z'/%3e%3cpath fill-rule='evenodd' d='M4 3.5a.5.5 0 01.5-.5H7a.5.5 0 010 1H4.5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-post-fill' fill='currentColor' id='file-earmark-post-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 01-1-1zM4.5 3a.5.5 0 000 1H7a.5.5 0 000-1H4.5zm0 3a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-richtext' fill='currentColor' id='file-earmark-richtext' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M4.5 12.5A.5.5 0 015 12h3a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 10h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm1.639-3.708l1.33.886 1.854-1.855a.25.25 0 01.289-.047l1.888.974V8.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 100-1.5.75.75 0 000 1.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-richtext-fill' fill='currentColor' id='file-earmark-richtext-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 01-1-1zM7 6.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.861 1.542l1.33.886 1.854-1.855a.25.25 0 01.289-.047l1.888.974V9.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V9s1.54-1.274 1.639-1.208zM5 11a.5.5 0 000 1h6a.5.5 0 000-1H5zm0 2a.5.5 0 000 1h3a.5.5 0 000-1H5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-ruled' fill='currentColor' id='file-earmark-ruled' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5 10H3V9h10v1H6v2h7v1H6v2H5v-2H3v-1h2v-2z'/%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-ruled-fill' fill='currentColor' id='file-earmark-ruled-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 01-1-1zM3 9v1h2v2H3v1h2v2h1v-2h7v-1H6v-2h7V9H3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-slides' fill='currentColor' id='file-earmark-slides' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3zm.5 10.5c0 .276-.895.5-2 .5s-2-.224-2-.5.895-.5 2-.5 2 .224 2 .5z'/%3e%3cpath fill-rule='evenodd' d='M4.504 6.438A.5.5 0 015 6h6a.5.5 0 01.496.438l.5 4A.5.5 0 0111.5 11h-3v2.016a7.795 7.795 0 00-1 0V11h-3a.5.5 0 01-.496-.562l.5-4zM7 7.221v2.558c0 .097.106.157.19.107l2.13-1.279a.125.125 0 000-.214l-2.13-1.28a.125.125 0 00-.19.109z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-slides-fill' fill='currentColor' id='file-earmark-slides-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 01-1-1zM5 6a.5.5 0 00-.496.438l-.5 4A.5.5 0 004.5 11h3v2.016c-.863.055-1.5.251-1.5.484 0 .276.895.5 2 .5s2-.224 2-.5c0-.233-.637-.429-1.5-.484V11h3a.5.5 0 00.496-.562l-.5-4A.5.5 0 0011 6H5zm2 3.78V7.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 010 .214l-2.13 1.28A.125.125 0 017 9.778z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-spreadsheet' fill='currentColor' id='file-earmark-spreadsheet' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5 10H3V9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2zm1 0v2h3v-2H6z'/%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-spreadsheet-fill' fill='currentColor' id='file-earmark-spreadsheet-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 01-1-1zM3 9v1h2v2H3v1h2v2h1v-2h3v2h1v-2h3v-1h-3v-2h3V9H3zm3 3v-2h3v2H6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-text' fill='currentColor' id='file-earmark-text' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M5 11.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-text-fill' fill='currentColor' id='file-earmark-text-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 01-1-1zM4.5 8a.5.5 0 000 1h7a.5.5 0 000-1h-7zM4 10.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-x' fill='currentColor' id='file-earmark-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M6.146 7.146a.5.5 0 01.708 0L8 8.293l1.146-1.147a.5.5 0 11.708.708L8.707 9l1.147 1.146a.5.5 0 01-.708.708L8 9.707l-1.146 1.147a.5.5 0 01-.708-.708L7.293 9 6.146 7.854a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-x-fill' fill='currentColor' id='file-earmark-x-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 01-1-1zM6.854 7.146a.5.5 0 10-.708.708L7.293 9l-1.147 1.146a.5.5 0 00.708.708L8 9.707l1.146 1.147a.5.5 0 00.708-.708L8.707 9l1.147-1.146a.5.5 0 00-.708-.708L8 8.293 6.854 7.146z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-zip' fill='currentColor' id='file-earmark-zip' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 0h5.5v1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.5h1V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3cpath d='M9.5 3V0L14 4.5h-3A1.5 1.5 0 019.5 3z'/%3e%3cpath fill-rule='evenodd' d='M5 7.5a1 1 0 011-1h1a1 1 0 011 1v.938l.4 1.599a1 1 0 01-.416 1.074l-.93.62a1 1 0 01-1.11 0l-.929-.62a1 1 0 01-.415-1.074L5 8.438V7.5zm2 0H6v.938a1 1 0 01-.03.243l-.4 1.598.93.62.929-.62-.4-1.598A1 1 0 017 8.438V7.5z'/%3e%3cpath d='M6 1h1.5v1H6zM5 2h1.5v1H5zm1 1h1.5v1H6zM5 4h1.5v1H5zm1 1h1.5v1H6V5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-earmark-zip-fill' fill='currentColor' id='file-earmark-zip-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 01-1-1zM5.5 3V2h-1V1H6v1h1v1H6v1h1v1H6v1h1v1H5.5V6h-1V5h1V4h-1V3h1zm0 4.5a1 1 0 00-1 1v.938l-.4 1.599a1 1 0 00.416 1.074l.93.62a1 1 0 001.109 0l.93-.62a1 1 0 00.415-1.074l-.4-1.599V8.5a1 1 0 00-1-1h-1zm0 1.938V8.5h1v.938a1 1 0 00.03.243l.4 1.598-.93.62-.93-.62.4-1.598a1 1 0 00.03-.243z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-easel' fill='currentColor' id='file-easel' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath d='M8.5 5a.5.5 0 10-1 0h1zm1.527 5H8.973l.553 1.658a.5.5 0 10.948-.316L10.027 10zM8.5 10h-1v1a.5.5 0 001 0v-1zm-1.473 0H5.973l-.447 1.342a.5.5 0 10.948.316L7.027 10z'/%3e%3cpath fill-rule='evenodd' d='M4 6.5A1.5 1.5 0 015.5 5h5A1.5 1.5 0 0112 6.5v2a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 014 8.5v-2zM5.5 6a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-easel-fill' fill='currentColor' id='file-easel-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM8.5 5a.5.5 0 10-1 0h-2A1.5 1.5 0 004 6.5v2A1.5 1.5 0 005.5 10h.473l-.447 1.342a.5.5 0 10.948.316L7.027 10H7.5v1a.5.5 0 001 0v-1h.473l.553 1.658a.5.5 0 10.948-.316L10.027 10h.473A1.5 1.5 0 0012 8.5v-2A1.5 1.5 0 0010.5 5h-2zM5 6.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-fill' fill='currentColor' id='file-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-font' fill='currentColor' id='file-font' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath d='M10.943 4H5.057L5 6h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v6.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V4.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-font-fill' fill='currentColor' id='file-font-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM5.057 4h5.886L11 6h-.5c-.18-1.096-.356-1.192-1.694-1.235l-.298-.01v6.09c0 .47.1.582.903.655v.5H6.59v-.5c.799-.073.898-.184.898-.654V4.755l-.293.01C5.856 4.808 5.68 4.905 5.5 6H5l.057-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-image' fill='currentColor' id='file-image' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v10l2.224-2.224a.5.5 0 01.61-.075L8 11l2.157-3.02a.5.5 0 01.76-.063L13 10V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M6.502 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-image-fill' fill='currentColor' id='file-image-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v8.293l-2.73-2.73a1 1 0 00-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 00-1.222.15L2 12.292V2a2 2 0 012-2zm6.564 8.27L14 11.708V14a2 2 0 01-2 2H4a2 2 0 01-2-2v-.293l3.578-3.577 2.165 1.299.396.237.268-.375 2.157-3.02zM8.002 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-lock' fill='currentColor' id='file-lock' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M8 5a1 1 0 00-1 1v1h2V6a1 1 0 00-1-1zm2 2.076V6a2 2 0 10-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125C6.02 8.193 6 8.258 6 8.3v2.4c0 .042.02.107.105.175A.637.637 0 006.5 11h3a.64.64 0 00.395-.125c.085-.068.105-.133.105-.175V8.3c0-.042-.02-.107-.105-.175A.637.637 0 009.5 8h-3a.637.637 0 00-.395.125z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-lock-fill' fill='currentColor' id='file-lock-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM7 6a1 1 0 012 0v1H7V6zm3 0v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 114 0zM6 8.3c0-.042.02-.107.105-.175A.637.637 0 016.5 8h3a.64.64 0 01.395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 019.5 11h-3a.637.637 0 01-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-lock2' fill='currentColor' id='file-lock2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M8 5a1 1 0 00-1 1v1h2V6a1 1 0 00-1-1zm2 2.076V6a2 2 0 10-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-lock2-fill' fill='currentColor' id='file-lock2-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM7 6a1 1 0 012 0v1H7V6zm3 0v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 114 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-medical' fill='currentColor' id='file-medical' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M8 4a.5.5 0 01.5.5v.634l.549-.317a.5.5 0 11.5.866L9 6l.549.317a.5.5 0 11-.5.866L8.5 6.866V7.5a.5.5 0 01-1 0v-.634l-.549.317a.5.5 0 11-.5-.866L7 6l-.549-.317a.5.5 0 01.5-.866l.549.317V4.5A.5.5 0 018 4zM5 9.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-medical-fill' fill='currentColor' id='file-medical-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM8.5 4.5a.5.5 0 00-1 0v.634l-.549-.317a.5.5 0 10-.5.866L7 6l-.549.317a.5.5 0 10.5.866l.549-.317V7.5a.5.5 0 101 0v-.634l.549.317a.5.5 0 10.5-.866L9 6l.549-.317a.5.5 0 10-.5-.866l-.549.317V4.5zM5.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-minus' fill='currentColor' id='file-minus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M5.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-minus-fill' fill='currentColor' id='file-minus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM6 7.5a.5.5 0 000 1h4a.5.5 0 000-1H6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-music' fill='currentColor' id='file-music' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M10.304 3.13a1 1 0 011.196.98v1.8l-2.5.5v5.09c0 .495-.301.883-.662 1.123C7.974 12.866 7.499 13 7 13c-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123C6.026 10.134 6.501 10 7 10c.356 0 .7.068 1 .196V4.41a1 1 0 01.804-.98l1.5-.3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-music-fill' fill='currentColor' id='file-music-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zm-.5 4.11a1 1 0 00-1.196-.98l-1.5.3A1 1 0 008 4.41v5.786A2.572 2.572 0 007 10c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377.5 0 .974-.134 1.338-.377.36-.24.662-.628.662-1.123V6.41l2.5-.5v-1.8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-person' fill='currentColor' id='file-person' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 1H4a1 1 0 00-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 00-1-1zM4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4z'/%3e%3cpath fill-rule='evenodd' d='M8 10a3 3 0 100-6 3 3 0 000 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-person-fill' fill='currentColor' id='file-person-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zm-1 7a3 3 0 11-6 0 3 3 0 016 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 01-1 1H4a1 1 0 01-1-1v-1.245C3.854 11.825 5.377 11 8 11z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-play' fill='currentColor' id='file-play' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath d='M6 10.117V5.883a.5.5 0 01.757-.429l3.528 2.117a.5.5 0 010 .858l-3.528 2.117a.5.5 0 01-.757-.43z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-play-fill' fill='currentColor' id='file-play-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM6 5.883v4.234a.5.5 0 00.757.429l3.528-2.117a.5.5 0 000-.858L6.757 5.454a.5.5 0 00-.757.43z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-plus' fill='currentColor' id='file-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M8 5.5a.5.5 0 01.5.5v1.5H10a.5.5 0 010 1H8.5V10a.5.5 0 01-1 0V8.5H6a.5.5 0 010-1h1.5V6a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-plus-fill' fill='currentColor' id='file-plus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM8.5 6a.5.5 0 00-1 0v1.5H6a.5.5 0 000 1h1.5V10a.5.5 0 001 0V8.5H10a.5.5 0 000-1H8.5V6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-post' fill='currentColor' id='file-post' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 5.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-8z'/%3e%3cpath fill-rule='evenodd' d='M4 3.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-post-fill' fill='currentColor' id='file-post-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM4.5 3a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-richtext' fill='currentColor' id='file-richtext' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M4.5 11.5A.5.5 0 015 11h3a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 9h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm1.639-3.708l1.33.886 1.854-1.855a.25.25 0 01.289-.047l1.888.974V7.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V7s1.54-1.274 1.639-1.208zM6.25 5a.75.75 0 100-1.5.75.75 0 000 1.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-richtext-fill' fill='currentColor' id='file-richtext-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM7 4.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.861 1.542l1.33.886 1.854-1.855a.25.25 0 01.289-.047l1.888.974V7.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V7s1.54-1.274 1.639-1.208zM5 9a.5.5 0 000 1h6a.5.5 0 000-1H5zm0 2a.5.5 0 000 1h3a.5.5 0 000-1H5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-ruled' fill='currentColor' id='file-ruled' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2-1a1 1 0 00-1 1v4h10V2a1 1 0 00-1-1H4zm9 6H6v2h7V7zm0 3H6v2h7v-2zm0 3H6v2h6a1 1 0 001-1v-1zm-8 2v-2H3v1a1 1 0 001 1h1zm-2-3h2v-2H3v2zm0-3h2V7H3v2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-ruled-fill' fill='currentColor' id='file-ruled-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v4h12V2a2 2 0 00-2-2zm2 7H6v2h8V7zm0 3H6v2h8v-2zm0 3H6v3h6a2 2 0 002-2v-1zm-9 3v-3H2v1a2 2 0 002 2h1zm-3-4h3v-2H2v2zm0-3h3V7H2v2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-slides' fill='currentColor' id='file-slides' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath d='M10 11.5c0 .276-.895.5-2 .5s-2-.224-2-.5.895-.5 2-.5 2 .224 2 .5z'/%3e%3cpath fill-rule='evenodd' d='M4.504 4.438A.5.5 0 015 4h6a.5.5 0 01.496.438l.5 4A.5.5 0 0111.5 9h-3v2.016a7.795 7.795 0 00-1 0V9h-3a.5.5 0 01-.496-.562l.5-4zM7 5.221v2.558c0 .097.106.157.19.107l2.13-1.279a.125.125 0 000-.214l-2.13-1.28a.125.125 0 00-.19.109z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-slides-fill' fill='currentColor' id='file-slides-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM5 4a.5.5 0 00-.496.438l-.5 4A.5.5 0 004.5 9h3v2.016c-.863.055-1.5.251-1.5.484 0 .276.895.5 2 .5s2-.224 2-.5c0-.233-.637-.429-1.5-.484V9h3a.5.5 0 00.496-.562l-.5-4A.5.5 0 0011 4H5zm2 3.78V5.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 010 .214l-2.13 1.28A.125.125 0 017 7.778z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-spreadsheet' fill='currentColor' id='file-spreadsheet' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2-1a1 1 0 00-1 1v4h10V2a1 1 0 00-1-1H4zm9 6h-3v2h3V7zm0 3h-3v2h3v-2zm0 3h-3v2h2a1 1 0 001-1v-1zm-4 2v-2H6v2h3zm-4 0v-2H3v1a1 1 0 001 1h1zm-2-3h2v-2H3v2zm0-3h2V7H3v2zm3-2v2h3V7H6zm3 3H6v2h3v-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-spreadsheet-fill' fill='currentColor' id='file-spreadsheet-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v4h12V2a2 2 0 00-2-2zm2 7h-4v2h4V7zm0 3h-4v2h4v-2zm0 3h-4v3h2a2 2 0 002-2v-1zm-5 3v-3H6v3h3zm-4 0v-3H2v1a2 2 0 002 2h1zm-3-4h3v-2H2v2zm0-3h3V7H2v2zm4 0V7h3v2H6zm0 1h3v2H6v-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-text' fill='currentColor' id='file-text' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M4.5 10.5A.5.5 0 015 10h3a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 8h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 6h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 4h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-text-fill' fill='currentColor' id='file-text-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM5 4a.5.5 0 000 1h6a.5.5 0 000-1H5zm-.5 2.5A.5.5 0 015 6h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zM5 8a.5.5 0 000 1h6a.5.5 0 000-1H5zm0 2a.5.5 0 000 1h3a.5.5 0 000-1H5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-x' fill='currentColor' id='file-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M6.146 6.146a.5.5 0 01.708 0L8 7.293l1.146-1.147a.5.5 0 11.708.708L8.707 8l1.147 1.146a.5.5 0 01-.708.708L8 8.707 6.854 9.854a.5.5 0 01-.708-.708L7.293 8 6.146 6.854a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-x-fill' fill='currentColor' id='file-x-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM6.854 6.146a.5.5 0 10-.708.708L7.293 8 6.146 9.146a.5.5 0 10.708.708L8 8.707l1.146 1.147a.5.5 0 00.708-.708L8.707 8l1.147-1.146a.5.5 0 00-.708-.708L8 7.293 6.854 6.146z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-zip' fill='currentColor' id='file-zip' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H4z'/%3e%3cpath fill-rule='evenodd' d='M6.5 7.5a1 1 0 011-1h1a1 1 0 011 1v.938l.4 1.599a1 1 0 01-.416 1.074l-.93.62a1 1 0 01-1.109 0l-.93-.62a1 1 0 01-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 01-.03.243l-.4 1.598.93.62.93-.62-.4-1.598a1 1 0 01-.03-.243V7.5z'/%3e%3cpath d='M7.5 1H9v1H7.5zm-1 1H8v1H6.5zm1 1H9v1H7.5zm-1 1H8v1H6.5zm1 1H9v1H7.5V5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-file-zip-fill' fill='currentColor' id='file-zip-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 0h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm2.5 8.5a1 1 0 011-1h1a1 1 0 011 1v.938l.4 1.599a1 1 0 01-.416 1.074l-.93.62a1 1 0 01-1.109 0l-.93-.62a1 1 0 01-.415-1.074l.4-1.599V8.5zm2 .938V8.5h-1v.938a1 1 0 01-.03.243l-.4 1.598.93.62.93-.62-.4-1.598a1 1 0 01-.03-.243zM7.5 3V2h-1V1H8v1h1v1H8v1h1v1H8v1h1v1H7.5V6h-1V5h1V4h-1V3h1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-files' fill='currentColor' id='files' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 2h7a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 001-1V4a1 1 0 00-1-1H4z'/%3e%3cpath d='M6 0h7a2 2 0 012 2v10a2 2 0 01-2 2v-1a1 1 0 001-1V2a1 1 0 00-1-1H6a1 1 0 00-1 1H4a2 2 0 012-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-files-alt' fill='currentColor' id='files-alt' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 0h8a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H3z'/%3e%3cpath d='M13 3V2a2 2 0 012 2v8a2 2 0 01-2 2v-1a1 1 0 001-1V4a1 1 0 00-1-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-film' fill='currentColor' id='film' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1zm4 0h8v6H4V1zm8 8H4v6h8V9zM1 1h2v2H1V1zm2 3H1v2h2V4zM1 7h2v2H1V7zm2 3H1v2h2v-2zm-2 3h2v2H1v-2zM15 1h-2v2h2V1zm-2 3h2v2h-2V4zm2 3h-2v2h2V7zm-2 3h2v2h-2v-2zm2 3h-2v2h2v-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-filter' fill='currentColor' id='filter' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 10.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-filter-circle' fill='currentColor' id='filter-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M7 11.5a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-filter-circle-fill' fill='currentColor' id='filter-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 16A8 8 0 108 0a8 8 0 000 16zM3.5 5a.5.5 0 000 1h9a.5.5 0 000-1h-9zM5 8.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm2 3a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-filter-left' fill='currentColor' id='filter-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 10.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-filter-right' fill='currentColor' id='filter-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 10.5a.5.5 0 00-.5-.5h-3a.5.5 0 000 1h3a.5.5 0 00.5-.5zm0-3a.5.5 0 00-.5-.5h-7a.5.5 0 000 1h7a.5.5 0 00.5-.5zm0-3a.5.5 0 00-.5-.5h-11a.5.5 0 000 1h11a.5.5 0 00.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-filter-square' fill='currentColor' id='filter-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M6 11.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-filter-square-fill' fill='currentColor' id='filter-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm.5 5a.5.5 0 000 1h11a.5.5 0 000-1h-11zM4 8.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm2 3a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-flag' fill='currentColor' id='flag' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.778.085A.5.5 0 0115 .5V8a.5.5 0 01-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 01-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 003 9.342V15.5a.5.5 0 01-1 0V.5a.5.5 0 011 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 001.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 003 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0014 7.655V1.222z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-flag-fill' fill='currentColor' id='flag-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.778.085A.5.5 0 0115 .5V8a.5.5 0 01-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 01-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 003 9.342V15.5a.5.5 0 01-1 0V.5a.5.5 0 011 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 001.349-.476l.019-.007.004-.002h.001'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-flower1' fill='currentColor' id='flower1' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.174 1.184a2 2 0 013.652 0A2 2 0 0112.99 3.01a2 2 0 011.826 3.164 2 2 0 010 3.652 2 2 0 01-1.826 3.164 2 2 0 01-3.164 1.826 2 2 0 01-3.652 0A2 2 0 013.01 12.99a2 2 0 01-1.826-3.164 2 2 0 010-3.652A2 2 0 013.01 3.01a2 2 0 013.164-1.826zM8 1a1 1 0 011 1l-.002.03a4.997 4.997 0 01-.064.387c-.049.241-.122.542-.213.887a60.59 60.59 0 01-.676 2.314L8 5.762l-.045-.144a60.59 60.59 0 01-.676-2.314 16.705 16.705 0 01-.213-.887 4.99 4.99 0 01-.064-.386A1 1 0 018 1zM2 9a1 1 0 11.03-1.998l.091.01c.077.012.176.029.296.054.241.049.542.122.887.213a60.59 60.59 0 012.314.676L5.762 8l-.144.045c-.8.248-1.626.494-2.314.676-.345.091-.646.164-.887.213a4.99 4.99 0 01-.386.064L2 9zm7 5a1 1 0 01-2 0l.002-.03a4.996 4.996 0 01.064-.386c.049-.242.122-.543.213-.888.182-.688.428-1.513.676-2.314L8 10.238l.045.144c.248.8.494 1.626.676 2.314.091.345.164.646.213.887a5.005 5.005 0 01.064.386L9 14zm-5.696-2.134a1 1 0 01-1-1.732l.027-.014c.02-.01.048-.021.084-.036a5.09 5.09 0 01.283-.102c.233-.078.53-.165.874-.258a60.598 60.598 0 012.343-.572l.147-.033-.103.11a58.239 58.239 0 01-1.666 1.743c-.253.252-.477.465-.66.629a5.001 5.001 0 01-.304.248l-.025.017zM4.5 14.062a1 1 0 001.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 00.102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 00.572-2.343l.033-.147-.11.102a60.848 60.848 0 00-1.743 1.667 17.07 17.07 0 00-.629.66 5.06 5.06 0 00-.248.304l-.017.025a1 1 0 00.366 1.366zm9.196-8.196a1 1 0 00-1-1.732l-.025.017a4.951 4.951 0 00-.303.248 16.69 16.69 0 00-.661.629A60.72 60.72 0 0010.04 6.77l-.102.111.147-.033a60.6 60.6 0 002.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 00.367-.138.53.53 0 00.027-.014zM11.5 1.938a1 1 0 01.366 1.366l-.017.025a5.001 5.001 0 01-.248.303 17.01 17.01 0 01-.629.661A60.614 60.614 0 019.23 5.96l-.111.102.033-.147a60.62 60.62 0 01.572-2.342c.093-.345.18-.642.258-.875a5.066 5.066 0 01.138-.367l.014-.027a1 1 0 011.366-.366zM14 9a1 1 0 000-2l-.03.002a4.996 4.996 0 00-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 00.386.064L14 9zM1.938 4.5a1 1 0 00.393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 002.343.572l.147.033-.103-.111a60.584 60.584 0 00-1.666-1.742 16.705 16.705 0 00-.66-.629 4.996 4.996 0 00-.304-.248l-.025-.017a1 1 0 00-1.366.366zm2.196-1.196A1 1 0 115.88 2.33c.01.02.021.048.036.084.029.072.063.166.102.283.078.233.165.53.258.875.186.687.387 1.524.572 2.342l.033.147-.11-.102a60.597 60.597 0 01-1.743-1.667 16.713 16.713 0 01-.629-.66 4.996 4.996 0 01-.248-.304l-.017-.025zm9.928 8.196a1 1 0 01-1.366.366l-.025-.017a4.946 4.946 0 01-.303-.248 16.71 16.71 0 01-.661-.629A60.73 60.73 0 0110.04 9.23l-.102-.111.147.033c.818.185 1.655.386 2.342.572.345.093.642.18.875.258a5 5 0 01.367.138 1 1 0 01.394 1.38zm-3.928 2.196a1 1 0 001.732-1l-.017-.025a5.065 5.065 0 00-.248-.303 16.705 16.705 0 00-.629-.661A60.462 60.462 0 009.23 10.04l-.111-.102.033.147a60.6 60.6 0 00.572 2.342c.093.345.18.642.258.875a4.985 4.985 0 00.138.367.575.575 0 00.014.027zM8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-flower2' fill='currentColor' id='flower2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 16a4 4 0 004-4 4 4 0 000-8 4 4 0 00-8 0 4 4 0 100 8 4 4 0 004 4zm3-12a3 3 0 00-6 0c0 .073.01.155.03.247.544.241 1.091.638 1.598 1.084A2.987 2.987 0 018 5c.494 0 .96.12 1.372.331.507-.446 1.054-.843 1.598-1.084.02-.092.03-.174.03-.247zm-.812 6.052A2.99 2.99 0 0011 8a2.99 2.99 0 00-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 110 6c-.268 0-.66-.13-1.165-.461a6.833 6.833 0 01-.647-.487zm-3.56.617a3.001 3.001 0 002.744 0c.507.446 1.054.842 1.598 1.084.02.091.03.174.03.247a3 3 0 11-6 0c0-.073.01-.155.03-.247.544-.242 1.091-.638 1.598-1.084zm-.816-4.721A2.99 2.99 0 005 8c0 .794.308 1.516.812 2.052a6.83 6.83 0 01-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 010-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487zM8 9a1 1 0 110-2 1 1 0 010 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-flower3' fill='currentColor' id='flower3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 00-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 10-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 00-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 102 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 104 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 102-3.464c-.229-.132-.603-.216-1.04-.268zM9 4a1 1 0 00-2 0 1.473 1.473 0 00.045.206c.039.131.1.294.183.483.166.378.396.808.637 1.223l.135.23.135-.23c.241-.415.47-.845.637-1.223.083-.19.144-.352.183-.484.02-.065.031-.116.038-.154C9 4.018 9 4.002 9 4zM3.67 5.5a1 1 0 00.366 1.366 1.47 1.47 0 00.2.064c.134.032.305.06.51.083.411.045.898.061 1.379.06.09 0 .178 0 .266-.002a21.82 21.82 0 00-.131-.232 12.88 12.88 0 00-.742-1.163 4.215 4.215 0 00-.327-.4 1.472 1.472 0 00-.115-.11c-.025-.022-.038-.03-.04-.032A1 1 0 003.67 5.5zm1.366 5.366a1 1 0 01-1-1.732c.001 0 .016-.008.047-.02.037-.013.087-.028.153-.044.134-.032.305-.06.51-.083a12.88 12.88 0 011.379-.06c.09 0 .178 0 .266.002a21.82 21.82 0 01-.131.232c-.24.416-.497.83-.742 1.163a4.1 4.1 0 01-.327.4 1.483 1.483 0 01-.155.142zM9 12a1 1 0 01-2 0 1.476 1.476 0 01.045-.206c.039-.131.1-.294.183-.483.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223.083.19.144.352.183.484A1.338 1.338 0 019 12zm3.33-6.5a1 1 0 01-.366 1.366 1.478 1.478 0 01-.2.064c-.134.032-.305.06-.51.083-.412.045-.898.061-1.379.06-.09 0-.178 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4.1 4.1 0 01.327-.4c.046-.05.085-.086.114-.11.026-.022.04-.03.041-.032a1 1 0 011.366.366zm-1.366 5.366a1 1 0 001-1.732c-.002 0-.016-.008-.047-.02a1.478 1.478 0 00-.153-.044 4.217 4.217 0 00-.51-.083 12.881 12.881 0 00-1.379-.06c-.09 0-.178 0-.266.002a22 22 0 00.131.232c.24.416.497.83.742 1.163.122.167.232.3.327.4a1.494 1.494 0 00.155.142zM8 9a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-folder' fill='currentColor' id='folder' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.828 4a3 3 0 01-2.12-.879l-.83-.828A1 1 0 006.173 2H2.5a1 1 0 00-1 .981L1.546 4h-1L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3v1z'/%3e%3cpath fill-rule='evenodd' d='M13.81 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91h10.348a1 1 0 00.995-.91l.637-7A1 1 0 0013.81 4zM2.19 3A2 2 0 00.198 5.181l.637 7A2 2 0 002.826 14h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0013.81 3H2.19z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-folder-check' fill='currentColor' id='folder-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.828 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91H9v1H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3h3.982a2 2 0 011.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0013.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 011-.98h3.672a1 1 0 01.707.293z'/%3e%3cpath fill-rule='evenodd' d='M15.854 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708l1.146 1.147 2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-folder-fill' fill='currentColor' id='folder-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.828 3h3.982a2 2 0 011.992 2.181l-.637 7A2 2 0 0113.174 14H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 006.172 2H2.5a1 1 0 00-1 .981l.006.139z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-folder-minus' fill='currentColor' id='folder-minus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.828 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91H9v1H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3h3.982a2 2 0 011.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0013.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 011-.98h3.672a1 1 0 01.707.293z'/%3e%3cpath fill-rule='evenodd' d='M11 11.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-folder-plus' fill='currentColor' id='folder-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.828 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91H9v1H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3h3.982a2 2 0 011.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0013.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 011-.98h3.672a1 1 0 01.707.293z'/%3e%3cpath fill-rule='evenodd' d='M13.5 10a.5.5 0 01.5.5V12h1.5a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0V13h-1.5a.5.5 0 010-1H13v-1.5a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-folder-symlink' fill='currentColor' id='folder-symlink' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.828 4a3 3 0 01-2.12-.879l-.83-.828A1 1 0 006.173 2H2.5a1 1 0 00-1 .981L1.546 4h-1L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3v1z'/%3e%3cpath fill-rule='evenodd' d='M13.81 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91h10.348a1 1 0 00.995-.91l.637-7A1 1 0 0013.81 4zM2.19 3A2 2 0 00.198 5.181l.637 7A2 2 0 002.826 14h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0013.81 3H2.19z'/%3e%3cpath d='M8.616 10.24l3.182-1.969a.443.443 0 000-.742l-3.182-1.97c-.27-.166-.616.036-.616.372V6.7c-.857 0-3.429 0-4 4.8 1.429-2.7 4-2.4 4-2.4v.769c0 .336.346.538.616.371z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-folder-symlink-fill' fill='currentColor' id='folder-symlink-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13.81 3H9.828a2 2 0 01-1.414-.586l-.828-.828A2 2 0 006.172 1H2.5a2 2 0 00-2 2l.04.87a1.99 1.99 0 00-.342 1.311l.637 7A2 2 0 002.826 14h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0013.81 3zM2.19 3c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 011-.98h3.672a1 1 0 01.707.293L7.586 3H2.19zm9.608 5.271l-3.182 1.97c-.27.166-.616-.036-.616-.372V9.1s-2.571-.3-4 2.4c.571-4.8 3.143-4.8 4-4.8v-.769c0-.336.346-.538.616-.371l3.182 1.969c.27.166.27.576 0 .742z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-folder-x' fill='currentColor' id='folder-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.828 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91H9v1H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3h3.982a2 2 0 011.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0013.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 011-.98h3.672a1 1 0 01.707.293z'/%3e%3cpath fill-rule='evenodd' d='M11.146 10.146a.5.5 0 01.708 0L13 11.293l1.146-1.147a.5.5 0 01.708.708L13.707 12l1.147 1.146a.5.5 0 01-.708.708L13 12.707l-1.146 1.147a.5.5 0 01-.708-.708L12.293 12l-1.147-1.146a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-folder2' fill='currentColor' id='folder2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 3.5A1.5 1.5 0 012.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0115 5.5v7a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 011 12.5v-9zM2.5 3a.5.5 0 00-.5.5V6h12v-.5a.5.5 0 00-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-folder2-open' fill='currentColor' id='folder2-open' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 3.5A1.5 1.5 0 012.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0115 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0112.733 15H3.266a2.5 2.5 0 01-2.481-2.19l-.64-5.124A1.5 1.5 0 011 6.14V3.5zM2 6h12v-.5a.5.5 0 00-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 00-.5.5V6zm-.367 1a.5.5 0 00-.496.562l.64 5.124A1.5 1.5 0 003.266 14h9.468a1.5 1.5 0 001.489-1.314l.64-5.124A.5.5 0 0014.367 7H1.633z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-fonts' fill='currentColor' id='fonts' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.258 3H3.747l-.082 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.43.013c1.935.062 2.434.301 2.694 1.846h.479L12.258 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-forward' fill='currentColor' id='forward' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.502 5.513a.144.144 0 00-.202.134V6.65a.5.5 0 01-.5.5H2.5v2.9h6.3a.5.5 0 01.5.5v1.003c0 .108.11.176.202.134l3.984-2.933a.51.51 0 01.042-.028.147.147 0 000-.252.51.51 0 01-.042-.028L9.502 5.513zM8.3 5.647a1.144 1.144 0 011.767-.96l3.994 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a1.144 1.144 0 01-1.767-.96v-.503H2a.5.5 0 01-.5-.5v-3.9a.5.5 0 01.5-.5h6.3v-.503z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-forward-fill' fill='currentColor' id='forward-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.77 12.11l4.012-2.953a.647.647 0 000-1.114L9.771 5.09a.644.644 0 00-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-front' fill='currentColor' id='front' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h8a2 2 0 012 2v2h2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-2H2a2 2 0 01-2-2V2zm5 10v2a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1h-2v5a2 2 0 01-2 2H5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-fullscreen' fill='currentColor' id='fullscreen' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.5 1a.5.5 0 00-.5.5v4a.5.5 0 01-1 0v-4A1.5 1.5 0 011.5 0h4a.5.5 0 010 1h-4zM10 .5a.5.5 0 01.5-.5h4A1.5 1.5 0 0116 1.5v4a.5.5 0 01-1 0v-4a.5.5 0 00-.5-.5h-4a.5.5 0 01-.5-.5zM.5 10a.5.5 0 01.5.5v4a.5.5 0 00.5.5h4a.5.5 0 010 1h-4A1.5 1.5 0 010 14.5v-4a.5.5 0 01.5-.5zm15 0a.5.5 0 01.5.5v4a1.5 1.5 0 01-1.5 1.5h-4a.5.5 0 010-1h4a.5.5 0 00.5-.5v-4a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-fullscreen-exit' fill='currentColor' id='fullscreen-exit' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.5 0a.5.5 0 01.5.5v4A1.5 1.5 0 014.5 6h-4a.5.5 0 010-1h4a.5.5 0 00.5-.5v-4a.5.5 0 01.5-.5zm5 0a.5.5 0 01.5.5v4a.5.5 0 00.5.5h4a.5.5 0 010 1h-4A1.5 1.5 0 0110 4.5v-4a.5.5 0 01.5-.5zM0 10.5a.5.5 0 01.5-.5h4A1.5 1.5 0 016 11.5v4a.5.5 0 01-1 0v-4a.5.5 0 00-.5-.5h-4a.5.5 0 01-.5-.5zm10 1a1.5 1.5 0 011.5-1.5h4a.5.5 0 010 1h-4a.5.5 0 00-.5.5v4a.5.5 0 01-1 0v-4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-funnel' fill='currentColor' id='funnel' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-funnel-fill' fill='currentColor' id='funnel-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-gear' fill='currentColor' id='gear' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 014.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 01-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 011.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 012.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 012.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 011.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 01-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 018.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 001.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 00.52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 00-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 00-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 00-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 00-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 00.52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 001.255-.52l.094-.319z'/%3e%3cpath fill-rule='evenodd' d='M8 5.754a2.246 2.246 0 100 4.492 2.246 2.246 0 000-4.492zM4.754 8a3.246 3.246 0 116.492 0 3.246 3.246 0 01-6.492 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-gear-fill' fill='currentColor' id='gear-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 01-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 01.872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 012.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 012.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 01.872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 01-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 01-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 100-5.86 2.929 2.929 0 000 5.858z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-gear-wide' fill='currentColor' id='gear-wide' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 01-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 01-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 01-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 01.434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 011.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 011.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 011.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 011.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 01.434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 01-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 01-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 01-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 100-9.995 4.998 4.998 0 000 9.996z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-gear-wide-connected' fill='currentColor' id='gear-wide-connected' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 01-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 01-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 01-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 01.434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 011.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 011.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 011.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 011.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 01.434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 01-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 01-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 01-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 100-9.995 4.998 4.998 0 000 9.996z'/%3e%3cpath fill-rule='evenodd' d='M7.375 8L4.602 4.302l.8-.6L8.25 7.5h4.748v1H8.25L5.4 12.298l-.8-.6L7.376 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-gem' fill='currentColor' id='gem' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.1.7a.5.5 0 01.4-.2h9a.5.5 0 01.4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 01-.8 0L.1 5.3a.5.5 0 010-.6l3-4zm11.386 3.785l-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004l.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495l5.062-.005L8 13.366 5.47 5.495zm-1.371-.999l-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l2.92-.003 2.193 6.82L1.5 5.5zm7.889 6.817l2.194-6.828 2.929-.003-5.123 6.831z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-geo' fill='currentColor' id='geo' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1a3 3 0 100 6 3 3 0 000-6zM4 4a4 4 0 114.5 3.969V13.5a.5.5 0 01-1 0V7.97A4 4 0 014 3.999zm2.493 8.574a.5.5 0 01-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 00-.37.265.301.301 0 00-.057.09V14l.002.008a.147.147 0 00.016.033.617.617 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 00.146-.15.148.148 0 00.015-.033L12 14v-.004a.301.301 0 00-.057-.09 1.318 1.318 0 00-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 11.164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 01.575.411z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-geo-alt' fill='currentColor' id='geo-alt' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 003 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 008 14.58l.208-.22a31.493 31.493 0 001.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10z'/%3e%3cpath fill-rule='evenodd' d='M8 8a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 100-6 3 3 0 000 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-geo-alt-fill' fill='currentColor' id='geo-alt-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-geo-fill' fill='currentColor' id='geo-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 4a4 4 0 114.5 3.969V13.5a.5.5 0 01-1 0V7.97A4 4 0 014 3.999zm2.493 8.574a.5.5 0 01-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 00-.37.265.301.301 0 00-.057.09V14l.002.008a.147.147 0 00.016.033.617.617 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 00.146-.15.148.148 0 00.015-.033L12 14v-.004a.301.301 0 00-.057-.09 1.318 1.318 0 00-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 11.164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 01.575.411z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-gift' fill='currentColor' id='gift' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 2.5a2.5 2.5 0 015 0 2.5 2.5 0 015 0v.006c0 .07 0 .27-.038.494H15a1 1 0 011 1v2a1 1 0 01-1 1v7.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 011 14.5V7a1 1 0 01-1-1V4a1 1 0 011-1h2.038A2.968 2.968 0 013 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 10-3 0c0 .085.002.274.045.43a.522.522 0 00.023.07zM9 3h2.932a.56.56 0 00.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 00-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 00.5-.5V7zm-7 8V7H2v7.5a.5.5 0 00.5.5H7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-gift-fill' fill='currentColor' id='gift-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 2.5a2.5 2.5 0 015 0 2.5 2.5 0 015 0v.006c0 .07 0 .27-.038.494H15a1 1 0 011 1v1a1 1 0 01-1 1H1a1 1 0 01-1-1V4a1 1 0 011-1h2.038A2.968 2.968 0 013 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 10-3 0c0 .085.002.274.045.43a.522.522 0 00.023.07zM9 3h2.932a.56.56 0 00.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 00-3 0V3z'/%3e%3cpath d='M15 7v7.5a1.5 1.5 0 01-1.5 1.5H9V7h6zM2.5 16A1.5 1.5 0 011 14.5V7h6v9H2.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-globe' fill='currentColor' id='globe' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a8 8 0 1116 0A8 8 0 010 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 005.145 4H7.5V1.077zM4.09 4H2.255a7.025 7.025 0 013.072-2.472 6.7 6.7 0 00-.597.933c-.247.464-.462.98-.64 1.539zm-.582 3.5h-2.49c.062-.89.291-1.733.656-2.5H3.82a13.652 13.652 0 00-.312 2.5zM4.847 5H7.5v2.5H4.51A12.5 12.5 0 014.846 5zM8.5 5v2.5h2.99a12.495 12.495 0 00-.337-2.5H8.5zM4.51 8.5H7.5V11H4.847a12.5 12.5 0 01-.338-2.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12H7.5v2.923c-.67-.204-1.335-.82-1.887-1.855A7.97 7.97 0 015.145 12zm.182 2.472a6.696 6.696 0 01-.597-.933A9.268 9.268 0 014.09 12H2.255a7.024 7.024 0 003.072 2.472zM3.82 11H1.674a6.958 6.958 0 01-.656-2.5h2.49c.03.877.138 1.718.312 2.5zm6.853 3.472A7.024 7.024 0 0013.745 12H11.91a9.27 9.27 0 01-.64 1.539 6.688 6.688 0 01-.597.933zM8.5 12h2.355a7.967 7.967 0 01-.468 1.068c-.552 1.035-1.218 1.65-1.887 1.855V12zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 01-.312 2.5zm2.802-3.5h-2.49A13.65 13.65 0 0012.18 5h2.146c.365.767.594 1.61.656 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 00-3.072-2.472c.218.284.418.598.597.933zM10.855 4H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-globe2' fill='currentColor' id='globe2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a8 8 0 1116 0A8 8 0 010 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539a8.372 8.372 0 01-1.198-.49 7.01 7.01 0 012.276-1.52 6.7 6.7 0 00-.597.932 8.854 8.854 0 00-.48 1.079zM3.509 7.5H1.017A6.964 6.964 0 012.38 3.825c.47.258.995.482 1.565.667A13.4 13.4 0 003.508 7.5zm1.4-2.741c.808.187 1.681.301 2.591.332V7.5H4.51c.035-.987.176-1.914.399-2.741zM8.5 5.09V7.5h2.99a12.342 12.342 0 00-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5H7.5v2.409c-.91.03-1.783.145-2.591.332a12.343 12.343 0 01-.4-2.741zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696A12.63 12.63 0 017.5 11.91v3.014c-.67-.204-1.335-.82-1.887-1.855a7.776 7.776 0 01-.395-.872zm.11 2.276a6.696 6.696 0 01-.598-.933 8.853 8.853 0 01-.481-1.079 8.38 8.38 0 00-1.198.49 7.01 7.01 0 002.276 1.522zm-1.383-2.964a9.083 9.083 0 00-1.565.667A6.963 6.963 0 011.018 8.5h2.49a13.36 13.36 0 00.437 3.008zm6.728 2.964a7.009 7.009 0 002.275-1.521 8.376 8.376 0 00-1.197-.49 8.853 8.853 0 01-.481 1.078 6.688 6.688 0 01-.597.933zM8.5 11.909c.81.03 1.577.13 2.282.287-.12.312-.252.604-.395.872-.552 1.035-1.218 1.65-1.887 1.855V11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0014.982 8.5h-2.49a13.36 13.36 0 01-.437 3.008zM14.982 7.5h-2.49a13.361 13.361 0 00-.437-3.008 9.123 9.123 0 001.565-.667A6.963 6.963 0 0114.982 7.5zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 001.196-.49 7.01 7.01 0 00-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343c-.705.157-1.473.257-2.282.287V1.077c.67.204 1.335.82 1.887 1.855.143.268.276.56.395.872z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-graph-down' fill='currentColor' id='graph-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 0h1v15h15v1H0V0zm10 11.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-1 0v2.6l-3.613-4.417a.5.5 0 00-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 00-.808.588l4 5.5a.5.5 0 00.758.06l2.609-2.61L13.445 11H10.5a.5.5 0 00-.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-graph-up' fill='currentColor' id='graph-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4.9l-3.613 4.417a.5.5 0 01-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 01-.808-.588l4-5.5a.5.5 0 01.758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-grid' fill='currentColor' id='grid' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zM2.5 2a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zM1 10.5A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-grid-1x2' fill='currentColor' id='grid-1x2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9h-5v5h5v-5zM0 1a1 1 0 011-1h5a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1zm9 0a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V1zm1 8a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1h-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-grid-1x2-fill' fill='currentColor' id='grid-1x2-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 1a1 1 0 011-1h5a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1zm9 0a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V1zm0 9a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-grid-3x2' fill='currentColor' id='grid-3x2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 3.5A1.5 1.5 0 011.5 2h13A1.5 1.5 0 0116 3.5v8a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 11.5v-8zM1.5 3a.5.5 0 00-.5.5V7h4V3H1.5zM5 8H1v3.5a.5.5 0 00.5.5H5V8zm1 0h4v4H6V8zm4-1H6V3h4v4zm1 1v4h3.5a.5.5 0 00.5-.5V8h-4zm0-1V3h3.5a.5.5 0 01.5.5V7h-4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-grid-3x2-gap' fill='currentColor' id='grid-3x2-gap' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 4H2v2h2V4zm1 7V9a1 1 0 00-1-1H2a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1zm0-5V4a1 1 0 00-1-1H2a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1zm5 5V9a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1zm0-5V4a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1zM9 4H7v2h2V4zm5 0h-2v2h2V4zM4 9H2v2h2V9zm5 0H7v2h2V9zm5 0h-2v2h2V9zm-3-5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zm1 4a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V9a1 1 0 00-1-1h-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-grid-3x2-gap-fill' fill='currentColor' id='grid-3x2-gap-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V4zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zM1 9a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V9zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V9zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V9z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-grid-3x3' fill='currentColor' id='grid-3x3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A1.5 1.5 0 011.5 0h13A1.5 1.5 0 0116 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-13zM1.5 1a.5.5 0 00-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4V6h4v4H6zm-1 1H1v3.5a.5.5 0 00.5.5H5v-4zm1 0h4v4H6v-4zm5 0v4h3.5a.5.5 0 00.5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 00-.5-.5H11v4zm-1 0H6V1h4v4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-grid-3x3-gap' fill='currentColor' id='grid-3x3-gap' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 2H2v2h2V2zm1 12v-2a1 1 0 00-1-1H2a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1zm0-5V7a1 1 0 00-1-1H2a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1zm0-5V2a1 1 0 00-1-1H2a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1zm5 10v-2a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1zm0-5V7a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1zm0-5V2a1 1 0 00-1-1H7a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1zM9 2H7v2h2V2zm5 0h-2v2h2V2zM4 7H2v2h2V7zm5 0H7v2h2V7zm5 0h-2v2h2V7zM4 12H2v2h2v-2zm5 0H7v2h2v-2zm5 0h-2v2h2v-2zM12 1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1V2a1 1 0 00-1-1h-2zm-1 6a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V7zm1 4a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-grid-3x3-gap-fill' fill='currentColor' id='grid-3x3-gap-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1 2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V2zM1 7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V7zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V7zM1 12a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1v-2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-grid-fill' fill='currentColor' id='grid-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-grip-horizontal' fill='currentColor' id='grip-horizontal' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 2a1 1 0 11-2 0 1 1 0 012 0zm3 0a1 1 0 11-2 0 1 1 0 012 0zM7 5a1 1 0 11-2 0 1 1 0 012 0zm3 0a1 1 0 11-2 0 1 1 0 012 0zM7 8a1 1 0 11-2 0 1 1 0 012 0zm3 0a1 1 0 11-2 0 1 1 0 012 0zm-3 3a1 1 0 11-2 0 1 1 0 012 0zm3 0a1 1 0 11-2 0 1 1 0 012 0zm-3 3a1 1 0 11-2 0 1 1 0 012 0zm3 0a1 1 0 11-2 0 1 1 0 012 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-grip-vertical' fill='currentColor' id='grip-vertical' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2 8a1 1 0 110 2 1 1 0 010-2zm0-3a1 1 0 110 2 1 1 0 010-2zm3 3a1 1 0 110 2 1 1 0 010-2zm0-3a1 1 0 110 2 1 1 0 010-2zm3 3a1 1 0 110 2 1 1 0 010-2zm0-3a1 1 0 110 2 1 1 0 010-2zm3 3a1 1 0 110 2 1 1 0 010-2zm0-3a1 1 0 110 2 1 1 0 010-2zm3 3a1 1 0 110 2 1 1 0 010-2zm0-3a1 1 0 110 2 1 1 0 010-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hammer' fill='currentColor' id='hammer' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.812 1.952a.5.5 0 01-.312.89c-1.671 0-2.852.596-3.616 1.185L4.857 5.073V6.21a.5.5 0 01-.146.354L3.425 7.853a.5.5 0 01-.708 0L.146 5.274a.5.5 0 010-.706l1.286-1.29a.5.5 0 01.354-.146H2.84C4.505 1.228 6.216.862 7.557 1.04a5.009 5.009 0 012.077.782l.178.129z'/%3e%3cpath fill-rule='evenodd' d='M6.012 3.5a.5.5 0 01.359.165l9.146 8.646A.5.5 0 0115.5 13L14 14.5a.5.5 0 01-.756-.056L4.598 5.297a.5.5 0 01.048-.65l1-1a.5.5 0 01.366-.147z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hand-index' fill='currentColor' id='hand-index' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.75 1a.75.75 0 00-.75.75V9a.5.5 0 01-1 0v-.89l-1.003.2a.5.5 0 00-.399.546l.345 3.105a1.5 1.5 0 00.243.666l1.433 2.15a.5.5 0 00.416.223h6.385a.5.5 0 00.434-.252l1.395-2.442a2.5 2.5 0 00.317-.991l.272-2.715a1 1 0 00-.995-1.1H13.5v1a.5.5 0 01-1 0V7.154a4.208 4.208 0 00-.2-.26c-.187-.222-.368-.383-.486-.43-.124-.05-.392-.063-.708-.039a4.844 4.844 0 00-.106.01V8a.5.5 0 01-1 0V5.986c0-.167-.073-.272-.15-.314a1.657 1.657 0 00-.448-.182c-.179-.035-.5-.04-.816-.027l-.086.004V8a.5.5 0 01-1 0V1.75A.75.75 0 006.75 1zM8.5 4.466V1.75a1.75 1.75 0 00-3.5 0v5.34l-1.199.24a1.5 1.5 0 00-1.197 1.636l.345 3.106a2.5 2.5 0 00.405 1.11l1.433 2.15A1.5 1.5 0 006.035 16h6.385a1.5 1.5 0 001.302-.756l1.395-2.441a3.5 3.5 0 00.444-1.389l.272-2.715a2 2 0 00-1.99-2.199h-.582a5.184 5.184 0 00-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 00-.56-.642 2.634 2.634 0 00-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hand-index-thumb' fill='currentColor' id='hand-index-thumb' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.75 1a.75.75 0 00-.75.75V9.5a.5.5 0 01-.854.354l-2.41-2.411a.517.517 0 00-.809.631l2.512 4.185 1.232 2.465a.5.5 0 00.447.276h6.302a.5.5 0 00.434-.252l1.395-2.442a2.5 2.5 0 00.317-.991l.272-2.715a1 1 0 00-.995-1.1H13.5v1a.5.5 0 11-1 0V7.154a4.208 4.208 0 00-.2-.26c-.187-.222-.368-.383-.486-.43-.124-.05-.392-.063-.708-.039a4.844 4.844 0 00-.106.01V8a.5.5 0 11-1 0V5.986c0-.167-.073-.272-.15-.314a1.657 1.657 0 00-.448-.182c-.179-.035-.5-.04-.816-.027l-.086.004V8a.5.5 0 11-1 0V1.75A.75.75 0 006.75 1zM8.5 4.466V1.75a1.75 1.75 0 10-3.5 0v6.543L3.443 6.736A1.517 1.517 0 001.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 006.118 16h6.302a1.5 1.5 0 001.302-.756l1.395-2.441a3.5 3.5 0 00.444-1.389l.272-2.715a2 2 0 00-1.99-2.199h-.582a5.114 5.114 0 00-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 00-.56-.642 2.634 2.634 0 00-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hand-thumbs-down' fill='currentColor' id='hand-thumbs-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 001.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 00-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.094 2.094 0 00-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 00-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 00-.253-.912C13.1.757 12.437.28 11.5.28v1c.563 0 .901.272 1.066.56.086.15.121.3.121.416 0 .12-.035.165-.04.17l-.354.353.353.354c.202.202.407.512.505.805.104.312.043.44-.005.488l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.415-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.353.352.373.714.267 1.021-.122.35-.396.593-.571.651-.653.218-1.447.224-2.11.164a8.907 8.907 0 01-1.094-.17l-.014-.004H9.62a.5.5 0 00-.595.643 8.34 8.34 0 01.145 4.725c-.03.112-.128.215-.288.255l-.262.066c-.306.076-.642-.156-.667-.519-.075-1.081-.239-2.15-.482-2.85-.174-.502-.603-1.267-1.238-1.977C5.597 8.926 4.715 8.23 3.62 7.93 3.226 7.823 3 7.534 3 7.28V3.279c0-.26.22-.515.553-.55 1.293-.138 1.936-.53 2.491-.869l.04-.024c.27-.165.495-.296.776-.393.277-.096.63-.163 1.14-.163h3.5v-1H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 00-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hand-thumbs-up' fill='currentColor' id='hand-thumbs-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 01.443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 01-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16v-1c.563 0 .901-.272 1.066-.56a.865.865 0 00.121-.416c0-.12-.035-.165-.04-.17l-.354-.354.353-.354c.202-.201.407-.511.505-.804.104-.312.043-.441-.005-.488l-.353-.354.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315L12.793 9l.353-.354c.353-.352.373-.713.267-1.02-.122-.35-.396-.593-.571-.652-.653-.217-1.447-.224-2.11-.164a8.907 8.907 0 00-1.094.171l-.014.003-.003.001a.5.5 0 01-.595-.643 8.34 8.34 0 00.145-4.726c-.03-.111-.128-.215-.288-.255l-.262-.065c-.306-.077-.642.156-.667.518-.075 1.082-.239 2.15-.482 2.85-.174.502-.603 1.268-1.238 1.977-.637.712-1.519 1.41-2.614 1.708-.394.108-.62.396-.62.65v4.002c0 .26.22.515.553.55 1.293.137 1.936.53 2.491.868l.04.025c.27.164.495.296.776.393.277.095.63.163 1.14.163h3.5v1H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 01-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-handbag' fill='currentColor' id='handbag' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1a2 2 0 00-2 2v2h4V3a2 2 0 00-2-2zm3 4V3a3 3 0 10-6 0v2H3.361a1.5 1.5 0 00-1.483 1.277L.85 13.13A2.5 2.5 0 003.322 16h9.356a2.5 2.5 0 002.472-2.87l-1.028-6.853A1.5 1.5 0 0012.64 5H11zm-1 1v1.5a.5.5 0 001 0V6h1.639a.5.5 0 01.494.426l1.028 6.851A1.5 1.5 0 0112.678 15H3.322a1.5 1.5 0 01-1.483-1.723l1.028-6.851A.5.5 0 013.36 6H5v1.5a.5.5 0 001 0V6h4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-handbag-fill' fill='currentColor' id='handbag-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8 1a2 2 0 00-2 2v2H5V3a3 3 0 016 0v2h-1V3a2 2 0 00-2-2zM5 5H3.361a1.5 1.5 0 00-1.483 1.277L.85 13.13A2.5 2.5 0 003.322 16h9.356a2.5 2.5 0 002.472-2.87l-1.028-6.853A1.5 1.5 0 0012.64 5H11v1.5a.5.5 0 01-1 0V5H6v1.5a.5.5 0 01-1 0V5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hash' fill='currentColor' id='hash' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.39 12.648a1.32 1.32 0 00-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 00.016-.164.51.51 0 00-.516-.516.54.54 0 00-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 00-.523-.516.539.539 0 00-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hdd' fill='currentColor' id='hdd' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 9H2a1 1 0 00-1 1v1a1 1 0 001 1h12a1 1 0 001-1v-1a1 1 0 00-1-1zM2 8a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2v-1a2 2 0 00-2-2H2z'/%3e%3cpath d='M5 10.5a.5.5 0 11-1 0 .5.5 0 011 0zm-2 0a.5.5 0 11-1 0 .5.5 0 011 0z'/%3e%3cpath fill-rule='evenodd' d='M4.094 4a.5.5 0 00-.44.26l-2.47 4.532A1.5 1.5 0 001 9.51v.99H0v-.99c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 014.094 3h7.812a1.5 1.5 0 011.317.782l2.472 4.53c.2.368.305.78.305 1.198v.99h-1v-.99a1.5 1.5 0 00-.183-.718L12.345 4.26a.5.5 0 00-.439-.26H4.094z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hdd-fill' fill='currentColor' id='hdd-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 10a2 2 0 012-2h12a2 2 0 012 2v1a2 2 0 01-2 2H2a2 2 0 01-2-2v-1zm2.5 1a.5.5 0 100-1 .5.5 0 000 1zm2 0a.5.5 0 100-1 .5.5 0 000 1z'/%3e%3cpath d='M.91 7.204A2.993 2.993 0 012 7h12c.384 0 .752.072 1.09.204l-1.867-3.422A1.5 1.5 0 0011.906 3H4.094a1.5 1.5 0 00-1.317.782L.91 7.204z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hdd-network' fill='currentColor' id='hdd-network' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 3H2a1 1 0 00-1 1v1a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'/%3e%3cpath d='M5 4.5a.5.5 0 11-1 0 .5.5 0 011 0zm-2 0a.5.5 0 11-1 0 .5.5 0 011 0z'/%3e%3cpath fill-rule='evenodd' d='M7.5 10V7h1v3a1.5 1.5 0 011.5 1.5h5.5a.5.5 0 010 1H10A1.5 1.5 0 018.5 14h-1A1.5 1.5 0 016 12.5H.5a.5.5 0 010-1H6A1.5 1.5 0 017.5 10zm0 1a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hdd-network-fill' fill='currentColor' id='hdd-network-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 00-2 2v1a2 2 0 002 2h5.5v3A1.5 1.5 0 006 11.5H.5a.5.5 0 000 1H6A1.5 1.5 0 007.5 14h1a1.5 1.5 0 001.5-1.5h5.5a.5.5 0 000-1H10A1.5 1.5 0 008.5 10V7H14a2 2 0 002-2V4a2 2 0 00-2-2H2zm.5 3a.5.5 0 100-1 .5.5 0 000 1zm2 0a.5.5 0 100-1 .5.5 0 000 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hdd-rack' fill='currentColor' id='hdd-rack' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 10H2a1 1 0 00-1 1v1a1 1 0 001 1h12a1 1 0 001-1v-1a1 1 0 00-1-1zM2 9a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2v-1a2 2 0 00-2-2H2z'/%3e%3cpath d='M5 11.5a.5.5 0 11-1 0 .5.5 0 011 0zm-2 0a.5.5 0 11-1 0 .5.5 0 011 0z'/%3e%3cpath fill-rule='evenodd' d='M14 3H2a1 1 0 00-1 1v1a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'/%3e%3cpath d='M5 4.5a.5.5 0 11-1 0 .5.5 0 011 0zm-2 0a.5.5 0 11-1 0 .5.5 0 011 0z'/%3e%3cpath fill-rule='evenodd' d='M3 9V7h1v2H3zm9 0V7h1v2h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hdd-rack-fill' fill='currentColor' id='hdd-rack-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 9a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2v-1a2 2 0 00-2-2H2zm.5 3a.5.5 0 100-1 .5.5 0 000 1zm2 0a.5.5 0 100-1 .5.5 0 000 1zM2 2a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm.5 3a.5.5 0 100-1 .5.5 0 000 1zm2 0a.5.5 0 100-1 .5.5 0 000 1zM3 9V7h1v2H3zm9 0V7h1v2h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hdd-stack' fill='currentColor' id='hdd-stack' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 10H2a1 1 0 00-1 1v1a1 1 0 001 1h12a1 1 0 001-1v-1a1 1 0 00-1-1zM2 9a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2v-1a2 2 0 00-2-2H2z'/%3e%3cpath d='M5 11.5a.5.5 0 11-1 0 .5.5 0 011 0zm-2 0a.5.5 0 11-1 0 .5.5 0 011 0z'/%3e%3cpath fill-rule='evenodd' d='M14 3H2a1 1 0 00-1 1v1a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'/%3e%3cpath d='M5 4.5a.5.5 0 11-1 0 .5.5 0 011 0zm-2 0a.5.5 0 11-1 0 .5.5 0 011 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hdd-stack-fill' fill='currentColor' id='hdd-stack-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 9a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2v-1a2 2 0 00-2-2H2zm.5 3a.5.5 0 100-1 .5.5 0 000 1zm2 0a.5.5 0 100-1 .5.5 0 000 1zM2 2a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm.5 3a.5.5 0 100-1 .5.5 0 000 1zm2 0a.5.5 0 100-1 .5.5 0 000 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-headphones' fill='currentColor' id='headphones' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 3a5 5 0 00-5 5v4.5H2V8a6 6 0 1112 0v4.5h-1V8a5 5 0 00-5-5z'/%3e%3cpath d='M11 10a1 1 0 011-1h2v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-3zm-6 0a1 1 0 00-1-1H2v4a1 1 0 001 1h1a1 1 0 001-1v-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-headset' fill='currentColor' id='headset' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1a5 5 0 00-5 5v4.5H2V6a6 6 0 1112 0v4.5h-1V6a5 5 0 00-5-5z'/%3e%3cpath d='M11 8a1 1 0 011-1h2v4a1 1 0 01-1 1h-1a1 1 0 01-1-1V8zM5 8a1 1 0 00-1-1H2v4a1 1 0 001 1h1a1 1 0 001-1V8z'/%3e%3cpath fill-rule='evenodd' d='M13.5 8.5a.5.5 0 01.5.5v3a2.5 2.5 0 01-2.5 2.5H8a.5.5 0 010-1h3.5A1.5 1.5 0 0013 12V9a.5.5 0 01.5-.5z'/%3e%3cpath d='M6.5 14a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-heart' fill='currentColor' id='heart' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-heart-fill' fill='currentColor' id='heart-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-heart-half' fill='currentColor' id='heart-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1.314C3.562-3.248-7.534 4.735 8 15V1.314z'/%3e%3cpath fill-rule='evenodd' d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-heptagon' fill='currentColor' id='heptagon' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.779.052a.5.5 0 01.442 0l6.015 2.97a.5.5 0 01.267.34l1.485 6.676a.5.5 0 01-.093.415l-4.162 5.354a.5.5 0 01-.395.193H4.662a.5.5 0 01-.395-.193L.105 10.453a.5.5 0 01-.093-.415l1.485-6.676a.5.5 0 01.267-.34L7.779.053zM2.422 3.813l-1.383 6.212L4.907 15h6.186l3.868-4.975-1.383-6.212L8 1.058 2.422 3.813z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-heptagon-fill' fill='currentColor' id='heptagon-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.779.052a.5.5 0 01.442 0l6.015 2.97a.5.5 0 01.267.34l1.485 6.676a.5.5 0 01-.093.415l-4.162 5.354a.5.5 0 01-.395.193H4.662a.5.5 0 01-.395-.193L.105 10.453a.5.5 0 01-.093-.415l1.485-6.676a.5.5 0 01.267-.34L7.779.053z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-heptagon-half' fill='currentColor' id='heptagon-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.779.052a.5.5 0 01.442 0l6.015 2.97a.5.5 0 01.267.34l1.485 6.676a.5.5 0 01-.093.415l-4.162 5.354a.5.5 0 01-.395.193H4.662a.5.5 0 01-.395-.193L.105 10.453a.5.5 0 01-.093-.415l1.485-6.676a.5.5 0 01.267-.34L7.779.053zM8 15h3.093l3.868-4.975-1.383-6.212L8 1.058V15z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hexagon' fill='currentColor' id='hexagon' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 4.577L8 1 2 4.577v6.846L8 15l6-3.577V4.577zM8.5.134a1 1 0 00-1 0l-6 3.577a1 1 0 00-.5.866v6.846a1 1 0 00.5.866l6 3.577a1 1 0 001 0l6-3.577a1 1 0 00.5-.866V4.577a1 1 0 00-.5-.866L8.5.134z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hexagon-fill' fill='currentColor' id='hexagon-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.5.134a1 1 0 00-1 0l-6 3.577a1 1 0 00-.5.866v6.846a1 1 0 00.5.866l6 3.577a1 1 0 001 0l6-3.577a1 1 0 00.5-.866V4.577a1 1 0 00-.5-.866L8.5.134z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hexagon-half' fill='currentColor' id='hexagon-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 4.577L8 1v14l6-3.577V4.577zM8.5.134a1 1 0 00-1 0l-6 3.577a1 1 0 00-.5.866v6.846a1 1 0 00.5.866l6 3.577a1 1 0 001 0l6-3.577a1 1 0 00.5-.866V4.577a1 1 0 00-.5-.866L8.5.134z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hourglass' fill='currentColor' id='hourglass' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 1.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-1v1a4.5 4.5 0 01-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0112.5 13v1h1a.5.5 0 010 1h-11a.5.5 0 110-1h1v-1a4.5 4.5 0 012.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 013.5 3V2h-1a.5.5 0 01-.5-.5zm2.5.5v1a3.5 3.5 0 001.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 004.5 13v1h7v-1a3.5 3.5 0 00-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0011.5 3V2h-7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hourglass-bottom' fill='currentColor' id='hourglass-bottom' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 1.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-1v1a4.5 4.5 0 01-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0112.5 13v1h1a.5.5 0 010 1h-11a.5.5 0 110-1h1v-1a4.5 4.5 0 012.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 013.5 3V2h-1a.5.5 0 01-.5-.5zm2.5.5v1a3.5 3.5 0 001.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0011.5 3V2h-7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hourglass-split' fill='currentColor' id='hourglass-split' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.5 15a.5.5 0 110-1h1v-1a4.5 4.5 0 012.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 013.5 3V2h-1a.5.5 0 010-1h11a.5.5 0 010 1h-1v1a4.5 4.5 0 01-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0112.5 13v1h1a.5.5 0 010 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 004.5 13s.866-1.299 3-1.48V8.35zm1 0c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0111.5 13s-.866-1.299-3-1.48V8.35z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hourglass-top' fill='currentColor' id='hourglass-top' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 14.5a.5.5 0 00.5.5h11a.5.5 0 100-1h-1v-1a4.5 4.5 0 00-2.557-4.06c-.29-.139-.443-.377-.443-.59v-.7c0-.213.154-.451.443-.59A4.5 4.5 0 0012.5 3V2h1a.5.5 0 000-1h-11a.5.5 0 000 1h1v1a4.5 4.5 0 002.557 4.06c.29.139.443.377.443.59v.7c0 .213-.154.451-.443.59A4.5 4.5 0 003.5 13v1h-1a.5.5 0 00-.5.5zm2.5-.5v-1a3.5 3.5 0 011.989-3.158c.533-.256 1.011-.79 1.011-1.491v-.702s.18.101.5.101.5-.1.5-.1v.7c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0111.5 13v1h-7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-house' fill='currentColor' id='house' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z'/%3e%3cpath fill-rule='evenodd' d='M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-house-door' fill='currentColor' id='house-door' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.646 1.146a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5H9.5a.5.5 0 01-.5-.5v-4H7v4a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v4h3.5V7.707L8 2.207l-5.5 5.5z'/%3e%3cpath fill-rule='evenodd' d='M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-house-door-fill' fill='currentColor' id='house-door-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.5 10.995V14.5a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z'/%3e%3cpath fill-rule='evenodd' d='M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-house-fill' fill='currentColor' id='house-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 3.293l6 6V13.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z'/%3e%3cpath fill-rule='evenodd' d='M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-hr' fill='currentColor' id='hr' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a.5.5 0 01.5-.5h15a.5.5 0 010 1H.5A.5.5 0 010 8z'/%3e%3cpath d='M4 3h8a1 1 0 011 1v2.5h1V4a2 2 0 00-2-2H4a2 2 0 00-2 2v2.5h1V4a1 1 0 011-1zM3 9.5H2V12a2 2 0 002 2h8a2 2 0 002-2V9.5h-1V12a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 17 16' class='bi bi-image' fill='currentColor' id='image' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.002 2h-12a1 1 0 00-1 1v9l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71a.5.5 0 01.577-.094L15.002 9.5V3a1 1 0 00-1-1zm-12-1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2h-12zm4 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 17 16' class='bi bi-image-alt' fill='currentColor' id='image-alt' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.648 6.646a.5.5 0 01.577-.093l4.777 3.947V15a1 1 0 01-1 1h-14a1 1 0 01-1-1v-2l3.646-4.354a.5.5 0 01.63-.062l2.66 2.773 3.71-4.71z'/%3e%3cpath fill-rule='evenodd' d='M4.5 5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 17 16' class='bi bi-image-fill' fill='currentColor' id='image-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M.002 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2h-12a2 2 0 01-2-2V3zm1 9l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71a.5.5 0 01.577-.094L15.002 9.5V13a1 1 0 01-1 1h-12a1 1 0 01-1-1v-1zm5-6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-images' fill='currentColor' id='images' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12.002 4h-10a1 1 0 00-1 1v8l2.646-2.354a.5.5 0 01.63-.062l2.66 1.773 3.71-3.71a.5.5 0 01.577-.094l1.777 1.947V5a1 1 0 00-1-1zm-10-1a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2h-10zm4 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3cpath fill-rule='evenodd' d='M4 2h10a1 1 0 011 1v8a1 1 0 01-1 1v1a2 2 0 002-2V3a2 2 0 00-2-2H4a2 2 0 00-2 2h1a1 1 0 011-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-inbox' fill='currentColor' id='inbox' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.98 4a.5.5 0 00-.39.188L1.54 8H6a.5.5 0 01.5.5 1.5 1.5 0 103 0A.5.5 0 0110 8h4.46l-3.05-3.812A.5.5 0 0011.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 01-4.9 0H1.066l.32 2.562a.5.5 0 00.497.438h12.234a.5.5 0 00.496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 014.981 3h6.038a1.5 1.5 0 011.172.563l3.7 4.625a.5.5 0 01.105.374l-.39 3.124A1.5 1.5 0 0114.117 13H1.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.106-.374l3.7-4.625z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-inbox-fill' fill='currentColor' id='inbox-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.98 4a.5.5 0 00-.39.188L1.54 8H6a.5.5 0 01.5.5 1.5 1.5 0 103 0A.5.5 0 0110 8h4.46l-3.05-3.812A.5.5 0 0011.02 4H4.98zm-1.17-.437A1.5 1.5 0 014.98 3h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 01.106.374l-.39 3.124A1.5 1.5 0 0114.117 13H1.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.106-.374l3.7-4.625z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-inboxes' fill='currentColor' id='inboxes' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.98 1a.5.5 0 00-.39.188L1.54 5H6a.5.5 0 01.5.5 1.5 1.5 0 003 0A.5.5 0 0110 5h4.46l-3.05-3.812A.5.5 0 0011.02 1H4.98zm9.954 5H10.45a2.5 2.5 0 01-4.9 0H1.066l.32 2.562A.5.5 0 001.884 9h12.234a.5.5 0 00.496-.438L14.933 6zM3.809.563A1.5 1.5 0 014.981 0h6.038a1.5 1.5 0 011.172.563l3.7 4.625a.5.5 0 01.105.374l-.39 3.124A1.5 1.5 0 0114.117 10H1.883A1.5 1.5 0 01.394 8.686l-.39-3.124a.5.5 0 01.106-.374L3.81.563zM.125 11.17A.5.5 0 01.5 11H6a.5.5 0 01.5.5 1.5 1.5 0 003 0 .5.5 0 01.5-.5h5.5a.5.5 0 01.496.562l-.39 3.124A1.5 1.5 0 0114.117 16H1.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393zm.941.83l.32 2.562a.5.5 0 00.497.438h12.234a.5.5 0 00.496-.438l.32-2.562H10.45a2.5 2.5 0 01-4.9 0H1.066z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-inboxes-fill' fill='currentColor' id='inboxes-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.98 1a.5.5 0 00-.39.188L1.54 5H6a.5.5 0 01.5.5 1.5 1.5 0 003 0A.5.5 0 0110 5h4.46l-3.05-3.812A.5.5 0 0011.02 1H4.98zM3.81.563A1.5 1.5 0 014.98 0h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 01.106.374l-.39 3.124A1.5 1.5 0 0114.117 10H1.883A1.5 1.5 0 01.394 8.686l-.39-3.124a.5.5 0 01.106-.374L3.81.563zM.125 11.17A.5.5 0 01.5 11H6a.5.5 0 01.5.5 1.5 1.5 0 003 0 .5.5 0 01.5-.5h5.5a.5.5 0 01.496.562l-.39 3.124A1.5 1.5 0 0114.117 16H1.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-info' fill='currentColor' id='info' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z'/%3e%3ccircle cx='8' cy='4.5' r='1'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-info-circle' fill='currentColor' id='info-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath d='M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z'/%3e%3ccircle cx='8' cy='4.5' r='1'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-info-circle-fill' fill='currentColor' id='info-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-info-square' fill='currentColor' id='info-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath d='M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z'/%3e%3ccircle cx='8' cy='4.5' r='1'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-info-square-fill' fill='currentColor' id='info-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm8.93 4.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-input-cursor' fill='currentColor' id='input-cursor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10 5h4a1 1 0 011 1v4a1 1 0 01-1 1h-4v1h4a2 2 0 002-2V6a2 2 0 00-2-2h-4v1zM6 5V4H2a2 2 0 00-2 2v4a2 2 0 002 2h4v-1H2a1 1 0 01-1-1V6a1 1 0 011-1h4z'/%3e%3cpath fill-rule='evenodd' d='M8 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13A.5.5 0 018 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-input-cursor-text' fill='currentColor' id='input-cursor-text' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5 2a.5.5 0 01.5-.5c.862 0 1.573.287 2.06.566.174.099.321.198.44.286.119-.088.266-.187.44-.286A4.165 4.165 0 0110.5 1.5a.5.5 0 010 1c-.638 0-1.177.213-1.564.434a3.49 3.49 0 00-.436.294V7.5H9a.5.5 0 010 1h-.5v4.272c.1.08.248.187.436.294.387.221.926.434 1.564.434a.5.5 0 010 1 4.165 4.165 0 01-2.06-.566A4.561 4.561 0 018 13.65a4.561 4.561 0 01-.44.285 4.165 4.165 0 01-2.06.566.5.5 0 010-1c.638 0 1.177-.213 1.564-.434.188-.107.335-.214.436-.294V8.5H7a.5.5 0 010-1h.5V3.228a3.49 3.49 0 00-.436-.294A3.166 3.166 0 005.5 2.5.5.5 0 015 2z'/%3e%3cpath d='M10 5h4a1 1 0 011 1v4a1 1 0 01-1 1h-4v1h4a2 2 0 002-2V6a2 2 0 00-2-2h-4v1zM6 5V4H2a2 2 0 00-2 2v4a2 2 0 002 2h4v-1H2a1 1 0 01-1-1V6a1 1 0 011-1h4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-intersect' fill='currentColor' id='intersect' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h8a2 2 0 012 2v2h2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-2H2a2 2 0 01-2-2V2zm5 10v2a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1h-2v5a2 2 0 01-2 2H5zm6-8H6a2 2 0 00-2 2v5H2a1 1 0 01-1-1V2a1 1 0 011-1h8a1 1 0 011 1v2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-journal' fill='currentColor' id='journal' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z'/%3e%3cpath d='M1 5v-.5a.5.5 0 011 0V5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V8h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-journal-album' fill='currentColor' id='journal-album' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z'/%3e%3cpath d='M1 5v-.5a.5.5 0 011 0V5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V8h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm4-6.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5z'/%3e%3cpath fill-rule='evenodd' d='M6 11.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-journal-arrow-down' fill='currentColor' id='journal-arrow-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z'/%3e%3cpath d='M1 5v-.5a.5.5 0 011 0V5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V8h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1z'/%3e%3cpath fill-rule='evenodd' d='M8 5a.5.5 0 01.5.5v3.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L7.5 9.293V5.5A.5.5 0 018 5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-journal-arrow-up' fill='currentColor' id='journal-arrow-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z'/%3e%3cpath d='M1 5v-.5a.5.5 0 011 0V5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V8h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1z'/%3e%3cpath fill-rule='evenodd' d='M8 11a.5.5 0 00.5-.5V6.707l1.146 1.147a.5.5 0 00.708-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L7.5 6.707V10.5a.5.5 0 00.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-journal-check' fill='currentColor' id='journal-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z'/%3e%3cpath d='M1 5v-.5a.5.5 0 011 0V5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V8h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1z'/%3e%3cpath fill-rule='evenodd' d='M10.854 6.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7.5 8.793l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-journal-code' fill='currentColor' id='journal-code' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z'/%3e%3cpath d='M1 5v-.5a.5.5 0 011 0V5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V8h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1z'/%3e%3cpath fill-rule='evenodd' d='M8.646 5.646a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L10.293 8 8.646 6.354a.5.5 0 010-.708zm-1.292 0a.5.5 0 00-.708 0l-2 2a.5.5 0 000 .708l2 2a.5.5 0 00.708-.708L5.707 8l1.647-1.646a.5.5 0 000-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-journal-medical' fill='currentColor' id='journal-medical' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z'/%3e%3cpath d='M1 5v-.5a.5.5 0 011 0V5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V8h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1z'/%3e%3cpath fill-rule='evenodd' d='M8 4a.5.5 0 01.5.5v.634l.549-.317a.5.5 0 11.5.866L9 6l.549.317a.5.5 0 11-.5.866L8.5 6.866V7.5a.5.5 0 01-1 0v-.634l-.549.317a.5.5 0 11-.5-.866L7 6l-.549-.317a.5.5 0 01.5-.866l.549.317V4.5A.5.5 0 018 4zM5 9.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-journal-minus' fill='currentColor' id='journal-minus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z'/%3e%3cpath d='M1 5v-.5a.5.5 0 011 0V5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V8h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1z'/%3e%3cpath fill-rule='evenodd' d='M5.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-journal-plus' fill='currentColor' id='journal-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z'/%3e%3cpath d='M1 5v-.5a.5.5 0 011 0V5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V8h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1z'/%3e%3cpath fill-rule='evenodd' d='M8 5.5a.5.5 0 01.5.5v1.5H10a.5.5 0 010 1H8.5V10a.5.5 0 01-1 0V8.5H6a.5.5 0 010-1h1.5V6a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-journal-richtext' fill='currentColor' id='journal-richtext' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z'/%3e%3cpath d='M1 5v-.5a.5.5 0 011 0V5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V8h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1z'/%3e%3cpath fill-rule='evenodd' d='M5 11.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm1.639-4.208l1.33.886 1.854-1.855a.25.25 0 01.289-.047L11 4.75V7a.5.5 0 01-.5.5h-5A.5.5 0 015 7v-.5s1.54-1.274 1.639-1.208zM6.75 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-journal-text' fill='currentColor' id='journal-text' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z'/%3e%3cpath d='M1 5v-.5a.5.5 0 011 0V5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V8h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1z'/%3e%3cpath fill-rule='evenodd' d='M5 10.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0-2a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-journal-x' fill='currentColor' id='journal-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z'/%3e%3cpath d='M1 5v-.5a.5.5 0 011 0V5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V8h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1z'/%3e%3cpath fill-rule='evenodd' d='M6.146 6.146a.5.5 0 01.708 0L8 7.293l1.146-1.147a.5.5 0 11.708.708L8.707 8l1.147 1.146a.5.5 0 01-.708.708L8 8.707 6.854 9.854a.5.5 0 01-.708-.708L7.293 8 6.146 6.854a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-journals' fill='currentColor' id='journals' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 2h8a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2h1a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H3a1 1 0 00-1 1H1a2 2 0 012-2z'/%3e%3cpath d='M5 0h8a2 2 0 012 2v10a2 2 0 01-2 2v-1a1 1 0 001-1V2a1 1 0 00-1-1H5a1 1 0 00-1 1H3a2 2 0 012-2zM1 6v-.5a.5.5 0 011 0V6h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0V9h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1zm0 3v-.5a.5.5 0 011 0v.5h.5a.5.5 0 010 1h-2a.5.5 0 010-1H1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-joystick' fill='currentColor' id='joystick' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.106 15.553L.553 12.276A1 1 0 010 11.382V9.471a1 1 0 01.606-.89L6 6.269v1.088L1 9.5l5.658 2.83a3 3 0 002.684 0L15 9.5l-5-2.143V6.27l5.394 2.312a1 1 0 01.606.89v1.911a1 1 0 01-.553.894l-6.553 3.277a2 2 0 01-1.788 0z'/%3e%3cpath fill-rule='evenodd' d='M7.5 9.5v-6h1v6h-1z'/%3e%3cpath d='M10 9.75c0 .414-.895.75-2 .75s-2-.336-2-.75S6.895 9 8 9s2 .336 2 .75zM10 2a2 2 0 11-4 0 2 2 0 014 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-justify' fill='currentColor' id='justify' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 12.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-justify-left' fill='currentColor' id='justify-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-justify-right' fill='currentColor' id='justify-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-4-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-kanban' fill='currentColor' id='kanban' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13.5 1h-11a1 1 0 00-1 1v12a1 1 0 001 1h11a1 1 0 001-1V2a1 1 0 00-1-1zm-11-1a2 2 0 00-2 2v12a2 2 0 002 2h11a2 2 0 002-2V2a2 2 0 00-2-2h-11z'/%3e%3cpath d='M6.5 3a1 1 0 011-1h1a1 1 0 011 1v3a1 1 0 01-1 1h-1a1 1 0 01-1-1V3zm-4 0a1 1 0 011-1h1a1 1 0 011 1v7a1 1 0 01-1 1h-1a1 1 0 01-1-1V3zm8 0a1 1 0 011-1h1a1 1 0 011 1v10a1 1 0 01-1 1h-1a1 1 0 01-1-1V3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-kanban-fill' fill='currentColor' id='kanban-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.5 0a2 2 0 00-2 2v12a2 2 0 002 2h11a2 2 0 002-2V2a2 2 0 00-2-2h-11zm5 2a1 1 0 00-1 1v3a1 1 0 001 1h1a1 1 0 001-1V3a1 1 0 00-1-1h-1zm-5 1a1 1 0 011-1h1a1 1 0 011 1v7a1 1 0 01-1 1h-1a1 1 0 01-1-1V3zm9-1a1 1 0 00-1 1v10a1 1 0 001 1h1a1 1 0 001-1V3a1 1 0 00-1-1h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-key' fill='currentColor' id='key' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a4 4 0 017.465-2H14a.5.5 0 01.354.146l1.5 1.5a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0L13 9.207l-.646.647a.5.5 0 01-.708 0L11 9.207l-.646.647a.5.5 0 01-.708 0L9 9.207l-.646.647A.5.5 0 018 10h-.535A4 4 0 010 8zm4-3a3 3 0 102.712 4.285A.5.5 0 017.163 9h.63l.853-.854a.5.5 0 01.708 0l.646.647.646-.647a.5.5 0 01.708 0l.646.647.646-.647a.5.5 0 01.708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 01-.451-.285A3 3 0 004 5z'/%3e%3cpath d='M4 8a1 1 0 11-2 0 1 1 0 012 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-key-fill' fill='currentColor' id='key-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 11.5a3.5 3.5 0 113.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 01-3.163 2zM2.5 9a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-keyboard' fill='currentColor' id='keyboard' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 5H2a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1zM2 4a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H2z'/%3e%3cpath d='M13 10.25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5zm0-2a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5zm-5 0A.25.25 0 018.25 8h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5A.25.25 0 018 8.75v-.5zm2 0a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25v-.5zm1 2a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5zm-5-2A.25.25 0 016.25 8h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5A.25.25 0 016 8.75v-.5zm-2 0A.25.25 0 014.25 8h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5A.25.25 0 014 8.75v-.5zm-2 0A.25.25 0 012.25 8h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5A.25.25 0 012 8.75v-.5zm11-2a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5zm-2 0a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5zm-2 0A.25.25 0 019.25 6h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5A.25.25 0 019 6.75v-.5zm-2 0A.25.25 0 017.25 6h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5A.25.25 0 017 6.75v-.5zm-2 0A.25.25 0 015.25 6h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5A.25.25 0 015 6.75v-.5zm-3 0A.25.25 0 012.25 6h1.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-1.5A.25.25 0 012 6.75v-.5zm0 4a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5zm2 0a.25.25 0 01.25-.25h5.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-5.5a.25.25 0 01-.25-.25v-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-keyboard-fill' fill='currentColor' id='keyboard-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 6a2 2 0 012-2h12a2 2 0 012 2v5a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm13 .25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5zM2.25 8a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 003 8.75v-.5A.25.25 0 002.75 8h-.5zM4 8.25A.25.25 0 014.25 8h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5A.25.25 0 014 8.75v-.5zM6.25 8a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 007 8.75v-.5A.25.25 0 006.75 8h-.5zM8 8.25A.25.25 0 018.25 8h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5A.25.25 0 018 8.75v-.5zM13.25 8a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 00.25-.25v-.5a.25.25 0 00-.25-.25h-.5zm0 2a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 00.25-.25v-.5a.25.25 0 00-.25-.25h-.5zm-3-2a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25v-.5a.25.25 0 00-.25-.25h-1.5zm.75 2.25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5zM11.25 6a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 00.25-.25v-.5a.25.25 0 00-.25-.25h-.5zM9 6.25A.25.25 0 019.25 6h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5A.25.25 0 019 6.75v-.5zM7.25 6a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 008 6.75v-.5A.25.25 0 007.75 6h-.5zM5 6.25A.25.25 0 015.25 6h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5A.25.25 0 015 6.75v-.5zM2.25 6a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h1.5A.25.25 0 004 6.75v-.5A.25.25 0 003.75 6h-1.5zM2 10.25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5zM4.25 10a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h5.5a.25.25 0 00.25-.25v-.5a.25.25 0 00-.25-.25h-5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-ladder' fill='currentColor' id='ladder' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.5 1a.5.5 0 01.5.5V2h6v-.5a.5.5 0 011 0v14a.5.5 0 01-1 0V15H5v.5a.5.5 0 01-1 0v-14a.5.5 0 01.5-.5zM5 14h6v-2H5v2zm0-3h6V9H5v2zm0-3h6V6H5v2zm0-3h6V3H5v2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-lamp' fill='currentColor' id='lamp' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13 3H3v4h10V3zM3 2a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H3zm4.5-1l.276-.553a.25.25 0 01.448 0L8.5 1h-1zm-.012 9c-.337.646-.677 1.33-.95 1.949-.176.396-.318.75-.413 1.042a3.904 3.904 0 00-.102.36c-.01.047-.016.083-.02.11L6 13.5c0 .665.717 1.5 2 1.5s2-.835 2-1.5c0 0 0-.013-.004-.039a1.347 1.347 0 00-.02-.11 3.696 3.696 0 00-.1-.36 11.747 11.747 0 00-.413-1.042A34.827 34.827 0 008.513 10H7.487zm1.627-1h-2.23C6.032 10.595 5 12.69 5 13.5 5 14.88 6.343 16 8 16s3-1.12 3-2.5c0-.81-1.032-2.905-1.885-4.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-lamp-fill' fill='currentColor' id='lamp-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2 3a1 1 0 011-1h10a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1V3z'/%3e%3cpath fill-rule='evenodd' d='M7.5 1l.276-.553a.25.25 0 01.448 0L8.5 1h-1zm-.615 8h2.23C9.968 10.595 11 12.69 11 13.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5c0-.81 1.032-2.905 1.885-4.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-laptop' fill='currentColor' id='laptop' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13.5 3h-11a.5.5 0 00-.5.5V11h12V3.5a.5.5 0 00-.5-.5zm-11-1A1.5 1.5 0 001 3.5V12h14V3.5A1.5 1.5 0 0013.5 2h-11z'/%3e%3cpath d='M0 12h16v.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5V12z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-laptop-fill' fill='currentColor' id='laptop-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.5 2A1.5 1.5 0 001 3.5V12h14V3.5A1.5 1.5 0 0013.5 2h-11z'/%3e%3cpath d='M0 12h16v.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5V12z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layers' fill='currentColor' id='layers' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.188 8L.264 9.559a.5.5 0 000 .882l7.5 4a.5.5 0 00.47 0l7.5-4a.5.5 0 000-.882L12.813 8l-1.063.567L14.438 10 8 13.433 1.562 10 4.25 8.567 3.187 8z'/%3e%3cpath fill-rule='evenodd' d='M7.765 1.559a.5.5 0 01.47 0l7.5 4a.5.5 0 010 .882l-7.5 4a.5.5 0 01-.47 0l-7.5-4a.5.5 0 010-.882l7.5-4zM1.563 6L8 9.433 14.438 6 8 2.567 1.562 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layers-fill' fill='currentColor' id='layers-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.765 1.559a.5.5 0 01.47 0l7.5 4a.5.5 0 010 .882l-7.5 4a.5.5 0 01-.47 0l-7.5-4a.5.5 0 010-.882l7.5-4z'/%3e%3cpath fill-rule='evenodd' d='M2.125 8.567l-1.86.992a.5.5 0 000 .882l7.5 4a.5.5 0 00.47 0l7.5-4a.5.5 0 000-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 01-1.41 0l-5.17-2.756z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layers-half' fill='currentColor' id='layers-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.188 8L.264 9.559a.5.5 0 000 .882l7.5 4a.5.5 0 00.47 0l7.5-4a.5.5 0 000-.882L12.813 8l-4.578 2.441a.5.5 0 01-.47 0L3.188 8z'/%3e%3cpath fill-rule='evenodd' d='M7.765 1.559a.5.5 0 01.47 0l7.5 4a.5.5 0 010 .882l-7.5 4a.5.5 0 01-.47 0l-7.5-4a.5.5 0 010-.882l7.5-4zM1.563 6L8 9.433 14.438 6 8 2.567 1.562 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layout-sidebar' fill='currentColor' id='layout-sidebar' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M4 14V2h1v12H4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layout-sidebar-inset' fill='currentColor' id='layout-sidebar-inset' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2z'/%3e%3cpath d='M3 4a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layout-sidebar-inset-reverse' fill='currentColor' id='layout-sidebar-inset-reverse' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2h12a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1zm12-1a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h12z'/%3e%3cpath d='M13 4a1 1 0 00-1-1h-2a1 1 0 00-1 1v8a1 1 0 001 1h2a1 1 0 001-1V4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layout-sidebar-reverse' fill='currentColor' id='layout-sidebar-reverse' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M11 14V2h1v12h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layout-split' fill='currentColor' id='layout-split' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M7.5 14V2h1v12h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layout-text-sidebar' fill='currentColor' id='layout-text-sidebar' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M11 15V1h1v14h-1zM3 3.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layout-text-sidebar-reverse' fill='currentColor' id='layout-text-sidebar-reverse' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 1h12a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm12-1a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h12z'/%3e%3cpath fill-rule='evenodd' d='M5 15V1H4v14h1zm8-11.5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layout-text-window' fill='currentColor' id='layout-text-window' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M11 15V4h1v11h-1zm4.5-11H.5V3h15v1zM3 6.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layout-text-window-reverse' fill='currentColor' id='layout-text-window-reverse' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 1h12a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm12-1a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h12z'/%3e%3cpath fill-rule='evenodd' d='M5 15V4H4v11h1zM.5 4h15V3H.5v1zM13 6.5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5zm0 3a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5a.5.5 0 00.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layout-three-columns' fill='currentColor' id='layout-three-columns' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2.5A1.5 1.5 0 011.5 1h13A1.5 1.5 0 0116 2.5v11a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 13.5v-11zM1.5 2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-13z'/%3e%3cpath fill-rule='evenodd' d='M5 15V1h1v14H5zm5 0V1h1v14h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-layout-wtf' fill='currentColor' id='layout-wtf' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5 1H1v8h4V1zM1 0a1 1 0 00-1 1v8a1 1 0 001 1h4a1 1 0 001-1V1a1 1 0 00-1-1H1zm13 2H9v5h5V2zM9 1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V2a1 1 0 00-1-1H9zM5 13H3v2h2v-2zm-2-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H3zm12-1H9v2h6v-2zm-6-1a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1v-2a1 1 0 00-1-1H9z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-life-preserver' fill='currentColor' id='life-preserver' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.43 10.772l-2.788-1.115a4.015 4.015 0 01-1.985 1.985l1.115 2.788a7.025 7.025 0 003.658-3.658zM5.228 14.43l1.115-2.788a4.015 4.015 0 01-1.985-1.985L1.57 10.772a7.025 7.025 0 003.658 3.658zm9.202-9.202a7.025 7.025 0 00-3.658-3.658L9.657 4.358a4.015 4.015 0 011.985 1.985l2.788-1.115zm-8.087-.87L5.228 1.57A7.025 7.025 0 001.57 5.228l2.788 1.115a4.015 4.015 0 011.985-1.985zM8 16A8 8 0 108 0a8 8 0 000 16zm0-5a3 3 0 100-6 3 3 0 000 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-lightning' fill='currentColor' id='lightning' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09zM4.157 8.5H7a.5.5 0 01.478.647L6.11 13.59l5.732-6.09H9a.5.5 0 01-.478-.647L9.89 2.41 4.157 8.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-lightning-fill' fill='currentColor' id='lightning-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-link' fill='currentColor' id='link' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6.354 5.5H4a3 3 0 000 6h3a3 3 0 002.83-4H9c-.086 0-.17.01-.25.031A2 2 0 017 10.5H4a2 2 0 110-4h1.535c.218-.376.495-.714.82-1z'/%3e%3cpath d='M9 5.5a3 3 0 00-2.83 4h1.098A2 2 0 019 6.5h3a2 2 0 110 4h-1.535a4.02 4.02 0 01-.82 1H12a3 3 0 100-6H9z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-link-45deg' fill='currentColor' id='link-45deg' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4.715 6.542L3.343 7.914a3 3 0 104.243 4.243l1.828-1.829A3 3 0 008.586 5.5L8 6.086a1.001 1.001 0 00-.154.199 2 2 0 01.861 3.337L6.88 11.45a2 2 0 11-2.83-2.83l.793-.792a4.018 4.018 0 01-.128-1.287z'/%3e%3cpath d='M6.586 4.672A3 3 0 007.414 9.5l.775-.776a2 2 0 01-.896-3.346L9.12 3.55a2 2 0 012.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 00-4.243-4.243L6.586 4.672z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-list' fill='currentColor' id='list' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-list-check' fill='currentColor' id='list-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3.854 2.146a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L2 3.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 11.708-.708L2 7.293l1.146-1.147a.5.5 0 01.708 0zm0 4a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0l-.5-.5a.5.5 0 01.708-.708l.146.147 1.146-1.147a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-list-nested' fill='currentColor' id='list-nested' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.5 11.5A.5.5 0 015 11h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm-2-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm-2-4A.5.5 0 011 3h10a.5.5 0 010 1H1a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-list-ol' fill='currentColor' id='list-ol' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z'/%3e%3cpath d='M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 01-.492.594v.033a.615.615 0 01.569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 00-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-list-stars' fill='currentColor' id='list-stars' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z'/%3e%3cpath d='M2.242 2.194a.27.27 0 01.516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 00-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 00-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 00-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 00.259-.194l.162-.53zm0 4a.27.27 0 01.516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 00-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 00-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 00-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 00.259-.194l.162-.53zm0 4a.27.27 0 01.516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 00-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 00-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 00-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 00.259-.194l.162-.53z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-list-task' fill='currentColor' id='list-task' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5H2zM3 3H2v1h1V3z'/%3e%3cpath d='M5 3.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM5.5 7a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 4a.5.5 0 000 1h9a.5.5 0 000-1h-9z'/%3e%3cpath fill-rule='evenodd' d='M1.5 7a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H2zm1 .5H2v1h1v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-list-ul' fill='currentColor' id='list-ul' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-lock' fill='currentColor' id='lock' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.5 8h-7a1 1 0 00-1 1v5a1 1 0 001 1h7a1 1 0 001-1V9a1 1 0 00-1-1zm-7-1a2 2 0 00-2 2v5a2 2 0 002 2h7a2 2 0 002-2V9a2 2 0 00-2-2h-7zm0-3a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-lock-fill' fill='currentColor' id='lock-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.5 9a2 2 0 012-2h7a2 2 0 012 2v5a2 2 0 01-2 2h-7a2 2 0 01-2-2V9z'/%3e%3cpath fill-rule='evenodd' d='M4.5 4a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-mailbox' fill='currentColor' id='mailbox' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 4a3 3 0 00-3 3v6h6V7a3 3 0 00-3-3zm0-1h8a4 4 0 014 4v6a1 1 0 01-1 1H1a1 1 0 01-1-1V7a4 4 0 014-4zm2.646 1A3.99 3.99 0 018 7v6h7V7a3 3 0 00-3-3H6.646z'/%3e%3cpath fill-rule='evenodd' d='M11.793 8.5H9v-1h5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.354-.146l-.853-.854z'/%3e%3cpath d='M5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 012 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-mailbox2' fill='currentColor' id='mailbox2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 3H4a4 4 0 00-4 4v6a1 1 0 001 1h14a1 1 0 001-1V7a4 4 0 00-4-4zM8 7a3.99 3.99 0 00-1.354-3H12a3 3 0 013 3v6H8V7zm1 1.5h2.793l.853.854A.5.5 0 0013 9.5h1a.5.5 0 00.5-.5V8a.5.5 0 00-.5-.5H9v1zM4.585 7.157C4.836 7.264 5 7.334 5 7a1 1 0 00-2 0c0 .334.164.264.415.157C3.58 7.087 3.782 7 4 7c.218 0 .42.086.585.157z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-map' fill='currentColor' id='map' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15.817.113A.5.5 0 0116 .5v14a.5.5 0 01-.402.49l-5 1a.502.502 0 01-.196 0L5.5 15.01l-4.902.98A.5.5 0 010 15.5v-14a.5.5 0 01.402-.49l5-1a.5.5 0 01.196 0L10.5.99l4.902-.98a.5.5 0 01.415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98l4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-map-fill' fill='currentColor' id='map-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 .5a.5.5 0 00-.598-.49L10.5.99 5.598.01a.5.5 0 00-.196 0l-5 1A.5.5 0 000 1.5v14a.5.5 0 00.598.49l4.902-.98 4.902.98a.502.502 0 00.196 0l5-1A.5.5 0 0016 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 00-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 00.196 0L11 1.91v12.98l-.5.1-.5-.1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-markdown' fill='currentColor' id='markdown' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M9.146 8.146a.5.5 0 01.708 0L11.5 9.793l1.646-1.647a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 010-.708z'/%3e%3cpath fill-rule='evenodd' d='M11.5 5a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5z'/%3e%3cpath d='M3.56 11V7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-markdown-fill' fill='currentColor' id='markdown-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm11.5 1a.5.5 0 01.5.5v3.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L11 9.293V5.5a.5.5 0 01.5-.5zM3.56 7.01V11H2.5V5.001h1.208l1.71 3.894h.04l1.709-3.894h1.2V11H7.294V7.01h-.057l-1.42 3.239h-.773l-1.428-3.24H3.56z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-menu-app' fill='currentColor' id='menu-app' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A1.5 1.5 0 011.5 0h2A1.5 1.5 0 015 1.5v2A1.5 1.5 0 013.5 5h-2A1.5 1.5 0 010 3.5v-2zM1.5 1a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2zM14 7H2a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1zM2 6a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M15 11H1v-1h14v1zM2 12.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-menu-app-fill' fill='currentColor' id='menu-app-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A1.5 1.5 0 011.5 0h2A1.5 1.5 0 015 1.5v2A1.5 1.5 0 013.5 5h-2A1.5 1.5 0 010 3.5v-2zM14 7H2a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1zM2 6a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M15 11H1v-1h14v1zM2 12.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-menu-button' fill='currentColor' id='menu-button' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A1.5 1.5 0 011.5 0h8A1.5 1.5 0 0111 1.5v2A1.5 1.5 0 019.5 5h-8A1.5 1.5 0 010 3.5v-2zM1.5 1a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-8zM14 7H2a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1zM2 6a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M15 11H1v-1h14v1zM2 12.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z'/%3e%3cpath d='M7.823 2.823l-.396-.396A.25.25 0 017.604 2h.792a.25.25 0 01.177.427l-.396.396a.25.25 0 01-.354 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-menu-button-fill' fill='currentColor' id='menu-button-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 7H2a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1zM2 6a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M15 11H1v-1h14v1zM2 12.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM1.5 0A1.5 1.5 0 000 1.5v2A1.5 1.5 0 001.5 5h8A1.5 1.5 0 0011 3.5v-2A1.5 1.5 0 009.5 0h-8zm5.927 2.427l.396.396a.25.25 0 00.354 0l.396-.396A.25.25 0 008.396 2h-.792a.25.25 0 00-.177.427z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-menu-button-wide' fill='currentColor' id='menu-button-wide' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A1.5 1.5 0 011.5 0h13A1.5 1.5 0 0116 1.5v2A1.5 1.5 0 0114.5 5h-13A1.5 1.5 0 010 3.5v-2zM1.5 1a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-13zM14 7H2a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1zM2 6a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M15 11H1v-1h14v1zM2 12.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0-10a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0 6a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z'/%3e%3cpath d='M12.823 2.823l-.396-.396A.25.25 0 0112.604 2h.792a.25.25 0 01.177.427l-.396.396a.25.25 0 01-.354 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-menu-button-wide-fill' fill='currentColor' id='menu-button-wide-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 7H2a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00-1-1zM2 6a2 2 0 00-2 2v5a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M15 11H1v-1h14v1zM2 12.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM1.5 0A1.5 1.5 0 000 1.5v2A1.5 1.5 0 001.5 5h13A1.5 1.5 0 0016 3.5v-2A1.5 1.5 0 0014.5 0h-13zm1 2a.5.5 0 000 1h3a.5.5 0 000-1h-3zm9.927.427l.396.396a.25.25 0 00.354 0l.396-.396A.25.25 0 0013.396 2h-.792a.25.25 0 00-.177.427z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-menu-down' fill='currentColor' id='menu-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15 13V4a1 1 0 00-1-1h-3.586A2 2 0 019 2.414l-1-1-1 1A2 2 0 015.586 3H2a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1zM2 2a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2h-3.586a1 1 0 01-.707-.293L8.354.354a.5.5 0 00-.708 0L6.293 1.707A1 1 0 015.586 2H2z'/%3e%3cpath fill-rule='evenodd' d='M15 11H1v-1h14v1zm0-4H1V6h14v1zM2 12.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h8a.5.5 0 010 1h-8a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-menu-up' fill='currentColor' id='menu-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15 3.207v9a1 1 0 01-1 1h-3.586A2 2 0 009 13.793l-1 1-1-1a2 2 0 00-1.414-.586H2a1 1 0 01-1-1v-9a1 1 0 011-1h12a1 1 0 011 1zm-13 11a2 2 0 01-2-2v-9a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2h-3.586a1 1 0 00-.707.293l-1.353 1.354a.5.5 0 01-.708 0L6.293 14.5a1 1 0 00-.707-.293H2z'/%3e%3cpath fill-rule='evenodd' d='M15 5.207H1v1h14v-1zm0 4H1v1h14v-1zm-13-5.5a.5.5 0 00.5.5h6a.5.5 0 100-1h-6a.5.5 0 00-.5.5zm0 4a.5.5 0 00.5.5h11a.5.5 0 000-1h-11a.5.5 0 00-.5.5zm0 4a.5.5 0 00.5.5h8a.5.5 0 000-1h-8a.5.5 0 00-.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-mic' fill='currentColor' id='mic' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 6.5A.5.5 0 014 7v1a4 4 0 008 0V7a.5.5 0 011 0v1a5 5 0 01-4.5 4.975V15h3a.5.5 0 010 1h-7a.5.5 0 010-1h3v-2.025A5 5 0 013 8V7a.5.5 0 01.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M10 8V3a2 2 0 10-4 0v5a2 2 0 104 0zM8 0a3 3 0 00-3 3v5a3 3 0 006 0V3a3 3 0 00-3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-mic-fill' fill='currentColor' id='mic-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5 3a3 3 0 016 0v5a3 3 0 01-6 0V3z'/%3e%3cpath fill-rule='evenodd' d='M3.5 6.5A.5.5 0 014 7v1a4 4 0 008 0V7a.5.5 0 011 0v1a5 5 0 01-4.5 4.975V15h3a.5.5 0 010 1h-7a.5.5 0 010-1h3v-2.025A5 5 0 013 8V7a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-mic-mute' fill='currentColor' id='mic-mute' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12.734 9.613A4.995 4.995 0 0013 8V7a.5.5 0 00-1 0v1c0 .274-.027.54-.08.799l.814.814zm-2.522 1.72A4 4 0 014 8V7a.5.5 0 00-1 0v1a5 5 0 004.5 4.975V15h-3a.5.5 0 000 1h7a.5.5 0 000-1h-3v-2.025a4.973 4.973 0 002.43-.923l-.718-.719zM11 7.88V3a3 3 0 00-5.842-.963l.845.845A2 2 0 0110 3v3.879l1 1zM8.738 9.86l.748.748A3 3 0 015 8V6.121l1 1V8a2 2 0 002.738 1.86zm4.908 3.494l-12-12 .708-.708 12 12-.708.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-mic-mute-fill' fill='currentColor' id='mic-mute-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12.734 9.613A4.995 4.995 0 0013 8V7a.5.5 0 00-1 0v1c0 .274-.027.54-.08.799l.814.814zm-2.522 1.72A4 4 0 014 8V7a.5.5 0 00-1 0v1a5 5 0 004.5 4.975V15h-3a.5.5 0 000 1h7a.5.5 0 000-1h-3v-2.025a4.973 4.973 0 002.43-.923l-.718-.719zM11 7.88V3a3 3 0 00-5.842-.963L11 7.879zM5 6.12l4.486 4.486A3 3 0 015 8V6.121zm8.646 7.234l-12-12 .708-.708 12 12-.708.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-minecart' fill='currentColor' id='minecart' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 15a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm8-1a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM.115 3.18A.5.5 0 01.5 3h15a.5.5 0 01.491.592l-1.5 8A.5.5 0 0114 12H2a.5.5 0 01-.491-.408l-1.5-8a.5.5 0 01.106-.411zm.987.82l1.313 7h11.17l1.313-7H1.102z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-minecart-loaded' fill='currentColor' id='minecart-loaded' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 15a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zm8-1a1 1 0 100-2 1 1 0 000 2zm0 1a2 2 0 100-4 2 2 0 000 4zM.115 3.18A.5.5 0 01.5 3h15a.5.5 0 01.491.592l-1.5 8A.5.5 0 0114 12H2a.5.5 0 01-.491-.408l-1.5-8a.5.5 0 01.106-.411zm.987.82l1.313 7h11.17l1.313-7H1.102z'/%3e%3cpath fill-rule='evenodd' d='M6 1a2.498 2.498 0 014 0c.818 0 1.545.394 2 1 .67 0 1.552.57 2 1h-2c-.314 0-.611-.15-.8-.4-.274-.365-.71-.6-1.2-.6-.314 0-.611-.15-.8-.4a1.497 1.497 0 00-2.4 0c-.189.25-.486.4-.8.4-.507 0-.955.251-1.228.638-.09.13-.194.25-.308.362H3c.13-.147.401-.432.562-.545a1.63 1.63 0 00.393-.393A2.498 2.498 0 016 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-moon' fill='currentColor' id='moon' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-mouse' fill='currentColor' id='mouse' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 3a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 3zm4 8V5a4 4 0 00-8 0v6a4 4 0 008 0zM8 0a5 5 0 00-5 5v6a5 5 0 0010 0V5a5 5 0 00-5-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-mouse2' fill='currentColor' id='mouse2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 5.188C3 2.341 5.22 0 8 0s5 2.342 5 5.188v5.625C13 13.658 10.78 16 8 16s-5-2.342-5-5.188V5.189zm4.5-4.155C5.541 1.289 4 3.035 4 5.188V5.5h3.5V1.033zm1 0V5.5H12v-.313c0-2.152-1.541-3.898-3.5-4.154zM12 6.5H4v4.313C4 13.145 5.81 15 8 15s4-1.855 4-4.188V6.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-mouse3' fill='currentColor' id='mouse3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.473.463C5.896.157 6.407 0 7 0c1.26 0 2.981.123 4.403.825.72.355 1.375.864 1.85 1.59.475.728.747 1.642.747 2.772v5.625C14 13.659 11.78 16 9 16H7c-2.78 0-5-2.342-5-5.188V8.236A2.5 2.5 0 013.382 6L4 5.691v-.503c0-1.31.124-2.569.543-3.517.213-.482.512-.906.93-1.208zM4.017 6.801l-.188.093A1.5 1.5 0 003 8.236v2.576C3 13.146 4.81 15 7 15h2c2.19 0 4-1.855 4-4.188V5.189c0-.964-.23-1.683-.585-2.226-.356-.546-.86-.947-1.454-1.24C9.754 1.127 8.226 1 7 1c-.407 0-.708.105-.941.274-.239.172-.44.435-.602.801C5.127 2.823 5 3.907 5 5.187v.844a16.734 16.734 0 00.008.448c.007.3.023.715.053 1.175.063.937.186 2.005.413 2.688a.5.5 0 11-.948.316c-.273-.817-.4-2-.462-2.937a27.75 27.75 0 01-.047-.92z'/%3e%3cpath fill-rule='evenodd' d='M9 .5a.5.5 0 01.5.5v5.099l4.108.913a.5.5 0 01-.216.976l-9-2a.5.5 0 11.216-.976l3.892.865V1A.5.5 0 019 .5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-music-note' fill='currentColor' id='music-note' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z'/%3e%3cpath fill-rule='evenodd' d='M9 3v10H8V3h1z'/%3e%3cpath d='M8 2.82a1 1 0 01.804-.98l3-.6A1 1 0 0113 2.22V4L8 5V2.82z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-music-note-beamed' fill='currentColor' id='music-note-beamed' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z'/%3e%3cpath fill-rule='evenodd' d='M14 11V2h1v9h-1zM6 3v10H5V3h1z'/%3e%3cpath d='M5 2.905a1 1 0 01.9-.995l8-.8a1 1 0 011.1.995V3L5 4V2.905z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-music-note-list' fill='currentColor' id='music-note-list' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z'/%3e%3cpath fill-rule='evenodd' d='M12 3v10h-1V3h1z'/%3e%3cpath d='M11 2.82a1 1 0 01.804-.98l3-.6A1 1 0 0116 2.22V4l-5 1V2.82z'/%3e%3cpath fill-rule='evenodd' d='M0 11.5a.5.5 0 01.5-.5H4a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zm0-4A.5.5 0 01.5 7H8a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zm0-4A.5.5 0 01.5 3H8a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-music-player' fill='currentColor' id='music-player' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1zM4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4z'/%3e%3cpath fill-rule='evenodd' d='M11 3H5v3h6V3zM5 2a1 1 0 00-1 1v3a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1H5zm3 11a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z'/%3e%3ccircle cx='8' cy='11' r='1'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-music-player-fill' fill='currentColor' id='music-player-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2 1a1 1 0 011-1h6a1 1 0 011 1v2.5a1 1 0 01-1 1H5a1 1 0 01-1-1V3zm7 8a3 3 0 11-6 0 3 3 0 016 0z'/%3e%3ccircle cx='8' cy='11' r='1'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-newspaper' fill='currentColor' id='newspaper' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2.5A1.5 1.5 0 011.5 1h11A1.5 1.5 0 0114 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 00.5-.5v-9a.5.5 0 011 0v9a1.5 1.5 0 01-1.5 1.5H1.497A1.497 1.497 0 010 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v11c0 .278.223.5.497.5H12z'/%3e%3cpath d='M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-node-minus' fill='currentColor' id='node-minus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11 4a4 4 0 100 8 4 4 0 000-8zM6.025 7.5a5 5 0 110 1H4A1.5 1.5 0 012.5 10h-1A1.5 1.5 0 010 8.5v-1A1.5 1.5 0 011.5 6h1A1.5 1.5 0 014 7.5h2.025zM1.5 7a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM8 8a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5A.5.5 0 018 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-node-minus-fill' fill='currentColor' id='node-minus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8a5 5 0 01-9.975.5H4A1.5 1.5 0 012.5 10h-1A1.5 1.5 0 010 8.5v-1A1.5 1.5 0 011.5 6h1A1.5 1.5 0 014 7.5h2.025A5 5 0 0116 8zm-2 0a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h5A.5.5 0 0014 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-node-plus' fill='currentColor' id='node-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11 4a4 4 0 100 8 4 4 0 000-8zM6.025 7.5a5 5 0 110 1H4A1.5 1.5 0 012.5 10h-1A1.5 1.5 0 010 8.5v-1A1.5 1.5 0 011.5 6h1A1.5 1.5 0 014 7.5h2.025zM11 5a.5.5 0 01.5.5v2h2a.5.5 0 010 1h-2v2a.5.5 0 01-1 0v-2h-2a.5.5 0 010-1h2v-2A.5.5 0 0111 5zM1.5 7a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-node-plus-fill' fill='currentColor' id='node-plus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11 13a5 5 0 10-4.975-5.5H4A1.5 1.5 0 002.5 6h-1A1.5 1.5 0 000 7.5v1A1.5 1.5 0 001.5 10h1A1.5 1.5 0 004 8.5h2.025A5 5 0 0011 13zm.5-7.5a.5.5 0 00-1 0v2h-2a.5.5 0 000 1h2v2a.5.5 0 001 0v-2h2a.5.5 0 000-1h-2v-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-nut' fill='currentColor' id='nut' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.42 2H4.58L1.152 8l3.428 6h6.84l3.428-6-3.428-6zM4.58 1a1 1 0 00-.868.504l-3.429 6a1 1 0 000 .992l3.429 6A1 1 0 004.58 15h6.84a1 1 0 00.868-.504l3.428-6a1 1 0 000-.992l-3.428-6A1 1 0 0011.42 1H4.58z'/%3e%3cpath fill-rule='evenodd' d='M6.848 5.933a2.5 2.5 0 102.5 4.33 2.5 2.5 0 00-2.5-4.33zM5.067 9.848a3.5 3.5 0 116.062-3.5 3.5 3.5 0 01-6.062 3.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-nut-fill' fill='currentColor' id='nut-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.58 1a1 1 0 00-.868.504l-3.429 6a1 1 0 000 .992l3.429 6A1 1 0 004.58 15h6.84a1 1 0 00.868-.504l3.428-6a1 1 0 000-.992l-3.428-6A1 1 0 0011.42 1H4.58zm5.018 9.696a3 3 0 10-3-5.196 3 3 0 003 5.196z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-octagon' fill='currentColor' id='octagon' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.54.146A.5.5 0 014.893 0h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-octagon-fill' fill='currentColor' id='octagon-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M11.107 0a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146A.5.5 0 014.893 0h6.214z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-octagon-half' fill='currentColor' id='octagon-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.54.146A.5.5 0 014.893 0h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146zM8 15h2.9l4.1-4.1V5.1L10.9 1H8v14z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-option' fill='currentColor' id='option' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 2.5a.5.5 0 01.5-.5h3.797a.5.5 0 01.439.26L11 13h3.5a.5.5 0 010 1h-3.797a.5.5 0 01-.439-.26L5 3H1.5a.5.5 0 01-.5-.5zm10 0a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-outlet' fill='currentColor' id='outlet' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.34 2.994c.275-.338.68-.494 1.074-.494h7.172c.393 0 .798.156 1.074.494.578.708 1.84 2.534 1.84 5.006 0 2.472-1.262 4.297-1.84 5.006-.276.338-.68.494-1.074.494H4.414c-.394 0-.799-.156-1.074-.494C2.762 12.297 1.5 10.472 1.5 8c0-2.472 1.262-4.297 1.84-5.006zm1.074.506a.376.376 0 00-.299.126C3.599 4.259 2.5 5.863 2.5 8c0 2.137 1.099 3.74 1.615 4.374.06.073.163.126.3.126h7.17c.137 0 .24-.053.3-.126.516-.633 1.615-2.237 1.615-4.374 0-2.137-1.099-3.74-1.615-4.374a.376.376 0 00-.3-.126h-7.17z'/%3e%3cpath fill-rule='evenodd' d='M6 5.5a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z'/%3e%3cpath d='M7 10v1h2v-1a1 1 0 00-2 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-paperclip' fill='currentColor' id='paperclip' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.5 3a2.5 2.5 0 015 0v9a1.5 1.5 0 01-3 0V5a.5.5 0 011 0v7a.5.5 0 001 0V3a1.5 1.5 0 10-3 0v9a2.5 2.5 0 005 0V5a.5.5 0 011 0v7a3.5 3.5 0 11-7 0V3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-paragraph' fill='currentColor' id='paragraph' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1h4.5a.5.5 0 010 1H11v12.5a.5.5 0 01-1 0V2H9v12.5a.5.5 0 01-1 0V1z'/%3e%3cpath d='M9 1v8H7a4 4 0 110-8h2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-patch-check' fill='currentColor' id='patch-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636a2.89 2.89 0 014.134 0l-.715.698a1.89 1.89 0 00-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 00-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 000 2.704l.944.92-.016 1.32a1.89 1.89 0 001.912 1.911l1.318-.016.921.944a1.89 1.89 0 002.704 0l.92-.944 1.32.016a1.89 1.89 0 001.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 000-2.704l-.944-.92.016-1.32a1.89 1.89 0 00-1.912-1.911l-1.318.016z'/%3e%3cpath fill-rule='evenodd' d='M10.354 6.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7 8.793l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-patch-check-fll' fill='currentColor' id='patch-check-fll' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.067.87a2.89 2.89 0 00-4.134 0l-.622.638-.89-.011a2.89 2.89 0 00-2.924 2.924l.01.89-.636.622a2.89 2.89 0 000 4.134l.637.622-.011.89a2.89 2.89 0 002.924 2.924l.89-.01.622.636a2.89 2.89 0 004.134 0l.622-.637.89.011a2.89 2.89 0 002.924-2.924l-.01-.89.636-.622a2.89 2.89 0 000-4.134l-.637-.622.011-.89a2.89 2.89 0 00-2.924-2.924l-.89.01-.622-.636zm.287 5.984a.5.5 0 00-.708-.708L7 8.793 5.854 7.646a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-patch-exclamation' fill='currentColor' id='patch-exclamation' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z'/%3e%3cpath fill-rule='evenodd' d='M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636a2.89 2.89 0 014.134 0l-.715.698a1.89 1.89 0 00-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 00-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 000 2.704l.944.92-.016 1.32a1.89 1.89 0 001.912 1.911l1.318-.016.921.944a1.89 1.89 0 002.704 0l.92-.944 1.32.016a1.89 1.89 0 001.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 000-2.704l-.944-.92.016-1.32a1.89 1.89 0 00-1.912-1.911l-1.318.016z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-patch-exclamation-fll' fill='currentColor' id='patch-exclamation-fll' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.067.87a2.89 2.89 0 00-4.134 0l-.622.638-.89-.011a2.89 2.89 0 00-2.924 2.924l.01.89-.636.622a2.89 2.89 0 000 4.134l.637.622-.011.89a2.89 2.89 0 002.924 2.924l.89-.01.622.636a2.89 2.89 0 004.134 0l.622-.637.89.011a2.89 2.89 0 002.924-2.924l-.01-.89.636-.622a2.89 2.89 0 000-4.134l-.637-.622.011-.89a2.89 2.89 0 00-2.924-2.924l-.89.01-.622-.636zM8 4a.905.905 0 00-.9.995l.35 3.507a.553.553 0 001.1 0l.35-3.507A.905.905 0 008 4zm.002 6a1 1 0 100 2 1 1 0 000-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-patch-minus' fill='currentColor' id='patch-minus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636a2.89 2.89 0 014.134 0l-.715.698a1.89 1.89 0 00-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 00-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 000 2.704l.944.92-.016 1.32a1.89 1.89 0 001.912 1.911l1.318-.016.921.944a1.89 1.89 0 002.704 0l.92-.944 1.32.016a1.89 1.89 0 001.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 000-2.704l-.944-.92.016-1.32a1.89 1.89 0 00-1.912-1.911l-1.318.016z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-patch-minus-fll' fill='currentColor' id='patch-minus-fll' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.067.87a2.89 2.89 0 00-4.134 0l-.622.638-.89-.011a2.89 2.89 0 00-2.924 2.924l.01.89-.636.622a2.89 2.89 0 000 4.134l.637.622-.011.89a2.89 2.89 0 002.924 2.924l.89-.01.622.636a2.89 2.89 0 004.134 0l.622-.637.89.011a2.89 2.89 0 002.924-2.924l-.01-.89.636-.622a2.89 2.89 0 000-4.134l-.637-.622.011-.89a2.89 2.89 0 00-2.924-2.924l-.89.01-.622-.636zM6 7.5a.5.5 0 000 1h4a.5.5 0 000-1H6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-patch-plus' fill='currentColor' id='patch-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636a2.89 2.89 0 014.134 0l-.715.698a1.89 1.89 0 00-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 00-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 000 2.704l.944.92-.016 1.32a1.89 1.89 0 001.912 1.911l1.318-.016.921.944a1.89 1.89 0 002.704 0l.92-.944 1.32.016a1.89 1.89 0 001.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 000-2.704l-.944-.92.016-1.32a1.89 1.89 0 00-1.912-1.911l-1.318.016z'/%3e%3cpath fill-rule='evenodd' d='M8 5.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H6a.5.5 0 010-1h1.5V6a.5.5 0 01.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M7.5 8a.5.5 0 01.5-.5h2a.5.5 0 010 1H8.5V10a.5.5 0 01-1 0V8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-patch-plus-fll' fill='currentColor' id='patch-plus-fll' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.067.87a2.89 2.89 0 00-4.134 0l-.622.638-.89-.011a2.89 2.89 0 00-2.924 2.924l.01.89-.636.622a2.89 2.89 0 000 4.134l.637.622-.011.89a2.89 2.89 0 002.924 2.924l.89-.01.622.636a2.89 2.89 0 004.134 0l.622-.637.89.011a2.89 2.89 0 002.924-2.924l-.01-.89.636-.622a2.89 2.89 0 000-4.134l-.637-.622.011-.89a2.89 2.89 0 00-2.924-2.924l-.89.01-.622-.636zM8.5 6a.5.5 0 00-1 0v1.5H6a.5.5 0 000 1h1.5V10a.5.5 0 001 0V8.5H10a.5.5 0 000-1H8.5V6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-patch-question' fill='currentColor' id='patch-question' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 006 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z'/%3e%3cpath fill-rule='evenodd' d='M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636a2.89 2.89 0 014.134 0l-.715.698a1.89 1.89 0 00-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 00-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 000 2.704l.944.92-.016 1.32a1.89 1.89 0 001.912 1.911l1.318-.016.921.944a1.89 1.89 0 002.704 0l.92-.944 1.32.016a1.89 1.89 0 001.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 000-2.704l-.944-.92.016-1.32a1.89 1.89 0 00-1.912-1.911l-1.318.016z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-patch-question-fll' fill='currentColor' id='patch-question-fll' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.933.87a2.89 2.89 0 014.134 0l.622.638.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 112 0 1 1 0 01-2 0zm1.602-2.027c-.05.386-.218.627-.554.627-.377 0-.585-.317-.585-.745v-.11c0-.727.307-1.208.926-1.641.614-.44.822-.762.822-1.325 0-.638-.42-1.084-1.03-1.084-.55 0-.916.323-1.074.914-.109.364-.292.51-.564.51C6.203 6.12 6 5.873 6 5.48c0-.251.045-.468.139-.69.307-.798 1.079-1.29 2.099-1.29 1.341 0 2.262.902 2.262 2.227 0 .896-.376 1.511-1.05 1.986-.648.445-.806.726-.846 1.26z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pause' fill='currentColor' id='pause' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 3.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V4a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v8a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pause-fill' fill='currentColor' id='pause-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.5 3.5A1.5 1.5 0 017 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0112 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-peace' fill='currentColor' id='peace' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.5 1.018a7 7 0 00-4.79 11.566L7.5 7.793V1.018zm1 0v6.775l4.79 4.79A7 7 0 008.5 1.018zm4.084 12.273L8.5 9.207v5.775a6.97 6.97 0 004.084-1.691zM7.5 14.982V9.207l-4.084 4.084A6.97 6.97 0 007.5 14.982zM0 8a8 8 0 1116 0A8 8 0 010 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-peace-fill' fill='currentColor' id='peace-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14 13.292A8 8 0 008.5.015v7.778l5.5 5.5zm-.708.708L8.5 9.206v6.778a7.967 7.967 0 004.792-1.986zM7.5 15.985V9.207L2.708 14A7.967 7.967 0 007.5 15.985zM2 13.292A8 8 0 017.5.015v7.778l-5.5 5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pen' fill='currentColor' id='pen' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13.498.795l.149-.149a1.207 1.207 0 111.707 1.708l-.149.148a1.5 1.5 0 01-.059 2.059L4.854 14.854a.5.5 0 01-.233.131l-4 1a.5.5 0 01-.606-.606l1-4a.5.5 0 01.131-.232l9.642-9.642a.5.5 0 00-.642.056L6.854 4.854a.5.5 0 11-.708-.708L9.44.854A1.5 1.5 0 0111.5.796a1.5 1.5 0 011.998-.001zm-.644.766a.5.5 0 00-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 000-.708l-1.585-1.585z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pen-fill' fill='currentColor' id='pen-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13.498.795l.149-.149a1.207 1.207 0 111.707 1.708l-.149.148a1.5 1.5 0 01-.059 2.059L4.854 14.854a.5.5 0 01-.233.131l-4 1a.5.5 0 01-.606-.606l1-4a.5.5 0 01.131-.232l9.642-9.642a.5.5 0 00-.642.056L6.854 4.854a.5.5 0 11-.708-.708L9.44.854A1.5 1.5 0 0111.5.796a1.5 1.5 0 011.998-.001z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pencil' fill='currentColor' id='pencil' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12.146.146a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-10 10a.5.5 0 01-.168.11l-5 2a.5.5 0 01-.65-.65l2-5a.5.5 0 01.11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 015 12.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.468-.325z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pencil-fill' fill='currentColor' id='pencil-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12.854.146a.5.5 0 00-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 000-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 016 13.5V13h-.5a.5.5 0 01-.5-.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.5-.5V10h-.5a.499.499 0 01-.175-.032l-.179.178a.5.5 0 00-.11.168l-2 5a.5.5 0 00.65.65l5-2a.5.5 0 00.168-.11l.178-.178z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pencil-square' fill='currentColor' id='pencil-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z'/%3e%3cpath fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pentagon' fill='currentColor' id='pentagon' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1.288l-6.842 5.56L3.733 15h8.534l2.575-8.153L8 1.288zM16 6.5L8 0 0 6.5 3 16h10l3-9.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pentagon-fill' fill='currentColor' id='pentagon-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8 0l8 6.5-3 9.5H3L0 6.5 8 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pentagon-half' fill='currentColor' id='pentagon-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1.288V15h4.267l2.575-8.153L8 1.288zM16 6.5L8 0 0 6.5 3 16h10l3-9.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-people' fill='currentColor' id='people' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 00.014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 00.022.004zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-people-fill' fill='currentColor' id='people-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-percent' fill='currentColor' id='percent' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13.442 2.558a.625.625 0 010 .884l-10 10a.625.625 0 11-.884-.884l10-10a.625.625 0 01.884 0zM4.5 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 1a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm7 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 1a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person' fill='currentColor' id='person' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10 5a2 2 0 11-4 0 2 2 0 014 0zM8 8a3 3 0 100-6 3 3 0 000 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-badge' fill='currentColor' id='person-badge' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2.5A2.5 2.5 0 014.5 0h7A2.5 2.5 0 0114 2.5V14a2 2 0 01-2 2H4a2 2 0 01-2-2V2.5zM4.5 1A1.5 1.5 0 003 2.5v10.795a4.2 4.2 0 01.776-.492C4.608 12.387 5.937 12 8 12s3.392.387 4.224.803a4.2 4.2 0 01.776.492V2.5A1.5 1.5 0 0011.5 1h-7z'/%3e%3cpath fill-rule='evenodd' d='M8 11a3 3 0 100-6 3 3 0 000 6zM6 2.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-badge-fill' fill='currentColor' id='person-badge-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm4.5 0a.5.5 0 000 1h3a.5.5 0 000-1h-3zM8 11a3 3 0 100-6 3 3 0 000 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 001 1h8a1 1 0 001-1v-.245z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-bounding-box' fill='currentColor' id='person-bounding-box' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.5 1a.5.5 0 00-.5.5v3a.5.5 0 01-1 0v-3A1.5 1.5 0 011.5 0h3a.5.5 0 010 1h-3zM11 .5a.5.5 0 01.5-.5h3A1.5 1.5 0 0116 1.5v3a.5.5 0 01-1 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 01-.5-.5zM.5 11a.5.5 0 01.5.5v3a.5.5 0 00.5.5h3a.5.5 0 010 1h-3A1.5 1.5 0 010 14.5v-3a.5.5 0 01.5-.5zm15 0a.5.5 0 01.5.5v3a1.5 1.5 0 01-1.5 1.5h-3a.5.5 0 010-1h3a.5.5 0 00.5-.5v-3a.5.5 0 01.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-check' fill='currentColor' id='person-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 5a2 2 0 11-4 0 2 2 0 014 0zM6 8a3 3 0 100-6 3 3 0 000 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zm4.854-7.85a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L12.5 7.793l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-check-fill' fill='currentColor' id='person-check-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm9.854-2.854a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L12.5 7.793l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-circle' fill='currentColor' id='person-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z'/%3e%3cpath fill-rule='evenodd' d='M8 9a3 3 0 100-6 3 3 0 000 6z'/%3e%3cpath fill-rule='evenodd' d='M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-dash' fill='currentColor' id='person-dash' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 5a2 2 0 11-4 0 2 2 0 014 0zM6 8a3 3 0 100-6 3 3 0 000 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zM11 7.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-dash-fill' fill='currentColor' id='person-dash-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm5-.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-fill' fill='currentColor' id='person-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-lines-fill' fill='currentColor' id='person-lines-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7 1.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm2 9a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-plus' fill='currentColor' id='person-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 5a2 2 0 11-4 0 2 2 0 014 0zM6 8a3 3 0 100-6 3 3 0 000 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zM13.5 5a.5.5 0 01.5.5V7h1.5a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0V8h-1.5a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-plus-fill' fill='currentColor' id='person-plus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7.5-3a.5.5 0 01.5.5V7h1.5a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0V8h-1.5a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-square' fill='currentColor' id='person-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 100-6 3 3 0 000 6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-x' fill='currentColor' id='person-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 5a2 2 0 11-4 0 2 2 0 014 0zM6 8a3 3 0 100-6 3 3 0 000 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zm1.146-7.85a.5.5 0 01.708 0L14 6.293l1.146-1.147a.5.5 0 01.708.708L14.707 7l1.147 1.146a.5.5 0 01-.708.708L14 7.707l-1.146 1.147a.5.5 0 01-.708-.708L13.293 7l-1.147-1.146a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-person-x-fill' fill='currentColor' id='person-x-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm6.146-2.854a.5.5 0 01.708 0L14 6.293l1.146-1.147a.5.5 0 01.708.708L14.707 7l1.147 1.146a.5.5 0 01-.708.708L14 7.707l-1.146 1.147a.5.5 0 01-.708-.708L13.293 7l-1.147-1.146a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-phone' fill='currentColor' id='phone' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z'/%3e%3cpath fill-rule='evenodd' d='M8 14a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-phone-fill' fill='currentColor' id='phone-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 2a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V2zm6 11a1 1 0 11-2 0 1 1 0 012 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-phone-landscape' fill='currentColor' id='phone-landscape' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 4.5v6a1 1 0 001 1h12a1 1 0 001-1v-6a1 1 0 00-1-1H2a1 1 0 00-1 1zm-1 6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2H2a2 2 0 00-2 2v6z'/%3e%3cpath fill-rule='evenodd' d='M14 7.5a1 1 0 10-2 0 1 1 0 002 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-phone-landscape-fill' fill='currentColor' id='phone-landscape-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 12.5a2 2 0 01-2-2v-6a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H2zm11-6a1 1 0 110 2 1 1 0 010-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-phone-vibrate' fill='currentColor' id='phone-vibrate' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10 3H6a1 1 0 00-1 1v8a1 1 0 001 1h4a1 1 0 001-1V4a1 1 0 00-1-1zM6 2a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2V4a2 2 0 00-2-2H6z'/%3e%3cpath fill-rule='evenodd' d='M8 12a1 1 0 100-2 1 1 0 000 2zM1.599 4.058a.5.5 0 01.208.676A6.967 6.967 0 001 8c0 1.18.292 2.292.807 3.266a.5.5 0 01-.884.468A7.968 7.968 0 010 8c0-1.347.334-2.619.923-3.734a.5.5 0 01.676-.208zm12.802 0a.5.5 0 01.676.208A7.967 7.967 0 0116 8a7.967 7.967 0 01-.923 3.734.5.5 0 01-.884-.468A6.967 6.967 0 0015 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 01.208-.676zM3.057 5.534a.5.5 0 01.284.648A4.986 4.986 0 003 8c0 .642.12 1.255.34 1.818a.5.5 0 11-.93.364A5.986 5.986 0 012 8c0-.769.145-1.505.41-2.182a.5.5 0 01.647-.284zm9.886 0a.5.5 0 01.648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 01-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 01.283-.648z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pie-chart' fill='currentColor' id='pie-chart' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M7.5 7.793V1h1v6.5H15v1H8.207l-4.853 4.854-.708-.708L7.5 7.793z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pie-chart-fill' fill='currentColor' id='pie-chart-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M15.985 8.5H8.207l-5.5 5.5a8 8 0 0013.277-5.5zM2 13.292A8 8 0 017.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 008.5.015z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pip' fill='currentColor' id='pip' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 3.5A1.5 1.5 0 011.5 2h13A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5v-9zM1.5 3a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-13z'/%3e%3cpath d='M8 8.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-pip-fill' fill='currentColor' id='pip-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.5 2A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13zm7 6a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-play' fill='currentColor' id='play' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 010 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-play-fill' fill='currentColor' id='play-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-plug' fill='currentColor' id='plug' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 0a.5.5 0 01.5.5V3h3V.5a.5.5 0 011 0V3h1a.5.5 0 01.5.5v3A3.5 3.5 0 018.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 01-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 003 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 014 6.5v-3a.5.5 0 01.5-.5h1V.5A.5.5 0 016 0zM5 4v2.5A2.5 2.5 0 007.5 9h1A2.5 2.5 0 0011 6.5V4H5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-plug-fill' fill='currentColor' id='plug-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 0a.5.5 0 01.5.5V3h3V.5a.5.5 0 011 0V3h1a.5.5 0 01.5.5v3A3.5 3.5 0 018.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 01-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 003 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 014 6.5v-3a.5.5 0 01.5-.5h1V.5A.5.5 0 016 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-plus' fill='currentColor' id='plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-plus-circle' fill='currentColor' id='plus-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-plus-circle-fill' fill='currentColor' id='plus-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4.5a.5.5 0 00-1 0v3h-3a.5.5 0 000 1h3v3a.5.5 0 001 0v-3h3a.5.5 0 000-1h-3v-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-plus-square' fill='currentColor' id='plus-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-plus-square-fill' fill='currentColor' id='plus-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm6.5 4.5a.5.5 0 00-1 0v3h-3a.5.5 0 000 1h3v3a.5.5 0 001 0v-3h3a.5.5 0 000-1h-3v-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-power' fill='currentColor' id='power' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.578 4.437a5 5 0 104.922.044l.5-.866a6 6 0 11-5.908-.053l.486.875z'/%3e%3cpath fill-rule='evenodd' d='M7.5 8V1h1v7h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-printer' fill='currentColor' id='printer' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M11 2H5a1 1 0 00-1 1v2H3V3a2 2 0 012-2h6a2 2 0 012 2v2h-1V3a1 1 0 00-1-1zm3 4H2a1 1 0 00-1 1v3a1 1 0 001 1h1v1H2a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 01-2 2h-1v-1h1a1 1 0 001-1V7a1 1 0 00-1-1z'/%3e%3cpath fill-rule='evenodd' d='M11 9H5a1 1 0 00-1 1v3a1 1 0 001 1h6a1 1 0 001-1v-3a1 1 0 00-1-1zM5 8a2 2 0 00-2 2v3a2 2 0 002 2h6a2 2 0 002-2v-3a2 2 0 00-2-2H5z'/%3e%3cpath d='M3 7.5a.5.5 0 11-1 0 .5.5 0 011 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-printer-fill' fill='currentColor' id='printer-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5 1a2 2 0 00-2 2v1h10V3a2 2 0 00-2-2H5z'/%3e%3cpath fill-rule='evenodd' d='M11 9H5a1 1 0 00-1 1v3a1 1 0 001 1h6a1 1 0 001-1v-3a1 1 0 00-1-1z'/%3e%3cpath fill-rule='evenodd' d='M0 7a2 2 0 012-2h12a2 2 0 012 2v3a2 2 0 01-2 2h-1v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2H2a2 2 0 01-2-2V7zm2.5 1a.5.5 0 100-1 .5.5 0 000 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-puzzle' fill='currentColor' id='puzzle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4.605 2.5V2v.5zM3.61 3.6l.498-.043V3.55l-.498.05zM7 2.5h.5A.5.5 0 007 2v.5zm-.676 1.454l.304.397-.304-.397zm3.352 0l-.304.397.304-.397zM9 2.5V2a.5.5 0 00-.5.5H9zm3.39 1.1l-.498-.05v.007l.498.043zM12.1 7l-.498-.043a.5.5 0 00.498.543V7zm1.854-.676l.397.304-.397-.304zm0 3.352l.397-.304-.397.304zM12.1 9v-.5a.5.5 0 00-.498.542L12.1 9zm.29 3.4l-.498.043v.007l.498-.05zM9 13.5h-.5a.5.5 0 00.5.5v-.5zm.676-1.454l-.304-.397.304.397zm-3.352 0l.304-.397-.304.397zM7 13.5v.5a.5.5 0 00.5-.5H7zm-2.395 0V13v.5zm-.995-1.1l.498.05v-.007L3.61 12.4zM3.9 9l.498.042A.5.5 0 003.9 8.5V9zm-1.854.676l-.397-.304.397.304zm0-3.352l-.397.304.397-.304zM3.9 7v.5a.5.5 0 00.498-.543L3.9 7zm.705-5a1.5 1.5 0 00-1.493 1.65l.995-.1A.5.5 0 014.605 3V2zM7 2H4.605v1H7V2zm.5.882V2.5h-1v.382h1zm-.872 1.469c.375-.287.872-.773.872-1.469h-1c0 .195-.147.42-.48.675l.608.794zM6.5 4.5l.001-.006a.113.113 0 01.012-.025.459.459 0 01.115-.118l-.608-.794c-.274.21-.52.528-.52.943h1zM8 5c-.491 0-.912-.1-1.19-.24a.86.86 0 01-.271-.194.213.213 0 01-.039-.063V4.5h-1c0 .568.447.947.862 1.154C6.807 5.877 7.387 6 8 6V5zm1.5-.5v.003a.213.213 0 01-.039.064.86.86 0 01-.27.193C8.91 4.9 8.49 5 8 5v1c.613 0 1.193-.123 1.638-.346.415-.207.862-.586.862-1.154h-1zm-.128-.15c.065.05.099.092.115.119.008.013.01.021.012.025L9.5 4.5h1c0-.415-.246-.733-.52-.943l-.608.794zM8.5 2.883c0 .696.497 1.182.872 1.469l.608-.794c-.333-.255-.48-.48-.48-.675h-1zm0-.382v.382h1V2.5h-1zm2.895-.5H9v1h2.395V2zm1.493 1.65A1.5 1.5 0 0011.395 2v1a.5.5 0 01.498.55l.995.1zm-.29 3.392l.29-3.4-.996-.085-.29 3.4.996.085zm.284-.542H12.1v1h.782v-1zm.675-.48c-.255.333-.48.48-.675.48v1c.696 0 1.182-.497 1.469-.872l-.794-.608zm.943-.52c-.415 0-.733.246-.943.52l.794.608a.459.459 0 01.118-.115.113.113 0 01.025-.012L14.5 6.5v-1zM16 8c0-.613-.123-1.193-.346-1.638-.207-.415-.586-.862-1.154-.862v1h.003l.01.003a.237.237 0 01.053.036.86.86 0 01.194.27c.14.28.24.7.24 1.191h1zm-1.5 2.5c.568 0 .947-.447 1.154-.862C15.877 9.193 16 8.613 16 8h-1c0 .491-.1.912-.24 1.19a.86.86 0 01-.194.271.214.214 0 01-.063.039H14.5v1zm-.943-.52c.21.274.528.52.943.52v-1l-.006-.001a.113.113 0 01-.025-.012.458.458 0 01-.118-.115l-.794.608zm-.675-.48c.195 0 .42.147.675.48l.794-.608c-.287-.375-.773-.872-1.469-.872v1zm-.782 0h.782v-1H12.1v1zm.788 2.858l-.29-3.4-.996.084.29 3.401.996-.085zM11.395 14a1.5 1.5 0 001.493-1.65l-.995.1a.5.5 0 01-.498.55v1zM9 14h2.395v-1H9v1zm.5-.5v-.382h-1v.382h1zm0-.382c0-.195.147-.42.48-.675l-.608-.794c-.375.287-.872.773-.872 1.469h1zm.48-.675c.274-.21.52-.528.52-.943h-1l-.001.006a.113.113 0 01-.012.025.459.459 0 01-.115.118l.608.794zm.52-.943c0-.568-.447-.947-.862-1.154C9.193 10.123 8.613 10 8 10v1c.492 0 .912.1 1.19.24.14.07.226.14.271.194a.214.214 0 01.039.063v.003h1zM8 10c-.613 0-1.193.123-1.638.346-.415.207-.862.586-.862 1.154h1v-.003l.003-.01a.214.214 0 01.036-.053.859.859 0 01.27-.194C7.09 11.1 7.51 11 8 11v-1zm-2.5 1.5c0 .415.246.733.52.943l.608-.794a.459.459 0 01-.115-.118.113.113 0 01-.012-.025L6.5 11.5h-1zm.52.943c.333.255.48.48.48.675h1c0-.696-.497-1.182-.872-1.469l-.608.794zm.48.675v.382h1v-.382h-1zM4.605 14H7v-1H4.605v1zm-1.493-1.65A1.5 1.5 0 004.605 14v-1a.5.5 0 01-.498-.55l-.995-.1zm.29-3.393l-.29 3.401.996.085.29-3.4-.996-.086zm-.284.543H3.9v-1h-.782v1zm-.675.48c.255-.333.48-.48.675-.48v-1c-.696 0-1.182.497-1.469.872l.794.608zm-.943.52c.415 0 .733-.246.943-.52l-.794-.608a.459.459 0 01-.118.115.112.112 0 01-.025.012L1.5 9.5v1zM0 8c0 .613.123 1.193.346 1.638.207.415.586.862 1.154.862v-1h-.003a.213.213 0 01-.064-.039.86.86 0 01-.193-.27C1.1 8.91 1 8.49 1 8H0zm1.5-2.5c-.568 0-.947.447-1.154.862C.123 6.807 0 7.387 0 8h1c0-.492.1-.912.24-1.19a.86.86 0 01.194-.271.213.213 0 01.063-.039H1.5v-1zm.943.52c-.21-.274-.528-.52-.943-.52v1l.006.001a.112.112 0 01.025.012c.027.016.068.05.118.115l.794-.608zm.675.48c-.195 0-.42-.147-.675-.48l-.794.608c.287.375.773.872 1.469.872v-1zm.782 0h-.782v1H3.9v-1zm-.788-2.858l.29 3.4.996-.085-.29-3.4-.996.085z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-puzzle-fill' fill='currentColor' id='puzzle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.112 3.645A1.5 1.5 0 014.605 2H7a.5.5 0 01.5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 00-.115.118.113.113 0 00-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 00.27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 00.271-.194.213.213 0 00.036-.054l.003-.01v-.008a.112.112 0 00-.012-.025.459.459 0 00-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 019 2h2.395a1.5 1.5 0 011.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0111.395 14H9a.5.5 0 01-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 00.115-.118.113.113 0 00.012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 00-.036-.053.859.859 0 00-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 00-.271.194.214.214 0 00-.036.054l-.003.01v.002l.001.006a.113.113 0 00.012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 01-.5.5H4.605a1.5 1.5 0 01-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-question' fill='currentColor' id='question' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.255 5.786a.237.237 0 00.241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-question-circle' fill='currentColor' id='question-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath d='M5.255 5.786a.237.237 0 00.241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-question-circle-fill' fill='currentColor' id='question-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zM5.496 6.033a.237.237 0 01-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 01-.25.25h-.81a.25.25 0 01-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-question-diamond' fill='currentColor' id='question-diamond' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 010-2.098L6.95.435zm1.4.7a.495.495 0 00-.7 0L1.134 7.65a.495.495 0 000 .7l6.516 6.516a.495.495 0 00.7 0l6.516-6.516a.495.495 0 000-.7L8.35 1.134z'/%3e%3cpath d='M5.255 5.786a.237.237 0 00.241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-question-diamond-fill' fill='currentColor' id='question-diamond-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM5.495 6.033a.237.237 0 01-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 01-.25.25h-.81a.25.25 0 01-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-question-octagon' fill='currentColor' id='question-octagon' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.54.146A.5.5 0 014.893 0h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z'/%3e%3cpath d='M5.255 5.786a.237.237 0 00.241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-question-octagon-fill' fill='currentColor' id='question-octagon-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.46.146A.5.5 0 0011.107 0H4.893a.5.5 0 00-.353.146L.146 4.54A.5.5 0 000 4.893v6.214a.5.5 0 00.146.353l4.394 4.394a.5.5 0 00.353.146h6.214a.5.5 0 00.353-.146l4.394-4.394a.5.5 0 00.146-.353V4.893a.5.5 0 00-.146-.353L11.46.146zM5.496 6.033a.237.237 0 01-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 01-.25.25h-.81a.25.25 0 01-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-question-square' fill='currentColor' id='question-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath d='M5.255 5.786a.237.237 0 00.241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-question-square-fill' fill='currentColor' id='question-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm3.496 6.033a.237.237 0 01-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 01-.25.25h-.81a.25.25 0 01-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-receipt' fill='currentColor' id='receipt' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.92.506a.5.5 0 01.434.14L3 1.293l.646-.647a.5.5 0 01.708 0L5 1.293l.646-.647a.5.5 0 01.708 0L7 1.293l.646-.647a.5.5 0 01.708 0L9 1.293l.646-.647a.5.5 0 01.708 0l.646.647.646-.647a.5.5 0 01.708 0l.646.647.646-.647a.5.5 0 01.801.13l.5 1A.5.5 0 0115 2v12a.5.5 0 01-.053.224l-.5 1a.5.5 0 01-.8.13L13 14.707l-.646.647a.5.5 0 01-.708 0L11 14.707l-.646.647a.5.5 0 01-.708 0L9 14.707l-.646.647a.5.5 0 01-.708 0L7 14.707l-.646.647a.5.5 0 01-.708 0L5 14.707l-.646.647a.5.5 0 01-.708 0L3 14.707l-.646.647a.5.5 0 01-.801-.13l-.5-1A.5.5 0 011 14V2a.5.5 0 01.053-.224l.5-1a.5.5 0 01.367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 01.707 0l.646.647.646-.646a.5.5 0 01.708 0l.646.646.646-.646a.5.5 0 01.708 0l.646.646.646-.646a.5.5 0 01.708 0l.646.646.646-.646a.5.5 0 01.708 0l.646.646.646-.646a.5.5 0 01.708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 01-.707 0L12 1.707l-.646.647a.5.5 0 01-.708 0L10 1.707l-.646.647a.5.5 0 01-.708 0L8 1.707l-.646.647a.5.5 0 01-.708 0L6 1.707l-.646.647a.5.5 0 01-.708 0L4 1.707l-.646.647a.5.5 0 01-.708 0l-.509-.51z'/%3e%3cpath fill-rule='evenodd' d='M3 4.5a.5.5 0 01.5-.5h6a.5.5 0 110 1h-6a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 110 1h-6a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 110 1h-6a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm8-6a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-receipt-cutoff' fill='currentColor' id='receipt-cutoff' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.92.506a.5.5 0 01.434.14L3 1.293l.646-.647a.5.5 0 01.708 0L5 1.293l.646-.647a.5.5 0 01.708 0L7 1.293l.646-.647a.5.5 0 01.708 0L9 1.293l.646-.647a.5.5 0 01.708 0l.646.647.646-.647a.5.5 0 01.708 0l.646.647.646-.647a.5.5 0 01.801.13l.5 1A.5.5 0 0115 2v13h-1V2.118l-.137-.274-.51.51a.5.5 0 01-.707 0L12 1.707l-.646.647a.5.5 0 01-.708 0L10 1.707l-.646.647a.5.5 0 01-.708 0L8 1.707l-.646.647a.5.5 0 01-.708 0L6 1.707l-.646.647a.5.5 0 01-.708 0L4 1.707l-.646.647a.5.5 0 01-.708 0l-.509-.51L2 2.118V15H1V2a.5.5 0 01.053-.224l.5-1a.5.5 0 01.367-.27zM0 15.5a.5.5 0 01.5-.5h15a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M3 4.5a.5.5 0 01.5-.5h6a.5.5 0 110 1h-6a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 110 1h-6a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 110 1h-6a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm8-8a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-reception-0' fill='currentColor' id='reception-0' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 13.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-reception-1' fill='currentColor' id='reception-1' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 11.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zm4 2a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-reception-2' fill='currentColor' id='reception-2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 11.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zm4-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-5zm4 5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-reception-3' fill='currentColor' id='reception-3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 11.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zm4-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-5zm4-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-8zm4 8a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-reception-4' fill='currentColor' id='reception-4' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 11.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zm4-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-5zm4-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-8zm4-3a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-11z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-reply' fill='currentColor' id='reply' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.502 5.013a.144.144 0 00-.202.134V6.3a.5.5 0 01-.5.5c-.667 0-2.013.005-3.3.822-.984.624-1.99 1.76-2.595 3.876C3.925 10.515 5.09 9.982 6.11 9.7a8.741 8.741 0 011.921-.306 7.403 7.403 0 01.798.008h.013l.005.001h.001L8.8 9.9l.05-.498a.5.5 0 01.45.498v1.153c0 .108.11.176.202.134l3.984-2.933a.494.494 0 01.042-.028.147.147 0 000-.252.494.494 0 01-.042-.028L9.502 5.013zM8.3 10.386a7.745 7.745 0 00-1.923.277c-1.326.368-2.896 1.201-3.94 3.08a.5.5 0 01-.933-.305c.464-3.71 1.886-5.662 3.46-6.66 1.245-.79 2.527-.942 3.336-.971v-.66a1.144 1.144 0 011.767-.96l3.994 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a1.144 1.144 0 01-1.767-.96v-.667z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-reply-all' fill='currentColor' id='reply-all' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.002 5.013a.144.144 0 00-.202.134V6.3a.5.5 0 01-.5.5c-.667 0-2.013.005-3.3.822-.984.624-1.99 1.76-2.595 3.876C2.425 10.515 3.59 9.982 4.61 9.7a8.741 8.741 0 011.921-.306 7.403 7.403 0 01.798.008h.013l.005.001h.001L7.3 9.9l.05-.498a.5.5 0 01.45.498v1.153c0 .108.11.176.202.134l3.984-2.933a.494.494 0 01.042-.028.147.147 0 000-.252.494.494 0 01-.042-.028L8.002 5.013zM6.8 10.386a7.745 7.745 0 00-1.923.277c-1.326.368-2.896 1.201-3.94 3.08a.5.5 0 01-.933-.305c.464-3.71 1.886-5.662 3.46-6.66 1.245-.79 2.527-.942 3.336-.971v-.66a1.144 1.144 0 011.767-.96l3.994 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a1.144 1.144 0 01-1.767-.96v-.667z'/%3e%3cpath fill-rule='evenodd' d='M10.868 4.293a.5.5 0 01.7-.106l3.993 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a.5.5 0 01-.593-.805l4.012-2.954a.493.493 0 01.042-.028.147.147 0 000-.252.496.496 0 01-.042-.028l-4.012-2.954a.5.5 0 01-.106-.699z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-reply-all-fill' fill='currentColor' id='reply-all-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.079 11.9l4.568-3.281a.719.719 0 000-1.238L8.079 4.1A.716.716 0 007 4.719V6c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z'/%3e%3cpath fill-rule='evenodd' d='M10.868 4.293a.5.5 0 01.7-.106l3.993 2.94a1.147 1.147 0 010 1.946l-3.994 2.94a.5.5 0 01-.593-.805l4.012-2.954a.493.493 0 01.042-.028.147.147 0 000-.252.496.496 0 01-.042-.028l-4.012-2.954a.5.5 0 01-.106-.699z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-reply-fill' fill='currentColor' id='reply-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.079 11.9l4.568-3.281a.719.719 0 000-1.238L9.079 4.1A.716.716 0 008 4.719V6c-1.5 0-6 0-7 8 2.5-4.5 7-4 7-4v1.281c0 .56.606.898 1.079.62z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-rss' fill='currentColor' id='rss' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath d='M5.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3cpath fill-rule='evenodd' d='M2.5 3.5a1 1 0 011-1c5.523 0 10 4.477 10 10a1 1 0 11-2 0 8 8 0 00-8-8 1 1 0 01-1-1zm0 4a1 1 0 011-1 6 6 0 016 6 1 1 0 11-2 0 4 4 0 00-4-4 1 1 0 01-1-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-rss-fill' fill='currentColor' id='rss-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm1.5 2.5a1 1 0 000 2 8 8 0 018 8 1 1 0 102 0c0-5.523-4.477-10-10-10zm0 4a1 1 0 000 2 4 4 0 014 4 1 1 0 102 0 6 6 0 00-6-6zm.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-scissors' fill='currentColor' id='scissors' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 11-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 11-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-screwdriver' fill='currentColor' id='screwdriver' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1l1-1 3.081 2.2a1 1 0 01.419.815v.07a1 1 0 00.293.708L10.5 9.5l.914-.305a1 1 0 011.023.242l3.356 3.356a1 1 0 010 1.414l-1.586 1.586a1 1 0 01-1.414 0l-3.356-3.356a1 1 0 01-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 00-.707-.293h-.071a1 1 0 01-.814-.419L0 1zm11.354 9.646a.5.5 0 00-.708.708l3 3a.5.5 0 00.708-.708l-3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-search' fill='currentColor' id='search' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z'/%3e%3cpath fill-rule='evenodd' d='M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-segmented-nav' fill='currentColor' id='segmented-nav' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 5H6v4h8a1 1 0 001-1V6a1 1 0 00-1-1zM2 4a2 2 0 00-2 2v2a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M10 9V5h1v4h-1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-server' fill='currentColor' id='server' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4C14.665 5.474 11.68 6.667 8 6.667 4.318 6.667 1.333 5.473 1.333 4V2.667zm0 3.667v3C1.333 10.805 4.318 12 8 12c3.68 0 6.665-1.193 6.667-2.665V6.334c-.43.32-.931.58-1.458.79C11.81 7.684 9.967 8 8 8c-1.967 0-3.81-.317-5.21-.876a6.508 6.508 0 01-1.457-.79zm13.334 5.334c-.43.319-.931.578-1.458.789-1.4.56-3.242.876-5.209.876-1.967 0-3.81-.316-5.21-.876a6.51 6.51 0 01-1.457-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-share' fill='currentColor' id='share' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M13.5 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM11 2.5a2.5 2.5 0 11.603 1.628l-6.718 3.12a2.499 2.499 0 010 1.504l6.718 3.12a2.5 2.5 0 11-.488.876l-6.718-3.12a2.5 2.5 0 110-3.256l6.718-3.12A2.5 2.5 0 0111 2.5zm-8.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm11 5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-share-fill' fill='currentColor' id='share-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11 2.5a2.5 2.5 0 11.603 1.628l-6.718 3.12a2.499 2.499 0 010 1.504l6.718 3.12a2.5 2.5 0 11-.488.876l-6.718-3.12a2.5 2.5 0 110-3.256l6.718-3.12A2.5 2.5 0 0111 2.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield' fill='currentColor' id='shield' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.443 1.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 008 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 002.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-check' fill='currentColor' id='shield-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.443 1.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 008 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 002.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z'/%3e%3cpath fill-rule='evenodd' d='M10.854 6.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 11.708-.708L7.5 8.793l2.646-2.647a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-exclamation' fill='currentColor' id='shield-exclamation' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.443 1.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 008 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 002.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z'/%3e%3cpath d='M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-fill' fill='currentColor' id='shield-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.187 1.025C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-fill-check' fill='currentColor' id='shield-fill-check' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 .5c-.662 0-1.77.249-2.813.525a61.11 61.11 0 00-2.772.815 1.454 1.454 0 00-1.003 1.184c-.573 4.197.756 7.307 2.368 9.365a11.192 11.192 0 002.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586a11.191 11.191 0 002.418-2.3c1.611-2.058 2.94-5.168 2.367-9.365a1.454 1.454 0 00-1.003-1.184 61.09 61.09 0 00-2.772-.815C9.77.749 8.663.5 8 .5zm2.854 6.354a.5.5 0 00-.708-.708L7.5 8.793 6.354 7.646a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-fill-exclamation' fill='currentColor' id='shield-fill-exclamation' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 .5c-.662 0-1.77.249-2.813.525a61.11 61.11 0 00-2.772.815 1.454 1.454 0 00-1.003 1.184c-.573 4.197.756 7.307 2.368 9.365a11.192 11.192 0 002.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586a11.191 11.191 0 002.418-2.3c1.611-2.058 2.94-5.168 2.367-9.365a1.454 1.454 0 00-1.003-1.184 61.09 61.09 0 00-2.772-.815C9.77.749 8.663.5 8 .5zM8 4a.905.905 0 00-.9.995l.35 3.507a.553.553 0 001.1 0l.35-3.507A.905.905 0 008 4zm.002 6a1 1 0 100 2 1 1 0 000-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-fill-minus' fill='currentColor' id='shield-fill-minus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 .5c-.662 0-1.77.249-2.813.525a61.11 61.11 0 00-2.772.815 1.454 1.454 0 00-1.003 1.184c-.573 4.197.756 7.307 2.368 9.365a11.192 11.192 0 002.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586a11.191 11.191 0 002.418-2.3c1.611-2.058 2.94-5.168 2.367-9.365a1.454 1.454 0 00-1.003-1.184 61.09 61.09 0 00-2.772-.815C9.77.749 8.663.5 8 .5zm-2 7a.5.5 0 000 1h4a.5.5 0 000-1H6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-fill-plus' fill='currentColor' id='shield-fill-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 .5c-.662 0-1.77.249-2.813.525a61.11 61.11 0 00-2.772.815 1.454 1.454 0 00-1.003 1.184c-.573 4.197.756 7.307 2.368 9.365a11.192 11.192 0 002.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586a11.191 11.191 0 002.418-2.3c1.611-2.058 2.94-5.168 2.367-9.365a1.454 1.454 0 00-1.003-1.184 61.09 61.09 0 00-2.772-.815C9.77.749 8.663.5 8 .5zM8.5 6a.5.5 0 00-1 0v1.5H6a.5.5 0 000 1h1.5V10a.5.5 0 001 0V8.5H10a.5.5 0 000-1H8.5V6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-fill-x' fill='currentColor' id='shield-fill-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 .5c-.662 0-1.77.249-2.813.525a61.11 61.11 0 00-2.772.815 1.454 1.454 0 00-1.003 1.184c-.573 4.197.756 7.307 2.368 9.365a11.192 11.192 0 002.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586a11.191 11.191 0 002.418-2.3c1.611-2.058 2.94-5.168 2.367-9.365a1.454 1.454 0 00-1.003-1.184 61.09 61.09 0 00-2.772-.815C9.77.749 8.663.5 8 .5zM6.854 6.146a.5.5 0 10-.708.708L7.293 8 6.146 9.146a.5.5 0 10.708.708L8 8.707l1.146 1.147a.5.5 0 00.708-.708L8.707 8l1.147-1.146a.5.5 0 00-.708-.708L8 7.293 6.854 6.146z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-lock' fill='currentColor' id='shield-lock' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.443 1.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 008 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 002.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z'/%3e%3cpath d='M9.5 6.5a1.5 1.5 0 01-1 1.415l.385 1.99a.5.5 0 01-.491.595h-.788a.5.5 0 01-.49-.595l.384-1.99a1.5 1.5 0 112-1.415z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-lock-fill' fill='currentColor' id='shield-lock-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 .5c-.662 0-1.77.249-2.813.525a61.11 61.11 0 00-2.772.815 1.454 1.454 0 00-1.003 1.184c-.573 4.197.756 7.307 2.368 9.365a11.192 11.192 0 002.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586a11.191 11.191 0 002.418-2.3c1.611-2.058 2.94-5.168 2.367-9.365a1.454 1.454 0 00-1.003-1.184 61.09 61.09 0 00-2.772-.815C9.77.749 8.663.5 8 .5zm.5 7.415a1.5 1.5 0 10-1 0l-.385 1.99a.5.5 0 00.491.595h.788a.5.5 0 00.49-.595L8.5 7.915z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-minus' fill='currentColor' id='shield-minus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.443 1.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 008 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 002.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z'/%3e%3cpath fill-rule='evenodd' d='M5.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-plus' fill='currentColor' id='shield-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.443 1.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 008 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 002.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z'/%3e%3cpath fill-rule='evenodd' d='M8 5.5a.5.5 0 01.5.5v1.5H10a.5.5 0 010 1H8.5V10a.5.5 0 01-1 0V8.5H6a.5.5 0 010-1h1.5V6a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-shaded' fill='currentColor' id='shield-shaded' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.443 1.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 008 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 002.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z'/%3e%3cpath d='M8 2.25c.909 0 3.188.685 4.254 1.022a.94.94 0 01.656.773c.814 6.424-4.13 9.452-4.91 9.452V2.25z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-slash' fill='currentColor' id='shield-slash' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.357 3.478c-.42 3.969.87 6.928 2.423 8.911a11.192 11.192 0 002.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586.466-.32.983-.74 1.502-1.263l-.707-.707a9.692 9.692 0 01-1.362 1.147 5.934 5.934 0 01-.857.5c-.116.053-.21.089-.282.11A.73.73 0 018 14.5c-.007-.001-.038-.005-.097-.023a2.273 2.273 0 01-.282-.111 5.934 5.934 0 01-.857-.5 10.197 10.197 0 01-2.197-2.093C3.262 10.107 2.145 7.672 2.289 4.41l-.932-.932zm11.053 6.81c.971-1.785 1.594-4.15 1.187-7.129a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491a45.4 45.4 0 00-1.041.29l-.806-.806a52.727 52.727 0 011.591-.45C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.458 3.355-.299 6.015-1.444 7.999l-.735-.735z'/%3e%3cpath fill-rule='evenodd' d='M14.646 15.354l-14-14 .708-.708 14 14-.707.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-slash-fill' fill='currentColor' id='shield-slash-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.357 3.478c-.42 3.969.87 6.928 2.423 8.911a11.192 11.192 0 002.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586.466-.32.983-.74 1.502-1.263L1.357 3.478zm11.787 7.545c1.145-1.984 1.902-4.644 1.444-8a1.454 1.454 0 00-1.003-1.183 61.09 61.09 0 00-2.772-.815C9.77.749 8.663.5 8 .5c-.662 0-1.77.249-2.813.525-.548.145-1.1.303-1.59.45l9.547 9.548z'/%3e%3cpath fill-rule='evenodd' d='M14.646 15.354l-14-14 .708-.708 14 14-.707.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shield-x' fill='currentColor' id='shield-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.443 1.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 008 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 002.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z'/%3e%3cpath fill-rule='evenodd' d='M6.146 6.146a.5.5 0 01.708 0L8 7.293l1.146-1.147a.5.5 0 11.708.708L8.707 8l1.147 1.146a.5.5 0 01-.708.708L8 8.707 6.854 9.854a.5.5 0 01-.708-.708L7.293 8 6.146 6.854a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shift' fill='currentColor' id='shift' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.27 2.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 01-1 1h-5a1 1 0 01-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5L8 2.731 1.654 9.5H4.5a1 1 0 011 1v3h5v-3a1 1 0 011-1h2.846z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shift-fill' fill='currentColor' id='shift-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.27 2.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 01-1 1h-5a1 1 0 01-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shop' fill='currentColor' id='shop' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.97 1.35A1 1 0 013.73 1h8.54a1 1 0 01.76.35l2.609 3.044A1.5 1.5 0 0116 5.37v.255a2.375 2.375 0 01-4.25 1.458A2.371 2.371 0 019.875 8 2.37 2.37 0 018 7.083 2.37 2.37 0 016.125 8a2.37 2.37 0 01-1.875-.917A2.375 2.375 0 010 5.625V5.37a1.5 1.5 0 01.361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 102.75 0V5.37a.5.5 0 00-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 001 5.37v.255a1.375 1.375 0 002.75 0 .5.5 0 011 0zM1.5 8.5A.5.5 0 012 9v6h1v-5a1 1 0 011-1h3a1 1 0 011 1v5h6V9a.5.5 0 011 0v6h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1V9a.5.5 0 01.5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3zm3 0h-2v3h2v-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shop-window' fill='currentColor' id='shop-window' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.97 1.35A1 1 0 013.73 1h8.54a1 1 0 01.76.35l2.609 3.044A1.5 1.5 0 0116 5.37v.255a2.375 2.375 0 01-4.25 1.458A2.371 2.371 0 019.875 8 2.37 2.37 0 018 7.083 2.37 2.37 0 016.125 8a2.37 2.37 0 01-1.875-.917A2.375 2.375 0 010 5.625V5.37a1.5 1.5 0 01.361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 002.75 0 .5.5 0 011 0 1.375 1.375 0 102.75 0V5.37a.5.5 0 00-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 001 5.37v.255a1.375 1.375 0 002.75 0 .5.5 0 011 0zM1.5 8.5A.5.5 0 012 9v6h12V9a.5.5 0 011 0v6h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1V9a.5.5 0 01.5-.5zm2 .5a.5.5 0 01.5.5V13h8V9.5a.5.5 0 011 0V13a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-shuffle' fill='currentColor' id='shuffle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 3.5A.5.5 0 01.5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 007.556 8a9.624 9.624 0 001.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 017 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 010-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 006.444 8a9.624 9.624 0 00-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 01-.5-.5z'/%3e%3cpath d='M13 5.466V1.534a.25.25 0 01.41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 01-.41-.192zm0 9v-3.932a.25.25 0 01.41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 01-.41-.192z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-signpost' fill='currentColor' id='signpost' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 1.414V4h2V1.414a1 1 0 00-2 0z'/%3e%3cpath fill-rule='evenodd' d='M12.532 5H2v4h10.532l1.666-2-1.666-2zM2 4a1 1 0 00-1 1v4a1 1 0 001 1h10.532a1 1 0 00.768-.36l1.933-2.32a.5.5 0 000-.64L13.3 4.36a1 1 0 00-.768-.36H2z'/%3e%3cpath d='M7 10h2v6H7v-6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-signpost-2' fill='currentColor' id='signpost-2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 1.414V2h2v-.586a1 1 0 00-2 0z'/%3e%3cpath fill-rule='evenodd' d='M13.5 3H2v2h11.5l.75-1-.75-1zM2 2a1 1 0 00-1 1v2a1 1 0 001 1h11.5a1 1 0 00.8-.4l.975-1.3a.5.5 0 000-.6L14.3 2.4a1 1 0 00-.8-.4H2zm.5 6H14v2H2.5l-.75-1 .75-1zM14 7a1 1 0 011 1v2a1 1 0 01-1 1H2.5a1 1 0 01-.8-.4L.725 9.3a.5.5 0 010-.6L1.7 7.4a1 1 0 01.8-.4H14z'/%3e%3cpath d='M7 6h2v1H7V6zm0 5h2v5H7v-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-signpost-2-fill' fill='currentColor' id='signpost-2-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 1.414V16h2V1.414a1 1 0 00-2 0z'/%3e%3cpath d='M1 3a1 1 0 011-1h11.5a1 1 0 01.8.4l.975 1.3a.5.5 0 010 .6L14.3 5.6a1 1 0 01-.8.4H2a1 1 0 01-1-1V3zm14 5a1 1 0 00-1-1H2.5a1 1 0 00-.8.4L.725 8.7a.5.5 0 000 .6l.975 1.3a1 1 0 00.8.4H14a1 1 0 001-1V8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-signpost-fill' fill='currentColor' id='signpost-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 1.414V4h2V1.414a1 1 0 00-2 0zM1 5a1 1 0 011-1h10.532a1 1 0 01.768.36l1.933 2.32a.5.5 0 010 .64L13.3 9.64a1 1 0 01-.768.36H2a1 1 0 01-1-1V5zm6 5h2v6H7v-6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-signpost-split' fill='currentColor' id='signpost-split' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 16h2V6H8V2h1v-.586a1 1 0 00-2 0V7h1v4H7v5z'/%3e%3cpath fill-rule='evenodd' d='M14 3H8v2h6l.75-1L14 3zM8 2a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 00.8-.4l.975-1.3a.5.5 0 000-.6L14.8 2.4A1 1 0 0014 2H8zM2 8h6v2H2l-.75-1L2 8zm6-1a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-.8-.4L.225 9.3a.5.5 0 010-.6L1.2 7.4A1 1 0 012 7h6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-signpost-split-fill' fill='currentColor' id='signpost-split-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 16h2V6h5a1 1 0 00.8-.4l.975-1.3a.5.5 0 000-.6L14.8 2.4A1 1 0 0014 2H9v-.586a1 1 0 00-2 0V7H2a1 1 0 00-.8.4L.225 8.7a.5.5 0 000 .6l.975 1.3a1 1 0 00.8.4h5v5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sim' fill='currentColor' id='sim' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 1.5A1.5 1.5 0 013.5 0h7.086a1.5 1.5 0 011.06.44l1.915 1.914A1.5 1.5 0 0114 3.414V14.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 14.5v-13zM3.5 1a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V3.414a.5.5 0 00-.146-.353l-1.915-1.915A.5.5 0 0010.586 1H3.5z'/%3e%3cpath fill-rule='evenodd' d='M5.5 4a.5.5 0 00-.5.5V6h2.5V4h-2zm3 0v2H11V4.5a.5.5 0 00-.5-.5h-2zM11 7H5v2h6V7zm0 3H8.5v2h2a.5.5 0 00.5-.5V10zm-3.5 2v-2H5v1.5a.5.5 0 00.5.5h2zM4 4.5A1.5 1.5 0 015.5 3h5A1.5 1.5 0 0112 4.5v7a1.5 1.5 0 01-1.5 1.5h-5A1.5 1.5 0 014 11.5v-7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sim-fill' fill='currentColor' id='sim-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 0A1.5 1.5 0 002 1.5v13A1.5 1.5 0 003.5 16h9a1.5 1.5 0 001.5-1.5V3.414a1.5 1.5 0 00-.44-1.06L11.647.439A1.5 1.5 0 0010.586 0H3.5zM5 4.5a.5.5 0 01.5-.5h2v2H5V4.5zM8.5 6V4h2a.5.5 0 01.5.5V6H8.5zM5 7h6v2H5V7zm3.5 3H11v1.5a.5.5 0 01-.5.5h-2v-2zm-1 0v2h-2a.5.5 0 01-.5-.5V10h2.5zm-2-7A1.5 1.5 0 004 4.5v7A1.5 1.5 0 005.5 13h5a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0010.5 3h-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-skip-backward' fill='currentColor' id='skip-backward' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M.5 3.5A.5.5 0 011 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 01-1 0V4a.5.5 0 01.5-.5zm7 1.133L1.696 8 7.5 11.367V4.633zm7.5 0L9.196 8 15 11.367V4.633z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-skip-backward-fill' fill='currentColor' id='skip-backward-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M.5 3.5A.5.5 0 000 4v8a.5.5 0 001 0V4a.5.5 0 00-.5-.5z'/%3e%3cpath d='M.904 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.692-1.01-1.233-.696L.904 7.304a.802.802 0 000 1.393z'/%3e%3cpath d='M8.404 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.693-1.01-1.233-.696L8.404 7.304a.802.802 0 000 1.393z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-skip-end' fill='currentColor' id='skip-end' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 3.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 010 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-skip-end-fill' fill='currentColor' id='skip-end-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 3.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z'/%3e%3cpath d='M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-skip-forward' fill='currentColor' id='skip-forward' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15.5 3.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 01.5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-skip-forward-fill' fill='currentColor' id='skip-forward-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15.5 3.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z'/%3e%3cpath d='M7.596 8.697l-6.363 3.692C.693 12.702 0 12.322 0 11.692V4.308c0-.63.693-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z'/%3e%3cpath d='M15.096 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.693-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-skip-start' fill='currentColor' id='skip-start' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.5 3.5A.5.5 0 004 4v8a.5.5 0 001 0V4a.5.5 0 00-.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M5.696 8L11.5 4.633v6.734L5.696 8zm-.792-.696a.802.802 0 000 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L4.904 7.304z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-skip-start-fill' fill='currentColor' id='skip-start-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.5 3.5A.5.5 0 004 4v8a.5.5 0 001 0V4a.5.5 0 00-.5-.5z'/%3e%3cpath d='M4.903 8.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V4.308c0-.63-.692-1.01-1.232-.696L4.903 7.304a.802.802 0 000 1.393z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-slash' fill='currentColor' id='slash' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.354 4.646a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708l6-6a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-slash-circle' fill='currentColor' id='slash-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M11.354 4.646a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708l6-6a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-slash-circle-fill' fill='currentColor' id='slash-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zm-4.646-2.646a.5.5 0 00-.708-.708l-6 6a.5.5 0 00.708.708l6-6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-slash-square' fill='currentColor' id='slash-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M11.354 4.646a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708l6-6a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-slash-square-fill' fill='currentColor' id='slash-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm9.354 5.354a.5.5 0 00-.708-.708l-6 6a.5.5 0 00.708.708l6-6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sliders' fill='currentColor' id='sliders' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.5 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM9.05 3a2.5 2.5 0 014.9 0H16v1h-2.05a2.5 2.5 0 01-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM2.05 8a2.5 2.5 0 014.9 0H16v1H6.95a2.5 2.5 0 01-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-2.45 1a2.5 2.5 0 014.9 0H16v1h-2.05a2.5 2.5 0 01-4.9 0H0v-1h9.05z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-smartwatch' fill='currentColor' id='smartwatch' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M14 5h.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H14V5z'/%3e%3cpath fill-rule='evenodd' d='M8.5 4.5A.5.5 0 019 5v3.5a.5.5 0 01-.5.5H6a.5.5 0 010-1h2V5a.5.5 0 01.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M4.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7A2.5 2.5 0 014.5 2zm0 1A1.5 1.5 0 003 4.5v7A1.5 1.5 0 004.5 13h7a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0011.5 3h-7z'/%3e%3cpath d='M4 2.05v-.383C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v.383a2.512 2.512 0 00-.5-.05h-7c-.171 0-.338.017-.5.05zm0 11.9c.162.033.329.05.5.05h7c.171 0 .338-.017.5-.05v.383c0 .92-.746 1.667-1.667 1.667H5.667C4.747 16 4 15.254 4 14.333v-.383z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sort-alpha-down' fill='currentColor' id='sort-alpha-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 2a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11A.5.5 0 014 2z'/%3e%3cpath fill-rule='evenodd' d='M6.354 11.146a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L4 12.793l1.646-1.647a.5.5 0 01.708 0z'/%3e%3cpath d='M9.664 7l.418-1.371h1.781L12.281 7h1.121l-1.78-5.332h-1.235L8.597 7h1.067zM11 2.687l.652 2.157h-1.351l.652-2.157H11zM9.027 14h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055l-2.578 3.719V14z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sort-alpha-down-alt' fill='currentColor' id='sort-alpha-down-alt' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 2a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11A.5.5 0 014 2z'/%3e%3cpath fill-rule='evenodd' d='M6.354 11.146a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L4 12.793l1.646-1.647a.5.5 0 01.708 0z'/%3e%3cpath d='M9.027 7h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055L9.027 6.309V7zm.637 7l.418-1.371h1.781L12.281 14h1.121l-1.78-5.332h-1.235L8.597 14h1.067zM11 9.687l.652 2.157h-1.351l.652-2.156H11z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sort-alpha-up' fill='currentColor' id='sort-alpha-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 14a.5.5 0 00.5-.5v-11a.5.5 0 00-1 0v11a.5.5 0 00.5.5z'/%3e%3cpath fill-rule='evenodd' d='M6.354 4.854a.5.5 0 000-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L4 3.207l1.646 1.647a.5.5 0 00.708 0z'/%3e%3cpath d='M9.664 7l.418-1.371h1.781L12.281 7h1.121l-1.78-5.332h-1.235L8.597 7h1.067zM11 2.687l.652 2.157h-1.351l.652-2.157H11zM9.027 14h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055l-2.578 3.719V14z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sort-alpha-up-alt' fill='currentColor' id='sort-alpha-up-alt' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 14a.5.5 0 00.5-.5v-11a.5.5 0 00-1 0v11a.5.5 0 00.5.5z'/%3e%3cpath fill-rule='evenodd' d='M6.354 4.854a.5.5 0 000-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L4 3.207l1.646 1.647a.5.5 0 00.708 0z'/%3e%3cpath d='M9.027 7h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055L9.027 6.309V7zm.637 7l.418-1.371h1.781L12.281 14h1.121l-1.78-5.332h-1.235L8.597 14h1.067zM11 9.687l.652 2.157h-1.351l.652-2.156H11z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sort-down' fill='currentColor' id='sort-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 2a.5.5 0 01.5.5v10a.5.5 0 01-1 0v-10A.5.5 0 013 2z'/%3e%3cpath fill-rule='evenodd' d='M5.354 10.146a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L3 11.793l1.646-1.647a.5.5 0 01.708 0zM7 9.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 9a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sort-down-alt' fill='currentColor' id='sort-down-alt' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 3a.5.5 0 01.5.5v10a.5.5 0 01-1 0v-10A.5.5 0 013 3z'/%3e%3cpath fill-rule='evenodd' d='M5.354 11.146a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L3 12.793l1.646-1.647a.5.5 0 01.708 0zM7 6.5a.5.5 0 00.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5zm0 3a.5.5 0 00.5.5h5a.5.5 0 000-1h-5a.5.5 0 00-.5.5zm0 3a.5.5 0 00.5.5h7a.5.5 0 000-1h-7a.5.5 0 00-.5.5zm0-9a.5.5 0 00.5.5h1a.5.5 0 000-1h-1a.5.5 0 00-.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sort-numeric-down' fill='currentColor' id='sort-numeric-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 2a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11A.5.5 0 014 2z'/%3e%3cpath fill-rule='evenodd' d='M6.354 11.146a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L4 12.793l1.646-1.647a.5.5 0 01.708 0z'/%3e%3cpath d='M12.438 7V1.668H11.39l-1.262.906v.969l1.21-.86h.052V7h1.046zm-2.84 5.82c.054.621.625 1.278 1.761 1.278 1.422 0 2.145-.98 2.145-2.848 0-2.05-.973-2.688-2.063-2.688-1.125 0-1.972.688-1.972 1.836 0 1.145.808 1.758 1.719 1.758.69 0 1.113-.351 1.261-.742h.059c.031 1.027-.309 1.856-1.133 1.856-.43 0-.715-.227-.773-.45H9.598zm2.757-2.43c0 .637-.43.973-.933.973-.516 0-.934-.34-.934-.98 0-.625.407-1 .926-1 .543 0 .941.375.941 1.008z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sort-numeric-down-alt' fill='currentColor' id='sort-numeric-down-alt' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 2a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11A.5.5 0 014 2z'/%3e%3cpath fill-rule='evenodd' d='M6.354 11.146a.5.5 0 010 .708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L4 12.793l1.646-1.647a.5.5 0 01.708 0z'/%3e%3cpath d='M9.598 5.82c.054.621.625 1.278 1.761 1.278 1.422 0 2.145-.98 2.145-2.848 0-2.05-.973-2.688-2.063-2.688-1.125 0-1.972.688-1.972 1.836 0 1.145.808 1.758 1.719 1.758.69 0 1.113-.351 1.261-.742h.059c.031 1.027-.309 1.856-1.133 1.856-.43 0-.715-.227-.773-.45H9.598zm2.757-2.43c0 .637-.43.973-.933.973-.516 0-.934-.34-.934-.98 0-.625.407-1 .926-1 .543 0 .941.375.941 1.008zM12.438 14V8.668H11.39l-1.262.906v.969l1.21-.86h.052V14h1.046z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sort-numeric-up' fill='currentColor' id='sort-numeric-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 14a.5.5 0 00.5-.5v-11a.5.5 0 00-1 0v11a.5.5 0 00.5.5z'/%3e%3cpath fill-rule='evenodd' d='M6.354 4.854a.5.5 0 000-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L4 3.207l1.646 1.647a.5.5 0 00.708 0z'/%3e%3cpath d='M12.438 7V1.668H11.39l-1.262.906v.969l1.21-.86h.052V7h1.046zm-2.84 5.82c.054.621.625 1.278 1.761 1.278 1.422 0 2.145-.98 2.145-2.848 0-2.05-.973-2.688-2.063-2.688-1.125 0-1.972.688-1.972 1.836 0 1.145.808 1.758 1.719 1.758.69 0 1.113-.351 1.261-.742h.059c.031 1.027-.309 1.856-1.133 1.856-.43 0-.715-.227-.773-.45H9.598zm2.757-2.43c0 .637-.43.973-.933.973-.516 0-.934-.34-.934-.98 0-.625.407-1 .926-1 .543 0 .941.375.941 1.008z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sort-numeric-up-alt' fill='currentColor' id='sort-numeric-up-alt' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 14a.5.5 0 00.5-.5v-11a.5.5 0 00-1 0v11a.5.5 0 00.5.5z'/%3e%3cpath fill-rule='evenodd' d='M6.354 4.854a.5.5 0 000-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L4 3.207l1.646 1.647a.5.5 0 00.708 0z'/%3e%3cpath d='M9.598 5.82c.054.621.625 1.278 1.761 1.278 1.422 0 2.145-.98 2.145-2.848 0-2.05-.973-2.688-2.063-2.688-1.125 0-1.972.688-1.972 1.836 0 1.145.808 1.758 1.719 1.758.69 0 1.113-.351 1.261-.742h.059c.031 1.027-.309 1.856-1.133 1.856-.43 0-.715-.227-.773-.45H9.598zm2.757-2.43c0 .637-.43.973-.933.973-.516 0-.934-.34-.934-.98 0-.625.407-1 .926-1 .543 0 .941.375.941 1.008zM12.438 14V8.668H11.39l-1.262.906v.969l1.21-.86h.052V14h1.046z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sort-up' fill='currentColor' id='sort-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 13a.5.5 0 00.5-.5v-10a.5.5 0 00-1 0v10a.5.5 0 00.5.5z'/%3e%3cpath fill-rule='evenodd' d='M5.354 4.854a.5.5 0 000-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L3 3.207l1.646 1.647a.5.5 0 00.708 0zM7 9.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 9a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sort-up-alt' fill='currentColor' id='sort-up-alt' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 14a.5.5 0 00.5-.5v-10a.5.5 0 00-1 0v10a.5.5 0 00.5.5z'/%3e%3cpath fill-rule='evenodd' d='M5.354 5.854a.5.5 0 000-.708l-2-2a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L3 4.207l1.646 1.647a.5.5 0 00.708 0zM7 6.5a.5.5 0 00.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5zm0 3a.5.5 0 00.5.5h5a.5.5 0 000-1h-5a.5.5 0 00-.5.5zm0 3a.5.5 0 00.5.5h7a.5.5 0 000-1h-7a.5.5 0 00-.5.5zm0-9a.5.5 0 00.5.5h1a.5.5 0 000-1h-1a.5.5 0 00-.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-soundwave' fill='currentColor' id='soundwave' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.5 2a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11a.5.5 0 01.5-.5zm-2 2a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zm-6 1.5A.5.5 0 015 6v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm8 0a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm-10 1A.5.5 0 013 7v2a.5.5 0 01-1 0V7a.5.5 0 01.5-.5zm12 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0V7a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-speaker' fill='currentColor' id='speaker' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1zM4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4z'/%3e%3cpath fill-rule='evenodd' d='M8 4.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8 6a2 2 0 100-4 2 2 0 000 4zm0 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-3.5 1.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-speaker-fill' fill='currentColor' id='speaker-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9 4a1 1 0 11-2 0 1 1 0 012 0zm-2.5 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z'/%3e%3cpath fill-rule='evenodd' d='M4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4zm6 4a2 2 0 11-4 0 2 2 0 014 0zM8 7a3.5 3.5 0 100 7 3.5 3.5 0 000-7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-spellcheck' fill='currentColor' id='spellcheck' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.217 11.068c1.216 0 1.948-.869 1.948-2.31v-.702c0-1.44-.727-2.305-1.929-2.305-.742 0-1.328.347-1.499.889h-.063V3.983h-1.29V11h1.27v-.791h.064c.21.532.776.86 1.499.86zm-.43-1.025c-.66 0-1.113-.518-1.113-1.28V8.12c0-.825.42-1.343 1.098-1.343.684 0 1.075.518 1.075 1.416v.45c0 .888-.386 1.401-1.06 1.401zm-5.583 1.035c.767 0 1.201-.356 1.406-.737h.059V11h1.216V7.519c0-1.314-.947-1.783-2.11-1.783C1.355 5.736.75 6.42.69 7.27h1.216c.064-.323.313-.552.84-.552.527 0 .864.249.864.771v.464H2.346C1.145 7.953.5 8.568.5 9.496c0 .977.693 1.582 1.704 1.582zm.42-.947c-.44 0-.845-.235-.845-.718 0-.395.269-.684.84-.684h.991v.538c0 .503-.444.864-.986.864zm8.897.567c-.577-.4-.9-1.088-.9-1.983v-.65c0-1.42.894-2.338 2.305-2.338 1.352 0 2.119.82 2.139 1.806h-1.187c-.04-.351-.283-.776-.918-.776-.674 0-1.045.517-1.045 1.328v.625c0 .468.121.834.343 1.067l-.737.92z'/%3e%3cpath fill-rule='evenodd' d='M14.469 9.414a.75.75 0 01.117 1.055l-4 5a.75.75 0 01-1.116.061l-2.5-2.5a.75.75 0 111.06-1.06l1.908 1.907 3.476-4.346a.75.75 0 011.055-.117z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-square' fill='currentColor' id='square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-square-fill' fill='currentColor' id='square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-square-half' fill='currentColor' id='square-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1h6a1 1 0 011 1v12a1 1 0 01-1 1H8V1zm6-1a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h12z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-star' fill='currentColor' id='star' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-star-fill' fill='currentColor' id='star-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-star-half' fill='currentColor' id='star-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5.354 5.119L7.538.792A.516.516 0 018 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0116 6.32a.55.55 0 01-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 01-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 01-.171-.403.59.59 0 01.084-.302.513.513 0 01.37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 01.163-.505l2.906-2.77-4.052-.576a.525.525 0 01-.393-.288L8.002 2.223 8 2.226v9.8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-stickies' fill='currentColor' id='stickies' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A1.5 1.5 0 011.5 0H13a1 1 0 011 1H1.5a.5.5 0 00-.5.5V14a1 1 0 01-1-1V1.5z'/%3e%3cpath fill-rule='evenodd' d='M2 3.5A1.5 1.5 0 013.5 2h11A1.5 1.5 0 0116 3.5v6.086a1.5 1.5 0 01-.44 1.06l-4.914 4.915a1.5 1.5 0 01-1.06.439H3.5A1.5 1.5 0 012 14.5v-11zM3.5 3a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h6.086a.5.5 0 00.353-.146l4.915-4.915A.5.5 0 0015 9.586V3.5a.5.5 0 00-.5-.5h-11z'/%3e%3cpath fill-rule='evenodd' d='M10.5 10a.5.5 0 00-.5.5v5H9v-5A1.5 1.5 0 0110.5 9h5v1h-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-stickies-fill' fill='currentColor' id='stickies-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1.5A1.5 1.5 0 011.5 0H13a1 1 0 011 1H1.5a.5.5 0 00-.5.5V14a1 1 0 01-1-1V1.5z'/%3e%3cpath fill-rule='evenodd' d='M3.5 2A1.5 1.5 0 002 3.5v11A1.5 1.5 0 003.5 16h6.086a1.5 1.5 0 001.06-.44l4.915-4.914A1.5 1.5 0 0016 9.586V3.5A1.5 1.5 0 0014.5 2h-11zm6 8.5v4.396c0 .223.27.335.427.177l5.146-5.146a.25.25 0 00-.177-.427H10.5a1 1 0 00-1 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sticky' fill='currentColor' id='sticky' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 2.5A1.5 1.5 0 012.5 1h11A1.5 1.5 0 0115 2.5v6.086a1.5 1.5 0 01-.44 1.06l-4.914 4.915a1.5 1.5 0 01-1.06.439H2.5A1.5 1.5 0 011 13.5v-11zM2.5 2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h6.086a.5.5 0 00.353-.146l4.915-4.915A.5.5 0 0014 8.586V2.5a.5.5 0 00-.5-.5h-11z'/%3e%3cpath fill-rule='evenodd' d='M9.5 9a.5.5 0 00-.5.5v5H8v-5A1.5 1.5 0 019.5 8h5v1h-5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sticky-fill' fill='currentColor' id='sticky-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.5 1A1.5 1.5 0 001 2.5v11A1.5 1.5 0 002.5 15h6.086a1.5 1.5 0 001.06-.44l4.915-4.914A1.5 1.5 0 0015 8.586V2.5A1.5 1.5 0 0013.5 1h-11zm6 8.5v4.396c0 .223.27.335.427.177l5.146-5.146a.25.25 0 00-.177-.427H9.5a1 1 0 00-1 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-stop' fill='currentColor' id='stop' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 5A1.5 1.5 0 015 3.5h6A1.5 1.5 0 0112.5 5v6a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 11V5zM5 4.5a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V5a.5.5 0 00-.5-.5H5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-stop-fill' fill='currentColor' id='stop-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5 3.5h6A1.5 1.5 0 0112.5 5v6a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 11V5A1.5 1.5 0 015 3.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-stoplights' fill='currentColor' id='stoplights' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9.5 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3cpath fill-rule='evenodd' d='M10 1H6a1 1 0 00-1 1v11a1 1 0 001 1h4a1 1 0 001-1V2a1 1 0 00-1-1zM6 0a2 2 0 00-2 2v11a2 2 0 002 2h4a2 2 0 002-2V2a2 2 0 00-2-2H6z'/%3e%3cpath d='M14 2h-2v2c1.2-.4 1.833-1.5 2-2zM2 2h2v2c-1.2-.4-1.833-1.5-2-2zm12 4h-2v2c1.2-.4 1.833-1.5 2-2zM2 6h2v2c-1.2-.4-1.833-1.5-2-2zm12 4h-2v2c1.2-.4 1.833-1.5 2-2zM2 10h2v2c-1.2-.4-1.833-1.5-2-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-stoplights-fill' fill='currentColor' id='stoplights-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 0a2 2 0 00-2 2v11a2 2 0 002 2h4a2 2 0 002-2V2a2 2 0 00-2-2H6zm3.5 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3cpath d='M14 2h-2v2c1.2-.4 1.833-1.5 2-2zM2 2h2v2c-1.2-.4-1.833-1.5-2-2zm12 4h-2v2c1.2-.4 1.833-1.5 2-2zM2 6h2v2c-1.2-.4-1.833-1.5-2-2zm12 4h-2v2c1.2-.4 1.833-1.5 2-2zM2 10h2v2c-1.2-.4-1.833-1.5-2-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-stopwatch' fill='currentColor' id='stopwatch' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 .5a.5.5 0 01.5-.5h3a.5.5 0 010 1H9v1.07A7.001 7.001 0 018 16 7 7 0 017 2.07V1h-.5A.5.5 0 016 .5zM8 3a6 6 0 10.001 12A6 6 0 008 3zm0 2.1a.5.5 0 01.5.5V9a.5.5 0 01-.5.5H4.5a.5.5 0 010-1h3V5.6a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-stopwatch-fill' fill='currentColor' id='stopwatch-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.5 0a.5.5 0 000 1H7v1.07A7.001 7.001 0 008 16 7 7 0 009 2.07V1h.5a.5.5 0 000-1h-3zm2 5.6a.5.5 0 10-1 0v2.9h-3a.5.5 0 000 1H8a.5.5 0 00.5-.5V5.6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-subtract' fill='currentColor' id='subtract' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h8a2 2 0 012 2v2h2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-2H2a2 2 0 01-2-2V2zm2-1a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-suit-club' fill='currentColor' id='suit-club' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 1a3.25 3.25 0 00-3.25 3.25c0 .186 0 .29.016.41.014.12.045.27.12.527l.19.665-.692-.028a3.25 3.25 0 102.357 5.334.5.5 0 01.844.518l-.003.005-.006.015-.024.055a21.893 21.893 0 01-.438.92 22.38 22.38 0 01-1.266 2.197c-.013.018-.02.05.001.09.01.02.021.03.03.036A.036.036 0 005.9 15h4.2c.01 0 .016-.002.022-.006a.092.092 0 00.029-.035c.02-.04.014-.073.001-.091a22.875 22.875 0 01-1.704-3.117l-.024-.054-.006-.015-.002-.004a.5.5 0 01.838-.524c.601.7 1.516 1.168 2.496 1.168a3.25 3.25 0 10-.139-6.498l-.699.03.199-.671c.14-.47.14-.745.139-.927V4.25A3.25 3.25 0 008 1zm2.207 12.024c.225.405.487.848.78 1.294C11.437 15 10.975 16 10.1 16H5.9c-.876 0-1.338-1-.887-1.683.291-.442.552-.88.776-1.283a4.25 4.25 0 11-2.007-8.187 2.79 2.79 0 01-.009-.064c-.023-.187-.023-.348-.023-.52V4.25a4.25 4.25 0 018.5 0c0 .14 0 .333-.04.596a4.25 4.25 0 01-.46 8.476 4.186 4.186 0 01-1.543-.298z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-suit-club-fill' fill='currentColor' id='suit-club-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M11.5 4.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z'/%3e%3cpath d='M8 9a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm7 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z'/%3e%3cpath d='M5.602 14.153c.5-.758 1.224-1.98 1.83-3.498.187-.467.949-.467 1.136 0a19.816 19.816 0 001.83 3.498c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847z'/%3e%3cpath d='M7 7h2v4H7V7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-suit-diamond' fill='currentColor' id='suit-diamond' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.384 1.226a.463.463 0 00-.768 0l-4.56 6.468a.537.537 0 000 .612l4.56 6.469a.463.463 0 00.768 0l4.56-6.469a.537.537 0 000-.612l-4.56-6.468zM6.848.613a1.39 1.39 0 012.304 0l4.56 6.468a1.61 1.61 0 010 1.838l-4.56 6.468a1.39 1.39 0 01-2.304 0L2.288 8.92a1.61 1.61 0 010-1.838L6.848.613z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-suit-diamond-fill' fill='currentColor' id='suit-diamond-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.45 7.4L7.2 1.067a1 1 0 011.6 0L13.55 7.4a1 1 0 010 1.2L8.8 14.933a1 1 0 01-1.6 0L2.45 8.6a1 1 0 010-1.2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-suit-heart' fill='currentColor' id='suit-heart' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 01-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 01.596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-suit-heart-fill' fill='currentColor' id='suit-heart-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 01-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-suit-spade' fill='currentColor' id='suit-spade' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a.5.5 0 01.429.243c1.359 2.265 2.925 3.682 4.25 4.882.096.086.19.17.282.255C14.308 6.604 15.5 7.747 15.5 9.5a4 4 0 01-5.406 3.746c.235.39.491.782.722 1.131.434.659-.01 1.623-.856 1.623H6.04c-.845 0-1.29-.964-.856-1.623.263-.397.51-.777.728-1.134A4 4 0 01.5 9.5c0-1.753 1.192-2.896 2.539-4.12l.281-.255c1.326-1.2 2.892-2.617 4.251-4.882A.5.5 0 018 0zM3.711 6.12C2.308 7.396 1.5 8.253 1.5 9.5a3 3 0 005.275 1.956.5.5 0 01.868.43c-.094.438-.33.932-.611 1.428a29.247 29.247 0 01-1.013 1.614.03.03 0 00-.005.018.074.074 0 00.024.054h3.924a.074.074 0 00.024-.054.03.03 0 00-.005-.018c-.3-.455-.658-1.005-.96-1.535-.294-.514-.57-1.064-.664-1.507a.5.5 0 01.868-.43A3 3 0 0014.5 9.5c0-1.247-.808-2.104-2.211-3.38L12 5.86c-1.196-1.084-2.668-2.416-4-4.424-1.332 2.008-2.804 3.34-4 4.422l-.289.261z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-suit-spade-fill' fill='currentColor' id='suit-spade-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.602 14.153C6.272 13.136 7.348 11.28 8 9c.652 2.28 1.727 4.136 2.398 5.153.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847z'/%3e%3cpath d='M4.5 12.5A3.5 3.5 0 008 9a3.5 3.5 0 107 0c0-3-4-4-7-9-3 5-7 6-7 9a3.5 3.5 0 003.5 3.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sun' fill='currentColor' id='sun' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3.5 8a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z'/%3e%3cpath fill-rule='evenodd' d='M8.202.28a.25.25 0 00-.404 0l-.91 1.255a.25.25 0 01-.334.067L5.232.79a.25.25 0 00-.374.155l-.36 1.508a.25.25 0 01-.282.19l-1.532-.245a.25.25 0 00-.286.286l.244 1.532a.25.25 0 01-.189.282l-1.509.36a.25.25 0 00-.154.374l.812 1.322a.25.25 0 01-.067.333l-1.256.91a.25.25 0 000 .405l1.256.91a.25.25 0 01.067.334L.79 10.768a.25.25 0 00.154.374l1.51.36a.25.25 0 01.188.282l-.244 1.532a.25.25 0 00.286.286l1.532-.244a.25.25 0 01.282.189l.36 1.508a.25.25 0 00.374.155l1.322-.812a.25.25 0 01.333.067l.91 1.256a.25.25 0 00.405 0l.91-1.256a.25.25 0 01.334-.067l1.322.812a.25.25 0 00.374-.155l.36-1.508a.25.25 0 01.282-.19l1.532.245a.25.25 0 00.286-.286l-.244-1.532a.25.25 0 01.189-.282l1.508-.36a.25.25 0 00.155-.374l-.812-1.322a.25.25 0 01.067-.333l1.256-.91a.25.25 0 000-.405l-1.256-.91a.25.25 0 01-.067-.334l.812-1.322a.25.25 0 00-.155-.374l-1.508-.36a.25.25 0 01-.19-.282l.245-1.532a.25.25 0 00-.286-.286l-1.532.244a.25.25 0 01-.282-.189l-.36-1.508a.25.25 0 00-.374-.155l-1.322.812a.25.25 0 01-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-sunglasses' fill='currentColor' id='sunglasses' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 5a2 2 0 00-2 2v.5H.5a.5.5 0 000 1H1V9a2 2 0 002 2h1a3 3 0 003-3 1 1 0 112 0 3 3 0 003 3h1a2 2 0 002-2v-.5h.5a.5.5 0 000-1H15V7a2 2 0 00-2-2h-2a2 2 0 00-1.888 1.338A1.99 1.99 0 008 6a1.99 1.99 0 00-1.112.338A2 2 0 005 5H3zm0 1a1 1 0 00-1 1v.941c0 .264.356.348.474.112l.228-.457a2 2 0 01.894-.894l.457-.228C4.289 6.356 4.205 6 3.94 6H3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-table' fill='currentColor' id='table' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 001-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 001 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-tablet' fill='currentColor' id='tablet' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1zM4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4z'/%3e%3cpath fill-rule='evenodd' d='M8 14a1 1 0 100-2 1 1 0 000 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-tablet-fill' fill='currentColor' id='tablet-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm7 11a1 1 0 11-2 0 1 1 0 012 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-tablet-landscape' fill='currentColor' id='tablet-landscape' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1 4v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H2a1 1 0 00-1 1zm-1 8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2a2 2 0 00-2 2v8z'/%3e%3cpath fill-rule='evenodd' d='M14 8a1 1 0 10-2 0 1 1 0 002 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-tablet-landscape-fill' fill='currentColor' id='tablet-landscape-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 14a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2zm11-7a1 1 0 110 2 1 1 0 010-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-tag' fill='currentColor' id='tag' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 2v4.586l7 7L13.586 9l-7-7H2zM1 2a1 1 0 011-1h4.586a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0l-7-7A1 1 0 011 6.586V2z'/%3e%3cpath fill-rule='evenodd' d='M4.5 5a.5.5 0 100-1 .5.5 0 000 1zm0 1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-tag-fill' fill='currentColor' id='tag-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 1a1 1 0 00-1 1v4.586a1 1 0 00.293.707l7 7a1 1 0 001.414 0l4.586-4.586a1 1 0 000-1.414l-7-7A1 1 0 006.586 1H2zm4 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-tags' fill='currentColor' id='tags' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 011-1h4.586a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0l-7-7A1 1 0 012 6.586V2z'/%3e%3cpath fill-rule='evenodd' d='M5.5 5a.5.5 0 100-1 .5.5 0 000 1zm0 1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3cpath d='M1 7.086a1 1 0 00.293.707L8.75 15.25l-.043.043a1 1 0 01-1.414 0l-7-7A1 1 0 010 7.586V3a1 1 0 011-1v5.086z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-tags-fill' fill='currentColor' id='tags-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 1a1 1 0 00-1 1v4.586a1 1 0 00.293.707l7 7a1 1 0 001.414 0l4.586-4.586a1 1 0 000-1.414l-7-7A1 1 0 007.586 1H3zm4 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3cpath d='M1 7.086a1 1 0 00.293.707L8.75 15.25l-.043.043a1 1 0 01-1.414 0l-7-7A1 1 0 010 7.586V3a1 1 0 011-1v5.086z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone' fill='currentColor' id='telephone' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone-fill' fill='currentColor' id='telephone-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.267.98a1.636 1.636 0 012.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 00.167.604L8.65 9.654a.636.636 0 00.604.167l2.052-.513a1.636 1.636 0 011.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 01-6.571-4.144A17.47 17.47 0 01.639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone-forward' fill='currentColor' id='telephone-forward' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 01.708 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 01-.708-.708L14.293 4H9.5a.5.5 0 010-1h4.793l-1.647-1.646a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone-forward-fill' fill='currentColor' id='telephone-forward-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 01.708 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 01-.708-.708L14.293 4H9.5a.5.5 0 010-1h4.793l-1.647-1.646a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone-inbound' fill='currentColor' id='telephone-inbound' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M15.854.146a.5.5 0 010 .708L11.707 5H14.5a.5.5 0 010 1h-4a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v2.793L15.146.146a.5.5 0 01.708 0zm-12.2 1.182a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone-inbound-fill' fill='currentColor' id='telephone-inbound-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 010 .708L11.707 5H14.5a.5.5 0 010 1h-4a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v2.793L15.146.146a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone-minus' fill='currentColor' id='telephone-minus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM10 3.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone-minus-fill' fill='currentColor' id='telephone-minus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM10 3.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone-outbound' fill='currentColor' id='telephone-outbound' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V1.707l-4.146 4.147a.5.5 0 01-.708-.708L14.293 1H11.5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone-outbound-fill' fill='currentColor' id='telephone-outbound-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V1.707l-4.146 4.147a.5.5 0 01-.708-.708L14.293 1H11.5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone-plus' fill='currentColor' id='telephone-plus' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 01.5.5V3h1.5a.5.5 0 010 1H13v1.5a.5.5 0 01-1 0V4h-1.5a.5.5 0 010-1H12V1.5a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone-plus-fill' fill='currentColor' id='telephone-plus-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 01.5.5V3h1.5a.5.5 0 010 1H13v1.5a.5.5 0 01-1 0V4h-1.5a.5.5 0 010-1H12V1.5a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone-x' fill='currentColor' id='telephone-x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm9.262 1.135a.5.5 0 01.708 0L13 2.793l1.146-1.147a.5.5 0 01.708.708L13.707 3.5l1.147 1.146a.5.5 0 01-.708.708L13 4.207l-1.146 1.147a.5.5 0 01-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-telephone-x-fill' fill='currentColor' id='telephone-x-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm9.261 1.135a.5.5 0 01.708 0L13 2.793l1.146-1.147a.5.5 0 01.708.708L13.707 3.5l1.147 1.146a.5.5 0 01-.708.708L13 4.207l-1.146 1.147a.5.5 0 01-.708-.708L12.293 3.5l-1.147-1.146a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-terminal' fill='currentColor' id='terminal' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M6 9a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3A.5.5 0 016 9zM3.146 4.146a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 11-.708-.708L4.793 6.5 3.146 4.854a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-terminal-fill' fill='currentColor' id='terminal-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 3a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm9.5 5.5h-3a.5.5 0 000 1h3a.5.5 0 000-1zm-6.354-.354L4.793 6.5 3.146 4.854a.5.5 0 11.708-.708l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-text-center' fill='currentColor' id='text-center' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm2-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-text-indent-left' fill='currentColor' id='text-indent-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm.646 2.146a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L4.293 8 2.646 6.354a.5.5 0 010-.708zM7 6.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm-5 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-text-indent-right' fill='currentColor' id='text-indent-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm10.646 2.146a.5.5 0 01.708.708L11.707 8l1.647 1.646a.5.5 0 01-.708.708l-2-2a.5.5 0 010-.708l2-2zM2 6.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-text-left' fill='currentColor' id='text-left' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-text-paragraph' fill='currentColor' id='text-paragraph' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm4-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-text-right' fill='currentColor' id='text-right' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-4-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm4-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-4-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-textarea' fill='currentColor' id='textarea' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.5 2.5A1.5 1.5 0 013 1h10a1.5 1.5 0 011.5 1.5v3.563a2 2 0 010 3.874V13.5A1.5 1.5 0 0113 15H3a1.5 1.5 0 01-1.5-1.5V9.937a2 2 0 010-3.874V2.5zm1 3.563a2 2 0 010 3.874V13.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V9.937a2 2 0 010-3.874V2.5A.5.5 0 0013 2H3a.5.5 0 00-.5.5v3.563zM2 7a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-textarea-resize' fill='currentColor' id='textarea-resize' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 3.5A2.5 2.5 0 012.5 1h11A2.5 2.5 0 0116 3.5v8.854a2.5 2.5 0 01-2.5 2.5h-11a2.5 2.5 0 01-2.5-2.5V3.5zM2.5 2A1.5 1.5 0 001 3.5v8.854a1.5 1.5 0 001.5 1.5h11a1.5 1.5 0 001.5-1.5V3.5A1.5 1.5 0 0013.5 2h-11zm10.854 6.5a.5.5 0 010 .707l-3 3a.5.5 0 11-.708-.707l3-3a.5.5 0 01.708 0zm0 2.5a.5.5 0 010 .707l-.5.5a.5.5 0 01-.708-.707l.5-.5a.5.5 0 01.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-textarea-t' fill='currentColor' id='textarea-t' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.5 2.5A1.5 1.5 0 013 1h10a1.5 1.5 0 011.5 1.5v3.563a2 2 0 010 3.874V13.5A1.5 1.5 0 0113 15H3a1.5 1.5 0 01-1.5-1.5V9.937a2 2 0 010-3.874V2.5zm1 3.563a2 2 0 010 3.874V13.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V9.937a2 2 0 010-3.874V2.5A.5.5 0 0013 2H3a.5.5 0 00-.5.5v3.563zM2 7a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z'/%3e%3cpath d='M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-thermometer' fill='currentColor' id='thermometer' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 2a2 2 0 114 0v7.627a3.5 3.5 0 11-4 0V2zm2-1a1 1 0 00-1 1v7.901a.5.5 0 01-.25.433A2.499 2.499 0 008 15a2.5 2.5 0 001.25-4.666.5.5 0 01-.25-.433V2a1 1 0 00-1-1z'/%3e%3cpath d='M9.5 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-thermometer-half' fill='currentColor' id='thermometer-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6 2a2 2 0 114 0v7.627a3.5 3.5 0 11-4 0V2zm2-1a1 1 0 00-1 1v7.901a.5.5 0 01-.25.433A2.499 2.499 0 008 15a2.5 2.5 0 001.25-4.666.5.5 0 01-.25-.433V2a1 1 0 00-1-1z'/%3e%3cpath d='M8.25 2a.25.25 0 00-.5 0v9.02a1.514 1.514 0 01.5 0V2z'/%3e%3cpath d='M9.5 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-three-dots' fill='currentColor' id='three-dots' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-three-dots-vertical' fill='currentColor' id='three-dots-vertical' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-toggle-off' fill='currentColor' id='toggle-off' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11 4a4 4 0 010 8H8a4.992 4.992 0 002-4 4.992 4.992 0 00-2-4h3zm-6 8a4 4 0 110-8 4 4 0 010 8zM0 8a5 5 0 005 5h6a5 5 0 000-10H5a5 5 0 00-5 5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-toggle-on' fill='currentColor' id='toggle-on' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M5 3a5 5 0 000 10h6a5 5 0 000-10H5zm6 9a4 4 0 100-8 4 4 0 000 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-toggle2-off' fill='currentColor' id='toggle2-off' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 00-1-3h4a3 3 0 110 6H9z'/%3e%3cpath fill-rule='evenodd' d='M5 12a4 4 0 100-8 4 4 0 000 8zm0 1A5 5 0 105 3a5 5 0 000 10z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-toggle2-on' fill='currentColor' id='toggle2-on' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 5H3a3 3 0 000 6h4a4.995 4.995 0 01-.584-1H3a2 2 0 110-4h3.416c.156-.357.352-.692.584-1z'/%3e%3cpath d='M16 8A5 5 0 116 8a5 5 0 0110 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-toggles' fill='currentColor' id='toggles' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.5 9a3.5 3.5 0 100 7h7a3.5 3.5 0 100-7h-7zm7 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-7-14a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm2.45 0A3.49 3.49 0 018 3.5 3.49 3.49 0 016.95 6h4.55a2.5 2.5 0 000-5H6.95zM4.5 0h7a3.5 3.5 0 110 7h-7a3.5 3.5 0 110-7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-toggles2' fill='currentColor' id='toggles2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 4a2 2 0 012-2h8a2 2 0 110 4H4a2 2 0 01-2-2zm2-1a1 1 0 000 2h8a1 1 0 100-2H4z'/%3e%3cpath d='M14 4a4 4 0 11-8 0 4 4 0 018 0z'/%3e%3cpath fill-rule='evenodd' d='M9.465 10H12a2 2 0 110 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z'/%3e%3cpath fill-rule='evenodd' d='M6 15a3 3 0 110-6 3 3 0 010 6zm0 1a4 4 0 110-8 4 4 0 010 8z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-tools' fill='currentColor' id='tools' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 1l1-1 3.081 2.2a1 1 0 01.419.815v.07a1 1 0 00.293.708L10.5 9.5l.914-.305a1 1 0 011.023.242l3.356 3.356a1 1 0 010 1.414l-1.586 1.586a1 1 0 01-1.414 0l-3.356-3.356a1 1 0 01-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 00-.707-.293h-.071a1 1 0 01-.814-.419L0 1zm11.354 9.646a.5.5 0 00-.708.708l3 3a.5.5 0 00.708-.708l-3-3z'/%3e%3cpath fill-rule='evenodd' d='M15.898 2.223a3.003 3.003 0 01-3.679 3.674L5.878 12.15a3 3 0 11-2.027-2.027l6.252-6.341A3 3 0 0113.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-trash' fill='currentColor' id='trash' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z'/%3e%3cpath fill-rule='evenodd' d='M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-trash-fill' fill='currentColor' id='trash-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-trash2' fill='currentColor' id='trash2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.18 4l1.528 9.164a1 1 0 00.986.836h4.612a1 1 0 00.986-.836L12.82 4H3.18zm.541 9.329A2 2 0 005.694 15h4.612a2 2 0 001.973-1.671L14 3H2l1.721 10.329z'/%3e%3cpath d='M14 3c0 1.105-2.686 2-6 2s-6-.895-6-2 2.686-2 6-2 6 .895 6 2z'/%3e%3cpath fill-rule='evenodd' d='M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-trash2-fill' fill='currentColor' id='trash2-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.037 3.225l1.684 10.104A2 2 0 005.694 15h4.612a2 2 0 001.973-1.671l1.684-10.104C13.627 4.224 11.085 5 8 5c-3.086 0-5.627-.776-5.963-1.775z'/%3e%3cpath fill-rule='evenodd' d='M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-tree' fill='currentColor' id='tree' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a.5.5 0 01.416.223l3 4.5A.5.5 0 0111 5.5h-.098l2.022 3.235a.5.5 0 01-.424.765h-.191l1.638 3.276a.5.5 0 01-.447.724h-11a.5.5 0 01-.447-.724L3.69 9.5H3.5a.5.5 0 01-.424-.765L5.098 5.5H5a.5.5 0 01-.416-.777l3-4.5A.5.5 0 018 0zM5.934 4.5H6a.5.5 0 01.424.765L4.402 8.5H4.5a.5.5 0 01.447.724L3.31 12.5h9.382l-1.638-3.276A.5.5 0 0111.5 8.5h.098L9.576 5.265A.5.5 0 0110 4.5h.066L8 1.401 5.934 4.5z'/%3e%3cpath d='M7 13.5h2V16H7v-2.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-tree-fill' fill='currentColor' id='tree-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a.5.5 0 01.416.223l3 4.5A.5.5 0 0111 5.5h-.098l2.022 3.235a.5.5 0 01-.424.765h-.191l1.638 3.276a.5.5 0 01-.447.724h-11a.5.5 0 01-.447-.724L3.69 9.5H3.5a.5.5 0 01-.424-.765L5.098 5.5H5a.5.5 0 01-.416-.777l3-4.5A.5.5 0 018 0z'/%3e%3cpath d='M7 13.5h2V16H7v-2.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-triangle' fill='currentColor' id='triangle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.938 2.016a.146.146 0 00-.054.057L1.027 13.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L8.12 2.073a.146.146 0 00-.054-.057A.13.13 0 008.002 2a.13.13 0 00-.064.016zm1.044-.45a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-triangle-fill' fill='currentColor' id='triangle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7.022 1.566a1.13 1.13 0 011.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-triangle-half' fill='currentColor' id='triangle-half' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.065 2.016a.146.146 0 01.054.057l6.857 11.667c.036.06.035.124.002.183a.162.162 0 01-.054.06.115.115 0 01-.066.017l-6.856-.017V2a.13.13 0 01.063.016zm-1.043-.45a1.13 1.13 0 011.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-trophy' fill='currentColor' id='trophy' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.5.5A.5.5 0 013 0h10a.5.5 0 01.5.5c0 .538-.012 1.05-.034 1.536a3 3 0 11-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 01-.3.9H3a.5.5 0 01-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 11-1.132-5.89A33.076 33.076 0 012.5.5zm.099 2.54a2 2 0 00.72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 00.72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 01.5.5v2.61a1 1 0 01-.757.97l-1.426.356a.5.5 0 00-.179.085L4.5 15h7l-.638-.479a.501.501 0 00-.18-.085l-1.425-.356a1 1 0 01-.757-.97V10.5A.5.5 0 019 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-trophy-fill' fill='currentColor' id='trophy-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.5.5A.5.5 0 013 0h10a.5.5 0 01.5.5c0 .538-.012 1.05-.034 1.536a3 3 0 11-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 01-.3.9H3a.5.5 0 01-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 11-1.132-5.89A33.076 33.076 0 012.5.5zm.099 2.54a2 2 0 00.72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 00.72-3.935c-.133 1.59-.388 2.885-.72 3.935z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-truck' fill='currentColor' id='truck' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 3.5A1.5 1.5 0 011.5 2h9A1.5 1.5 0 0112 3.5V5h1.02a1.5 1.5 0 011.17.563l1.481 1.85a1.5 1.5 0 01.329.938V10.5a1.5 1.5 0 01-1.5 1.5H14a2 2 0 11-4 0H5a2 2 0 11-3.998-.085A1.5 1.5 0 010 10.5v-7zm1.294 7.456A1.999 1.999 0 014.732 11h5.536a2.01 2.01 0 01.732-.732V3.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v7a.5.5 0 00.294.456zM12 10a2 2 0 011.732 1h.768a.5.5 0 00.5-.5V8.35a.5.5 0 00-.11-.312l-1.48-1.85A.5.5 0 0013.02 6H12v4zm-9 1a1 1 0 100 2 1 1 0 000-2zm9 0a1 1 0 100 2 1 1 0 000-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-truck-flatbed' fill='currentColor' id='truck-flatbed' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.5 4a.5.5 0 01.5.5V5h1.02a1.5 1.5 0 011.17.563l1.481 1.85a1.5 1.5 0 01.329.938V10.5a1.5 1.5 0 01-1.5 1.5H14a2 2 0 11-4 0H5a2 2 0 11-4 0 1 1 0 01-1-1v-1h11V4.5a.5.5 0 01.5-.5zM3 11a1 1 0 100 2 1 1 0 000-2zm9 0a1 1 0 100 2 1 1 0 000-2zm1.732 0A2 2 0 0012 10V6h1.02a.5.5 0 01.39.188l1.48 1.85a.5.5 0 01.11.313V10.5a.5.5 0 01-.5.5h-.768z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-tv' fill='currentColor' id='tv' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.5 13.5A.5.5 0 013 13h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 00-.254.302A1.46 1.46 0 001 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 00.538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 00.254-.302 1.464 1.464 0 00.143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 00-.302-.254A1.46 1.46 0 0013.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-tv-fill' fill='currentColor' id='tv-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2.5 13.5A.5.5 0 013 13h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-type' fill='currentColor' id='type' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M2.244 13.081l.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-type-bold' fill='currentColor' id='type-bold' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 001.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-type-h1' fill='currentColor' id='type-h1' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-type-h2' fill='currentColor' id='type-h2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-type-h3' fill='currentColor' id='type-h3' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-type-italic' fill='currentColor' id='type-italic' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7.991 11.674L9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-type-strikethrough' fill='currentColor' id='type-strikethrough' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M8.527 13.164c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5h3.45c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967zM6.602 6.5H5.167a2.776 2.776 0 01-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607 0 .31.083.581.27.814z'/%3e%3cpath fill-rule='evenodd' d='M15 8.5H1v-1h14v1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-type-underline' fill='currentColor' id='type-underline' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136z'/%3e%3cpath fill-rule='evenodd' d='M12.5 15h-9v-1h9v1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-ui-checks' fill='currentColor' id='ui-checks' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1z'/%3e%3cpath fill-rule='evenodd' d='M2 1a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V3a2 2 0 00-2-2H2zm0 8a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H2zm.854-3.646l2-2a.5.5 0 10-.708-.708L2.5 4.293l-.646-.647a.5.5 0 10-.708.708l1 1a.5.5 0 00.708 0zm0 8l2-2a.5.5 0 00-.708-.708L2.5 12.293l-.646-.647a.5.5 0 00-.708.708l1 1a.5.5 0 00.708 0z'/%3e%3cpath d='M7 10.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1z'/%3e%3cpath fill-rule='evenodd' d='M7 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 8a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-ui-checks-grid' fill='currentColor' id='ui-checks-grid' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 10a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1H2zm9-9a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V2a1 1 0 00-1-1h-3zm0 9a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3zm0-10a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2h-3zM2 9a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2H2zm7 2a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3zM0 2a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm5.354.854l-2 2a.5.5 0 01-.708 0l-1-1a.5.5 0 11.708-.708L3 3.793l1.646-1.647a.5.5 0 11.708.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-ui-radios' fill='currentColor' id='ui-radios' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1zM0 12a3 3 0 116 0 3 3 0 01-6 0zm7-1.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1z'/%3e%3cpath fill-rule='evenodd' d='M7 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 8a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM3 1a3 3 0 100 6 3 3 0 000-6zm0 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-ui-radios-grid' fill='currentColor' id='ui-radios-grid' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3.5 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm9-9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM16 3.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-9 9a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm5.5 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-9-11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 2a3.5 3.5 0 100-7 3.5 3.5 0 000 7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-union' fill='currentColor' id='union' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 2a2 2 0 012-2h8a2 2 0 012 2v2h2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-2H2a2 2 0 01-2-2V2z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-unlock' fill='currentColor' id='unlock' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.655 8H2.333c-.264 0-.398.068-.471.121a.73.73 0 00-.224.296 1.626 1.626 0 00-.138.59V14c0 .342.076.531.14.635.064.106.151.18.256.237a1.122 1.122 0 00.436.127l.013.001h7.322c.264 0 .398-.068.471-.121a.73.73 0 00.224-.296 1.627 1.627 0 00.138-.59V9c0-.342-.076-.531-.14-.635a.658.658 0 00-.255-.237A1.122 1.122 0 009.655 8zm.012-1H2.333C.5 7 .5 9 .5 9v5c0 2 1.833 2 1.833 2h7.334c1.833 0 1.833-2 1.833-2V9c0-2-1.833-2-1.833-2zM8.5 4a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-unlock-fill' fill='currentColor' id='unlock-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M.5 9a2 2 0 012-2h7a2 2 0 012 2v5a2 2 0 01-2 2h-7a2 2 0 01-2-2V9z'/%3e%3cpath fill-rule='evenodd' d='M8.5 4a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-upc' fill='currentColor' id='upc' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 4.5a.5.5 0 011 0v7a.5.5 0 01-1 0v-7zm2 0a.5.5 0 011 0v7a.5.5 0 01-1 0v-7zm2 0a.5.5 0 011 0v7a.5.5 0 01-1 0v-7zm2 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-7zm3 0a.5.5 0 011 0v7a.5.5 0 01-1 0v-7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-upc-scan' fill='currentColor' id='upc-scan' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M1.5 1a.5.5 0 00-.5.5v3a.5.5 0 01-1 0v-3A1.5 1.5 0 011.5 0h3a.5.5 0 010 1h-3zM11 .5a.5.5 0 01.5-.5h3A1.5 1.5 0 0116 1.5v3a.5.5 0 01-1 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 01-.5-.5zM.5 11a.5.5 0 01.5.5v3a.5.5 0 00.5.5h3a.5.5 0 010 1h-3A1.5 1.5 0 010 14.5v-3a.5.5 0 01.5-.5zm15 0a.5.5 0 01.5.5v3a1.5 1.5 0 01-1.5 1.5h-3a.5.5 0 010-1h3a.5.5 0 00.5-.5v-3a.5.5 0 01.5-.5z'/%3e%3cpath d='M3 4.5a.5.5 0 011 0v7a.5.5 0 01-1 0v-7zm2 0a.5.5 0 011 0v7a.5.5 0 01-1 0v-7zm2 0a.5.5 0 011 0v7a.5.5 0 01-1 0v-7zm2 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-7zm3 0a.5.5 0 011 0v7a.5.5 0 01-1 0v-7z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-upload' fill='currentColor' id='upload' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z'/%3e%3cpath fill-rule='evenodd' d='M7.646 1.146a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 2.707V11.5a.5.5 0 01-1 0V2.707L5.354 4.854a.5.5 0 11-.708-.708l3-3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-vector-pen' fill='currentColor' id='vector-pen' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.646.646a.5.5 0 01.708 0l4 4a.5.5 0 010 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 01-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 015.43 3.377l3.313-.828L10.646.646zm-1.8 2.908l-3.173.793a.5.5 0 00-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 00.34-.357l.794-3.174-3.6-3.6z'/%3e%3cpath fill-rule='evenodd' d='M2.832 13.228L8 9a1 1 0 10-1-1l-4.228 5.168-.026.086.086-.026z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-view-list' fill='currentColor' id='view-list' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 4.5h10a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2v-3a2 2 0 012-2zm0 1a1 1 0 00-1 1v3a1 1 0 001 1h10a1 1 0 001-1v-3a1 1 0 00-1-1H3zM1 2a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 011 2zm0 12a.5.5 0 01.5-.5h13a.5.5 0 010 1h-13A.5.5 0 011 14z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-view-stacked' fill='currentColor' id='view-stacked' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M3 0h10a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2V2a2 2 0 012-2zm0 1a1 1 0 00-1 1v3a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3zm0 8h10a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2v-3a2 2 0 012-2zm0 1a1 1 0 00-1 1v3a1 1 0 001 1h10a1 1 0 001-1v-3a1 1 0 00-1-1H3z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-voicemail' fill='currentColor' id='voicemail' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M7 8.5A3.49 3.49 0 015.95 11h4.1a3.5 3.5 0 112.45 1h-9A3.5 3.5 0 117 8.5zm-6 0a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm14 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-volume-down' fill='currentColor' id='volume-down' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.717 3.55A.5.5 0 019 4v8a.5.5 0 01-.812.39L5.825 10.5H3.5A.5.5 0 013 10V6a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zM8 5.04L6.312 6.39A.5.5 0 016 6.5H4v3h2a.5.5 0 01.312.11L8 10.96V5.04z'/%3e%3cpath d='M10.707 11.182A4.486 4.486 0 0012.025 8a4.486 4.486 0 00-1.318-3.182L10 5.525A3.489 3.489 0 0111.025 8c0 .966-.392 1.841-1.025 2.475l.707.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-volume-down-fill' fill='currentColor' id='volume-down-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8.717 3.55A.5.5 0 019 4v8a.5.5 0 01-.812.39L5.825 10.5H3.5A.5.5 0 013 10V6a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06z'/%3e%3cpath d='M10.707 11.182A4.486 4.486 0 0012.025 8a4.486 4.486 0 00-1.318-3.182L10 5.525A3.489 3.489 0 0111.025 8c0 .966-.392 1.841-1.025 2.475l.707.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-volume-mute' fill='currentColor' id='volume-mute' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.717 3.55A.5.5 0 017 4v8a.5.5 0 01-.812.39L3.825 10.5H1.5A.5.5 0 011 10V6a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zM6 5.04L4.312 6.39A.5.5 0 014 6.5H2v3h2a.5.5 0 01.312.11L6 10.96V5.04zm7.854.606a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708l4-4a.5.5 0 01.708 0z'/%3e%3cpath fill-rule='evenodd' d='M9.146 5.646a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-volume-mute-fill' fill='currentColor' id='volume-mute-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.717 3.55A.5.5 0 017 4v8a.5.5 0 01-.812.39L3.825 10.5H1.5A.5.5 0 011 10V6a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zm7.137 2.096a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708l4-4a.5.5 0 01.708 0z'/%3e%3cpath fill-rule='evenodd' d='M9.146 5.646a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-volume-off' fill='currentColor' id='volume-off' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.717 3.55A.5.5 0 0111 4v8a.5.5 0 01-.812.39L7.825 10.5H5.5A.5.5 0 015 10V6a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zM10 5.04L8.312 6.39A.5.5 0 018 6.5H6v3h2a.5.5 0 01.312.11L10 10.96V5.04z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-volume-off-fill' fill='currentColor' id='volume-off-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M10.717 3.55A.5.5 0 0111 4v8a.5.5 0 01-.812.39L7.825 10.5H5.5A.5.5 0 015 10V6a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-volume-up' fill='currentColor' id='volume-up' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.717 3.55A.5.5 0 017 4v8a.5.5 0 01-.812.39L3.825 10.5H1.5A.5.5 0 011 10V6a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zM6 5.04L4.312 6.39A.5.5 0 014 6.5H2v3h2a.5.5 0 01.312.11L6 10.96V5.04z'/%3e%3cpath d='M11.536 14.01A8.473 8.473 0 0014.026 8a8.473 8.473 0 00-2.49-6.01l-.708.707A7.476 7.476 0 0113.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z'/%3e%3cpath d='M10.121 12.596A6.48 6.48 0 0012.025 8a6.48 6.48 0 00-1.904-4.596l-.707.707A5.483 5.483 0 0111.025 8a5.483 5.483 0 01-1.61 3.89l.706.706z'/%3e%3cpath d='M8.707 11.182A4.486 4.486 0 0010.025 8a4.486 4.486 0 00-1.318-3.182L8 5.525A3.489 3.489 0 019.025 8 3.49 3.49 0 018 10.475l.707.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-volume-up-fill' fill='currentColor' id='volume-up-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M11.536 14.01A8.473 8.473 0 0014.026 8a8.473 8.473 0 00-2.49-6.01l-.708.707A7.476 7.476 0 0113.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z'/%3e%3cpath d='M10.121 12.596A6.48 6.48 0 0012.025 8a6.48 6.48 0 00-1.904-4.596l-.707.707A5.483 5.483 0 0111.025 8a5.483 5.483 0 01-1.61 3.89l.706.706z'/%3e%3cpath d='M8.707 11.182A4.486 4.486 0 0010.025 8a4.486 4.486 0 00-1.318-3.182L8 5.525A3.489 3.489 0 019.025 8 3.49 3.49 0 018 10.475l.707.707z'/%3e%3cpath fill-rule='evenodd' d='M6.717 3.55A.5.5 0 017 4v8a.5.5 0 01-.812.39L3.825 10.5H1.5A.5.5 0 011 10V6a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-vr' fill='currentColor' id='vr' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M3 12V4a1 1 0 011-1h2.5V2H4a2 2 0 00-2 2v8a2 2 0 002 2h2.5v-1H4a1 1 0 01-1-1zm6.5 1v1H12a2 2 0 002-2V4a2 2 0 00-2-2H9.5v1H12a1 1 0 011 1v8a1 1 0 01-1 1H9.5z'/%3e%3cpath fill-rule='evenodd' d='M8 16a.5.5 0 01-.5-.5V.5a.5.5 0 011 0v15a.5.5 0 01-.5.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-wallet' fill='currentColor' id='wallet' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 3a2 2 0 012-2h13.5a.5.5 0 010 1H15v2a1 1 0 011 1v8.5a1.5 1.5 0 01-1.5 1.5h-12A2.5 2.5 0 010 12.5V3zm1 1.732V12.5A1.5 1.5 0 002.5 14h12a.5.5 0 00.5-.5V5H2a1.99 1.99 0 01-1-.268zM1 3a1 1 0 001 1h12V2H2a1 1 0 00-1 1z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-wallet-fill' fill='currentColor' id='wallet-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M1.5 2A1.5 1.5 0 000 3.5v2h6a.5.5 0 01.5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 01.5-.5h6v-2A1.5 1.5 0 0014.5 2h-13z'/%3e%3cpath d='M16 6.5h-5.551a2.678 2.678 0 01-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 015.551 6.5H0v6A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-6z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-wallet2' fill='currentColor' id='wallet2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M12.136.326A1.5 1.5 0 0114 1.78V3h.5A1.5 1.5 0 0116 4.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 13.5v-9a1.5 1.5 0 011.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 00-.621-.484L5.562 3zM1.5 4a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-13z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-watch' fill='currentColor' id='watch' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4 14.333v-1.86A5.985 5.985 0 012 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86A5.985 5.985 0 0114 8a5.985 5.985 0 01-2 4.472v1.861c0 .92-.746 1.667-1.667 1.667H5.667C4.747 16 4 15.254 4 14.333zM13 8A5 5 0 103 8a5 5 0 0010 0z'/%3e%3cpath d='M13.918 8.993A.502.502 0 0014.5 8.5v-1a.5.5 0 00-.582-.493 6.044 6.044 0 010 1.986z'/%3e%3cpath fill-rule='evenodd' d='M8 4.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 010-1h1.5V5a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-wifi' fill='currentColor' id='wifi' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M15.385 6.115a.485.485 0 00-.048-.736A12.443 12.443 0 008 3 12.44 12.44 0 00.663 5.379a.485.485 0 00-.048.736.518.518 0 00.668.05A11.448 11.448 0 018 4c2.507 0 4.827.802 6.717 2.164.204.148.489.13.668-.049z'/%3e%3cpath d='M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 008 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 00-.063.745.525.525 0 00.652.065A8.46 8.46 0 018 7a8.46 8.46 0 014.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.472 6.472 0 008 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 018 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 008 11.5a1.99 1.99 0 00-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 00.708 0l.707-.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-wifi-1' fill='currentColor' id='wifi-1' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M11.046 10.454c.226-.226.185-.605-.1-.75A6.473 6.473 0 008 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 018 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 008 11.5a1.99 1.99 0 00-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 00.707 0l.708-.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-wifi-2' fill='currentColor' id='wifi-2' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 008 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 00-.063.745.525.525 0 00.652.065A8.46 8.46 0 018 7a8.46 8.46 0 014.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 008 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 018 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 008 11.5a1.99 1.99 0 00-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 00.708 0l.707-.707z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-wifi-off' fill='currentColor' id='wifi-off' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.706 3.294A12.545 12.545 0 008 3 12.44 12.44 0 00.663 5.379a.485.485 0 00-.048.736.518.518 0 00.668.05A11.448 11.448 0 018 4c.63 0 1.249.05 1.852.148l.854-.854zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 00-.063.745.525.525 0 00.652.065 8.448 8.448 0 013.51-1.27L8 6zm2.596 1.404l.785-.785c.63.24 1.228.545 1.785.907a.482.482 0 01.063.745.525.525 0 01-.652.065 8.462 8.462 0 00-1.98-.932zM8 10l.934-.933a6.454 6.454 0 012.012.637c.285.145.326.524.1.75l-.015.015a.532.532 0 01-.611.09A5.478 5.478 0 008 10zm4.905-4.905l.747-.747c.59.3 1.153.645 1.685 1.03a.485.485 0 01.048.737.518.518 0 01-.668.05 11.496 11.496 0 00-1.812-1.07zM9.02 11.78c.238.14.236.464.04.66l-.706.706a.5.5 0 01-.708 0l-.707-.707c-.195-.195-.197-.518.04-.66A1.99 1.99 0 018 11.5c.373 0 .722.102 1.02.28zm4.355-9.905a.53.53 0 11.75.75l-10.75 10.75a.53.53 0 01-.75-.75l10.75-10.75z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-window' fill='currentColor' id='window' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 2H2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1zM2 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M15 6H1V5h14v1z'/%3e%3cpath d='M3 3.5a.5.5 0 11-1 0 .5.5 0 011 0zm1.5 0a.5.5 0 11-1 0 .5.5 0 011 0zm1.5 0a.5.5 0 11-1 0 .5.5 0 011 0z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-wrench' fill='currentColor' id='wrench' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M.102 2.223A3.004 3.004 0 003.78 5.897l6.341 6.252A3.003 3.003 0 0013 16a3 3 0 10-.851-5.878L5.897 3.781A3.004 3.004 0 002.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019L13 11l-.471.242-.529.026-.287.445-.445.287-.026.529L11 13l.242.471.026.529.445.287.287.445.529.026L13 15l.471-.242.529-.026.287-.445.445-.287.026-.529L15 13l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-x' fill='currentColor' id='x' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-x-circle' fill='currentColor' id='x-circle' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z'/%3e%3cpath fill-rule='evenodd' d='M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-x-circle-fill' fill='currentColor' id='x-circle-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M16 8A8 8 0 110 8a8 8 0 0116 0zM5.354 4.646a.5.5 0 10-.708.708L7.293 8l-2.647 2.646a.5.5 0 00.708.708L8 8.707l2.646 2.647a.5.5 0 00.708-.708L8.707 8l2.647-2.646a.5.5 0 00-.708-.708L8 7.293 5.354 4.646z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-x-diamond' fill='currentColor' id='x-diamond' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 010-2.098L6.95.435zm1.4.7a.495.495 0 00-.7 0L1.134 7.65a.495.495 0 000 .7l6.516 6.516a.495.495 0 00.7 0l6.516-6.516a.495.495 0 000-.7L8.35 1.134z'/%3e%3cpath fill-rule='evenodd' d='M8.361 1.17a.51.51 0 00-.722 0L4.766 4.044 8 7.278l3.234-3.234L8.361 1.17zm3.595 3.596L8.722 8l3.234 3.234 2.873-2.873c.2-.2.2-.523 0-.722l-2.873-2.873zm-.722 7.19L8 8.722l-3.234 3.234 2.873 2.873c.2.2.523.2.722 0l2.873-2.873zm-7.19-.722L7.278 8 4.044 4.766 1.17 7.639a.511.511 0 000 .722l2.874 2.873zM6.917.45a1.531 1.531 0 012.166 0l6.469 6.468a1.532 1.532 0 010 2.166l-6.47 6.469a1.532 1.532 0 01-2.165 0L.45 9.082a1.531 1.531 0 010-2.165L6.917.45z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-x-diamond-fill' fill='currentColor' id='x-diamond-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.615L8 8.707l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.615-.707L7.293 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-x-octagon' fill='currentColor' id='x-octagon' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M4.54.146A.5.5 0 014.893 0h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z'/%3e%3cpath fill-rule='evenodd' d='M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-x-octagon-fill' fill='currentColor' id='x-octagon-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M11.46.146A.5.5 0 0011.107 0H4.893a.5.5 0 00-.353.146L.146 4.54A.5.5 0 000 4.893v6.214a.5.5 0 00.146.353l4.394 4.394a.5.5 0 00.353.146h6.214a.5.5 0 00.353-.146l4.394-4.394a.5.5 0 00.146-.353V4.893a.5.5 0 00-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 10-.708.708L7.293 8l-2.647 2.646a.5.5 0 00.708.708L8 8.707l2.646 2.647a.5.5 0 00.708-.708L8.707 8l2.647-2.646a.5.5 0 00-.708-.708L8 7.293 5.354 4.646z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-x-square' fill='currentColor' id='x-square' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z'/%3e%3cpath fill-rule='evenodd' d='M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-x-square-fill' fill='currentColor' id='x-square-fill' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm3.354 4.646a.5.5 0 10-.708.708L7.293 8l-2.647 2.646a.5.5 0 00.708.708L8 8.707l2.646 2.647a.5.5 0 00.708-.708L8.707 8l2.647-2.646a.5.5 0 00-.708-.708L8 7.293 5.354 4.646z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-zoom-in' fill='currentColor' id='zoom-in' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z'/%3e%3cpath d='M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1 6.538 6.538 0 01-1.398 1.4z'/%3e%3cpath fill-rule='evenodd' d='M6.5 3a.5.5 0 01.5.5V6h2.5a.5.5 0 010 1H7v2.5a.5.5 0 01-1 0V7H3.5a.5.5 0 010-1H6V3.5a.5.5 0 01.5-.5z'/%3e%3c/symbol%3e%3csymbol viewBox='0 0 16 16' class='bi bi-zoom-out' fill='currentColor' id='zoom-out' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z'/%3e%3cpath d='M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1 6.538 6.538 0 01-1.398 1.4z'/%3e%3cpath fill-rule='evenodd' d='M3 6.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z'/%3e%3c/symbol%3e%3c/svg%3e"

/***/ }),

/***/ "../node_modules/@popperjs/core/lib/index.js":
/*!****************************************************************************************!*\
  !*** delegated ../node_modules/@popperjs/core/lib/index.js from dll-reference library ***!
  \****************************************************************************************/
/*! namespace exports */
/*! export afterMain [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export afterRead [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export afterWrite [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export applyStyles [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export arrow [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export auto [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export basePlacements [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export beforeMain [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export beforeRead [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export beforeWrite [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export bottom [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export clippingParents [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export computeStyles [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export createPopper [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export createPopperBase [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export createPopperLite [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export detectOverflow [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export end [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export eventListeners [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export flip [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export hide [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export left [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export main [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export modifierPhases [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export offset [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export placements [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export popper [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export popperGenerator [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export popperOffsets [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export preventOverflow [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export read [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export reference [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export right [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export start [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export top [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export variationPlacements [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export viewport [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! export write [provided] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference library */ "dll-reference library"))("../node_modules/@popperjs/core/lib/index.js");

/***/ }),

/***/ "../node_modules/bootstrap/dist/js/bootstrap.js":
/*!*******************************************************************************************!*\
  !*** delegated ../node_modules/bootstrap/dist/js/bootstrap.js from dll-reference library ***!
  \*******************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference library */ "dll-reference library"))("../node_modules/bootstrap/dist/js/bootstrap.js");

/***/ }),

/***/ "../node_modules/datatables.net-dt/js/dataTables.dataTables.js":
/*!**********************************************************************************************************!*\
  !*** delegated ../node_modules/datatables.net-dt/js/dataTables.dataTables.js from dll-reference library ***!
  \**********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference library */ "dll-reference library"))("../node_modules/datatables.net-dt/js/dataTables.dataTables.js");

/***/ }),

/***/ "../node_modules/datatables.net-responsive-dt/js/responsive.dataTables.js":
/*!*********************************************************************************************************************!*\
  !*** delegated ../node_modules/datatables.net-responsive-dt/js/responsive.dataTables.js from dll-reference library ***!
  \*********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference library */ "dll-reference library"))("../node_modules/datatables.net-responsive-dt/js/responsive.dataTables.js");

/***/ }),

/***/ "../node_modules/datatables.net-searchpanes-dt/js/searchPanes.dataTables.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ../node_modules/datatables.net-searchpanes-dt/js/searchPanes.dataTables.js from dll-reference library ***!
  \***********************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference library */ "dll-reference library"))("../node_modules/datatables.net-searchpanes-dt/js/searchPanes.dataTables.js");

/***/ }),

/***/ "../node_modules/datatables.net-select-dt/js/select.dataTables.js":
/*!*************************************************************************************************************!*\
  !*** delegated ../node_modules/datatables.net-select-dt/js/select.dataTables.js from dll-reference library ***!
  \*************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference library */ "dll-reference library"))("../node_modules/datatables.net-select-dt/js/select.dataTables.js");

/***/ }),

/***/ "../src/vendor/modernizr/modernizr.min.js":
/*!*************************************************************************************!*\
  !*** delegated ../src/vendor/modernizr/modernizr.min.js from dll-reference library ***!
  \*************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference library */ "dll-reference library"))("../src/vendor/modernizr/modernizr.min.js");

/***/ }),

/***/ "dll-reference library":
/*!**************************!*\
  !*** external "library" ***!
  \**************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = library;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!***********************!*\
  !*** ../src/index.js ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
// Vendor Scripts
__webpack_require__(/*! ./vendor/modernizr/modernizr.min */ "../src/vendor/modernizr/modernizr.min.js");

var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery-exposed.js");

__webpack_require__(/*! @popperjs/core */ "../node_modules/@popperjs/core/lib/index.js");

__webpack_require__(/*! bootstrap */ "../node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! datatables.net-dt */ "../node_modules/datatables.net-dt/js/dataTables.dataTables.js")(window, $);

__webpack_require__(/*! datatables.net-responsive-dt */ "../node_modules/datatables.net-responsive-dt/js/responsive.dataTables.js")(window, $);

__webpack_require__(/*! datatables.net-searchpanes-dt */ "../node_modules/datatables.net-searchpanes-dt/js/searchPanes.dataTables.js")(window, $);

__webpack_require__(/*! datatables.net-select-dt */ "../node_modules/datatables.net-select-dt/js/select.dataTables.js")(window, $); //  Core JS


__webpack_require__(/*! ./assets/js/main */ "../src/assets/js/main.js");
})();

/******/ })()
;