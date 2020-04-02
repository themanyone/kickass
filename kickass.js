// Kickass Copyright (C) 2020 by Henry Kroll, www.thenerdshow.com
import {qs, qsa} from './inc.js';

//load kickass.css
var link = document.createElement("link");
link.id = "kickass", link.rel="stylesheet", link.href = "./kickass.css";
qs("head").appendChild(link);

//highlight code blocks
if (qs("[data-code]")) import('./code.js');

//copy echo'd content
qsa("[data-echo]").forEach(ele=>ele.innerHTML = qs(ele.dataset.echo).innerHTML);

//include HTML
if (qs("[data-href]")) import ('./includeHTML.js');

//make widget
if (qs(".widget")) import('./widget.js');

//make draggable
if (qs(".drag")) import('./drag.js');

//add icons
if (qs(".icons")) import('./icons.js');
