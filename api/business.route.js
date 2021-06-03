// business.route.js

const express = require('express');
const businessRoutes = express.Router();

// hakee Business mallin routes modulilista
let Business = require('./business.model');

// Määritellään store route
businessRoutes.route('/add').post(function (req, res) {
  let business = new Business(req.body);
  business.save()
    .then(business => {
      res.status(200).json({'business': 'business lisätty onnistuneesti'});
    })
    .catch(err => {
    res.status(400).send("mahdoton tallentaa tietokantaan");
    });
});

// Määritelty get data(index tai listaus) route
businessRoutes.route('/').get(function (req, res) {
    Business.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Määritelty edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Määritelty update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("tietoa ei löydy");
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;

        business.save().then(business => {
          res.json('Päivitys onnistunut');
      })
      .catch(err => {
            res.status(400).send("mahdoton päivittää tietokantaan");
      });
    }
  });
});

// Määritelty delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Poistaminen onnistunut');
    });
});

module.exports = businessRoutes;