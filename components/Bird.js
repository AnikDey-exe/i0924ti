AFRAME.registerComponent('create-birds', {
    init: function () {
        birds = 20;
        for (i = 0; i < birds; i++) {
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

            this.createBirds(id, position);
        }
    },
    createBirds: function (id, position) {
        var terrain = document.querySelector('#terrain');
        var element = document.createElement('a-entity');

        element.setAttribute('id', id);
        element.setAttribute('position', position);
        element.setAttribute('gltf-model', "#bird");
        element.setAttribute('scale', {x: 500, y: 500, z: 500});
        element.setAttribute('animation-mixer', {});
        element.setAttribute('static-body', {shape: 'sphere', sphereRadius: 5});
        element.setAttribute('shape__handle', {shape: 'sphere', offset: '5 20 3'});
        element.setAttribute('collision-detection', {elementId: `#${id}`});

        terrain.appendChild(element);
    }
})