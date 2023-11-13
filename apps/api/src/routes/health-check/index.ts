import { RouteOptions } from "fastify";

//@ts-expect-error public
import {version} from '../../../package.json';

export const healthCheckRoute: RouteOptions = {
    method: 'GET',
    url: '/health-check',
    handler: async () => {
        return {
            appVersion: version,
            status: 'ok',
            uptime: process.uptime(), 
        }
    }
};