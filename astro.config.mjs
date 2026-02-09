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
					label: 'はじめに',
					autogenerate: { directory: 'introduction' }
				},
				{
					label: 'ガイド',
					items: [
						// Each item here is one entry in the navigation menu.
						//{ label: 　'Example Guide', slug: 'guides/example' },
						{ label: '2. アカウントと認証', slug: 'guides/account-and-authentication' },
						{ label: '3. 組織管理', slug: 'guides/3-organizational-management' },
						{ label: '4. プロジェクト管理', slug: 'guides/4-project-management' },
						{ label: '5. インタビュー管理', slug: 'guides/5-interview-management' },
						{ label: '6. 業務管理', slug: 'guides/6-business-management' },
						{ label: '7. クイックウィン分析', slug: 'guides/7-quick-win-analysis' },
						{ label: '8. ワークフロー管理', slug: 'guides/8-workflow-management' },
						{ label: '9. 設定', slug: 'guides/9-settings' },
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
