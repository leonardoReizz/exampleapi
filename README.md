# Example API

API Express.js que alterna entre status 200 e 500 a cada requisição.

## Instalação

```bash
npm install
```

## Execução

```bash
npm start
```

Ou para desenvolvimento com auto-reload:

```bash
npm run dev
```

## Uso

A API estará disponível em `http://localhost:3000`

### Endpoint principal

- **GET** `/api` - Retorna alternadamente:
  - 1ª requisição: Status 200
  - 2ª requisição: Status 500
  - 3ª requisição: Status 200
  - 4ª requisição: Status 500
  - E assim por diante...

### Endpoint adicional

- **POST** `/api/reset` - Reseta o contador de requisições

## Execução com Docker

### Build da imagem

```bash
docker build -t exampleapi .
```

### Executar o container

```bash
docker run -p 3000:3000 exampleapi
```

### Com docker-compose

```bash
docker-compose up
```

## Exemplo

```bash
# 1ª requisição - retorna 200
curl http://localhost:3000/api

# 2ª requisição - retorna 500
curl http://localhost:3000/api

# 3ª requisição - retorna 200
curl http://localhost:3000/api
```

