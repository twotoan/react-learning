const routes = {
    path: '/',
    component: App,
    indexRoute: {component: Home},
    childRoutes: [
        { path: 'about', component: About },
    ]
}