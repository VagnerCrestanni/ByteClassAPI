# ByteClassAPI
ByteClassAPI é uma API para gerenciamento de cursos online, desenvolvida em Node.js, com suporte a Docker e banco de dados estruturado. O projeto inclui documentação completa para facilitar entendimento e integração. Inspirado no curso Primeira API da Rocketseat.


Requisitos
Node.js 22+
Docker e Docker Compose
npm (ou outro gerenciador, mas o projeto usa package-lock.json)
Tecnologias
Fastify 5
TypeScript
Drizzle ORM + PostgreSQL
Zod (validação)
Referência de API Swagger/OpenAPI + Escalar (em /docsquando NODE_ENV=development)
Configuração
Clone o repositório e acesse a pasta do projeto.
Instalar as dependências:
npm install
No banco Postgres com Docker:
docker compose up -d
Crie um arquivo .envna raiz com:
# URL do banco (Docker local padrão)
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/byteclassapi

# Ativa docs em /docs
NODE_ENV=development
Rode as migrações:
npm run db:migrate
(opcional) Para funcionar o esquema/estado com o Drizzle Studio:

npm run db:studio
Executando ou servidor
npm run dev
Porta padrão:http://localhost:3333
Logs legíveis habilitados
Documentação da API (em dev):http://localhost:3333/docs
Pontos finais
URL base:http://localhost:3333

PUBLICAR/courses

Cria um curso
Corpo (JSON):
{ "title": "Curso de Docker" }
Respostas:
201:{ "courseId": "<uuid>" }
PEGAR/courses

Lista de todos os cursos
200:{ "courses": [{ "id": "<uuid>", "title": "..." }] }
PEGAR/courses/:id

Buscar um curso pelo ID
Parâmetros: id(UUID)
Respostas:
200:{ "course": { "id": "<uuid>", "title": "...", "description": "... | null" } }
404: vazio
Há um arquivo requisicoes.httpcom exemplos prontos (compatível com extensões de REST Client).

Modelos (esquema)
Tabelas principais definidas em src/database/schema.ts:

courses
id(uuid, pk, padrão aleatório)
title(texto, único, obrigatório)
description(texto, opcional)
users(exemplo para estudos)
id(uuid, pk, padrão aleatório)
name(texto, obrigatório)
email(texto, único, obrigatório)
Fluxo principal (Sereia)

Roteiros
npm run dev: inicia o servidor com recarga e carrega variáveis ​​de.env
npm run db:generate: gera artistas do Drizzle a partir do esquema
npm run db:migrate: aplica migrações no banco
npm run db:studio: abre o Drizzle Studio
Dicas e soluções de problemas
Conexão recusada ao Postgres: confirme docker compose up -de que a porta 5432não está em uso.
Variável DATABASE_URLausente: verifique seu .env. O Chuvisco exige essa variável para db:generate, db:migratee db:studio.
Docs não aparecem em /docs: garanta NODE_ENV=developmentno .enve reinicie o servidor.
Licença
ISC (ver package.json).