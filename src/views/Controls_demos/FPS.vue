
<script setup>
import { ref, shallowRef, watch } from 'vue'
import { TresCanvas } from '@tresjs/core'
import { useGLTF, Sky } from '@tresjs/cientos';
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import OnFirstPersonControls from '@/components/onFirstPersonControls/OnFirstPersonControls.vue'
import gsap from 'gsap';

const { scene } = await useGLTF('/models/PixelArt Medieval Sword.glb')

const roundBoxGeometry = new RoundedBoxGeometry(1, 1, 1, 2, 1);
const showBar = ref(false)
const shooter = shallowRef(false)

// watch(shooter, (value) => {
//   console.log('jaime ~ watch ~ value:', value);
// })

const keyboardMap = [
  { name: "jump", key: "Space" },
  { name: "run", key: "Shift" , speed: 0.5},
  { name: "creep", key: "q" },
  { name: "leftClick", action: () => animationSword() },
  {
    name: "actions",
    actions: [
      { name: "action1", key: 'e', action: () => shooter.value.moveMethods.forward() },
      { name: "action2", key: 'f', action: () => shooter.value.moveMethods.stopCreep() },
      // { name: "action3", key: 'q', action: () => console.log('action3 q') },
      { name: "action4", key: 'r', action: () => shooter.value.moveMethods.creep() },
    ],
  },
  { name: "wheelActionUp", action: () => showHide()},
  { name: "wheelActionDown", action: () => console.log('down') },
]

const animationSword = () => {
  gsap.to(scene.children[0].position, { x: 2, duration: 0.12 })
  gsap.to(scene.children[0].position, { x: 0, duration: 0.12, delay: 0.12 })
}
const showHide = () => {
  showBar.value = !showBar.value
  scene.visible = showBar.value
}

// const onState = e => console.log('State', e, 'Direction', e.direction.forward)
</script>
<template>
  <TresCanvas window-size clear-color="#f7f7f7" ref="canvasRef">
    <TresPerspectiveCamera :position="[0, 0, 3]" :fov="45" :aspect="1" :near="0.1" :far="1000" />
    <OnFirstPersonControls @state="onState" :controlsKeys="keyboardMap" ref="shooter">
      <TresGroup>
        <primitive ref="" :object="scene" :scale="0.5" :position="[-4.5, -3, -5]" :rotation="[0, 1, 0]" />
        <TresMesh :scale="2.5" :rotation="[1, 0, 1]" :position="[-4.5, -3, -5]" :visible="!showBar">
          <TresBoxGeometry :args="[0.1, 0.1, 1]" />
          <TresMeshBasicMaterial :color="0x00ff00" />
        </TresMesh>
      </TresGroup>
    </OnFirstPersonControls>
    <TresMesh :geometry="roundBoxGeometry">
      <TresMeshBasicMaterial :color="0x00ff00" wireframe />
    </TresMesh>
    <Sky />
    <TresGridHelper :args="[100, 100]" :position-y="-2" />
    <TresDirectionalLight :position="[0, 2, 4]" :intensity="2" />
    <TresAmbientLight />
  </TresCanvas>
</template>