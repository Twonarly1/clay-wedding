/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        typedRoutes: true,
        serverActions: true,
    },
    images: {
        domains: ["oaxxgydogfcpdaxxxwbd.supabase.co"],
    },
}

module.exports = nextConfig
