---
title: Your first website
description: Add a domain, upload files, and see your site live.
---

In this tutorial, you'll add a website to Hostisan and see it live on the internet. By the end, you'll have a working site with HTTPS.

We'll use `example.com` as the domain. Replace it with your own.

## What you'll need

- Hostisan installed and running
- A domain name you control
- Access to your domain's DNS settings

## Step 1: Point your domain to your server

Before adding the domain to Hostisan, tell DNS where to find it.

Log into your domain registrar or DNS provider. Add an A record:

```
example.com → your.server.ip
```

Add another for www:

```
www.example.com → your.server.ip
```

DNS changes can take a few minutes to propagate. You can check with:

```bash
dig example.com +short
```

When it returns your server's IP, you're ready.

## Step 2: Add the domain in Hostisan

Log into your Hostisan panel at `https://panel.yourdomain.com:8083`.

Click **Web** in the sidebar. Then click **Add Web Domain**.

Enter your domain name: `example.com`

Leave the other options at their defaults. Click **Save**.

Hostisan creates the domain and sets up the web server configuration. You'll see it appear in your domain list.

## Step 3: Upload your files

Click on `example.com` in your domain list. Then click **Open File Manager**.

You're now in the file manager, looking at your domain's directory. The important folder is `public_html`. That's where your website files go.

Click into `public_html`. You'll see a default `index.html` file.

To upload your own files:

1. Click the **Upload** button in the toolbar
2. Select your files or drag them into the window
3. Wait for the upload to complete

Your files are now on the server.

## Step 4: See your site live

Open your browser and go to `http://example.com`.

You should see your website. If you uploaded an `index.html`, that's what appears. If you uploaded a PHP application, that works too.

## Step 5: Add HTTPS

Your site works, but it's on HTTP. Let's add a certificate.

Go back to **Web** in the Hostisan panel. Click on `example.com`.

Click **SSL Certificates**, then **Add Let's Encrypt**.

Hostisan requests a certificate from Let's Encrypt. This takes a few seconds. Once it's done, your site is available at `https://example.com`.

The panel also enables automatic redirect from HTTP to HTTPS, so visitors always get the secure version.

## What you built

You now have:

- A domain configured in Hostisan
- Files uploaded to the server
- A valid SSL certificate
- Automatic HTTPS redirect

The domain will auto-renew its certificate before it expires. You don't need to do anything.

## Next steps

- [Set up email](/docs/how-to/email) — Create mailboxes for your domain
- [Set up SSL](/docs/how-to/ssl) — More SSL options and troubleshooting
- [Back up your data](/docs/how-to/backups) — Protect your site
