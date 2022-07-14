import { getStorage, ref, uploadString, getDownloadURL, listAll } from "firebase/storage";
import { app } from "../firebase.js";

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

const downloadImage = async (req, res) => {
    console.log(req.params);
    const storage = getStorage();
    const storageRef = ref(storage, req.params.ruta);
    getDownloadURL(storageRef)
        .then((url) => {
            res.send(url);
        })
        .catch((error) => {
            res.send(error);
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