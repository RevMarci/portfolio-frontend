import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Ship } from './Ship'; 
import { Booster } from './Booster';

gsap.registerPlugin(ScrollTrigger);

export class ScrollAnimator {
    private camera: THREE.PerspectiveCamera;
    private boosterObj: Booster;
    private shipObj: Ship;

    private globalEase: string = "power1.inOut";

    constructor(camera: THREE.PerspectiveCamera, booster: Booster, ship: Ship) {
        this.camera = camera;
        this.boosterObj = booster;
        this.shipObj = ship;

        this.initAnimations();
    }

    private initAnimations(): void {
        const masterTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        masterTimeline.add(this.getCameraTimeline(), 0);

        masterTimeline.add(this.getShipTimeline(), 0);
        masterTimeline.add(this.getShipRotationTimeline(), 0);

        masterTimeline.add(this.getBoosterTimeline(), 0);
        masterTimeline.add(this.getBoosterRotationTimeline(), 0);
    }

    private getCameraTimeline(): gsap.core.Timeline {
        const tl = gsap.timeline();

        // Up - 50
        tl.to(this.camera.position, { x:50, y: 190, z: 50, duration: 30, ease: this.globalEase });
        tl.to({}, { duration: 20 });

        // Hot staging - 20
        tl.to(this.camera.position, { x:20, y: 180, z: 100, duration: 10, ease: this.globalEase });
        tl.to({}, { duration: 10 });

        // Ship coast - 40
        tl.to(this.camera.position, { x:20, y: 205, z: 30, duration: 20, ease: this.globalEase });
        tl.to({}, { duration: 20 });


        // Ship fall - 40
        tl.to(this.camera.position, { x:0, y: 210, z: 30, duration: 20, ease: this.globalEase });
        tl.to({}, { duration: 40 });

        // Ship land - 40
        tl.to(this.camera.position, { x:0, y: 100, z: 100, duration: 30, ease: this.globalEase });
        tl.to(this.camera.position, { x:0, y: 50, z: 100, duration: 35, ease: this.globalEase });
        tl.to(this.camera.position, { x:-50, y: 30, z: 100, duration: 30, ease: this.globalEase });
        tl.to({}, { duration: 20 });

        return tl;
    }

    private getShipTimeline(): gsap.core.Timeline {
        const tl = gsap.timeline();

        tl.to(this.shipObj.mesh.position, { x: 0, y: 200, z: 0, duration: 30, ease: this.globalEase });
        
        tl.to({}, { duration: 145 });

        tl.to(this.shipObj.mesh.position, { x: 0, y: 0 + this.shipObj.height, z: 0, duration: 70, ease: this.globalEase });
        


        return tl;
    }

    private getShipRotationTimeline(): gsap.core.Timeline {
        const tl = gsap.timeline();

        tl.to({}, { duration: 10 });

        tl.to(this.shipObj.mesh.rotation, { y: Math.PI / 2, duration: 30, ease: this.globalEase });
        tl.to({}, { duration: 30 });

        tl.to(this.shipObj.mesh.rotation, { x: -Math.PI / 8, duration: 40, ease: this.globalEase });
        
        tl.to(this.shipObj.mesh.rotation, { x: -(Math.PI / 2), duration: 40, ease: this.globalEase });

        tl.to({}, { duration: 20 });
        tl.to(this.shipObj.mesh.rotation, { x: 0, duration: 30, ease: this.globalEase });
        tl.to(this.shipObj.mesh.rotation, { x: Math.PI / 8, duration: 10, ease: this.globalEase });
        tl.to(this.shipObj.mesh.rotation, { x: -Math.PI / 16, duration: 10, ease: this.globalEase });
        tl.to(this.shipObj.mesh.rotation, { x: 0, duration: 5, ease: this.globalEase });
        tl.to({}, { duration: 25 });

        return tl;
    }

    private getBoosterTimeline(): gsap.core.Timeline {
        const tl = gsap.timeline();

        tl.to(this.boosterObj.mesh.position, { x: 0, y: 200-this.shipObj.height, z: 0, duration: 30, ease: this.globalEase });
        tl.to({}, { duration: 20 });

        tl.to(this.boosterObj.mesh.position, { x: 0, y: 0, z: 0, duration: 30, ease: this.globalEase });

        return tl;
    }

    private getBoosterRotationTimeline(): gsap.core.Timeline {
        const tl = gsap.timeline();

        tl.to({}, { duration: 10 });
        tl.to(this.boosterObj.mesh.rotation, { y: Math.PI / 2, duration: 30, ease: this.globalEase });
        tl.to({}, { duration: 10 });

        tl.to(this.boosterObj.mesh.rotation, { x: Math.PI * 2, duration: 40, ease: this.globalEase });

        return tl;
    }
}
