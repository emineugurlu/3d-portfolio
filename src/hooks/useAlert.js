import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: "", type: "" });

  const showAlert = ({ text, type }) => {
    setAlert({ show: true, text, type });

    // Otomatik gizle
    setTimeout(() => {
      setAlert({ show: false, text: "", type: "" });
    }, 3000);
  };

  const hideAlert = () => {
    setAlert({ show: false, text: "", type: "" });
  };

  return { alert, showAlert, hideAlert };
};

export default useAlert;
