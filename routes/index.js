const express = require('express');
const router = express.Router();

const validUrl = require('valid-url');
const shortid = require('shortid');
const config = require('config');
const URL = require('../models/URL');

router.post('/shorten', async (req, res) => {
const { longUrl } = req.body;
const baseUrl = config.get('baseUrl');

if(!validUrl.isUri(baseUrl)){
    return res.status(401).json('Invalid base URL');

}
});