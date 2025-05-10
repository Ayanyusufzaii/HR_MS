-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: hrms
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `all_leaves`
--

DROP TABLE IF EXISTS `all_leaves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `all_leaves` (
  `id` int NOT NULL AUTO_INCREMENT,
  `leaveType` varchar(255) NOT NULL,
  `fromDate` date NOT NULL,
  `toDate` date NOT NULL,
  `status` enum('Pending','Approved','Rejected') DEFAULT 'Pending',
  `emailId` varchar(255) NOT NULL,
  `reason` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `all_leaves`
--

LOCK TABLES `all_leaves` WRITE;
/*!40000 ALTER TABLE `all_leaves` DISABLE KEYS */;
INSERT INTO `all_leaves` VALUES (30,'Sick','2025-05-12','2025-05-15','Approved','ayan.khan@kaizenque.com','shghs'),(31,'Annual','2025-05-08','2025-05-09','Rejected','ayan.khan@kaizenque.com','dfghf'),(32,'Sick','2025-05-08','2025-05-10','Approved','ayan.khan@kaizenque.com','dgsdgsdgsd'),(33,'Annual','2025-05-08','2025-05-15','Approved','sarthak@kaizenque.com','kokokoko'),(34,'Sick','2025-05-12','2025-05-20','Rejected','ayan.khan@kaizenque.com','bnbnbnb'),(35,'Sick','2025-05-08','2025-05-15','Rejected','ayan.khan@kaizenque.com','Testinghgruh'),(37,'Sick','2025-05-09','2025-05-15','Approved','k@kaizenque.com','gsgbsd'),(38,'Annual','2025-05-12','2025-05-31','Approved','ayan.khan@kaizenque.com','fffff'),(39,'Annual','2025-05-20','2025-05-22','Rejected','ayan.khan@kaizenque.com','jrthjtjh'),(40,'Annual','2025-05-29','2025-05-30','Rejected','ayan.khan@kaizenque.com','dgnhjdrjh'),(41,'Sick','2025-05-05','2025-05-12','Approved','testing@kaizenque.com','xcfbsfb');
/*!40000 ALTER TABLE `all_leaves` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-10 14:50:30
