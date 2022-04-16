AFRAME.registerComponent('create-rings', {
    init: function () {
        rings = 20;
        for (i = 0; i < rings; i++) {
            var multiplier = 3000;
            var y = Math.round(Math.random(0, 1));
            if (y == 0) {
                multiplier = -3000;
            }
            else {
                multiplier = 3000;
            }

            var id = `ring${i}`;

            var posX = Math.floor(Math.random(0, 1) * multiplier);
            var posY = Math.floor(Math.random(0, 1) * -1);
            var posZ = Math.floor(Math.random(0, 1) * multiplier);

            var position = {x: posX, y: posY, z: posZ}

            this.createRings(id, position);
        }
    },
    createRings: function (id, position) {
        var terrain = document.querySelector('#terrain');
        var element = document.createElement('a-entity');

        element.setAttribute('id', id);
        element.setAttribute('position', position);
        element.setAttribute('material', { color: '#ff9100' });
        element.setAttribute('geometry', { primitive: 'torus', radius: 10 });
        element.setAttribute('static-body', {shape: 'sphere', sphereRadius: 2.5});
        element.setAttribute('collision-detection', {'elementId': id});
        // element.setAttribute('shape__handle', {shape: 'sphere', offset: '5 20 3'});

        terrain.appendChild(element);
    }
})