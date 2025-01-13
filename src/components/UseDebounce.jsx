import { useEffect, useRef } from "react";

function useDebounce(callback, delay) {
    const timeoutId = useRef(null);
  
    useEffect(() => {
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(callback, delay);
    }, [callback, delay]);
  }

  export default useDebounce;