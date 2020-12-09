// require("dotenv").config();
// require("../app.js"); // fetch the db connection
// const CelebrityModel = require("./../models/celebrity"); // fetch the model to validate our user document before insertion (in database)

// const celebrities = [
//   {
//     name: "Emma Watson",
//     occupation: "Actor",
//     catchPhrase: "LeviOsa not Leviosaaaa",
//   },
//   { name: "Heath Ledger", occupation: "Actor", catchPhrase: "Why so serious?" },
//   {
//     name: "Peter Dinklage",
//     occupation: "Actor",
//     catchPhrase: "A Lannister always pays his debts",
//   },
// ];

// // CRUD methods are embeded in ANY model generated with mongoose
// // important note : every mongoose model's method return a Promise

// CelebrityModel.deleteMany()
//   .then(async () => {
//     // insert all robots
//     const insertedCelebrities = await CelebrityModel.insertMany(celebrities);
//     console.log(insertedCelebrities);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

require("dotenv").config();
require("../app.js"); // fetch the db connection
const MovieModel = require("./../models/movie"); // fetch the model to validate our user document before insertion (in database)

const movies = [
  {
    name: "Whiplash",
    genre: "Drama",
    plot:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
  },
  {
    name: "Parasite",
    genre: "Thriller",
    plot:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
  },
  {
    name: "Les Misérables",
    genre: "Drama",
    plot:
      "A cop from the provinces moves to Paris to join the Anti-Crime Brigade of Montfermeil, discovering an underworld where the tensions between the different groups mark the rhythm.",
  },
];

// CRUD methods are embeded in ANY model generated with mongoose
// important note : every mongoose model's method return a Promise

MovieModel.deleteMany()
  .then(async () => {
    // insert all robots
    const insertedMovies = await MovieModel.insertMany(movies);
    console.log(insertedMovies);
  })
  .catch((err) => {
    console.log(err);
  });
