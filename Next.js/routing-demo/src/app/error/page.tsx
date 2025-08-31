const ErrorPlace = () => {
  const randomNumber = Math.floor(Math.random() * 2);
  console.log(randomNumber);
  if (randomNumber === 1) {
    throw new Error("Error page error");
  }

  return <h1>Error page</h1>;
};

export default ErrorPlace;
