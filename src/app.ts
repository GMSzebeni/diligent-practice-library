import fastify from 'fastify';

export default function createApp(options = {}) {
    const app = fastify(options);

    return app;
}