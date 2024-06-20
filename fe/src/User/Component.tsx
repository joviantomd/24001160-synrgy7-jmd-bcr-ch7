import React from 'react';

interface ExampleCarouselImageProps {
  text: string;
}

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = ({ text }) => {
  return (
    <div>
      <img
        className="d-block w-100"
        src="https://placehold.co/800x600"
        alt={text}
      />
    </div>
  );
}

export default ExampleCarouselImage;
