import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin'
import withBundleAnalyzer from '@next/bundle-analyzer'

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin()
const withBundleAnalyzerConfig = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzerConfig(withNextIntl(nextConfig))
