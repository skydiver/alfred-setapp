const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');
const setapp = require('./lib/setapp');
const apps = require('./data/apps.json');

alfredNotifier();

(async function() {

  for (const [key] of Object.entries(apps)) {
    const path = `/Users/Shared/Setapp/Apps/${apps[key].name}.app`;
    const is = await setapp.exists(path);
    apps[key].arg = is ? path : apps[key].link;
  }

  const items = alfy
    .inputMatches(apps, 'name')
    .map(x => ({
      title: x.name,
      subtitle: x.description,
      arg: x.arg,
      icon: {
        path: `./icons/${x.icon}`
      }
    }));

  alfy.output(items);

}());