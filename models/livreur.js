import mongoose from 'mongoose';

const livreurSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'livreur must have a name'],
      unique: true,
    }, 
    email: {
      type: String,
      required: [true, 'livreur must have a email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'livreur must have a password'],
      minlength: 8,
      select: false,
    },
    role: {
      type: String,
      required: false,
      default: 'livreur',
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

  

export default livreurSchema;