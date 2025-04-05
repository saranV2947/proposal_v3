const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.use("/api", userRoutes);

// ✅ Use dynamic port for Render, fallback to 5000 locally
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on PORT ${PORT}`);
});
