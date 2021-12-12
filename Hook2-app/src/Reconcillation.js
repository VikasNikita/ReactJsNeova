import { useEffect, useState } from "react";

export default () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      console.log("hi");
      setValue(value + 1);
    }, 2000);
  });
  //   return value % 2 ? <h1>In Reconsillation</h1> : <div>In Reconsillation</div>;
  return (
    <h1 style={{ backgroundColor: value % 2 ? "red" : "green" }}>
      In Reconsillation
    </h1>
  );
};
