---
title: How to back up and restore
description: Protect your data with automatic and manual backups.
---

Hostisan backs up everything: websites, databases, email, and settings. Backups are compressed archives you can download or restore from.

## Create a backup

1. Click your username in the top right
2. Go to **Backups**
3. Click **Create Backup**

The backup runs in the background. Refresh the page to see it appear in the list.

## Download a backup

1. Go to **Backups**
2. Find the backup you want
3. Click the download icon

You'll get a `.tar` file containing all your data.

## Restore from a backup

1. Go to **Backups**
2. Find the backup to restore
3. Click the restore icon
4. Choose what to restore:
   - **Web** — websites and files
   - **Mail** — email accounts and messages
   - **Databases** — MySQL/PostgreSQL data
   - **DNS** — zone records
   - **Cron** — scheduled tasks
5. Click **Restore**

You can restore everything or just specific parts. Restoring overwrites current data with the backup version.

## Schedule automatic backups

1. Go to **Server** → **Configure**
2. Find the **Backup** section
3. Set how often to back up (daily is recommended)
4. Set how many backups to keep
5. Save

Hostisan will create backups automatically and delete old ones when the limit is reached.

## Store backups remotely

For disaster recovery, store backups on another server:

1. Go to **Server** → **Configure** → **Backup**
2. Under **Remote Backup**, choose SFTP or FTP
3. Enter the remote server details
4. Save

Now backups upload to the remote server after they're created.

## What's in a backup

| Part | Contents |
|------|----------|
| Web | Your website files, configs, SSL certificates |
| Mail | Mailboxes and all messages |
| Databases | Full database dumps |
| DNS | Zone files and records |
| Cron | Your scheduled tasks |

## Troubleshooting

**Backup takes too long**

Large mailboxes and databases take time. Check progress in the system logs.

**Not enough disk space**

Backups need roughly 2x the space of your data (original + compressed archive). Free up space or reduce how many backups you keep.

**Restore fails**

Usually a conflict with existing data. Try deleting the conflicting item first, then restore again.

---

<details>
<summary>CLI alternative</summary>

Create a backup:
```bash
v-backup-user USERNAME
```

Restore everything:
```bash
v-restore-user USERNAME backup.tar
```

Restore only databases:
```bash
v-restore-user USERNAME backup.tar no no no yes no
```

Arguments: WEB DNS MAIL DB CRON (yes/no for each)
</details>
