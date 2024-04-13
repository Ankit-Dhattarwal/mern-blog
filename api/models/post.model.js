import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: 'String',
      default: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2d78d141-1f64-44c8-976b-7321284e5147/dfjhhzd-4dd543ec-14f8-402a-9ca5-1c92d29de5b0.png',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    }
  }, {timestamps: true}
);
 
const Post = mongoose.model('Post', postSchema);

export default Post;