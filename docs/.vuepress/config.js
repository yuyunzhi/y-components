module.exports = {
    base: '/y-components/',
    title: 'Y-Components UI',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            {
               title: '入门',
               children:[
                   '/install/',
                   '/get-started/',
               ]
            },
            {
                title:'组件',
                children:[
                    '/components/button'
                ]
            }

        ]
    }
}