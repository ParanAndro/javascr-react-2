var movies = [
	{
		id: 1,
		title: 'Żądło',
		desc: 'Film o oszustach',
		img: './img/Zadlo.png'
	},
	{
		id: 2,
		title: 'Gwiezdne wojny',
		desc: 'Film o walce dobra ze złem',
		img: './img/Star_wars.png'
	},
	{
		id: 3,
		title: 'Lśnienie',
		desc: 'Szaleństwo pisarza w opuszczonym hotelu',
		img: './img/Lsnienie.png'
	},
	{
		id: 4,
		title: 'Django',
		desc: 'Czarny rewolwerowiec wśród właścicieli niewolników',
		img: './img/Django.png'
	},
	{
		id: 5,
		title: 'Pszczółka Maja',
		desc: 'Opowieść o leniwej pszczole, która uciekła z ula',
		img: './img/Pszczolka_Maja.png'
	},
];
var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.img})
		); 
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

var Move = React.createClass({

	render: function {
		return

	} 
});


var MovieTitle = React.createClass({

	render: function {

		return

	}
});


var MovieDescription = React.createClass({

	render: function {

		return
	}
})

var MoviesList = React.createClass({

	render: function {

		return
		
	}
})


ReactDOM.render(element, document.getElementById('app'));