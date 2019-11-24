module.exports = (app) => {
    const comments = require('../comment.controller');

    // Create a new blog
    app.post('/blogs/:blogId/comments', comments.create);

    // Retrieve all comments
    app.get('/blogs/:blogId/comments', comments.findAll);

    // Retrieve a single blog with blogId
    app.get('/blogs/:blogId/comments/:commentId', comments.findOne);

    // Update a blog with blogId
    app.put('/blogs/:blogId/comments/:commentId', comments.update);

    // Delete a blog with blogId
    app.delete('/blogs/:blogId/comments/:commentId', comments.delete);
}