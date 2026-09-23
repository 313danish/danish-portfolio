// src/CustomCursor.jsx
import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const pointerRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // 1. Detect touch/mobile devices
    const checkTouch = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(hover: none), (pointer: coarse)").matches
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    // 2. Hide default OS cursor so our custom arrow takes over cleanly
    document.documentElement.classList.add("custom-cursor-active");

    const mouse = { x: -100, y: -100 };
    const pointer = { x: -100, y: -100 };
    const ring = { x: -100, y: -100, vx: 0, vy: 0 };
    const glow = { x: -100, y: -100 };

    let rafId;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target && target.closest(
        'a, button, input, textarea, select, [role="button"], label, .interactive-hover'
      );
      setIsHovered(Boolean(isInteractive));
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // 3. Animation loop with spring lag for ring + crisp tracking for arrow pointer
    const render = () => {
      // The arrow pointer locks tight to mouse coordinates for instant click accuracy
      pointer.x += (mouse.x - pointer.x) * 0.75;
      pointer.y += (mouse.y - pointer.y) * 0.75;

      // The halo ring trails behind with smooth spring lag
      const spring = 0.18;
      const friction = 0.76;
      ring.vx = (ring.vx + (mouse.x - ring.x) * spring) * friction;
      ring.vy = (ring.vy + (mouse.y - ring.y) * spring) * friction;
      ring.x += ring.vx;
      ring.y += ring.vy;

      // Ambient radial glow moves softly
      glow.x += (mouse.x - glow.x) * 0.08;
      glow.y += (mouse.y - glow.y) * 0.08;

      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glow.x}px, ${glow.y}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 1. Large Ambient Following Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[420px] h-[420px] -mt-[210px] -ml-[210px] rounded-full will-change-transform opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(56, 189, 248, 0.03) 45%, transparent 70%)",
        }}
      />

      {/* 2. Elastic Trailing Ring (Centers around the pointer tip) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full will-change-transform border transition-all duration-200 ease-out ${
          isHovered
            ? "w-10 h-10 -mt-5 -ml-5 border-sky-300/80 bg-sky-400/15 shadow-[0_0_15px_rgba(56,189,248,0.4)] scale-110"
            : "w-8 h-8 -mt-4 -ml-4 border-sky-400/40 bg-sky-400/5 shadow-[0_0_8px_rgba(56,189,248,0.15)] scale-100"
        }`}
      />

      {/* 3. Sleek Custom Mouse Pointer Arrow */}
      <div
        ref={pointerRef}
        className="fixed top-0 left-0 will-change-transform transition-transform duration-75"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)] transition-transform duration-150 ${
            isHovered ? "scale-110 rotate-[-8deg]" : "scale-100"
          }`}
        >
          {/* Outer stroke for sharp contrast against all background surfaces */}
          <path
            d="M3 3L10.07 20.97L13.58 13.58L20.97 10.07L3 3Z"
            fill={isHovered ? "#38bdf8" : "#0f172a"}
            stroke={isHovered ? "#ffffff" : "#38bdf8"}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}