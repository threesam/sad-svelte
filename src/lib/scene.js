import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const geometry = new THREE.BoxGeometry()
console.log('THREE', THREE)

const material = new THREE.MeshBasicMaterial({ color: 'cyan' })
material.dithering = true
material.wireframe = true

const material2 = new THREE.MeshBasicMaterial({ color: 'yellow' })
material2.dithering = true
material2.wireframe = true

const offset = 2.5
const cube = new THREE.Mesh(geometry, material)
cube.position.x = -offset
const cube2 = new THREE.Mesh(geometry, material2)
cube2.position.x = offset
console.log('cube', cube)

scene.add(cube)
scene.add(cube2)
let renderer
camera.position.z = 5

const animate = () => {
	requestAnimationFrame(animate)
	cube.rotation.x += 0.01
	cube.rotation.y += 0.006
	cube2.rotation.x -= 0.006
	cube2.rotation.y -= 0.01
	// cube.scale.x += Math.random() * 0.002
	renderer.render(scene, camera)
}

const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight)
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
}

export const createScene = (el) => {
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el })
	resize()
	animate()
}

window.addEventListener('resize', resize)
