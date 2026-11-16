---
title: How to install Hostisan
description: Install Hostisan on a fresh Ubuntu 24.04 server.
---

This guide walks you through installing Hostisan on a new server. The whole process takes about 15 minutes.

## Requirements

- A fresh Ubuntu 24.04 server (no other panels installed)
- At least 2 GB of RAM (4 GB recommended)
- 20 GB of disk space
- Root access via SSH
- A domain name pointing to your server's IP

Hostisan currently supports Ubuntu 24.04 only. Support for more distributions is coming.

## Before you start

Point your domain's DNS to your server. Create an A record:

```
panel.yourdomain.com → your.server.ip
```

Set it to DNS only (not proxied) if you're using Cloudflare. Let's Encrypt needs to reach your server directly to issue certificates.

## Installation

SSH into your server as root:

```bash
ssh root@your.server.ip
```

Download and run the installer:

```bash
curl -fsSL https://get.hostisan.com | bash -s -- \
  --hostname panel.yourdomain.com \
  --email you@example.com
```

The installer will:

1. Check your system meets the requirements
2. Install all dependencies (Nginx, Apache, PHP, MariaDB, etc.)
3. Configure the firewall
4. Set up the panel
5. Generate an admin password

This takes 10-15 minutes depending on your server.

## After installation

When the installer finishes, you'll see your login details:

```
Panel:    https://panel.yourdomain.com:8083
Username: admin
Password: (shown on screen)
```

The password is also saved to `/root/hostisan-admin-password.txt`. Delete this file once you've stored the password somewhere safe.

Open the panel URL in your browser. You'll get a security warning if Let's Encrypt hasn't issued a certificate yet. That happens automatically within a few minutes after your DNS propagates.

## What's installed

Hostisan sets up a complete web hosting stack:

- **Web servers**: Nginx (frontend) + Apache (backend)
- **PHP**: PHP-FPM 8.5
- **Database**: MariaDB 11.8
- **Email**: Exim + Dovecot + Roundcube webmail
- **DNS**: BIND
- **FTP**: vsftpd
- **Security**: iptables firewall + Fail2Ban

All services are configured and running. You can start adding websites right away.

## Troubleshooting

### The installer fails with a port conflict

Something else is using port 80 or 443. Stop the conflicting service:

```bash
ss -ltnp | grep ':80\|:443'
```

This shows what's using those ports. Stop it and run the installer again.

### Let's Encrypt certificate doesn't appear

Make sure your DNS is set to the server's IP and not proxied. Then run:

```bash
v-add-letsencrypt-host
```

### Can't access the panel

Check that port 8083 is open in your cloud provider's firewall. Hostisan opens it in iptables, but cloud firewalls are separate.

## Updating

To update Hostisan later:

```bash
v-update-sys-hostisan-all
```

Or use the update button in the panel.

## Next steps

- [Your first website](/docs/tutorials/first-website) — Add a domain and upload files
- [How to add SSL certificates](/docs/how-to/ssl) — Set up HTTPS for your domains
