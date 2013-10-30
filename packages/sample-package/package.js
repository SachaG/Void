Package.describe("Sample package");

Package.on_use(function (api) {
  api.add_files(['sample.js'], ['client', 'server']);
  if(api.export)
    api.export('sampleFunction');
});