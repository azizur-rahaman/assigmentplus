// Shared Utility: Base URL Configuration

const env = process.env.NEXT_PUBLIC_ENV;

export const baseUrl = env === 'production'
  ? process.env.NEXT_PUBLIC_BASE_URL_PROD
  : process.env.NEXT_PUBLIC_BASE_URL_DEV || 'http://localhost:3000';

// For API calls, use the correct path that matches the rewrite rule
export const apiBaseUrl = env === 'production' ? '/tools/assigmentplus' : baseUrl;
