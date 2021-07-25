const InputTriangle = () => {
  const angleInput = document.getElementById("angle-input");
  const form = document.getElementById("form");

  const submitHandler = (e) => {
    e.preventDefault();
    if (angleInput.value === !0) {
      console.log(angleInput.value);
    }
  };

  return (
    <form id="form">
      <div>
        {" "}
        <label htmlFor="angle-input">
          Enter angles To evaluate wether triangle or not
        </label>
        <input type="number" name="angle-input" id="angle-input" />
        <button type="submit" id="submit-btn" onSubmit={submitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};
export default InputTriangle;
