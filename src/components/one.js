import { useState } from "react";
import { Button } from "react-bootstrap";

const One = () => {
  let [count, updateCount] = useState(0);

  const something = () => {
    updateCount(count + 1);
  };

  return (
    <div>
      <div>Just a test.</div>
      <div>Just a test.</div>
      <div>Just a test.</div>
      <div>Just a test.</div>
      <div>{count}</div>
      <Button variant="primary" onClick={something}>
        Primary
      </Button>
    </div>
  );
};

export default One;
