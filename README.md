# 天気アプリ（Weather App）

## 概要

本アプリケーションは、Next.js（React）を用いて作成した天気情報表示Webアプリである。  
サードパーティWeb APIである OpenWeatherMap API を利用し、指定した都市の現在の天気情報を取得・表示する。

フロントエンドとサーバーサイドを同一プロジェクト内で実装し、外部API通信は Next.js の Route Handler を通して行っている。  
APIキーは環境変数として管理し、セキュリティ面にも配慮した構成となっている。

---

## 使用技術

- Next.js（App Router）
- React
- TypeScript
- OpenWeatherMap API
- CSS（グローバルスタイル）
- Git / GitHub
- Vercel（デプロイ）

---

## 主な機能

- 都市名を入力して現在の天気情報を取得
- 天候の概要（晴れ・曇りなど）の表示
- 現在の気温（摂氏）の表示
- 天気アイコンの表示

---

## 使い方

1. アプリにアクセスする  
2. 画面上の入力欄に都市名（例：Tokyo）を入力する  
3. 検索ボタンを押す  
4. 入力した都市の天気情報が画面に表示される  

---

## 動作例

- 都市名：「Tokyo」を入力  
- 検索実行  
- 「晴天」「気温：9.99 ℃」などの情報が表示される  

※ 実際の動作画面はレポートにスクリーンショットとして掲載する。

---

## 公開URL

https://weather-app-mu-inky-ujc731q76q.vercel.app/

---

## ソースコード

本アプリケーションのソースコードは GitHub 上で公開している。

https://github.com/chko23045-code/weather-app

---

## 補足

- APIキーは `.env.local` および Vercel の環境変数として管理しており、公開リポジトリには含まれていない。
- Next.js を用いた Web API 利用およびデプロイまで含めた一連のWebアプリ開発を目的として制作した。
