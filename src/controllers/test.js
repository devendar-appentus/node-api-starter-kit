"use strict";
const { con, seq } = require("../../lib/sequelize");
const User = require("../models/test");

exports.add = async function(req, res, next) {
  var response = await User.addUser(req.body)
  res.json(response);
};
// exports.User = async (req, res) => {
//     try {
//         var data = {}
//         await User.create({
//             name: req.body.name,
//             email: req.body.email,
//             mobile: req.body.mobile,
//             city: req.body.city,
//         })
//         data['status'] = 200;
//         data['message'] = "Successfully added";
//         res.send(data)
//     } catch (error) {
//         console.log(error, " Something went wrong");
//     }
// };

// const db = require("../models/test");
// const User = db.user;

// const add = (req, res) => {
//     if (!req.body.name) {
//         res.status(400).send({
//         message: "Content can not be empty!"
//     });
//     return;
//     }

//   const user = {
//     name: req.body.name,
//     email: req.body.email,
//     mobile:req.body.mobile,
//     city:req.body.city
//   };

//   User.create(user)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Error occurred while creating the User."
//       });
//     });
// };
// module.exports ={add}
