const { Router } = require('express');
const weatherController = require('../controllers/weather.controller');

const router = Router();

router.get('/weather', weatherController.getWeather.bind(weatherController));

module.exports = router;