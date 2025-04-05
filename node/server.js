const express = require("express");

const userRoutes = require("./routes/userRoutes");


const app = express();
app.use(express.json());



app.use("/api", userRoutes);

app.listen(5000, () => {
  console.log("🚀 Server is running on PORT 5000");
});
