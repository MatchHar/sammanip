import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { applySecurityHeaders } from '../common/security-headers.js';
import { getPrivateUpstreamHeaders } from '../common/upstream-headers.js';

describe('applySecurityHeaders', () => {
    it('sets browser-facing baseline security policy headers', () => {
        const headers = {};
        const res = { setHeader: (name, value) => { headers[name] = value; } };
        let nextCalled = false;
        applySecurityHeaders({}, res, () => { nextCalled = true; });

        assert.equal(headers['X-Content-Type-Options'], 'nosniff');
        assert.equal(headers['X-Frame-Options'], 'DENY');
        assert.equal(headers['Referrer-Policy'], 'same-origin');
        assert.equal(nextCalled, true);
    });
});

describe('getPrivateUpstreamHeaders', () => {
    it('forwards only explicit authentication and language context', () => {
        assert.deepEqual(getPrivateUpstreamHeaders({
            authorization: 'Bearer abc',
            'accept-language': 'zh-CN',
            cookie: 'session=private',
            host: 'example.test',
            'cf-connecting-ip': '198.51.100.1',
        }), {
            authorization: 'Bearer abc',
            'accept-language': 'zh-CN',
        });
    });
});
