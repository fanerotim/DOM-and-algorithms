This is a small repository in which I have added my solutions to different DOM-related challenges created by: https://javascript.info/

The challenges are from section: Browser: Document, Events, Interfaces

Key concepts covered: browser environment, DOM, walking / working with the DOM, obtaining element and window sizes as well as their coordinates - using those coordinates to show error messages or calculate element sizes, events (mouse, pointer, keyboard, scroll, custom events), event delegation, forms and their properties / methods / events. Document and resource loading: DOMContentLoaded event, async and defer attributes. 

Each exercise is in its own directory: some of them have lite-server installed as dependency, but can be started with liveserver too. 

For the ones with lite-server, please use these commands to start them:

npm install 
<br>
npm start

Some of the challenges I worked on:

# Create a nested ul / li DOM tree from a provided obj with data:

<img width="653" height="522" alt="image" src="https://github.com/user-attachments/assets/76a0ba53-6c7a-4f77-9678-d8e826b29342" />

# Tree menu (event delegation)

Each list item can be clicked on and it will show / hide children (if it has such).

<img width="311" height="442" alt="image" src="https://github.com/user-attachments/assets/827e1008-41bc-492e-a9be-910f23952e34" />

On this second image the list items / children of Animals are hidden

<img width="344" height="250" alt="image" src="https://github.com/user-attachments/assets/8f553adc-5efe-4566-b190-bc6c534c03f8" />

# Remove notifications / cards (event delegation)

<img width="623" height="555" alt="image" src="https://github.com/user-attachments/assets/1a7e0a54-b845-4063-a6fb-49d368aeb464" />

On this image we removed 'Donkey' from the list / DOM (by clicking on the X icon at its top right corner):

<img width="622" height="392" alt="image" src="https://github.com/user-attachments/assets/3e354d48-885f-45f0-bd9e-e298ed925e75" />

# Sortable table

Clicking on Age or Name headers sorts the table either by age or name. A great challenge where I practiced working with dataset and wrote a small algorithm that manipulates the table / the DOM.

Sorted by age:

<img width="138" height="220" alt="image" src="https://github.com/user-attachments/assets/fb9db916-aba5-4cf8-b81a-c9e869fd44bb" />

Sorted by name:

<img width="135" height="221" alt="image" src="https://github.com/user-attachments/assets/b3ca4dd8-a938-46df-a790-777b0e4bf1a3" />

# Tooltip behavior;

In this challenge I practiced working with coordinates of elements with 'getBoundingClientRect()' method and page scroll. This was, so we can know if the tooltip can be showed over or below the element - if there is not enough space to show the tooltip above the element, then we will show it below it:

Above the element:

<img width="608" height="265" alt="image" src="https://github.com/user-attachments/assets/c9a37cb8-3d0d-41d7-a973-bbd6d40248f2" />

Below the element (not enough space above it):

<img width="596" height="147" alt="image" src="https://github.com/user-attachments/assets/95f3f87d-ce9f-4a9e-8b61-fc0bcd09b254" />

# Editable table cell

Clicking on any table cell allows you to edit its content.

A good exercise related to working with the DOM - creating a new element (textarea), which replaces the table cell when is being edited, making sure the size of the textarea is exactly the same as the <td> element it replaces, focusing on the textarea. 

<img width="622" height="460" alt="image" src="https://github.com/user-attachments/assets/f7cb662e-acd4-4b8d-995f-d62e6bb653d4" />

# Infinite scroll

A nice challenge where I check how close to the bottom of a scrollable element the user has reached and load more data if they cross a certain point. Practicing scroll events, manipulating the DOM

<img width="623" height="377" alt="image" src="https://github.com/user-attachments/assets/6c8e76af-3633-456f-976d-59fda85039f7" />

# Load images only when the user scrolls them into view

Another challenge from the 'onscroll' event chapter - here we listen for onscroll events and check if an image is shown on the page, if it is then we load it, if not (it is below the window height), then we do not load it.

Mercury - the image we see is loaded, but Venus below it is not yet loaded as we have not scrolled it into view:

<img width="922" height="909" alt="image" src="https://github.com/user-attachments/assets/78305bfe-4a63-4ba9-857f-6775841b9bff" />

# Avoid content flick / shift when scrollbar is hidden 

A great challenge where we make sure when vertical scrollbar is hidden, the content does not shift / flick to the right side to take up the space of the scrollbar. Here I continued practicing working with the DOM and element sizes: clientWidth and offsetWidth in this instance. 

Clicking the delete button at the top left hand corner of each image, will show a modal and hide the scrollbar, so the user cannot scroll the page when the modal is showing. This does not cause content shift, as we add padding to the body, which is the size of the hidden scrollbar. 

<img width="922" height="909" alt="image" src="https://github.com/user-attachments/assets/367d739b-9392-46f9-92a9-21479e05b380" />

There are more exercises in the repository. 
