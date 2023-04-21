export default async function modelHandler(req, res) {
  const url = "https://api.up2tom.com/v3/models/58d3bcf97c6b1644db73ad12";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "token 9307bfd5fa011428ff198bb37547f979",
    },
  });
  res.status(200).json(await response.json());
}
