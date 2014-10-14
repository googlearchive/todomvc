module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: {
            file: 'index.html'
        }
    },
    {
        method: 'GET',
        path: '/bower_components/{path*}',
        handler: {
            directory: {
                path: './bower_components',
                listing: true
            }
        }
    },
    {
        method: 'GET',
        path: '/dist/public/{path*}',
        handler: {
            directory: {
                path: './dist/public',
                listing: true
            }
        }
    }
];