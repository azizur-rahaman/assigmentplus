const env = process.env.NEXT_PUBLIC_ENV;

export const baseUrl = env === 'production'
  ? process.env.NEXT_PUBLIC_BASE_URL_PROD
  : process.env.NEXT_PUBLIC_BASE_URL_DEV || 'http://localhost:3000';

// For API calls, always use relative paths in production when behind a rewrite
export const apiBaseUrl = env === 'production' ? '' : baseUrl;