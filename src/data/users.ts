const users = [
	  {
	    id: '1',
	    firstName: 'Admin',
	    lastName: 'User',
	    email: 'your@email.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/thedjpetersen/128.jpg',
	    friends: [ '19', '22', '30' ]
	  },
	  {
	    id: '2',
	    firstName: 'Vernon',
	    lastName: 'White',
	    email: 'Rupert.Zemlak@hotmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/romanbulah/128.jpg',
	    friends: [
	      '3',  '4',  '5',  '7',
	      '8',  '12', '13', '14',
	      '17', '20', '21', '28',
	      '29'
	    ]
	  },
	  {
	    id: '3',
	    firstName: 'Brown',
	    lastName: 'Walsh',
	    email: 'Daron_Watsica@yahoo.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nerdgr8/128.jpg',
	    friends: [
	      '2',  '5',  '10',
	      '13', '18', '19',
	      '26'
	    ]
	  },
	  {
	    id: '4',
	    firstName: 'Paul',
	    lastName: 'Anderson',
	    email: 'Icie_Feest30@gmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nbirckel/128.jpg',
	    friends: [
	      '2',  '6',  '12',
	      '14', '17', '18',
	      '19', '20', '22',
	      '25', '29'
	    ]
	  },
	  {
	    id: '5',
	    firstName: 'Pierre',
	    lastName: 'Jenkins',
	    email: 'Florencio49@gmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ccinojasso1/128.jpg',
	    friends: [ '1', '2', '12', '16', '30' ]
	  },
	  {
	    id: '6',
	    firstName: 'Tiana',
	    lastName: 'Hintz',
	    email: 'Trenton85@yahoo.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/AM_Kn2/128.jpg',
	    friends: [ '19', '30' ]
	  },
	  {
	    id: '7',
	    firstName: 'Jackie',
	    lastName: 'Hintz',
	    email: 'Mathias_Lakin@gmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/antjanus/128.jpg',
	    friends: [ '2', '4', '6', '20' ]
	  },
	  {
	    id: '8',
	    firstName: 'Theodore',
	    lastName: 'Schaden',
	    email: 'Dandre15@hotmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/emmeffess/128.jpg',
	    friends: [ '29' ]
	  },
	  {
	    id: '9',
	    firstName: 'Sonia',
	    lastName: 'Anderson',
	    email: 'Joelle_Schaden72@yahoo.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/steynviljoen/128.jpg',
	    friends: [
	      '2',  '4',  '14',
	      '16', '17', '18',
	      '20', '21', '23',
	      '26'
	    ]
	  },
	  {
	    id: '10',
	    firstName: 'Carlie',
	    lastName: 'Hoppe',
	    email: 'Mabel91@yahoo.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/alterchuca/128.jpg',
	    friends: [ '6', '20', '27', '29', '30' ]
	  },
	  {
	    id: '11',
	    firstName: 'Billy',
	    lastName: 'Kutch',
	    email: 'Dessie_Zboncak8@hotmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/enricocicconi/128.jpg',
	    friends: [
	      '8',  '10', '13',
	      '15', '16', '23',
	      '24', '27', '30'
	    ]
	  },
	  {
	    id: '12',
	    firstName: 'Olaf',
	    lastName: 'Schiller',
	    email: 'Francis27@gmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/oaktreemedia/128.jpg',
	    friends: [
	      '1',  '3',  '7',
	      '15', '17', '19',
	      '22', '23', '25',
	      '28'
	    ]
	  },
	  {
	    id: '13',
	    firstName: 'Mable',
	    lastName: 'Robel',
	    email: 'Rylee.Mertz22@gmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/maiklam/128.jpg',
	    friends: [
	      '5',  '7',  '11',
	      '14', '15', '16',
	      '19', '24', '25'
	    ]
	  },
	  {
	    id: '14',
	    firstName: 'Melody',
	    lastName: 'Schuppe',
	    email: 'Levi.Collier@yahoo.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/arindam_/128.jpg',
	    friends: [
	      '1',  '5',  '7',  '9',
	      '10', '11', '12', '16',
	      '21', '23', '24', '25',
	      '29'
	    ]
	  },
	  {
	    id: '15',
	    firstName: 'Cathryn',
	    lastName: 'Williamson',
	    email: 'Ethel_Tremblay@gmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/boxmodel/128.jpg',
	    friends: [ '5', '7', '21', '25' ]
	  },
	  {
	    id: '16',
	    firstName: 'Fred',
	    lastName: 'Johnston',
	    email: 'Verdie_Macejkovic@hotmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/_ragzor/128.jpg',
	    friends: [
	      '1',  '3',  '5',
	      '7',  '14', '15',
	      '19', '24', '26'
	    ]
	  },
	  {
	    id: '17',
	    firstName: 'Hallie',
	    lastName: 'Hartmann',
	    email: 'Anissa_Graham@yahoo.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/gusoto/128.jpg',
	    friends: [
	      '2',  '5',  '7',  '9',
	      '10', '20', '21', '22',
	      '23', '24', '26', '29',
	      '30'
	    ]
	  },
	  {
	    id: '18',
	    firstName: 'Juwan',
	    lastName: 'Wuckert',
	    email: 'Brennon78@yahoo.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/oksanafrewer/128.jpg',
	    friends: [
	      '1',  '2',  '11',
	      '17', '20', '22',
	      '24', '26', '30'
	    ]
	  },
	  {
	    id: '19',
	    firstName: 'Morgan',
	    lastName: 'Schmidt',
	    email: 'Tony_Barton@hotmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/millinet/128.jpg',
	    friends: [ '2', '17', '25' ]
	  },
	  {
	    id: '20',
	    firstName: 'Maud',
	    lastName: 'Rolfson',
	    email: 'Michael.Schuppe37@yahoo.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mgonto/128.jpg',
	    friends: [
	      '2',  '6',  '7',
	      '11', '16', '19',
	      '21', '24', '26',
	      '29', '30'
	    ]
	  },
	  {
	    id: '21',
	    firstName: 'Edward',
	    lastName: 'Quitzon',
	    email: 'Helen_Beier@gmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg',
	    friends: [ '1', '3', '6', '13', '16', '25' ]
	  },
	  {
	    id: '22',
	    firstName: 'Cordell',
	    lastName: 'Klein',
	    email: 'Joey68@hotmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/osmond/128.jpg',
	    friends: [
	      '1',  '2',  '6',
	      '7',  '8',  '10',
	      '15', '20', '21',
	      '28', '30'
	    ]
	  },
	  {
	    id: '23',
	    firstName: 'Beatrice',
	    lastName: 'Feeney',
	    email: 'Branson_Miller37@yahoo.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andresdjasso/128.jpg',
	    friends: [
	      '3',  '5',  '8',
	      '18', '19', '20',
	      '21', '24'
	    ]
	  },
	  {
	    id: '24',
	    firstName: 'Ronny',
	    lastName: 'Ruecker',
	    email: 'Arnaldo.Bashirian@hotmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/webtanya/128.jpg',
	    friends: []
	  },
	  {
	    id: '25',
	    firstName: 'Jacklyn',
	    lastName: 'Rippin',
	    email: 'Rachel88@hotmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nessoila/128.jpg',
	    friends: [ '1', '3', '9', '17', '26' ]
	  },
	  {
	    id: '26',
	    firstName: 'Dewayne',
	    lastName: 'Turcotte',
	    email: 'Jayden.Nikolaus@yahoo.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/gcmorley/128.jpg',
	    friends: [
	      '4',  '8',  '15',
	      '24', '27', '29',
	      '30'
	    ]
	  },
	  {
	    id: '27',
	    firstName: 'Edd',
	    lastName: 'Beier',
	    email: 'Kendrick15@yahoo.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sovesove/128.jpg',
	    friends: [
	      '1',  '2',  '4',  '5',
	      '7',  '10', '11', '12',
	      '13', '15', '17', '19',
	      '21', '23'
	    ]
	  },
	  {
	    id: '28',
	    firstName: 'Deangelo',
	    lastName: 'Lockman',
	    email: 'Houston_Legros77@hotmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/curiousoffice/128.jpg',
	    friends: [ '6', '10', '11', '13', '19', '29' ]
	  },
	  {
	    id: '29',
	    firstName: 'Carlie',
	    lastName: 'Keeling',
	    email: 'Shemar_Johnston@gmail.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/elbuscainfo/128.jpg',
	    friends: [
	      '3',  '5',  '10',
	      '12', '17', '18',
	      '23', '26', '28'
	    ]
	  },
	  {
	    id: '30',
	    firstName: 'Emilio',
	    lastName: 'Powlowski',
	    email: 'Doyle_Bauch37@yahoo.com',
	    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/guischmitt/128.jpg',
	    friends: [
	      '2',  '8',  '12',
	      '14', '21', '23',
	      '29'
	    ]
	  }
	]
	
	export default users
	
	/* users generated using faker: https://github.com/marak/Faker.js/ */
	