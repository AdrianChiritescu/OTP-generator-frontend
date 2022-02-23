import { createContext, useState } from "react";

const OtpContext = createContext();

export const OtpProvider = ({ children }) => {
  let [otp, setOtp] = useState([]);

  const generateOtp = async (postData) => {
    const response = await fetch(`/Otp/GenerateNew`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const data = await response.json();

    deleteOtp();
    setOtp(data);
  };

  const deleteOtp = () => {
    setOtp((otp = []));
  };

  return (
    <OtpContext.Provider
      value={{
        otp,
        deleteOtp,
        generateOtp,
      }}
    >
      {children}
    </OtpContext.Provider>
  );
};

export default OtpContext;
