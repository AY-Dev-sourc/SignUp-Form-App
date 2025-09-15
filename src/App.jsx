import { useState } from "react";
import Card from "./Card";
import Success from "./Success.jsx";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);0

  return (
    <>
      {isSuccess ? 
      (<Success RenderCard={() => setIsSuccess(false)}/>) : 
      (<Card onSuccess={() => setIsSuccess(true)} />)
      };
    </>
  );
}

export default App;
