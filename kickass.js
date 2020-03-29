// Kickass Copyright (C) 2014-2020 by Henry Kroll, www.thenerdshow.com
_doc = document, _body = _doc.body, _get = e=> _doc.getElementById(e);
_qs  = e=> _doc.querySelector(e); _qsa = e=> _doc.querySelectorAll(e);
_echo = qs=>_doc.write(_qs(qs).innerHTML);

Object.prototype._qs = function(q){return this.querySelector(q);};
Object.prototype._qsa = function(q){return this.querySelectorAll(q);};

var _dce = function(tagName, id=null, classNames=null){
  var ret =_doc.createElement(tagName);
  ret.id = id, ret.className = classNames;
  return ret;
};

var htmlEntities = function(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};

var echoCode = function(qs, type){
  var t = htmlEntities(_qs(qs).outerHTML);
  _doc.write("<pre><code class="+type+">  ", t, "\n</code></pre>");
};

var forAll = function(obj, cb) {
  return (typeof cb === "function")
  ? obj.forAll(cb) : typeof obj === "object"
    ? function(e) { obj.forAll(e); } : undefined;
};

Object.prototype.forAll = function(cb) {
  var self = this, key, keys = Object.keys(self), len = keys.length;
  if(keys.forEach) keys.forEach(function(key){cb(self[key], key);});
  else for (var i = len; i--;) cb(self[keys[i]], keys[i]);
};

Array.prototype.uniq = function(){
	obj = {};out = [];
    this.forAll(e=> obj[e] = 0);
	return Object.keys(obj);
};
