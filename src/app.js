import express from "express";
import dotenv from "dotenv";
import path from "path";

import UserRoutes from "./routes/UserRoutes.js";
import TokenRoutes from "./routes/TokenRoutes.js";
import FileRoutes from "./routes/FileRoutes.js";
import './database/index.js';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { fileURLToPath } from 'url';



class app {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
        this.app.use(express.static(path.resolve(__dirname, "..", "uploads")));

}

    routes() {
        this.app.use("/users", UserRoutes);
        this.app.use("/token", TokenRoutes);
        this.app.use("/files", FileRoutes);

    }
}

export default new app().app;