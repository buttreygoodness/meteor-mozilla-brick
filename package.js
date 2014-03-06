Package.describe({
  summary: "Allows use of Mozilla Brick components in Meteor applications."
});

Package.on_use(function (api, where) {
  api.add_files([
    'brick.min.js',
    'brick.min.css'
    ], 
    'client'
  );
});
