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
import categoryRouter from "./routes/CategoryRouter.js";
import subcategoryRouter from "./routes/SubCategory.js";
import sizeRouter from "./routes/SizeGuideRoute.js";
import productRouter from './routes/ProductRouter.js';
import brandRouter from "./routes/BrandRouter.js";

// import bodyParser from 'body-parser';
// import puppeteer from 'puppeteer';
// import * as cheerio from 'cheerio';
// import {cheerio}  from "cheerio";
// import { Cheerio } from "cheerio";
// import axios from "axios";
// const cheerio = require('cheerio');

// import { isCheerio } from "cheerio/utils";
connectDB();
import { createServer } from "http";

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
const server = createServer(app);

// app routes
app.use("/brands", brandRouter);

app.use("/slider", sliderRouter);
app.use("/contactus", ContactusRouter);
app.use("/blog", blogRouter);
app.use("/faq", FaqRouter);
app.use("/admin", adminRoute);
app.use("/category", categoryRouter);
app.use("/subcategory", subcategoryRouter);
app.use("/sizeGuide", sizeRouter);
app.use("/products", productRouter);
// async function scrapeMyFreeScoreNow(email, password) {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();

//   try {
//     // Step 1: Navigate to the Login Page
//     await page.goto('https://member.myfreescorenow.com/login', { waitUntil: 'networkidle2' });

//     // Step 2: Perform Login
//     await page.type('input[name="loginType"]', 'CUSTOMER');
//     await page.type('input[name="j_username"]', email);
//     await page.type('input[name="j_password"]', password);
//     await page.click('button[type="submit"]');
//     await page.waitForNavigation({ waitUntil: 'networkidle2' });

//     console.log('Login successful!');

//     // Step 3: Navigate to Dashboard or User Activities Page
//     await page.goto('https://member.myfreescorenow.com/member/home', { waitUntil: 'networkidle2' });

//     // Step 4: Extract User Data
//     // const userData = await page.evaluate(() => {
//     //   // Extract the credit score data
//     //   const scoreTracker = document.querySelector(".scoretracker-value")?.textContent.trim() || "769";
//     //   const scoreBuilder = document.querySelector(".scorebuilder-value")?.textContent.trim() || "73";
//     //   const scoreBoost = document.querySelector(".scoreboost-value")?.textContent.trim() || "0";
//     //   const futureScore = document.querySelector(".futurescore-value")?.textContent.trim() || "842";

//     //   return {
//     //     creditScore: {
//     //       scoreTracker,
//     //       scoreBuilder,
//     //       scoreBoost,
//     //       futureScore,
//     //     },
//     //   };
//     // });

//     // // console.log("User data extracted:", userData);

//     // // Return the data as JSON
//     // return userData;
//     console.log('Extracting data');
//     const html = await page.content();
//     const $ = cheerio.load(html);

//     let userData = {};

//     $('*').each((index, element) => {
//       const text = $(element).text().trim();
//       const key = $(element).attr('class') || $(element).prop('tagName');
//       if (text) {
//         if (!userData[key]) {
//           userData[key] = [];
//         }
//         userData[key].push(text);
//       }
//     });

//     console.log('Extracted data:', userData);
//     const scrapedData = await page.evaluate(() => {
//       const result = {};
//       const elements = document.querySelectorAll("*");
// console.log("elements ===", elements);

//       elements.forEach((element) => {
//         const text = element.textContent.trim();
//         const key = element.className || element.tagName;
//         if (text) {
//           if (!result[key]) {
//             result[key] = [];
//           }
//           result[key].push(text);
//         }
//       });

//       return result;
//     });

//     // console.log("Scraped Data:", scrapedData);

//     return scrapedData;
//   } catch (error) {
//     console.error('Error during scraping:', error);
//     throw error;
//   } finally {
//     await browser.close();
//   }
// }


// app.post('/scrape-myfreescorenow', async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password are required' });
//   }

//   try {
//     const userData = await scrapeMyFreeScoreNow(email, password);
    
//     res.status(200).json({ message: 'Scraping successful',data: userData });
//   } catch (error) {
//     res.status(500).json({ message: 'Scraping failed', error: error.message });
//   }
// });

// app.get('/scrape', async (req, res) => {
//   try {
//     // URL to scrape
//     const url = 'https://member.myfreescorenow.com/member/home' // Replace with the target website

//     // Fetch the HTML from the website
//     const { data: html } = await axios.get(url);

//     // Load the HTML into cheerio
//     const $ = cheerio.load(html);

//     // Extract specific data (modify as per the website structure)
//     const scrapedData = [];
//     $('selector').each((index, element) => {
//       const title = $(element).find('sub-selector').text(); // Adjust selectors
//       const link = $(element).find('sub-selector').attr('href');
//       scrapedData.push({ title, link });
//     });

//     // Return the scraped data in JSON format
//     res.json(scrapedData);
//   } catch (error) {
//     console.error('Error scraping data:', error.message);
//     res.status(500).json({ error: 'Failed to scrape data' });
//   }
// });
app.get("/", async (req, res) => {
  res.send("App Is Running");
});

server.listen(process.env.PORT || 5000, () => {
  // console.log(`Server is running on port 5000`,this.address().port, app.settings.env);
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
// app.listen(process.env.PORT || 5000, function(){
 
// });
app.use(ErrorMiddleware);
// zuoYdCmrxdA2Vzb0
// seatweb4


