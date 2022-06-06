function Input({ className, name, id, type }) {
  return (
    <div className={className}>
      <label htmlFor={id}>{name}</label>
      <input type={type} id={id}></input>
    </div>
  );
}

export default Input;
