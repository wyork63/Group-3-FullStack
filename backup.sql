-- MySQL dump 10.13  Distrib 8.0.28, for macos12.0 (arm64)
--
-- Host: localhost    Database: travel_db
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `activity_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `post_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `activity_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activityLog`
--

DROP TABLE IF EXISTS `activityLog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activityLog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `activity_id` int DEFAULT NULL,
  `post__id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `activity_id` (`activity_id`),
  KEY `post__id` (`post__id`),
  CONSTRAINT `activitylog_ibfk_1` FOREIGN KEY (`activity_id`) REFERENCES `activity` (`id`),
  CONSTRAINT `activitylog_ibfk_2` FOREIGN KEY (`post__id`) REFERENCES `post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activityLog`
--

LOCK TABLES `activityLog` WRITE;
/*!40000 ALTER TABLE `activityLog` DISABLE KEYS */;
/*!40000 ALTER TABLE `activityLog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment_text` text NOT NULL,
  `user_id` int NOT NULL,
  `post_id` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `comment_post_id_user_id_unique` (`user_id`,`post_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'Wow you are right this place is rad!',2,3,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(2,'Such a cool spot thank you for sharing',2,4,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(3,'This was an awesome right up! Thank you for sharing with us',1,2,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(4,'dang this sounds like a great experience hope to go soon',2,1,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(5,'I got food poisioning at that little caesars! Dont go',4,1,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(6,'this was a cool spot to go to, but the lines took forever!',4,3,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(7,'I will not go to this place ever again, such a waste of time!',4,4,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(8,'You are right! This place is sweet!',1,4,'2022-03-09 22:51:25','2022-03-09 22:51:25');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Italy','2022-03-09 22:51:25','2022-03-09 22:51:25'),(2,'Spain','2022-03-09 22:51:25','2022-03-09 22:51:25'),(3,'Great Britain','2022-03-09 22:51:25','2022-03-09 22:51:25'),(4,'USA','2022-03-09 22:51:25','2022-03-09 22:51:25'),(5,'Turkie','2022-03-09 22:51:25','2022-03-09 22:51:25');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `user_id` int DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `country_id` (`country_id`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Wow Spain is so cool you gotta check out this spot!','Spain is a country in southwestern Europe with parts of territory in the Atlantic Ocean and across the Mediterranean Sea.[12][h] The largest part of Spain is situated on the Iberian Peninsula; its territory also includes the Canary Islands in the Atlantic Ocean, the Balearic Islands in the Mediterranean Sea, the autonomous cities of Ceuta and Melilla, and several minor overseas territories also scattered along the Moroccan coast of the Alboran Sea.[13] The countrys mainland is bordered to the south by Gibraltar; to the south and east by the Mediterranean Sea; to the north by France, Andorra and the Bay of Biscay; and to the west by Portugal and the Atlantic Ocean.',1,2,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(2,'Italy is nice and has good pizza','Due to its central geographic location in Southern Europe and the Mediterranean, Italy has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy,[23] Greeks established settlements in the so-called Magna Graecia of Southern Italy,',1,1,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(3,'This city in Turkei is a must go','s a transcontinental country located mainly on Anatolia in Western Asia, with a portion on the Balkans in Southeast Europe. It shares borders with Greece and Bulgaria to the northwest; the Black Sea to the north; Georgia to the northeast; Armenia, Azerbaijan, and Iran to the east; Iraq to the southeast; Syria and the Mediterranean Sea to the south; and the Aegean Sea to the west. Cyprus is loca',2,5,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(4,'This restaraunt is a must go in Spain','Founded as a Roman city, in the Middle Ages Barcelona became the capital of the County of Barcelona. After joining with the Kingdom of Aragon to form the confederation of the Crown of Aragon, Barcelona, which continued to be the capital of the Principality of Catalonia, became the most important city in the Crown of Aragon and the main economic and administrative centre of the Crown, only to be overtaken by Valencia, wrested from A',3,2,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(5,'Chicago is my favorite place to visit in the US','Located on the shores of freshwater Lake Michigan, Chicago was incorporated as a city in 1837 near a portage between the Great Lakes and the Mississippi River watershed. It grew rapidly in the mid-19th century;[7] by 1860, Chicago was the youngest U.S. city to exceed a population of 100,000.',3,4,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(6,'These tips are must knows before going to the Buckingham palace','Originally known as Buckingham House, the building at the core of todays palace was a large townhouse built for the Duke of Buckingham in 1703 on a site that had been in private ownership for at least 150 years. It was acquired by King George III in 1761 as a private residence for Queen Charlotte and became known as The Queens House',4,3,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(7,'Things to know before travelign to Great Britain','Connected to mainland Europe until 8,000 years ago, Great Britain has been inhabited by modern humans for around 30,000 years. In 2011, the island had a population of about 61 million people, making it the worlds third-most-populous island after Java in Indonesia and Honshu in Japan',1,3,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(8,'Best sushi place in the US','The earliest form of sushi, a dish today known as narezushi, has its probable origin with the Baiyue and paddy fields of ancient southern China. The prototypical narezushi is made by lacto-fermenting fish with salt and rice in order to control putrefaction.[1] In Japan the dishs distribution overlaps with the introduction of wet-field rice cultivation during the Yayoi period.[1][4] Passages relate ancient Japanese people with legendary King Shao Kang ruling over the Yangtze delta.',1,4,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(9,'Read this blog before going to Turkey','The Anatolian peninsula, comprising most of modern Turkey, is one of the oldest permanently settled regions in the world. Various ancient Anatolian populations have lived in Anatolia, from at least the Neolithic until the Hellenistic period.[12] Many of these peoples spoke the Anatolian languages, a branch of the large',3,5,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(10,'the perfect day in Rome: ten tips to make the most of a trip','Romes history spans 28 centuries. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it a major human settlement for almost three millennia and one of the oldest continuously occupied cities in Europe.[9] The city',2,1,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(11,'Uknown spots in Spain','Anatomically modern humans first arrived in the Iberian Peninsula around 42,000 years ago.[14] The first cultures and peoples that developed in current Spanish territory were Pre-Roman peoples such as the ancient Iberians, Celts, Celtiberians, Vascones, and Turdetani. Later, foreign Mediterranean peoples such as the Phoenicians and ancient Greeks ',3,2,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(12,'Best cities to travel to in the United States','The first documentary evidence of the phrase \"United States of America\" dates from a January 2, 1776 letter written by Stephen Moylan to George Washingtons aide-de-camp Joseph Reed. Moylan expressed his wish to go \"with full and ample powers from the United States of America to Spain to seek assistance in the revolutionary war effort.[32][33][34] The first known publication of the phrase \"United States of America was in an anonymous essay in The Virginia Gazette newspaper in Williamsburg, on April 6, 1776.',2,4,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(13,'My favorite spots to visit in Turkey','According to Article 142 of the Turkish Constitution, the organisation, duties and jurisdiction of the courts, their functions and the trial procedures are regulated by law. In line with the aforementioned article of the Turkish Constitution and related laws, the court system in Turkey can be classified under three main categories;',2,5,'2022-03-09 22:51:25','2022-03-09 22:51:25'),(14,'you gottta check out this place in turkey!!',' The little caesars is soo good ',NULL,5,'2022-03-09 23:13:40','2022-03-09 23:13:40'),(15,'WOw usa is awesome','usa  ',NULL,4,'2022-03-09 23:38:10','2022-03-09 23:38:10'),(16,'LETS SEE THE USA',' USA IS GREAT ',NULL,4,'2022-03-09 23:48:27','2022-03-09 23:48:27'),(17,'Wow usa it so cool','the little caesars is nice ',NULL,4,'2022-03-10 00:06:36','2022-03-10 00:06:36'),(18,'checkout this sweet post about USA',' The usa is so cool ',NULL,4,'2022-03-13 19:07:48','2022-03-13 19:07:48'),(19,'post about italy 313',' wow this post is sweet',NULL,1,'2022-03-13 19:27:44','2022-03-13 19:27:44');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sessions`
--

DROP TABLE IF EXISTS `Sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions`
--

LOCK TABLES `Sessions` WRITE;
/*!40000 ALTER TABLE `Sessions` DISABLE KEYS */;
INSERT INTO `Sessions` VALUES ('5gKlPcs-06nYC85PUHb8Q_xXDZ1Iyuif','2022-03-14 19:31:19','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"user_id\":15,\"username\":\"whatsup\",\"loggedIn\":true}','2022-03-13 19:26:58','2022-03-13 19:31:19');
/*!40000 ALTER TABLE `Sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Will_theTraveler','test4@gmail.com','$2b$10$wCUxFuL98sHS3HsSGqqguOgZK08yz81H8pmWTO37vsNtwaXGRZuSe'),(2,'Wanderlust14','test1@gmail.com','$2b$10$n/S8YBNotqObllsrXRl2gudW5YWEjcGGQmEjZLfFIzIvHT60wG3fq'),(3,'Billy Bob the Traveling Zeitgeist','test2@gmail.com','$2b$10$rNEWAGCUBnus7nnWPuOOOOGY9b1XFbN3lxQlHDoPq6W.96A13cmiu'),(4,'Oscar_Meyer_wanderer','test3@gmail.com','$2b$10$zurZITLcaLfsP5N81qZkPeFPsCxCEDRHZN0qjq7n7WeOlrxamVFRC'),(5,'traveler12','traveler@gmail.com','$2b$10$aEmNHeyX0m1YdFgZEKFUA.8/NlHRj0BxnKkoKf.ZUkbqjsNMq2VJW'),(6,'york','york@gmail.com','$2b$10$qvvj8g8qC/IVwyJ0GQtl9OoIxL143LbUATlupO/OCSiGx1RP39DD2'),(8,'traveler','bill@gmail.com','$2b$10$zedq4ZJoW9j8qxn4wYexcOip/SyYeABYRgXIjTS3vRgb13VcC5nnm'),(9,'YOEK','GMAIL@MAIL.COM','$2b$10$euBzTPIPRhGmId85urDkPOMfeUVTUOfoF/N60WyzXm1pFRLhrPaOa'),(12,'traveler1','traveler2@gmail.com','$2b$10$whQcZp0uz7yCh7Tm0ytGv.oso7OlZaasWMlgj3waPptk8VB6kx60G'),(13,'billy3','billy63@gmail.com','$2b$10$fW/GtxeTXCGdqzTv1GlwqOKJkc286T1Fql86k3zpqqFygTRvhriJy'),(14,'testy123','test123@gmail.com','$2b$10$moRm3DXOzi5YrFaxcu/EYea6cAucYrS0jY0P7UIo0oTW8.E7VdehC'),(15,'whatsup','test345@gmail.com','$2b$10$D/sgorI5giTr4NHBC1YxCOqKYayVU21K09/A3RStEr/3MO7cm2yAW');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-13 15:19:24
