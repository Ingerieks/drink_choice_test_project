export default function NominalChoiceField(props) {
  const nominalOptions = props.field.domain.values;

  const changeHandler = (e) =>
    props.setAnswer(props.field.name, e.target.value);

  return (
    <>
      <div className="nominal-choice-field">
        <div className="choice-field">
          {nominalOptions.map((option) => (
            <>
              <input
                onChange={changeHandler}
                type="radio"
                value={option}
                name={props.field.name}
              />
              <label>{option}</label>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
