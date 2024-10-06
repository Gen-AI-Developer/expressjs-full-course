import express from "express"; // import express

const app = express(); // initialize express object

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
// Resquest Handler
app.get("/", (request, response) => {
  response.status(201).send({
    message:
      "Iran Seeks Pakistan’s Help to Train Fighter Pilots, Strengthening Military Ties",
  });
});
//Show Users Route all users record
app.get("/users", (request, response) => {
  response.status(200).send();
});
//single user route parametter record
app.get("/users/:id", (request, response) => {
  console.log(request.params);
  response.status(200).send();
});
