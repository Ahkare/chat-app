import React, { useState } from "react";
import Contact from "./component/contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Contact
        name="Hadibéré"
        avatar="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        online={true}
      />
      <Contact
        name="Salim"
        avatar="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        online={false}
      />
      <Contact
        name="Yannick"
        avatar="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        online={true}
      />
    </div>
  );
}

export default App;
