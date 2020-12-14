import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import { Dropbox } from "dropbox";
import { Logo } from "./logo";

export function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount((pre) => pre + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Logo />
      <p>{count}</p>
      <Button icon="rocket" content="Button" />
    </>
  );
}
