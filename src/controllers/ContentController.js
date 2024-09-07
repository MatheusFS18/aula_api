const express = require('express');
const contentService = require('../services/contentService');
const authenticateToken = require('../middware/auth');

const router = express.Router();

router.post('/register', authenticateToken, async(req, res) =>{
    try{
        const {text} = req.body;
        const content = contentService.createContent(text);
        res.json(content);
    }
    catch(error){
        req.statusCode(400).json({error: error.message});
    }
})

module.exports = router;