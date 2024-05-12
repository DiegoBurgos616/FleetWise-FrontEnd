import { getEnv } from '@elemental-concept/env-bakery';

export const environment = () => ({
  production: false,
  apiURL: getEnv('API_URL').string(),
});
