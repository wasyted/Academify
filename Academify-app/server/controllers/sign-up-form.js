const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UserSchema = require("../models/User")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sign-up-form', { title: 'Register / Login' , usernameTaken: false});
});

const User = UserSchema;

router.post("/", async (req, res, next) => {
  const saltRounds = 10; // Número de rondas para el algoritmo de cifrado
  try {

    // Check if the username already exists in the database
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      // Username already taken, handle accordingly (e.g., return an error response)
      return res.render('sign-up-form', { title: 'Register / Login' , usernameTaken: true});
    }

    // Cifrar la contraseña con bcrypt
    bcrypt.hash(req.body.password, saltRounds, async (err, hashedPassword) => {
      if (err) {
        // Manejar el error de cifrado
        return next(err);
      }

      dateOfBirth = new Date(req.body.dateOfBirth);

      // Crear un nuevo usuario con la contraseña cifrada
      const user = new User({
        username: req.body.username,
        password: hashedPassword, // Usar la contraseña cifrada
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        country: req.body.country,
        dateOfBirth: dateOfBirth,
        email: req.body.email
      });

      // Almacenar el usuario en la base de datos
      const result = await user.save();

      // Redirigir después de almacenar en la base de datos
      res.json({ success: true, message: 'Registration successful. You can now log in.' });
    });
  } catch (err) {
    // Manejar otros errores
    return next(err);
  }
});

module.exports = router;
