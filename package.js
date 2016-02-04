Package.describe({
  name: 'nerdmed:camanjs',
  summary: 'CamanJs - canvas manipulation in Javascript',
  version: '0.0.1',
  git: 'https://github.com/pacozaa/meteor-camanjs.git'
});


Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('caman.full.js');
});
