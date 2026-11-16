---
title: CLI commands
description: Complete reference for Hostisan command-line tools.
---

Everything you can do in the panel, you can also do from the command line. The CLI is useful for automation, scripting, and bulk operations. For everyday tasks, the panel is easier.

All commands start with `v-` and are available system-wide. Commands work with both `hostisan` and `hestia` in the name (e.g., `v-update-sys-hostisan-all` and `v-update-sys-hestia-all` do the same thing).

Run any command with `--help` to see its options.

## User commands

### v-add-user
Create a new user account.

```bash
v-add-user USERNAME PASSWORD EMAIL [PACKAGE] [NAME]
```

| Argument | Description |
|----------|-------------|
| USERNAME | Login name (alphanumeric, lowercase) |
| PASSWORD | Account password |
| EMAIL | Contact email address |
| PACKAGE | Hosting package to assign (default: default) |
| NAME | Display name (optional) |

### v-delete-user
Remove a user account and all their data.

```bash
v-delete-user USERNAME
```

### v-list-users
Show all user accounts.

```bash
v-list-users [FORMAT]
```

Formats: `plain`, `csv`, `json`. Default is `plain`.

### v-change-user-password
Update a user's password.

```bash
v-change-user-password USERNAME PASSWORD
```

## Web commands

### v-add-web-domain
Add a website to a user account.

```bash
v-add-web-domain USER DOMAIN [IP] [ALIASES] [PROXY_EXT]
```

| Argument | Description |
|----------|-------------|
| USER | Account username |
| DOMAIN | Domain name |
| IP | IP address (default: server's main IP) |
| ALIASES | Comma-separated list of aliases |
| PROXY_EXT | File extensions to proxy to Apache |

### v-delete-web-domain
Remove a website.

```bash
v-delete-web-domain USER DOMAIN
```

### v-list-web-domains
Show all websites for a user.

```bash
v-list-web-domains USER [FORMAT]
```

### v-add-letsencrypt-domain
Request a Let's Encrypt certificate.

```bash
v-add-letsencrypt-domain USER DOMAIN [ALIASES]
```

### v-add-web-domain-ssl-force
Enable automatic HTTP to HTTPS redirect.

```bash
v-add-web-domain-ssl-force USER DOMAIN
```

## Database commands

### v-add-database
Create a database.

```bash
v-add-database USER DATABASE DBUSER DBPASS [TYPE] [HOST] [CHARSET]
```

| Argument | Description |
|----------|-------------|
| USER | Account username |
| DATABASE | Database name (prefixed with username_) |
| DBUSER | Database user (prefixed with username_) |
| DBPASS | Database password |
| TYPE | mysql or pgsql (default: mysql) |

### v-delete-database
Remove a database.

```bash
v-delete-database USER DATABASE
```

### v-list-databases
Show all databases for a user.

```bash
v-list-databases USER [FORMAT]
```

## Mail commands

### v-add-mail-domain
Enable email for a domain.

```bash
v-add-mail-domain USER DOMAIN
```

### v-add-mail-account
Create a mailbox.

```bash
v-add-mail-account USER DOMAIN ACCOUNT PASSWORD [QUOTA]
```

| Argument | Description |
|----------|-------------|
| USER | Account username |
| DOMAIN | Mail domain |
| ACCOUNT | Mailbox name (before the @) |
| PASSWORD | Mailbox password |
| QUOTA | Storage quota in MB (default: unlimited) |

### v-delete-mail-account
Remove a mailbox.

```bash
v-delete-mail-account USER DOMAIN ACCOUNT
```

### v-list-mail-accounts
Show all mailboxes for a domain.

```bash
v-list-mail-accounts USER DOMAIN [FORMAT]
```

## DNS commands

### v-add-dns-domain
Create a DNS zone.

```bash
v-add-dns-domain USER DOMAIN IP
```

### v-add-dns-record
Add a DNS record.

```bash
v-add-dns-record USER DOMAIN RECORD TYPE VALUE [PRIORITY] [TTL]
```

| Type | Example value |
|------|---------------|
| A | 192.0.2.1 |
| AAAA | 2001:db8::1 |
| CNAME | target.example.com |
| MX | mail.example.com |
| TXT | "v=spf1 mx -all" |

### v-delete-dns-record
Remove a DNS record.

```bash
v-delete-dns-record USER DOMAIN ID
```

### v-list-dns-records
Show all records for a domain.

```bash
v-list-dns-records USER DOMAIN [FORMAT]
```

## Backup commands

### v-backup-user
Create a full backup of a user account.

```bash
v-backup-user USER
```

Backups are stored in `/backup/`.

### v-restore-user
Restore a user from backup.

```bash
v-restore-user USER BACKUP [WEB] [DNS] [MAIL] [DB] [CRON]
```

Set each option to `yes` or `no` to restore specific components.

### v-list-user-backups
Show available backups.

```bash
v-list-user-backups USER [FORMAT]
```

## System commands

### v-list-sys-info
Show server information.

```bash
v-list-sys-info [FORMAT]
```

### v-update-sys-hostisan-all
Check for and install updates.

```bash
v-update-sys-hostisan-all
```

Also available as `v-update-sys-hestia-all` (same command).

### v-add-letsencrypt-host
Request a certificate for the panel itself.

```bash
v-add-letsencrypt-host
```

### v-list-firewall
Show firewall rules.

```bash
v-list-firewall [FORMAT]
```

### v-add-firewall-rule
Add a firewall rule.

```bash
v-add-firewall-rule ACTION IP PORT PROTOCOL COMMENT
```

| Argument | Description |
|----------|-------------|
| ACTION | ACCEPT or DROP |
| IP | Source IP or CIDR |
| PORT | Port number |
| PROTOCOL | TCP or UDP |
| COMMENT | Rule description |
