---
title: "Week 02 — HTTP & Web Fundamentals"
week: "WEEK 02"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Read HTTP requests and responses, understand cookies and sessions, and inspect a safe demo app with browser tools."
date: 2026-10-24
---

## Week overview
Web testing starts with understanding normal behavior. Learn how browsers and servers exchange requests before thinking about security weaknesses.

## Learning objectives
- Identify an HTTP method, path, headers, status code, and response body.
- Explain cookies, sessions, TLS, and content types.
- Use browser Developer Tools to inspect a local or approved training app.

## Concepts to learn
- **Methods:** GET commonly retrieves a resource; POST commonly submits data. Other methods have specific semantics.
- **Status codes:** 2xx indicates success, 3xx redirection, 4xx a client-side issue, and 5xx a server-side issue.
- **Headers:** metadata such as content type, caching instructions, and security policy.
- **Cookies and sessions:** cookies are browser-stored values; a session is server-side or application state associated with a user.
- **Authentication vs authorization:** authentication establishes identity; authorization decides what that identity may do.
- **TLS/HTTPS:** protects confidentiality and integrity while traffic travels between endpoints, assuming it is correctly configured.

## Guided safe exercise
1. Open a local demo site or an approved training application.
2. Open browser Developer Tools → Network and reload the page.
3. Select one request and record its method, path, status code, and content type.
4. Compare a normal page request with a form submission in the demo, if available.
5. Note which data is sent in the URL, headers, or request body. Use dummy data only.
6. Clear the capture before sharing screenshots; never expose real cookies, authorization headers, tokens, or personal information.

## Deliverable
Create a request/response worksheet with sanitized examples and a short glossary. Include one example of a 2xx, 3xx, 4xx, and 5xx status code and explain the context of each.

## Self-check
- Why should session cookies be treated as secrets?
- Does a 404 response automatically mean a vulnerability exists?
- What is the difference between a request header and a response header?

## Completion checklist
- [ ] I can label the main parts of a request and response.
- [ ] I can explain cookies, sessions, and TLS.
- [ ] I inspected only a local or authorized app.
- [ ] My notes contain no secrets or real user data.

## Further reading
- [MDN — HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [MDN — HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
