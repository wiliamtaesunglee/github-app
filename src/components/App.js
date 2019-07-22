import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Thiss is a sample stateful and server-side\ rendered React application.
      <br />
      <br />
      Here is a button that will track how many times you click ti:
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
