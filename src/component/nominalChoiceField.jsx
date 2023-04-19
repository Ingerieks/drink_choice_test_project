export default function NominalChoiceField(props) {
  const nominalOption_1 = props.field.domain.values[0];
  const nominalOption_2 = props.field.domain.values[1];
  const nominalOption_3 = props.field.domain.values[2];

  const changeHandler = (e) => props.setAnswer(props.field.name, e.target.value);

  return (
    <>
      <div className="nominal-choice-field">
        <div className="choice-field">
        <input onChange={changeHandler} type="radio" value={nominalOption_1} />
        <label>{nominalOption_1}</label>
        </div>
        <div className="choice-field">
        <input onChange={changeHandler} type="radio" value={nominalOption_2} />
        <label>{nominalOption_2}</label>
        </div>
        <div className="choice-field">
        {nominalOption_3 ? (
          <>
            <input onChange={changeHandler}  type="radio" value={nominalOption_3} />
            <label>{nominalOption_3}</label>
          </>
        ) : (
          ""
        )}
        </div>
      </div>
    </>
  );
}
