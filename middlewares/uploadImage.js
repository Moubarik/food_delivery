import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {

        cb(null, './restaurants');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});


const upload = multer({

    storage: storage
});


const uploads = upload.array('restaurantImage', 8);








export default {
    uploads,
    
};