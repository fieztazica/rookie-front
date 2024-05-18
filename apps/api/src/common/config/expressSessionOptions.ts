export const expressSessionOptions = {
  resave: false, // will default to false in near future: https://github.com/expressjs/session#resave
  saveUninitialized: false, // will default to false in near future: https://github.com/expressjs/session#saveuninitialized
  rolling: true, // keep session alive
  cookie: {
    maxAge: 30 * 60 * 1000, // session expires in 1hr, refreshed by `rolling: true` option.
    httpOnly: true, // so that cookie can't be accessed via client-side script
  },
};
