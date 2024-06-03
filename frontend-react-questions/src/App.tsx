import React, { useState } from "react";
import Button from "./components/Button/Button";

const App = () => {
  const [childData, setChildData] = useState([]);

  const handleChildData = (data: React.SetStateAction<never[]>) => {
    setChildData(data);
  };

  return (
    <>
      {/* {ACCORDIAN_CONTENT.map((element,ind) => {
        return <Accordian title={element.title} content={element.content} key={ind}/>;
      })} */}
      {/* <GetData/> */}
      {/* <TodoList/> */}
      <Button handleChildData={handleChildData} />
      {childData.map((item: any) => {
        return <div>{item.username}</div>;
      })}
    </>
  );
};

export default App;
