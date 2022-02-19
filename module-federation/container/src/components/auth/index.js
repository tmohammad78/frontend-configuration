import { mount } from "auth/Auth";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    mount(ref.current);
  }, [history]);

  return <div ref={ref} />;
};

export default Auth;
