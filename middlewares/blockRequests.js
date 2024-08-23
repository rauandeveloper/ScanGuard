const ipRangeCheck = require('ip-range-check');
const { userAgents, ips, ipRanges } = require('../config/blocked');

function isBlockedUserAgent(userAgent) {
    return userAgents.some((pattern) => pattern.test(userAgent));
}

function isBlockedIP(ip) {
    return ips.includes(ip) || ipRanges.some(range => ipRangeCheck(ip, range));
}

function blockRequests(req, res, next) {
    const userAgent = req.headers['user-agent'] || '';
    const clientIP = req.connection.remoteAddress;

    if (isBlockedIP(clientIP) || isBlockedUserAgent(userAgent)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('Access Denied');
    }

    next();
}

module.exports = blockRequests;
