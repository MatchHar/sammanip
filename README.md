# SamMan IP Toolbox

Private-deployment-oriented IP and network privacy toolbox.

## Security Defaults

- The deployed interface is neutral-branded and does not link to third-party maintainer profiles or sponsor pages.
- Browser requests no longer use deployment-specific external endpoints by default.
- Private API integrations are disabled unless you explicitly configure their endpoint and key.
- The backend rejects malformed request origins, limits JSON body size, sets baseline browser security headers, and does not trust proxy headers unless configured.

## Deploy

Create `.env` from `.env.example`, set `ALLOWED_DOMAINS` to your deployed hostname, and provide MaxMind credentials if geolocation is required.

```bash
docker compose up -d --build
```

For a trusted single reverse proxy in front of the backend, set `TRUST_PROXY_HOPS="1"`. Leave it empty when the backend receives client traffic directly.

## Optional Integrations

`IPCHECKING_API_ENDPOINT` and `IPCHECKING_API_KEY` are intentionally blank. Configure them only for an API service you control or explicitly trust.

## License

Distributed under the license in [LICENSE](./LICENSE).
