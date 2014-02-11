node-ssha256
============

Node Module to create base64 encoded ssha256 hashes.
Use it e.g. to check or create Dovecot mailbox credentials
![Build Status][1]

Installation
------------

```sh
npm install node-ssha256
```

Usage
-----
**In node.js**

Create a base64 encoded hash
```javascript
var ssha256 = require('node-ssha256');
message = "hallo"
hash = ssha256.create(message);
```

Check if message matches hash
```javascript
var ssha256 = require('node-ssha256');
message = "hallo"
hash = "{SSHA256}WosKbpN2dI/q4/wtG5AW82jFPeFNqXGbSfmd/ooJrRpiYWVh"
if(ssha256.check(hash, message)) {
    // message matched
} else {
    // not matching
}
```

**Command line bin**

```sh
ssha256_create "message"
ssha256_check "hash" "message"
```
[1]: http://ts3s.de:8080/buildStatus/icon?job=node-ssha256
