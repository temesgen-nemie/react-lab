import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Counter from "./Counter.jsx";

function App() {
  const initialInfo = {
    name: "Abu",
    age: 22,
    isStudent: false,
  };

  const [info, setInfo] = useState(initialInfo);

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Card info={info} />
        <Counter info={info} setInfo={setInfo} initialInfo={initialInfo} />
      </div>
      <Footer />
    </>
  );
}

export default App;
