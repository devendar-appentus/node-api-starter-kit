"use strict";
// const Sequelize = require('sequelize');
// const { con } = require('../../lib/sequelize')

//  const { con ,sequelize} = require('../../lib/sequelize');
//  const Sequelize = require('sequelize');
//  // con.sync({force: true})
//  var User = sequelize.define("user", {
//      id: {
//          type: Sequelize.INTEGER,
//          allowNull: false,
//          primaryKey: true,
//          autoIncrement: true
//      },
//      name: Sequelize.STRING,
//      email: Sequelize.STRING,
//      mobile: Sequelize.STRING,
//      city: Sequelize.STRING
//  });
//  module.exports = User


// module.exports = (sequelize, Sequelize) => {
//     db.sync({
//         force: true
//     });
//     const User = sequelize.define("user", {
//         name: {
//             type: Sequelize.STRING
//         },
//         email: {
//             type: Sequelize.STRING
//         },
//         mobile: {
//             type: Sequelize.INTEGER
//         },
//         city: {
//             type: Sequelize.STRING
//         }
//     });

//     return User;
// };

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

exports.addUser = async (req, res) => {
    // await addUser.sync({ force: true });
    try {
        const User = sequelize.define("user", {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            mobile: DataTypes.STRING,
            city: DataTypes.STRING,

        });
        User.create({
            name: req.name,
            email: req.email,
            mobile: req.mobile,
            city: req.city,
        })
            .then((user) => {
                console.log("success",user);
            })
            .catch((err) => {
                console.log(err);

            });


    } catch (error) {
        console.log(error);
    }
}
