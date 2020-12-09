require("dotenv").config();
require("../app.js"); // fetch the db connection
const CelebrityModel = require("./../models/celebrity"); // fetch the model to validate our user document before insertion (in database)

const celebrities = [
  {
    name: "Emma Watson",
    occupation: "Actor",
    catchPhrase: "LeviOsa not Leviosaaaa",
  },
  { name: "Heath Ledger", occupation: "Actor", catchPhrase: "Why so serious?" },
  {
    name: "Peter Dinklage",
    occupation: "Actor",
    catchPhrase: "A Lannister always pays his debts",
  },
];

// CRUD methods are embeded in ANY model generated with mongoose
// important note : every mongoose model's method return a Promise

CelebrityModel.deleteMany()
  .then(async () => {
    // insert all robots
    const insertedCelebrities = await CelebrityModel.insertMany(celebrities);
    console.log(insertedCelebrities);
  })
  .catch((err) => {
    console.log(err);
  });
