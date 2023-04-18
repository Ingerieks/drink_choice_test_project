import { useState, useEffect } from "react";

export default function DisplayResults() {
    const [drinkResults, setDrinkResults] = useState([]);

    useEffect(() => {
        const url = "https://api.up2tom.com/v3/decision/58d3bcf97c6b1644db73ad12";
        fetch(url, {
          method: "POST",
          headers: {
            Authorization: "token 9307bfd5fa011428ff198bb37547f979",
          },
          body: JSON.stringify()
        })          
          .then((response) => response.json())
          .then((responseBody) => {
            setDrinkResults(responseBody.data.attributes.metadata.prediction.domain.values);
            console.log(responseBody.data.attributes.metadata.prediction.domain.values);
          });
      }, []);

    return(
        <>
        <h1>This is the best suited drink for the customer</h1>
        {drinkResults.map((item) => (
          <>
          <p>{item}</p>
          </>
        ))}
        </>
    )
}