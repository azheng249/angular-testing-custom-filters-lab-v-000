describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter people by their favorite food', function(){
    var people = [{
      name: 'David',
      favoriteFood: 'fish'
    }, {
      name: 'Ashley',
      favoriteFood: 'chicken'
    }];

    var results = $filter('favoriteFood')(people, 'fish');

    expect(results.length).toBe(1);
    expect(results[0].favoriteFood).toBe('fish');
  });

});
