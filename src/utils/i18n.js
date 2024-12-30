import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';



const resources = {
  en: {
    translation: {
      "EnjoyeMessage": "Enjoy Our Professional Service",
      "TravelingMessage": "Traveling is about having good times and focusing only about important things. Let us manage the details while you enjoy the journey",
      "Home": "Home",
      "BookService": "Book A Service",
      "Meet&Greet": "Meet & Greet",
      "MeetDesc": "The Excellence Airport Meet and Greet service ensures that every traveller experiences ease,comfort, and luxury, while navigating through the airport.",
      "ProfesionalDrivers": "Profesional Drivers",
      "DriversDesc": "Excellence Airport Driven Transfers combine comfort, professionalism and style to cater to discerning clients whether for business or leisure.",
      "VIPTerminal": "VIP Terminal",
      "VIPDesc": "The VIP Terminal Service provides travellers with exclusive access to private terminals where all airport procedures, are handled on their behalf.",
      "24/7Service": "24/7 Service",
      "24/7ServiceDesc": "Day or night, wherever you are headed, we are here 24/7, guiding your journey with care and comfort. Your satisfaction and fulfillment is our priority",
      "Welcometo": "Welcome to",
      "ExcellenceAirport": "Excellence Airport",
      "WelcomeDesc1": "Excellence Airport is a premium service provider with over two decades of expertise in the hospitality and travel industry.",
      "WelcomeDesc2": "Its reputation is built on offering seamless and luxurious airport assistance services, including meet & greet, VIP terminal access, chauffeur-driven transfers, and fast-track solutions. With a fleet of over 50 luxury vehicles, we enhance the travel experience by combining efficiency, personalization, and unmatched comfort.",
      "YearsOf": "Years of",
      "Experience": "Experience",
      "luxurious": "luxurious",
      "FleetCars": "Fleet Cars",
      "ReadMore": "Read More",
      "Services": "Services",
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


    },
  },

  fr: {
    translation: {
      "EnjoyMessage": "Profitez de notre service professionnel",
      "TravelingMessage": "Voyager, c'est passer du temps magnifique et se concentrer uniquement sur les choses importantes. Laissez-nous nous occuper des détails pendant que vous profitez du voyage.",
      "Home": "Accueil",
      "BookService": "Réserver une service",
      "Meet&Greet": "Meet & Greet",   
      "MeetDesc": "Le service d'accueil à Excellence airport assure que chaque voyageur qui essai l'expérience de la simplicité, du comfort et du luxe lors de sa traversée de l'aéroport",
      "ProfesionalDrivers": "Chauffeurs professionnels",
      "DriversDesc": "Excellence Airport Driven Transfers combine confort, professionnalisme et style pour répondre aux besoins des clients , que ce soit pour les affaires ou les loisirs.",
      "VIPTerminal": "Terminal VIP",
      "VIPDesc": "Le service VIP Terminal fournit aux voyageurs un accès exclusif aux terminaux privés où toutes les procédures de l'aéroport sont traitées en leur nom.",
      "24/7Service": "Service 24/7",
      "24/7ServiceDesc": "Jour ou nuit, où que vous soyez allé, nous sommes là 24h/24, guidant votre voyage avec soin et confort. Votre satisfaction est notre priorité",
      "Welcometo": "Bienvenue à",
      "ExcellenceAirport": "Excellence Airport",
      "WelcomeDesc1": "Excellence Airport est un services de premier plan avec plus de deux décennies d'expertise dans l'industrie du voyage.",
      "WelcomeDesc2": "Sa réputation est fondée sur l'offre de services d'assistance aéroportuaire de première classe, y compris les services d'accueil et de départ, l'accès au terminal VIP, les transferts avec chauffeur et les solutions de fast track. Avec une flotte de plus de 50 véhicules de luxe, nous améliorons l'expérience de voyage en combinant l'efficacité, la personnalisation et le confort.",
      "YearsOf": "Années de",
      "Experience": "Expérience",
      "luxurious": "luxueux",
      "FleetCars": "Flotte de voitures",
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