require('mocha/mocha.css');
require('mocha/mocha');

mocha.setup('bdd');

window.addEventListener('load', function () {
    mocha.run();
});