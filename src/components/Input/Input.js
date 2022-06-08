function Input({ className, name, id, type, onChange }) {
  return (
    <div className={className}>
      <label htmlFor={id}>{name}</label>
      <input onChange={onChange} type={type} id={id}></input>
    </div>
  );
}

export default Input;
