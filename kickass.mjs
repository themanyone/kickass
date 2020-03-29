// Kickass Copyright (C) 2014-2020 by Henry Kroll, www.thenerdshow.com
var _doc  = document, _body = _doc.body, _get = e=> _doc.getElementById(e),
    _qs = qs=>_doc.querySelector(qs);

var _dce = function(tagName, id=null, classNames=null){
  var ret =_doc.createElement(tagName);
  ret.id = id, ret.className = classNames;
  return ret;
};

var htmlEntities = function(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};

var forAll = function(obj, cb) {
  return (typeof cb === "function")
  ? obj.forAll(cb) : typeof obj === "object"
    ? e=>obj.forAll(e) : undefined;
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

var includeHTML = async function(ele, url) {
  const utf8Decoder = new TextDecoder('utf-8');
    const res = await fetch(url);
    const reader = res.body.getReader();
    let { value: chunk, done: readerDone } = await reader.read();
    chunk = chunk ? utf8Decoder.decode(chunk) : '';
    ele.innerHTML = chunk;
};

//load kickass.css
var link = document.createElement("link");
link.id = "kickass";
link.rel="stylesheet", link.href = "kickass.css";
_qs("head").appendChild(link);

//process replacement commands
_body.children.forAll(ele=>{
  ele.innerHTML = ele.innerHTML
    .replace(/^echo\(['"]?([^)]+)['"]?\)/gi, (match,p1)=>_qs(p1).innerHTML)
    .replace(/^code\(['"]?([^)]+)['"]?\)$/gi, (match,p1)=>
      "<code>" + htmlEntities(_qs(p1).outerHTML) + "</code>")
    .replace(/^include\(['"]?([^)]+)['"]?\)$/gi, (match,p1)=>includeHTML(ele, p1));
  });

export {  };