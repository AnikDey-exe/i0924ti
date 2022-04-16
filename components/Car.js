AFRAME.registerComponent('car', {
    schema: {
        rotationX: {type: 'number', default: 0},
        rotationY: {type: 'number', default: 0},
        rotationZ: {type: 'number', default: 0},
        positionX: {type: 'number', default: 0},
        positionY: {type: 'number', default: 0},
        positionZ: {type: 'number', default: 0}
    },
    init: function() {
        this.el.setAttribute('rotation', {
            x: this.data.rotationX,
            y: this.data.rotationY,
            z: this.data.rotationZ
        });

        this.el.setAttribute('position', {
            x: this.data.positionX,
            y: this.data.positionY,
            z: this.data.positionZ
        });
    }
})

AFRAME.registerComponent('move', {
    schema: {
        clicks: {type: 'number', default: 0}
    },
    tick: function() {
        position = this.el.getAttribute("position");
        window.addEventListener("click", (e) => {
            this.data.clicks += 0.001;
        })
        position.z = position.z + this.data.clicks;
        this.el.setAttribute('position', {
            x: position.x,
            y: position.y,
            z: position.z
        })
    }
})