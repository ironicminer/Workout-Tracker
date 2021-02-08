const { Workout } = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find({}).then(function (data) {
      res.json(data);
    });
  });
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  app.post("/api/workouts", function (req, res) {
    Workout.create({}).then((data) => res.json(data));
  });
  //   app.get("/favicon.ico", function (req, res) {
  //     Workout.find().then((data) => res.json(data));
  //   });
  app.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    const workout = req.body;
    Workout.findByIdAndUpdate(
      id,
      { $push: { exercises: workout } },
      { new: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
