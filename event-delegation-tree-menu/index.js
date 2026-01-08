// add an event listener to container
tree.addEventListener('click', (e) => {
    if (e.target.dataset.type) {
        const children = e.target.closest('li').children;

        // i starts from 1, so we make sure list title remains visible;
        for (let i = 1; i < children.length; i++) {
            const child = children[i];
            child.classList.toggle('hide');
        }
    }    
});