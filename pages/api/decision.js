
export default async function decisionHandler(req, res) {
    console.log(req.body);
    console.log("JSON object")
	const url = "https://api.up2tom.com/v3/decision/58d3bcf97c6b1644db73ad12";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "token 9307bfd5fa011428ff198bb37547f979",
        "content-type": "application/vnd.api+json",
      },
      body: (req.body)
    });
    const something = await response.json();
    console.log("something backend");
    console.log(something);
    res.status(200).json(something);
}
