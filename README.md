<div align="center">
  <h1>ByteClassAPI</h1>
  
  <p>Inspirado no curso "Primeira API" da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>.</p>
</div>

---

## 💻 Requisitos

Certifique-se de que as seguintes ferramentas estejam instaladas em sua máquina:

* **Node.js 22+**
* **Docker** e **Docker Compose**
* **npm** (ou outro gerenciador de pacotes, como `pnpm` ou `yarn`)

## 🛠️ Tecnologias

* **Fastify 5:** Framework web de alto desempenho e focado em performance.
* **TypeScript:** Linguagem para tipagem estática e maior segurança no desenvolvimento.
* **Drizzle ORM + PostgreSQL:** ORM moderno e leve para interagir com o banco de dados.
* **Zod:** Biblioteca para validação de esquemas e dados de entrada.
* **Swagger/OpenAPI + Scalar:** Documentação de API interativa, disponível em ambiente de desenvolvimento.

---

## ⚙️ Configuração

1.  **Clone o repositório** e navegue até a pasta do projeto.
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Inicie o banco de dados PostgreSQL com Docker:**
    ```bash
    docker compose up -d
    ```
4.  **Crie o arquivo de variáveis de ambiente** na raiz do projeto (`.env`) com o seguinte conteúdo:
    ```
    # URL do banco (Docker local padrão)
    DATABASE_URL="postgresql://postgres:postgres@localhost:5432/desafio"

    # Ativa docs em /docs
    NODE_ENV="development"
    ```
5.  **Rode as migrações** para criar as tabelas no banco de dados:
    ```bash
    npm run db:migrate
    ```
6.  **(Opcional) Acesso ao Drizzle Studio:** Para inspecionar e gerenciar o banco de dados, rode:
    ```bash
    npm run db:studio
    ```

---

## 🚀 Executando o Servidor

Após a configuração, você pode iniciar o servidor em modo de desenvolvimento com o comando:

```bash
npm run dev
Porta padrão: http://localhost:3333

Logs legíveis: Habilitados para facilitar o debug.

Documentação da API (em dev): http://localhost:3333/docs

🗺️ Endpoints da API
URL Base: http://localhost:3333

POST /courses
Cria um novo curso.

Corpo da Requisição (JSON):

JSON

{ "title": "Curso de Docker" }
Respostas:

201 Created: { "courseId": "<uuid>" }

GET /courses
Lista todos os cursos existentes.

Respostas:

200 OK: { "courses": [{ "id": "<uuid>", "title": "..." }] }

GET /courses/:id
Busca um curso pelo seu ID.

Parâmetros: id (UUID)

Respostas:

200 OK: { "course": { "id": "<uuid>", "title": "...", "description": "... | null" } }

404 Not Found: Vazio.

Dica: Um arquivo requisicoes.http está disponível no projeto com exemplos prontos para uso em extensões de REST Client como o do VS Code.

🏛️ Modelos (Esquema)
As tabelas principais são definidas no arquivo src/database/schema.ts:

courses

id (uuid, chave primária)

title (texto, único, obrigatório)

description (texto, opcional)

users (exemplo)

id (uuid, chave primária)

name (texto, obrigatório)

email (texto, único, obrigatório)



📜 Roteiros (Scripts)
Comando	Descrição
npm run dev	Inicia o servidor em modo de desenvolvimento com recarga automática e carrega variáveis de .env.
npm run db:generate	Gera os arquivos de migração do Drizzle a partir do esquema.
npm run db:migrate	Aplica as migrações pendentes no banco de dados.
npm run db:studio	Abre o Drizzle Studio, uma interface web para gerenciar o banco de dados.



email (texto, único, obrigatório)
  
