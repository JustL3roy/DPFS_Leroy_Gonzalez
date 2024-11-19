function guestOnly(req, res, next) {
    if (req.session.user) {
      return res.redirect('/dashboard'); // Si está logueado, redirige
    }
    next(); // Si no está logueado, permite acceso
  }

  function authOnly(req, res, next) {
    if (!req.session.user) {
      return res.redirect('/login'); // Si no está logueado, redirige a login
    }
    next(); // Si está logueado, permite acceso
  }

  app.get('/login', guestOnly, (req, res) => {
    res.render('login');
  });
  
  app.get('/dashboard', authOnly, (req, res) => {
    res.render('dashboard', { user: req.session.user });
  });
  