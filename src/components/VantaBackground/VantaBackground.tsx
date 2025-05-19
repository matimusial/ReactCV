import React, { useRef, useEffect, useState } from 'react';
// @ts-ignore
import FOG from 'vanta/dist/vanta.fog.min';
// @ts-ignore
import * as THREE from 'three';

const VantaFogBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x317f37,
        midtoneColor: 0x000000,
        lowlightColor: 0x000000,
        baseColor: 0x000000,
        blurFactor: 0.52,
        speed: 0.0,
        zoom: 0.6,
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}
    />
  );
};

export default VantaFogBackground;
