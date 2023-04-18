import { useState, useEffect } from "react";

export default function Questionnaire() {
  const [questions, setQuestions] = useState([]);

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
        setQuestions(responseBody.data.attributes.metadata.attributes);
      });
  }, []);

  console.log(questions);

  return (
    <>
      <h1>This is the questionnaire</h1>
      {questions.map((item) => (
        <>
        <p>
          <Field field={item}/>
          </p>
        </>
      ))}
    </>
  );
}


function Field(props) {
    console.log(props.field)
    if (props.field.type === "Continuous") {
        return <ContinuousField field={props.field}/>;
    } else if (props.field.type === "something") {
        return <Something field={props.field} />;
    } else {
        console.log("Type not found")
    }
} 

function ContinuousField(props) {
 return props.field.question
}

function Something(props) {
    return props.field.question
   }





/*{questions.map((item) => (
    <>
    <p>{item}</p>
    </>
   ))}*/
