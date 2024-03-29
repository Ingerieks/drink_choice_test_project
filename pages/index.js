
import { useState, useEffect } from "react";
import ContinuousQuestionField from "../components/continuousQuestionField";
import NominalQuestionField from "../components/nominalQuestionField";
import ContinuousChoiceField from "../components/continuousChoiceField";
import NominalChoiceField from "../components/nominalChoiceField";

export default function DisplayField() {
  const [questions, setQuestions] = useState([]);
  const [decision, setDecision] = useState("");
  const [answers, setAnswers] = useState({});
  const [modelName, setModelName] = useState("");

  useEffect(() => {
    const url = "./api/model";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseBody) => {
        setModelName(responseBody.data.attributes.name);
        setQuestions(responseBody.data.attributes.metadata.attributes);
      });
  }, []);

  const setAnswer = (fieldName, fieldValue) => {
    answers[fieldName] = fieldValue;
    setAnswers(answers);
  };

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

    const url = "./api/decision";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((responseBody) => {
        setDecision(responseBody.data.attributes.decision);
      });
  };

  return (
    <>
      <div className="flex flex-col place-items-center mt-10">
        <form
          onSubmit={handleSubmit}
          className=" pt-6 pl-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-100"
        >
          <h1 className="font-bold text-3xl mb-3">{modelName}</h1>
          {questions.map((item) => (
            <div key={item.name} className="field-items">
              <Field setAnswer={setAnswer} field={item} />
            </div>
          ))}
          <div className="button-container">
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mb-10">
          <h1 className="text-4xl font-bold">{decision}</h1>
        </div>
      </div>
    </>
  );
}

function Field(props) {
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
