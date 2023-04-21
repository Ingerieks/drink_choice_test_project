export default async function decisionHandler(req, res) {
  const url = "https://api.up2tom.com/v3/decision/58d3bcf97c6b1644db73ad12";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "token 9307bfd5fa011428ff198bb37547f979",
      "content-type": "application/vnd.api+json",
    },
    body: req.body,
  });

  res.status(200).json(await response.json());
}
