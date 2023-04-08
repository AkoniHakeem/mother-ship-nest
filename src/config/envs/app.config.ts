import { registerAs } from '@nestjs/config';
import processEnvObj from '.';

const getAppConfig = () => {
  let nodeEnv = String(processEnvObj.NODE_ENV).toLowerCase();
  if (!['development', 'staging', 'production', 'test'].includes(nodeEnv)) {
    nodeEnv = 'development';
  }

  return {
    NODE_ENV: nodeEnv,
    PROJECT_NAME: processEnvObj.PROJECT_NAME,
    SERVER_URL: String(processEnvObj.SERVER_URL).toLowerCase(),
    SERVER_HOST: processEnvObj.SERVER_HOST,
    SERVER_PORT: parseInt(processEnvObj.SERVER_PORT || '80') || 80,
    APP_KEY: processEnvObj.APP_KEY,
    JWT_SECRET: processEnvObj.JWT_SECRET,
    JWT_EXPIRY: processEnvObj.JWT_EXPIRY || '8h',
  };
};

export default registerAs('app', getAppConfig);