const handler = async (req, res) => {
  const response = await fetch("https://dummyjson.com/products/79");
  const product = await response.json();

  res.status(200).json(product);
};

export default handler;
