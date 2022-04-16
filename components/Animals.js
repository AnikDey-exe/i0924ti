AFRAME.registerComponent('turtles', {
    init: function () {
        rings = 20;
        for (i = 0; i < rings; i++) {
            var multiplier = 200;
            var y = Math.round(Math.random(0, 1));
            if (y == 0) {
                multiplier = -200;
            }
            else {
                multiplier = 200;
            }

            var id = `turtle${i}`;

            var posX = Math.floor(Math.random(0, 1) * multiplier);
            var posY = Math.floor(Math.random(0, 1) * -1);
            var posZ = Math.floor(Math.random(0, 1) * multiplier);

            var position = {x: posX, y: posY, z: posZ}

            this.createRings(id, position);
        }
    },
    createRings: function (id, position) {
        var terrain = document.querySelector('#islandMap');
        var element = document.createElement('a-entity');

        element.setAttribute('id', id);
        element.setAttribute('position', position);
        element.setAttribute('gltf-model', "#turtle");
        element.setAttribute('scale',{x: 0.001, y: 0.001, z: 0.001});
        
        //element.setAttribute('material', { color: '#ff9100' });
        // element.setAttribute('shape__handle', {shape: 'sphere', offset: '5 20 3'});

        terrain.appendChild(element);
    }
})

AFRAME.registerComponent('fish', {
    init: function () {
        rings = 20;
        for (i = 0; i < rings; i++) {
            var multiplier = 200;
            var y = Math.round(Math.random(0, 1));
            if (y == 0) {
                multiplier = -200;
            }
            else {
                multiplier = 200;
            }

            var id = `turtle${i}`;

            var posX = Math.floor(Math.random(0, 1) * multiplier);
            var posY = Math.floor(Math.random(0, 1) * -1);
            var posZ = Math.floor(Math.random(0, 1) * multiplier);

            var position = {x: posX, y: posY, z: posZ}

            this.createRings(id, position);
        }
    },
    createRings: function (id, position) {
        var terrain = document.querySelector('#islandMap');
        var element = document.createElement('a-entity');

        element.setAttribute('id', id);
        element.setAttribute('position', position);
        element.setAttribute('gltf-model', "#fish");
        element.setAttribute('scale',{x: 1, y: 1, z: 1});
        //element.setAttribute('material', { color: '#ff9100' });
        // element.setAttribute('shape__handle', {shape: 'sphere', offset: '5 20 3'});

        terrain.appendChild(element);
    }
})
AFRAME.registerComponent('treasure', {
    init: function () {
        rings = 20;
        for (i = 0; i < rings; i++) {
            var multiplier = 200;
            var y = Math.round(Math.random(0, 1));
            if (y == 0) {
                multiplier = -200;
            }
            else {
                multiplier = 200;
            }

            var id = `turtle${i}`;

            var posX = Math.floor(Math.random(0, 1) * multiplier);
            var posY = Math.floor(Math.random(0, 1) * -1);
            var posZ = Math.floor(Math.random(0, 1) * multiplier);

            var position = {x: posX, y: posY, z: posZ}

            this.createRings(id, position);
        }
    },
    createRings: function (id, position) {
        var terrain = document.querySelector('#islandMap');
        var element = document.createElement('a-entity');

        element.setAttribute('id', id);
        element.setAttribute('position', position);
        element.setAttribute('gltf-model', "#treasure");
        element.setAttribute('scale',{x: 1, y: 1, z: 1});
        //element.setAttribute('material', { color: '#ff9100' });
        // element.setAttribute('shape__handle', {shape: 'sphere', offset: '5 20 3'});

        terrain.appendChild(element);
    }
})