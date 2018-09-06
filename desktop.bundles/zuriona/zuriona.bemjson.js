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
	mods: { theme: 'islands' },
	mix: [
		{
			block: 'theme',
			mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
		},
		{
			block: 'component',
			mods: { whitepaper: 'default' }
		}
	],
	content: [
    {
        block: 'tpl-layout',
        content: [
            {
                block: 'menu-zuriona',
			},
			{
				block: 'headline',
				attrs: { style: 'height: 300px' },

				content: [
					{
						block:
						block: 'text',
                        mods: { size: 'xxl', view: 'primary', align: 'center' },
                        content: 'В нашем питомнике растут щенки от прекрасной пары пиренейских горных собак',
					}
				]
			}
        ]
    }
    ]
};