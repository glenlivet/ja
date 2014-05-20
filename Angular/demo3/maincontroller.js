
app.controller('MainController', function($scope){

	$scope.selectedPerson = 0;
	$scope.selectedGenre = null;
	$scope.people = {
		Leon: {
			name: 'Leon',
			music: [
				'Rock',
				'Metal',
				'Dubstep',
				'Electro'
			]
		},
		Chris: {
			name: 'Chris',
			music: [
				'Indie',
				'Drumstep',
				'Dubstep',
				'Electro'
			]
		},
		Harry: {
			name: 'Harry',
			music: [
				'Rock',
				'Metal',
				'Thrash Metal',
				'Heavy Metal'
			]
		},
		Allyce: {
			name: 'Allyce',
			music: [
				'Pop',
				'RnB',
				'Hip Hop'
			]
		}
	};
	
	$scope.peopleArr = [
		{
			id: 0,
			name: 'Leon',
			music: [
				'Rock',
				'Metal',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 1,
			name: 'Chris',
			music: [
				'Indie',
				'Drumstep',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 2,
			name: 'Harry',
			music: [
				'Rock',
				'Metal',
				'Thrash Metal',
				'Heavy Metal'
			]
		},
		{
			id: 3,
			name: 'Allyce',
			music: [
				'Pop',
				'RnB',
				'Hip Hop'
			]
		}
	];
		
});


app.controller('ArrController', function($scope){

	$scope.selectedPerson = 0;
	$scope.selectedGenre = null;
	$scope.people = [
		{
			id: 0,
			name: 'Leon',
			music: [
				'Rock',
				'Metal',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 1,
			name: 'Chris',
			music: [
				'Indie',
				'Drumstep',
				'Dubstep',
				'Electro'
			]
		},
		{
			id: 2,
			name: 'Harry',
			music: [
				'Rock',
				'Metal',
				'Thrash Metal',
				'Heavy Metal'
			]
		},
		{
			id: 3,
			name: 'Allyce',
			music: [
				'Pop',
				'RnB',
				'Hip Hop'
			]
		}
	];
		
});