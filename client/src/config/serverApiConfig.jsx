export const ADMIN_API_BASE_URL =
  import.meta.env.PROD
    ? import.meta.env.VITE_BACKEND_SERVER + 'api/'
    : 'http://localhost:8888/api/v1/admin/';