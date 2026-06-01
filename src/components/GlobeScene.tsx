"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlobeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(44, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const globe = new THREE.Group();
    scene.add(globe);

    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(1.45, 64, 64),
      new THREE.MeshStandardMaterial({
        color: "#07172f",
        metalness: 0.72,
        roughness: 0.38,
        transparent: true,
        opacity: 0.8
      })
    );
    globe.add(shell);

    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(1.465, 32, 32),
      new THREE.MeshBasicMaterial({ color: "#1b4d89", wireframe: true, transparent: true, opacity: 0.24 })
    );
    globe.add(wire);

    const gold = new THREE.MeshBasicMaterial({ color: "#d9b76e", transparent: true, opacity: 0.62 });
    const blue = new THREE.MeshBasicMaterial({ color: "#73b7ff", transparent: true, opacity: 0.54 });
    Array.from({ length: 46 }).forEach((_, index) => {
      const angle = (index / 46) * Math.PI * 2;
      const arc = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.0045, 8, 128, Math.PI * (0.58 + (index % 8) * 0.08)), index % 5 === 0 ? gold : blue);
      arc.rotation.set(Math.PI / 2.18, angle, Math.sin(angle) * 0.58);
      arc.position.y = Math.cos(angle) * 0.08;
      globe.add(arc);
    });

    const nodeGold = new THREE.MeshBasicMaterial({ color: "#f2dca2" });
    const nodeWhite = new THREE.MeshBasicMaterial({ color: "#d7e8ff" });
    Array.from({ length: 38 }).forEach((_, index) => {
      const phi = Math.acos(2 * ((index + 0.5) / 38) - 1);
      const theta = Math.PI * (1 + Math.sqrt(5)) * index;
      const node = new THREE.Mesh(new THREE.SphereGeometry(index % 6 === 0 ? 0.035 : 0.023, 16, 16), index % 4 === 0 ? nodeGold : nodeWhite);
      node.position.set(1.54 * Math.cos(theta) * Math.sin(phi), 1.54 * Math.sin(theta) * Math.sin(phi), 1.54 * Math.cos(phi));
      globe.add(node);
    });

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 18 + Math.random() * 52;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: "#e8edf4", size: 0.025, transparent: true, opacity: 0.65 })
    );
    scene.add(stars);

    scene.add(new THREE.AmbientLight("#d7e8ff", 0.72));
    const goldLight = new THREE.PointLight("#d9b76e", 8, 12);
    goldLight.position.set(3, 2.5, 4);
    scene.add(goldLight);
    const blueLight = new THREE.PointLight("#2d8cff", 5, 12);
    blueLight.position.set(-4, -1, 2);
    scene.add(blueLight);

    let frame = 0;
    let animationId = 0;
    const animate = () => {
      frame += 0.01;
      globe.rotation.y += 0.0028;
      globe.rotation.x = Math.sin(frame * 0.7) * 0.08;
      stars.rotation.y -= 0.00035;
      renderer.render(scene, camera);
      animationId = window.requestAnimationFrame(animate);
    };

    const resize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
      mount.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) material.forEach((item) => item.dispose());
          else material.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
