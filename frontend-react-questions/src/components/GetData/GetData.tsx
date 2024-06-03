import React, { useState } from "react";
import styles from "./GetData.module.scss";


interface IData {
  completed?: boolean,
  id?: number,
  title?:string,
  userId:number
}
const GetData = () => {
  const [data, setData] = useState<IData[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    setData(todos);
    setOpenModal(true);
  };

  return (
    <div className={styles.outerWrapper}>
      Get Data
      <button  onClick={fetchData} className={styles.btn}>Fetch Data</button>
      {openModal && (
        <div className={styles.modal}>
          <div  onClick={() => setOpenModal(false)}>X</div>
          <div>{data.map((element)=>{ return<li key={element.userId}>{element.title}</li>})}</div>
        </div>
      )}
    </div>
  );
};

export default GetData;
