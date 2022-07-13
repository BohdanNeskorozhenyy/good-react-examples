// Core
import express  from 'express';
import fs from 'fs';
import path from 'path';
// import { execSync } from "child_process";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { matchPath } from 'react-router-dom';

// Components
import { App } from '../src/components/App';

// Other
import { routes } from '../src/configs/routes';

const app = express();

const distPath = `${path.resolve()}/src/examples/ssr-express/6/dist`;

// execSync(`cd ${path.resolve()}/src/examples/ssr-express/6 && NODE_ENV=production webpack build -c webpack.config.js`);

app.get(/\.(js|css|map|ico|png|json)$/, express.static(path.resolve(__dirname, distPath)));

app.use('*', async (req, res) => {
    const matchRoute = Object.values(routes).find(({ path }) => {
        return matchPath(req.originalUrl, path);
    });

    let componentData = null;

    if(typeof matchRoute?.component?.fetchData === 'function') {
        componentData = await matchRoute.component.fetchData();

        matchRoute.component.data = componentData;
    }

    let indexHTML = fs.readFileSync(path.resolve(__dirname, `${distPath}/index.html`), {
        encoding: 'utf8',
    });

    const appHTML = ReactDOMServer.renderToString(
        <StaticRouter location={ req.originalUrl } context={componentData}>
            <App />
        </StaticRouter>
    );

    indexHTML = indexHTML.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`);

    indexHTML = indexHTML.replace(
        'var initial_state = null;',
        `var initial_state = ${JSON.stringify(componentData)};`
    );

    res.contentType('text/html');
    res.status(200);

    return res.send(indexHTML);
});

app.listen('4000', () => {
    console.log('Express server started at http://localhost:4000');
});
