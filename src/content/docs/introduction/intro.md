---
title: はじめに
description: OroSeeの説明
---

## 第1章：はじめに

<svg class="orosee-flow" width="100%" viewBox="0 0 680 512" role="img" style="max-width:640px;display:block;margin:1rem auto;height:auto" xmlns="http://www.w3.org/2000/svg">
  <title>OroSeeの全体処理の流れ</title>
  <desc>プロジェクト準備から、インタビュー、業務の洗い出し、ワークフロー生成、クイックウィン分析へと進む一連の流れ。全工程をAIとドメイン知識（RAG）が支援する。</desc>
  <style>
    .orosee-flow text{font-family:inherit}
    .orosee-flow .of-t{font-size:14px;font-weight:500}
    .orosee-flow .of-s{font-size:12px;font-weight:400}
    .orosee-flow rect{stroke-width:1px}
    .orosee-flow .of-line{stroke:#888780;stroke-width:1.5px;fill:none}
    .orosee-flow .gray{fill:#F1EFE8;stroke:#5F5E5A}
    .orosee-flow .gray-t{fill:#2C2C2A}
    .orosee-flow .purple{fill:#EEEDFE;stroke:#534AB7}
    .orosee-flow .purple-t{fill:#26215C}
    .orosee-flow .purple-s{fill:#534AB7}
    .orosee-flow .teal{fill:#E1F5EE;stroke:#0F6E56}
    .orosee-flow .teal-t{fill:#04342C}
    .orosee-flow .teal-s{fill:#0F6E56}
    .orosee-flow .coral{fill:#FAECE7;stroke:#993C1D}
    .orosee-flow .coral-t{fill:#4A1B0C}
    :root[data-theme='dark'] .orosee-flow .of-line{stroke:#B4B2A9}
    :root[data-theme='dark'] .orosee-flow .gray{fill:#2C2C2A;stroke:#B4B2A9}
    :root[data-theme='dark'] .orosee-flow .gray-t{fill:#F1EFE8}
    :root[data-theme='dark'] .orosee-flow .purple{fill:#3C3489;stroke:#AFA9EC}
    :root[data-theme='dark'] .orosee-flow .purple-t{fill:#EEEDFE}
    :root[data-theme='dark'] .orosee-flow .purple-s{fill:#CECBF6}
    :root[data-theme='dark'] .orosee-flow .teal{fill:#085041;stroke:#5DCAA5}
    :root[data-theme='dark'] .orosee-flow .teal-t{fill:#E1F5EE}
    :root[data-theme='dark'] .orosee-flow .teal-s{fill:#9FE1CB}
    :root[data-theme='dark'] .orosee-flow .coral{fill:#712B13;stroke:#F0997B}
    :root[data-theme='dark'] .orosee-flow .coral-t{fill:#FAECE7}
  </style>
  <defs><marker id="oflow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>

  <rect class="gray" x="160" y="40" width="360" height="56" rx="8"/>
  <text class="of-t gray-t" x="340" y="68" text-anchor="middle">プロジェクト準備</text>
  <text class="of-s gray-t" x="340" y="86" text-anchor="middle">メンバーを招待して開始</text>
  <line class="of-line" x1="340" y1="96" x2="340" y2="118" marker-end="url(#oflow-arrow)"/>

  <rect class="purple" x="160" y="120" width="360" height="56" rx="8"/>
  <text class="of-t purple-t" x="340" y="148" text-anchor="middle">① インタビュー</text>
  <text class="of-s purple-s" x="340" y="166" text-anchor="middle">対象者に業務をヒアリング</text>
  <line class="of-line" x1="340" y1="176" x2="340" y2="198" marker-end="url(#oflow-arrow)"/>

  <rect class="purple" x="160" y="200" width="360" height="56" rx="8"/>
  <text class="of-t purple-t" x="340" y="228" text-anchor="middle">② 業務の洗い出し</text>
  <text class="of-s purple-s" x="340" y="246" text-anchor="middle">AIが回答から業務を自動抽出</text>
  <line class="of-line" x1="340" y1="256" x2="340" y2="278" marker-end="url(#oflow-arrow)"/>

  <rect class="teal" x="160" y="280" width="360" height="56" rx="8"/>
  <text class="of-t teal-t" x="340" y="308" text-anchor="middle">③ ワークフロー生成</text>
  <text class="of-s teal-s" x="340" y="326" text-anchor="middle">業務プロセスをワークフローで可視化</text>
  <line class="of-line" x1="340" y1="336" x2="340" y2="358" marker-end="url(#oflow-arrow)"/>

  <rect class="teal" x="160" y="360" width="360" height="56" rx="8"/>
  <text class="of-t teal-t" x="340" y="388" text-anchor="middle">④ クイックウィン分析</text>
  <text class="of-s teal-s" x="340" y="406" text-anchor="middle">自動化の優先度を可視化</text>

  <rect class="coral" x="40" y="446" width="600" height="46" rx="8"/>
  <text class="of-t coral-t" x="340" y="474" text-anchor="middle">全工程を AI × ドメイン知識（RAG）が支援</text>
</svg>

### 1.1 OroSeeとは

OroSeeは、業務プロセスの可視化と自動化優先度分析を支援するWebアプリケーションです。インタビューを通じて業務情報を収集し、AI技術を活用して業務の洗い出し、ワークフローの生成、自動化優先度（クイックウィン）の分析を効率的に行うことができます。

**主な特徴：**
- インタビューベースの業務ヒアリング機能
- AIによる業務情報の自動抽出
- ワークフロー（BPMN）の自動生成
- クイックウィン分析によるRPA導入優先度の可視化
- プロジェクト単位でのチーム協業

### 1.2 主な機能の概要

| 機能カテゴリ | 概要 |
|------------|------|
| **プロジェクト管理** | プロジェクトの作成・編集、メンバー招待と権限管理 |
| **インタビュー管理** | インタビュー対象者の管理、招待メール送信、ステータス追跡 |
| **業務管理** | 業務情報の登録・編集、AIによる自動生成、スコアリング |
| **クイックウィン分析** | 自動化優先度のバブルチャート表示、分析レポート |
| **ワークフロー管理** | 業務プロセスの可視化、AIによるワークフロー自動生成 |
| **ドメイン知識管理** | 業界固有の知識をプリセットまたはカスタムで管理 |

### 1.3 ユーザーの役割と権限

OroSeeでは、プロジェクトごとに4種類の役割（ロール）を設定できます。

| 役割 | 説明 | 主な権限 |
|-----|------|---------|
| **プロジェクト管理者** | プロジェクトの管理者 | プロジェクト管理者を作成できる、すべてのプロジェクトリソースの管理 |
| **プロジェクト編集者** | プロジェクトの編集者 | プロジェクトにメンバーを追加できる、すべてのプロジェクトリソースの管理 |
| **クライアント** | クライアント企業のユーザ | すべてのプロジェクトリソースの作成と編集（削除はできない） |
| **閲覧者** | 閲覧のみのユーザ | すべてのプロジェクトリソースの閲覧 |

#### 権限マトリクス

| リソース | プロジェクト管理者 | プロジェクト編集者 | クライアント | 閲覧者 |
|---------|-------|--------|--------|--------|
| プロジェクト設定 | ✅ 全権限 | ✅ 編集 | 👁閲覧のみ | 👁閲覧のみ |
| メンバー管理 | ✅ 全権限 | ✅ 追加可能 | 👁閲覧のみ | 👁閲覧のみ |
| 業務 | ✅ 全権限 | ✅ 全権限 | 作成・編集 | 👁閲覧のみ |
| インタビュー | ✅ 全権限 | ✅ 全権限 | 作成・編集 | 👁閲覧のみ |
| ワークフロー | ✅ 全権限 | ✅ 全権限 | 作成・編集 | 👁閲覧のみ |
| クイックウィン | ✅ 全権限 | ✅ 全権限 | 作成・編集 | 👁閲覧のみ |
| ドメイン知識 | ✅ 全権限 | ✅ 全権限 | 👁閲覧のみ | 👁閲覧のみ |

### 1.4 動作環境・推奨ブラウザ

**推奨ブラウザ：**
- Google Chrome（最新版）
- Microsoft Edge（最新版）
- Mozilla Firefox（最新版）
- Safari（最新版）

**推奨環境：**
- 画面解像度：1280×720以上
- インターネット接続：安定したブロードバンド接続
- JavaScript：有効化必須

### 1.5 プレビュー機能について

#### 概要

プレビュー機能とは、正式提供前の段階でユーザーに限定公開し、品質改善やフィードバック収集を目的とする試験的機能です。
仕様・品質・継続提供は保証されないものとします。

各機能ページにおいて、タイトルに「(Beta)」表記がある、または冒頭にプレビュー機能の注意書きがある機能が該当します。

#### 特性

##### 1. 品質保証について

- 機能の安定性・正確性・継続提供は保証されません。
- 不具合や仕様変更が発生する可能性があります。

##### 2. 仕様変更について

- UI/UXや機能仕様は予告なく変更される場合があります。
- 正式版とは異なる挙動を示す可能性があります。

##### 3. 利用範囲について

- 一部ユーザー・特定環境・限定用途で提供される場合があります。

##### 4. フィードバックについて

- ユーザーからの意見・利用データを基に改善を行う、本番品質へのブラッシュアップ段階の機能です。
- フィードバック収集を主目的としています。

##### 5. 提供継続について

- 正式リリースされない可能性もあります。
- 機能の停止・統合・変更があり得ます。

