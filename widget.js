//Copyright (C) 2020 by Henry Kroll, www.thenerdshow.com
if (!document.querySelector("#widgetStyles")) {
    var style = document.createElement("style");
    style.id = "widgetStyles";
    style.innerHTML = `
.widget {
  position: relative;
  display: inline-block;
  background-color: #eee;
  text-align: center;
  border: 1px solid #888;
  border-radius:5px;
  padding:10px;
}
.widget:hover {
  box-shadow: 5px 10px 8px #222;
}`;
  document.querySelector("head").appendChild(style);
}
