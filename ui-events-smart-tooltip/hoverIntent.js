'use strict';

// Here's a brief sketch of the class
// with things that you'll need anyway
class HoverIntent {

    constructor({
        sensitivity = 0.1, // speed less than 0.1px/ms means "hovering over an element"
        interval = 100, // measure mouse speed once per 100ms: calculate the distance between previous and next points
        intervalId = null,
        elem,
        over,
        out
    }) {
        this.sensitivity = sensitivity;
        this.interval = interval;
        this.elem = elem;
        this.over = over;
        this.out = out;
        this.intervalId = intervalId;

        // make sure "this" is the object in event handlers.
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);

        // assign the handlers
        elem.addEventListener("mouseover", this.onMouseOver);
        elem.addEventListener("mouseout", this.onMouseOut);

        // continue from this point

    }

    onMouseOver(event) {
        /* ... */
        this.positionX = event.clientX;
        this.positionY = event.clientY;

        elem.addEventListener('mousemove', this.onMouseMove);

        // when I calculate speed with the below formula, then one of the failing tests passes
        let speed = 0;

        speed = Math.sqrt(
            Math.pow(this.positionX - event.clientX, 2) +
            Math.pow(this.positionY - event.clientY, 2)
        );

        console.log(speed)

        this.intervalId = setInterval(() => {

            // one test was failing due to my calculations below

            // if (
            //     Math.abs(this.positionX - event.clientX < this.sensitivity) ||
            //     Math.abs(this.positionY - event.clientY) < this.sensitivity) {
            //     this.over();
            // }

            // this is from the formula with speed variable. one test still fails
            if (speed < this.sensitivity) {
                this.over();
            }
        }, this.intervalId)
    }

    onMouseOut(event) {
        /* ... */
        clearInterval(this.intervalId);
        this.out();
    }

    onMouseMove(event) {
        /* ... */
        document.querySelector('#tooltip').hidden = 'true';
    }


    destroy() {
        /* your code to "disable" the functionality, remove all handlers */
        /* it's needed for the tests to work */
        this.elem.removeEventListener('mousemove', this.onMouseMove);
        this.elem.removeEventListener('mouseover', this.onMouseOver);
        this.elem.removeEventListener('mouseout', this.onMouseOut);
    }

}