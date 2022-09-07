import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const geometry = new THREE.BoxGeometry()

const amount = 20
for (let i = -amount; i < amount; i += 2) {
	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

	const newCube = new THREE.Mesh(geometry, material)
	newCube.position.x = Math.random() * 2 * i
	newCube.position.y = Math.random() * 2 * i
	newCube.position.z = Math.random() * 2 * i

	scene.add(newCube)

}
let renderer
camera.position.z = 5

const animate = () => {
	requestAnimationFrame(animate)
	// cube.rotation.x += 0.01
	// cube.rotation.y += 0.01
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
