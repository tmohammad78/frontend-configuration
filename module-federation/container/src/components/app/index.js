import { mount } from "app/App";
import React, { useRef, useEffect } from "react";

const AppPanel = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
export default AppPanel;
