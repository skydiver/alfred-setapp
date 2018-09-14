const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');
const apps = require('./data/apps.json');

alfredNotifier();

const items = alfy
  .inputMatches(apps, 'name')
  .map(x => ({
    title: x.name,
    subtitle: x.description,
    arg: x.link,
    icon: {
      path: `./icons/${x.icon}`
    }
  }));

alfy.output(items);