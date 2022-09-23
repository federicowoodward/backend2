let mensajes = [];
let id = 1;
exports.getAll = (req, res, next) => {
  res.render("productos", { mensajes });
};
exports.add = (req, res, next) => {
  const { mensaje } = req.body;
  const newProduct = { id, mensaje };
  mensajes.push(newProduct);
  id = id + 1;

  res.render("form");
};
exports.form = (req, res, next) => {
  try {
    res.render("form");
  } catch (e) {
    next(e);
  }
};