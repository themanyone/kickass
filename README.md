# [Kickass](https://github.com/themanyone/kickass)

A modular js library without the bulk. Kickass dynamically loads only what is required, and when it is used.

One line does it all.

    <script type="module" src="kickass/kickass.js"></script>

## Three Classes

 * `widget`   - turn a div into a fancy widget
 * `drag`     - make widget draggable
 * `icons`    - add titlebar icons

## Widgets

We define a widget as a web form, video, or other page element. Kickass can dress it up to look like a mini window by adding a border, rounded corners, and a drop shadow. To crate a widget with icons, add the `widget` and `icons` classes. To make it draggable, add the `drag` class.

    <div class="widget icons">
        <h1>This is a Widget</h1>
    </div>

![widgets](https://thenerdshow.com/kickass/widget.png "Make Widgets")

Optionally create your own CSS stylesheets with the same id to override the default widget (or other) styles.

    <style id="widgetStyles">
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
      }
    </style>

## Conveniences

Kickass makes several conveniences available for web designers. Repeat contents of tags, include HTML from other pages, and display parts of the page as syntax-highlighted code. Uses [CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp).

 * `data-echo`    - echo code from another element
 * `data-href`    - fetch data from another page (Not CORS enabled)
 * `data-code`    - "view source" on an element

`Examples.`

    <!-- echo the page title as a headline -->
    <h1 data-echo="title"></h1>

    <!-- include a navbar -->
    <nav data-href="navbar.html"></nav>

    <!-- view the source of the first div having the widget class -->
    <pre data-code="div.widget"></pre>

This is just a start. Feel free to expand on this design pattern to do almost anything.