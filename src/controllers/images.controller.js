import { getStorage, ref, uploadString, listAll } from "firebase/storage";
import { app } from "../firebase.js";
import fs from "fs";

const parent = "images";

const getImages = async (_req, res) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, parent);
    listAll(storageRef).then((data) => {
        const listFiles = [];
        data.items.forEach((item) => {
            listFiles.push(item._location.path_)
        });
        res.json(listFiles);
    });
}

const postImage = async (req, res) => {
    if (req.body && req.body.length > 0) {
        const body = JSON.parse(JSON.parse(req.body)).image;
        const fecha = new Date();
        const name = fecha.toDateString() + " | " + fecha.toTimeString() + ".jpg";
        const path = parent + "/" + name;

        const storage = getStorage(app);
        const storageRef = ref(storage, path);
        uploadString(storageRef, body, 'data_url').then((snapshot) => {
            res.send(snapshot.metadata.name);
        }).catch((error) => {
            res.send(error);
        });
    } else {
        res.status(500)
        res.send("No image data");
    }
}

export const imageController = { getImages, postImage };