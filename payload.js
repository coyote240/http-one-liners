const fs = require('fs');
const https = require('https');

const sa_token = fs.readFileSync('/var/run/secrets/kubernetes.io/serviceaccount/token');

let result = '';
let req = https.get('https://$KUBERNETES_SERVICE_HOST/api/v1/namespaces', {
  headers: {
    Authorization: `Bearer ${sa_token}`
  }
}, res => {
  res.on('data', d => {
    result += d;
  });
}).on('error', e => {
  console.log(e);
});

req.end();

process.stdout.write(result);
