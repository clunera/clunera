AFRAME.registerComponent("click-listener", {
  init: function() {
    this.el.addEventListener("click", (e) => {
      console.log(e.target);
      e.target.setAttribute('random-sound', '');
      console.log('random-sound');
      console.log(e.target);
    });
  }
});

AFRAME.registerComponent('random-sound', {
  init: function () {
    this.el.setAttribute('sound', {
      src: this.getRandomSound(),
        autoplay: true,
        loop: true,
        rolloffFactor: 10,
        poolSize: 5
    });
  },
  getRandomSound: function () {
    var sounds = ['beach', 'birds', 'drops', 'fire', 'forest',
          'leaves', 'rain', 'river', 'windnchimes'];
    sound = '#' + sounds[Math.floor(Math.random() * sounds.length)];
    return sound;
  }
});

AFRAME.registerComponent('random-material', {
  init: function () {
    this.el.setAttribute('material', {
      color: this.getRandomColor(),
      metalness: Math.random(),
      roughness: Math.random()
    });
  },
  getRandomColor: function () {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});

AFRAME.registerComponent('random-sphere', {
  init: function () {
    this.el.setAttribute('geometry', {
      primitive: 'sphere',
      radius: 1 + Math.random() * 4
    });
  }
});

AFRAME.registerComponent('random-box', {
  init: function () {
    this.el.setAttribute('geometry', {
      primitive: 'box',
      depth: 2 + Math.random() * 3,
      height: 2 + Math.random() * 3,
      width: 2 + Math.random() * 3
    });
  }
});

AFRAME.registerComponent('random-tree', {
  trees: [
    ['tree', '.01 .01 .01'],
    ['pine-tree', '0.5 0.5 0.5'],
    ['palm-tree', '0.3 0.3 0.3'],
    ['elm-tree', '0.3 0.3 0.3'],
    ['apple-tree', '0.3 0.3 0.3'],
    ['bubinga-tree', '0.3 0.3 0.3']
  ],
  init: function () {
    var tree = this.getRandomTree()
    this.el.setAttribute('gltf-model', '#' + tree[0]);
    this.el.setAttribute('scale', tree[1]);
  },
  getRandomTree: function () {
    tree = this.trees[Math.floor(Math.random() * this.trees.length)];
    console.log(tree)
    return tree;
  }
});
