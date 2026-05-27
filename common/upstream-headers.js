// Only authentication and locale context are needed by configured private APIs.
// Forwarding all inbound headers would disclose cookies and proxy/CDN metadata.
export function getPrivateUpstreamHeaders(headers = {}) {
    const outbound = {};
    for (const name of ['authorization', 'accept-language']) {
        if (typeof headers[name] === 'string' && headers[name]) {
            outbound[name] = headers[name];
        }
    }
    return outbound;
}
