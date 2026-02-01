A small repository where I have added my solutions to different challenges from https://javascript.info/

Exercises are from section: Browser: Document, Events, Interfaces

Key concepts: browser environment, DOM, walking / working with the DOM, obtaining element and window sizes as well as their coordinates, scrolling, events (mouse, pointer, keyboard, scroll, custom events), event delegation, forms and their properties / methods / events. Document and resource loading: DOMContentLoaded event, asyc and defer attributes. 

Each exercise is in its own directory: some of them have lite-server installed, but can be started with liveserver too. 

For the ones with lite-server - to start it run these commands:

npm install
npm start

Some of the nice challenges:

# Create a nested ul / li DOM tree from a provided obj with data:

<img width="653" height="522" alt="image" src="https://github.com/user-attachments/assets/76a0ba53-6c7a-4f77-9678-d8e826b29342" />

# Tree menu (event delegation) - each list item can be clicked on and it will show / hide children (if it has such).

<img width="311" height="442" alt="image" src="https://github.com/user-attachments/assets/827e1008-41bc-492e-a9be-910f23952e34" />

On this second image the list items / children of Animals are hidden

<img width="344" height="250" alt="image" src="https://github.com/user-attachments/assets/8f553adc-5efe-4566-b190-bc6c534c03f8" />

# Remove notifications / cards (event delegation)

<img width="623" height="555" alt="image" src="https://github.com/user-attachments/assets/1a7e0a54-b845-4063-a6fb-49d368aeb464" />

On this image we removed 'Donkey' from the list / DOM (by clicking on the X icon at its top right corner):

<img width="622" height="392" alt="image" src="https://github.com/user-attachments/assets/3e354d48-885f-45f0-bd9e-e298ed925e75" />

# Sortable table: clicking on Age or Name headers sorts the table either by age or name:

A great challenge where I practiced working with dataset and wrote a small algorithm that manipulates the table / the DOM;

Sorted by age:

<img width="138" height="220" alt="image" src="https://github.com/user-attachments/assets/fb9db916-aba5-4cf8-b81a-c9e869fd44bb" />

Sorted by name:

<img width="135" height="221" alt="image" src="https://github.com/user-attachments/assets/b3ca4dd8-a938-46df-a790-777b0e4bf1a3" />
