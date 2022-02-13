import { useState } from 'react';

export default function useMouseOverShow() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleZoomEnter = () => {
    setIsMouseOver(true);
  };

  const handleZoomOut = () => {
    setIsMouseOver(false);
  };

  return { handleZoomEnter, handleZoomOut, isMouseOver };
}
