import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
import * as path from 'path'
import {fileURLToPath} from 'url'
const filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filename);

//middlewares

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());


const MIME_TYPES = {
  'upload/jpg': 'jpg',
  'upload/jpeg': 'jpg',
  'upload/png': 'png'
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload")
  },
  filename: function (req, file, cb) {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    cb(null, name + Date.now() + '.' + extension);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});


app.use('/upload',express.static(path.join(__dirname,'upload')));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);


app.listen (4200, () =>{
    console.log ("API WORKING!")

})