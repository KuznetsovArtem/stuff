var stage1 = {
    scene: null,
    camera: null,
    renderer: null,
    container: null,
    controls: null,
    clock: null,
    stats: null,

    sun: null,

    init: function() { // Initialization

        // create main scene
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0xcce0ff, 0.0003);

        var SCREEN_WIDTH = window.innerWidth,
            SCREEN_HEIGHT = window.innerHeight;

        // prepare camera
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 2000;
        this.camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.scene.add(this.camera);
        this.camera.position.set(0, 500, 500);
        this.camera.lookAt(new THREE.Vector3(0,0,0));

        // prepare renderer
        this.renderer = new THREE.WebGLRenderer({ antialias:true });
        this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        this.renderer.setClearColor(this.scene.fog.color);
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;

        // prepare container
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.container.appendChild(this.renderer.domElement);

        // events
        THREEx.WindowResize(this.renderer, this.camera);

        // prepare controls (OrbitControls)
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target = new THREE.Vector3(0, 0, 0);
        this.controls.maxDistance = 2000;

        // prepare clock
        this.clock = new THREE.Clock();

        // prepare stats
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.left = '50px';
        this.stats.domElement.style.bottom = '50px';
        this.stats.domElement.style.zIndex = 1;
        this.container.appendChild( this.stats.domElement );

        // add directional light
        var dLight = new THREE.DirectionalLight(0xffffff, 1.5);
        dLight.castShadow = true;
        dLight.position.set(500, 1000, 500);
        this.scene.add(dLight);

        var theSun = new THREE.PointLight(0xffff00, 1.5);
//        var theSun = new THREE.DirectionalLight(0xffff00, 1.5);
        theSun.castShadow = true;
        theSun.position.set(-100, 100, 0);
        this.scene.add(theSun);
        this.sun = theSun;

        // load a model
        this.loadModel();
    },
    loadModel: function() {

        // prepare loader and load the model
        var oLoader = new THREE.OBJMTLLoader();
        oLoader.load('game/castle.obj', 'game/castle.mtl', function(object) {

            object.position.x = -200;
            object.position.y = 0;
            object.position.z = 100;
            object.scale.set(0.1, 0.1, 0.1);
            stage1.scene.add(object);
        });
    }
};

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    render();
    update();
}

// Update controls and stats
function update() {
    stage1.controls.update(stage1.clock.getDelta());
    stage1.stats.update();
    stage1.sun.position.x += 1;
}

// Render the scene
function render() {
    if (stage1.renderer) {
        stage1.renderer.render(stage1.scene, stage1.camera);
    }
}

// Initialize lesson on page load
function initializeLesson() {
    stage1.init();
    animate();
}

if (window.addEventListener)
    window.addEventListener('load', initializeLesson, false);
else if (window.attachEvent)
    window.attachEvent('onload', initializeLesson);
else window.onload = initializeLesson;
