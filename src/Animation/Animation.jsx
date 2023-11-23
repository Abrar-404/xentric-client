// Animation.js
import { useRef, useEffect } from 'react';
import anime from 'animejs';

const Animation = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const handleFocus = (target, offset, arrayValue) => {
      if (animationRef.current) animationRef.current.pause();

      animationRef.current = anime({
        targets: target,
        strokeDashoffset: {
          value: offset,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: arrayValue,
          duration: 700,
          easing: 'easeOutQuart',
        },
      });
    };

    document.querySelector('#email').addEventListener('focus', () => {
      handleFocus('path', 0, '240 1386');
    });

    document.querySelector('#password').addEventListener('focus', () => {
      handleFocus('path', -336, '240 1386');
    });

    document.querySelector('#submit').addEventListener('focus', () => {
      handleFocus('path', -730, '530 1386');
    });

    return () => {
      // Clean up event listeners
      document
        .querySelector('#email')
        .removeEventListener('focus', handleFocus);
      document
        .querySelector('#password')
        .removeEventListener('focus', handleFocus);
      document
        .querySelector('#submit')
        .removeEventListener('focus', handleFocus);
    };
  }, []);

  return null; // The animation logic is handled outside the React component tree
};

export default Animation;
