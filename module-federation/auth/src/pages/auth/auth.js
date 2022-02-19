import React from "react";
import { useCallback, useState } from "react";
import Input from "../../components/input/input";
import t from "../../i18n";
import "./style.css";

const AuthPage = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = useCallback((e, type) => {
    setData((prevState) => ({
      ...prevState,
      [type]: e.target.value,
    }));
  }, []);

  const handleSubmit = () => {
    const customEvent = new CustomEvent("message", {
      detail: {
        action: "auth",
        value: data,
      },
    });
    window.dispatchEvent(customEvent);
  };

  return (
    <div className="input-box">
      <div>
        <Input
          value={data.username}
          placeholder={t("username")}
          onChange={(e) => handleChange(e, "username")}
        />
        <Input
          value={data.password}
          placeholder={t("password")}
          onChange={(e) => handleChange(e, "password")}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
