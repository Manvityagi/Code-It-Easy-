const routes = require('express').Router({mergeParams:true});

routes.get('/', (req,res)=> {
    res.json("Home page")
});

module.exports = routes;
