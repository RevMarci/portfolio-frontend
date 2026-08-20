import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export class Booster {
    constructor(
        {
            scene,
        }: {
            scene: THREE.Scene
        })
    {
        scene.add(this.create());
    }

    create(): THREE.Mesh {
        let baseGeometry = this.base();

        let raptorsGeometry = this.raptorFactory();
        raptorsGeometry.translate(0, -33, 0);

        let ringGeometry = this.ring();
        ringGeometry.translate(0, 36, 0);

        let ringHolderGeometry = this.ringHolderFactory();
        ringHolderGeometry.translate(0, 34, 0);

        let tankTopGeometry = this.tankTop();
        tankTopGeometry.translate(0, 31.5, 0);

        let gridFinGeometry = this.gridFinFactory();
        gridFinGeometry.translate(0, 30, 0);

        const mergedGeometry = mergeGeometries([
            baseGeometry,
            raptorsGeometry,
            ringGeometry,
            ringHolderGeometry,
            tankTopGeometry,
            gridFinGeometry
        ]);

        const material = new THREE.MeshPhongMaterial({
            color: 0x8a8d8a,
            shininess: 35,
            specular: 0x444444,
            flatShading: true
        });

        const mergedMesh = new THREE.Mesh(mergedGeometry, material);
        return mergedMesh;
    }

    base(): THREE.BufferGeometry {
        const radius = 4.5;
        const height = 65;
        const radialSegments = 32;

        const baseGeometry = new THREE.CylinderGeometry(radius, radius, height, radialSegments);
        return baseGeometry;
    }

    raptor(): THREE.BufferGeometry {
        const topRadius = 0.2;
        const bottomRadius = 0.6;
        const height = 1.5;
        const radialSegments = 8;

        const raptorGeometry = new THREE.CylinderGeometry(topRadius, bottomRadius, height, radialSegments);
        return raptorGeometry;
    }

    raptorFactory(): THREE.BufferGeometry {
        const raptorGeometry = this.raptor();

        const raptorCount = [5, 10, 20];
        const raptorRadius = [1, 2.5, 4];

        const raptors: THREE.BufferGeometry[] = [];

        for (let i = 0; i < raptorCount.length; i++) {
            const count = raptorCount[i];
            const radius = raptorRadius[i];


            for (let i = 0; i < count; i++) {
                const angle = (i / count) * Math.PI;

                const raptor = raptorGeometry.clone();

                raptor.translate(
                    Math.cos(angle) * radius,
                    0,
                    Math.sin(angle) * radius
                );

                raptor.rotateY(-angle);

                raptors.push(raptor);
            }
        }

        const mergedRaptors = mergeGeometries(raptors);
        return mergedRaptors;
    }

    ring(): THREE.BufferGeometry {
        const radius = 4.4;
        const tubeRadius = 0.1;
        const radialSegments = 4;
        const tubularSegments = 32;

        const ringGeometry = new THREE.TorusGeometry(radius, tubeRadius, radialSegments, tubularSegments);
        ringGeometry.rotateX(Math.PI / 2); // horizontal
        return ringGeometry;
    }

    ringHolder(): THREE.BufferGeometry {
        const radius = 0.1;
        const height = 4;
        const radialSegments = 4;

        const raptorGeometry = new THREE.CylinderGeometry(radius, radius, height, radialSegments);
        return raptorGeometry;
    }

    ringHolderFactory(): THREE.BufferGeometry {
        const ringHolderGeometry = this.ringHolder();

        const count = 20;
        const radius = 4.4;

        const ringHolders: THREE.BufferGeometry[] = [];

        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI;

            const raptor = ringHolderGeometry.clone();

            raptor.translate(
                Math.cos(angle) * radius,
                0,
                Math.sin(angle) * radius
            );

            raptor.rotateY(-angle);

            ringHolders.push(raptor);
        }

        return mergeGeometries(ringHolders);
    }

    tankTop(): THREE.BufferGeometry {
        const radius = 4.5;
        const widthSegments = 32;
        const heightSegments = 16;

        const tankTopGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
        return tankTopGeometry;
    }

    gridFin(): THREE.BufferGeometry {
        const width = 3;
        const height = 0.3;
        const depth = 2;

        const gridFinGeometry = new THREE.BoxGeometry(width, height, depth);
        return gridFinGeometry;
    }

    gridFinFactory(): THREE.BufferGeometry {
        const gridFinGeometry = this.gridFin();

        const count = 4;
        const radius = 6;

        const gridFins: THREE.BufferGeometry[] = [];

        for (let i = 0; i < count - 1; i++) {
            const angle = (i / count) * Math.PI * 2;

            const raptor = gridFinGeometry.clone();

            raptor.rotateY(angle);

            raptor.translate(
                Math.cos(angle) * radius,
                0,
                Math.sin(angle) * radius
            );

            console.log(angle);

            gridFins.push(raptor);
        }

        return mergeGeometries(gridFins);
    }
}
