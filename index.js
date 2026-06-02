const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/login", require("./routes/login"));

app.use("/students", require("./routes/students"));

app.use("/subjects", require("./routes/subject"));

app.use("/enrollments", require("./routes/enrollment"));

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});