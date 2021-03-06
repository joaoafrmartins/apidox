/**
 * First comment summary
 *
 * First comment description
 */

/*jshint node:true*/
'use strict';

/**
 * Reference to Some_Klass.
 *
 * Some_Klass (should be linked)
 *
 * constructor summary
 * constructor 2nd line
 *
 * constructor 1st section:
 *
 * - `item`: Summary 1 Some_Klass
 * - `item`: Summary 2
 *
 * constructor 2nd section:
 *
 * - `item`: Summary 1
 * - `item`: Summary 2
 */
exports.Some_Klass = Some_Klass;

/**
 * Create a new Some_Klass instance.
 *
 * @return {Some_Klass}
 */
exports.create = function() { return new Some_Klass(); };

/**
 * Extend `Some_Klass.prototype`.
 *
 * @param {object} ext Methods to mix in, escape this: <>&
 * @return {object} Merge result, escape this: <>&
 * @see Escape this: <>&
 */
exports.extend = function(ext) { };

var util = require('util');

/**
 * Some_Klass summary
 *
 * Some_Klass 2nd line
 *
 * Some_Klass 1st section:
 *
 * - `item`: Summary 1
 * - `item`: Summary 2
 *
 * Some_Klass 2nd section:
 *
 * - `item`: Summary 1
 * - `item`: Summary 2
 */
function Some_Klass() {
}

/**
 * Foo summary, link this: Some_Klass.baz
 *
 * Foo 2nd line
 *
 * Foo 1st section:
 *
 * - `item`: Summary 1
 * - `item`: Summary 2
 *
 * Foo 2nd section:
 *
 * - `item`: Summary 1
 * - `item`: Summary 2
 */
Some_Klass.prototype.fooFoo09 = function() {
};

/**
 * Bar summary, link this: Some_Klass.baz
 *
 * Link this: Some_Klass.prototype.fooFoo09
 * Link this: Some_Klass.baz
 * Don't double-link this: [Some_Klass.baz](#some_klassbazstr-arr)
 *
 * ```js
 * // Don't link this: Some_Klass.baz
 * ```
 *
 * ```
 * // Don't link this: Some_Klass.baz
 * ```
 *
 * ` Don't link this: Some_Klass.baz `
 * `Don't link this: Some_Klass.baz`
 *
 * @param {string} noSummary
 * @param {string} str String summary, link this: Some_Klass.baz
 *   String body 1st line
 *   String body 2nd line
 * @param {string|array} mixed Mixed summary
 * * Mixed item 1
 * * Mixed item 2
 *
 *   Mixed body 1st line
 *   Mixed body 2nd line
 *   Link this: Some_Klass.baz
 * @see Google http://www.google.com/
 * @see Some_Klass.prototype.fooFoo09
 * @see Some_Klass.baz
 * @return {array} Return summary, link this: Some_Klass.baz
 * * Return item 1
 * * Return item 2
 *
 *   Return body 1st line
 *   Return body 2nd line
 *   Link this: Some_Klass.baz
 * @throws {Error} Whenever it's Friday
 * - Error item 1
 * - Error item 2
 * @throws {CustomError|OtherCustomError} Whenever it's Monday
 * - CustomError item 1
 * - CustomError item 2 (Link this: Some_Klass.baz)
 * @throws {AnotherCustomError} Whenever it's Tuesday (Link this: Some_Klass.baz)
 */
Some_Klass.prototype.bar = function(noSummary, str, obj) {
};

/**
 * Baz summary `<html>` <html>
 *
 * Baz description
 *
 * Escape this: <html>
 * Don't escape this: `<html>`
 *
 * @param {string} str String summary <html>
 * @param {array} arr Array summary `<html>`
 * - Array item 1
 *   - Array item 1a
 *   - Array item 1b
 * - Array item 2
 * - Array item `<html>`
 * - Array item <html>
 * @return {array} Return summary `<html>` <html>
 * - Return item 1
 * - Return item 2
 * - Return item `<html>`
 * - Return item <html>
 */
Some_Klass.baz = function(arr) {
};

Some_Klass.baz.bat = {sync: {}, async: {}};

/**
 * Async run summary
 *
 * Async run description
 */
Some_Klass.baz.bat.async.run = function() {
};

/**
 * Sync run summary
 *
 * Sync run description
 */
Some_Klass.baz.bat.sync.run = function() {
};

/**
 * Test @api private
 *
 * @api private
 */
function klassNoOp() {}
