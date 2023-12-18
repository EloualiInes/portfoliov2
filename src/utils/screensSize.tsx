import { useState, useEffect } from "react";

type TypeSizeScreen = {
  width: number;
  height: number;
};

function ScreenSize(): TypeSizeScreen {
  const [size, setSize] = useState<TypeSizeScreen>(getSize);

  useEffect(() => {
    function handleResize() {
      setSize(getSize());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getSize(): TypeSizeScreen {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  return size;
}

export default ScreenSize;
