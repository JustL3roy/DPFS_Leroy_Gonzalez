const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true })); // Para manejar formularios

app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Guarda el usuario en tu base de datos (ej. archivo JSON, MongoDB, etc.)
  res.redirect('/login');
});
