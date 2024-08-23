module.exports = {
    userAgents: [
        /shodan/i,
        /censys/i,
        /fofa/i,
        /masscan/i,
        /nmap/i,
        /zmap/i,
        /netcraft/i,
        /whois/i,
        /zgrab/i,
        /nikto/i,
    ],
    ips: [
        '198.20.87.98',  // Shodan
        '167.248.133.10', // Censys
    ],
    ipRanges: [
        '198.20.87.0/24',   // Shodan
        '167.248.133.0/24', // Censys
    ]
};
