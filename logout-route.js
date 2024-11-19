app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Busca al usuario en la base de datos y verifica la contraseña
    // Si es correcto:
    req.session.user = { username }; // Guarda el usuario en la sesión
    res.redirect('/dashboard'); // Redirige al área de usuarios
  });
  
  app.get('/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.redirect('/dashboard');
      }
      res.clearCookie('connect.sid');
      res.redirect('/login');
    });
  });
  