import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Button from 'react-bootstrap/Button';

let scene, camera, renderer, line, starGeo, star, stars, innerline, lineColor, controls
class Animaton extends Component {

    state = {
        windowHeight: 0
    }

    init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer({ antialias: true });
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false;
    controls.enablePan = false;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.prepend(renderer.domElement );
    renderer.domElement.classList.add("canvas")
    const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
    const edges = new THREE.EdgesGeometry( geometry );
    lineColor = 0xffffff
    innerline = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x4a7577 } ) );
    line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: lineColor } ) );
    scene.add( line );
    scene.add( innerline )
    starGeo = new THREE.Geometry();
    for (let i = 0; i < 10000; i++){
        star = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        )
        star.velocity = 0;
        star.acceleration = 0.001;
        starGeo.vertices.push(star)
    }
    let sprite = new THREE.TextureLoader().load("star2.png")
    console.log(sprite)
    let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.1,
        map: sprite
    })
    stars = new THREE.Points(starGeo, starMaterial)
    scene.add( stars )
    camera.position.z = 5;
    }

    animate = () => {
        starGeo.vertices.forEach((p) =>{
            p.velocity += p.acceleration;
            p.y -= p.velocity
            if (p.y < -200){
                p.y = 200;
                p.velocity = 0
            }
        })
        starGeo.verticesNeedUpdate = true;
        requestAnimationFrame( this.animate );
        line.rotation.x += 0.01;
        line.rotation.y -= 0.01;
        innerline.rotation.x -= 0.01;
        innerline.rotation.y -= 0.01;
        renderer.render( scene, camera );
    };

    onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight)
        this.setState({windowHeight: window.innerHeight})
    }

    scrollToBottom = () => {
        document.getElementById('nav').scrollIntoView({behavior: "smooth"})
    }

    componentDidMount(){
    window.addEventListener("resize", this.onWindowResize, false)
    this.init();
    this.animate();
    }

    render() {
        return (
        <div id="info-bottom">
        <Button onClick={this.scrollToBottom} className="view-more" variant="outline-success">View my work</Button>{' '}
        <h1>{this.state.windowHeight || window.innerHeight}</h1>
        </div>
        );
    }
}

export default Animaton;