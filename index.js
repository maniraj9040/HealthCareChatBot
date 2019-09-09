'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow,BasicCard, Button,BrowseCarouselItem,BrowseCarousel,Carousel,List,Image,Permission,Suggestions} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

const {google} = require('googleapis');

const calendar = google.calendar('v3');

const customsearch = google.customsearch('v1');


const admin = require('firebase-admin');
admin.initializeApp();

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

const db = admin.firestore();

app.intent('Hospitals', (conv,params) => {

	const dept = params.Departments;
	console.log(`you have entered ${dept}`)
	console.log(params);
    // conv.ask(`you have just asked about ${dept}`);
    if(dept == 'Cancer'){

    	conv.ask('Best Hospitals for Cancer Treatment');
    	conv.ask(new BrowseCarousel({
    		items: [
    		new BrowseCarouselItem({
    			title: 'Apollo Health City (Private Hospital)',
    			url: 'https://hyderabad.apollohospitals.com',
    			description: 'best hospital for cancer treatment',
    			image: new Image({
    				url: 'https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg',
    				alt: 'Apollo Health City',
    			}),
    			footer: 'more information about Apollo Health City',
    		}),
    		new BrowseCarouselItem({
    			title: 'American Oncology Institute',
    			url: 'https://www.americanoncology.com/',
    			description: 'best hospital for cancer treatment',
    			image: new Image({
    				url: 'https://healthcareradius.files.wordpress.com/2017/04/32.jpg?w=723',
    				alt: 'American Oncology Institute',
    			}),
    			footer: 'More information about American Oncology Institute',
    		}),
    		new BrowseCarouselItem({
    			title: 'Omega Hospital',
    			url: 'http://www.omegahospitals.com/',
    			description: 'best hospital for cancer treatment',
    			image: new Image({
    				url: 'https://3.imimg.com/data3/JK/JC/MY-8990934/omega-hospitalsomega-is-a-super-specialty-hospital-where-a-c-500x500.jpg',
    				alt: 'Omega Hospital',
    			}),
    			footer: 'More information about Omega Hospital',
    		}),
    		new BrowseCarouselItem({
    			title: 'Care Hospital',
    			url: 'https://www.carehospitals.com/',
    			description: 'best hospital for cancer treatment',
    			image: new Image({
    				url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hyJrU__2-yEmeniOU9pvHZa3BO9sf1W1kDxUgSzjS4bN7EX-6w',
    				alt: 'Care Hospital',
    			}),
    			footer: 'More information about Care Hospital',
    		}),
    		new BrowseCarouselItem({
    			title: 'Yashoda Hospital',
    			url: 'https://www.yashodahospitals.com/',
    			description: 'best hospital for cancer treatment',
    			image: new Image({
    				url: 'https://www.yashodahospitals.com/wp-content/uploads/MALAKPET.jpg',
    				alt: 'Yashoda Hospital',
    			}),
    			footer: 'More information about Yashoda Hospital',
    		})
    		],
    	}));
    }
    else if(dept == 'Eye'){

    	conv.ask('Best Hospitals for Eye Treatment');
    	conv.ask(new BrowseCarousel({
    		items: [
    		new BrowseCarouselItem({
    			title: 'Win Vision Eye Hospitals',
    			url: "https://winvision.in/",
    			description: 'best hospital for Eye treatment',
    			image: new Image({
    				url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3BhEiva9jPaIHg4vTed3Sb_CPhuHr7gXiNIqOs933n4434JYHA",
    				alt: 'Win Vision Eye Hospitals',
    			}),
    			footer: 'more information about Win Vision Eye Hospitals',
    		}),
    		new BrowseCarouselItem({
    			title: 'Sri Shankara Nethralaya',
    			url: 'http://srishankaranethralaya.com/',
    			description: 'best hospital for Eye treatment',
    			image: new Image({
    				url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jkl0ftAuXd7QRwhr4lFW7SHd5EbuBR6oohNTOZM5mc4r-rbhRQ',
    				alt: 'Sri Shankara Nethralaya',
    			}),
    			footer: 'More information about Sri Shankara Nethralaya',
    		}),
    		new BrowseCarouselItem({
    			title: 'L.V. Prasad Eye Institute',
    			url: 'https://www.lvpei.org/',
    			description: 'best hospital for Eye treatment',
    			image: new Image({
    				url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorm-eEW2j4Cxm_HeFPrzDTgI9LuX2QLe7WUyTfEv0Fa3Gd1Oa',
    				alt: 'L.V. Prasad Eye Institute',
    			}),
    			footer: 'More information about L.V. Prasad Eye Institute',
    		}),
    		new BrowseCarouselItem({
    			title: 'Vasan Eye Care',
    			url: 'https://www.vasaneye.com/',
    			description: 'best hospital for Eye treatment',
    			image: new Image({
    				url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrk6Zh95_mvyGol11_To3ff_HraZ8CY96yIDMX2urGgR41_F1Xw',
    				alt: 'Vasan Eye Care',
    			}),
    			footer: 'More information about Vasan Eye Care',
    		}),
    		new BrowseCarouselItem({
    			title: 'Apollo Eye Care Centre',
    			url: 'https://hyderabad.apollohospitals.com/departments-apollo-eye/',
    			description: 'best hospital for Eye treatment',
    			image: new Image({
    				url: 'https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg',
    				alt: 'Apollo Eye Care Centre',
    			}),
    			footer: 'More information about Apollo Eye Care Centre',
    		})
    		],
    	})); 

    }
    else if(dept == 'Heart'){
    	
    	conv.ask('Best Hospitals for Heart Treatment');
    	conv.ask(new BrowseCarousel({
    		items: [
    		new BrowseCarouselItem({
    			title: 'Apollo Hospital Hyderabad',
    			url: "https://hyderabad.apollohospitals.com/",
    			description: 'best hospital for Heart treatment',
    			image: new Image({
    				url: "https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg",
    				alt: 'Apollo Hospital Hyderabad',
    			}),
    			footer: 'more information about Apollo Hospital Hyderabad',
    		}),
    		new BrowseCarouselItem({
    			title: 'Apollo Hospital DRDO',
    			url: 'https://hyderabad.apollohospitals.com/drdo/',
    			description: 'best hospital for Heart treatment',
    			image: new Image({
    				url: 'https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg',
    				alt: 'Apollo Hospital DRDO',
    			}),
    			footer: 'More information about Apollo Hospital DRDO',
    		}),
    		new BrowseCarouselItem({
    			title: 'Malla Reddy Narayana Hospital, Hyderabad',
    			url: 'http://www.mallareddynarayana.com/',
    			description: 'best hospital for Heart treatment',
    			image: new Image({
    				url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqKhgWdEd8ZX__soQIzsbjrchFFmtGsZHo9TlnBWQbyjLWB3p',
    				alt: 'Malla Reddy Narayana Hospital, Hyderabad',
    			}),
    			footer: 'More information about Malla Reddy Narayana Hospital, Hyderabad',
    		}),
    		new BrowseCarouselItem({
    			title: 'MaxCure Hospital, Secretariat Road',
    			url: 'https://www.medicoverhospitals.in/secretariat/',
    			description: 'best hospital for Heart treatment',
    			image: new Image({
    				url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8EgGBNdFZW35CAqzeqpjPfVa066JLYe8AO2UF9n8kU8xleQXhA',
    				alt: 'MaxCure Hospital, Secretariat Road',
    			}),
    			footer: 'More information about MaxCure Hospital, Secretariat Road',
    		}),
    		new BrowseCarouselItem({
    			title: 'Apollo Eye Care Centre',
    			url: 'https://hyderabad.apollohospitals.com/departments-apollo-eye/',
    			description: 'best hospital for Eye treatment',
    			image: new Image({
    				url: 'https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg',
    				alt: 'Apollo Eye Care Centre',
    			}),
    			footer: 'More information about Apollo Eye Care Centre',
    		})
    		
    		],
    	})); 
    	conv.ask(new Suggestions('Book an appointment'));

    }
    else
    {
   		conv.ask("we don't have specialists available in hyderabad")
   	}
});

//================================================ end of Hospitals intent ================================================================

app.intent('BloodBanks',(conv,params)=>{
	const location = params.city;
	if(location == null||location ==''||location == undefined) {
		       
	}
	else
	{
		console.log(location);
		conv.ask(location)	;
	}
});

//================================================ end of Blood banks intent ================================================================

app.intent('BloodDonors',(conv,params)=>{
	const bloodGroup = params.Blood_groups;
	console.log(bloodGroup);

	conv.ask('Here are some Persons who are ready to donate blood')

	if(bloodGroup == 'O+ve'){
		console.log('entered into O+ve blood group section');
		conv.ask(new List({
			title: 'O+Ve blood donors list',
			items: {
				// Add the first item to the carousel
				'Mani Raj': {
					
					title: 'Mani raj',
					description: 'blood group - O+ve.\n'+
								 'number - 9989083214.\n'+
								 'gendar - Male',
					image: new Image({
						url: 'https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg',
						alt: 'Mani raj',
					}),
				},
				'Pavan kalyan': {
					
					title: 'Pavan kalyan',
					description: 'blood group - O+ve.\n'+
								 'number - 9989083214.\n'+
								 'gendar - Male',
					image: new Image({
						url: 'https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg',
						alt: 'Pavan kalyan',
					}),
				}
			}
		}));
	}
	else if(bloodGroup == 'O-ve'){
		console.log('entered into O-ve blood group section');
		conv.ask(new List({
			title: 'O-Ve blood donors list',
			items: {
				// Add the first item to the carousel
				'Mani Raj': {
					
					title: 'Mani raj',
					description: 'blood group - O-ve.\n'+
								 'number - 9989083214.\n'+
								 'gendar - Male',
					image: new Image({
						url: 'https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg',
						alt: 'Mani raj',
					}),
				},
				'Pavan kalyan': {
					
					title: 'Pavan kalyan',
					description: 'blood group - O-ve.\n'+
								 'number - 9989083214.\n'+
								 'gendar - Male',
					image: new Image({
						url: 'https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg',
						alt: 'Pavan kalyan',
					}),
				}
			}
			
    	}));
	}else if(bloodGroup == 'A+ve'){
		console.log('entered into A+ve blood group section');
		conv.ask(new List({
			title: 'A+Ve blood donors list',
			items: {
				// Add the first item to the carousel
				'Mani Raj': {
					
					title: 'Mani raj',
					description: 'blood group - A+ve.\n'+
								 'number - 9989083214.\n'+
								 'gendar - Male',
					image: new Image({
						url: 'https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg',
						alt: 'Mani raj',
					}),
				},
				'Pavan kalyan': {
					
					title: 'Pavan kalyan',
					description: 'blood group - A+ve.\n'+
								 'number - 9989083214.\n'+
								 'gendar - Male',
					image: new Image({
						url: 'https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg',
						alt: 'Pavan kalyan',
					}),
				}
			}    		
    	}));
	}else if(bloodGroup == 'A-ve'){
		conv.ask('Sorry, The blood Group you requested for is currently unavailable.')
	}else if(bloodGroup == 'B+ve'){
		console.log('entered into B+ve blood group section');
		conv.ask(new List({
			title: 'B-Ve blood donors list',
			items: {
				// Add the first item to the carousel
				'Mani Raj': {
					
					title: 'Mani raj',
					description: 'blood group - B+ve.\n'+
								 'number - 9989083214.\n'+
								 'gendar - Male',
					image: new Image({
						url: 'https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg',
						alt: 'Mani raj',
					}),
				},
				'Pavan kalyan': {
					
					title: 'Pavan kalyan',
					description: 'blood group - B+ve.\n'+
								 'number - 9989083567.\n'+
								 'gendar - Male',
					image: new Image({
						url: 'https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg',
						alt: 'Pavan kalyan',
					}),
				}
			}
    		
    	}));
	}

});

//================================================ end of blood donors intent ================================================================

app.intent('appointmentSchedular',(conv,params) =>{
    const date = params.date;
    const time = params.time;
    const hospitalName = params.Hospitals;
    const Specialization = params.Departments;
    console.log(`values given in utterance ${date},${time},${hospitalName},${Specialization}`)

    if(hospitalName == '' || hospitalName == undefined){
        conv.ask(`Sure,Here is list of some Best Hospitals for ${Specialization} treatment.Please Select from below or You can give the name `+
                 `of the Hospital you wish to book an appointment`)
        conv.ask(new List({
            title: 'best hospitals',
            items: {
                // Add the first item to the carousel
                'apollo hospitals': {
                    
                    title: 'apollo hospitals',
                    description: 'address - apllow jublee hills.\n'+
                                 'contact number - 9989083214.\n',
                    image: new Image({
                        url: 'https://assets.lybrate.com/img/documents/clinic/logo/91deca93d26c96bd922eed82a9704d04/Apollo-Health-City-Gastroenterologist-hyderabad-414b3f.jpg',
                        alt: 'apollo jublee hills',
                    }),
                },
                'Maxcure hospital': {

                    title: 'Maxcure hospital',
                    description: 'address - maxcure banjara hills.\n'+
                                 'contact number - 9989083214.\n',
                    image: new Image({
                        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8EgGBNdFZW35CAqzeqpjPfVa066JLYe8AO2UF9n8kU8xleQXhA',
                        alt: 'maxcure',
                    }),
                }
            }           
        }));

    }
    else{
        var test = appointmentPlacer(conv,date,time,Specialization,hospitalName);
        console.log('value inside the test')
        console.log(test);
        return test.then(docs =>{
        }).catch(err =>{
        });        
    }
})


app.intent('appointmentSchedular - custom-2',(conv,params) =>{
    const context = conv.contexts.get('appointmentschedular-followup').parameters;
    const Specialization = context.Departments;
    const dates = context.date;
    const HospitalName = context.Hospitals;
    const time = params.availableTime;
    console.log('values in appointmentSchedular - custom-2 intent are ');
    console.log(Specialization+','+dates+','+time+','+HospitalName)
    var test = appointmentPlacer(conv,dates,time,Specialization,HospitalName)
    console.log('value inside the test')
    console.log(test)
    return test.then(docs =>{
    }).catch(err =>{
    }); 
});

app.intent('appointmentSchedular - custom',(conv,params) =>{
    console.log(`conv is`);
    console.log(conv)

    const context = conv.contexts.get('appointmentschedular-followup').parameters;
    console.log(`context values are :`);
    console.log(context)

    console.log(context.Hospitals);
    console.log(context.Departments);

    const times = context.time;
    console.log(context.time)

    const dates = context.date;
    console.log(dates)
    
    const Specialization = context.Departments;

    var HospitalName = params.HospitalValue;

   
    
    var test = appointmentPlacer(conv,dates,times,Specialization,HospitalName);
    console.log('value inside the test')
    console.log(test)
    return test.then(docs =>{
    }).catch(err =>{
    }); 
});




app.intent('appointmentSchedular - custom - custom',(conv,params) =>{
    const context = conv.contexts.get('appointmentschedular-followup').parameters;
    const Specialization = context.Departments;
    const dates = context.date;
    
    const values = conv.contexts.get('appointmentschedular-custom-followup ')
    const HospitalName = values.HospitalValue;

    const time = params.availableTimes;
    console.log('values in appointmentSchedular - custom - custom intent are ');
    console.log(Specialization+','+dates+','+time+','+HospitalName)
    var test = appointmentPlacer(conv,dates,time,Specialization,HospitalName)
    console.log('value inside the test')
    console.log(test)
    return test.then(docs =>{
    }).catch(err =>{
    }); 
});
// Enter your calendar ID and service account JSON below.
const calendarId = 'testusers342@gmail.com'; // Example: 6ujc6j6rgfk02cp02vg6h38cs0@group.calendar.google.com
const serviceAccount = {'client_email':'appointmentschedular@plasma-iterator-250009.iam.gserviceaccount.com', 'private_key':'-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJjQHSsmom+rZP\nxYTpyYpSLxgWI8DzRGuv54JapJv5/yx19S4oYOIOoSkEEoQwvMaMWlHWy3EMCG5d\n8YlOepDy0F/CTTnBkARTB1GHJednKSTKKxMT3hIAU9GM+aI1tYwxlQzW7ke1aPjB\nKoXhRWruMfHS24WCaf4g6Xfl8I0vN24HvB1YObLX+kGJMIGSIafSJW18QeyYqbUt\ny8stitVo93opK/ZUehb4ppZjE5mxpm6+Ap5HIqAKyKzNBVKHgG2BDg1BxCVgh8P5\nZqt6LtL7N15/0yqjNtZ4zNAGc5HXXn/iQtnzPltNvGGBlsmOJjEc12Nkfcbdprcu\nLncGfOaHAgMBAAECggEAXM3VL4+gakdZ5/xSeZWn37S4mgUnhLwV+76VWqhd+6xf\n7AaTlNsba9IQQURHYuuhXqH9+fHeIUTGkPI1H5I3KN8CoMSPWg22uAZwJ1MwLGOZ\nAY/47lZ8InN10zxk0OdB4Ni5O0Qnd6QYmlU6pSIiHQCZUVZsMMMeVUg7QYDUeY7y\nXmSKBr8mf4vJJWs3DA4Eh0xOUZmmj/MkULBhDJQ5wXAQmPtmPfvN7DSScocg+QC2\nGDsGpXYhMOVppFttDhcNnjFxmc4xOBEc1HUxhu5pa/btEWuCfLrZae8vyyTE6xvv\nN9rh1zY26MVQOepSVhx+Cnecl9owtGnkkRXVcK0BqQKBgQDvTWF+oTs4dqz2X/Xh\naKiQdFh5ZcUoVHvVpZVH+C5ZQTh4Rxbh8L0MAoJobKiHbFRwxEpgx6sLRbVrGUqI\n/gkn1J+iwgVKNqVLF3X+K7mo1izFgvMJUW/18jloTMLu7Jfu5dSBRTZIkWrnc/iL\n/pBqtC0e8JTkNfkQVVoJELd6XwKBgQDXnUcgMeM9bM6qBnK6D0I5WkGE2YnZ2Oio\nrxc/xROcCwXUtncAe/d6OLPKNIU/OSujQRXghiH7a0TSGsb2MqQy1677GMnJaxgK\nqT7HnM13MB0R6oIb8ojs9tcfRizIQxxMCwaiiSL8XoPioogO9TAvTFidKyDGD4xs\nHuUuCZFU2QKBgHYQiX9+cMdk1eUgZyF1D2Vl4ZjTezhwpkA8V7CQY92pbgD5ofKL\nYdohCtIWefeGnQqd7cxd9qezFtTmP33jSAUcxD36171LxLWNt6tVS15ffOtdtibs\nxP5lKamp5asXk8ZMIlI9IZEgHcxfzUrUp8/dYT2YmP0XG/DRC4DZfIylAoGAWU2D\nEAqZm+9dCX7yNa3sN+TyDhwrxFbaxkL+1iLCJHdMSvXoBANUVQL3NGDcb3s2X7+t\nV/k2SfP75SnCDmabK5O5nbZ+nTYGFyRSJEsFrr/2ylze1sR1gfAa2ZEvKyLgrX5D\nmT5Dh1N+PHgk8k0LUAvHCBG82UvHVWDWe2LrFsECgYEA7hWGNWbNgeqmee4aIhEK\nqFGhXZWOw0620kis3P6Jy5Ya06gHuL+6BJFbUUhIXAYsqZ+M88FPi6gdyPyd7A5d\nHsq0bxCxsqlbp9P/Rt5TjN4x6Qjjx3HdnGrqO6+yBvaNWeiKfGVaJn5yvtC6QyvU\nkCO0YR3eRWmpIdwwY8AAitE=\n-----END PRIVATE KEY-----\n'}; // The JSON object looks like: { "type": "service_account", ... }   ,'private_key':'AIzaSyCpzgk6R_HmwfQ1aE6u4n3RC_mEg1yyYfc'

// Set up Google Calendar service account credentials
const serviceAccountAuth = new google.auth.JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: 'https://www.googleapis.com/auth/calendar'
});

const timeZone = 'Asia/kolkata';  // Change it to your time zone
const timeZoneOffset = '+05:30';         // Change it to your time zone offset

                // --------------------getMyAppointments------------------------


app.intent('getMyAppointments',(conv,params) =>{
    console.log('inside getMyAppointments intent')
    const date = params.date;
    const time = '2019-09-09T00:00:00+06:00'
    console.log(date)
    const convertedDate = convertParametersDate(date,time)
    console.log(convertedDate)

    const appointmentDuration = 24;
    const dateTimeEnd = addHours(convertedDate,appointmentDuration);
    console.log(dateTimeEnd)
   
    
    try{
    var testing = new Promise((resolve, reject) => {
        calendar.events.list({  // List all events in the specified time period
            auth: serviceAccountAuth,
            calendarId: calendarId, 
            timeMin: convertedDate.toISOString(),                           
            timeMax: dateTimeEnd.toISOString()
        }, (err, calendarResponse) => {
            console.log(calendarResponse.data)
            const test = calendarResponse.data.items;
            return test.map(wordObject =>{
                console.log(wordObject.id)
                console.log(wordObject.start.dateTime)
                console.log(wordObject.end.dateTime)
                return calendar.events.get({
                    auth: serviceAccountAuth,
                    calendarId : calendarId,
                    eventId : wordObject.id, 
                },(err,event)=>{
                    console.log(err)
                    console.log(event)
                    const dates = new Date(wordObject.start.dateTime);
                    const times = new Date(wordObject.end.dateTime);
                    console.log(dates.toLocaleDateString('en-US',)+'--->'+dates.toLocaleTimeString('en-US',{ hour: 'numeric', hour12: true, timeZone: timeZone })+'-'+times.toLocaleTimeString('en-US',{ hour: 'numeric', hour12: true, timeZone: timeZone }))
                    conv.ask(dates.toLocaleDateString('en-US',)+'--->'+dates.toLocaleTimeString('en-US',{ hour: 'numeric', hour12: true, timeZone: timeZone })+'-'+times.toLocaleTimeString('en-US',{ hour: 'numeric', hour12: true, timeZone: timeZone }))

                })

            })
            err ? reject(err) : resolve(console.log('from resolve'));
        })
    })
    }catch(err){
        console.log('inside try and catch block')
        conv.ask(`sorry,I couldn't get your appointments`)
    }

    return testing.then(docs =>{
    }).catch(err =>{
        console.log('inside then and catch block')
        conv.ask(`sorry,I couldn't get your appointments`)
    })
});

app.intent('deleteAppointment',(conv,params)=>{
    console.log('inside deleteAppointment intent');
    const date = params.date;
    const time = params.time;
    console.log('date'+date +' -  time'+time)
    const appointmentDuration = 1;
    const dateTime = convertParametersDate(date,time)
    const dateTimeEnd = addHours(dateTime, appointmentDuration);

    console.log(dateTime)
    console.log('converting dateTime to ISOString ')
    console.log(dateTime.toISOString())
    console.log(dateTimeEnd)
    console.log('converting dateTimeEnd to ISOString')
    console.log(dateTimeEnd.toISOString())

    const appointmentTimeString = getLocaleTimeString(dateTime);
    console.log(`appointmentTimeString  ${appointmentTimeString}`)

    const appointmentDateString = getLocaleDateString(dateTime);
    console.log(`appointmentDateString  ${appointmentDateString}`)

    try{
    var testing = new Promise((resolve,reject)=>{
        calendar.events.list({
            auth: serviceAccountAuth,
            calendarId: calendarId, 
            timeMin : dateTime.toISOString(),
            // timeMax : dateTimeEnd.toISOString()
        },(err,calendarResponse)=>{
            console.log(calendarResponse.data)
            console.log(calendarResponse.data.items[0])
            console.log(calendarResponse.data.items[0].id)
            if(err){
                console.log('inside err,if block,error occured')
                console.log(err)
            }
            else{
                console.log('calendarResponse')
                calendar.events.delete({
                    auth: serviceAccountAuth,
                    calendarId : calendarId,
                    eventId : calendarResponse.data.items[0].id,
                    Resource : {
                                summary: `doctor Appointment for heart treatment on ${appointmentDateString} at ${appointmentTimeString} has been cancelled due to some unavoidable circumstances`,                                
                                }
                            },(err, event) => {
                                    console.log(err);
                                    console.log(event);
                                    conv.ask(`doctor Appointment for heart treatment on ${appointmentDateString} at ${appointmentTimeString} has been cancelled due to some unavoidable circumstances`)
                                    err ? reject(err) : resolve(event);
                                });
                                calendar.events.u                               
            }
        });
    });
}
catch(err){
    console.log(`sorry,I couldn't delete your account`)
}
    return testing.then(docs =>{
        console.log('event deleted')
        console.log(docs)
    }).catch(err =>{
        console.log(err)
        conv.ask(`sorry,I couldn't delete your account`)
    });
});


function appointmentPlacer(conv,datess,timess,Specializationss,hospitalNamess){
    const datesss = datess;
    const timesss = timess;
    const hospitalNamesss = hospitalNamess;
    const Specializationsss = Specializationss;

    console.log(`parameters passed from function calling ${datesss},${timesss},${hospitalNamesss},${Specializationsss}`)


    const appointmentDuration = 1;// Define the length of the appointment to be one hour.

    const dateTimeStart = convertParametersDate(datesss,timesss);

    console.log('dateTimeStart -> ')
    console.log(dateTimeStart);    

    const dateTimeEnd = addHours(dateTimeStart, appointmentDuration);

    console.log('dateTimeEnd  ->  ');
    console.log(dateTimeEnd );

    const appointmentTimeString = getLocaleTimeString(dateTimeStart);
    console.log('appointmentTimeString  ->  ');
    console.log(appointmentTimeString);

    const appointmentDateString = getLocaleDateString(dateTimeStart);
    console.log('appointmentDateString  ->  ');
    console.log(appointmentDateString);

    // calendar creating code

    var testing = new Promise((resolve, reject) => {
        calendar.events.list({  // List all events in the specified time period
            auth: serviceAccountAuth,
            calendarId: calendarId,
            timeMin: dateTimeStart.toISOString(),                               
            timeMax: dateTimeEnd.toISOString()                                  
        }, (err, calendarResponse) => {
            // Check if there exists any event on the calendar given the specified the time period
            console.log('entered into err,calendarResponse createCalendarEvent section');
            console.log(`length is ${calendarResponse.data.items.length}`);
            if (err || calendarResponse.data.items.length > 0) {
                console.log('entered into err,calendarResponse createCalendarEvent "if" section');
                console.log(`err is ${err}`)
                reject(err || new Error('Requested time conflicts with another appointment'));
            } else {    
                // Create an event for the requested time period
                console.log('entered into err,calendarResponse createCalendarEvent "else" section');
                calendar.events.insert({ auth: serviceAccountAuth,
                calendarId: calendarId,
                resource: {summary: `doctor Appointment for ${Specializationsss} treatment`,
                    start: {dateTime: dateTimeStart},
                    end: {dateTime: dateTimeEnd}}
                }, (err, event) => {
                    console.log(err);
                    console.log(event);
                    err ? reject(err) : resolve(event);
                }
                );
                calendar.events.u
            }
        });
    });

    console.log(`values inside the testing is`);
    console.log(testing)

     // Check the availability of the time slot and set up an appointment if the time slot is available on the calendar
    return testing.then(() => {
      console.log('dates are available')
      console.log(`Got it. I have your appointment scheduled with ${hospitalNamesss} for ${Specializationsss} treatment on ${appointmentDateString} at ${appointmentTimeString} .`)
      conv.ask(`Got it. I have your appointment scheduled with ${hospitalNamesss} for ${Specializationsss} treatment on ${appointmentDateString} at ${appointmentTimeString} .`);
      conv.ask('Is there anything else I can do for you?')
    }).catch(() => {
      conv.ask(`Sorry, we're booked on ${appointmentDateString} at ${appointmentTimeString} at ${hospitalNamesss}. `);
      conv.ask('available timings are ')
      conv.ask(new Suggestions('7am'));
      conv.ask(new Suggestions('9am'));
      conv.ask(new Suggestions('12pm'));
    });
}


function convertParametersDate(date, time){
    console.log('entered into convertParametersDate functions');
    var number = Date.parse(date.split('T')[0] + 'T' + time.split('T')[1].split('+')[0]+timeZoneOffset);  
    return new Date(number);
}

// A helper function that adds the integer value of 'hoursToAdd' to the Date instance 'dateObj' and returns a new Data instance.
function addHours(dateObj, hoursToAdd){
    console.log('entered into addHours function');
    return new Date(new Date(dateObj).setHours(dateObj.getHours() + hoursToAdd));
}

// A helper function that converts the Date instance 'dateObj' into a string that represents this time in English.
function getLocaleTimeString(dateObj){
    console.log('entered into getLocaleTimeString function');
    // var obj = new Date(Date.parse(dateObj)-(330*60*1000))

    return dateObj.toLocaleTimeString('en-US',{ hour: 'numeric', hour12: true, timeZone: timeZone });
}

// A helper function that converts the Date instance 'dateObj' into a string that represents this date in English.
function getLocaleDateString(dateObj){
    console.log('entered into getLocaleDateString function');
    return dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: timeZone });
}

//================================================ end of appointmentSchedular intent ================================================================


app.intent('First_Aid_Info', (conv, params) => {
  console.log(params);

  if (params.Ill == 'Snake Bit') {
    conv.ask('1. Immediately move away from the area where the bite occurred.' +
      '\n\n2. Place the victim in a comfortable position.' +
      '\n\n3. Try to keep the person clam, and help in reducing fear and anxiety.' +
      '\n\n4. Remove anything tight from around the bitten part of the body (example.: rings, anklets, bracelets).' +
      '\n\n5. Ask the person not to move the affected part.' +
      '\n\n6. Place the affected area below the heart level to prevent, spread of venum to heart.' +
      '\n\n7. Apply pressured bandage of about 2 to 3 inches above the bite site to prevent, spread of venum. this is called "PRESSURE IMMOBILISATION TECHNIQUE"' +
      '\n\n8. Immediately transport the person to hospital as soon as possibile.')

    conv.ask("See the below videos to know about Pressure immobilisation technique");

    conv.ask(new BasicCard({
      title: 'Snake bite first aid',
      // subtitle: '',
      text: '*Please click here to see videos on YouTube to know more about first aid for snake bite*',
      buttons: new Button({
        title: 'Open YouTube',
        url: 'https://www.youtube.com/results?search_query=first+aid+for+snake+bite+',
      }),
      // image: new Image({
      //   url: '',
      //   alt: '',
      // }),
      display: 'CROPPED',  // DEFAULT or WHITE or CROPPED
    }));
  }

  else if (params.Ill == 'Heart Attack') {
    conv.ask(
      '1. Call for medical help or ambulance.'+
      '\n2. if person not have allergic, Give them 300mg aspirin and tell to, chew it slowly.'+
      '\n3. if the person is unconscious, check breathing and start doing CPR.\n'+
      '\nSteps for CPR Process:'+
      '\n1: Place your hands in the middle of the chest.'+
      '\n2: press down on the chest about 2 inches deep, and delivered at a rate of, 100 compressions per minute.'+
      '\n3: Tilt back the person head slightly and the chin lifted, pinch the nose shut, and place your mouth over the person mouth.'+
      '\n4: Blow into the person mouth to make the chest rise. Deliver two rescue breaths, then continue compressions.'
    );

    conv.ask(
      'Note: If the chest does not rise with the initial rescue breath, re-tilt the head before delivering the second breath.\n\n'+
      'If the chest doesnot rise with the second breath, the person may be choking. After each subsequent set of 30 chest compressions, look for an object in the mouth, if seen, remove it.\n\n'+
      'Keep performing cycles of chest compressions and breathing until the person exhibits signs of life, such as breathing.'
    );

    conv.ask(new BasicCard({
      title: 'cardiopulmonary resuscitation(CPR)',
      text: '*Please click here to see videos on YouTube to know more about CPR*',
      buttons: new Button({
        title: 'Open YouTube',
        url: 'https://www.youtube.com/results?search_query=cpr+demonstration',
      }),
      display: 'CROPPED',  // DEFAULT or WHITE or CROPPED
    }));

  }


  else if(params.Ill == 'Heatstroke')
  {
    conv.ask('Heatstroke occurs when the body fails to regulate its own temperature.temperature wIll rise to 40°C (104°F) or higher.'+
    '\nSigns of heatstroke.'+
    '\n1. Unconsciousness for longer than a few seconds.'+
    '\n2. Convulsion (seizure), and Signs of moderate to severe difficulty breathing.'+
    '\n3. Fast heart rate, Confusion, severe restlessness, aggressive behaviour or anxiety.'+
    '\n4. Sweating that may be heavy or may have stopped.'+
    '\n5. Skin that may be red, pale, hot, and dry, even in the armpits.'+
    '\n6. Severe vomiting and diarrhea.'
    );

    conv.ask('Please follow below first aid steps.'+
    '\n1. Move the person into a cool place.'+
    '\n2. Remove the person\'s unnecessary clothing, and place the person on side to expose much skin to the air.'+
    '\n3. Cool the person\'s body by spraying cold water, and fan the person to lower the body temperature.'+
    '\n4. Apply ice packs in each armpit and, on the back of the person\'s neck.'+
    '\n5. If a child has stopped breathing, begin rescue breathing.'+
    '\n6. Do not give aspirin or acetaminophen to reduce a high body temperature.This may cause problems because of the body\'s response to heatstroke.'+
    '\n7. Give the fluids for hydration over 1 to 2 hours.Make sure the person is sitting up so that he or she does not choke.'
    );

    conv.ask(new BasicCard({
      title: 'Heat stroke',
      text: '*Please click here to see videos on YouTube to know more about first aid for Heat stroke*',
      buttons: new Button({
        title: 'Open YouTube',
        url: 'https://www.youtube.com/results?search_query=first+aid+for+heatstroke',
      }),
      display: 'CROPPED',  // DEFAULT or WHITE or CROPPED
    }));
  }


  else if(params.Ill == 'Accident')
  {
    conv.ask('Every year so many people die or seriously injured in accidents.'+ 
      'Many deaths could be prevented if first aid is given before emergency services arrive.'
    );

    conv.ask(      
      '1. Immediately call for an ambulance, and shout for help.'+
      '\n2. first check if the person is conscious by talking to them loudly and clearly.'+
      '\n3. If you do not receive a response, check if the person is breathing and if he has a pulse.If there is no pulse, check any ribs fractures are present, if no, start doing CPR.'+
      '\n4. If there are extensive wounds, try to control the bleeding by applying pressure to the area using a cloth.'+
      '\n5. In case of a fracture do not apply direct pressure. instead use a splint, combined with gentle pressure bandage.'+
      '\n6. It is safer not to give the patient anything to eat and drink.'
    );

    conv.ask(new BasicCard({
      title: 'Rood accidents first aid',
      text: '*Please click here to see videos on YouTube to know more about first aid for Accident*',
      buttons: new Button({
        title: 'Open YouTube',
        url: 'https://www.youtube.com/results?search_query=first+aid+for+accidents+',
      }),
      display: 'CROPPED',  // DEFAULT or WHITE or CROPPED
    }));
  }

});

//================================================ end of first_aid_info intent ================================================================


// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfIllment = functions.https.onRequest(app);