require("dotenv").config()

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        LIFF_ID: process.env.LIFF_ID
    }
}

module.exports = nextConfig
