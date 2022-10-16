/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    NEXT_PUBLIC_CLIENT_ID: '00d3bda570e74ebcb19aec2dcb8101d2', // Your client id
    NEXT_PUBLIC_CLIENT_SECRET: 'e299c09498cc45819de05fb3eea24478', // Your secret
    NEXT_PUBLIC_REDIRECT_URI: 'http://localhost:3000', // Your redirect uri
  },
}
