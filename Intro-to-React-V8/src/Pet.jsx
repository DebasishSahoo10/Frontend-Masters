const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.breed}</h3>
      <p>{props.age}</p>
    </div>
  );
};

export default Pet;
