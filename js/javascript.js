function webGLStart() {
    //creating scene
    var scene = new THREE.Scene();
    // scene.background = new THREE.Color("skyblue");
    scene.fog = new THREE.Fog(0x76456c, 0.1, 8);

    var loader = new THREE.TextureLoader();
    loader.load("./assets/home.jpeg", function (texture) {
        scene.background = texture;
    });

    //add camera
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );

    var newcamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 3, 10);
    // var newcamera = new THREE.OrthographicCamera(5, -5, 5, -5, 3, 10);

    var helper = new THREE.CameraHelper(newcamera);

    scene.add(helper);

    //renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //add geometry
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    var cube = new THREE.Mesh(geometry, material);
    cube.position.z = -5;
    scene.add(cube);

    //camera.position.z = 5;

    //animation
    var i = 0;
    var animate = function () {
      requestAnimationFrame(animate);

      camera.lookAt(newcamera.position);

      camera.position.x = Math.cos(i) * 30;
      camera.position.z = Math.sin(i) * 30;

      i += 0.01;

      cube.rotation.y += 0.03;
      cube.rotation.x += 0.03;

      renderer.render(scene, camera);
    };

    animate();
}