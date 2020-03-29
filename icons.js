  /** useIcons | use google icons */
  function useIcons(){
    if (!document.querySelector("#googleicons")) {
      var lnk = document.createElement("link");
      lnk.rel = "stylesheet";
      lnk.id = "googleicons";
      lnk.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
      document.querySelector("head").appendChild(lnk);
  } }
  /** addIcon | Attach a clickable icon to an element.
   *  @param {string} iname   - The name of the icon
   *  @param {string} style   - Style info. "right:10px;font-size:60px;"
   *  @param {string} qs      - Query selector of element to receive the icon.
   *  @param {Object} cb      - Callback function to receive click events.
   */
  function addIcon(iname, style, qs, cb){
    useIcons();
    var icon = document.createElement("i"), ele = document.querySelector(qs);
    icon.classList.add("material-icons");
    icon.style = "position:absolute;cursor:pointer;" + style;
    icon.innerHTML = iname;
    ele.appendChild(icon);
    if (icon.addEventListener) icon.addEventListener("click", cb);
    else icon.attachEvent("click", cb);
  }

  /** create some titlebar icons */
  function titleIcons(iname, qs){
    iconStyles = document.querySelector("#iconStyles");
    //create stylesheet if necessary
    if(!iconStyles){
      style=document.createElement("style");
      style.id = "iconStyles";
      style.innerHTML = `  .minimized {
        height: 65px;
        width: 65px !important;
        overflow: hidden;
        padding: 0;
        cursor: pointer;
      }
      .maximized {
        position: absolute;
        z-index: 99;
        width:  100% !important;
        height: 100%;
        top: 0; left: 0;
        padding: 0;
      }`;
      document.querySelector("head").appendChild(style);
    }
    //friendly icon
    addIcon(iname, "left:1px; top:0", qs);
    //minimize
    addIcon("minimize", "right:40px;top:0px;", qs, function(e){
      pe = e.target.parentElement;
      icons = pe.querySelectorAll(".material-icons");
      //do minimize
      pe.classList.add("minimized");
      pe.classList.remove("maximized");
      icons.forEach(el=>{
        el.style.display="none";
      });
      //enable un-minimize
      pe.addEventListener("mouseup", function(e){
        pe.classList.remove("minimized");
        icons.forEach(el=>el.style.display="");
      });
      e.stopPropagation();
    });
    //maximize
    addIcon("web_asset", "right:20px;top:0px;", qs, function(e){
      pe = e.target.parentElement;
      var rect = pe.getBoundingClientRect();
      if (pe.classList.contains("maximized")) {
        pe.classList.remove("maximized");
        pe.style.transform = pe.transform;
      } else {
        pe.transform = pe.style.transform;
        pe.style.transform = "";
        pe.classList.remove("minimized");
        pe.classList.add("maximized");
      } e.stopPropagation();
    });
    //close
    addIcon("close", "right:0px;top:0px;", qs, function(e){
      e.target.parentElement.remove();
    });
  }
  