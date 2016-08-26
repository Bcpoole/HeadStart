export class App {
  configureRouter(config, router) {
    config.title = 'Infomirror';
    config.map([
        { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Home'},
        { route: 'weather', name: 'weather', moduleId: 'weather', nav: true, title: 'weather' },
        { route: 'news', name: 'news', moduleId: 'news', nav: true, title: 'news' },
        { route: 'calendar', name: 'calendar', moduleId: 'calendar', nav: true, title: 'calendar' }
    ]);

    this.router = router;
  }
}
