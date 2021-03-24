-- MariaDB dump 10.19  Distrib 10.5.9-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: pokemon
-- ------------------------------------------------------
-- Server version	10.5.9-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `pokemon`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `pokemon` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `pokemon`;

--
-- Table structure for table `element_tb`
--

DROP TABLE IF EXISTS `element_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `element_tb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `element_tb`
--

LOCK TABLES `element_tb` WRITE;
/*!40000 ALTER TABLE `element_tb` DISABLE KEYS */;
INSERT INTO `element_tb` VALUES (1,'water'),(2,'earth');
/*!40000 ALTER TABLE `element_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pokemon_element_tb`
--

DROP TABLE IF EXISTS `pokemon_element_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pokemon_element_tb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pokemon_id` int(11) NOT NULL,
  `element_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemon_element_tb`
--

LOCK TABLES `pokemon_element_tb` WRITE;
/*!40000 ALTER TABLE `pokemon_element_tb` DISABLE KEYS */;
INSERT INTO `pokemon_element_tb` VALUES (1,1,1),(2,2,2),(3,2,2),(4,2,1),(6,3,2),(7,3,2);
/*!40000 ALTER TABLE `pokemon_element_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pokemon_tb`
--

DROP TABLE IF EXISTS `pokemon_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pokemon_tb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `str` varchar(10) DEFAULT NULL,
  `def` varchar(100) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemon_tb`
--

LOCK TABLES `pokemon_tb` WRITE;
/*!40000 ALTER TABLE `pokemon_tb` DISABLE KEYS */;
INSERT INTO `pokemon_tb` VALUES (1,'pikachu','100','100','photo'),(2,'bulbasur','100','90','photo'),(3,'pranata','100','20','no Photo');
/*!40000 ALTER TABLE `pokemon_tb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-21 17:06:29
