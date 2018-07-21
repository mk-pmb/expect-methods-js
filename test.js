/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var em = require('./em');

function t(x, m, o, w, e) {
  try { em(x, m, o); } catch (c) { e = String(c); }
  if (w === e) { return; }
  if (w && w.test(e)) { return; }
  throw new Error('Expected ' + (w || 'pass') + ' but got ' + e);
}

t(JSON, 'parse', null,
  /^TypeError: \S+\.forEach is not a function$/);
t(JSON, ['parse', 'stringify']);
t(JSON, ['parse', 'stringify', 'fromFile', 'saveFile'], null,
  /Expected a method "fromFile"/i);

t(JSON, ['toString']);
t(0, ['toString']);
t(1, ['toString']);
t(true, ['toString']);
t(false, ['toString']);
t('hello', ['toString']);
t(null, ['toString'], null, /Expected a method "toString"/i);





console.log("+OK test passed.");   //= "+OK test passed."
