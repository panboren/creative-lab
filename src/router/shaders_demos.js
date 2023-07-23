import defaultLayout from '@/layouts/defaultLayout.vue'

export const shaders_demos = [
    {
        path: '/CSMDemo',
        name: 'Custom Shader Material Demo',
        meta: {
          layout: defaultLayout,
          name: 'How to extend materials',
          difficulty: 'easy',
          isOnTres: true,
          section: 'shader_demo',
          img: '/gifs/CSM_demo.gif',
          sourceCode:
            'https://github.com/JaimeTorrealba/creative-lab/blob/main/src/views/shader_demos/CSMDemo.vue',
          description:
            'You can see how to extend any material to add shaders and different capabilities. We use the Custom Shader Material library. In this example we extend the MeshPhyiscalMaterial used in the previus glass example'
        },
        component: () => import('../views/shader_demos/CSMDemo.vue')
      },
    {
        path: '/destroy_geometry_demo',
        name: 'Destroy geometry Demo',
        meta: {
          layout: defaultLayout,
          name: 'Destroy the vertex of a geometry',
          difficulty: 'medium',
          isOnTres: false,
          section: 'shader_demo',
          img: '/gifs/destroy_geometry_demo.gif',
          sourceCode:
            'https://github.com/JaimeTorrealba/creative-lab/blob/main/src/views/shader_demos/DestroyGeometryDemo.vue',
          description:
            'With this demo, you can see how to destroy and manipulate the individual vertex of any type of geometries. This effect is base on: https://www.youtube.com/live/frgmk0Wu76A?feature=share'
        },
        component: () => import('../views/shader_demos/DestroyGeometryDemo.vue')
      },
    {
        path: '/fire_demo',
        name: 'Fire Demo',
        meta: {
          layout: defaultLayout,
          name: 'Realistic fire',
          difficulty: 'Advanced',
          isOnTres: false,
          section: 'shader_demo',
          img: '/gifs/fire_demo.gif',
          sourceCode:
            'https://github.com/JaimeTorrealba/creative-lab/blob/main/src/views/shader_demos/FireDemo.vue',
          description:
            'An example of Fire made with shaders. This effect is base on: https://github.com/mattatz/THREE.Fire'
        },
        component: () => import('../views/shader_demos/FireDemo.vue')
      },
    {
        path: '/fragment_template',
        name: 'Fragment Template',
        meta: {
          layout: defaultLayout,
          name: 'Fragment shader template',
          difficulty: 'Easy',
          isOnTres: false,
          section: 'shader_demo',
          img: '/gifs/fragment_template.gif',
          sourceCode:
            'https://github.com/JaimeTorrealba/creative-lab/blob/main/src/views/shader_demos/FragmentTemplate.vue',
          description:
            'My personal fragment shader template.'
        },
        component: () => import('../views/shader_demos/FragmentTemplate.vue')
      },
    {
        path: '/shader_star_demo',
        name: 'Shader star Demo',
        meta: {
          layout: defaultLayout,
          name: 'A star made with shaders',
          difficulty: 'Advanced',
          isOnTres: false,
          section: 'shader_demo',
          img: '/gifs/shader_star.gif',
          sourceCode:
            'https://github.com/JaimeTorrealba/creative-lab/blob/main/src/views/shader_demos/StarDemo.vue',
          description:
            'A star made with shaders, a combination of colors and techniques like fresnel, matrix rotation, multi layer. This effect is base on: https://www.youtube.com/live/3krH52AhPqk?feature=share'
        },
        component: () => import('../views/shader_demos/StarDemo.vue')
      },
    {
        path: '/image_particles_demo',
        name: 'Image Particles Demo',
        meta: {
          layout: defaultLayout,
          name: 'An img made with particles',
          difficulty: 'medium',
          isOnTres: false,
          section: 'shader_demo',
          img: '/gifs/image_particles.gif',
          sourceCode:
            'https://github.com/JaimeTorrealba/creative-lab/blob/main/src/views/shader_demos/ImageParticles.vue',
          description:
            'An image transformed into particles that you can animated separately . This effect is base on: https://youtu.be/vEaAheMO0bo'
        },
        component: () => import('../views/shader_demos/ImageParticles.vue')
      },
    {
        path: '/mouse_reveal_demo',
        name: 'Mouse reveal Demo',
        meta: {
          layout: defaultLayout,
          name: 'Mouse transparency reveal',
          difficulty: 'medium',
          isOnTres: false,
          section: 'shader_demo',
          img: '/gifs/mouse_reveal.gif',
          sourceCode:
            'https://github.com/JaimeTorrealba/creative-lab/blob/main/src/views/shader_demos/MouseReveal.vue',
          description:
            'An interesting effect of how to use transparency in combination with the mouse to reveal the content behind'
        },
        component: () => import('../views/shader_demos/MouseReveal.vue')
      },
      {
        path: '/rinnegan_demo',
        name: 'Rinnegan Demo',
        meta: {
          layout: defaultLayout,
          name: 'Trying to replicate the Rinnegan',
          difficulty: 'medium',
          isOnTres: false,
          section: 'shader_demo',
          img: '/gifs/rinnegan_demo.png',
          sourceCode:
            'https://github.com/JaimeTorrealba/creative-lab/blob/main/src/views/shader_demos/RinneganDemo.vue',
          description:
            'My personal fragment shader template.'
        },
        component: () => import('../views/shader_demos/RinneganDemo.vue')
      },
    {
        path: '/slider_demo',
        name: 'Slider Demo',
        meta: {
          layout: defaultLayout,
          name: 'A WebGl slider',
          difficulty: 'advanced',
          isOnTres: false,
          section: 'shader_demo',
          img: '/gifs/slider_demo.gif',
          sourceCode:
            'https://github.com/JaimeTorrealba/creative-lab/blob/main/src/views/shader_demos/SliderDemo.vue',
          description:
            'A WebGl slider made with shaders, using distorsión in images. This effect is base on: https://github.com/akella/webGLImageTransitions'
        },
        component: () => import('../views/shader_demos/SliderDemo.vue')
      },
    {
        path: '/wave_demo',
        name: 'Wave Demo',
        meta: {
          layout: defaultLayout,
          name: 'A WebGl ripple effect',
          difficulty: 'advanced',
          isOnTres: false,
          section: 'shader_demo',
          img: '/gifs/waves_demo.gif',
          sourceCode:
            'https://github.com/JaimeTorrealba/creative-lab/blob/main/src/views/shader_demos/WaveDemo.vue',
          description:
            'A WebGl ripple effect (like material design) but using shaders. This effect is base on: https://www.youtube.com/live/JaXb-hH2BIg?feature=share'
        },
        component: () => import('../views/shader_demos/WaveDemo.vue')
      },
]