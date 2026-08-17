// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'OroSee',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/autoro-io/OroSee_User_Document' }],
			sidebar: [
				{
					label: '1. はじめに',
					autogenerate: { directory: 'introduction' }
				},
				{
					label: '2. 導入する',
					autogenerate: { directory: 'implementation'}
				},
				{
					label: '3. 使ってみる',
					items: [
						{ label: '③-1 インタビューを実施する', slug: 'guides/interview-management' },
						{ label: '③-2 業務を整理する', slug: 'guides/business-management' },
						{ label: '③-3 ワークフローを確認・活用する', slug: 'guides/workflow-management' },
						{ label: '③-4 クイックウィンを分析する', slug: 'guides/quick-win-analysis' },
					],
				},
				{
					label: '4. もっと活用する',
					items: [
						{ label: '設定のカスタマイズ', slug: 'advanced/settings' },
						{ label: '業務知識とRAG', slug: 'advanced/rag-knowledge' },
						{ label: 'ドキュメント取り込み', slug: 'advanced/document-ingestion' },
						{ label: 'サマリー比較', slug: 'advanced/summary-comparison'}
					],
				},
				{
					label: 'サポート・付録',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
