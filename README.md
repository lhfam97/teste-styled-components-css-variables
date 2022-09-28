# Como utilizar Css variables utilizando styled-components no React

## Descrição do projeto

Este é um projeto teste pra exemplificar como utilizar e trabalhar com CSS Variables utilizando a lib de styled-components no react.

<h1>Como utilizar</h1>

- Utilizando diretamente no css

Exemplo:

```css
color: var(--<nome-da-variavel>);
```

<br />

- Buscando a variável pelo javascript

Exemplo:

```js
  const valorDaVariavel = getComputedStyle(document.documentElement).getPropertyValue(
    '--<nome-da-variavel>',
  )
```


## Passos para execução do codigo

1 - Passo > Baixar os pacotes com yarn ou npm


<h4> Yarn </h4>

```bash
yarn
```
</br>

<h4> NPM </h4>

```bash
npm install
```

</br>

Em seguida se quiser executar o código basta executar os comandos


<h4> Yarn </h4>

```bash
yarn dev
```
OU


<h4> NPM </h4>

```bash
npm run dev
```

## Pare utilizar as CSS variables em outros projetos

<p>Pare utilizar as CSS variables em outros projetos é necessário a criação de um arquivo css. No caso desse exemplo foi utilizado o arquivo "global.css" </p>
<p>Em seguida eh necessario importar a estilização do arquivo css no arquivo que inicializa o react para que todas os componentes possam utilizar dessas variáveis </p>

# Author

<table>
   <tr>
      <td align="center">
         <a href="http://github.com/lhfam97/">
            <img src="https://github.com/lhfam97.png" width="100px;" alt="Imagem de Luís Henrique Machado"/>
            <br />
            <sub>
               <b>Luís Henrique Machado</b>
            </sub>
          </a>
          <br />
          <a href="https://www.linkedin.com/in/luís-henrique-machado-98037a127/" title="Linkedin">@luishenriquemachado</a>
          <br />
          <a href="https://github.com/lhfam97/desafio-fullcycle-nginx-node/commits?author=lhfam97" title="Code">💻</a>
      </td>
   </tr>
</table>
