/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function expectMethods(obj, mtdNames, opt) {
  if (!opt) { opt = false; }
  function miss(mtd) {
    var err = new Error('Expected a method "' + mtd + '" on '
      + String(opt.descr || obj));
    err.name = 'MissingExpectedMethod';
    err.mtd = mtd;
    err.obj = obj;
    throw err;
  }
  if ((obj === undefined) || (obj === null)) { miss(mtdNames[0]); }
  mtdNames.forEach(function chk(mtd) {
    if (typeof obj[mtd] !== 'function') { miss(mtd); }
  });
  return true;
}

module.exports = expectMethods;
