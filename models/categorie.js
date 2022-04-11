import mongoose from 'mongoose';


const categorieSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'user must have a name'],
      unique: true,
    }, 
    description: {
      type: String,
      required: [true, 'user must have a email'],
      unique: true,
    },
      created_at: {
          type: Date,
          default: Date.now(),
      }
    
  });

categorieSchema.virtual('repas', {
    ref: 'Repas',
    localField: '_id',
    foreignField: 'categorie_id',
    justOne: true
});

categorieSchema.set('toObject', { virtuals: true });
categorieSchema.set('toJSON', { virtuals: true });

export default categorieSchema;