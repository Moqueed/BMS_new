const express = require("express");
const app = express();
require("dotenv").config() //load environment variables


const connectDB = require('./config/db');
const usersRouter = require("./routes/userRoutes");
const movieRouter = require("./routes/movieRoutes");
const theatreRouter = require("./routes/theatreRoutes");
const showRouter = require("./routes/showRoutes");
const bookingRouter = require("./routes/bookingRoutes")

connectDB();

app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/movies", movieRouter);
app.use("/api/theatres", theatreRouter);
app.use("/api/shows", showRouter);
app.use("/api/bookings", bookingRouter)

app.listen(8082, ()=>{
    console.log("Server is running on port 8082");
});