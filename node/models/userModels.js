// const { DataTypes } = require('sequelize');
// const sequelize = require('../db');

// const User = sequelize.define('User', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     age: {
//         type: DataTypes.STRING // Changed from INTEGER to STRING
//     },
//     phoneNumber: {
//         type: DataTypes.STRING, // New column added
//         allowNull: true
//     },
    
//     status :{
//             type:DataTypes.BOOLEAN,
//             allowNull:true
//         }
    
// }, {
//     timestamps: true
// });

// // Sync model with the database
// (async () => {
//     await User.sync(); 
// })();

// module.exports = User;
