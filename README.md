# Cronômetro progressivo com uso de React Hooks
Este código trata de um cronômetro progressivo fazendo uso de dois hooks do React: useState e useRef.
#### Acesse o demo neste link: xxxxxxxxx


<img src="https://tomipasin.com/assets/img/chrono1.png" style="width: 680px"/>


### Como funciona?
Os hooks foram implementados no ReactJS à partir da versão 16.8 e permitem basicamente que você use o state e outros recursos do React sem escrever uma classe.
Isso é de extrema valia quando buscamso simplificar nosso código.
Aqui usaremos dois deles: 

#### useState(): 
Quando o useState é inicializado o valor retornado para nossa const timer é o que é atribuído como argumento, neste caso, zero, entretanto useState fornece também uma função para atualizarmos esse valor. Aqui chamamos ela de setTimer.

#### useRef():
O valor da const countRef é atribuído por useRef que retorna um objeto ref mutável, no qual a propriedade .current é inicializada para o argumento passado, neste caso null. 
O objeto retornado persistirá durante todo o ciclo de vida do componente.

<img src="https://tomipasin.com/assets/img/hooks1.png" style="width: 680px"/>


Para que tudo funcione temos quatro códigos básicos: um para start, pause, resume e reset.
Em cada uma delas usamos as funções "setXXX" do useState para atualizar o valor das nossas consts.

<img src="https://tomipasin.com/assets/img/hooks2.png" style="width: 680px"/>

O código está completamente comentado para facilitar a compreensão.


### Como testar?
Clone este repositório e use o comando:
```sh
npm install
```
Este comando instalará as dependências que constam em package.json.
Logo em seguida use:

```sh
npm start
```


Qualquer dúvida me chame por aqui ou pelo Telegram em @tomipasin. 




