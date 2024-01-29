# Zendesk JWT SSO Application

This application allows you to generate JSON Web Tokens (JWT) for Zendesk Help Center authentication using a simple Express server (`server.js`) and a client-side HTML file (`client_sso.html`).

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/romainhenryz/local-zendesk-sso-jwt.git
   cd local-zendesk-sso-jwt

2. Install dependencies

    ```bash
    npm install

### Configuration

1. Create a `.env` file in the root directory and set the following variables

    ```env
    ZENDESK_SECRET_KEY=zendesk_jwt_sso_secret_key
    ZENDESK_SUBDOMAIN=zendesk_subdomain
    PORT=3000

### Running the Application

1. Start the Express server.

    ```bash
    npm start

The server will run on <http://localhost:3000>.

2. Open client_sso.html in VS Code. Use the "Live Server" extension to run it. Alternatively, you can open the HTML file in any web browser.

3. Fill in the form. Add the required information (Name, Email, External ID), and click "Sign-in to Zendesk."

4. The server will generate a JWT, and you will be redirected to the Zendesk Help Center with the generated JWT for authentication.

### How It Works
The application consists of an Express server (server.js) that exposes a single endpoint: `/jwt`. The HTML file (client_sso.html) contains a simple form for user input and JavaScript code to handle form submission. The JWT is generated on the server using the provided information and is then used for Zendesk SSO.
