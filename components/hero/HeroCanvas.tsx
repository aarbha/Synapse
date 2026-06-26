'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './HeroCanvas.module.css';

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame = 0;
    let raf = 0;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const width = () => container.clientWidth;
    const height = () => container.clientHeight;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, width() / height(), 0.1, 100);
      camera.position.set(0, 0, 18);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width(), height());
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Particle field representing a neural network — Forsythia (MP025)
      const COUNT = 220;
      const positions = new Float32Array(COUNT * 3);
      const velocities = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        positions[i * 3 + 0] = (Math.random() - 0.5) * 28;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
        velocities[i * 3 + 0] = (Math.random() - 0.5) * 0.004;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.004;
      }

      const ptsGeometry = new THREE.BufferGeometry();
      ptsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Soft circular sprite texture for neon-dot look
      const tex = (() => {
        const c = document.createElement('canvas');
        c.width = 64;
        c.height = 64;
        const ctx = c.getContext('2d')!;
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, 'rgba(255,200,1,1)');
        grad.addColorStop(0.4, 'rgba(255,200,1,0.55)');
        grad.addColorStop(1, 'rgba(255,200,1,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(c);
      })();

      const ptsMaterial = new THREE.PointsMaterial({
        size: 0.55,
        map: tex,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(ptsGeometry, ptsMaterial);
      scene.add(points);

      // Line segments connecting near particles — rebuilt each frame
      const lineGeometry = new THREE.BufferGeometry();
      const maxLines = COUNT * 6;
      const linePositions = new Float32Array(maxLines * 6);
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 6));
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xffc801,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      const THRESH = 4.2;

      const animate = () => {
        frame = (frame + 1) % Number.MAX_SAFE_INTEGER;

        // Move particles
        const pos = ptsGeometry.attributes['position'].array as Float32Array;
        for (let i = 0; i < COUNT; i++) {
          pos[i * 3] += velocities[i * 3];
          pos[i * 3 + 1] += velocities[i * 3 + 1];
          pos[i * 3 + 2] += velocities[i * 3 + 2];
          // soft bounds
          if (Math.abs(pos[i * 3]) > 14) velocities[i * 3] *= -1;
          if (Math.abs(pos[i * 3 + 1]) > 9) velocities[i * 3 + 1] *= -1;
          if (Math.abs(pos[i * 3 + 2]) > 7) velocities[i * 3 + 2] *= -1;
        }
        ptsGeometry.attributes['position'].needsUpdate = true;

        // Rebuild connection lines for near pairs
        let lineIdx = 0;
        const lp = lineGeometry.attributes['position'].array as Float32Array;
        for (let i = 0; i < COUNT; i++) {
          for (let j = i + 1; j < COUNT; j++) {
            const dx = pos[i * 3] - pos[j * 3];
            const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
            const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
            const d2 = dx * dx + dy * dy + dz * dz;
            if (d2 < THRESH * THRESH && lineIdx < maxLines) {
              lp[lineIdx * 6 + 0] = pos[i * 3];
              lp[lineIdx * 6 + 1] = pos[i * 3 + 1];
              lp[lineIdx * 6 + 2] = pos[i * 3 + 2];
              lp[lineIdx * 6 + 3] = pos[j * 3];
              lp[lineIdx * 6 + 4] = pos[j * 3 + 1];
              lp[lineIdx * 6 + 5] = pos[j * 3 + 2];
              lineIdx++;
            }
          }
        }
        // Zero out the rest
        for (let k = lineIdx * 6; k < maxLines * 6; k++) lp[k] = 0;
        lineGeometry.attributes['position'].needsUpdate = true;

        // Gentle camera parallax on pointer
        if (targetX !== null && targetY !== null) {
          camera!.position.x += (targetX * 2 - camera!.position.x) * 0.04;
          camera!.position.y += (-targetY * 1.2 - camera!.position.y) * 0.04;
          camera!.lookAt(0, 0, 0);
        }

        points.rotation.y += 0.0006;
        lines.rotation.y += 0.0006;

        renderer!.render(scene!, camera!);
        raf = requestAnimationFrame(animate);
      };

      let targetX: number | null = null;
      let targetY: number | null = null;
      const onPointer = (e: PointerEvent) => {
        targetX = (e.clientX / window.innerWidth) * 2 - 1;
        targetY = (e.clientY / window.innerHeight) * 2 - 1;
      };

      const onResize = () => {
        if (!renderer || !camera) return;
        camera.aspect = width() / height();
        camera.updateProjectionMatrix();
        renderer.setSize(width(), height());
      };

      const onVisibility = () => {
        if (document.hidden) {
          cancelAnimationFrame(raf);
        } else if (!reduceMotion) {
          raf = requestAnimationFrame(animate);
        }
      };

      window.addEventListener('resize', onResize);
      window.addEventListener('pointermove', onPointer, { passive: true });
      document.addEventListener('visibilitychange', onVisibility);

      if (reduceMotion) {
        renderer.render(scene, camera);
      } else {
        raf = requestAnimationFrame(animate);
      }

      return () => {
        window.removeEventListener('resize', onResize);
        window.removeEventListener('pointermove', onPointer);
        document.removeEventListener('visibilitychange', onVisibility);
        cancelAnimationFrame(raf);
        ptsGeometry.dispose();
        ptsMaterial.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
        tex.dispose();
        renderer!.dispose();
        if (renderer!.domElement.parentNode === container) {
          container.removeChild(renderer!.domElement);
        }
      };
    };

    // Wait one frame to ensure container is laid out
    const t = window.setTimeout(init, 16);

    return () => {
      window.clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.canvas}
      aria-hidden="true"
    />
  );
}

export default HeroCanvas;