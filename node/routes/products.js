module.exports = (app) => {
    const Product = require("../model/productsModel");
  // GET all products
  app.get("/products", async function (req, res, next) {
    await Product.find(function (err, data) {
      if (err) {
        console.log(err);
      }
      res.json(data);
    });
  });
 // GET Product by id
 app.get("/products/:id", async function (req, res, next) {
    var id = req.params.id;
    await Product.findById(id, function (err, data) {
      if (err) {
        console.log(err);
      }
      res.json(data);
    });
  });

  // add Product
  app.post("/products/add", async function (req, res) {
    var product = new Product();
    product.Nom = req.body.Nom;
    product.PrixUnitaire = req.body.PrixUnitaire;
    product.Quantité = req.body.Quantité;
    try {
      var productlog = await product.save();
      console.log(productlog);
      res.send("product added");
    } catch (err) {
      console.log(err);
    }
  });

  // delete Product
  app.delete("/products/delete/:id", async function (req, res) {
    var id = req.params.id;
    await Product.findByIdAndRemove(id, function (err, doc) {
      if (err) {
        console.log(err);
      }
      res.send("Product removed");
    });
  });

  // update Product
   app.put("/products/update/:id", async function (req, res) {
    var id = req.params.id;
    await Product.findByIdAndUpdate(id, { $set: req.body }, function (err, doc) {
      if (err) {
        console.log(err);
      }
      res.send("product updated");
      console.log(doc);
    });
  });

};





