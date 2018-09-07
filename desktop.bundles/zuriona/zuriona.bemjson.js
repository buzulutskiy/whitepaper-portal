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
			attrs: { style: 'background: #EDF3F1' },

			content: [
				{
					block: 'menu-zuriona',
					attrs: { style: 'position: relative' },
				},
				{
					elem: 'section',
					content: [
						{
							elem: 'container',
							attrs: { style: 'padding: 64px 0; ' },
							elemMods: { size: 'xs', align: 'center' },
							content: [
								{
									block: 'text',
									mods: { size: 'xxxl', view: 'primary', align: 'center', weight: 'semibold' },
									content: 'В нашем питомнике растут щенки от прекрасной пары пиренейских горных собак',
								}
							]
						}
					]
				},
				{
					elem: 'section',
					content: [
						{
							elem: 'container',
							elemMods: {align: 'center'},
							content: [
								{
									block: 'adult-card',
									content: {
										elem: 'image',
									},
									{
									block: 'text'
									content
									}
								}
								]
						}
					]
				}	
			]
		}

	]

};