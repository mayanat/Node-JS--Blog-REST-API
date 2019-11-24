module.exports = (app) => {
    const blogs = require('../blog.controller');

    // Create a new blog
    app.post('/blogs', blogs.create);

    // Retrieve all blogs
    app.get('/blogs', blogs.findAll);

    // Retrieve a single blog with blogId
    app.get('/blogs/:blogId', blogs.findOne);

    // Update a blog with blogId
    app.put('/blogs/:blogId', blogs.update);

    // Delete a blog with blogId
    app.delete('/blogs/:blogId', blogs.delete);
}