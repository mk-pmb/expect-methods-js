
<!--#echo json="package.json" key="name" underline="=" -->
expect-methods
==============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Assert that some object carries all the methods you expect.
<!--/#echo -->



API
---

This module exports one function:

### expectMethods(obj, names[, opts])

`names` should be an array of method names you expect to see on `obj`.
`opts` is an optional options object that supports these keys:

* `descr`: Description of what `obj` is.




<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
