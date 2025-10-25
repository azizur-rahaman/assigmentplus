const env = process.env.NEXT_PUBLIC_ENV;

export const baseUrl = env === 'production'
  ? process.env.NEXT_PUBLIC_BASE_URL_PROD
  : process.env.NEXT_PUBLIC_BASE_URL_DEV || 'http://localhost:3000';