# [Kickass](https://github.com/themanyone/kickass)

A light-weight, windowing system for browser apps or "widgets," Kickass consists of small, modular components. The goal for each component is to "do one thing and do it well."

## One Module

Kickass will use sub-modules to grab only what is needed asynchronously, for fast page loads and reduced code overlap, instead of a bulky framework.

## Windows-like Components

These components allow ad banners, forms, web apps, or other widgets to behave like miniature desktop windows inside an app or web page. They give users and developers improved control over content, so they can reposition forms when using odd-sized on-screen keyboards, for example.

 * Kickass   - a shared library of common functions
 * Widget    - turn a div into a fancy widget
 * Draggable - make elements draggable
 * Icons     - add close button + titlebar icons

Each component comes with an HTML tutorial walking through each step of creation, deployment and customization. Some components emit custom events, allowing scripts to perform actions based on user interaction, such as dragging or moving the form.

## Conveniences

kickass makes several conveniences available for tutorial makers. Repeat contents of tags, include HTML from other pages, and display parts of the page as syntax-highlighted code.

 * data-echo feature echos code from other elements.
 * data-include attribute includes data from another page.
 * data-code inserts named script or CSS contents
