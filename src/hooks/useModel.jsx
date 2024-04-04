import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ModelProvider = ({ children }) => {
  const [calculate, setCalculate] = useState(0);

  return (
    <ChatContext.Provider
      value={{
        calculate,
        setCalculate,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useModel = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useModel must be used within a ModelProvider");
  }
  return context;
};
