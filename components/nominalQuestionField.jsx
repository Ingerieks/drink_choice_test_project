export default function NominalQuestionField(props) {
  const nominalQuestions = props.field.question;
  return <p className="mb-1">{nominalQuestions}</p>;
}
