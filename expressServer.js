const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','home.html')));
			this.app.get('/home', (req, res) => res.sendFile(path.join(__dirname,'html','home.html')));
			this.app.get('/home/:id', (req, res) => res.sendFile(path.join(__dirname,'html','home.html')));
			this.app.get('/addcontact', (req, res) => res.sendFile(path.join(__dirname,'html','addcontact.html')));
			this.app.get('/addcontact/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addcontact.html')));
			this.app.get('/contact', (req, res) => res.sendFile(path.join(__dirname,'html','contact.html')));
			this.app.get('/contact/:id', (req, res) => res.sendFile(path.join(__dirname,'html','contact.html')));
			this.app.get('/Page4', (req, res) => res.sendFile(path.join(__dirname,'html','Page4.html')));
			this.app.get('/Page4/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Page4.html')));
			this.app.get('/Page5', (req, res) => res.sendFile(path.join(__dirname,'html','Page5.html')));
			this.app.get('/Page5/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Page5.html')));
			this.app.get('/Page6', (req, res) => res.sendFile(path.join(__dirname,'html','Page6.html')));
			this.app.get('/Page6/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Page6.html')));
			this.app.get('/Page7', (req, res) => res.sendFile(path.join(__dirname,'html','Page7.html')));
			this.app.get('/Page7/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Page7.html')));
			this.app.get('/Page8', (req, res) => res.sendFile(path.join(__dirname,'html','Page8.html')));
			this.app.get('/Page8/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Page8.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;