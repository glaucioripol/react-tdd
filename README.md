# React com tdd

## Configurando alias para o git

### mudar configurações do git para o usuario atual logado - melhor prática

* `git config --global --edit`
* modificando qual editor será aberto para editar configurações do git
  + `git config --global core.editor code`

### dicas git

* para ver com resumo o status `git status -s`
* ver os logs de forma reduzida `git log --oneline`
  + ver os logs de forma costumizada `git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'`
* criar tag anotada de versão
  + `git tag -a '1.0' -m '1.0`

### meus alias

``` 
[push]
	followTags = true
[alias]
	c = !git add --all && git commit -m
	s = !git status -s
	l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
  amend = !git add --a && git commit --amend --no-edit
  count = !git shortlog -s --grep
```

### usando alias

* Adicionando todas modificações e commitando

  + `git c "docs(README): create"`
* Vendo status resumido
  + `git s`
* Git log

  + `git l`
* Git amend

  + `git amend`
* ver estatistica

  + `git count feature|fix|etc`

## Instalando lint - 11 porque esta com bug/ validar se corrigiu

* `yarn add -D eslint eslint-config-standard-with-typescript@11 eslint-plugin-import eslint-plugin-promise eslint-plugin-standard @typescript-eslint/eslint-plugin eslint-plugin-node`

## Coibir commits com falhas

* verifica se o commit esta validado com o conventional commits 
  + `yarn add -D git-commit-msg-linter`
* `yarn add -D lint-staged husky`
  + lint-staged

    - Executa scripts nos arquivos do projeto em stage do git(exemplo: lint, testes unitarios e etc.)
  + husky - em conjunto com lint-stage

    - ele faz um hook com o git para acionar o lint staged para validar e formatar o código

## Clean Architecture

* domain -> camada de negocios da aplicação em interfaces
  + autenticação

* data layer -> aplica as interfaces

* infra -> implementações dos data layers

* presentation -> componentes visuais

* validadation -> validações de dados da presentation 

* main layer -> camada principal da aplicação
  + factories, injeção de dependencias e etc

## Tests

* spy -> entidade com valores mockados e carrega variaveis auxiliares para o teste

* faker -> lib para mock da dados aleatorios

## generics

* pode receber varios

## instalando web pack

* comando `yarn add -D webpack webpack-cli webpack-dev-server`

* criar arquivo webpack.config.js na raiz do projeto

* plugin auxiliar do webpack, recomendado

  + `yarn add -D clean-webpack-plugin`

    
* script do package `"start": "webpack-dev-server --open"`

## configurando sass no webpack
* comando `yarn add -D node-sass sass-loader css-loader style-loader ts-loader`