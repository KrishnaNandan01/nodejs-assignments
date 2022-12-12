const mongooose = require('mongoose');
const blogSchema = new mongooose.Schema({
    topic :{type:String},
    description:{type:String},
    posted_at :{type:Date, required:true},
    posted_by:{type:String}
},{timestamps:true});
const Blog = mongooose.model('blogs', blogSchema);
module.exports = Blog;