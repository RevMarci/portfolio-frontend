import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class Earth {
    public model: THREE.Group | null = null;
    private scene: THREE.Scene;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.loadModel();
    }

    private loadModel() {
        const loader = new GLTFLoader();

        const modelUrl = '/models/low_poly_earth.glb';

        loader.load(
            modelUrl,
            (gltf) => {
                this.model = gltf.scene;

                this.model.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        
                        child.material = new THREE.MeshPhongMaterial({
                            color: 0x8a8d8a,
                            shininess: 35,
                            specular: 0x444444,
                            flatShading: true,
                            side: child.material.name === 'water' ? THREE.DoubleSide : THREE.FrontSide
                        });
                        
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
                
                const scaleFactor = 100;
                this.model.scale.set(scaleFactor, scaleFactor, scaleFactor);
                this.model.position.set(0, -133, 0);

                this.scene.add(this.model);
                console.log('Earth model loaded');
            },
            (xhr) => {
                console.log(`Earth model: ${(xhr.loaded / xhr.total) * 100}% loaded`);
            },
            (error) => {
                console.error('Error occurred while loading the Earth model:', error);
            }
        );
    }
    
    public update(deltaTime: number) {
        
    }
}
