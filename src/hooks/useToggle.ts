import { useState } from 'react';

const useToggle = (initialIndex: number = 0) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleIndex = (ind: number) => {
    setCurrentIndex(ind);
  };

  return { currentIndex, handleIndex };
};

export default useToggle;
