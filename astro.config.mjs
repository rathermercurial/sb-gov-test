// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
            plugins: [starlightThemeObsidian()],
			title: 'SB Governance State',
			components: {
				PageSidebar: './src/components/PageSidebar.astro',
			},
		    // logo: {
    		// 	src: './src/assets/sb-icon.jpg',
      		// },	
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/superbenefit/governance' }],
			sidebar: [
				{
					label: 'Agreements',
					collapsed: true,
					autogenerate: { directory: 'agreements' },
				},
				{
					label: 'Policies',
					collapsed: true,
					autogenerate: { directory: 'policies' },
				},
				{
					label: 'Proposals',
					collapsed: true,
					autogenerate: { directory: 'proposals' },
				},
			],
		}),
	],
});
