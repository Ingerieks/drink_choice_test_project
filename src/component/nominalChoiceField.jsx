export default function NominalChoiceField(props) {
  const nominalOption_1 = props.field.domain.values[0];
  const nominalOption_2 = props.field.domain.values[1];
  const nominalOption_3 = props.field.domain.values[2];

  return (
    <>
      <div className="nominal-choice-field">
        <div className="choice-field">
        <input type="radio" />
        <label>{nominalOption_1}</label>
        </div>
        <div className="choice-field">
        <input type="radio" />
        <label>{nominalOption_2}</label>
        </div>
        <div className="choice-field">
        {nominalOption_3 ? (
          <>
            <input type="radio" />
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
