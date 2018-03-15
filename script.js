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

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('h2', {}, this.props.title)
		);
	}
});


var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return (
			React.createElement('p', {}, this.props.desc)
		);
	}
})

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return ( 
			React.createElement('li', {},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDescription, {desc: this.props.movie.desc}),
				React.createElement('img', {src: this.props.movie.img})
				)
		)
	} 
})

var oneMovie = movies.map(function(movie) {
		return (
			React.createElement(Movie, {key:movie.id, movie: movie})
		)
})


var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, oneMovie)
	);

ReactDOM.render(element, document.getElementById('app'));