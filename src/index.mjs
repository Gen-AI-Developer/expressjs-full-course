import express from "express"; // import express

const app = express(); // initialize express object

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
