const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const port = 3030;
const routes = require('./routes');

app.prepare()
    .then(() => {
        const server = express()
        console.log(routes.arrayRoutes());
        routes.arrayRoutes().map(item => {
            server.get(item.path, (req, res) => {
                return app.render(req, res, item.page, req.query)
            })
        });
        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })