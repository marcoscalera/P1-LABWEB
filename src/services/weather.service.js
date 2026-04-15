class WeatherService {
  async getCurrentWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Falha ao obter dados da API externa');
    }
    
    const data = await response.json();

    return {
      temperatura_atual: data.current_weather.temperature,
      velocidade_vento: data.current_weather.windspeed,
      direcao_vento: data.current_weather.winddirection,
      data_hora_medicao: data.current_weather.time
    };
  }
}

module.exports = new WeatherService();