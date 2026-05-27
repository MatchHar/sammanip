// dotenv.config() is called once in backend-server.js before any handler
// imports this module, so process.env.ALLOWED_DOMAINS is already populated.
// Avoid the duplicate call to keep this a pure, fast function.

function refererCheck(referer) {
    if (!referer || typeof referer !== 'string') return false;

    const allowedDomains = new Set([
        'localhost',
        ...(process.env.ALLOWED_DOMAINS || '')
            .split(',')
            .map(domain => domain.trim().toLowerCase())
            .filter(Boolean),
    ]);

    try {
        const url = new URL(referer);
        if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) {
            return false;
        }
        return allowedDomains.has(url.hostname.toLowerCase());
    } catch {
        return false;
    }
}

export { refererCheck };
