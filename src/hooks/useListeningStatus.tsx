import { useState } from "react";

export const useListeningStatus = () => {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    setListening(true);
  };

  const stopListening = () => {
    setListening(false);
  };

  return { listening, startListening, stopListening };
};
