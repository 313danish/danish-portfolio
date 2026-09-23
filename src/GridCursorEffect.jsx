// src/GridCursorEffect.jsx
import React, { useEffect, useRef } from "react";

export default function GridCursorEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    const gridSize = 45;

    // Simulated silky web anchors
    class WebAnchor {
      constructor() {
        this.x = -1000;
        this.y = -1000;
        this.targetX = -1000;
        this.targetY = -1000;
        this.vx = 0;
        this.vy = 0;
        this.tension = 0.08 + Math.random() * 0.06; // Springiness
        this.damp = 0.74 + Math.random() * 0.08;    // Silk friction
        this.alpha = 0;
        this.targetAlpha = 0;
      }

      setTarget(tx, ty, alpha) {
        this.targetX = tx;
        this.targetY = ty;
        this.targetAlpha = alpha;
      }

      update() {
        // Damped harmonic oscillator (spring jump physics)
        const fx = (this.targetX - this.x) * this.tension;
        const fy = (this.targetY - this.y) * this.tension;
        this.vx = (this.vx + fx) * this.damp;
        this.vy = (this.vy + fy) * this.damp;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha += (this.targetAlpha - this.alpha) * 0.14;
      }
    }

    // 4 elastic trailing web anchors that leap between grid nodes
    const anchors = Array.from({ length: 4 }, () => new WebAnchor());

    // Mouse pointer state
    const mouse = {
      x: -1000,
      y: -1000,
      lastGridX: -1000,
      lastGridY: -1000,
      active: false,
      isExcluded: false,
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Track mouse & enforce absolute blackout over non-grid elements
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;

      // Detect non-grid interactive surfaces (Cards, images, forms, nav, buttons)
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const isContentArea = el.closest(
          "img, a, button, input, textarea, form, nav, section, article, .group, [class*='bg-slate']"
        );
        mouse.isExcluded = !!isContentArea;
      } else {
        mouse.isExcluded = false;
      }

      if (mouse.isExcluded) {
        anchors.forEach((a) => (a.targetAlpha = 0));
        return;
      }

      // Calculate nearest primary grid node
      const currentGridX = Math.round(e.clientX / gridSize) * gridSize;
      const currentGridY = Math.round(e.clientY / gridSize) * gridSize;

      // Only jump anchors when crossing into a new grid cell threshold
      if (currentGridX !== mouse.lastGridX || currentGridY !== mouse.lastGridY) {
        mouse.lastGridX = currentGridX;
        mouse.lastGridY = currentGridY;

        // Radial offset vectors where the silk threads snap-jump to
        const nodeOffsets = [
          { ox: 0, oy: -gridSize },                      // Top
          { ox: gridSize * 2, oy: 0 },                   // Right
          { ox: -gridSize, oy: gridSize * 2 },           // Bottom-Left
          { ox: -gridSize * 2, oy: -gridSize },          // Far Top-Left
        ];

        anchors.forEach((anchor, i) => {
          const off = nodeOffsets[i];
          anchor.setTarget(currentGridX + off.ox, currentGridY + off.oy, 1);
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      anchors.forEach((a) => (a.targetAlpha = 0));
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (mouse.active && !mouse.isExcluded) {
        // Update anchor physics
        anchors.forEach((a) => a.update());

        // 1. Draw web perimeter boundary strands (connecting anchor to anchor)
        for (let i = 0; i < anchors.length; i++) {
          const next = (i + 1) % anchors.length;
          const a1 = anchors[i];
          const a2 = anchors[next];
          const strandAlpha = Math.min(a1.alpha, a2.alpha) * 0.28;

          if (strandAlpha > 0.01) {
            ctx.beginPath();
            // Elastic sagging curve between nodes
            const midX = (a1.x + a2.x) / 2 + (mouse.x - (a1.x + a2.x) / 2) * 0.15;
            const midY = (a1.y + a2.y) / 2 + (mouse.y - (a1.y + a2.y) / 2) * 0.15;
            ctx.moveTo(a1.x, a1.y);
            ctx.quadraticCurveTo(midX, midY, a2.x, a2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${strandAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // 2. Draw radial silk filaments from the cursor to each anchored node
        anchors.forEach((anchor) => {
          if (anchor.alpha > 0.01) {
            ctx.beginPath();
            // Fluid trailing bend as the cursor moves
            const cx = (mouse.x + anchor.x) / 2;
            const cy = (mouse.y + anchor.y) / 2;
            ctx.moveTo(mouse.x, mouse.y);
            ctx.quadraticCurveTo(cx, cy, anchor.x, anchor.y);

            ctx.strokeStyle = `rgba(56, 189, 248, ${anchor.alpha * 0.5})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();

            // Glowing anchor droplet at the grid intersection
            ctx.beginPath();
            ctx.arc(anchor.x, anchor.y, 2.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${anchor.alpha * 0.9})`;
            ctx.shadowColor = "#38bdf8";
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });

        // 3. Subtle core focal ring at the mouse pointer
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#38bdf8";
        ctx.shadowColor = "#38bdf8";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 w-full h-full"
    />
  );
}