export default function ContinuousChoiceField(props) {
  const continuousOptionsLower = props.field.domain.lower;
  const continuousOptionsUpper = props.field.domain.upper;
  return (
    <>
      <input
        onChange={(e) => props.setAnswer("name", e.target.value)}
        className="continuous-choice-field"
        type="number"
        min={continuousOptionsLower}
        max={continuousOptionsUpper}
      />
    </>
  );
}

