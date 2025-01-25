import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';



const resources = {
  en: {
    translation: {

      // NavBar //
      "BookAService": "Book A Service",
      "ExcellenceAirport": "Excellence Airport",
      "Home": "Home",
      "Services": "Services",
      "Meet&Greet": "Meet & Greet",
      "VIPTerminal": "VIP Terminal",
      "ChauffeurDrivenTransfers": "Chauffeur-driven Transfers",
      "ChauffeurDrivenTransferss": "Chauffeur Driven Transfers",
      "FleetCars": "Fleet Cars",
      "AvailableVehicles": "Available vehicles",
      "CarModels": "Car Models",
      "AboutUs": "About Us",
      "CompanyHistory": "Company History",
      "Values&MissionStatements": "Values & mission statements",
      "Terms&Policies": "Terms & policies",
      "ContactUs": "Contact Us",
      "ContactForm": "Contact Form",
      "SupportContactDetails": "Support Contact Details",
      "UserAccount": "User Account",
      "Profile": "Profile",
      "BookingHistory": "Booking History",
      "PaymentMethods": "Payment Methods",
      "BookService": "Book A Service",



      ////Footer
      "Booking": "Booking",
      "PrivacyPolicy": "Privacy Policy",
      "Terms&Condition": "Terms & Condition",
      "Contact": "Contact",
      "9StreetJean": "9 Street Jean-Jacques Rousseau",
      "Opening": "Opening",
      "MondaySaturday": "Monday - Saturday",
      "Sunday": "Sunday",
      "AllRightReserved.": "All Right Reserved.",
      "Company": "Company",


      // Home Page //
      "EnjoyMessage": "Enjoy Our Professional Service",
      "TravelingMessage": "Traveling is about having good times and focusing only about important things. Let us manage the details while you enjoy the journey",
      "MeetDesc": "The Excellence Airport Meet and Greet service ensures that every traveller experiences ease,comfort, and luxury, while navigating through the airport.",
      "ProfesionalDrivers": "Profesional Drivers",
      "DriversDesc": "Excellence Airport Driven Transfers combine comfort, professionalism and style to cater to discerning clients whether for business or leisure.",
      "VIPDesc": "The VIP Terminal Service provides travellers with exclusive access to private terminals where all airport procedures, are handled on their behalf.",
      "24/7Service": "24/7 Service",
      "24/7ServiceDesc": "Day or night, wherever you are headed, we are here 24/7, guiding your journey with care and comfort. Your satisfaction and fulfillment is our priority",
      "Welcometo": "Welcome to",
      "WelcomeDesc1": "Excellence Airport is a premium service provider with over two decades of expertise in the hospitality and travel industry.",
      "WelcomeDesc2": "Its reputation is built on offering seamless and luxurious airport assistance services, including meet & greet, VIP terminal access, chauffeur-driven transfers, and fast-track solutions. With a fleet of over 50 luxury vehicles, we enhance the travel experience by combining efficiency, personalization, and unmatched comfort.",
      "YearsOf": "Years of",
      "Experience": "Experience",
      "luxurious": "luxurious",
      "ReadMore": "Read More",
      "OurServices": "Our Services",
      "Arrival": "Arrival",
      "Departure": "Departure",
      "Transit": "Transit",
      "Meeting": "Meeting",
      "MeetingDesc": "Agent meets passengers at the end airbridge with a personalized name board.",
      "FastTrack": "Fast Track",
      "FastTrackDesc": "Passengers are escorted through immigration and customs using fast track lanes to minimize waiting times.",
      "EscortingPassengersInside": "Escorting passengers inside the airport",
      "EscortingPassengersDesc": "Escorting passengers to their onward mode of transportation or the arivals hall.",
      "EscortingPassengersOutside": "Escorting passengers outside the airport",
      "EscortingPassengersOutsideDesc": "Escorting passengers to their agreed transportation point.",
      "HandlingAirportFormalities": "Handling airport formalities",
      "HandlingAirportFormalitiesDesc": "A dedicated agent handles all airport formalities, including immigration and customs.",
      "HandlingLugguage": "Handling lugguage",
      "HandlingLugguageDesc": "Luggage is delivered directly to the VIP terminal.",
      "TransportToVIPTerminal": "Transport to VIP terminal",
      "TransportToVIPTerminalDesc": "Chauffeur-driven transport from the aircraft to the VIP terminal.",
      "Coordination": "Coordination",
      "CoordinationDesc": "Coordination begins before passengers arrive at the airport, with agents arranging curb side meetups and pre-arranged porter services for luggage assistance.",

      ///////////////////////// Traduiire en français pour la partie français

      "PersonalizedCoordination": "Personalized Coordination",
      "PersonalizedCoordinationDesc": "Personalized coordination of drop-off time and location with the assigned agent before arrival.",
      "FastTrackLanes": "Fast Track Lanes",
      "FastTrackLanesDesc": "Fast-track lanes are used for check-in, security, and passport control, ensuring  efficiency.",
      "EscortingPassengers": "Escorting passengers",
      ////////////
      "EscortingPassengersDesc": "If arranged, passengers are escorted to the departure lounge and then directly to the boarding gate.",
      "Combination": "Combination",
      "CombinationDesc": "Curb side meet-and-greet, luggage assistance, and expedited check-in.",
      "Security": "Security",
      "SecurityDesc": "Security and passport control are handled within the VIP terminal.",
      "ChauffeurService": "Chauffeur Service",
      "ChauffeurServiceDesc": "Chauffeur service to the aircraft if it is on a remote stand.",
      "Meett": "Meet",
      "MeettDesc": "Agents meet passengers with a name board at the airbridge.",
      "BoardingGate": "Boarding gate",
      "BoardingGateDesc":"Passengers are escorted to the departure lounge, if arranged, and then directly to the boarding gate.",
      "Assist": "Assist",
      "AssistDesc": "Assistance is offered for baggage claim, if necessary, and porter services, if pre-booked.",
      "FastTrackk": "Fast Track",
      "FastTrackkDesc": "Fast-track access is utilized for security and immigration formalities, ensuring a smooth transition.",
      "DepartureToBoardingGate": "Departure to boarding gate",
      "DepartureToBoardingGateDesc": "Passengers are guided to the departure lounge, if reserved, or boarding gate.",
      "ChauffeurrService": "Chauffeur service",
      "ChauffeurrServiceDesc": "Chauffeur service from the aircraft to the VIP terminal for a relaxing layover.",
      "ChauffeurTransport": "Chauffeur transport",
      "ChauffeurTransportDesc": "Chauffeur transport back to the aircraft for the next leg of the journey.",
      "AssistanceWithLuggage": "Assistance with carry-on",
      "AssistanceWithLuggageDesc": "Assistance with carry-on like handbags and light carryall.",
      "BookAServiceOnline": "Book A Service Online",
      "YourName": "Your Name",
      "YourEmail": "Your Email",
      "Date&Time": "Date & Time",
      "People1": "People 1",
      "People2": "People 2",
      "People3": "People 3",
      "NoOfPeople": "No Of People",
      "FlightDetails": "Flight Details",
      "SpecialRequest": "Special Request",

      "BookNow": "Book Now",
      "TeamMembers": "Team Members",
      "OurDrivers": "Our Drivers",


      /////About // Company History




      "CompanyHistory": "Company History",
      "WelcomeToAbout1": "At Excellence Airport, we specialize in transforming the chaos of travel into a seamless and luxurious experience. Located at various airports our VIP Meet and Greet services are provided at, Roissy Charles de Gaulle Airport, CDG, ORY, NCE, LYS, BOD, MRS, TLS,  MPL, LHR, TLV, airports. Our services cater to discerning travelers who value privacy, efficiency, and personalized care. From business executives to leisure travelers, we ensure every journey begins and ends with ease.",
      "WelcomeToAbout2": "Founded by Benjamin Slama, Excellence Airport has grown over 15 years to become synonymous with VIP airport services.Our multilingual team, fluent in French, English, and Spanish, is dedicatedto anticipating your needs and exceeding expectations, providing unmatched care and attention every step of the way.",
      "Excellence": "Excellence",
      "Luxury": "Luxury",
      "Vehicles": "Vehicles",
      "AboutDesc1": "We proudly offer a comprehensive suite of premium services, including VIP Meet& Greet, Chauffeur-Driven Transfers,and access to exclusive private terminals. Every service is designed to simplify airport procedures, allowing you to enjoy a smooth, stress-free journey. Whether it's fast-track immigration, luxury transportation, or a private terminal experience, we ensure unparalleled attention to detail.",
      "AboutDesc2": "Our fleet of over 50 luxury vehicles caters to every preference, including Mercedes-Benz models (Class-E, Class-S, and Class-V), with additional options like Maybach, Rolls Royce, and Range Rover available on request. Each transfer is managed by a professional chauffeur, equipped with local expertise to enhance your journey.",
      "Address": "Address:",
      "AddressDesc": "9 Street Jean-Jacques Rousseau, 95350 Saint-Brice-sous-Forêt, France",
      "AboutDesc3": "At Excellence Airport, we are dedicated to redefining airport travel by combining innovation, luxury, and personalized service. Join the countless clients worldwide who trust us to deliver an unparalleled airport experience.",
      "OurProfessionalDrivers": "Our Professional Drivers",


      ////About ///Team

      "OurTeam": "Our Team",
      "Team": "Team",
      "TeamMembers": "Team Members",
      "OurLovelyTeam": "Our Lovely Team",


      ///// About ///Terms

      "Terms&Policies": "Terms & Policies",
      "Commitment": "Our Commitment to Transparency and Trust",
      "CommitmentDes": "At Excellence Airport, we prioritize clarity, fairness, and mutual respect in our interactions with clients. Our terms and policies are designed to ensure a seamless and trustworthy experience, reflecting our unwavering  commitment to professionalism and customer satisfaction.",
      "ReservationAndPaymentTerms": "Reservation and Payment Terms",
      "ReservationAndPaymentTermsDesc": "To provide the highest quality of service, all bookings require a signed purchase order and a 50% deposit upfront. Payments are to be made promptly, in line with the agreed terms, ensuring smooth and uninterrupted service delivery. Invoices are payable at our headquarters: 9 Street Jean-Jacques Rousseau, 95350 Saint-Brice-sous-Forêt.",
      "DisputeResolutionandLatePayments": "Dispute Resolution and Late Payments",
      "DisputeResolutionandLatePaymentsDesc": "We understand that issues may occasionally arise. Any claims regarding services must be submitted in writing within eight days of receiving an invoice. For late payments, interest will be applied at a rate of 1% per month, and additional penalties may be imposed as stipulated in our policies. These measures ensure fairness and accountability on both sides.",
      "LegalFramework": "Legal Framework",
      "LegalFrameworkDesc": "Our operations are governed by French law, ensuring a robust and transparent framework for all transactions. Any disputes will fall under the exclusive jurisdiction of the Pontoise Commercial Courts, providing a clear pathway for resolution.",
      "CommitmentDes2": "Excellence Airport stands by its commitment to delivering exceptional service while adhering to ethical and legal standards. These terms and policies are not just guidelines; they embody our dedication to integrity and trust in every aspect of our operations.",



      //// About ////Values

      "OurGuidingPrinciples": "Our Guiding Principles",
      "OurGuidingPrinciplesDesc": " At Excellence Airport, we believe that every journey begins with an exceptional experience. Our mission is to redefine airport travel by providing high-end, personalized, and seamless services that ensure comfort, efficiency, and luxury for every traveler. From the moment you arrive, our team is dedicated to simplifying the complexities of modern air travel, offering innovative solutions that blend professionalism with genuine care.",
      "OurValues": "Our values are the cornerstone of our commitment to excellence",
      "CustomerCentric": "Customer-Centric Approach:",
      "CustomerCentricDesc": "We tailor our services to meet the unique needs of each traveler, whether for business or leisure, ensuring a personalized and memorable experience.",
      "ExcellenceInService": "Excellence in Service",
      "ExcellenceInServiceDesc": " Our dedication to professionalism and attention to detail guarantees consistently top-tier experiences, leaving no room for compromise.",
      "GlobalAccessibility": "Global Accessibility",
      "GlobalAccessibilityDesc": " With multilingual support in French, English, and Spanish, we embrace inclusivity and ensure smooth communication for our diverse clientele",
      "CommitmenToPrivacy": "Commitment to Privacy and Efficiency",
      "CommitmenToPrivacyDesc": "Designed for those who value discretion and time, our VIP services, including private terminal access and chauffeur-driven transfers, offer unparalleled convenience.",
      "SustainabilityAndResponsibility": "Sustainability and Responsibility",
      "SustainabilityAndResponsibilityDesc": "We adhere to ethical practices, prioritizing the safety and well-being of our clients and team while striving for long-term sustainability.",
      "ValuesConclusion": "These values define who we are and guide every decision we make. Excellence Airport is not just a service provider; we are your trusted partner in ensuring that your journey is as remarkable as your destination.",
      "Motto": "Let us manage the details while you enjoy the journey",



      ////Contact us //// Contact Form


      "ContactQuery": "Contact For Any Query",
      "General": "General",
      "Technical": "Technical",
      "Subject": "Subject",
      "Message": "Message",
      "SendMessage": "Send Message",




      //////// Support Contact

      "ContactInformation": "Contact Information",
      "Reach": "Reach Out to Us",
      "ReachDesc": "At Excellence Airport, we believe in fostering open and effective communication with our valued clients and partners. Whether you have inquiries, require assistance, or wish to collaborate, our team is always accessible to provide support and ensure your experience with us is seamless.",
      "DirectorOfPublication": "Director of Publication",
      "DirectorOfPublicationDesc": "The operations and content of Excellence Airport are overseen by our esteemed Director of Publication, Benjamin Slama, who ensures that our communications maintain the highest standards of clarity and professionalism.",
      "EmailDesc1": "For general inquiries, feedback, or detailed information about our services, feel free to contact us at",
      "EmailDesc2": "Our dedicated team responds promptly to address your needs.",
      "Phone": "Phone",
      "PhoneDesc1": "Need immediate assistance or wish to discuss a service in detail? Reach us directly at",
      "PhoneDesc2": " Our representatives are ready to assist you with any query.",
      "PhysicalAddress": "Physical Address",
      "PhysicalAddressDesc1": "Visit or correspond with us at our headquarters",
      "PhysicalAddressDesc2": "This is the hub of our operations, where we coordinate our premium services for clients worldwide.",
      "RCSRegistration": "RCS Registration",
      "RCSRegistrationDesc1": "As a registered company, Excellence Airport adheres to all applicable legal and regulatory requirements. Our registration number is",
      "RCSRegistrationDesc2": "underscoring our commitment to transparency and trustworthiness.",
      "HostingProvider": "HostingProvider",
      "HostingProviderDesc1": "Excellence Airport's website and online services are hosted by",
      "HostingProviderDesc2": "a reliable hosting provider ensuring robust performance, security, and accessibility for our digital platforms.",
      "or": "or",



      ////Fleeet Cars /////Available Cars

      "AboutCars": "About Our Available cars",
      "AboutCars2": "Excellence Airport Chauffeur-Driven Transfers ensure unmatched  convenience with a wide selection of vehicles readily available to suit every traveler's needs. Whether you require an economy  car for a quick trip, a luxury sedan for a touch of sophistication,  or a spacious van for group travel, the fleet is always prepared  to accommodate your request. With vehicles available round-the-clock, passengers can enjoy seamless airport pickups, drop-offs, and intercity transfers without worrying about schedules. No matter the time or destination, your car is always ready, ensuring a reliable and stress-free journey.",
      "Fleet": "Fleet",
      "OurAvailableCars": "Our Available Cars",
      "Class": "Class",


      ////Fleet Cars ///// Car Models

      "AboutOurCarModels": "About Our Car Models",
      "AboutOurCarModelsDesc": "Excellence Airport proudly offers a prestigious fleet of over fifty luxury vehicles, meticulously maintained and managed by a skilled logistics team dedicated to providing seamless service. At the heart of our collection are the iconic Mercedes-Benz models, including the elegant Class-E, the sophisticated Class-S, and the spacious and versatile Class-V, each designed to deliver unparalleled comfort and performance for any occasion.For those seeking an even more opulent experience, our exclusive vehicle options include world-renowned names such as Maybach, Rolls Royce, and Range Rover, available upon request. Whether for business, leisure, or a special event, our versatile fleet and attentive team ensure that your travel experience is nothing short of exceptional.",
      "OurCarModels": "Our Car Models",
      "FirstCategory": "First Category",
      "SecondCategory": "SecondCategory",
      "ThirdCategory": "Third Category",
      




      //////Services  /////Chauffeur

      "AirportChauffeurDrivenTransfers": "Airport Chauffeur Driven Transfers",
      "AirportChauffeurDrivenTransfersDesc1": `Imagine stepping off a flight and into a world where every detail of your ground transportation is
                  seamlessly managed, where efficiency meets elegance, and where your journey feels as refined as your destination. Excellence Airport Chauffeur-Driven
                  Transfers transform travel into a sophisticated experience, tailored for those who demand more than just a ride, they seek an extension of their comfort
                  and style.

                  Whether you're traveling for business or leisure, these transfers are designed with you in mind. Your schedule becomes the priority,
                  allowing you to focus on what matters most while enjoying the flawless service that defines Excellence Airport. Each journey begins
                  with a vehicle chosen specifically for your needs, whether it's an economy option for practicality, a luxury sedan for indulgence,
                  or spacious transport for groups. Every vehicle is meticulously maintained to ensure a smooth and secure ride.

                  At the heart of the service are chauffeurs who are more than just drivers—they are your knowledgeable companions. With local expertise and a
                  deep understanding of the region's culture, attractions, and customs, they add an enriching layer to your journey. Whether you're navigating a
                  bustling city, heading to a key business meeting, or exploring hidden gems off the beaten path, their insights make every mile memorable.

                  Flexibility is key to the Excellence Airport experience. Full-day bookings allow you to embrace the freedom of exploring unfamiliar areas
                  at your own pace or attending multiple engagements without the hassle of arranging separate transportation. From sunrise to sunset and beyond,
                  the service adapts effortlessly to your plans.

                  And when it comes to airport pickups, drop-offs, or intercity transfers, the service operates round the clock, ensuring you're never left waiting.
                  Each ride begins on time and ends with the same reliability, offering a sense of continuity that complements the excellence you expect.

                  Excellence Airport Chauffeur-Driven Transfers redefine what it means to travel on the ground. They are more than a service they are an experience
                  that blends practicality with sophistication, turning every journey into a seamless chapter of your travel story. `,

      
      "LetsTakeARide": "Let's take a ride", 
      "ExploreOurChauffeurDrivenFeatures": "Explore Our Chauffeur Driven Features",
      "ExploreAvailableFleetNow": "Explore our available fleet cars for the time being.",
      "ExploreVarietyCarModels.": "Explore our variety of fleet car models.",

      //////Services  /////Meet&Greet

      

      "AirportMeet&Greet": "Airport Meet & Greet",
      "AirportMeet&GreetDesc": `Imagine stepping into the bustling world of an international airport, where the hum of activity can feel overwhelming. But instead of being swept into the chaos, you're greeted with a warm smile and the promise of effortless travel. This is the essence of the Excellence Airport Meet & Greet service a sanctuary of ease, comfort, and luxury amidst the complexities of modern air travel.

                  From the moment you arrive, a dedicated representative becomes your guide, expertly navigating the labyrinth of the airport. Whether it is your first flight or your hundredth, their knowledge and care make every step feel effortless. Long lines become a distant memory as you glide through fast-track processing, bypassing the usual delays with grace.

                  As you move through the airport, the service transforms each transition into a moment of calm. Check-in is no longer a chore, security checks feel less daunting, and even the busiest terminals seem to slow down just for you. For those in transit, the service ensures that tight connections are met with precision and ease, turning what could be a stressful layover into an opportunity to relax.

                  The journey doesnt end at the gate. Whether you're departing, arriving, or simply passing through, the Meet & Greet service is tailored to your every need, ensuring that no detail is overlooked. It is not just about getting to your destination, it is about how you feel along the way: relaxed, cared for, and completely at ease.

                  With Excellence Airport Meet & Greet, air travel transforms from a logistical challenge into a luxurious experience, where every moment is designed to leave you feeling like a priority. It is not just a service; it is a story of effortless journeys and unforgettable care. `,

      "DearCustomer": "Dear Customer",
      
      "WelcomeAbroad": "Welcome Abroad",

      "ExploreOurMeet&GreetServices": "Explore Our Meet & Greet Services",

      //////Services  /////VIPTerminal

      "AirportVIPTerminal": "Airport VIP Terminal",
      "AirportVIPTerminalDesc": `Picture a journey that begins not in the crowded halls of a busy airport, but in the serene
                  exclusivity of a private terminal a space reserved for those who seek both privacy and efficiency. The VIP Terminal Service redefines air travel,
                  offering a seamless and tranquil experience that lets you focus on what matters most: your comfort and peace of mind.

                  From the moment you arrive, you're welcomed into an oasis of calm. Far from the hustle and bustle, this private terminal is your gateway to a more
                  refined way of traveling. Here, every detail has been curated for your convenience, starting with personalized assistance that handles all airport
                  procedures on your behalf. Security checks, immigration, and customs tasks that often demand your time and patience are quietly managed behind the scenes,
                  leaving you free to relax.

                  As you settle into the plush surroundings of the terminal, the stress of traditional travel fades away.
                  A dedicated team ensures every aspect of your journey is perfectly orchestrated, from luggage handling to last-minute requests.


                  Whether you're catching up on work, enjoying a quiet moment, or savoring a refreshment, the experience is tailored entirely to you.

                  And when it's time to board, the journey continues with seamless precision. A private transfer whisks you directly to your aircraft,
                  bypassing the crowded gates and queues. Every step is designed to protect your time, your privacy, and your sense of ease.

                  The VIP Terminal Service isn't just an upgrade; it's a reimagining of what travel can be. It's a promise of exclusivity,
                  a commitment to personalization, and an experience where the ordinary is replaced with the extraordinary. From start to finish,
                  it's air travel as it was always meant to be luxurious, effortless, and uniquely yours. `,

      "ExploreOurVIPTerminalServices": "Explore Our VIP Terminal Services",


      "YourName": "Your Name",
      "Welcome Back, Traveler": "",
      "YourEmail": "",
      "Password": "",
      "ConfirmPassword": "",
      "Select": "",
      "Phone Number": "",
      "Cancel": "",



    },
  },

  fr: {
    translation: {

      ///// NavBar
      "ExcellenceAirport": "Excellence Airport",
      "Home": "Accueil",
      "VIPTerminal": "Terminal VIP",
      /////
      "ChauffeurDrivenTransfers": "Transferts avec chauffeur",
      "ChauffeurDrivenTransferss": "Transferts avec chauffeur",

      /////
      "FleetCars": "Flotte de voitures",
      "BookAService": "Réservation",

      /////// translate to french these
      "AvailableVehicles": "Véhicules disponibles",
      "CarModels": "Modèles de voitures",
      "AboutUs": "À propos de nous",
      "CompanyHistory": "Histoire de l'entreprise",
      "Values&MissionStatements": "Valeurs et missions",
      "Terms&Policies": "Conditions et politiques",
      "ContactUs": "Contactez nous",
      "ContactForm": "Forum du Contact",
      "SupportContactDetails": "Coordonnées d'assistance",
      "UserAccount": "Compte",
      "Profile": "Profile",
      "BookingHistory": "Historique des réservations",
      "PaymentMethods": "Méthodes de paiment",
      //////
      "BookService": "Réserver une service",





      ///Footer
      "Company": "Entreprise",
      "Booking": "Réservation",
      "PrivacyPolicy": "Politique de confidentialité",
      "Terms&Condition": "Conditions générales",
      "Contact": "Contact",
      "9StreetJean": "9 Rue Jean-Jacques Rousseau",
      "Opening": "Ouverture",
      "MondaySaturday": "Lundi - Samedi",
      "Sunday": "Dimanche",
      "AllRightReserved.": "Tous droits réservés.",




      /////HomePage
      "EnjoyMessage": "Profitez de notre service professionnel",
      "TravelingMessage": "Voyager, c'est passer du temps magnifique et se concentrer uniquement sur les choses importantes. Laissez-nous nous occuper des détails pendant que vous profitez du voyage.",
      "MeetDesc": "Le service Meet & Greet  assure que chaque voyageur qui essai l'expérience de la simplicité, du comfort et du luxe lors de sa traversée de l'aéroport",
      "ProfesionalDrivers": "Chauffeurs professionnels",
      "DriversDesc": "le service des chauffeurs professionnels combine le comfort, la professionnalisme et le style pour répondre aux besoins des clients, les affaires ou les loisirs.",
      "VIPDesc": "Le service du Terminal VIP fournit aux voyageurs un accès exclusif aux terminaux privés où toutes les procédures de l'aéroport sont traitées en leur nom.",
      "24/7Service": "Service 24/7",
      "24/7ServiceDesc": "Jour ou nuit, où que vous soyez allé, nous sommes là 24h/24, guidant votre voyage avec soin et comfort. Votre satisfaction est notre priorité",
      "AboutUs": "A propos",
      "Welcometo": "Bienvenue à",
      "WelcomeDesc1": "Excellence Airport est un services de premier plan avec plus de deux décennies d'expertise dans l'industrie du voyage.",
      "WelcomeDesc2": "Sa réputation est fondée sur l'offre de services d'assistance aéroportuaire de première classe, y compris les services d'accueil et de départ, l'accès au terminal VIP, les transferts avec chauffeur et les solutions de fast track. Avec une flotte de plus de 50 véhicules de luxe, nous améliorons l'expérience de voyage en combinant l'efficacité, la personnalisation et le comfort.",
      "YearsOf": "Années de",
      "Experience": "Expérience",
      "luxurious": "luxueux",
      "ReadMore": "En savoir plus",
      "Services": "Services",
      "OurServices": "Nos Services",
      "Arrival": "Arrivée",
      "Departure": "Départ",
      "Transit": "Transit",
      "Meeting": "Réunion",
      "MeetingDesc": "L'agent rencontre les passagers à l'extrémité de l'aéroport avec un tableau de nom personnalisé.",
      "FastTrack": "Fast Track",
      "FastTrackDesc": "Les passagers sont escortés à travers les voies de passage rapide d'immigration pour minimiser les temps d'attente.",
      "EscortingPassengersInside": "Escorte des passagers à l'intérieur de l'aéroport",
      "EscortingPassengersDesc": "Escorte des passagers vers leur mode de transport vers l'arrivée ou le hall d'arrivée.",
      "EscortingPassengersOutside": "Escorte des passagers à l'extérieur de l'aéroport",
      "EscortingPassengersOutsideDesc": "Escorte des passagers vers leur point de transport convenu.",
      "HandlingAirportFormalities": "Traitement des formalités de l'aéroport",
      "HandlingAirportFormalitiesDesc": "Un agent dédié gère toutes les formalités de l'aéroport, y compris l'immigration et les douanes.",
      "HandlingLugguage": "Gestion de la valise",
      "HandlingLugguageDesc": "La valise est livrée directement au terminal VIP.",
      "TransportToVIPTerminal": "Transport vers le terminal VIP",
      "TransportToVIPTerminalDesc": "Transport en voiture de luxe depuis l'avion au terminal VIP.",
      "Coordination": "Coordination",
      "CoordinationDesc": "La coordination commence avant que les passagers arrivent à l'aéroport, avec des agents qui organisent les réunions à la porte de l'aéroport et des services de portier pré-organisés pour l'assistance à la valise.",

      //////////////////////

      "PersonalizedCoordination": "Coordination personnalisée",
      "PersonalizedCoordinationDesc": "Coordination personnalisée de l'heure et du lieu de dépôt avec l'agent désigné avant l'arrivée.",
      "FastTrackLanes": "Voies rapides",
      "FastTrackLanesDesc": "Des voies rapides sont utilisées pour le check-in, la sécurité et le contrôle des passeports, ce qui garantit l'efficacité.",
      "EscortingPassengers": "Accompagner les passagers",
      ///////////
      "EscortingPassengersDesc": "Si cela est prévu, les passagers sont escortés jusqu'à la salle de départ, puis directement jusqu'à la porte de départ.",
      "Combination": "Combinaison",
      "CombinationDesc": "Accueil sur le trottoir, assistance pour les bagages et enregistrement accéléré.",
      "Security": "Sécurité",
      "SecurityDesc": "La sécurité et le contrôle des passeports sont assurés dans le terminal VIP.",
      "ChauffeurService": "Service de chauffeur",
      "ChauffeurServiceDesc": "Service de chauffeur jusqu'à l'avion s'il se trouve sur un stand éloigné",
      /////////////////////////////////////////
      
      /////Completezzzzz////////////////
   
      "BoardingGate": "Boarding gate",
      "BoardingGateDesc":"Passengers are escorted to the departure lounge, if arranged, and then directly to the boarding gate.",
      
      ///////////////FInish//////////////////

      ///////////////////////////////////
      "Meett": "Rencontrer",
      "MeettDesc": "Les agents rencontrent les passagers à l'aide d'un panneau nominatif au passerelle aérienne.",
      "Assist": "Assister",
      "AssistDesc": "Une assistance est proposée pour la récupération des bagages, si nécessaire, et des services de portage, s'ils ont été réservés à l'avance.",
      "FastTrackk": "Voie rapide",
      "FastTrackkDesc": "Les formalités de sécurité et d'immigration font l'objet d'un accès accéléré, ce qui garantit une transition en douceur.",
      "DepartureToBoardingGate": "Départ vers la porte d'embarquement",
      "DepartureToBoardingGateDesc": "Les passagers sont guidés vers la salle de départ, si elle est réservée, ou vers la porte d'embarquement.",
      "ChauffeurrService": "Chauffeur service",
      "ChauffeurrServiceDesc": "Service de chauffeur de l'avion au terminal VIP pour une escale relaxante.",
      "ChauffeurTransport": "Transport avec chauffeur",
      "ChauffeurTransportDesc": "Transport par chauffeur jusqu'à l'avion pour la suite du voyage.",
      "AssistanceWithLuggage": "Assistance pour les bagages à main",
      "AssistanceWithLuggageDesc": "ssistance pour les bagages à main et les sacs à main légers.",
      "BookAServiceOnline": "Réserver un service en ligne",
      "YourName": "Votre Nom",
      "YourEmail": "Votre Email",
      "Date&Time": "Date et heure",
      "People1": "Personne 1",
      "People2": "Personne 2",
      "People3": "Personne 3",
      "NoOfPeople": "No De Personne",
      "FlightDetails": "Détailles de vols",
      "SpecialRequest": "Demande spéciale",
      "BookNow": "Réserver Maintenant",
      "TeamMembers": "Membres de l'équipe",
      "OurDrivers": "Nos chauffeurs",
      ////////

      ////About //Company

      "CompanyHistory": "Company History",
      "WelcomeToAbout1": "A l'Excellence Airport, nous sommes spécialisés dans la transformation du voyage chaotique en une expérience fluide et luxueuse. Situés dans différents aéroports, nos services d'accueil VIP sont fournis à les aéroportes Roissy Charles de Gaulle, CDG, ORY, NCE, LYS, BOD, MRS, TLS, MPL, LHR, TLV. Nos services s'adressent à des voyageurs exigeants qui apprécient l'intimité, l'efficacité et les soins personnalisés. Qu'il s'agisse de cadres d'entreprise ou de voyageurs d'agrément, nous garantissons que chaque voyage commence et se termine en toute simplicité.",
      "WelcomeToAbout2": "Fondée par Benjamin Slama, Excellence Airport s'est développée depuis 15 ans pour devenir le symbole des services aéroportuaires VIP. Notre équipe multilingue, qui parle couramment le français, l'anglais et l'espagnol, se consacre à anticiper vos besoins et à dépasser vos attentes, en vous offrant une attention et un soin inégalés à chaque étape du processus.",
      "Excellence": "Excellence",
      "Luxury": "De luxe",
      "Vehicles": "Voitures",
      "AboutDesc1": "Nous sommes fiers de proposer une série complète de services haut de gamme, notamment l'accueil des VIP, les transferts avec chauffeur et l'accès à des terminaux privés exclusifs. Chaque service est conçu pour simplifier les procédures aéroportuaires et vous permettre de profiter d'un voyage fluide et sans stress. Qu'il s'agisse d'une procédure d'immigration accélérée, d'un transport de luxe ou de l'accès à un terminal privé, nous accordons une attention toute particulière aux détails.",
      "AboutDesc2": "Notre flotte de plus de 50 véhicules de luxe répond à toutes les préférences, y compris des modèles Mercedes-Benz (Class-E, Class-S et Class-V), avec des options supplémentaires telles que Maybach, Rolls Royce et Range Rover disponibles sur demande. Chaque transfert est géré par un chauffeur professionnel, qui possède l'expertise locale nécessaire pour améliorer votre voyage.",
      "Address": "Addresse:",
      "AddressDesc": "9 rue Jean-Jacques Rousseau, 95350 Saint-Brice-sous-Forêt, France",
      "AboutDesc3": "Chez Excellence Airport, nous sommes déterminés à redéfinir les voyages en aéroport en combinant innovation, luxe et service personnalisé. Rejoignez les innombrables clients du monde entier qui nous font confiance pour leur offrir une expérience aéroportuaire inégalée.",
      "OurProfessionalDrivers": "Nos chauffeurs professionnels",


      ////About ///Team

      "OurTeam": "Notre équipe",
      "Team": "Equipe",
      "TeamMembers": "Membres d'équipes",
      "OurLovelyTeam": "Notre formidable équipe",

      ///// About ///Terms

      "Commitment": "Notre engagement en termes de transparence et de confiance",
      "CommitmentDes": "Chez Excellence Airport, nous privilégions la transparence, la sincérité et le respect mutuel dans nos relations avec nos clients. Nos conditions et politiques sont conçues pour assurer une expérience fluide et fiable, reflétant notre engagement indéfectible à la fois pour le professionnalisme et la satisfaction de nos clients.",
      "ReservationAndPaymentTerms": "Conditions de réservation et de paiement",
      "ReservationAndPaymentTermsDesc": "Afin de fournir un service de qualité, toutes les réservations doivent faire l'objet d'un bon de commande signé et d'un acompte de 50 %. Les paiements doivent être effectués sans délai, conformément aux conditions convenues, afin d'assurer une prestation de services souple et ininterrompue. Les factures sont payables à notre siège social : 9 Rue Jean-Jacques Rousseau, 95350 Saint-Brice-sous-Forêt.",
      "DisputeResolutionandLatePayments": "Résolution des conflits et retards de paiement",
      "DisputeResolutionandLatePaymentsDesc": "Nous comprenons que des problèmes peuvent parfois survenir. Toute réclamation concernant les services doit être soumise par écrit dans les huit jours suivant la réception de la facture. En cas de retard de paiement, des intérêts seront appliqués à raison de 1 % par mois, et des pénalités supplémentaires pourront être imposées conformément à nos politiques. Ces mesures garantissent l'équité et la responsabilité des deux parties.",
      "LegalFramework": "Le cadre juridique",
      "LegalFrameworkDesc": "Nos activités sont régies par le droit français, ce qui garantit un cadre solide et transparent pour toutes les transactions. Tout litige est soumis à la juridiction exclusive des tribunaux de commerce de Pontoise, ce qui offre une voie de résolution claire.",
      "CommitmentDes2": "Excellence Airport s'engage à fournir un service exceptionnel tout en respectant les normes éthiques et légales. Ces conditions et politiques ne sont pas de simples lignes directrices, elles représentent notre dévouement à l'intégrité et à la confiance dans tous les aspects de nos opérations.",


      //// About ////Values

      "OurGuidingPrinciples": "Nos principes fondamentaux",
      "OurGuidingPrinciplesDesc": " Chez Excellence Airport, nous considérons que tout voyage commence par une expérience exceptionnelle. Notre mission est de redéfinir les voyages en aéroport en offrant des services haut de gamme, personnalisés et transparents qui garantissent le comfort, l'efficacité et le luxe pour chaque voyageur. Dès votre arrivée, notre équipe se consacre à simplifier les complexités du voyage aérien moderne, en offrant des solutions innovantes qui combinent le professionnalisme et l'attention sincère.",
      "OurValues": "Nos valeurs sont la pierre fondatrice de notre engagement en faveur de l'excellence.",
      "CustomerCentric": "Approche axée sur le client",
      "CustomerCentricDesc": "Nous adaptons nos services aux besoins uniques de chaque voyageur, que ce soit pour les affaires ou les loisirs, afin de garantir une expérience personnalisée et mémorable.",
      "ExcellenceInService": "L'excellence dans le service",
      "ExcellenceInServiceDesc": "Notre professionnalisme et notre attention aux détails garantissent des expériences de premier ordre, sans compromis.",
      "GlobalAccessibility": "Accessibilité globale",
      "GlobalAccessibilityDesc": "Avec une assistance multilingue en français, anglais et espagnol, nous favorisons l'inclusion et assurons une communication fluide pour notre clientèle diversifiée.",
      "CommitmenToPrivacy": "Engagement en faveur de la confidentialité et de l'efficacité",
      "CommitmenToPrivacyDesc": "Conçus pour ceux qui privilégient la confidentialité et le temps, nos services VIP, y compris l'accès privé aux terminaux et les transferts avec chauffeur, offrent une commodité inégalée.",
      "SustainabilityAndResponsibility": "Durabilité et responsabilité",
      "SustainabilityAndResponsibilityDesc": "Nous adhérons à des pratiques éthiques et donnons la priorité à la sécurité et au bien-être de nos clients et de notre équipe, tout en nous efforçant d'assurer la durabilité à long terme.",
      "ValuesConclusion": "Ces valeurs nous définissent et guident chacune de nos décisions. Excellence Airport n'est pas un simple prestataire de services, nous sommes votre partenaire de confiance pour que votre voyage soit aussi remarquable que votre destination.",
      "Motto": "Laissez-nous gérer les détails pendant que vous profitez du voyage",


      ////Contact us //// Contact Form


      "ContactQuery": "Contact pour toute question",
      "General": "Général",
      "Technical": "Technique",
      "SendMessage": "Envoyer un message",
      "Subject": "Sujet",
      "Message": "Message",
      "or" : "ou",



      //////// Support Contact

      "ContactInformation": "Informations sur le contact",
      "Reach": "Nous contacter",
      "ReachDesc": "Chez Excellence Airport, nous croyons en une communication ouverte et efficace avec nos clients et partenaires. Que ce soit pour une demande de renseignements, d'assistance ou de collaboration, notre équipe est toujours disponible pour vous apporter son soutien et faire en sorte que votre expérience avec nous soit sans faille.",
      "DirectorOfPublication": "Directeur de la publication",
      "DirectorOfPublicationDesc": "Les opérations et le contenu d'Excellence Airport sont supervisés par notre estimé directeur de publication, Benjamin Slama, qui veille à ce que nos communications respectent les normes les plus strictes en matière de clarté et de professionnalisme.",
      "EmailDesc1": "Pour des questions d'ordre général, des commentaires ou des informations détaillées sur nos services, n'hésitez pas à nous contacter à l'adresse suivante",
      "EmailDesc2": "Notre équipe dévouée répond rapidement à vos besoins.",
      "Phone": "Téléphone",
      "PhoneDesc1": "Vous avez besoin d'une assistance immédiate ou souhaitez discuter d'un service en détail ? Contactez-nous directement à l'adresse suivante",
      "PhoneDesc2": " Nos représentants sont prêts à vous assister pour toutes vos questions.",
      "PhysicalAddress": "Adresse physique",
      "PhysicalAddressDesc1": "Nous rendre visite ou échanger avec nous au siège de l'entreprise",
      "PhysicalAddressDesc2": "Ici, Nous coordonnons nos services haut de gamme pour des clients du monde entier.",
      "RCSRegistration": "Inscription au RCS",
      "RCSRegistrationDesc1": "En tant qu'entreprise enregistrée, Excellence Airport se conforme à toutes les exigences légales et réglementaires applicables. Notre numéro d'enregistrement est le suivant",
      "RCSRegistrationDesc2": "soulignant notre engagement en matière de transparence et de fiabilité.",
      "HostingProvider": "Fournisseur d'hébergement",
      "HostingProviderDesc1": "Le site web et les services en ligne de l'aéroport d'Excellence sont hébergés par",
      "HostingProviderDesc2": "un fournisseur d'hébergement fiable garantissant des performances, une sécurité et une accessibilité solides pour nos plateformes numériques.",




      ////Fleeet Cars /////Available Cars

      "AboutCars": "A propos de nos voitures disponibles",
      "AboutCars2": "Les transferts avec le chauffeur de l'aéroport d'Excellence garantissent une commodité inégalée avec une large sélection de véhicules disponibles pour répondre aux besoins de chaque voyageur. Que vous ayez besoin d'une voiture économique pour un voyage rapide, d'une berline de luxe pour une ambiance luxueuse ou d'un van spacieux pour un voyage de groupe, la flotte est toujours prête à répondre à votre demande. Avec des véhicules disponibles 24h/24, les voyageurs peuvent profiter d'une prise en charge à l'aéroport, d'une dépose et d'un transfert interurbain sans se soucier des horaires. Quelle que soit l'heure ou la destination, votre voiture est toujours prête, garantissant un voyage fiable et sans stress.",
      "Fleet": "Flotte",
      "OurAvailableCars": "Nos voitures disponibles",
      "Class": "Classe",


      ////Fleet Cars ///// Car Models

      "AboutOurCarModels": "A propos de nos modèles de voitures",
      "AboutOurCarModelsDesc": "Excellence Airport est fier de proposer une flotte prestigieuse de plus de cinquante véhicules de luxe, méticuleusement maintenus et gérés par une équipe logistique qualifiée et dévouée à la fourniture d'un service sans faille. Au cœur de notre collection se trouvent les modèles classiques de Mercedes-Benz, notamment l'élégante Classe-E, la Classe-S sophistiquée et la Classe-V spacieuse et polyvalente, chacune conçue pour offrir un comfort et des performances inégalés en toute occasion. Pour ceux qui recherchent une expérience encore plus opulente, nos options de véhicules exclusifs comprennent des noms de renommée mondiale tels que Maybach, Rolls Royce, et Range Rover, disponibles sur demande. Que ce soit pour les affaires, les loisirs ou un événement spécial, notre flotte polyvalente et notre équipe attentive veillent à ce que votre expérience de voyage ne soit rien de moins qu'exceptionnelle.",
      "OurCarModels": "Nos modèles de voitures",
      "FirstCategory": "Première catégorie",
      "SecondCategory": "Deuxiéme catégorie",
      "ThirdCategory": "Troisiéme catégorie",




      //////Services  /////Chauffeur

      "AirportChauffeurDrivenTransfers": "Transferts aéroportuaires avec chauffeur",
      "AirportChauffeurDrivenTransfersDesc1": `Imaginez que vous débarquiez d'un vol et que vous pénétriez dans un monde où chaque détail de votre transport est géré de manière transparente, où l'efficacité rencontre l'élégance et où votre voyage est aussi raffiné que votre destination,
            Excellence Airport Chauffeur-Transferts transforme le voyage en une expérience de luxe, conçue pour ceux qui exigent plus qu'un simple trajet, ils recherchent une extension de leur comfort et de leur style.
                  
            Que vous voyagiez pour les affaires ou les loisirs, ces transferts sont conçus pour vous. Votre emploi du temps devient la priorité,
            vous permettant de vous concentrer sur ce qui compte le plus tout en profitant du service impeccable qui caractérise Excellence Airport. Chaque voyage commence
            avec un véhicule choisi spécifiquement pour vos besoins, qu'il s'agisse d'une option économique pour la praticité, d'une berline de luxe pour l'indulgence,
            ou d'un transport spacieux pour les groupes. Chaque véhicule est méticuleusement entretenu afin d'assurer un trajet en douceur et en toute sécurité.

            Au cœur du service, les chauffeurs sont bien plus que des chauffeurs quotidiens : ce sont des compagnons compétents. Grâce à leur expertise locale et à leur connaissance approfondie de la culture de la région, ils sont en mesure de vous accompagner.
            Ils possèdent une expertise locale et une connaissance approfondie de la culture, les sites touristiques et les habitudes de la région,  ce qui ajoute une dimension enrichissante à votre voyage. Que vous naviguiez dans une
            ville animée, que vous vous rendiez à une réunion d'affaires importante ou que vous exploriez des joyaux cachés hors des sentiers battus, leurs connaissances rendent chaque kilomètre mémorable.

            La flexibilité est la clé de l'expérience Excellence Airport. Les réservations d'une journée entière vous permettent de profiter de la liberté d'explorer des zones inconnues à votre rythme ou d'assister à plusieurs engagements sans avoir à organiser un transport séparé.
            à votre rythme ou d'assister à plusieurs engagements sans avoir à organiser un transport séparé. Du lever au coucher du soleil et au-delà,
            le service s'adapte sans effort à vos projets.

            Et lorsqu'il s'agit de pick-ups à l'aéroport, drop-offs ou d'effectuer des transferts intercité, le service fonctionne 24/24h, vous assurant de ne jamais être laissé  en attente.
            Chaque trajet commence à l'heure et se termine avec la même fiabilité, offrant un sentiment de continuité qui complète l'excellence que vous attendez.

            Les transferts avec chauffeur service de l'aéroport Excellence redéfinissent ce que signifie voyager . Plus qu'un service, c'est une expérience qui allie la pratique à la perfection,
             transformant chaque trajet en un chapitre sans faille de votre histoire de voyage.`,

      
      "LetsTakeARide": "Allons-y faire un tour",
      "ExploreOurChauffeurDrivenFeatures": "Découvrez nos services de transport avec chauffeur",
      "ExploreAvailableFleetNow": "Explorez notre flotte de voitures disponibles pour le moment.",
      "ExploreVarietyCarModels.": "Découvrez notre variété de modèles de voitures de flotte.",

      //////Services  /////Meet&Greet

      "AirportMeet&Greet": "Meet & Greet à l'aéroport Meet & Greet",
      "AirportMeet&GreetDesc": `Imaginez que vous pénétrez dans l'univers trépidant d'un aéroport international, où le bourdonnement de l'activité peut sembler écrasant. Mais au lieu d'être emporté par le chaos, vous êtes accueilli par un sourire chaleureux et la promesse d'un voyage sans effort. Telle est l'essence du service Excellence Airport Meet & Greet, un sanctuaire de facilité, de confort et de luxe au milieu des complexités du voyage aérien moderne.

            Dès votre arrivée, un représentant dévoué devient votre guide, naviguant avec expertise dans le dédale de l'aéroport. Qu'il s'agisse de votre premier vol ou de votre centième, leurs connaissances et leur attention vous permettent de franchir chaque étape sans effort. Les longues files d'attente ne sont plus qu'un lointain souvenir lorsque vous passez par la procédure accélérée, contournant avec grâce les retards habituels.

            À chaque étape de la traversée de l'aéroport, le service transforme chaque transition en un moment de calme. L'enregistrement n'est plus une corvée, les contrôles de sécurité sont moins intimidants et même les terminaux les plus fréquentés semblent ralentir juste pour vous. Pour ceux qui sont en transit, le service garantit que les correspondances serrées sont respectées avec précision et facilité, transformant ce qui pourrait être une escale stressante en une occasion de se détendre.
            
            Le voyage ne s'arrête pas à la porte d'embarquement. Que vous soyez en partance, à l'arrivée ou simplement de passage, le service d'accueil est adapté à vos besoins et ne néglige aucun détail. Il ne s'agit pas seulement d'arriver à destination, mais aussi de se sentir relaxé, pris en charge et à l'aise tout au long du trajet.
            
            Avec Excellence Airport Meet & Greet, le voyage aérien passe d'un défi logistique à une expérience luxueuse, où chaque instant est conçu pour que vous vous sentiez comme une priorité. Ce n'est pas seulement un service, c'est l'histoire d'un voyage sans effort et d'une prise en charge inoubliable. `,

      "DearCustomer": "Cher client",
      
      "WelcomeAbroad": "Bienvenue",
      
      "ExploreOurMeet&GreetServices": "Découvrez nos services de Meet & Greet",

      //////Services  /////VIPTerminal

      "AirportVIPTerminal": "Terminal VIP de l'aéroport",
      "AirportVIPTerminalDesc": `Imaginez un voyage qui commence non pas dans les couloirs bondés d'un aéroport, mais dans l'exclusivité sereine d'un terminal privé, un espace réservé à ceux qui recherchent à la fois la confidentialité et l'efficacité.
             Le service VIP Terminal redéfinit le voyage aérien,
            Il vous offre une expérience transparente et tranquille qui vous permet de vous concentrer sur ce qui compte le plus : votre confort et votre tranquillité d'esprit.
      
             Dès votre arrivée, vous êtes accueilli dans une oasis de calme. Loin de l'agitation, ce terminal privé est votre porte d'entrée vers un mode de voyage plus raffiné.
             Ici, chaque détail a été pensé pour votre comfort, à partir d'une assistance  personnalisée qui s'occupe de toutes les procédures de l'aéroport en votre nom.
             Les procédures de contrôle de sécurité, d'immigration et de douane, qui requièrent souvent votre temps et votre patience, sont gérées en toute tranquillité ce qui vous permet de vous détendre,

            Lorsque vous vous installez dans le cadre luxueux du terminal, le stress du voyage traditionnel s'estompe.
            Une équipe dévouée veille à ce que chaque aspect de votre voyage soit parfaitement orchestré, de la manutention des bagages aux demandes de dernière minute.


            Que vous soyez en train de travailler, de profiter d'un moment de calme ou de savourer un rafraîchissement, l'expérience est entièrement adaptée à vos besoins.
            
            Et lorsqu'il est temps d'embarquer, le voyage se poursuit avec une précision sans faille. Un transfert privé vous conduit directement à votre avion,
            en évitant les portes d'embarquement et les files d'attente. Chaque étape est conçue pour protéger votre temps, votre intimité et votre sentiment d'aisance.

            Le service VIP Terminal n'est pas seulement une mise à niveau, c'est une réimagination de ce que le voyage pourrait être. C'est une promesse d'exclusivité,
            un engagement de personnalisation et une expérience où l'ordinaire est remplacé par l'extraordinaire. Du début à la fin,
            c'est le voyage aérien tel qu'il a toujours été conçu, luxueux, sans effort et unique en son genre.  `,

      "ExploreOurVIPTerminalServices": "Découvrez nos services de terminaux VIP",






    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });



// i18n
//   .use(Backend)

//   .use(LanguageDetector)
//   .use(initReactI18next)

//   .init({
//     lng: 'en',
//     fallbackLng: 'en',
//     debug: true,

//     interpolation: {
//       escapeValue: false, 
//     }
//   });


export default i18n;