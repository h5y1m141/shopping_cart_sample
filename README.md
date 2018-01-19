
## セットアップ


```sh
docker-compose -f docker-compose.dev.yml up
```

以下の環境で動作確認済

- OSX 10.11.6
- Docker＆DockerCompose
  - Docker version 17.12.0-ce, build c97c6d6
  - docker-compose version 1.18.0, build 8dd22a9


### Dockerを利用せずにMac環境で利用したい方向け

以下の点を修正いただければ利用可能になるかと思います

- rbenvなどを利用してRubyの2.4系が利用できる環境を整える
- config/database.ymlをご自身の環境に合わせて修正



## 利用してるVueのバージョン

2018年1月20日時点ではVue.jsの最新バージョンはv2.5.13ですが、最新バージョンの細かい情報を把握しきれてないためこのリポジトリではかない古いバージョンを利用してます。
