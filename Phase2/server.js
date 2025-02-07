const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser")

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser())


// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/stores", require("./routes/storeRoutes"));

app.use("/api/dashboard", require("./routes/dashboardRoutes"));
app.use("/api/stores", require("./routes/storeRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
