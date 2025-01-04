import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';



const resources = {
  en: {
    translation: {

      // NavBar //
      "ExcellenceAirport": "Excellence Airport",
      "Home": "Home",
      "Services": "Services",
      "Meet&Greet": "Meet & Greet",
      "VIPTerminal": "VIP Terminal",
      "ChauffeurDrivenTransfers":"Chauffeur-driven Transfers",
      "FleetCars": "Fleet Cars",
      "AvailableVehicles": "Available vehicles",
      "CarModels": "Car Models",
      "AboutUs": "About Us",
      "CompanyHistory&Team": "Company History & Team",
      "Values&MissionStatements": "Values & mission statements",
      "Terms&Policies": "Terms & policies",
      "ContactUs": "Contact Us",
      "ContactForm": "Contact Form",
      "SupportContactDetails" :"Support Contact Details",
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
      "Transition": "Transition",
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
      "HandlingLugguage": "vHandling lugguage",
      "HandlingLugguageDesc": "Luggage is delivered directly to the VIP terminal.",
      "TransportToVIPTerminal": "Transport to VIP terminal",
      "TransportToVIPTerminalDesc":"Chauffeur-driven transport from the aircraft to the VIP terminal.",
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
      "ChauffeurServiceDesc":"Chauffeur service to the aircraft if it is on a remote stand.",
      "Meett": "Meet",
      "MeettDesc": "Agents meet passengers with a name board at the airbridge or terminal.",
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
      "AssistanceWithLuggage":"Assistance with luggage",
      "AssistanceWithLuggageDesc": "Assistance with luggage and airport formalities.", 
      "BookAServiceOnline": "Book A Service Online",
      "YourName": "Your Name",
      "YourEmail": "Your Email",
      "Date&Time": "Date & Time",
      "People1": "People 1",
      "People2": "People 2",
      "People3": "People 3",
      "NoOfPeople": "No Of People",
      "SpecialRequest": "Special Request",
      "BookNow": "Book Now",
      "TeamMembers": "Team Members",
      "OurDrivers": "Our Drivers",


      /////About // Company History

      


      "CompanyHistory": "Company History",
      "WelcomeToAbout1": "At Excellence Airport, we specialize in transforming the chaos of travel into a seamless and luxurious experience. Strategically located at Roissy Charles de Gaulle Airport, our services cater to discerning travelers who value privacy, efficiency, and personalized care. From business executives to leisure travelers, we ensure every journey begins and ends with ease.",
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
      "ReservationAndPaymentTermsDesc":"To provide the highest quality of service, all bookings require a signed purchase order and a 50% deposit upfront. Payments are to be made promptly, in line with the agreed terms, ensuring smooth and uninterrupted service delivery. Invoices are payable at our headquarters: 9 Street Jean-Jacques Rousseau, 95350 Saint-Brice-sous-Forêt.",
      "DisputeResolutionandLatePayments": "Dispute Resolution and Late Payments",
      "DisputeResolutionandLatePaymentsDesc":"We understand that issues may occasionally arise. Any claims regarding services must be submitted in writing within eight days of receiving an invoice. For late payments, interest will be applied at a rate of 1% per month, and additional penalties may be imposed as stipulated in our policies. These measures ensure fairness and accountability on both sides.",
      "LegalFramework": "Legal Framework",
      "LegalFrameworkDesc": "Our operations are governed by French law, ensuring a robust and transparent framework for all transactions. Any disputes will fall under the exclusive jurisdiction of the Pontoise Commercial Courts, providing a clear pathway for resolution.",
      "CommitmentDes2": "Excellence Airport stands by its commitment to delivering exceptional service while adhering to ethical and legal standards. These terms and policies are not just guidelines; they embody our dedication to integrity and trust in every aspect of our operations.",
      


      //// About ////Values

      "OurGuidingPrinciples": "Our Guiding Principles",
      "OurGuidingPrinciplesDesc":" At Excellence Airport, we believe that every journey begins with an exceptional experience. Our mission is to redefine airport travel by providing high-end, personalized, and seamless services that ensure comfort, efficiency, and luxury for every traveler. From the moment you arrive, our team is dedicated to simplifying the complexities of modern air travel, offering innovative solutions that blend professionalism with genuine care.",
      "OurValues":"Our values are the cornerstone of our commitment to excellence",
      "CustomerCentric": "Customer-Centric Approach:",
      "CustomerCentricDesc": "We tailor our services to meet the unique needs of each traveler, whether for business or leisure, ensuring a personalized and memorable experience.",
      "ExcellenceInService": "Excellence in Service",
      "ExcellenceInServiceDesc":" Our dedication to professionalism and attention to detail guarantees consistently top-tier experiences, leaving no room for compromise.",
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
      "PhoneDesc2": "Our representatives are ready to assist you with any query.",
      "PhysicalAddress": "Physical Address",
      "PhysicalAddressDesc1": "Visit or correspond with us at our headquarters",
      "PhysicalAddressDesc2": "we coordinate our premium services for clients worldwide.",
      "RCSRegistration": "RCS Registration",
      "RCSRegistrationDesc1": "As a registered company, Excellence Airport adheres to all applicable legal and regulatory requirements. Our registration number is",
      "RCSRegistrationDesc2": "underscoring our commitment to transparency and trustworthiness.",
      "HostingProvider": "HostingProvider",
      "HostingProviderDesc1": "Excellence Airport's website and online services are hosted by",
      "HostingProviderDesc2": "a reliable hosting provider ensuring robust performance, security, and accessibility for our digital platforms.",




    },
  },

  fr: {
    translation: {

      ///// NavBar
      "ExcellenceAirport": "Excellence Airport",
      "Home": "Accueil",
      "VIPTerminal": "Terminal VIP",
      /////
      "ChauffeurDrivenTransfers":"Transferts avec chauffeur",
      /////
      "FleetCars": "Flotte de voitures",

      /////// translate to french these
      "AvailableVehicles": "Véhicules disponibles",
      "CarModels": "Modèles de voitures",
      "AboutUs": "À propos de nous",
      "CompanyHistory&Team": "Histoire de l'entreprise et équipe",
      "Values&MissionStatements": "Valeurs et missions",
      "Terms&Policies": "Conditions et politiques",
      "ContactUs": "Contactez nous",
      "ContactForm": "Forum du Contact",
      "SupportContactDetails" :"Coordonnées d'assistance",
      "UserAccount": "Compte",
      "Profile": "Profile",
      "BookingHistory": "Historique des réservations",
      "PaymentMethods": "Méthodes de paiment",
      //////
      "BookService": "Réserver une service",





      ///Footer
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
      "MeetDesc": "Le service d'accueil à Excellence airport assure que chaque voyageur qui essai l'expérience de la simplicité, du comfort et du luxe lors de sa traversée de l'aéroport",
      "ProfesionalDrivers": "Chauffeurs professionnels",
      "DriversDesc": "Excellence Airport Driven Transfers combine comfort, professionnalisme et style pour répondre aux besoins des clients , que ce soit pour les affaires ou les loisirs.",  
      "VIPDesc": "Le service VIP Terminal fournit aux voyageurs un accès exclusif aux terminaux privés où toutes les procédures de l'aéroport sont traitées en leur nom.",
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
      "Transition": "Transition",
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
      "ChauffeurServiceDesc":"Service de chauffeur jusqu'à l'avion s'il se trouve sur un stand éloigné",
      "Meett": "Rencontrer",
      "MeettDesc": "Les agents rencontrent les passagers à l'aide d'un panneau nominatif au passerelle aérienne ou au terminal.",
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
      "AssistanceWithLuggage":"Assistance pour les bagages",
      "AssistanceWithLuggageDesc": "Assistance pour les bagages et les formalités aéroportuaires.", 
      "BookAServiceOnline": "Réserver un service en ligne",
      "YourName": "Votre Nom",
      "YourEmail": "Votre Email",
      "Date&Time": "Date et heure",
      "People1": "Personne 1",
      "People2": "Personne 2",
      "People3": "Personne 3",
      "NoOfPeople": "No De Personne",
      "SpecialRequest": "Demande spéciale",
      "BookNow": "Réserver Maintenant",
      "TeamMembers": "Membres de l'équipe",
      "OurDrivers": "Nos chauffeurs",
      ////////

      ////About //Company

      "CompanyHistory": "Company History",
      "WelcomeToAbout1": "A l'Excellence Airport, nous sommes spécialisés dans la transformation du voyage chaotique en une expérience fluide et luxueuse. Située stratégiquement à l'aéroport Roissy Charles de Gaulle, nos services s'adressent à des voyageurs exigeants qui apprécient l'intimité, l'efficacité et les soins personnalisés. Qu'il s'agisse de cadres d'entreprise ou de voyageurs d'agrément, nous garantissons que chaque voyage commence et se termine en toute simplicité.",
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
      "TeamMembers": "Membres d'équipe",
      "OurLovelyTeam": "Notre formidable équipe",

      ///// About ///Terms

      "Commitment": "Notre engagement en termes de transparence et de confiance",
      "CommitmentDes": "Chez Excellence Airport, nous privilégions la transparence, la sincérité et le respect mutuel dans nos relations avec nos clients. Nos conditions et politiques sont conçues pour assurer une expérience fluide et fiable, reflétant notre engagement indéfectible à la fois pour le professionnalisme et la satisfaction de nos clients.",
      "ReservationAndPaymentTerms": "Conditions de réservation et de paiement",
      "ReservationAndPaymentTermsDesc":"Afin de fournir un service de qualité, toutes les réservations doivent faire l'objet d'un bon de commande signé et d'un acompte de 50 %. Les paiements doivent être effectués sans délai, conformément aux conditions convenues, afin d'assurer une prestation de services souple et ininterrompue. Les factures sont payables à notre siège social : 9 Rue Jean-Jacques Rousseau, 95350 Saint-Brice-sous-Forêt.",
      "DisputeResolutionandLatePayments": "Résolution des conflits et retards de paiement",
      "DisputeResolutionandLatePaymentsDesc":"Nous comprenons que des problèmes peuvent parfois survenir. Toute réclamation concernant les services doit être soumise par écrit dans les huit jours suivant la réception de la facture. En cas de retard de paiement, des intérêts seront appliqués à raison de 1 % par mois, et des pénalités supplémentaires pourront être imposées conformément à nos politiques. Ces mesures garantissent l'équité et la responsabilité des deux parties.",
      "LegalFramework": "Le cadre juridique",
      "LegalFrameworkDesc": "Nos activités sont régies par le droit français, ce qui garantit un cadre solide et transparent pour toutes les transactions. Tout litige est soumis à la juridiction exclusive des tribunaux de commerce de Pontoise, ce qui offre une voie de résolution claire.",
      "CommitmentDes2": "Excellence Airport s'engage à fournir un service exceptionnel tout en respectant les normes éthiques et légales. Ces conditions et politiques ne sont pas de simples lignes directrices ; elles représentent notre dévouement à l'intégrité et à la confiance dans tous les aspects de nos opérations.",
      

       //// About ////Values

       "OurGuidingPrinciples": "Nos principes fondamentaux",
       "OurGuidingPrinciplesDesc":" Chez Excellence Airport, nous considérons que tout voyage commence par une expérience exceptionnelle. Notre mission est de redéfinir les voyages en aéroport en offrant des services haut de gamme, personnalisés et transparents qui garantissent le comfort, l'efficacité et le luxe pour chaque voyageur. Dès votre arrivée, notre équipe se consacre à simplifier les complexités du voyage aérien moderne, en offrant des solutions innovantes qui combinent le professionnalisme et l'attention sincère.",
       "OurValues":"Nos valeurs sont la pierre fondatrice de notre engagement en faveur de l'excellence.",
       "CustomerCentric": "Approche axée sur le client",
       "CustomerCentricDesc": "Nous adaptons nos services aux besoins uniques de chaque voyageur, que ce soit pour les affaires ou les loisirs, afin de garantir une expérience personnalisée et mémorable.",
       "ExcellenceInService": "L'excellence dans le service",
       "ExcellenceInServiceDesc":"Notre professionnalisme et notre attention aux détails garantissent des expériences de premier ordre, sans compromis.",
       "GlobalAccessibility": "Accessibilité globale",
       "GlobalAccessibilityDesc": "Avec une assistance multilingue en français, anglais et espagnol, nous favorisons l'inclusion et assurons une communication fluide pour notre clientèle diversifiée.",
       "CommitmenToPrivacy": "Engagement en faveur de la confidentialité et de l'efficacité",
       "CommitmenToPrivacyDesc": "Conçus pour ceux qui privilégient la confidentialité et le temps, nos services VIP, y compris l'accès privé aux terminaux et les transferts avec chauffeur, offrent une commodité inégalée.",
       "SustainabilityAndResponsibility": "Durabilité et responsabilité",
       "SustainabilityAndResponsibilityDesc": "Nous adhérons à des pratiques éthiques et donnons la priorité à la sécurité et au bien-être de nos clients et de notre équipe, tout en nous efforçant d'assurer la durabilité à long terme.",
       "ValuesConclusion": "Ces valeurs nous définissent et guident chacune de nos décisions. Excellence Airport n'est pas un simple prestataire de services ; nous sommes votre partenaire de confiance pour que votre voyage soit aussi remarquable que votre destination.",
       "Motto": "Laissez-nous gérer les détails pendant que vous profitez du voyage",


        ////Contact us //// Contact Form


      "ContactQuery": "Contact pour toute question",
      "General": "Général",
      "Technical": "Technique",
      "SendMessage": "Envoyer un message",



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
      "PhoneDesc2": "Nos représentants sont prêts à vous assister pour toutes vos questions.",
      "PhysicalAddress": "Adresse physique",
      "PhysicalAddressDesc1": "Nous rendre visite ou échanger avec nous au siège de l'entreprise",
      "PhysicalAddressDesc2": "Nous coordonnons nos services haut de gamme pour des clients du monde entier.",
      "RCSRegistration": "Inscription au RCS",
      "RCSRegistrationDesc1": "En tant qu'entreprise enregistrée, Excellence Airport se conforme à toutes les exigences légales et réglementaires applicables. Notre numéro d'enregistrement est le suivant",
      "RCSRegistrationDesc2": "soulignant notre engagement en matière de transparence et de fiabilité.",
      "HostingProvider": "Fournisseur d'hébergement",
      "HostingProviderDesc1": "Le site web et les services en ligne de l'aéroport d'Excellence sont hébergés par",
      "HostingProviderDesc2": "un fournisseur d'hébergement fiable garantissant des performances, une sécurité et une accessibilité solides pour nos plateformes numériques.",


 
 






    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
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