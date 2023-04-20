import { useState, useEffect } from "react";
import ContinuousQuestionField from "./continuousQuestionField";
import NominalQuestionField from "./nominalQuestionField";
import ContinuousChoiceField from "./continuousChoiceField";
import NominalChoiceField from "./nominalChoiceField";

export default function Questionnaire() {
  const [questions, setQuestions] = useState([]);
  const [decision, setDecision] = useState("");
  const [answers, setAnswers] = useState({});
  const [modelName, setModelName] = useState("");

  useEffect(() => {
    const url = "https://api.up2tom.com/v3/models/58d3bcf97c6b1644db73ad12";
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "token 9307bfd5fa011428ff198bb37547f979",
      },
    })
      .then((response) => response.json())
      .then((responseBody) => {
        setModelName(responseBody.data.attributes.name)
        //console.log(responseBody.data.attributes.name)
        setQuestions(responseBody.data.attributes.metadata.attributes);
      });
  }, []);

  const setAnswer = (fieldName, fieldValue) => {
    answers[fieldName] = fieldValue;
    setAnswers(answers);
  };

  //console.log(questions);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      data: {
        type: "scenario",
        attributes: {
          input: answers,
        },
      },
    };

    //console.log(requestBody);

    const url = "https://api.up2tom.com/v3/decision/58d3bcf97c6b1644db73ad12";
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "token 9307bfd5fa011428ff198bb37547f979",
        "content-type": "application/vnd.api+json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((responseBody) => {
        setDecision(responseBody.data.attributes.decision);
      });
  };

  console.log(modelName);

  return (
    <div className="page">
      <form className="wrapper" onSubmit={handleSubmit}>
        <h1 className="form-title">{modelName}</h1>
        {questions.map((item) => (
          <div key={item.name} className="field-items">
            <Field setAnswer={setAnswer} field={item} />
          </div>
        ))}
        <div className="button-container">
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn" type="submit">
            Clear
          </button>
        </div>
      </form>
      <div>
        <h1>{decision}</h1>
      </div>
    </div>
  );
}

function Field(props) {
  //console.log(props.field);
  if (props.field.type === "Continuous") {
    return (
      <div>
        <ContinuousQuestionField
          field={props.field}
          setAnswer={props.setAnswer}
        />
        <ContinuousChoiceField
          field={props.field}
          setAnswer={props.setAnswer}
        />
      </div>
    );
  } else if (props.field.type === "Nominal") {
    return (
      <div>
        <NominalQuestionField field={props.field} setAnswer={props.setAnswer} />
        <NominalChoiceField field={props.field} setAnswer={props.setAnswer} />
      </div>
    );
  } else {
    console.log("Type not found");
  }
}
