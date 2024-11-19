const session = require('express-session');

app.use(session({
  secret: 'mi_secreto_super_seguro',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // Cookie expira en 1 día
}));

app.use(session({
    secret: 'mi_secreto_super_seguro',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } // Cookie expira en 7 días
  }));