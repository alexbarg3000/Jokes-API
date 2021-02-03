const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allMyJokes  => res.json({ jokes: allMyJokes  }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.randomJoke = (req, res) => {
	Joke.find()
    .then(allMyJokes =>{
      var randNum = Math.floor(Math.random() * (allMyJokes.length))
      res.json({ joke: allMyJokes[randNum]})
    })
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};


module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};



//Alternative way

// module.exports = {
//   allJokes: (req, res) => {
//       Joke.find()
//       .then((data) => res.json(data))
//       .catch((err) => res.json(err));
//   },

//   singleJoke: (req, res) => {
//       Joke.findOne({ _id: req.params._id })
//       .then((data) => res.json(data))
//       .catch((err) => res.json(err));
//   },

//   randomJoke: (req, res) => {
//       Joke.aggregate({ $sample: {size: 1} })
//       .then((data) => res.json(data))
//       .catch((err) => res.json(err));
//   },

//   createJoke: (req, res) => {
//       Joke.create(req.body)
//       .then((data) => res.json(data))
//       .catch((err) => res.json(err));
//   },

//   updateJoke: (req, res) => {
//       Joke.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { runValidators: true, useFindAndModify: false })
//       .then((data) => res.json(data))
//       .catch((err) => res.json(err));
//   },

//   deleteJoke: (req, res) => {
//       Joke.findOneAndDelete({ _id: req.params.id })
//       .then((data) => res.json(data))
//       .catch((err) => res.json(err));
//   },
// };