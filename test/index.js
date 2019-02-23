require('mocha/mocha.css');
require('mocha/mocha');

mocha.setup('bdd');

require('./unit');

window.addEventListener('load', function () {
    mocha.run();
});