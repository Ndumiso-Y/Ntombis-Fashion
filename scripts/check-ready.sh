#!/usr/bin/env bash
# Run before merging to main: fails if any {{PLACEHOLDER}} or product photo is still missing.
cd "$(dirname "$0")/.." || exit 1
status=0
if grep -rnoE '\{\{[A-Z_]+\}\}' --include='*.html' --include='*.txt' --include='*.xml' . ; then
  echo "^ placeholders still to fill (see SITE-DETAILS.md)"; status=1
fi
for f in $(grep -oE 'images/[a-z0-9/_-]+\.jpg' index.html | sort -u); do
  [ -f "$f" ] || { echo "missing image: $f"; status=1; }
done
[ $status -eq 0 ] && echo "Ready to go live."
exit $status
