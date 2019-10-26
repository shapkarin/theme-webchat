# Docs

[https://github.com/zeals-co-ltd/theme-webchat](https://github.com/zeals-co-ltd/theme-webchat)

## 背景・Background

コミュニケーションって言葉だけのものじゃない
例えば、表情とかジェスチャーとかは全部コミュニケーションである
コミュニケーションの種類によって受け取り方は違うだろうなと思って

現在のZealsチャットボットはだいたいテキストと他のWidgetでコミュニケーションをとってるけど、
ユーザーの信頼をえたければ、もっと狂言的なUIが必須だなと思った

Humans communicate in many ways other than words. A facial expression, a gesture...all these things can make the receiver feel differently.
Right now our chatbots only communicate through words and some other structured graphical information.
But these are not conversational, they make you feel like you're in an office.

If you want to succeed in gaining someone's trust, you need to communicate with them in way they understand.

## 目標・Goal

ペルソナによってチャットボットのUI変わるWebchatを開発すること

Make a chatbot demo based on demographics. 

### ペルソナ・Test demographics

- 20代のテックワーカー
- 20代の綺麗になりたい女の人

- 20s person working in tech
- 20s beauty-focused female

## バックエンド・Backend

普通のAPIサーバーww

A regular API server

### Libs

- Express
- Sequelize
- Dotenv


## フロントエンド・Frontend

### Libs

- Typescript
- React

### メッセージ・Messages

クエリーパラムでスタイルもアイコンが変わることにしたんだけど、
理想的にいうと、ボットのスタイルはバックエンドの情報で決まる。
そうすると、社内用管理画面で、クライアントなだは自分のボットをデザインできるようになる。

Changes style and icons based on a query param. Ideally in the future, this kind of info is provided by the backend.
Message object itself is data from DB.


### Mesage Types 

1. テキスト
2. にょろにょろ (未完成)

1. Text Message
2. Typing (didn't finish)

[To app](/app)