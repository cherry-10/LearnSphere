// API Configuration for Web and Mobile

// For development (web browser)
const DEV_API_URL = 'http://localhost:5000';

// For production (deployed backend)
// Replace this with your actual deployed backend URL
const PROD_API_URL = 'https://your-backend-url.com';

// Auto-detect environment
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? PROD_API_URL 
  : DEV_API_URL;

// Alternative: Use environment variable
// export const API_BASE_URL = process.env.REACT_APP_API_URL || DEV_API_URL;

export default API_BASE_URL;
