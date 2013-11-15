var path = require('path')
    , rootPath = path.normalize(__dirname + '/..')
    , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
    , notifier = {
        APN: false,
        email: false, // true
        actions: ['comment'],
        tplPath: templatePath,
        postmarkKey: 'POSTMARK_KEY',
        parseAppId: 'PARSE_APP_ID',
        parseApiKey: 'PARSE_MASTER_KEY'
    }

module.exports = {
    development: {
        db: 'mongodb://localhost/jst-dev',
        root: rootPath,
        notifier: notifier,
        app: {
            name: 'JoinTheSecta - Development'
        }
    },
    test: {
        db: 'mongodb://localhost/jst-test',
        root: rootPath,
        notifier: notifier,
        app: {
            name: 'JoinTheSecta - Test'
        }
    },
    production: {
        db: 'mongodb://localhost/jst',
        root: rootPath,
        notifier: notifier,
        app: {
            name: 'JoinTheSecta - Production'
        }
    }
}
