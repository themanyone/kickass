/* Draggable Elements: Drag and dragElements elements with mouse or gestures */
//Adapted to optionally work with titlebars.
//Drop in draggable stylesheet, if necessary.
//References: 
//www.kirupa.com/html5/drag.htm
//www.kirupa.com/html5/examples/drag_multiple.htm
import {qs, dce} from './inc.js';
function dragElements(s){
  var ele = qs(s);
  if (typeof ele === "undefined"||!ele) return;
  //load dragStyle if page doesn't already have it
  if (!qs("#dragStyles")) {
    var style = dce("style");
    style.id = "dragStyles";
    style.innerHTML = `
/* a titlebar class to move a parent around with it */
.titlebar {
 position: absolute;
 cursor: move;
 padding: 10px;
 background-color: #2196F3;
 color: #fff;
 font-weight: bold;
}
/* a drag class to move elements without a titlebar */
.drag {
  cursor: move;
}`;
    qs("head").appendChild(style);
  }
  //load prefixfree if page doesn't already have it
  import ('//thenerdshow.com/js/prefixfree.min.js');
  import ('//thenerdshow.com/js/prefixfree.dynamic-dom.min.js');
  var activeItem = null, ca = ele.addEventListener;
  
  ca("touchstart", dragStart, false);
  ca("touchend", dragEnd, false);
  ca("touchmove", drag, false);

  ca("mousedown", dragStart, false);
  ca("mouseup", dragEnd, false);
  ca("mousemove", drag, false);
  
  //create some events
  var startmove = new CustomEvent('startmove');
  var moving = new CustomEvent('moving');
  var stopmove = new CustomEvent('stopmove');

  function dragStart(e) {
    var et = e.target;
    //activeItem is either a parent of a titlebar, or drag
    if (et.classList.contains("titlebar")){ et = et.parentElement; }
    else {//find something to drag
       while (!et.classList.contains("drag")){
          //if nothing is drag, we're done here
          if (!et.parentElement || et === ele) return ele;
          et = et.parentElement; //keep looking
       }
    } activeItem = et;
    
    //move on top of other elements
    for (var i = ele.children.length; i--;)
       ele.children[i].style.zIndex="";
    activeItem.style.zIndex="1";

     if (!activeItem.xOffset) { activeItem.xOffset = 0; }
     if (!activeItem.yOffset) { activeItem.yOffset = 0; }
    
     if (e.type === "touchstart") {
       activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
       activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
     } else {
       //console.log("Dragging", e.etet.tagName);
       activeItem.initialX = e.clientX - activeItem.xOffset;
       activeItem.initialY = e.clientY - activeItem.yOffset;
     }
      activeItem.dispatchEvent(startmove);
  }

  function dragEnd(e) {
    if (activeItem) {
      activeItem.initialX = activeItem.currentX;
      activeItem.initialY = activeItem.currentY;
      activeItem.dispatchEvent(stopmove);
    }
    activeItem = null;
  }

  function drag(e) {
    if (activeItem) {
      if (e.type === "touchmove") {
        e.preventDefault();
        activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
        activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
      } else {
        activeItem.currentX = e.clientX - activeItem.initialX;
        activeItem.currentY = e.clientY - activeItem.initialY;
      }
      activeItem.xOffset = activeItem.currentX;
      activeItem.yOffset = activeItem.currentY;
      setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
      activeItem.dispatchEvent(moving);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate(" + xPos + "px, " + yPos + "px)";
  }
  return ele;
}
//Make an element draggable.
function draggable(s){
  var ele = qs(s);
  ele.parentElement.classList.add("draggable");
  ele.classList.add("drag");
  return dragElements(s);
}

draggable(".drag");

export { draggable, dragElements }
