import styles from '../styles/Home.module.css'

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


import { useEffect, useState } from 'react'

export default function Home() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)


  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)

    //cena
    const scene = new THREE.Scene()

    //camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

    //carregar objeto 3D gltf
    const objectLoader = new GLTFLoader()

    objectLoader.load("scene.gltf", (gltf) => {
      const model = gltf.scene
      model.position.set(0, 0, 2)
      model.scale.set(5, 5, 5)

      //adicionar objeto na cena
      scene.add(model)
    })

    //iluminação para mostrar objeto

    const light = new THREE.PointLight('white', 50, 50)
    light.position.set(25, 25, 25)
    scene.add(light)

    camera.position.z = 7

    //renderizador
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    document.body.appendChild(renderer.domElement)

    //função de ativar animação e renderizar conteudo na tela
    function animate() {
      requestAnimationFrame(animate)

      renderer.render(scene, camera)
    }

    animate()


  })


  return (
    <div className={styles.main}>

    </div>
  )
}
