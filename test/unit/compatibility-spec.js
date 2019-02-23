const axios = require('axios');
const assert = require('assert');
const pmc = require('@lemonce3/pmc/src/index');

const PREFIX = '/api/test';

describe('compatibility test' , function () {
	describe('axios test', function () {
		it('method get test', function (done) {
			axios.get(PREFIX).then(({data}) => {
				assert.equal(data.content, 'success');

				done();
			});
		});
	
		it('method post test', function (done) {
			axios.post(PREFIX, {
				content: 'test post'
			}).then(({data}) => {
				assert.equal(data.content, 'success');
	
				done();
			});
		});
	
		it('method put test', function (done) {
			axios.put(PREFIX, {
				content: 'test put'
			}).then(({data}) => {
				assert.equal(data.content, 'success');
	
				done();
			});
		});
	
		it('method delete test', function (done) {
			axios.delete(PREFIX).then(({data}) => {
				assert.equal(data.content, 'success');
	
				done();
			});
		});
	});

	describe('method of array test', function () {
		const arr = [1, 2, 3, 5, 4];

		it('"forEach" test', function () {
			const testArr = [];

			arr.forEach(item => testArr.push(item));

			assert.deepEqual(testArr, [1, 2, 3, 5, 4]);
		});

		it('"map" test', function () {
			assert.deepEqual(arr.map(item => item * 2), [2, 4, 6, 10, 8]);
		});

		it('"filter" test', function () {
			assert.deepEqual(arr.filter(item => item < 3), [1, 2]);
		});

		it('"from" test', function () {
			assert.deepEqual(Array.from('test'), ['t', 'e', 's', 't']);
		});

		it('"of" test', function () {
			assert.deepEqual(Array.of(2, 3, 4), [2, 3, 4]);
		});

		it('"find" test', function () {
			const arr = [1, 2, 3, 5, 4];

			assert.equal(arr.find((item) => item > 3), 5);
		});

		it('"findIndex" test', function () {
			const arr = [1, 2, 3, 5, 4];

			assert.equal(arr.findIndex((item) => item > 3), 3);
		});

		it('"indexOf" test', function () {
			const arr = [1, 2, 3, 5, 4];

			assert.equal(arr.indexOf(1), 0);
		});

		it('"fill" test', function () {
			assert.deepEqual(arr.fill(0, 2, 4), [1, 2, 0, 0, 4]);
		});

		it('"entries" test', function () {
			const arr = [1, 2, 3, 5, 4];

			const iterator = arr.entries();

			assert.deepEqual(iterator.next().value, [0, 1]);
		});

		it('"keys" test', function () {
			const arr = ['value1'];

			const iterator = arr.keys();

			for (let index of iterator) {
				assert.equal(index, 0);
			}
		});

		it('"values" test', function () {
			const arr = ['value1'];

			const iterator = arr.values();

			for (let index of iterator) {
				assert.equal(index, 'value1');
			}
		});

		it('"includes" test', function () {
			const arr = [1, 2, 3, 5, 4];

			assert.equal(arr.includes(1), true);
		});

		it('"isArray" test', function () {
			assert.equal(Array.isArray(arr), true);
		});

		it('"sort" test', function () {
			const arr = [1, 2, 3, 5, 4];

			assert.deepEqual(arr.sort(), [1, 2, 3, 4, 5]);
		});

		it('"lastIndexOf" test', function () {
			const arr = [1, 2, 3, 5, 4];

			assert.equal(arr.lastIndexOf(3), 2);
		});

		it('"reduce" test', function () {
			const arr = [1, 2, 3, 5, 4];

			assert.equal(arr.reduce((accumulator, currentValue) => accumulator + currentValue), 15);
		});

		it('"every" test', function () {
			const arr = [1, 2, 3, 5, 4];

			assert.equal(arr.every((ele) => ele < 10), true);
		});

		it('"some" test', function () {
			const arr = [1, 2, 3, 5, 4];

			assert.equal(arr.some((ele) => ele > 2), true);
		});
	});

	describe('pmc test', function () {
		const channelRegistry = pmc.channelRegistry;

		it('method "on" test', function () {
			const test = function () {
				return {
					result: 'success'
				};
			};

			on('test', test);

			assert.deepEqual(channelRegistry, {
				test
			});
		});

		it('method "request" test', function (done) {
			request(window, 'test').then(function (data) {
				assert.deepEqual(data, {
					result: 'success'
				});

				done();
			});
		});

		it('method "off" test', function () {
			off('test');

			assert.deepEqual(channelRegistry, {});
		});
	});
});
