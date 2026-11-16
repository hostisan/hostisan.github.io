---
title: How to set up SSL certificates
description: Get free HTTPS certificates from Let's Encrypt.
---

Hostisan requests free SSL certificates from Let's Encrypt and renews them automatically.

## Before you start

- Your domain must point to your server (A record in DNS)
- The domain must be added as a web domain in Hostisan

## Get a certificate

1. Go to **Web** in the sidebar
2. Click your domain name
3. Click **Edit**
4. Scroll to **SSL Support**
5. Check **Enable SSL**
6. Select **Let's Encrypt** as the SSL provider
7. Click **Save**

The certificate installs in about a minute. You'll see a green lock icon next to the domain when it's ready.

## Force HTTPS

After SSL is working, make all visitors use HTTPS automatically:

1. Edit the domain again
2. Check **Force SSL**
3. Save

Now anyone visiting `http://` gets redirected to `https://`.

## Secure the panel itself

The panel runs on port 8083. To get SSL for it:

1. Go to **Server** in the sidebar
2. Click **Configure**
3. Find **Panel SSL** 
4. Click **Request Let's Encrypt**

## Troubleshooting

**Certificate request fails**

Check that your domain's DNS points to this server. In the panel, the IP shown on the dashboard should match what your domain resolves to.

**Still showing "Not Secure"**

Clear your browser cache, or wait a few minutes. Browsers cache certificate info.

**Renewal stopped working**

Certificates renew automatically via a scheduled task. Go to **Server** → **Cron Jobs** and make sure the Let's Encrypt renewal job exists.

---

<details>
<summary>CLI alternative</summary>

Request a certificate:
```bash
v-add-letsencrypt-domain USER example.com
```

Force HTTPS:
```bash
v-add-web-domain-ssl-force USER example.com
```

Secure the panel:
```bash
v-add-letsencrypt-host
```
</details>
