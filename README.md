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
