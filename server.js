const express = require('express');
const path    = require('path');

const server            = express();
const baseDirectoryPath = '.';
const baseDirectory     = express.static(baseDirectoryPath);
const indexFile         = path.resolve(`${baseDirectoryPath}/index.html`);
const serverPort        = process.env.PORT || 8000;
const serveStaticFile   = (_, response) => { response.sendFile(indexFile); }
const logServerMessage  = () => { console.log(`Express server listening on port ${serverPort}`) }

server.use(baseDirectory);
server.get('*', serveStaticFile);
server.listen(serverPort, logServerMessage);
