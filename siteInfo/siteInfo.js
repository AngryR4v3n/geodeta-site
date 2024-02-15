module.exports = {
    webTitles: {
        "en": {
            "main": "Land Surveyor Anna Dakowicz",
            "services": "Our services",
            "pricing": "Price list",
            "gallery": "Gallery",
            "aboutus": "About us",
            "contactus": "Contact us"
        },
        "pl": {
            "main": "Geodeta Anna Dakowicz",
            "services": "Nasze usługi",
            "pricing": "Cennik",
            "gallery": "Galeria",
            "aboutus": "O nas",
            "contactus": "Skontaktuj się z nami"
        }

    },
    siteMap: {
        "en": [
            { "title": "Home", "hasDropdown": false, "link": "/" },
            {
                "title": "Services", "hasDropdown": true, "link": "#", "sublink": [
                    { "title": "Offers", "link": "/services", "description": "Check our available services." },
                    { "title": "Our pricing", "link": "/pricing", "description": "Accessible, and financiable quotas." },
                ]
            },
            { "title": "About us", "hasDropdown": false, "link": "/aboutus", },
            { "title": "Gallery", "hasDropdown": true, "link": "/gallery", "sublink": [{ "title": "Photos", "link": "/gallery", "description": "Check our latest projects!" }] },
        ],
        "pl": [
            { "title": "Strona Główna", "hasDropdown": false, "link": "/" },
            {
                "title": "Usługi", "hasDropdown": true, "link": "#", "sublink": [
                    { "title": "Oferta", "link": "/services", "description": "Sprawdź nasze dostępne usługi." },
                    { "title": "Cennik", "link": "/pricing", "description": "Dostępne i finansowalne oferty." },
                ]
            },
            { "title": "O nas", "hasDropdown": false, "link": "/aboutus", },
            { "title": "Obrazy", "hasDropdown": true, "link": "/gallery", "sublink": [{ "title": "Obrazy", "link": "/gallery", "description": "Sprawdź nasze najnowsze projekty" }] },
        ]
    },
    carouselSlides: {
        "en": [
            { "photoPath": "/public/male_pic.png", "photoDesc": "a nice photo 1", "description": "Full professionalism. The service was done on time. I definitely recommend. ", "id": 0, "author": "Czesław P.", "enterprise": "" },
            { "photoPath": "/public/female_pic.png", "photoDesc": "a nice photo 2", "description": "Extensive experience and great customer contact.  No corrections were needed.", "id": 1, "author": "Dorota W.", "enterprise": "" },
            { "photoPath": "/public/female_pic.png", "photoDesc": "a nice photo 3", "description": "Fast implementation, a well-done service.", "id": 2, "author": "Aleksandra B.", "enterprise": "" },
        ],
        "pl": [
            { "photoPath": "/public/male_pic.png", "photoDesc": "a nice photo 1", "description": "Pełen profesjonalizm. Zlecenie wykonane w terminie. Zdecydowanie polecam.", "id": 0, "author": "Czesław P.", "enterprise": "" },
            { "photoPath": "/public/female_pic.png", "photoDesc": "a nice photo 2", "description": "Duże doświadczenie i świetny kontakt z klientem. Obyło się bez poprawek.", "id": 1, "author": "Dorota W.", "enterprise": "" },
            { "photoPath": "/public/female_pic.png", "photoDesc": "a nice photo 3", "description": "Szybki czas realizacji, dobrze wykonana usługa.", "id": 2, "author": "Aleksandra B.", "enterprise": "" },
        ]
    },
    landing: {
        "en": {
            "landingIntro": {
                "MainTitle": "Ania Dakowicz",
                "MainTitleUnderlined": "land surveyor",
                "MainTitleDesc": "I provide professional surveying services in the Podlaskie voivodeship.",
                "YellowButtonAboutUs": "Get to know Ania",
                "BlueButtonProjects": "Projects"
            },
            "secondTitle": "Do your project with our support.",
            "thirdTitle": "Through hard work and knowledge",
            "tool1": { "title": "Precision tools", "description": "Modern tools make it possible to obtain accurate data for the implementation of surveying projects." },
            "tool2": { "title": "Modern software", "description": "EwMapa, TurboMap, GstarCAD, GoKart, Mikromap, WinKalk, C-GEO and other programs allow you to prepare digital and analogue documentation." },
            "tool3": { "title": "Experience", "description": "Over thirteen years of experience in land surveying." },
            "solutionsButton": "View Solutions",
            "lastMessage": "We are glad that you are considering working with us",
            "checkers": {
                "titleRight": "Care, Experience, Precision.",
                "listItemRight1Keyword": "Focus on services.",
                "listItemRight1": " We provide an individual approach to each project, which ensures the satisfaction of our customers.",
                "listItemRight2Keyword": "Years of experience.",
                "listItemRight2": " Experience is the foundation of our company. Many years of activity in the industry and numerous professional trainings make every project possible.",
                "listItemRight3Keyword": "Fast implementation time.",
                "listItemRight3": " Our priority is productivity and fast delivery of efficient solutions customized to project requirements.",
                "titleLeft": "Types of project we have implemented",
                "listItemLeft1Keyword": "Railways.",
                "listItemLeft1": " We have worked with the Polish State Railways, helping to improve the infrastructure of our country.",
                "listItemLeft2Keyword": "Suburbs.",
                "listItemLeft2": " Our experience in the residential sector helps us to maximise the use of available land.",
                "listItemLeft3Keyword": "Apartments.",
                "listItemLeft3": " Our housing sector also expands to bigger projects, which require a broad list of abilities.",

            }

        },
        "pl": {
            "landingIntro": {
                "MainTitle": "Ania Dakowicz -",
                "MainTitleUnderlined": "geodeta",
                "MainTitleDesc": "Świadczę profesjonalne usługi geodezyjne na terenie województwa podlaskiego.",
                "YellowButtonAboutUs": "Poznaj Anię",
                "BlueButtonProjects": "Oferta"
            },
            "secondTitle": "Zrealizuj swój projekt z naszym wsparciem",
            "thirdTitle": "Dzięki ciężkiej pracy i wiedzy",
            "tool1": { "title": "Precyzyjne narzędzia", "description": "Nowoczesne narzędzia umożliwiają uzyskanie dokładnych danych do realizacji projektów geodezyjnych." },
            "tool2": { "title": "Nowoczesny software", "description": "Programy EwMapa, TurboMap, GstarCAD, GoKart, Mikromap, WinKalk, C-GEO oraz inne pozwalają na sporządzanie dokumentacji cyfrowej i analogowej." },
            "tool3": { "title": "Doświadczenie", "description": "Ponad trzynastoletnie doświadczenie w zakresie usług geodezyjnych." },
            "solutionsButton": "Zobacz rozwiązania",
            "lastMessage": "Cieszymy się, że rozważasz współpracę z nami",
            "checkers": {
                "titleRight": "Troska, doświadczenie, precyzja.",
                "listItemRight1Keyword": "Koncentracja na usługach.",
                "listItemRight1": " Zapewniamy indywidualne podejście do każdego realizowanego projektu, co zapewnia zadowolenie naszych klientów.",
                "listItemRight2Keyword": "Lata doświadczenia.",
                "listItemRight2": " Doświadczenie stanowi fundament naszej firmy. Wieloletnia działalność w branży oraz liczne szkolenia zawodowe sprawiają, że każdy projekt jest możliwy do zrealizowania.",
                "listItemRight3Keyword": "Szybki czas realizacji.",
                "listItemRight3": " Naszym priorytetem jest produktywność i szybkie dostarczenie wydajnych rozwiązań dostosowanych do wymagań projektu.",
                "titleLeft": "Rodzaje projektów, przy których pracowaliśmy",
                "listItemLeft1Keyword": "Koleje.",
                "listItemLeft1": " Współpracowaliśmy z Polskimi Kolejami Państwowymi, pomagając poprawić infrastrukturę naszego kraju.",
                "listItemLeft2Keyword": "Przedmieścia.",
                "listItemLeft2": " Nasze doświadczenie w sektorze mieszkaniowym pomaga nam zmaksymalizować wykorzystanie dostępnych gruntów.",
                "listItemLeft3Keyword": "Apartamenty.",
                "listItemLeft3": " Nasz sektor mieszkaniowy rozszerza się również na większe projekty, które wymagają szerokiej listy umiejętności.",

            }

        }
    },
    header: {
        "en": {
            "ContactUs": "Contact us"
        },
        "pl": {
            "ContactUs": "Kontakt z nami"
        }
    },
    footer: {
        "en": {
            "Main": "Main site",
            "AboutUs": "About us",
            "Services": "Services",
            "Gallery": "Gallery",
            "phoneTextAreaTitle": "+48 ",
            "phoneTextTitle": "515 868 159",
            "titleLabel2": "Site map",
            "emailText": "dakowiczanna@interia.pl",
            "phoneText": "+48 515868159",
        },
        "pl": {
            "Main": "Strona Główna",
            "AboutUs": "O nas",
            "Services": "Usługi",
            "Gallery": "Obrazy",
            "phoneTextAreaTitle": "+48 ",
            "phoneTextTitle": "515 868 159",
            "titleLabel2": "Mapa Strony",
            "emailText": "dakowiczanna@interia.pl",
            "phoneText": "+48 515868159",
        }
    },
    projects: {
        "en": {
            "mainTitle": "About our services",
            "mainDesc": "With extensive experience as a contractor specializing in land surveying, we have established ourselves as skilled professionals in accurately measuring and mapping land for various construction and development projects. Our expertise in utilizing advanced technology and traditional surveying methods has made us a trusted and reliable resource for ensuring precise boundaries and topographical data, as well as providing essential legal documentation.",
            "titleItem1": "EwMapa",
            "titleItem2": "TurboMap",
            "titleItem3": "GstarCAD",
            "titleItem4": "GoKart",
            "titleItem5": "Mikromap",
            "titleItem6": "Winkalk",
            "titleItem7": "C-GEO",
            "secondTitle": "Programs we are working with",
            "viewMoreText": "Learn more",
            "cardTitle1": "Division of land and property",
            "cardText1": "The geodetic division of a plot of land and real estate is the physical separation of two or more plots of land from the original registered plot, containing the boundaries of the plot before the division.",
            "cardTitle2": "Set out of buildings",
            "cardText2": "Geodetic delineation of buildings in the field serves the spatial location of these objects in accordance with the construction project.",
            "cardTitle3": "Delineation of property boundaries",
            "cardText3": "Boundary marks indicate the location of the boundary line, while boundary points, mark where the property ends.",
            "cardTitle4": "Land surveying for construction projects",
            "cardText4": "Surveying services for construction projects are all activities performed during the implementation of any construction project.",
            "cardTitle5": "Surveying works in railway areas",
            "cardText5": "Surveying work in railway areas involves precise measurements and assessments of tracks as well as infrastructure to maintain safety and operational efficiency, ensuring the integrity of the rail network.",
            "cardTitle6": "Maps for project purposes",
            "cardText6": "Maps for land surveying purposes are indispensable tools that visually depict surveyed land parcels, boundaries, and topographical features",
        },
        "pl": {
            "mainTitle": "Nasze usługi",
            "titleItem1": "EwMapa",
            "titleItem2": "TurboMap",
            "titleItem3": "GstarCAD",
            "titleItem4": "GoKart",
            "titleItem5": "Mikromap",
            "titleItem6": "Winkalk",
            "titleItem7": "C-GEO",
            "secondTitle": "Programy, które wykorzystujemy przy sporządzaniu dokumentacji cyfrowej i analogowej",
            "desc": "Dzięki bogatemu doświadczeniu jako wykonawca specjalizujący się w geodezji, staliśmy się wykwalifikowanymi profesjonalistami w zakresie dokładnych pomiarów i mapowania gruntów dla różnych projektów budowlanych i deweloperskich. Nasze doświadczenie w wykorzystywaniu zaawansowanych technologii i tradycyjnych metod geodezyjnych sprawiło, że jesteśmy zaufanym i niezawodnym źródłem zapewniającym precyzyjne granice i dane topograficzne, a także dostarczającym niezbędną dokumentację prawną.",
            "viewMoreText": "Czytaj więcej",
            "cardTitle1": "Podział działki i nieruchomości",
            "cardText1": "Geodezyjny podział działki i nieruchomości to fizyczne wyodrębnienie z pierwotnej działki ewidencyjnej dwóch lub większej ilości działek, zawierających się w granicach działki sprzed podziału.",
            "cardTitle2": "Tyczenie budynków",
            "cardText2": "Geodezyjne wytyczenie budynków w terenie służy przestrzennemu umiejscowieniu tych obiektów zgodnie z projektem budowlanym.",
            "cardTitle3": "Wytyczenie i ustalenie granic nieruchomości",
            "cardText3": "Granica działki określana jest przez znaki i punkty graniczne. Znaki graniczne wskazują położenie linii granicznej, zaś punkty graniczne, oznaczają miejsca, gdzie posesja się kończy.",
            "cardTitle4": "Obsługa geodezyjna inwestycji budowlanych",
            "cardText4": "Obsługa geodezyjna inwestycji budowlanych to wszystkie czynności wykonywane podczas realizacji wszelkich inwestycji budowlanych.",
            "cardTitle5": "Prace geodezyjne na terenach kolejowych",
            "cardText5": "Prace geodezyjne na obszarach kolejowych obejmują precyzyjne pomiary i oceny torów, a także infrastruktury w celu utrzymania bezpieczeństwa i wydajności operacyjnej, zapewniając integralność sieci kolejowej.",
            "cardTitle6": "Mapy do celów projektowych",
            "cardText6": "Mapa do celów projektowych to projekt zagospodarowania działki lub terenu sporządzany na kopii aktualnej mapy zasadniczej.",

        }
    },

    services: {
        "en": {
            "moreInfo": {
                "1": { "title": "Division of land and property", "desc": "Surveying subdivision of a parcel and property is the physical separation of two or more parcels from the original cadastral parcel, contained within the boundaries of the parcel before the subdivision. The result of this subdivision is a new configuration of parcels with a new layout of boundary lines and areas. The documentation created during the division is in the form of a technical report. Detailed recommendations on the cadastral subdivision of the parcel are included in the local land use plan. The cost of subdivision of a parcel depends on its size.",},
                "2": { "title": "Set out of buildings", "desc": "The surveying set out of buildings is used to place these new objects in space accordingly to the construction project. It is important to maintain appropriate distances between the newly designated objects and the already existing objects within relation to the boundary lines of the property. The surveying set out of buildings is one of the preparatory works that can only be done in the area covered by the building permit or notification.",},
                "3": {
                    "title": "Set out and determination of property lines",
                    "desc": "The procedure of subdivision of the parcel and determination of the property lines is carried out by an authorized surveyor. Its task is to place permanent landmark on the ground, and if they are removed, to resume a boundary point. The boundary line of a parcel is defined by landmarks and boundary points. Landmarks indicate the location of the boundary line, while boundary points indicate where the property ends. In a situation where the boundary lines of a parcel are legally approved, but the boundary points delineating them have been destroyed, the process of setting out is repeated. This procedure is faster and less complicated than the original set out, because the surveyor relies on already existing cadastral documentation. It is worth checking the boundaries of the parcel:",
                    "list": [
                        "before buying a parcel to determine its area",
                        "after the purchase of the parcel in case of destruction of landmarks",
                        "before fencing the property",
                        "after receiving an inheritance",
                        "if you suspect that part of the parcel has been occupied by neighbour."
                    ]
                },
                "4": {
                    "title": "Surveying services of construction investments",
                    "desc": "Geodetic services of construction investments include all activities performed during the implementation of all kind of construction investments. \n This service includes:",
                    "list": [
                        "establishing control and control survey",
                        "boundary determination of construction land",
                        "alignment of buildings axes",
                        "installation of temporary height marks",
                        "creation of as-built survey and cartographic documentation",
                        "testing of displacements and deformations"
                    ]
                },
                "5": {
                    "title": "Surveying works in railway areas",
                    "desc": "Surveying work in railway areas involves precise measurements and assessments of tracks as well as infrastructure to maintain safety and operational efficiency, ensuring the integrity of the rail network."
                },
                "6": {
                    "title": "Maps for project purposes",
                    "desc": "A map for project purposes is a plan for the development of a parcel or an area based on a copy of the current base map.  It is a type of surveying and cartographic documentation, without which it is impossible to obtain a building permit. A map for project purposes contains elements constituting the content of the base map, including the property ownership boundary lines, as well as:",
                    "list": [
                        "boundary lines for areas of different purposes",
                        "building lines",
                        "axes of streets and roads",
                        "location of timberland",
                        "location of other objects and details indicated by the designer.",
                    ],
                    "finalDesc": "The scale of the maps for project purposes is adjusted to the type and size of the object. The most common is the 1:500 scale. The time needed to prepare this type of map depends on the size of the area and the type of investment."
                }
            }
        },
        "pl":
        {
            "moreInfo": {
                "1": { "title": "Podział działki i nieruchomości", "desc": "Geodezyjny podział działki i nieruchomości to fizyczne wyodrębnienie z pierwotnej działki ewidencyjnej dwóch lub większej ilości działek, zawierających się w granicach działki sprzed podziału. Efektem tego podziału jest nowa konfiguracja działek o nowym układzie linii granicznych i powierzchniach. Dokumentacja powstająca w trakcie wykonywania podziału ma formę operatu technicznego.\nDokładne zalecenia na temat ewidencyjnego rozbicia działki są ujęte w miejscowym planie zagospodarowania przestrzennego obowiązującego na terenie danej gminy. \nKoszt podziału działki jest uzależniony od jej wielkości. ",},
                "2": { "title": "Tyczenie budynków", "desc": "Geodezyjne wytyczenie budynków w terenie służy przestrzennemu umiejscowieniu tych obiektów zgodnie z projektem budowlanym. Ważne jest zachowanie odpowiednich odległości wyznaczanych obiektów w stosunku do obiektów istniejących i wznoszonych oraz względem granic nieruchomości.\nGeodezyjne wytyczanie obiektów budowlanych należy do prac przygotowawczych, do których można przystąpić wyłącznie na terenie objętym pozwoleniem na budowę lub zgłoszeniem. ",},
                "3": {
                    "title": "Wytyczenie i ustalenie granic nieruchomości",
                    "desc": "Procedurę podziału działki oraz wyznaczenie granic nieruchomości gruntowej przeprowadza uprawniony geodeta. Jego zadaniem jest umieszczenie na gruncie stałych znaków granicznych, a w przypadku ich usunięcia, wznowienie danego punktu. \nGranica działki określana jest przez znaki i punkty graniczne. Znaki graniczne wskazują położenie linii granicznej, zaś punkty graniczne, oznaczają miejsca, gdzie posesja się kończy. \nW sytuacji, gdy granice działki są prawnie zatwierdzone, lecz punkty graniczne je wyznaczające zostały zniszczone, ponawia się proces wytyczenia granic. Jest to procedura szybsza i mniej skomplikowana, niż pierwotne wytyczenie, ponieważ geodeta opiera się na już istniejących dokumentach ewidencyjnych. \nGranice działki warto sprawdzić m.in.:",
                    "list": [
                        "przed zakupem działki w celu ustalenia jej powierzchni",
                        "po zakupie działki w przypadku zniszczenia znaków granicznych",
                        "przed wykonaniem ogrodzenia posesji",
                        "po otrzymaniu spadku",
                        "w przypadku podejrzenia zajęcia części posesji przez sąsiada."
                    ]
                },
                "4": {
                    "title": "Obsługa geodezyjna inwestycji budowlanych",
                    "desc": "Obsługa geodezyjna inwestycji budowlanych to wszystkie czynności wykonywane podczas realizacji wszelkich inwestycji budowlanych.\nUsługa ta obejmuje:\n",
                    "list": [
                        "założenie oraz pomiar osnowy realizacyjnej",
                        "wyznaczenie granic terenu budowy",
                        "wytyczenie głównych osi obiektów budowlanych",
                        "założenie roboczych znaków wysokościowych",
                        "stworzenie powykonawczej dokumentacji geodezyjno-kartograficznej",
                        "badanie przemieszczeń i odkształceń"
                    ]
                },
                "5": {
                    "title": "Prace geodezyjne na terenach kolejowych",
                    "desc": "Prace geodezyjne na obszarach kolejowych obejmują precyzyjne pomiary i oceny torów, a także infrastruktury w celu utrzymania bezpieczeństwa i wydajności operacyjnej, zapewniając integralność sieci kolejowej."
                },
                "6": {
                    "title": "Mapy do celów projektowych",
                    "desc": "Mapa do celów projektowych to projekt zagospodarowania działki lub terenu sporządzany na kopii aktualnej mapy zasadniczej. Jest to rodzaj dokumentacji geodezyjno-kartograficznej, bez której niemożliwe jest uzyskanie pozwolenia na budowę. \n Mapa do celów projektowych zawiera elementy stanowiące treść mapy zasadniczej łącznie z granicami własności nieruchomości, a także:\n",
                    "list": [
                        "linie rozgraniczające tereny o różnym przeznaczeniu",
                        "linie zabudowy",
                        "osie ulic i dróg",
                        "usytuowanie zieleni wysokiej",
                        "usytuowanie innych obiektów i szczegółów wskazanych przez projektanta.",
                    ],
                    "finalDesc": "Skalę map do celów projektowych dostosowuje się do rodzaju i wielkości obiektu. Najczęściej jest to skala 1:500. \nCzas potrzebny na wykonanie tego typu mapy zależy od wielkości terenu i rodzaju inwestycji."
                }
            }
        }

    },

    pricing: {

        "en": {
            "secondTitle": "Mapping the future at fair price",
            "secondDesc": "Find out what services we provide.",
            "pricingDesc": "The cost of each project is estimated individually. It depends on the complexity, time and resources necessary to implement the project. For more information on the costs of cooperation, please contact us by phone or e-mail.",
            "lastTitle": "Check out our contact details",
            "contactButton": "Contact us"


        },

        "pl": {
            "secondTitle": "Mapowanie przyszłości w uczciwej cenie",
            "secondDesc": "Dowiedz się, jakie usługi oferujemy.",
            "pricingDesc": "Koszt realizacji każdego projektu jest wyceniany w sposób indywidualny. Jest on uzależniony od kompleksowości, czasu oraz zasobów niezbędnych do realizacji projektu. Po więcej informacji na temat kosztów współpracy zapraszamy do kontaktu telefonicznego lub drogą mailową.",
            "lastTitle": "Sprawdź nasze dane kontaktowe",
            "contactButton": "Kontakt z nami"

        }
    },

    gallery: {
        "en": {
            "mainTitle": "Project gallery",
            "mainDesc": "",
            "previousButton": "Previous",
            "nextButton": "Next",
            "photos": [
                { "id": 0, "src": "/public/project_2.jpg", "title": "", "desc": "" },
                { "id": 1, "src": "/public/project_3.jpg", "title": "", "desc": "" },
                { "id": 2, "src": "/public/project_4.jpg", "title": "", "desc": "" },
                { "id": 3, "src": "/public/project_5.jpg", "title": "", "desc": "" },
                { "id": 4, "src": "/public/project_6.jpg", "title": "", "desc": "" },
                { "id": 5, "src": "/public/project_7.jpg", "title": "", "desc": "" },
                { "id": 6, "src": "/public/project_8.jpg", "title": "", "desc": "" },
                { "id": 7, "src": "/public/project_9.jpg", "title": "", "desc": "" },
            ],
            "finalText": "Still interested? Contact us for more information!",
            "contactUs": "Contact us"
        },
        "pl": {
            "mainTitle": "Galeria projektów",
            "mainDesc": "",
            "previousButton": "Poprzedni",
            "nextButton": "Następny",
            "photos": [
                { "id": 0, "src": "/public/project_2.jpg", "title": "", "desc": "" },
                { "id": 1, "src": "/public/project_3.jpg", "title": "", "desc": "" },
                { "id": 2, "src": "/public/project_4.jpg", "title": "", "desc": "" },
                { "id": 3, "src": "/public/project_5.jpg", "title": "", "desc": "" },
                { "id": 4, "src": "/public/project_6.jpg", "title": "", "desc": "" },
                { "id": 5, "src": "/public/project_7.jpg", "title": "", "desc": "" },
                { "id": 6, "src": "/public/project_8.jpg", "title": "", "desc": "" },
                { "id": 7, "src": "/public/project_9.jpg", "title": "", "desc": "" },
            ],
            "finalText": "Nadal jesteś zainteresowany? Skontaktuj się z nami, aby uzyskać więcej informacji!",
            "contactUs": "Skontaktuj się z nami"
        }
    },
    contactUs: {
        "en": {
            "mainTitle": "Contact us",
            "mainDesc": "If you have any questions about your project needs, please don't hesitate to contact us. I'll be glad to help you.",
            "emailLabel": "Email",
            "emailText": "dakowiczanna@interia.pl",
            "phoneLabel": "Phone",
            "phoneText": "+48 515868159",
            "secondTitle": "Our information",
            "nipLabel": "NIP",
            "nipText": "9661959715",
            "regonLabel": "REGON",
            "regonText": "525727951",
            "addressLabel": "Address",
            "addressText": "ul. Gajowa 19, 15-588 Kuriany",
            "workingHoursLabel": "Working hours",
            "weekday": "Monday-Friday: ",
            "weekdaySchedule": "8:00 AM - 4:00 PM",
            "saturday": "Saturday: ",
            "saturdaySchedule": "Closed",
            "sunday": "Sunday: ",
            "sundaySchedule": "Closed",
            "goodbyeText": "I hope we can work together soon!"

        },
        "pl": {
            "mainTitle": "Skontaktuj się z nami",
            "mainDesc": "W przypadku jakichkolwiek pytań dotyczących konkretnych potrzeb projektowych, nie wahaj się skontaktować. Chętnie ci pomogę.",
            "emailLabel": "Email",
            "emailText": "dakowiczanna@interia.pl",
            "phoneLabel": "Phone",
            "phoneText": "+48 515868159",
            "secondTitle": "Informacje o nas",
            "nipLabel": "NIP",
            "nipText": "9661959715",
            "regonLabel": "REGON",
            "regonText": "525727951",
            "addressLabel": "Adres",
            "addressText": "ul. Gajowa 19, 15-588 Kuriany",
            "workingHoursLabel": "Godziny pracy",
            "weekday": "Ponedziałek-Piątek: ",
            "weekdaySchedule": "8:00 AM - 4:00 PM",
            "saturday": "Sobota: ",
            "saturdaySchedule": "Nieczynny",
            "sunday": "Niedziela: ",
            "sundaySchedule": "Nieczynny",
            "goodbyeText": "Mam nadzieję, że wkrótce będziemy mogli współpracować!"

        }
    },
    aboutUs: {
        "en": {
            "mainTitle": "About us",
            "aboutUsIntro": "I have been providing surveying services for over thirteen years. Land surveying has always been my professional dream, which I manage to realize efficiently. Over time, I gained the necessary experience and knowledge to start my own business and start providing services at the highest level. In my work, I use modern technologies, which are used to make my clients dreams come true. I invite you to cooperate with me.",
            "secondTitle": "Our contact information"
        },
        "pl": {
            "mainTitle": "O nas",
            "aboutUsIntro": "Usługi geodezyjne świadczę od ponad trzynastu lat. Geodezja od zawsze była moim zawodowym marzeniem, które sprawnie udaje mi się realizować. Wraz z upływem czasu nabrałam niezbędnego doświadczenia i wiedzy, aby rozpocząć swoją własną działalność i zacząć świadczyć usługi na najwyższym poziomie.  W pracy wykorzystuję najnowocześniejsze technologie, które są jednym z wielu narzędzi służących do realizowania marzeń moich klientów. Serdeczenie zapraszam do współpracy.",
            "secondTitle": "Nasze dane kontaktowe"
        }
    }

};