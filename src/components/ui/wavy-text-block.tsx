'use client';

import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';

type ScrollOffset = Parameters<typeof useScroll>[0]['offset'];
import React from 'react';

interface WavyTextsConfig {
  baseOffsetFactor: number;
  baseExtra: number;
  baseAmplitude: number;
  lengthEffect: number;
  frequency: number;
  progressScale: number;
  phaseShiftDeg: number;
  spring: { damping: number; stiffness: number };
}

interface WavyBlockItemProps extends HTMLMotionProps<'div'> {
  index: number;
  config?: WavyTextsConfig;
}

interface WavyBlockContextValue {
  scrollYProgress: MotionValue<number>;
  maxLen: number;
}

const WavyBlockContext = React.createContext<WavyBlockContextValue | undefined>(undefined);

function useWavyBlockContext() {
  const context = React.useContext(WavyBlockContext);
  if (context === undefined) throw new Error('useWavyBlockContext must be used within a WavyBlock');
  return context;
}

const toRadian = (deg: number) => (deg * Math.PI) / 180;

export function WavyBlockItem({
  index,
  config = {
    baseOffsetFactor: 0,
    baseExtra: 0,
    baseAmplitude: 24,
    lengthEffect: 0,
    frequency: 40,
    progressScale: 5,
    phaseShiftDeg: -180,
    spring: { damping: 28, stiffness: 200 },
  },
  style,
  ...props
}: WavyBlockItemProps) {
  const { scrollYProgress, maxLen } = useWavyBlockContext();
  const reducedMotion = useReducedMotion();
  const lengthFactor = Math.min(1, Math.max(0, maxLen / (maxLen || 1)));
  const [isMounted, setIsMounted] = React.useState(false);

  const calculateX = React.useCallback(
    (p: number, windowWidth?: number) => {
      const phase = config.progressScale * p;
      const width = windowWidth ?? (typeof window !== 'undefined' ? window.innerWidth : 1200);
      const baseOffset = config.baseOffsetFactor * width + config.baseExtra;
      const amplitudeScale = 1 - config.lengthEffect * lengthFactor;
      const amplitude = config.baseAmplitude * amplitudeScale;
      const angle = toRadian(config.frequency * index) + phase + toRadian(config.phaseShiftDeg);
      return baseOffset + amplitude * Math.cos(angle);
    },
    [config, lengthFactor, index],
  );

  const initialX = calculateX(0, 1200);
  const rawX = useMotionValue(initialX);
  const springX = useSpring(rawX, config.spring);
  const x = reducedMotion ? rawX : springX;

  React.useLayoutEffect(() => { setIsMounted(true); }, []);

  React.useEffect(() => {
    if (!scrollYProgress || !isMounted) return;
    // framer-motion v11+ uses .on('change', ...) instead of .onChange(...)
    const unsub = scrollYProgress.on('change', (p) => {
      const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
      rawX.set(calculateX(p, windowWidth));
    });
    return unsub;
  }, [scrollYProgress, rawX, calculateX, isMounted]);

  return <motion.div style={{ x, ...style }} suppressHydrationWarning {...props} />;
}

export function WavyBlock({
  offset = ['start end', 'end start'],
  ...props
}: React.ComponentPropsWithRef<'div'> & { offset?: ScrollOffset }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { current } = containerRef;

  const maxLen = React.useMemo(() => {
    if (!current?.children || current.children.length === 0) return 1;
    return Math.max(...Array.from(current.children).map((c) => String(c.textContent).length));
  }, [current?.children]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  return (
    <WavyBlockContext.Provider value={{ scrollYProgress, maxLen }}>
      <div ref={containerRef} {...props} />
    </WavyBlockContext.Provider>
  );
}
