describe('service to fetch the data', function(){
	var scope,
		service,
		$httpBackend;

	beforeEach(module('clientnewsApp'));
	beforeEach(inject(function(_dataService_, _$httpBackend_){
		service = _dataService_;
		$httpBackend = _$httpBackend_;
	}));

	describe('dataService', function(){
		it("should make an ajax call to /locations.json", function () {
		    $httpBackend
		    	.expectGET('../jsons/locations.json')
		    	.respond(404);
			var Status;
			var promise = service.async('../jsons/locations.json');
			promise.then(function(response){Status = response.status})
			promise.catch(function(response){Status = response.status});
		   $httpBackend.flush();
		   expect(Status).toEqual('404');
		});
	});
});