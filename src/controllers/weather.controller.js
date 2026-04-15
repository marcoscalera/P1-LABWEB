const weatherService = require('../services/weather.service');

class WeatherController {
  async getWeather(req, res) {
    try {
      const { lat, lon } = req.query;

      if (!lat || !lon) {
        return res.status(400).json({ error: 'Os parâmetros lat e lon são obrigatórios.' });
      }

      const weatherData = await weatherService.getCurrentWeather(lat, lon);
      
      return res.status(200).json(weatherData);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new WeatherController();