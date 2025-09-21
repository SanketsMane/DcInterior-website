import { useEffect } from 'react';

const ImagePreloader = () => {
  useEffect(() => {
    // Preload critical images for better performance
    const criticalImages = [
      '/hero-bg.jpeg',
      '/featured1.jpeg',
      '/featured2.jpeg',
      '/featured3.jpeg',
      '/about.jpeg'
    ];

    const preloadImages = (urls) => {
      urls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
      });
    };

    // Preload after component mounts
    const timer = setTimeout(() => {
      preloadImages(criticalImages);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
};

export default ImagePreloader;