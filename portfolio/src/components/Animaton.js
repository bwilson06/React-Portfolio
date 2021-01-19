import React, { Component } from 'react';
import * as THREE from 'three';
import Button from 'react-bootstrap/Button';

let scene, camera, renderer, line, starGeo, star, stars, innerline, lineColor
class Animaton extends Component {

    init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth - 15, window.innerHeight );
    document.body.prepend(renderer.domElement );
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
    let sprite = new THREE.TextureLoader().load('star2.png');
    let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.12,
        map: sprite
    })
    stars = new THREE.Points(starGeo, starMaterial)
    scene.add( stars )
    camera.position.z = 5;
    }

    animate = () => {
        starGeo.vertices.forEach((p, i) =>{
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
        renderer.setSize(window.innerWidth - 15, window.innerHeight)
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
        </div>
        );
    }
}

export default Animaton;