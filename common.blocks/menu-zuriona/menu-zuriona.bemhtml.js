block('menu-zuriona')(
    content()(function () {
        return {
            elem: 'container',
            mix: { block: 'tpl-layout', elem: 'container', elemMods: { size: 'm', align: 'center' }, },
            attrs: { style: 'width:1024px;' },
            content: [
                {
                    elem: 'logo',
                    content: [
                        {
                            block: 'text',
                            attrs: { style: 'font-family: PT Mono' },
                            mods: { size: 'xxl', view: 'primary', },
                            content: 'Питомник Зуриона',
                        },
                    ]
                },
                {
                    elem: 'nav',
                    content: [
                        {
                            block: 'text',
                            mods: { size: 'l', view: 'disable' },
                            content: 'Щенки'

                        },
                        {


                            block: 'text',
                            mods: { size: 'l', view: 'primary', },
                            mix: { block: 'menu-zuriona', elem: 'item', elemMods: { view: 'link' }, },
                            content: 'О питомнике'


                        },
                        {

                            block: 'text',
                            mods: { size: 'l', view: 'primary', },
                            mix: { block: 'menu-zuriona', elem: 'item', elemMods: { view: 'link' }, },
                            content: 'О породе'


                        },
                        {

                            block: 'text',
                            mods: { size: 'l', view: 'primary', },
                            mix: { block: 'menu-zuriona', elem: 'item', elemMods: { view: 'link' }, },
                            content: 'Контакты'


                        },
                        {


                            block: 'text',
                            mods: { size: 'l', view: 'primary', },
                            mix: { block: 'menu-zuriona', elem: 'item' },
                            content: '8 909 381 95 40'


                        }
                    ]
                },
            ]
        }
    }
    )
);