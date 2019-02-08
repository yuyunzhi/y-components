module.exports = {
    base: '/y-components/',
    title: 'Y-Components',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            {
               title: '入门',
               children:[
                   '/install/',
               ]
            },
            {
                title:'组件',
                children:[
                    '/components/button',
                    '/components/input',
                    '/components/tabs',
                    '/components/grid',
                    '/components/layout',
                    '/components/waterfall',
                    '/components/toast',
                    '/components/collapse',
                    '/components/pager',
                    '/components/sticky',
                    '/components/captcha',
                    '/components/table',
                    '/components/slides',
                    '/components/uploader',
                    '/components/popover',
                    '/components/cascader',
                ]
            }

        ]
    }
}