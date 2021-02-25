# Cronômetro progressivo com uso de React Hooks
Este código trata de um cronômetro progressivo fazendo uso de dois hooks do React: useState e useRef.
#### Acesse o demo neste link: xxxxxxxxx


<img src="https://tomipasin.com/assets/img/chrono1.png" style="width: 680px"/>


### Como funciona?
Os hooks foram implementados no ReactJS à partir da versão 16.8 e permitem basicamente que você use o state e outros recursos do React sem escrever uma classe.
Isso é de extrema valia quando buscamso simplificar nosso código.

<img src="https://tomipasin.com/assets/img/hooks1.png" style="width: 680px"/>



### O código:
Projeto baseado no código original de Thiago Medeiros (https://github.com/thiagommedeiros/telegram-bot).

### Como testar?
Clone este repositório e use o comando:
```sh
npm install
```
Vá no Telegram e busque pelo @BotFather para criar o seu bot e obter o seu token.
Mais detalhes sobre o processo de criação do bot você encontra nesse link: <a>https://core.telegram.org/bots#3-how-do-i-create-a-bot</a>

Crie um arquivo .env com o seu token. Eu deixei um ".env_TEMPLATE" neste código. 
É só colocar o seu token e renomear para somente ".env".
Exemplo:

```sh
TOKEN=[aqui coloque o token do seu bot criado com o BotFather no Telegram]
```


Este comando instalará as dependências que constam em package.json.
Logo em seguida use:

```sh
npm start
```

Este bot está programado para permitir somente novos membros que não sejam bots, excluíndo os que forem bot imediatamente. Assim o captcha será exibido somente para usuários que tenham no seu contexto "is_bot: false".

```sh
 if(message.new_chat_member.is_bot){
        console.log('É bot. Vou remover...')
        ctx.kickChatMember(message.new_chat_member.id)
        return
      }
```



Este bot está rodando tranquilamente em um servidor VPS Intel(R) Xeon(R) CPU E5-2630 v4 @ 2.20GHz x1 com 450MiB de memória e sistema Ubuntu server 18.04 LTS. Seu consumo médio de memória é 45MiB.


Qualquer dúvida me chame por aqui ou pelo Telegram em @tomipasin. 


