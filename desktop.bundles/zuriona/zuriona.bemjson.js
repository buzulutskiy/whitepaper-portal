module.exports = {
	block: 'page',
	title: 'BEM DESIGN',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'zuriona.min.css' }
	],
	scripts: [
		{ elem: 'js', url: '//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js' },
		{ elem: 'js', url: '//unpkg.com/docsify/lib/plugins/search.min.js' },
		{ elem: 'js', url: 'zuriona.min.js' }
	],
	mix: {
		block: 'theme',
        mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
	},
	content: [
    {
        block: 'tpl-layout',
        content: [
            {
                block: 'menu-zuriona',
            }
        ]
    }
    ]
};