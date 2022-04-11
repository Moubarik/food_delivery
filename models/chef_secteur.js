import mongoose from 'mongoose';

const chef_secteurSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'chef_secteur must have a name'],
      unique: true,
    }, 
    email: {
      type: String,
      required: [true, 'chef_secteur must have a email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'chef_secteur must have a password'],
      minlength: 8,
      select: false,
    },
    secteur:{
        type: String,
        required: [true, 'ajouter un secteur'],
        unique: true, 
    },
    role: {
      type: String,
      required: false,
      default: 'chef_secteur',
      },
      created_at: {
          type: Date,
          default: Date.now(),
      },
      passwordChangedAt: {
          type: Date,
      },
      passwordResetToken: {
          type: String,
      },
      passwordResetExpires: {
          type: Date,
      },
  });

  

export default chef_secteurSchema;