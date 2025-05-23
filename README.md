# ✈️ Flight Unblocker

A lightweight self-hosted web proxy that lets you quickly view blocked or geo-restricted webpages (or simply browse with a different user-agent) right from your browser.

The project consists of a single **Express** server that proxies GET requests (`/proxy?url=...`) and a minimalist HTML frontend located in the `public/` folder.

---

## Features

• 🔗 **URL or search** – paste a full URL *or* just type a search query (the proxy will fallback to a Google search page).

• 🛫 **Instant preview** – pages are rendered inside an `<iframe>` so you never leave the Unblocker tab.

• 🛡 **CORS handled for you** – the proxy adds the required CORS headers so the responses can be embedded by the frontend.

• 🎒 **Zero-config** – no build tools, no database, just Node.js.

---

## Getting started

### Prerequisites

* Node.js ≥ 14 (18+ recommended)

### Installation

```bash
# clone the repo (or download the source)
$ git clone https://github.com/your-username/flight-unblocker.git
$ cd flight-unblocker

# install deps
$ npm install
```

### Running locally

```bash
# start the server (default port 8080)
$ node server.js
```

Now open <http://localhost:8080> in your browser.

> You can change the port by exporting the `PORT` environment variable:
>
> ```bash
> PORT=3000 node server.js
> ```

---

## Using the proxy endpoint directly

```
GET /proxy?url=https://example.com
```

• Returns the raw HTML of the requested page.
• If `url` is *not* a valid URL, the proxy responds with a Google search results page for the given string.

---

## Project layout

```
.
├── public/        # static frontend (index.html, styles, JS)
├── server.js      # Express proxy server
├── package.json   # project metadata & dependencies
└── LICENSE        # MPL-2.0
```

---

## Deployment

Because the server is a single Node.js file you can deploy it almost anywhere – Fly.io, Render, Railway, Heroku, VPS, etc.  Make sure the `PORT` environment variable is set by your host.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/awesome`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome`)
5. Open a pull request

---

## License

This project is licensed under the terms of the **Mozilla Public License 2.0**.  See the [LICENSE](LICENSE) file for details. 