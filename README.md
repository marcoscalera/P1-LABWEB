# Weather API

API RESTful simples desenvolvida em Node.js com Express para consulta de dados climáticos em tempo real, consumindo a API pública Open-Meteo (sem necessidade de API Key).

## Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/marcoscalera/P1-LABWEB
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd P1-LABWEB
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O servidor estará rodando em: `http://localhost:3000`

---

## Endpoint

### Obter Clima Atual
`GET /api/weather`

**Parâmetros de Query (Obrigatórios):**
- `lat`: Latitude da localização.
- `lon`: Longitude da localização.

**Exemplo de Resposta (200 OK):**
```json
{
  "temperatura_atual": 24.5,
  "velocidade_vento": 12.3,
  "direcao_vento": 180,
  "data_hora_medicao": "2024-10-25T14:00"
}
```

---

## Como Testar

### 1. Pelo Navegador
Como o endpoint utiliza o método GET, você pode testar diretamente no seu browser. Cole esta URL na barra de endereços:
`http://localhost:3000/api/weather?lat=-23.5505&lon=-46.6333`

### 2. Usando Postman ou Insomnia
1. Abra o aplicativo e crie uma nova requisição (**New Request**).
2. Selecione o método **GET**.
3. No campo de URL, digite: `http://localhost:3000/api/weather`
4. Vá na aba **Params** (ou Query) e adicione as chaves:
   - `lat`: `-23.5505`
   - `lon`: `-46.6333`
5. Clique em **Send**.

### 3. Usando useBruno
1. Abra o useBruno e crie uma nova requisição (**New Request**).
2. Escolha o tipo **GET** e nomeie a requisição.
3. Insira a URL completa: `http://localhost:3000/api/weather?lat=-23.5505&lon=-46.6333`
4. Clique na seta de **Play (Send)** no canto superior direito.

### 4. Pelo Terminal (cURL)
Abra o seu terminal (cmd, powershell ou bash) e execute o comando abaixo:
```bash
curl "http://localhost:3000/api/weather?lat=-23.5505&lon=-46.6333"
```
