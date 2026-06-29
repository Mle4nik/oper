import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://oper-xi.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());

app.set('trust proxy', 1);

app.use(session({
  // eslint-disable-next-line no-undef
  secret: process.env.SESSION_SECRET || "TEMP_SECRET",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: true
  }
}));

app.post('/api/login', (req, res) => {
  const { password } = req.body;

  // eslint-disable-next-line no-undef
  if (password !== process.env.ACCESS_CODE) {
    return res.status(401).json({
      success: false
    });
  }

  req.session.authorized = true;

  res.json({
    success: true
  });
});

app.get('/api/me', (req, res) => {

  res.json({
    authorized: !!req.session.authorized
  });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({
      success: true
    });
  });
});


function getTree(dir, relative = "") {

  const items = fs.readdirSync(dir);

  return items.map(item => {

    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      return {
        name: item,
        type: "folder",
        children: getTree(
          fullPath,
          path.join(relative, item).replaceAll("\\", "/")
        )
      };
    }

    return {
      name: item,
      type: "file",
      path: path.join(relative, item).replaceAll("\\", "/")
    };
  });
}


app.get('/api/templates', (req, res) => {

  if (!req.session.authorized) {
    return res.sendStatus(403);
  }

  const tree = getTree(
        path.join(__dirname, "templates")
    );

  res.json(tree);

});


app.get('/api/download', (req, res) => {

    const filePath = path.join(
        __dirname,
        "templates",
        req.query.path
    );

    res.download(filePath);

});


// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});


// app.listen(3001, () => {
//   console.log('Server started');
// });