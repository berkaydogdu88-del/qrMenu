const translations = {
    en: {
        brandTag: "Chef-crafted seasonal plates",
        brandTitle: "Sunset Bistro",
        languageLabel: "Language",
        intro: "Scan the QR code to return anytime. Ask our team about today's specials.",
        allergen: "Please inform us about any allergies or dietary needs before ordering.",
        contactHeading: "Contact",
        phoneLabel: "Phone",
        addressLabel: "Address",
        address: "123 Seaside Avenue, Istanbul",
        hoursLabel: "Hours",
        hours: "Mon-Thu 10:00-22:30, Fri-Sun 10:00-23:30",
        qrTip: "Save this page to your home screen for faster access next time."
    },
    tr: {
        brandTag: "Şef dokunuşlu mevsimsel tabaklar",
        brandTitle: "Sunset Bistro",
        languageLabel: "Dil",
        intro: "QR kodunu dilediğiniz zaman tarayarak menümüze dönebilirsiniz. Günün özel tabaklarını ekibimize sorabilirsiniz.",
        allergen: "Lütfen sipariş vermeden önce alerji veya diyet ihtiyaçlarınızı bize bildirin.",
        contactHeading: "İletişim",
        phoneLabel: "Telefon",
        addressLabel: "Adres",
        address: "123 Seaside Caddesi, İstanbul",
        hoursLabel: "Çalışma Saatleri",
        hours: "Pzt-Per 10:00-22:30, Cum-Paz 10:00-23:30",
        qrTip: "Bu sayfayı ana ekranınıza kaydedin, bir dahaki sefere daha hızlı erişin."
    }
};

const menuSections = [
    {
        id: "starters",
        label: {
            en: "Starters",
            tr: "Başlangıçlar"
        },
        items: [
            {
                name: {
                    en: "Charred Halloumi Skewers",
                    tr: "Izgara Hellim Şiş"
                },
                ingredients: {
                    en: "Minted yogurt, pomegranate molasses, pickled sumac onions",
                    tr: "Naneli yoğurt, nar ekşisi, sumaklı turşu soğan"
                },
                price: "185 ₺"
            },
            {
                name: {
                    en: "Smoked Eggplant Purée",
                    tr: "Köz Patlıcan Ezme"
                },
                ingredients: {
                    en: "Tahini, roasted peppers, crispy lavash",
                    tr: "Tahin, közlenmiş biber, çıtır lavaş"
                },
                price: "140 ₺"
            },
            {
                name: {
                    en: "Citrus-Cured Salmon",
                    tr: "Narenciye Marine Somon"
                },
                ingredients: {
                    en: "Blood orange, fennel, dill oil",
                    tr: "Kan portakalı, rezene, dereotu yağı"
                },
                price: "210 ₺"
            }
        ]
    },
    {
        id: "mains",
        label: {
            en: "Signatures",
            tr: "Şefin İmzaları"
        },
        items: [
            {
                name: {
                    en: "Sumac Slow-Cooked Lamb Shoulder",
                    tr: "Sumaklı Yavaş Pişmiş Kuzu İncik"
                },
                ingredients: {
                    en: "Charred leeks, saffron bulgur, fermented chili glaze",
                    tr: "Köz pırasa, safranlı bulgur, fermente acı sos"
                },
                price: "335 ₺"
            },
            {
                name: {
                    en: "Pan-Seared Sea Bass",
                    tr: "Tava Levrek"
                },
                ingredients: {
                    en: "Braised fennel, lemon beurre blanc, caper dust",
                    tr: "Rezene yahni, limonlu beurre blanc sos, kapari tozu"
                },
                price: "315 ₺"
            },
            {
                name: {
                    en: "Wild Mushroom Risotto",
                    tr: "Yabani Mantar Risotto"
                },
                ingredients: {
                    en: "Aged parmesan, black garlic crumble, truffle oil",
                    tr: "Olgun parmesan, siyah sarımsak kırıntısı, trüf yağı"
                },
                price: "285 ₺"
            }
        ]
    },
    {
        id: "flatbreads",
        label: {
            en: "Wood-Fired Flatbreads",
            tr: "Odun Fırını Pideleri"
        },
        items: [
            {
                name: {
                    en: "Spiced Lamb & Labneh",
                    tr: "Baharatlı Kuzu ve Labne"
                },
                ingredients: {
                    en: "Roasted peppers, parsley gremolata",
                    tr: "Köz biber, maydanoz gremolata"
                },
                price: "195 ₺"
            },
            {
                name: {
                    en: "Heirloom Tomato Burrata",
                    tr: "Ata Tohumu Domatesli Burrata"
                },
                ingredients: {
                    en: "Basil pesto, balsamic reduction",
                    tr: "Fesleğen pestosu, balsamik sos"
                },
                price: "185 ₺"
            }
        ]
    },
    {
        id: "desserts",
        label: {
            en: "Desserts",
            tr: "Tatlılar"
        },
        items: [
            {
                name: {
                    en: "Pistachio Baklava Cheesecake",
                    tr: "Fıstıklı Baklava Cheesecake"
                },
                ingredients: {
                    en: "Orange blossom honey, kataifi crumble",
                    tr: "Portakal çiçeği balı, kadayıf kırıntısı"
                },
                price: "165 ₺"
            },
            {
                name: {
                    en: "Dark Chocolate Tahini Tart",
                    tr: "Bitter Çikolatlı Tahinli Tart"
                },
                ingredients: {
                    en: "Sea salt caramel, toasted sesame",
                    tr: "Deniz tuzu karameli, kavrulmuş susam"
                },
                price: "160 ₺"
            }
        ]
    },
    {
        id: "drinks",
        label: {
            en: "House Drinks",
            tr: "Özel İçecekler"
        },
        items: [
            {
                name: {
                    en: "Rooftop Lemon Spritz",
                    tr: "Teras Limon Spritz"
                },
                ingredients: {
                    en: "Meyer lemon, elderflower, tonic",
                    tr: "Meyer limonu, mürver çiçeği, tonik"
                },
                price: "135 ₺"
            },
            {
                name: {
                    en: "Pomegranate Cooler",
                    tr: "Nar Serinletici"
                },
                ingredients: {
                    en: "Fresh pomegranate, mint, sparkling water",
                    tr: "Taze nar, nane, sodalı su"
                },
                price: "120 ₺"
            }
        ]
    }
];

const languageSelect = document.getElementById("language");
const menuContainer = document.getElementById("menu");
const textBindings = Array.from(document.querySelectorAll("[data-i18n]"));

function updateStaticCopy(language) {
    const copy = translations[language] || translations.en;
    textBindings.forEach((node) => {
        const key = node.getAttribute("data-i18n");
        if (copy[key]) {
            node.textContent = copy[key];
        }
    });
    document.documentElement.setAttribute("lang", language);
}

function renderMenu(language) {
    menuContainer.innerHTML = "";
    menuSections.forEach((section) => {
        const sectionEl = document.createElement("section");
        sectionEl.className = "menu-section";
        sectionEl.id = section.id;

        const heading = document.createElement("h2");
        heading.textContent = section.label[language] || section.label.en;
        sectionEl.appendChild(heading);

        section.items.forEach((item) => {
            const itemEl = document.createElement("article");
            itemEl.className = "menu-item";

            const headerEl = document.createElement("div");
            headerEl.className = "menu-item-header";

            const nameEl = document.createElement("div");
            nameEl.className = "menu-item-name";
            nameEl.textContent = item.name[language] || item.name.en;

            const priceEl = document.createElement("div");
            priceEl.className = "menu-item-price";
            priceEl.textContent = item.price;

            const ingredientsEl = document.createElement("p");
            ingredientsEl.className = "menu-item-ingredients";
            ingredientsEl.textContent = item.ingredients[language] || item.ingredients.en;

            headerEl.appendChild(nameEl);
            headerEl.appendChild(priceEl);
            itemEl.appendChild(headerEl);
            itemEl.appendChild(ingredientsEl);

            sectionEl.appendChild(itemEl);
        });

        menuContainer.appendChild(sectionEl);
    });
}

function setLanguage(language) {
    const selectedLanguage = translations[language] ? language : "en";
    updateStaticCopy(selectedLanguage);
    renderMenu(selectedLanguage);
    languageSelect.value = selectedLanguage;
}

languageSelect.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

setLanguage("en");
