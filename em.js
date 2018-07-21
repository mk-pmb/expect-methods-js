/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function expectMethods(obj, mtdNames, opt) {
  var lup = ((obj === undefined) || (obj === null) || obj);
  if (!opt) { opt = false; }
  mtdNames.forEach(function (name) {
    if (typeof lup[name] === 'function') { return; }
    var err = new Error('Expected a method "' + name + '" on '
      + String(opt.descr || obj));
    err.name = 'MissingExpectedMethod';
    err.mtd = name;
    err.obj = obj;
    throw err;
  });
  return true;
}

module.exports = expectMethods;
