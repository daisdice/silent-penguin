# 🐧 SILENT PENGUIN

**SILENT PENGUIN** は、ブラウザで遊べる1人用の戦略カードゲーム（SPA）です。
名作カードゲーム『ペンギンパーティー』のルールをベースに、プログラミング学習および非営利のファンメイド作品として開発されました。

[**👉 デモをプレイする (GitHub Pages)**](https://<あなたのユーザー名>.github.io/<リポジトリ名>/)
![Game Screenshot](https://via.placeholder.com/800x450?text=Game+Screenshot)
## ⚠️ 免責事項 (Disclaimer)

本ソフトウェアは、ライナー・クニツィア（Reiner Knizia）氏のデザインしたカードゲーム『ペンギンパーティー（Penguin Party）』にインスパイアされた**二次創作（ファンゲーム）**です。

* 本プロジェクトは**非営利目的**であり、プログラミング技術の研究およびポートフォリオとして公開されています。
* 原作者、販売元、および関連企業とは一切関係ありません。
* ゲーム内で使用されている画像素材（ペンギン等）は、OS標準の絵文字およびCSSによって描画されており、製品版のアートワークは一切使用していません。
* 権利者様からの要請があった場合、速やかに公開を停止いたします。

> **Note:**
> This application is a non-commercial fan-made game inspired by "Penguin Party" designed by Reiner Knizia. It is created solely for educational purposes. All rights regarding the original game mechanics belong to their respective owners.

## 🎮 ゲーム概要

手札のカードをピラミッド状に並べていくカードゲームです。
自分の色のカードを出し切るか、相手（CPU）より多く手札を減らすことが目的です。

### 特徴
* **VS CPU**: 3段階の難易度（Easy, Normal, Hard）を搭載した思考ルーチン。
* **レスポンシブ対応**: PCでもスマートフォンでも快適にプレイ可能。
* **PWA対応**: スマートフォンのホーム画面に追加することで、ネイティブアプリのように全画面で動作します。
* **アクセシビリティ**: 色覚多様性に配慮し、色だけでなくシンボル（マーク）での識別が可能です。

## 🛠 技術スタック

ビルド不要のシンプルな構成で動作します。

* **HTML5 / CSS3**
* **React 18** (CDN)
* **Tailwind CSS** (CDN)
* **Babel** (In-browser transpiler)
* **Canvas Confetti** (演出用ライブラリ)

## 📂 ファイル構成

```text
/
├── index.html       # ゲーム本体
├── manifest.json    # PWA設定ファイル
├── sw.js            # Service Worker (オフライン対応・キャッシュ)
├── icon-192.png     # PWA用アイコン (192x192)
└── icon-512.png     # PWA用アイコン (512x512)