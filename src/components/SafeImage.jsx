import React, { useState, useEffect } from 'react';

const SafeImage = ({ src, alt, className, loading = "lazy", priority = false, ...props }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);

  // Preload important images
  useEffect(() => {
    if (priority || loading === 'eager') {
      const img = new Image();
      img.onload = () => setIsPreloaded(true);
      img.onerror = () => setHasError(true);
      img.src = src;
    }
  }, [src, priority, loading]);

  const handleError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        {...props}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 animate-pulse ${className}`}
          style={{ zIndex: 1 }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 ease-in-out`}
        loading={loading}
        onError={handleError}
        onLoad={handleLoad}
        style={{ zIndex: 2, position: 'relative' }}
        {...props}
      />
    </div>
  );
};

export default SafeImage;