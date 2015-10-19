var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
    	type: String,
    	require: true
    },
    content: {
    	type: String,
    	require: true
    },
    timestamp: {
      type: Number,
      require: true
    }
});

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;
