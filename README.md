# [Kickass](https://github.com/themanyone/kickass)

A modular js library without the bulk. Kickass dynamically loads only what is required, and when it is used.

## Installation

One line does it all. Put this anywhere on the page.

    <script type="module" src="kickass/kickass.js"></script>

## Three Classes

 * Widget   - turn a div into a fancy widget
 * Drag     - make widget draggable
 * Icons    - add titlebar icons

## Widgets

We define a widget as a web form, video, or other page element that is dressed up to look like a mini window. Our widget has a border and an optional drop shadow. To crate a widget with icons, add the **widget** and **icons** classes. To make it draggable, add the **drag** class.

    <div class="widget icons">
        <h1>This is a Widget</h1>
    </div>

![widgets](https://thenerdshow.com/kickass/widget.png "Make Widgets")

## Conveniences

kickass makes several conveniences available for web designers. Repeat contents of tags, include HTML from other pages, and display parts of the page as syntax-highlighted code.

 * data-echo    - echo code from another element
 * data-href    - fetch data from another page
 * data-code    - insert code from another element

**Examples.**

    <!-- echo the page title as a headline -->
    <h1 data-echo="title"></h1>

    <!-- include a navbar -->
    <nav data-href="navbar.html"></nav>

    <!-- show the code in the first div -->
    <pre data-code="div"></pre>

This is just a start. Feel free to expand on this design pattern to do almost anything.