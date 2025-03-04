import express from "express";
import { connectDB } from "./config/database.js";
const app = express();
import ErrorMiddleware from "./middleware/Error.js";
import fileupload from "express-fileupload";
import cors from "cors";
import sliderRouter from "./routes/homesliderRoute.js";
import ContactusRouter from "./routes/contactusrouter.js";
import blogRouter from "./routes/blogRouter.js";
import FaqRouter from "./routes/FaqRouter.js";
import adminRoute from "./routes/AdminRouter.js";
// import categoryRouter from "./routes/CategoryRouter.js";
import subcategoryRouter from "./routes/SubCategory.js";
import sizeRouter from "./routes/SizeGuideRoute.js";
import productRouter from './routes/ProductRouter.js';
import brandRouter from "./routes/BrandRouter.js";
import http from "http";
import checkoutRouter from "./routes/CheckoutRouter.js";
connectDB();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  fileupload({
    useTempFiles: true,
  })
);
const server = http.createServer(app);

// app routes
app.use("/brands", brandRouter);

app.use("/slider", sliderRouter);
app.use("/contactus", ContactusRouter);
app.use("/blog", blogRouter);
app.use("/faq", FaqRouter);
app.use("/admin", adminRoute);
// app.use("/category", categoryRouter);
app.use("/subcategory", subcategoryRouter);
app.use("/sizeGuide", sizeRouter);
app.use("/products", productRouter);
app.use("/checkout", checkoutRouter);

app.get("/", async (req, res) => {
  res.send("App Is Running");
});

server.listen(process.env.PORT || 5000, () => {
  console.log(`Server  is running on %d port %s mode`, server.address().port,app.settings.env);
});



app.use(ErrorMiddleware);
// zuoYdCmrxdA2Vzb0
// seatweb4


