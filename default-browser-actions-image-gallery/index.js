console.log('hello world');
// attach an event listener to thumbnail image container
thumbs.onclick = (e) => {
    e.preventDefault();
    // get image source from e.target's (img element) parent anchor (a element) as it holds correct image size
    const anchor = e.target.closest('a');

    // check conditionally to make sure there is such element and the .thumbs list contains the anchor element we refer to
    if (anchor && thumbs.contains(anchor)) {
        // update large / preview image source with the selected thumbnail's large image, which is in its parent's a element href attribute
        largeImg.src = anchor.getAttribute('href');
        // also update alt attribute
        largeImg.alt = anchor.getAttribute('title');
    }
}
