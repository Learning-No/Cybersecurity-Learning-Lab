---
title: "Week 02 — HTTP & Web Fundamentals"
week: "WEEK 02"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Trace a browser request, read HTTP messages, understand cookies and sessions, and build a sanitized request/response worksheet."
date: 2026-10-24
---

## Mission and outcomes
Web security work begins by learning what normal behavior looks like. By the end of this week, you should be able to explain a browser-to-server request, read the important fields in a response, distinguish authentication from authorization, and record a reproducible baseline without collecting secrets.

## Mental model

```text
Browser ── DNS lookup ──> Resolver
   │
   ├── TCP connection + TLS handshake ──> Web server
   │                                         │
   └── HTTP request ────────────────────────>│
   <──────────── status + headers + body ────┘
```

DNS finds an address; TCP provides a reliable byte stream; TLS protects the connection; HTTP describes the request and response. They are related layers, not interchangeable terms. [Read the HTTP concept guide →]({{ '/concepts/http-https/' | relative_url }})

## Learn these concepts
- **Method and path:** GET commonly retrieves a representation; POST commonly submits data. The server's actual behavior depends on its implementation.
- **Status code:** 2xx generally indicates success, 3xx redirection, 4xx a client/request issue, and 5xx a server-side failure. A status code alone does not prove a defect.
- **Headers:** metadata such as content type, caching, origin, and security policy. Request headers and response headers describe different directions.
- **Cookies and sessions:** a cookie is a browser-held value; a session is server-side or token-based state associated with a client. Treat session identifiers as credentials.
- **Authentication vs authorization:** proving who you are vs deciding what you are allowed to do.
- **TLS:** protects data in transit when certificate validation and configuration are correct; it does not make an application automatically safe.

## Guided lab — inspect normal behavior
**Use:** browser Developer Tools, a local demo app, or a training target whose rules explicitly allow inspection. Do not use real accounts or production sessions.

1. Open Developer Tools → **Network**, enable Preserve log only if useful, then reload the demo page.
2. Select the document request. Record method, path (remove sensitive query values), status, content type, and whether the connection uses HTTPS.
3. Select a static asset and compare its request/response with the document.
4. Submit only dummy data in a form designed for the lab. Observe whether the browser sends a GET or POST and where the dummy value appears.
5. Review cookies without copying their values into notes. Record only attributes such as Secure, HttpOnly, and SameSite when visible.
6. Reload and compare behavior. Write down what changed and what remained stable.
7. Export no raw HAR file unless it has been carefully sanitized; HAR files can contain cookies, tokens, URLs, and personal data.

## What to track and identify
- Request method, path, status, content type, redirect chain, and timing.
- Where test data is sent: URL, header, or body.
- Whether HTTPS is used and whether the app sets appropriate cookie attributes.
- Expected vs observed behavior; separate facts from assumptions.
- Any secrets or personal data encountered: stop, do not copy it, and notify the lab owner/instructor.

## Deliverable
Create a sanitized request/response worksheet with three requests and explain one 2xx, one redirect, one 4xx or 5xx response from the lab. Add a short diagram of the request path.

## Self-check
1. Why is a session cookie sensitive even if it looks like random text?
2. Does a 404 automatically mean the server is vulnerable?
3. What is the difference between a response header and a request header?
4. Why does HTTPS not guarantee correct authorization?

## Completion checklist
- [ ] I can label method, path, status, headers, and body.
- [ ] I can explain cookies, sessions, authentication, authorization, and TLS.
- [ ] I inspected only a local or explicitly approved app.
- [ ] My notes contain no credentials, tokens, real personal data, or raw captures.

## Open-source tools and reading
- Browser developer tools (built into Firefox): [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/)
- [curl documentation](https://curl.se/docs/) — use only against your own or approved app.
- [MDN HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [MDN status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
