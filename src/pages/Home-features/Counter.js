import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function Counter({ targetValue, duration }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = targetValue / (duration * 1000 / 50); // Tính bước tăng dựa trên thời gian và giá trị đích

      const counterInterval = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setCount(targetValue);
          clearInterval(counterInterval);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50); // Cập nhật giá trị mỗi 50ms để làm mượt

      return () => clearInterval(counterInterval);
    }
  }, [inView, targetValue, duration]);

  return (
    <span ref={ref} className="counter">
      {count}
    </span>
  );
}

export default Counter;
