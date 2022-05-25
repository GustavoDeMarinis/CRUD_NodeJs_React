
## Front-End

First, go inside the folder /frontend and run:

```bash
npm start
```

## Back-End

Because both front and back are served locally, you need to open a chrome window without cors security protocols. 
For this you can run the following commands:

```bash
* google-chrome --disable-web-security --user-data-dir=".config/google-chrome"
```

Now you can simply use to start the server:
```bash
* npm run start:dev
```

You might also want to change the database.js url so that the app connects to a local or your own MongoDb Atlas



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

