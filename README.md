# COM222 - Code Editor NextJS (Front-end)

![alt last commit](https://img.shields.io/github/last-commit/FernasG/code-editor-nextjs?style=flat-square)
![alt files in src](https://img.shields.io/github/directory-file-count/FernasG/code-editor-nextjs/src?label=files&style=flat-square)

O Code Editor é um editor de código online, permitindo aos desenvolvedores criar, armazenar e executar seus projetos em diversas linguagens como JavaScript e Python, tirando o trabalho necessário para configurar um ambiente de desenvolvimento, tarefa que pode ser difícil e complexa para novos programadores.

## Dependências

- React;
- Axios;
- Next.JS;
- TypeScript;
- Monaco Editor;

[![Dependencies](https://skillicons.dev/icons?i=nextjs,typescript,docker,html,css&theme=dark)](https://skillicons.dev)

## Instalação

:warning: Esse repositório é complementar ao [Code Editor Backend](https://github.com/FernasG/code-editor-nestjs), para tudo funcionar perfeitamente você deve clonar e rodar ele antes do front-end.

### Configuração de Ambiente

Para rodar o projeto é necessário instalar o `Docker`, `Docker-Compose` e `Make`.

- Manual de instalação do [Docker](https://docs.docker.com/engine/install/), [Docker-Compose](https://docs.docker.com/compose/install/) e [Make](https://cmake.org/install/);

### Variáveis de Ambiente

1. Renomeie o arquivo `.env.example` para `.env`;
2. No campo `API_URL` você deve inserir a URL do [Code Editor Backend](https://github.com/FernasG/code-editor-nestjs), que possivelmente é `localhost:3000`.

### Execução

Com o ambiente configurado abra o terminal na raiz do projeto e execute o comando:
```
make up
```
Esse comando fará o _build_ do projeto, após finalizar você verá a seguinte mensagem no terminal:
```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```
Como o projeto está rodando no Docker é feito um roteamento da porta 3000 interna do container para a porta 3100 de sua máquina, dessa forma a URL que você deve acessar em seu navegador é o `localhost:3100`.

## Autores

[Fernando Goulart](https://www.linkedin.com/in/fernando-goulart-2534901b9/)