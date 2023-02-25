////////////////////////////////
////// Java Script for Post page
////////////////////////////////



$(function() {
    // Executed when js-menu-icon js clicked
     $('.js-menu-icon').click(function() {
        // $(this) : Self element, namely div.js-menu
        // next() : Next to div.js-menu-icon, namely div.menu  
        // toggle() : Switch show and hide
          $(this).next().toggle();


// Here's a breakdown of what's happening in the code:

// The $('.js-menu-icon') selector selects all elements with class js-menu-icon.
// The click() method attaches a click event listener to the selected elements.
// When an element with class js-menu-icon is clicked, the code inside the function is executed.
// $(this) refers to the clicked element, namely the div with class js-menu-icon.
// next() selects the immediately following sibling of the clicked element, namely the div with class menu.
// toggle() switches the visibility of the selected element, so it shows if it's hidden, and hides if it's shown.
// In summary, this code implements a simple toggle menu functionality where clicking on a menu icon shows/hides the associated menu.

// This code is written using the jQuery library, which is a JavaScript library that provides a
//  simplified way of interacting with the Document Object Model (DOM) of a web page.

// Here are some key differences between the jQuery code and plain JavaScript code:

// Syntax: The jQuery code uses a simplified syntax that makes it easier to select and manipulate

// DOM elements. For example, $('.js-menu-icon') selects all elements with class js-menu-icon,
//  whereas in plain JavaScript, you would need to use document.getElementsByClassName('js-menu-icon') to achieve the same thing.

// Event handling: The jQuery code uses the click() method to attach a click event listener to an element,
//  whereas in plain JavaScript, you would need to use the addEventListener() method. The jQuery click() method
//   is a shorthand that simplifies the syntax for attaching event listeners.

// DOM manipulation: The jQuery code uses the toggle() method to toggle the visibility of an element,
//  whereas in plain JavaScript, you would need to use a combination of style.display and if statements to achieve the same thing.

// Overall, the jQuery code is more concise and easier to read than plain JavaScript, especially
//  when dealing with complex DOM manipulation tasks. However, jQuery is a third-party library
//   that requires additional overhead, so there may be performance implications to using it over plain JavaScript.

     })
})

