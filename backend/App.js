const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const UserRouter = require("./routes/routeUser");
const AdminRouter = require("./routes/routeAdmin");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", UserRouter);
app.use("/admin", AdminRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
