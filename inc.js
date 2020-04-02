//Copyright (C) 2020 by Henry Kroll, www.thenerdshow.com
var doc  = document, body = doc.body, get = e=> doc.getElementById(e),
    qs = qs=>doc.querySelector(qs), qsa = qs=>doc.querySelectorAll(qs);

var isSet=function(e){return typeof e!=="undefined"};

var dce = function(tagName, id=null, classNames=null){
  var ret =doc.createElement(tagName);
  ret.id = id, ret.className = classNames;
  return ret;
};

export { doc, body, get, qs, qsa, isSet, dce }