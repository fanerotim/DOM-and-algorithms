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
        // get cursor coordinates on the x and y axes
        this.positionX = event.pageX;
        this.positionY = event.pageY;
        // get current date
        this.prevTime = Date.now();
        // attach event listener on mouse move
        elem.addEventListener('mousemove', this.onMouseMove);

        // create an interval that will be checking coordinates every X amount of time
        this.intervalId = setInterval(() => {
            // when I calculate speed with the below formula, then one of the failing tests passes
            let speed;

            // if mouse has not moved then speed is 0
            if (!this.lastTime || this.prevTime === this.lastTime) {
                speed = 0;
            } else {
                // calculate cursor speed. formula was provided by source of the challenge
                speed = Math.sqrt(
                    Math.pow(this.positionX - this.lastX, 2) +
                    Math.pow(this.positionY - this.lastY, 2)
                ) / (this.lastTime - this.prevTime);
            }

            // if speed is slower than our criteria, then show the tooltip. clear interval before that. 
            if (speed < this.sensitivity) {
                clearInterval(this.intervalId);
                this.over();
            } else {
                // if mouse movement is fast, then update initial cusor coordinates with the coordinates we have
                this.positionX = this.lastX;
                this.positionY = this.lastY;
                this.prevTime = this.lastTime;
            }
        }, this.interval)
    }

    onMouseOut(event) {
        /* ... */
        // clear interval if mouse leaves the box
        clearInterval(this.intervalId);
        // call handler
        this.out();
    }

    onMouseMove(event) {
        /* ... */
        // on mouse move save x and y curosr coordinates
        this.lastX = event.pageX;
        this.lastY = event.pageY;
        // keep track of date
        this.lastTime = Date.now();
    }

    destroy() {
        /* your code to "disable" the functionality, remove all handlers */
        /* it's needed for the tests to work */
        elem.removeEventListener('mousemove', this.onMouseMove);
        elem.removeEventListener('mouseover', this.onMouseOver);
        elem.removeEventListener('mouseout', this.onMouseOut);
    }

}