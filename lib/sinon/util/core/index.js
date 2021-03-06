/**
 * Sinon core utilities. For internal use only.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2013 Christian Johansen
 */
"use strict";

exports.wrapMethod = require("./wrap-method");

exports.deepEqual = require("./deep-equal");

exports.every = require("./every");

exports.format = require("./format");

exports.functionName = require("./function-name");

exports.functionToString = require("./function-to-string");

exports.iterableToString = require("./iterable-to-string");

exports.getPropertyDescriptor = require("./get-property-descriptor");

exports.getConfig = require("./get-config");

exports.defaultConfig = require("./default-config");

exports.timesInWords = require("./times-in-words");

exports.calledInOrder = require("./called-in-order");

exports.orderByFirstCall = require("./order-by-first-call");

exports.walk = require("./walk");

exports.restore = require("./restore");

exports.configureLogError = require("./log_error");

exports.extend = require("./extend");

exports.typeOf = require("./typeOf");
