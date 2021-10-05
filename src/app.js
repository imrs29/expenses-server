const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv");
const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

/*const dotenv = require("dotenv");

const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const incomeRoute = require("./routes/income/incomeRoutes");
const expensesRoute = require("./routes/expenses/expenseRoutes"); */
const app = express();

//env
dotenv.config();
//dbConnect
dbConnect();

//middlewares
app.use(express.json());

app.use("/api/users", userRoute);

// users routes
/*app.use("/api/users", userRoute);

//income routes
app.use("/api/income", incomeRoute);
//expenses Route
app.use("/api/expenses", expensesRoute); */

//Error
app.use(notFound);
app.use(errorHandler);

//income
//expenses */

module.exports = app;
