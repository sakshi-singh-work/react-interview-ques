const Button = ({ handleChildData }: any) => {
  const handleBtnClick = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    await handleChildData(data);
  };
  return (
    <>
      <button onClick={handleBtnClick}>Click Me</button>
    </>
  );
};

export default Button;
