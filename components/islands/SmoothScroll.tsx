"use client";

import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Snap from "lenis/snap";

function SnapInitializer() {
  const lenis = useLenis();
  const snapRef = useRef<Snap | null>(null);
  const initAttempts = useRef(0);

  useEffect(() => {
    if (!lenis) return;

    const initSnap = () => {
      // Try multiple selectors to find sections
      const sections = Array.from(
        document.querySelectorAll("main > section")
      ).filter((el): el is HTMLElement => el instanceof HTMLElement);

      if (sections.length === 0) {
        initAttempts.current++;
        if (initAttempts.current < 10) {
          setTimeout(initSnap, 200);
        }
        return;
      }

      // Destroy previous snap if exists
      if (snapRef.current) {
        snapRef.current.destroy();
      }

      const snap = new Snap(lenis, {
        type: "mandatory",
        lerp: 0.1,
        duration: 0.8,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      snap.addElements(sections, {
        align: "start",
      });

      snapRef.current = snap;
    };

    // Delay to ensure DOM + Lenis are fully ready
    const timer = setTimeout(initSnap, 300);

    return () => {
      clearTimeout(timer);
      if (snapRef.current) {
        snapRef.current.destroy();
        snapRef.current = null;
      }
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: false,
        autoRaf: true,
        anchors: true,
      }}
    >
      <SnapInitializer />
      {children}
    </ReactLenis>
  );
}
