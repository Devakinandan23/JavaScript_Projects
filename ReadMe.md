# Modal Window JavaScript ReadMe

This ReadMe provides an overview of the HTML, CSS, and JavaScript code for a simple modal window that can be used to display additional content or information on a web page. The code consists of an HTML structure, CSS styles, and JavaScript functionality. This code allows you to show and hide the modal window when interacting with buttons.

## Table of Contents

- [File Structure](#file-structure)
- [HTML Structure](#html-structure)
- [CSS Styles](#css-styles)
- [JavaScript Functionality](#javascript-functionality)
- [How to Use](#how-to-use)

## File Structure

- `index.html`: Contains the HTML structure of the modal window and buttons.
- `style.css`: Provides the CSS styles for the modal window, buttons, and overlay.
- `script.js`: Contains the JavaScript functionality to open, close, and interact with the modal.

## HTML Structure

The HTML structure includes:

- Three buttons with the class `show-modal`, each labeled "Show modal 1," "Show modal 2," and "Show modal 3."
- A modal window with the class `modal`, which is initially hidden and contains a close button, a heading, and a paragraph.
- An overlay with the class `overlay`, also initially hidden.

## CSS Styles

The CSS styles define the visual appearance of the modal window and buttons. Key CSS classes and properties include:

- `.hidden`: Hides elements by setting `display: none`.
- `.modal`: Styles the modal window, including its position, background color, padding, border-radius, and shadow.
- `.overlay`: Styles the overlay, creating a semi-transparent background.
- `.show-modal`: Styles the buttons to make them visually appealing.

## JavaScript Functionality

The JavaScript code adds interactivity to the modal window:

- It selects elements from the HTML, such as the modal, overlay, buttons to open the modal, and the close button.
- Event listeners are added to the "Show modal" buttons to open the modal when clicked.
- Clicking the close button or overlay closes the modal.
- The modal can also be closed by pressing the "Escape" key.
- The JavaScript code ensures that the modal and overlay elements are displayed or hidden accordingly.

## How to Use

1. Ensure that all three files (`index.html`, `style.css`, and `script.js`) are in the same directory.

2. Open the `index.html` file in a web browser to view the modal window.

3. Click the "Show modal" buttons to open the modal window. Click the close button or the overlay to close the modal.

4. You can also close the modal by pressing the "Escape" key.

5. Modify the content of the modal window in the HTML as needed, and adjust the CSS styles in `style.css` to match your desired design.

This code provides a basic foundation for implementing a modal window on a web page and can be customized and expanded to suit your specific requirements.
