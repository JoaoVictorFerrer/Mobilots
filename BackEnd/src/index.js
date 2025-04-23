import express from "express";
import cors from 'cors';
import colors from "colors";
import citiesRouter from "./router/citiesRouter.js";
import hourRouter from "./router/hourRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.listen(port, () => {
  console.log(
    colors.cyan.bold(
      `👽 👻 REST API funcionando en el puerto http://localhost:${port} ✈️ 🌍 `
    )
  );
});

app.use("/api/cities",citiesRouter);
app.use("/api/",hourRouter);
