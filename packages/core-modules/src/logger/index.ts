import pino from 'pino';

export const logger = pino({
  redact: [''],
  level: 'debug',
  trasnport: {
    target: 'pino-pretty'
  }
});