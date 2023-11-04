const list = document.getElementById("list");
const FillTemplate = () => {
  const data = {
    tours: [
      {
        img: "https://bomba-tour.com/system/travel_dates/image_uks/000/004/390/webp_original/1-6.11.webp",
        title: "Величний Стамбул",
        description: "",
      },
      {
        img: "https://bomba-tour.com/system/travel_dates/image_uks/000/004/953/webp_original/24-29.10.webp",
        title: "Відпустка на Буковелі в Карпатах",
        description:
          "Друзі, запрошуємо в крутезну відпустку в самому серці Карпат - Буковелі! Незабутній драйвовий відпочинок на 5 днів в обіймах краси гірської природи. Ми зібрали найтоповіші та найцікавіші локації Карпат",
      },
      {
        img: "https://bomba-tour.com/system/travel_dates/image_uks/000/004/835/webp_original/п.webp",
        title: "Незвідана Румунія",
        description:
          "Вихідні у Трансильванії! Нас чекають екскурсії містами Румунії: Брашов та Сибіу. А також, познайомимось з містичною Румунією в замках Бран, Пелеш та Кантакузино, дізнаємось історії та міфи про Графа Дракулу, та ще безліч цікавого. Хутчіш бронюй місце і вирушай в захоплюючий вікенд разом з командою Бомба-Тур",
      },
      {
        img: "https://bomba-tour.com/system/travel_dates/image_uks/000/004/495/webp_original/9-12.11.webp",
        title: "Вікенд у Відні",
        description:
          "Запрошуємо Вас у незабутню подорож до Європи. Розпочнемо наш тур зі знайомства із містом Краків. Побачимо замок Вавель і район Казімєж. Також ми завітаємо до Відня, де відвідаємо палац Шенбрунн та штрудель-шоу. Гайда з нами за враженнями! ",
      },
      {
        img: "https://img.poehalisnami.ua/static/hotels/egipet/sharm-el-shejjkh/h343/orig/booking343_1343_637739528890200579.jpg",
        title: "Royal Albatros Moderna",
        description:
          "Готель Royal Albatros Moderna на узбережжі затоки Набк Бей. До послуг гостей піщаний пляж з кораловим рифом, кілька басейнів, водні гірки, spa-центр, тренажерний зал, анімаційні програми протягом дня та ввечері. Готель відмінно підійде для сімейного та молодіжного відпочинку.",
      },
      {
        img: "https://img.poehalisnami.ua/static/hotels/egipet/sharm-el-shejjkh/h343/orig/booking343_1343_637739528890200579.jpg",
        title: "Albatros Beach Club Abu Soma",
        description:
          "Готель Royal Albatros Moderna на узбережжі затоки Набк Бей. До послуг гостей піщаний пляж з кораловим рифом, кілька басейнів, водні гірки, spa-центр, тренажерний зал, анімаційні програми протягом дня та ввечері. Готель відмінно підійде для сімейного та молодіжного відпочинку.",
      },
      {
        img: "https://bomba-tour.com/system/travel_dates/image_uks/000/004/869/webp_original/5-9.webp",
        title: "Серце Нідерландів - Амстердам",
        description:
          "Амстердам - місто свободи, викликів та насиченого життя! Ми запускаємо захоплюючий вікенд в столицю Нідерландів! Познайомимося з колоритом Амстера, відвідаємо найпопулярніші локації, завітаємо у справжнє родовище традицій країни - містечко Заансе-Сханс та Волендам.",
      },
      {
        img: "https://bomba-tour.com/system/travel_dates/image_uks/000/004/525/webp_original/9-12.11.webp",
        title: "Усі секрети праги",
        description:
          "Запрошуємо в подорож до столиці Чехії. У нашому турі ми пізнаємо Прагу з усіх ракурсів: проникнемось атмосферою міста під час оглядової екскурсії, насолодимося панорамою з висоти Празького граду та помилуємось краєвидами з палуби кораблика, що неспішно рухається по Влтаві. ",
      },
    ],
  };
  let template = Handlebars.compile(document.getElementById("template").innerHTML);
  let filled = template(data);
  list.innerHTML = filled;
};

FillTemplate();
