# Weather API

API RESTful simples desenvolvida em Node.js com Express para consumo de dados climáticos utilizando a API pública Open-Meteo (sem necessidade de API Key).

## Requisitos
- Node.js (v18 ou superior)
- NPM ou Yarn

## Instalação e Execução

1. Clone este repositório:
   \`\`\`bash
   git clone <https://github.com/marcoscalera/P1-LABWEB>
   \`\`\`
2. Acesse a pasta do projeto:
   \`\`\`bash
   cd weather-api
   \`\`\`
3. Instale as dependências:
   \`\`\`bash
   npm install
   \`\`\`
4. Inicie o servidor:
   \`\`\`bash
   npm run dev
   \`\`\`

O servidor estará rodando em \`http://localhost:3000\`.

## Endpoints

### Obter Clima Atual
\`GET /api/weather\`

**Parâmetros de Query (Obrigatórios):**
- \`lat\`: Latitude da localização
- \`lon\`: Longitude da localização

**Exemplo de Requisição:**
\`GET http://localhost:3000/api/weather?lat=-23.5505&lon=-46.6333\`

**Exemplo de Resposta (200 OK):**
\`\`\`json
{
  "temperatura_atual": 24.5,
  "velocidade_vento": 12.3,
  "direcao_vento": 180,
  "data_hora_medicao": "2023-10-25T14:00"
}
\`\`\`