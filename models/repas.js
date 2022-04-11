import mongoose from 'mongoose';

const repasSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'reapas must have a name'],
      unique: true,
    }, 
    description: {
      type: String,
      required: [true, 'repas must have a email'],
      unique: true,
    },
    categorie_id:{
        type: mongoose.Schema.ObjectId,
        ref: 'repas',
    },
    repas_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'repas',
        required: [true],
    },
    price:{
        type: Number,
        required: [true, 'user must have a email'],
        unique: true,
    },
      created_at: {
          type: Date,
          default: Date.now(),
      }
    
  });


export default repasSchema;