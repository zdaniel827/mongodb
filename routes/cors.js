const cors = require("cors");

const whitelist = ["http://localhost:3000", "https://localhost:3443"];

const corsOptionDeligate = (req, cb) => {
  let corsOptions;
  console.log(req.header("Origin"));
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
      corsOptions = {origin: false}
  }
    cb(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionDeligate);
