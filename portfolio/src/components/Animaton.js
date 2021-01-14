import React, { Component } from 'react';
import * as THREE from 'three';
let scene, camera, renderer, line
class Animaton extends Component {

    init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
    const edges = new THREE.EdgesGeometry( geometry );
    line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
    scene.add( line );
    camera.position.z = 5;
    }

    animate = () => {
        requestAnimationFrame( this.animate );
        line.rotation.x += 0.01;
        line.rotation.y += 0.01;
        renderer.render( scene, camera );
    };

    onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight)
    }

    componentDidMount(){
    window.addEventListener("resize", this.onWindowResize, false)
    this.init();
    this.animate();
    }

    render() {
        return (
            <></>
        );
    }
}

export default Animaton;