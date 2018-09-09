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
							elemMods: { size: 'm', align: 'center' },
							content: [
								{
									block: 'pyrenees',
									content: [
										{
											elem: 'photo',
											elemMods: { size: 'l' },
											content: [
												{
													block: 'image',
													url: 'https://pp.userapi.com/c850036/v850036807/7495f/axERfVn2JpE.jpg'
												}]
										},
										{
											elem: 'container',
											elemMods: { align: 'center' },
											content: [
												{
													block: 'text',
													attrs: { style: 'font-size:10px' },
													mods: { view: 'primary', align: 'center', transform: 'uppercase', weight: 'bold' },
													content: "Отец"
												},
												{
													block: 'text',
													mods: { size: 'xl', align: 'center', weight: 'semibold' },
													content: "Атлант"
												},
												{
													block: 'text',
													mods: { size: 'm', align: 'center', view: 'ghost' },
													content: "Чемпион России"
												}
											]
										}
									]
								},
								{
									block: 'pyrenees',
									content: [
										{
											elem: 'photo',
											elemMods: { size: 'l' },
											content: [
												{
													block: 'image',
													url: 'https://pp.userapi.com/c850036/v850036807/74958/tLM_Z_dRFpI.jpg'
												}]
										},
										{
											elem: 'container',
											content: [
												{
													block: 'text',
													attrs: { style: 'font-size:10px' },
													mods: { view: 'primary', align: 'center', transform: 'uppercase', weight: 'bold' },
													content: "Мать"
												},
												{
													block: 'text',
													mods: { size: 'xl', align: 'center', weight: 'semibold' },
													content: "Глория"
												},
												{
													block: 'text',
													mods: { size: 'm', align: 'center', view: 'ghost' },
													content: "Чемпион России"
												}
											]
										}
									]
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
							attrs: { style: 'padding: 64px 0; width: 547px;' },
							elemMods: { size: 'xs', align: 'center' },
							content: [
								{
									block: 'text',
									mods: { size: 'xl', view: 'primary', align: 'center', },
									content: 'Щенки родились 12 июля и соотвествуют стандарту породы: с барсучьими отметинами, массивным костями, густой шерстью, объемным корпусом.',
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
							elemMods: { size: 'm', align: 'center' },
							content: [
								{
									block: 'pyrenees',
									content: [
										{
											elem: 'photo',
											elemMods: { size: 'm' },
											content: [
												{
													block: 'image',
													url: 'https://pp.userapi.com/c850036/v850036807/7495f/axERfVn2JpE.jpg'
												}]
										},
										{
											elem: 'container',
											elemMods: { align: 'center' },
											content: [

												{
													block: 'text',
													mods: { size: 'm', align: 'center', view: 'ghost' },
													content: "Чемпион России"
												}
											]
										}
									]
								},
								{
									block: 'pyrenees',
									content: [
										{
											elem: 'photo',
											elemMods: { size: 'm' },
											content: [
												{
													block: 'image',
													url: 'https://pp.userapi.com/c850036/v850036807/74958/tLM_Z_dRFpI.jpg'
												}]
										},
										{
											elem: 'container',
											content: [

												{
													block: 'text',
													mods: { size: 'm', align: 'center', view: 'ghost' },
													content: "Чемпион России"
												}
											]
										}

									]
								},
								{
									block: 'pyrenees',
									content: [
										{
											elem: 'photo',
											elemMods: { size: 'm' },
											content: [
												{
													block: 'image',
													url: 'https://pp.userapi.com/c850036/v850036807/74958/tLM_Z_dRFpI.jpg'
												}]
										},
										{
											elem: 'container',
											content: [

												{
													block: 'text',
													mods: { size: 'm', align: 'center', view: 'ghost' },
													content: "Чемпион России"
												}
											]
										}

									]
								},
								{
									block: 'pyrenees',
									content: [
										{
											elem: 'photo',
											elemMods: { size: 'm' },
											content: [
												{
													block: 'image',
													url: 'https://pp.userapi.com/c850036/v850036807/74958/tLM_Z_dRFpI.jpg'
												}]
										},
										{
											elem: 'container',
											content: [

												{
													block: 'text',
													mods: { size: 'm', align: 'center', view: 'ghost' },
													content: "Чемпион России"
												}
											]
										}

									]
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
							attrs: { style: 'padding: 64px 0; width: 443px;' },
							elemMods: { size: 'xs', align: 'center' },
							content: [
								{
									block: 'text',
									mods: { size: 'xl', view: 'primary', align: 'center', },
									content: 'Мы  с удовольствием расскажем о характерах и поможем с выбором щенка',
								},
								{
									block: 'text',
									mods: { size: 'xxxxl', view: 'primary', align: 'center', },
									content: '+ 7 909 234 24 23',
								},
								{
									block: 'social',
									content: [

									]

								}
							]
						}
					]
				},


			]
		},

		// Статьи
		{
			block: 'tpl-layout',
			mix: { block: 'decorator',mods: { 'space-v': 'xxxxxxl' }},
			content: [
				{
					elem: 'section',
					content: [
						{
							elem: 'container',
							elemMods: { size: 's', align: 'center' },
							
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'third', 'row-gap': 'full' },
									content: [
										{ elem: 'fraction',
											elemMods: {col:'6'},
											content: [
												{
													block: 'news-card',
													mix: {block:'pt-card'}
												}
											] },
										{ elem: 'fraction',
										elemMods: {col:'6'},
											content: [
												{
													block: 'news-card',
													mix: {block:'pt-card'}
												}
											]
										}]
								},
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'third', 'row-gap': 'full' },
									content: [
										{ elem: 'fraction',
											elemMods: {col:'4'},
											content: [
												{
													block: 'news-card',
													mix: {block:'pt-card'}
												}
											] },
										{ elem: 'fraction',
										elemMods: {col:'4'},
											content: [
												{
													block: 'news-card',
													mix: {block:'pt-card'}
												}
											]
										},
										{ elem: 'fraction',
										elemMods: {col:'4'},
											content: [
												{
													block: 'news-card',
													mix: {block:'pt-card'}
												}
											]
										}
									
									
									
									]
								},
								
								{
									block: 'text',
									mods: { size: 'l', view: 'primary', align:'center'},
									content: 'Все статьи'
								}

							]
						},
						{
						elem: 'section',
						content:[
							{
								elem: 'container',
								elemMods: { size: 's', align: 'center' },
								content:[
									{
										block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'third', 'row-gap': 'full' },
									content:[
										{
											elem: 'fraction',
											elemMods: {col:'3'},
											content:[
												{
													block: 'news-card',
													mix: {block:'pt-card'}
												}

											]
										},
										{
											elem: 'fraction',
											elemMods: {col:'3'},
											content:[
												{
													block: 'news-card',
													mix: {block:'pt-card'}
												}

											]
										},
										{
											elem: 'fraction',
											elemMods: {col:'3'},
											content:[
												{
													block: 'news-card',
													mix: {block:'pt-card'}
												}

											]
										}
									]
										
									
									}
							]
							}
						]
						}
					]
				}
			]
		}
	]






};