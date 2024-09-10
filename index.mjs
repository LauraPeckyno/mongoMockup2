import express from "express";

const PORT = 5050;
const app = express();

import grades from "./routes/grades.mjs";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

app.use("/grades", grades);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


// import grades from "./routes/grades.mjs";

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Welcome to the API.");
// });

// app.use("/grades", grades);

// // Global error handling
// app.use((err, _req, res, next) => {
//   res.status(500).send("Seems like we messed up somewhere...");
// });

// // Start the Express server
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });
