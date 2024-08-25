# Node.js Server with Request Blocking

This project is a Node.js server designed to block requests from network scanners like Shodan, Censys, FOFA, and others. The server uses middleware to block incoming requests based on User-Agent headers, specific IP addresses, and entire IP address ranges known to be associated with these scanning services.

## Features

- **User-Agent Blocking**: Blocks requests from known network scanners by analyzing their User-Agent headers.
- **IP Address Blocking**: Blocks requests from specific IP addresses identified as sources of scanning activities.
- **IP Range Blocking**: Blocks entire ranges of IP addresses, providing more comprehensive protection against known scanners.
- **Modular Structure**: Organized in a way that makes it easy to extend, customize, and manage the server's configuration.
- **Lightweight and Simple**: Easy to set up and run with minimal configuration and dependencies.

## Project Structure

my-node-server/ 
│ 
├── app.js # Main server file 
├── middlewares/ 
│ └── blockRequests.js # Middleware for blocking requests 
└── config/ 
  └── blocked.js # Configuration file with blocked User-Agents, IPs, and IP ranges


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/rauandeveloper/ScanGuard.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ScanGuard
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```

### Running the Server

To start the server, run:

```bash
node app.js
The server will start on http://localhost:8080.

Customization

    Blocked User-Agents: Modify the config/blocked.js file to add or remove User-Agent patterns.
    Blocked IP Addresses: Add or remove specific IP addresses in the config/blocked.js file.
    Blocked IP Ranges: Define IP address ranges to block in the config/blocked.js file using CIDR notation (e.g., 198.20.87.0/24).


// config/blocked.js
module.exports = {
    userAgents: [
        /shodan/i,
        /censys/i,
        // Additional patterns...
    ],
    ips: [
        '198.20.87.98',
        '167.248.133.10',
        // Additional IP addresses...
    ],
    ipRanges: [
        '198.20.87.0/24',
        '167.248.133.0/24',
        // Additional IP ranges...
    ]
};

Contributing

Contributions are welcome! Feel free to submit issues, feature requests, or pull requests to help improve the project.
