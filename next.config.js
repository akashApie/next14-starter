/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'as2.ftcdn.net'
            },
            {
                protocol:'https',
                hostname:'source.unsplash.com'
            }
        ]
    }
}

module.exports = nextConfig
