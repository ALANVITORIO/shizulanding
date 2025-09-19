'use client';
import { useState, useEffect } from 'react';

export default function SmoothTransition({ children, isVisible, direction = 'left' }) {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  const getTransform = () => {
    if (!isAnimating) {
      switch (direction) {
        case 'left': return 'translateX(-100%)';
        case 'right': return 'translateX(100%)';
        case 'up': return 'translateY(-100%)';
        case 'down': return 'translateY(100%)';
        default: return 'translateX(-100%)';
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div style={{
      transform: getTransform(),
      opacity: isAnimating ? 1 : 0,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      width: '100%',
      height: '100%'
    }}>
      {children}
    </div>
  );
}

export function SlideContainer({ children, currentIndex, direction = 'horizontal' }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }}>
      {children.map((child, index) => {
        const isActive = index === currentIndex;
        const transform = direction === 'horizontal'
          ? `translateX(${(index - currentIndex) * 100}%)`
          : `translateY(${(index - currentIndex) * 100}%)`;

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              transform,
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: isActive ? 1 : 0.8,
              zIndex: isActive ? 10 : 1
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

export function FadeTransition({ children, isVisible, delay = 0 }) {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShouldRender(true), delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  if (!shouldRender) return null;

  return (
    <div style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDelay: delay + 'ms'
    }}>
      {children}
    </div>
  );
}