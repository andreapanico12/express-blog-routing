const express = require("express");
const router = express.Router();
const posts = require('../data/posts.js');

// index
router.get(`/`,(req,res) => {
  // res.send(`Visualizzo la lista dei posts`);
  res.json(posts);
})

// show
router.get(`/:title`, (req,res) =>{
  res.send(`Visualizzo il post con titolo ${req.params.title}`);
})

// store
router.post(`/`,(req,res) => {
  res.send(`Creo un nuovo post nella lista post`);
})

// update
router.put(`/:title`, (req,res) =>{
  res.send(`Modifico interamente il post con titolo ${req.params.title}`);
})

// modify
router.patch(`/:title`, (req,res) =>{
  res.send(`Modifico parzialmente il post con titolo ${req.params.title}`);
})

// destroy
router.delete(`/:title`, (req,res) =>{
  res.send(`Elimino il post con titolo ${req.params.title}`);
})
module.exports = router