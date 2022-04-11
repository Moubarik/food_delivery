import mongoose from 'mongoose';
import arrayValidator from 'mongoose-array-validator'


const restaurantsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'restaurant must have a title'],
        unique: true,
      }, 
      description: {
        type: String,
        required: [true, 'restaurant must have a descriptionl'],
      },
      restaurantImage: {
        type: Array,
        minItems: {
            value: 1,
            message: props => `length of \`${props.path}\` (${props.value.length}) is less than allowed!`
        },
        maxItems: {
            value: 8,
            message: props => `length of \`${props.path}\` (${props.value.length}) is more than allowed!`
        },
        required: [true, 'hotel must have a img'],
      }, 
      address: {
        type: String,
        required: [true, 'restaurant must have a adress'],
      },
      city:{
        type: String,
        required: [true, 'restaurant must have a city'],

      },
        created_at: {
            type: Date,
            default: Date.now(),
        },
    type: {
            type: String,
       },

})

restaurantsSchema.virtual("repas", {
  ref: "repas",
  localField: "_id",
  foreignField: "repas_id",
}),


restaurantsSchema.set("toObject", { virtuals: true })
restaurantsSchema.set("toJSON", { virtuals: true })

restaurantsSchema.plugin(arrayValidator);


export default restaurantsSchema;