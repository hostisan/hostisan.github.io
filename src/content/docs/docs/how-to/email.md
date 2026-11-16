---
title: How to set up email
description: Host email on your server with spam filtering and webmail.
---

Hostisan includes everything you need to run email: sending, receiving, spam filtering, and webmail.

## Add a mail domain

1. Go to **Mail** in the sidebar
2. Click **Add Mail Domain**
3. Enter your domain (e.g., `example.com`)
4. Click **Save**

## Create a mailbox

1. Click your mail domain
2. Click **Add Account**
3. Enter the account name (the part before @, like `info`)
4. Set a password
5. Click **Save**

You now have `info@example.com`.

## Set up DNS records

For email to work, your domain's DNS needs specific records. If Hostisan manages your DNS, these are added automatically.

If you use external DNS (Cloudflare, Route53, etc.), you'll need to add them manually. The panel shows exactly what to add:

1. Click your mail domain
2. Click **DNS Records**
3. Copy each record to your DNS provider

The key records are:
- **MX** — tells the internet where to deliver mail
- **SPF** — proves you're allowed to send from this domain
- **DKIM** — signs outgoing mail so recipients trust it

## Access webmail

Your users can read email in a browser:

1. Go to `https://your-server:8083`
2. Click **Webmail** (or go directly to `/webmail/`)
3. Log in with the full email address and password

## Set up a mail client

For Outlook, Thunderbird, iPhone, or Android:

| Setting | Value |
|---------|-------|
| Incoming server | mail.yourdomain.com |
| Incoming port | 993 (IMAP) or 995 (POP3) |
| Outgoing server | mail.yourdomain.com |
| Outgoing port | 465 |
| Security | SSL/TLS |
| Username | Full email address |

## Adjust spam filtering

Each mailbox can have its own spam sensitivity:

1. Go to **Mail** → your domain → your account
2. Click **Edit**
3. Adjust the spam filter threshold
4. Save

Lower numbers catch more spam but might flag legitimate mail. The default works for most people.

## Troubleshooting

**Not receiving email**

Check your MX record. Go to **Mail** → your domain → **DNS Records** and verify the MX record is set up at your DNS provider.

**Email going to spam at recipients**

Your SPF, DKIM, or DMARC records may be missing. Check them under **DNS Records**. Use [mail-tester.com](https://mail-tester.com) to diagnose.

**Can't send email**

Some hosting providers block outgoing mail (port 25) by default. Contact your provider to unblock it, or use a mail relay service.

---

<details>
<summary>CLI alternative</summary>

Add a mail domain:
```bash
v-add-mail-domain USER example.com
```

Create a mailbox:
```bash
v-add-mail-account USER example.com info password123
```

List mailboxes:
```bash
v-list-mail-accounts USER example.com
```
</details>
