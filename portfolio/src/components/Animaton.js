import React, { Component } from 'react';
import * as THREE from 'three';
let scene, camera, renderer, cube
class Animaton extends Component {

    init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    }

    animate = () => {
        requestAnimationFrame( this.animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
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