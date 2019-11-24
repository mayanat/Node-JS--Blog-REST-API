const Blog = require('./models/blog.model');

// Create and Save a new blog
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Blog content can not be empty"
        });
    }

    // Create a blog
    const blog = new Blog({
        title: req.body.title || "Untitled Blog", 
        content: req.body.content,
        autor:req.body.autor ,
        autorPic:req.body.autorPic,
        contentPic:req.body.contentPic,
        commats:[],
        likes:0
    });

    // Save blog in the database
    blog.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the blog."
        });
    });
};

// Retrieve and return all blogs from the database.
exports.findAll = (req, res) => {
    Blog.find()
    .then(blogs => {
        res.send(blogs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving blogs."
        });
    });
};

// Find a single blog with a blogId
exports.findOne = (req, res) => {
    Blog.findById(req.params.blogId)
    .then(blog => {
        if(!blog) {
            return res.status(404).send({
                message: "blog not found with id " + req.params.blogId
            });            
        }
        res.send(blog);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "blog not found with id " + req.params.blogId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving blog with id " + req.params.blogId
        });
    });
};

// Update a blog identified by the blogId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "blog content can not be empty"
        });
    }

    // Find blog and update it with the request body
    Blog.findByIdAndUpdate(req.params.blogId, {
        title: req.body.title || "Untitled Blog", 
        content: req.body.content,
        autor:req.body.autor ,
        autorPic:req.body.autorPic,
        content:req.body.content ,
        contentPic:req.body.contentPic
    },
    {new: true})
    .then(blog => {
        if(!blog) {
            return res.status(404).send({
                message: "blog not found with id " + req.params.blogId
            });
        }
        res.send(blog);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "blog not found with id " + req.params.blogId
            });                
        }
        return res.status(500).send({
            message: "Error updating blog with id " + req.params.blogId
        });
    });
};

// Delete a blog with the specified blogId in the request
exports.delete = (req, res) => {
    Blog.findByIdAndRemove(req.params.blogId)
    .then(blog => {
        if(!blog) {
            return res.status(404).send({
                message: "blog not found with id " + req.params.blogId
            });
        }
        res.send({message: "blog deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "blog not found with id " + req.params.blogId
            });                
        }
        return res.status(500).send({
            message: "Could not delete blog with id " + req.params.blogId
        });
    });
};