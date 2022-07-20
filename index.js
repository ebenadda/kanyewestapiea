import axios from "axios";
import express from "express";
import { pathToFileURL } from "url";
const app = express();
import Cors from "cors";

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});

app.use(Cors());

// app.use((req, res, next) => {
//   console.log("Some end poing hit");
//   next();
// });

const URL = "https://api.kanye.rest/";

//TODO go to the url and fetch the data thast there

//GET /Kanye_quotes
//<SERVERNAME>.<METHODNAME>.(<PATHNAME>, <CALLBACK FUNTION>)
app.get(
  "/kanye_quotes",
  // (req, res, next) => {
  //   console.log("middleware hit");
  //   next();
  // },
  async (req, res) => {
    try {
      const response = await axios.get(URL);
      res.send(response.data);
    } catch (error) {
      console.log(error);
    }
  }
);

app.get("/eben", (req, res) => {
  res.send("Hello Eben");
});
