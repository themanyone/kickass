//Copyright (C) 2020 by Henry Kroll, www.thenerdshow.com
//highlight code on a web page
import {doc, body, qs, qsa} from './inc.js';

//load highlight.css
var link = document.createElement("link");
link.rel="stylesheet", 
link.href = "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/default.min.css";
document.head.appendChild(link);

//load highlight.js
var script = document.createElement("script");
script.src = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js';
script.onload = e=>hljs.initHighlightingOnLoad();
document.head.appendChild(script);

//retrieve data-code from page
var htmlEntities = str => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
qsa("[data-code]").forEach(ele=>{
  ele.innerHTML = qs(ele.dataset.code)?
  "<code>" + htmlEntities(qs(ele.dataset.code).outerHTML)+ "</code>"
  :ele.dataset.code + " CSS selector not found";
});
