import { useEffect, useState } from "react";

const useTimeNow = () => {
  const [timeNow, setTimeNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [timeNow]);
  return timeNow;
};

export default useTimeNow;
