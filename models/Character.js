import mongoose from 'mongoose';

/*
  STEP 1: Define the "shape" of a Character document in MongoDB.
  A schema is like a blueprint: it tells Mongo what fields exist + rules.
*/
const characterSchema = new mongoose.Schema(
  {
    // STEP 2: name is required text
    

    // STEP 3: type must be one of these options (dropdown-friendly)
    

    // STEP 4: trait must be one of these options (dropdown-friendly)
    
  },
  /*
    STEP 5: timestamps automatically adds:
    createdAt and updatedAt to every document
  */
  { timestamps: true }
);

// STEP 6: Create and export the model.
// A model is what we use to talk to the "characters" collection in MongoDB.
export const Character = mongoose.model('Character', characterSchema);
