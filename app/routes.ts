import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout('routes/layouts/homeLayout.tsx', [
        index("routes/home/index.tsx")
    ]),
    layout('routes/layouts/mainLayout.tsx', [
        route('about', './routes/about/index.tsx'),
        route('contact', './routes/contact/index.tsx'),
        route('projects', './routes/projects/index.tsx'),
        route('blog', './routes/blog/index.tsx')
    ])
] satisfies RouteConfig;
