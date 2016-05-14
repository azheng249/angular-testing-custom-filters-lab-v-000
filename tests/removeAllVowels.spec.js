describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should remove all vowels from a word', function(){
    var word = 'television';

    var result = $filter('removeAllVowels')(word);
    
    expect(result).toBe('tlvsn');
  });

  it('should ignore the cases when remove all vowels from a word', function(){
    var word = 'ApplicAtiOn';

    var result = $filter('removeAllVowels')(word);
    
    expect(result).toBe('pplctn');
  });

});
