//Copyright (C) 2020 by Henry Kroll, www.thenerdshow.com
//include a web page in an element from data-href location
import {qsa} from './inc.js';
var includeHTML = async function(ele, url) {
  const utf8Decoder = new TextDecoder('utf-8');
  const res = await fetch(url), reader = res.body.getReader();
  var { value: chunk, done: readerDone } = await reader.read();
  ele.innerHTML = chunk ? utf8Decoder.decode(chunk) : '';
};
qsa("[data-href]").forEach(ele=>includeHTML(ele, ele.dataset.href));
//All Nations Critical Health.org