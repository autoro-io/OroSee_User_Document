---
title: OroSee とは
description: OroSeeの基本的な使い方について学べる
---

ようこそOroSeeへ！

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
  <text class="of-s teal-s" x="340" y="326" text-anchor="middle">業務プロセスをBPMNで可視化</text>
  <line class="of-line" x1="340" y1="336" x2="340" y2="358" marker-end="url(#oflow-arrow)"/>

  <rect class="teal" x="160" y="360" width="360" height="56" rx="8"/>
  <text class="of-t teal-t" x="340" y="388" text-anchor="middle">④ クイックウィン分析</text>
  <text class="of-s teal-s" x="340" y="406" text-anchor="middle">自動化の優先度を可視化</text>

  <rect class="coral" x="40" y="446" width="600" height="46" rx="8"/>
  <text class="of-t coral-t" x="340" y="474" text-anchor="middle">全工程を AI × ドメイン知識（RAG）が支援</text>
</svg>