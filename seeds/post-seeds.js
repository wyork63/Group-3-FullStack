const { Post } = require('../models');

const postdata = [
  {
    title: 'Wow Spain is so cool you gotta check out this spot!',
    text: 'Spain is a country in southwestern Europe with parts of territory in the Atlantic Ocean and across the Mediterranean Sea.[12][h] The largest part of Spain is situated on the Iberian Peninsula; its territory also includes the Canary Islands in the Atlantic Ocean, the Balearic Islands in the Mediterranean Sea, the autonomous cities of Ceuta and Melilla, and several minor overseas territories also scattered along the Moroccan coast of the Alboran Sea.[13] The countrys mainland is bordered to the south by Gibraltar; to the south and east by the Mediterranean Sea; to the north by France, Andorra and the Bay of Biscay; and to the west by Portugal and the Atlantic Ocean.',
    user_id: 1,
    country_id: 2
  },
  {
    title: 'Italy is nice and has good pizza',
    text: 'Due to its central geographic location in Southern Europe and the Mediterranean, Italy has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy,[23] Greeks established settlements in the so-called Magna Graecia of Southern Italy,',
    user_id: 1,
    country_id: 1
  },
  {
    title: 'This city in Turkei is a must go',
    text: 's a transcontinental country located mainly on Anatolia in Western Asia, with a portion on the Balkans in Southeast Europe. It shares borders with Greece and Bulgaria to the northwest; the Black Sea to the north; Georgia to the northeast; Armenia, Azerbaijan, and Iran to the east; Iraq to the southeast; Syria and the Mediterranean Sea to the south; and the Aegean Sea to the west. Cyprus is loca',
    user_id: 2,
    country_id: 5
  },
  {
    title: 'This restaraunt is a must go in Spain',
    text: 'Founded as a Roman city, in the Middle Ages Barcelona became the capital of the County of Barcelona. After joining with the Kingdom of Aragon to form the confederation of the Crown of Aragon, Barcelona, which continued to be the capital of the Principality of Catalonia, became the most important city in the Crown of Aragon and the main economic and administrative centre of the Crown, only to be overtaken by Valencia, wrested from A',
    user_id: 3,
    country_id: 2
  },
  {
    title: 'Chicago is my favorite place to visit in the US',
    text: 'Located on the shores of freshwater Lake Michigan, Chicago was incorporated as a city in 1837 near a portage between the Great Lakes and the Mississippi River watershed. It grew rapidly in the mid-19th century;[7] by 1860, Chicago was the youngest U.S. city to exceed a population of 100,000.',
    user_id: 3,
    country_id: 4
  },
  {
    title: 'These tips are must knows before going to the Buckingham palace',
    text: 'Originally known as Buckingham House, the building at the core of todays palace was a large townhouse built for the Duke of Buckingham in 1703 on a site that had been in private ownership for at least 150 years. It was acquired by King George III in 1761 as a private residence for Queen Charlotte and became known as The Queens House',
    user_id: 4,
    country_id: 3
  },
  {
    title: 'Things to know before travelign to Great Britain',
    text: 'Connected to mainland Europe until 8,000 years ago, Great Britain has been inhabited by modern humans for around 30,000 years. In 2011, the island had a population of about 61 million people, making it the worlds third-most-populous island after Java in Indonesia and Honshu in Japan',
    user_id: 1,
    country_id: 3
  },
  {
    title: 'Best sushi place in the US',
    text: 'The earliest form of sushi, a dish today known as narezushi, has its probable origin with the Baiyue and paddy fields of ancient southern China. The prototypical narezushi is made by lacto-fermenting fish with salt and rice in order to control putrefaction.[1] In Japan the dishs distribution overlaps with the introduction of wet-field rice cultivation during the Yayoi period.[1][4] Passages relate ancient Japanese people with legendary King Shao Kang ruling over the Yangtze delta.',
    user_id: 1,
    country_id: 4
  },
  {
    title: 'Read this blog before going to Turkey',
    text: 'The Anatolian peninsula, comprising most of modern Turkey, is one of the oldest permanently settled regions in the world. Various ancient Anatolian populations have lived in Anatolia, from at least the Neolithic until the Hellenistic period.[12] Many of these peoples spoke the Anatolian languages, a branch of the large',
    user_id: 3,
    country_id: 5
  },
  {
    title: 'the perfect day in Rome: ten tips to make the most of a trip',
    text: 'Romes history spans 28 centuries. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it a major human settlement for almost three millennia and one of the oldest continuously occupied cities in Europe.[9] The city',
    user_id: 2,
    country_id: 1
  },
  {
    title: 'Uknown spots in Spain',
    text: 'Anatomically modern humans first arrived in the Iberian Peninsula around 42,000 years ago.[14] The first cultures and peoples that developed in current Spanish territory were Pre-Roman peoples such as the ancient Iberians, Celts, Celtiberians, Vascones, and Turdetani. Later, foreign Mediterranean peoples such as the Phoenicians and ancient Greeks ',
    user_id: 3,
    country_id: 2
  },
  {
    title: 'Best cities to travel to in the United States',
    text: 'The first documentary evidence of the phrase "United States of America" dates from a January 2, 1776 letter written by Stephen Moylan to George Washingtons aide-de-camp Joseph Reed. Moylan expressed his wish to go "with full and ample powers from the United States of America to Spain to seek assistance in the revolutionary war effort.[32][33][34] The first known publication of the phrase "United States of America was in an anonymous essay in The Virginia Gazette newspaper in Williamsburg, on April 6, 1776.',
    user_id: 2,
    country_id: 4
  },
  {
    title: 'My favorite spots to visit in Turkey',
    text: 'According to Article 142 of the Turkish Constitution, the organisation, duties and jurisdiction of the courts, their functions and the trial procedures are regulated by law. In line with the aforementioned article of the Turkish Constitution and related laws, the court system in Turkey can be classified under three main categories;',
    user_id: 2,
    country_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
