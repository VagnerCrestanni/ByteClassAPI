# ByteClass API

Uma API simples e robusta para gerenciamento de cursos, desenvolvida com tecnologias modernas do ecossistema Node.js e TypeScript. Este projeto foi inspirado pelo curso **Primeira API da Rocketseat** e serve como uma base sólida para a criação de aplicações web escaláveis.

<div align="center">

![Badge em desenvolvimento](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![Tecnologias](https://img.shields.io/badge/tecnologias-Node.js%20|%20TypeScript%20|%20Fastify-informational)
![Licença](https://img.shields.io/badge/licença-ISC-success)

</div>

---

## 🚀 Tecnologias

O projeto foi construído utilizando as seguintes tecnologias:

* **Node.js**: Ambiente de execução JavaScript.
* **TypeScript**: Superconjunto tipado do JavaScript.
* **Fastify**: Framework web de alta performance.
* **Drizzle ORM**: ORM leve para interação com o banco de dados.
* **PostgreSQL**: Sistema de gerenciamento de banco de dados.
* **Zod**: Biblioteca para validação de esquemas.
* **Swagger/OpenAPI + Scalar**: Ferramentas para documentação de API, acessíveis via `/docs` em ambiente de desenvolvimento.

---

## ⚙️ Requisitos

Certifique-se de que os seguintes requisitos estão instalados em sua máquina:

* **Node.js** (versão 22 ou superior)
* **Docker** e **Docker Compose**
* **npm** (ou outro gerenciador de pacotes, o projeto usa `package-lock.json`)

---

## ⚙️ Configuração do Ambiente

Siga os passos abaixo para rodar a aplicação localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/VagnerCrestanni/ByteClassAPI.git](https://github.com/VagnerCrestanni/ByteClassAPI.git)
    cd ByteClassAPI
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o banco de dados com Docker Compose:**
    ```bash
    docker compose up -d
    ```

4.  **Crie o arquivo de variáveis de ambiente:**
    Na raiz do projeto, crie um arquivo chamado `.env` com o seguinte conteúdo:
    ```bash
    DATABASE_URL="postgresql://postgres:postgres@localhost:5432/byteclassapi"
    # Ativa a documentação da API em ambiente de desenvolvimento
    NODE_ENV="development"
    ```

5.  **Rode as migrações (opcional):**
    Para aplicar o esquema do banco de dados, execute:
    ```bash
    npm run db:migrate
    ```

6.  **Gerencie o banco de dados (opcional):**
    Para visualizar e interagir com o banco de dados através de uma interface web, use o Drizzle Studio:
    ```bash
    npm run db:studio
    ```

---

## ▶️ Executando a API

Para iniciar o servidor, execute o seguinte comando:

```bash
npm run dev
O servidor estará disponível em: http://localhost:3333

Logs legíveis estão habilitados no terminal.

A documentação da API está acessível em: http://localhost:3333/docs (apenas em ambiente de desenvolvimento).

🗺️ Rotas da API
A URL base para todas as rotas é: http://localhost:3333

Método	Endpoint	Descrição
POST	/courses	Cria um novo curso.
GET	/courses	Lista todos os cursos.
GET	/courses/:id	Busca um curso específico pelo ID.

Exportar para as Planilhas
Exemplos de requisições:

POST /courses

JSON

{ "title": "Curso de Docker" }
Resposta 201: {"courseId": ""}

GET /courses
Resposta 200: {"courses": [{ "id": "", "title": "..." }], "total": 1}

GET /courses/:id
Parâmetros: id (UUID)
Resposta 200: {"course": { "id": "", "title": "...", "description": "... | null" }}
Resposta 404: (vazio)

📘 Modelos (Schema)
As tabelas principais do banco de dados são definidas em src/database/schema.ts:

courses

id: uuid, chave primária.

title: text, único e obrigatório.

description: text, opcional.

users

id: uuid, chave primária.

name: text, obrigatório.

email: text, único e obrigatório.

🤝 Fluxo Principal
O projeto segue um fluxo de trabalho assíncrono.

⚠️ Dicas e Soluções de Problemas
Conexão recusada ao PostgreSQL: Verifique se o Docker está em execução e se a porta 5432 não está sendo usada por outro processo.

Variável DATABASE_URL ausente: O Drizzle Kit exige essa variável para os comandos db:generate, db:migrate e db:studio. Certifique-se de que o arquivo .env foi criado corretamente.

Docs não aparece em /docs: Garanta que NODE_ENV=development está definido no seu .env e reinicie o servidor.

📄 Licença
Este projeto está licenciado sob a licença ISC.
