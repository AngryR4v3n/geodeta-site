module.exports = {
    webTitles: {
        "en": {
            "main": "Land Surveyor Anna Dakowicz",
            "services": "Our services",
            "pricing": "Pricing",
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
            { "photoPath": "/public/male_pic.png", "photoDesc": "a nice photo 1", "description": "Full professionalism. Order completed on time. I strongly recommend.", "id": 0, "author": "Czesław P.", "enterprise": "" },
            { "photoPath": "/public/female_pic.png", "photoDesc": "a nice photo 2", "description": "A lot of experience and great contact with the customer made it possible to quickly implement the service. Ms. Anna uses modern equipment at work so all measurements are very accurate and there were no corrections. I will definitely also cooperate with Ms. Anna in the future.", "id": 1, "author": "Dorota W.", "enterprise": "" },
            { "photoPath": "/public/female_pic.png", "photoDesc": "a nice photo 3", "description": "If someone is looking for a really great surveyor,I highly recommend.  Ms. Anna is one of the best and most accurate surveyors in their profession, has worked in this profession for many years. I recommend to everyone with a clear conscience.", "id": 2, "author": "Aleksandra B.", "enterprise": "" },
        ],
        "pl": [
            { "photoPath": "/public/male_pic.png", "photoDesc": "a nice photo 1", "description": "Pełen profesjonalizm. Zlecenie wykonane w terminie. Zdecydowanie polecam. ", "id": 0, "author": "Czesław P.", "enterprise": "" },
            { "photoPath": "/public/female_pic.png", "photoDesc": "a nice photo 2", "description": "Duże doświadczenie i świetny kontakt z klientem umożliwił szybką realizację usługi. Pani Ania wykorzystuje nowoczesny sprzęt w pracy więc wszystkie pomiary są bardzo dokładne i obyło się bez poprawek. Na pewno w przyszłości również podejmę współpracę z Panią Anią.", "id": 1, "author": "Dorota W.", "enterprise": "" },
            { "photoPath": "/public/female_pic.png", "photoDesc": "a nice photo 3", "description": "Jeśli ktoś ze szuka naprawdę świetnego geodety,to polecam serdecznie.  Pani Ania jest jednym z najlepszych i najdokładniejszych geodetów w swoim fachu,przepracowała w tym zawodzie już wiele lat. Polecam każdemu z czystym sumieniem.", "id": 2, "author": "Aleksandra B.", "enterprise": "" },
        ]
    },
    landing: {
        "en": {
            "landingIntro": {
                "MainTitle": "Ania Dakowicz",
                "MainTitleUnderlined": "the land surveyor",
                "MainTitleDesc": "Ania is a professional geodeta in the Podlaskie area of Poland, years of experience and complete satisfaction. Ania is the person your project.",
                "YellowButtonAboutUs": "Get to know Ania",
                "BlueButtonProjects": "Projects"
            },
            "secondTitle": "We make your projects achievable",
            "thirdTitle": "Through hard work and expertise",
            "tool1": { "title": "Precision tools", "description": "We revolutionize your land surveying projects with our precision tools. Achieve measurements like never before for accurate data that drives better decisions." },
            "tool2": { "title": "Modern software", "description": "We utilize AutoCAD. Our expertise in this industry-standard software ensures precise and professional mapping." },
            "tool3": { "title": "Experience", "description": "Our expertise of a dedicated land surveyor. With a proven track record of precision and reliability in land surveying." },
            "solutionsButton": "View Solutions",
            "lastMessage": "We are glad you are considering us.\n Looking forward to work with you.",
            "checkers": {
                "titleRight": "Care, Experience, Precision.",
                "listItemRight1Keyword": "Service focused.",
                "listItemRight1": "Our customer friendly approach is dedicated to providing excellent support and making sure you're pleased with our service.",
                "listItemRight2Keyword": "Years of experience.",
                "listItemRight2": "Experience is our foundation, with decades of proven expertise in land surveying.",
                "listItemRight3Keyword": "Time focused.",
                "listItemRight3": "We strive for productivity as a top priority, consistently delivering efficient surveying solutions tailored to your project's demands.",
                "titleLeft": "Projects we have worked with",
                "listItemLeft1Keyword": "Railways.",
                "listItemLeft1": " We have worked with Polish Railways helping to improve our country's infrastructure.",
                "listItemLeft2Keyword": "Suburbs.",
                "listItemLeft2": " Our experience in the housing sector helps us to maximize the usage of the available land.",
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
                "listItemRight3Keyword": "Skoncentrowany na czasie.",
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
            "titleLabel1": "Ania, your land surveyor",
            "titleLabel2": "Site map"
        },
        "pl": {
            "Main": "Strona Główna",
            "AboutUs": "O nas",
            "Services": "Usługi",
            "Gallery": "Obrazy",
            "titleLabel1": "Ania, twoja geodetka",
            "titleLabel2": "Mapa Strony"
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
            "cardTitle1": "Division of land and real estate",
            "cardText1": "The geodetic division of a plot of land and real estate is the physical separation of two or more plots of land from the original registered plot, containing the boundaries of the plot before the division.",
            "cardTitle2": "Building staking",
            "cardText2": "Geodetic delineation of buildings in the field serves the spatial location of these objects in accordance with the construction project.",
            "cardTitle3": "Delineation of property boundaries",
            "cardText3": "Boundary marks indicate the location of the boundary line, while boundary points, mark where the property ends.",
            "cardTitle4": "Land surveying for construction projects",
            "cardText4": "Surveying services for construction projects are all activities performed during the implementation of any construction project.",
            "cardTitle5": "Land surveying on railroad areas",
            "cardText5": "Surveying work on railroad areas involves precise measurements and assessments of tracks and infrastructure to maintain safety and operational efficiency, ensuring the integrity of the rail network.",
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
            "cardText5": "Prace geodezyjne na obszarach kolejowych obejmują precyzyjne pomiary i oceny torów i infrastruktury w celu utrzymania bezpieczeństwa i wydajności operacyjnej, zapewniając integralność sieci kolejowej.",
            "cardTitle6": "Mapy do celów projektowych",
            "cardText6": "Mapa do celów projektowych to projekt zagospodarowania działki lub terenu sporządzany na kopii aktualnej mapy zasadniczej.",

        }
    },

    services: {
        "en": {
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
                "5": {},
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
                "5": {},
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
            "secondTitle": "Mapping your future at fair price",
            "secondDesc": "Get to know what services we offer for all your land surveying needs.",
            "pricingDesc": "Our pricing depends on the schedule and size of the project. For more information, please contact us.",
            "lastTitle": "Check out our contact information",
            "contactButton": "Contact us"


        },

        "pl": {
            "secondTitle": "Mapowanie przyszłości w uczciwej cenie",
            "secondDesc": "Dowiedz się, jakie usługi oferujemy dla wszystkich Twoich potrzeb geodezyjnych.",
            "pricingDesc": "Koszt realizacji każdego projektu jest wyceniany w sposób indywidualny. Jest on uzależniony od kompleksowości, czasu oraz zasobów niezbędnych do realizacji projektu. Po więcej informacji na temat kosztów współpracy zapraszamy do kontaktu telefonicznego lub drogą mailową.",
            "lastTitle": "Sprawdź nasze dane kontaktowe",
            "contactButton": "Kontakt z nami"

        }
    },

    gallery: {
        "en": {
            "mainTitle": "Project gallery",
            "mainDesc": "Explore our diverse gallery of projects showcasing creativity and expertise in land surveying.",
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
            "mainDesc": "Zapoznaj się z naszą różnorodną galerią projektów prezentujących kreatywność i wiedzę specjalistyczną w zakresie geodezji.",
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
            "mainDesc": "For any inquiries about your specific project needs, don't hesitate to reach out. I'm glad to assist you.",
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
            "goodbyeText": "Hope to collaborate with you soon!"

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
            "aboutUsIntro": "Hello! I'm Anna, a passionate land surveyor with over a decade of experience in this captivating field. As I've grown in my profession, I've discovered an unwavering commitment to precision and a deep love for the intricacies of land surveying. The journey of this company began with a vision: to provide top-tier land surveying services that blend cutting-edge technology with a personal touch. Drawing from my deep-rooted interest in the field, I founded this enterprise to make a positive impact in the world of land measurement.",
            "secondTitle": "Our contact information"
        },
        "pl": {
            "mainTitle": "O nas",
            "aboutUsIntro": "Usługi geodezyjne świadczę od ponad trzynastu lat. Geodezja od zawsze była moim zawodowym marzeniem, które sprawnie udaje mi się realizować. Wraz z upływem czasu nabrałam niezbędnego doświadczenia i wiedzy, aby rozpocząć swoją własną działalność i zacząć świadczyć usługi na najwyższym poziomie.  W pracy wykorzystuję najnowocześniejsze technologie, które są jednym z wielu narzędzi służących do realizowania marzeń moich klientów. Serdeczenie zapraszam do współpracy.",
            "secondTitle": "Nasze dane kontaktowe"
        }
    }

};