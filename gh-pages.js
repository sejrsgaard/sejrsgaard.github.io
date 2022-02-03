var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/sejrsgaard/sejrsgaard.github.io.git',  
        user: {
            name: 'Kenneth Sejrsgaard-Jacobsen',
            email: 'ksj2209@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
