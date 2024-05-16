# ApoieRS API

Este projeto nasceu da motivação de oferecer apoio às vítimas das enchentes no Rio Grande do Sul. Com o objetivo de unir esforços e espalhar esperança, a plataforma permite que pessoas de todos os estados do Brasil encontrem pontos de coleta para doações em suas cidades ou nas mais próximas. Essa iniciativa visa facilitar o acesso à ajuda e promover a solidariedade em momentos de necessidade.## Endpoints

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Instalação

Para instalar e executar este projeto localmente, siga as seguintes etapas:

1. Clone o repositório:

```bash
git clone <url-do-repositório>
```

2. Navegue até o diretório do projeto:

```bash
cd <nome-do-diretório>
```

3. Instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```

4. Execute o projeto:

```bash
npm start
```

ou

```bash
yarn run start
```

Agora, o projeto deve estar rodando em `http://localhost:3333`.


### POST /points

Cria um novo ponto.

**Parâmetros do corpo:**

- `rua`: String (obrigatório)
- `numero`: String (obrigatório)
- `bairro`: String (obrigatório)
- `cidade`: String (obrigatório)
- `uf`: String (obrigatório)

**Resposta:**

- `201 Created` em caso de sucesso
- `400 Bad Request` se o ponto com o mesmo endereço já existir

### GET /points/:uf/:cidade/:page

Obtém pontos por estado (uf), cidade e página.

**Parâmetros da URL:**

- `uf`: String (obrigatório)
- `cidade`: String (obrigatório)
- `page`: Number (obrigatório)

**Resposta:**

- `200 OK` em caso de sucesso
- `404 Not Found` se nenhum ponto for encontrado

### GET /points

Obtém todos os pontos.

**Resposta:**

- `200 OK` em caso de sucesso
- `404 Not Found` se nenhum ponto for encontrado

### PUT /points/:id

Atualiza um ponto existente.

**Parâmetros da URL:**

- `id`: String (obrigatório)

**Parâmetros do corpo:**

- `rua`: String (opcional)
- `numero`: String (opcional)
- `bairro`: String (opcional)
- `cidade`: String (opcional)
- `uf`: String (opcional)

**Resposta:**

- `200 OK` em caso de sucesso
- `404 Not Found` se o ponto não for encontrado

### DELETE /points/:id

Exclui um ponto existente.

**Parâmetros da URL:**

- `id`: String (obrigatório)

**Resposta:**

- `200 OK` em caso de sucesso
- `404 Not Found` se o ponto não for encontrado

## Contribuição 

Contribuições são sempre bem-vindas. Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.