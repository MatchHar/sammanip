// Validate environment variables exist to enable/disable frontend features
export default (req, res) => {
    // defensive; app.get() in backend-server.js already gates method, but a
    // dedicated smoke test asserts this branch directly against the handler.
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const envConfigs = {
        map: process.env.GOOGLE_MAP_API_KEY,
        ipInfo: process.env.IPINFO_API_TOKEN,
        ipChecking: process.env.IPCHECKING_API_KEY,
        ip2location: process.env.IP2LOCATION_API_KEY,
        originalSite: false,
        cloudFlare: process.env.CLOUDFLARE_API,
        ipapiis: process.env.IPAPIIS_API_KEY,
    };
    let result = {};
    for (const key in envConfigs) {
        result[key] = !!envConfigs[key];
    }
    res.status(200).json(result);
};
