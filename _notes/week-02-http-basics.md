---
title: "Week 02 — HTTP & Web Fundamentals"
week: "WEEK 02"
track: "VAPT ROADMAP"
level: "Beginner"
summary: "Read HTTP requests and responses, understand cookies and sessions, and inspect a safe demo app with browser tools."
date: 2026-10-24
---

## Week overview
Web testing starts with understanding normal behavior. Learn how browsers and servers exchange requests before studying security weaknesses.

## Learning objectives
- Identify an HTTP method, path, headers, status code, and response body.
- Explain cookies, sessions, TLS, and content types.
- Use browser Developer Tools to inspect a local or approved training app.

## Concepts to learn
- **Methods:** GET commonly retrieves a resource; POST commonly submits data.
- **Status codes:** 2xx success, 3xx redirection, 4xx client-side issue, 5xx server-side issue.
- **Headers:** metadata such as content type, caching instructions, and security policy.
- **Cookies and sessions:** cookies are browser-stored values; a session is state associated with a user.
- **Authentication vs authorization:** identity verification vs deciding what that identity may do.
- **TLS/HTTPS:** protects traffic in transit when configured correctly.

## Guided safe exercise
1. Open a local demo site or approved training application.
2. Open Developer Tools → Network and reload the page.
3. Select one request and record its method, path, status code, and content type.
4. Compare a normal page request with a form submission using dummy data, if available.
5. Note which data appears in the URL, headers, or body.
6. Never capture or share real credentials, session cookies, tokens, or personal information.

## Deliverable
Create a sanitized request/response worksheet. Include an example of a 2xx, 3xx, 4xx, and 5xx status and explain its context.

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
- [MDN — HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
