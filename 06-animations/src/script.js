import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// ANIMATION JS NATIF
/* let time = Date.now()

const tick = () => 
{
    // time
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime

    // update object
    mesh.rotation.y += 0.01 * deltaTime

    // render 
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()*/

// ANIMATION THREE JS
/*let clock = new THREE.Clock()

const tick = () => 
{
    // clock
    const elapsedTime = clock.getElapsedTime()

    // update object
    mesh.position.y = Math.sin(elapsedTime)

    // render 
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()*/

// GSAP
gsap.to(mesh.position, { 
	duration:1, 
	delay: 1, 
	x:2 
})

const tick = () => 
{
    // render 
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()