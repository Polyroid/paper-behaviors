Package.describe({
    name: 'polyroid:paper-behaviors',
    version: '1.0.7',
    summary: 'Common behaviors across the paper elements',
    git: 'https://github.com/Polyroid/paper-behaviors.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:iron-behaviors@1.0.0',
        'polyroid:iron-checked-element-behavior@1.0.0',
        'polyroid:polymer@1.0.0'
    ], 'client');

    api.addAssets([
        'paper-button-behavior.html',
        'paper-checked-element-behavior.html',
        'paper-inky-focus-behavior.html',
        'paper-ripple-behavior.html'
    ], 'client');
});
