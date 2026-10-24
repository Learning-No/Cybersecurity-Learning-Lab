---
title: "Week 10 — Validation & Evidence Collection"
week: "WEEK 10"
track: "VAPT ROADMAP"
level: "Beginner → Intermediate"
summary: "Create clear, minimal, reproducible evidence that supports a finding while protecting sensitive data and chain of custody."
date: 2026-10-24
---

## Mission
Evidence is the bridge between an observation and a defensible finding. Collect only what is necessary, in scope, and safe to retain. Use lab data, dummy accounts, and sanitized captures.

## Evidence lifecycle
```text
Question + scope → Minimal collection → Timestamp / context
      → Sanitize → Store securely → Explain finding
      → Reviewer reproduces → Retest → Dispose per policy
```

## What good evidence contains
- **Context:** target component, lab version, account role, and relevant configuration.
- **Reproducibility:** numbered steps that another authorized reviewer can repeat.
- **Integrity:** preserve an original only when policy requires it; document handling and hash a file if integrity checking is needed.
- **Minimization:** avoid collecting unrelated records, credentials, tokens, personal data, or entire datasets.
- **Clarity:** distinguish screenshot, log excerpt, request/response, configuration output, and inference.
- **Privacy:** redact sensitive values before sharing; never paste live session cookies or secrets into a public issue or repository.

## Guided lab
1. Choose a harmless, prebuilt issue in a local training application or a supplied sample report.
2. Write the expected behavior and the observed behavior before taking evidence.
3. Capture one screenshot or short sanitized excerpt that demonstrates the difference.
4. Record the date/time with timezone, lab version, account role, steps, and tool versions where relevant.
5. Redact identifiers and secrets. Keep a note that redaction occurred; never alter the meaning of the evidence.
6. Ask a classmate to reproduce the lab result from your steps using their own test account.
7. Record limitations and what the evidence does not prove.
8. Store evidence in the approved location and follow the lab's retention/deletion rules.

## What to track and identify
Evidence ID; source; timestamp/timezone; collector; target/lab version; steps; account role; original filename; hash if appropriate; redactions; storage location; access restrictions; reviewer; reproduction result; retention date.

## Open-source tools
- [sha256sum documentation](https://www.gnu.org/software/coreutils/manual/html_node/sha2-utilities.html) for file-integrity hashes on supported systems.
- [Wireshark](https://www.wireshark.org/) for authorized lab captures; captures may contain sensitive data.
- [Git](https://git-scm.com/doc) for versioning sanitized reports and learning notes; never commit secrets.
- [ExifTool](https://exiftool.org/) is open source and can inspect metadata; use only on files you are allowed to analyze.

## Deliverable
Produce an evidence pack with a scope note, numbered reproduction steps, one sanitized artifact, a short explanation of what it proves and does not prove, and a peer-reproduction result.

## Self-check
- Why is a screenshot without context weak evidence?
- When should a raw capture not be shared?
- Why is a hash not proof that the evidence itself is truthful?
- What do you do if you collect real personal data by mistake?

## Completion checklist
- [ ] Evidence is minimal, in scope, and reproducible.
- [ ] Secrets and personal data are removed before sharing.
- [ ] Limitations and uncertainty are explicit.
- [ ] Retention and access rules are followed.

## Further reading
- [NIST SP 800-86 — Guide to Integrating Forensic Techniques](https://csrc.nist.gov/pubs/sp/800/86/final)
- [NIST SP 800-61 — Incident Handling](https://csrc.nist.gov/pubs/sp/800/61/r2/final)
