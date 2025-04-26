// first look into the .env file, if not present name it from here.
export const APP_NAME = process.env.PUBLIC_APP_NAME || 'Prostate';
export const APP_DESCRIPTION = process.env.PUBLIC_APP_DESCRIPTION || 'Shoppe like never before...';
export const SERVER_URL = process.env.PUBLIC_SERVER_URL || "http://192.168.29.129:3000";