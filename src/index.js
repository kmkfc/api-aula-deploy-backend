require("dotenv").config();
const expres = require("express");

const app = expres();

app.use(expres.json());

app.get("/", async (req, res) => {
  return res.json("Api esta Ok!");
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`sERVIDOR EM PÉ NA PORTA ${port}`);
});
