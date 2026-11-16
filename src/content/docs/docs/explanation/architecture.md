---
title: Architecture overview
description: How Hostisan is built and why it works the way it does.
---

Hostisan is a web hosting control panel. It manages the services that make web hosting work: web servers, databases, email, DNS, and the firewall. This page explains how those pieces fit together.

## The big picture

When you install Hostisan, it sets up a stack of open-source software and wires it all together. The panel itself is a thin layer on top. Most of the heavy lifting happens in well-tested, widely-deployed software that's been running production servers for decades.

The panel gives you a web interface and a CLI. Both do the same things. The web interface is easier for common tasks. The CLI is faster for automation and bulk operations.

## Web server architecture

Hostisan uses two web servers: Nginx in front, Apache behind.

**Nginx** handles all incoming requests. It serves static files directly (HTML, CSS, JS, images). For anything dynamic, it passes the request to Apache.

**Apache** runs PHP through PHP-FPM. Each site can have its own PHP version. Apache handles `.htaccess` files, which many PHP applications depend on.

This split gives you the best of both worlds. Nginx is fast at serving files and handling many concurrent connections. Apache is flexible and compatible with the applications people actually use.

The configuration for each site lives in `/home/USER/conf/web/DOMAIN/`. When you add or change a domain through the panel, Hostisan writes the Nginx and Apache configs and reloads the servers.

## Database architecture

Hostisan supports MariaDB (the default) and PostgreSQL.

**MariaDB** is a drop-in replacement for MySQL. It's what most PHP applications expect. phpMyAdmin is installed for browser-based management.

**PostgreSQL** is available if you need it. Some applications perform better with it, or require it.

Database users are isolated. Each user's databases are prefixed with their username (`user_dbname`), and they can only access their own data. The panel enforces this at the MySQL/PostgreSQL permission level.

## Email architecture

Email involves several components working together.

**Exim** is the mail transfer agent. It sends and receives messages over SMTP.

**Dovecot** is the mail delivery agent. It stores messages and serves them over IMAP and POP3.

**Roundcube** is the webmail interface. Users can read email in a browser without a mail client.

**SpamAssassin** scores incoming messages for spam. Messages above the threshold go to the junk folder.

**ClamAV** scans attachments for malware (when enabled).

Email configuration is more complex than web hosting because it involves multiple domains, multiple protocols, and spam filtering. The panel hides most of this complexity. You add a mail domain, create mailboxes, and it works.

DKIM signing is enabled by default. The panel generates keys and shows you the DNS records to add.

## DNS architecture

**BIND** provides DNS service. When you enable DNS for a domain, Hostisan creates a zone file with sensible defaults: A records pointing to your server, MX records for email, SPF and DKIM records.

You can manage DNS through the panel or externally. If you use Cloudflare or another DNS provider, just point your domain to the server's IP there instead of using Hostisan's DNS.

## Security architecture

Security happens at multiple layers.

**Firewall**: iptables controls which ports are open. By default, only essential ports are exposed (22, 80, 443, 8083, and email ports). You can add rules through the panel.

**Fail2Ban** monitors logs for failed login attempts. After too many failures from one IP, it blocks that IP temporarily. This protects against brute-force attacks on SSH, the panel, email, and FTP.

**User isolation**: Each user runs their websites under their own system account. One user's sites can't read another user's files. PHP runs as the user who owns the site, not as a shared `www-data` user.

**Panel access**: The panel runs on port 8083 over HTTPS. You can restrict access to specific IPs through the firewall.

## File structure

Hostisan follows a predictable layout.

| Path | Purpose |
|------|---------|
| `/usr/local/hostisan/` | Panel code and binaries |
| `/usr/local/hostisan/bin/` | CLI commands (the `v-*` scripts) |
| `/usr/local/hostisan/data/` | Panel data and user configurations |
| `/usr/local/hostisan/conf/` | Panel configuration |
| `/home/USER/` | User home directories |
| `/home/USER/web/DOMAIN/` | Website document roots |
| `/home/USER/mail/DOMAIN/` | Mailboxes |
| `/home/USER/conf/` | Per-user service configs |
| `/backup/` | Backup archives |

Each user's data lives entirely under `/home/USER/`. Backups capture this directory plus the panel's user data.

## Configuration flow

When you make a change through the panel or CLI, Hostisan:

1. Validates the input
2. Updates its internal data files
3. Regenerates the relevant service configs
4. Reloads the affected services

The panel doesn't directly edit Apache or Nginx configs. It writes to template files, regenerates from those, and reloads. This means manual edits to service configs get overwritten. If you need custom configuration, use the include files that Hostisan provides for each domain.

## Updates and upgrades

Hostisan packages are distributed as `.deb` files. Updates come through the standard apt package manager.

When an update installs, the upgrade scripts run. They handle config migrations, add new default settings, and restart services as needed.

The panel checks for updates periodically and shows a notification when one is available. You can update from the panel UI or by running `v-update-sys-hostisan-all`.
