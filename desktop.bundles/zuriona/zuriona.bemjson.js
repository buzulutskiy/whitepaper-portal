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
			mods: { color: 'whitepaper-inverse', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
		},
		{
			block: 'component',
			mods: { whitepaper: 'default' }
		}
	],
	content: [
		{
			block: 'tpl-layout',
			attrs: { style: 'background: #000000; ' },

			content: [
				{
					block: 'menu-zuriona',
				},
				{
					elem: 'section',
					content: [
						{
							elem: 'container',
							elemMods: {  align: 'center' },
							attrs: { style: 'width:1024px;' },
							content: [
								{
									block: 'text',
									mix: {block:'headline'},
									mods: { size: 'xxxxl', view: 'primary', align: 'left'},
									content: 'Продаем великолепных щенков пиренейской горной собаки',
								}
							]
						}
					]
				},
				{
					block: 'image',
					width: '100%',
					url: 'https://sun6-1.userapi.com/c830708/v830708363/191db0/LxGbJxZCj5w.jpg'
				},
				{
					elem: 'section',
					content: [
						{
							elem: 'container',
							elemMods: {align: 'center' },
							mix: { block: 'decorator', mods: { 'space-t': 'xxxxxxl'} },
							attrs: { style: 'width:1024px;' },
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'full', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'pyrenees',
													mix: {block:'pt-card'},
													content: [
														{
															elem: 'image',
															content: [
																{
																	block: 'image',
																	width: '100%',
																	url:'https://sun6-4.userapi.com/c830708/v830708363/191dbe/gCU93xykyZ8.jpg'
																}
															]
														},
														{
															elem: 'footer',
															mix: { block: 'decorator', mods: { 'indent-t': 'xxl','indent-b':'xxxxxl' } },
															content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'l',  align: 'left'},
																			content: 'Девочка'
																		},
																		{
																			block: 'text',
																			mix: {block: 'pyrenees', elem:'link'},
																			mods: { view: 'primary', size: 'xxxl', align: 'left', font:'Baskerville'},
																			content: 'Чарис Грейт'
																		},
							
															]
														},
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'pyrenees',
													mix: {block:'pt-card'},
													content: [
														{
															elem: 'image',
															content: [
																{
																	block: 'image',
																	width: '100%',
																	url:'https://sun6-4.userapi.com/c830708/v830708363/191dbe/gCU93xykyZ8.jpg'
																}
															]
														},
														{
															elem: 'footer',
															mix: { block: 'decorator', mods: { 'indent-t': 'xxl','indent-b':'xxl' } },
															content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'l',  align: 'left'},
																			content: 'Девочка'
																		},
																		{
																			block: 'text',
																			mix: {block: 'pyrenees', elem:'link'},
																			mods: { view: 'primary', size: 'xxxl', align: 'left', font:'Baskerville'},
																			content: 'Чарис Грейт'
																		},
							
															]
														},
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'pyrenees',
													mix: {block:'pt-card'},
													content: [
														{
															elem: 'image',
															content: [
																{
																	block: 'image',
																	width: '100%',
																	url:'https://sun6-4.userapi.com/c830708/v830708363/191dbe/gCU93xykyZ8.jpg'
																}
															]
														},
														{
															elem: 'footer',
															mix: { block: 'decorator', mods: { 'indent-t': 'xxl','indent-b':'xxl' } },
															content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'l',  align: 'left'},
																			content: 'Девочка'
																		},
																		{
																			block: 'text',
																			mix: {block: 'pyrenees', elem:'link'},
																			mods: { view: 'primary', size: 'xxxl', align: 'left', font:'Baskerville'},
																			content: 'Чарис Грейт'
																		},
							
															]
														},
													]
												}
											]
										}
									]
								},
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'full', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'pyrenees',
													mix: {block:'pt-card'},
													content: [
														{
															elem: 'image',
															content: [
																{
																	block: 'image',
																	width: '100%',
																	url:'https://sun6-4.userapi.com/c830708/v830708363/191dbe/gCU93xykyZ8.jpg'
																}
															]
														},
														{
															elem: 'footer',
															mix: { block: 'decorator', mods: { 'indent-t': 'xxl','indent-b':'xxl' } },
															content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'l',  align: 'left'},
																			content: 'Девочка'
																		},
																		{
																			block: 'text',
																			mix: {block: 'pyrenees', elem:'link'},
																			mods: { view: 'primary', size: 'xxxl', align: 'left', font:'Baskerville'},
																			content: 'Чарис Грейт'
																		},
							
															]
														},
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'pyrenees',
													mix: {block:'pt-card'},
													content: [
														{
															elem: 'image',
															content: [
																{
																	block: 'image',
																	width: '100%',
																	url:'https://sun6-4.userapi.com/c830708/v830708363/191dbe/gCU93xykyZ8.jpg'
																}
															]
														},
														{
															elem: 'footer',
															mix: { block: 'decorator', mods: { 'indent-t': 'xxl','indent-b':'xxl' } },
															content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'l',  align: 'left'},
																			content: 'Девочка'
																		},
																		{
																			block: 'text',
																			mix: {block: 'pyrenees', elem:'link'},
																			mods: { view: 'primary', size: 'xxxl', align: 'left', font:'Baskerville'},
																			content: 'Чарис Грейт'
																		},
							
															]
														},
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'pyrenees',
													mix: {block:'pt-card'},
													content: [
														{
															elem: 'image',
															content: [
																{
																	block: 'image',
																	width: '100%',
																	url:'https://sun6-4.userapi.com/c830708/v830708363/191dbe/gCU93xykyZ8.jpg'
																}
															]
														},
														{
															elem: 'footer',
															mix: { block: 'decorator', mods: { 'indent-t': 'xxl','indent-b':'xxl' } },
															content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'l',  align: 'left'},
																			content: 'Девочка'
																		},
																		{
																			block: 'text',
																			mix: {block: 'pyrenees', elem:'link'},
																			mods: { view: 'primary', size: 'xxxl', align: 'left', font:'Baskerville'},
																			content: 'Чарис Грейт'
																		},
							
															]
														},
													]
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
					attrs: { style: 'border-top: 1px #fafafa; border-bottom: 1px #fafafa' },
					content: [
						{
						elem: 'container',
							elemMods: {align: 'center' },
							mix: { block: 'decorator', mods: { 'space-t': 'xxxxxxl'} },
							
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
			content: [
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' }},
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 1008px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'article-preview',
													mix: [
														{ block: 'theme', mods: { color: 'whitepaper-inverse' }},
														{ block: 'component', mods: { whitepaper: 'inverse' }},
														{ block: 'pt-card' }
													],
													content: [
														{
															elem: 'footer-wrapper',
															mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl' }},
															content: [
																{
																	elem: 'footer',
																	content: [
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'xl', weight: 'semibold', align: 'center'},
																			content: 'История породы'
																		},
																		{
																			block: 'text',
																			mods: { view: 'primary', size: 'm', align: 'center'},
																			content: 'Где она была выведена и почему была королевской собакой'
																		},
								
																	]
																}
															]
														},
														{
															block: 'image',
															mix: { block: 'pt-card', elem: 'image', elemMods: { size: 'cover' }},
															url: 'https://pp.userapi.com/c846420/v846420096/e716c/UMHF3EvK7ww.jpg'
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