import React, { useState } from 'react';

const SafeImage = ({ src, alt, className, loading = "lazy", ...props }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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
    <>
      {!isLoaded && (
        <div 
          className={`bg-gray-100 animate-pulse ${className}`}
          {...props}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!isLoaded ? 'hidden' : ''}`}
        loading={loading}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </>
  );
};

export default SafeImage;