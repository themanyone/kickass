//from https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
String.prototype.hashCode = function() {
 var hash = i = 0, chr, strlen=this.length;
 if (strlen === 0) return hash;
 for (i = 0; i < strlen; i++) {
   chr   = this.charCodeAt(i);
   hash  = ((hash << 5) - hash) + chr;
   hash |= 0; // Convert to 32bit integer
 } return hash;
};

Object.prototype.toggleEvent = function(e, func, useCapture) {
  var hc = func.toString().hashCode();
  if (this[hc]){
    if (this.removeEventListener) this.removeEventListener(e, func);
    else if (this.detachEvent) this.detachEvent("on"+e, func);
    else this["on"+e] = "";
    delete(this[hc]); return;
  }
  this[hc] = e;
  if (this.addEventListener) this.addEventListener(e, func);
  else if (this.attachEvent) this.document.attachEvent("on"+e, func);
  else this["on"+e] = this["e"+e+func];
  return this;
};

var toggleEvent = function(ele, evt, func, useCapture){
    return ele.toggleEvent(evt, func, useCapture);
};

Element.prototype.getEvent = function(func){
  return this[func.toString().hashCode()];
};
