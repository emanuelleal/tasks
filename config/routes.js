module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/singin', app.api.auth.singin)
    app.get('/tasks', app.api.tasks.getTasks)
}