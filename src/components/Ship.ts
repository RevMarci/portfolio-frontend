import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export class Ship {
    mesh: THREE.Mesh;
    height: number = 51.1;

    constructor(
        {
            scene,
        }: {
            scene: THREE.Scene
        })
    {
        this.mesh = this.create();

        scene.add(this.mesh);
    }

    create(): THREE.Mesh {
        let baseGeometry = this.base();
        let topConeGeometry = this.createTopCone();
        topConeGeometry.translate(0, 15, 0);

        // TODO: heatshield

        let flapBottom1Geometry = this.flapBottom();
        flapBottom1Geometry.translate(4, -15, 0);
        let flapBottom2Geometry = this.flapBottom();
        flapBottom2Geometry.translate(4, -15, 0);
        flapBottom2Geometry.rotateY(Math.PI);
        let flapTop1Geometry = this.flapTop();
        flapTop1Geometry.translate(4, 14, 0);
        let flapTop2Geometry = this.flapTop();
        flapTop2Geometry.translate(4, 14, 0);
        flapTop2Geometry.rotateY(Math.PI);

        const geometries = [
            baseGeometry,
            topConeGeometry,
            flapBottom1Geometry,
            flapBottom2Geometry,
            flapTop1Geometry,
            flapTop2Geometry
        ].map(geometry => geometry.toNonIndexed());
        const mergedGeometry = mergeGeometries(geometries);

        const material = new THREE.MeshPhongMaterial({
            color: 0x8a8d8a,
            shininess: 35,
            specular: 0x444444,
            flatShading: true
        });
        
        const mergedMesh = new THREE.Mesh(mergedGeometry, material);

        mergedMesh.rotation.reorder('YXZ');
        
        return mergedMesh;
    }

    createTopCone(): THREE.BufferGeometry {
        const topBallRadius = 1.5;
        const bottomBallRadius = 4.5;

        let topBallGeometry = this.ball(topBallRadius);
        topBallGeometry.translate(0, 8.95, 0);
        let bottomBallGeometry = this.ball(bottomBallRadius);

        let middleCylinderGeometry = this.middleCylinder();
        middleCylinderGeometry.translate(0, 5.5, 0);

        const mergedGeometry = mergeGeometries([
            topBallGeometry,
            bottomBallGeometry,
            middleCylinderGeometry
        ]);
        return mergedGeometry;
    }

    base(): THREE.BufferGeometry {
        const radius = 4.5;
        const height = 30;
        const radialSegments = 32;
        
        const baseGeometry = new THREE.CylinderGeometry(radius, radius, height, radialSegments);
        return baseGeometry;
    }

    ball(radius: number): THREE.BufferGeometry {
        const widthSegments = 32;
        const heightSegments = 32;

        const ballGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
        return ballGeometry;
    }

    middleCylinder(): THREE.BufferGeometry {
        const radiusTop = 1.4;
        const radiusBottom = 4.25;
        const height = 8;
        const radialSegments = 32;

        const cylinderGeometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments);
        return cylinderGeometry;
    }

    flapBottom(): THREE.BufferGeometry {
        const shape = new THREE.Shape();

        shape.moveTo(0, 0);
        shape.lineTo(3, 0);
        shape.lineTo(3, 5);
        shape.lineTo(0, 8);
        shape.lineTo(0, 0);

        const geometry = new THREE.ExtrudeGeometry(shape, {
            depth: 0.3,
            bevelEnabled: false
        });

        return geometry;
    }

    flapTop(): THREE.BufferGeometry {
        const shape = new THREE.Shape();

        shape.moveTo(0, 0);
        shape.lineTo(3, 0);
        shape.lineTo(3, 2);
        shape.lineTo(-2, 8);
        shape.lineTo(0, 0);

        const geometry = new THREE.ExtrudeGeometry(shape, {
            depth: 0.3,
            bevelEnabled: false
        });

        return geometry;
    }
}