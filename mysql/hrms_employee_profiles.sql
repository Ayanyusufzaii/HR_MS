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
-- Table structure for table `employee_profiles`
--

DROP TABLE IF EXISTS `employee_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_profiles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `contact_no` varchar(15) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `alternate_contact` varchar(15) DEFAULT NULL,
  `emergency_contact` varchar(15) DEFAULT NULL,
  `blood_group` varchar(5) DEFAULT NULL,
  `permanent_address` text,
  `current_address` text,
  `aadhar_number` varchar(20) DEFAULT NULL,
  `pan_number` varchar(20) DEFAULT NULL,
  `department` varchar(100) DEFAULT NULL,
  `job_role` varchar(100) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `doj` date DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `employee_id` varchar(255) NOT NULL,
  `aadhar_card` varchar(255) DEFAULT NULL,
  `pan_card` varchar(255) DEFAULT NULL,
  `salary_slips` varchar(255) DEFAULT NULL,
  `educational_certificates` varchar(255) DEFAULT NULL,
  `experience_letters` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `employee_id` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_profiles`
--

LOCK TABLES `employee_profiles` WRITE;
/*!40000 ALTER TABLE `employee_profiles` DISABLE KEYS */;
INSERT INTO `employee_profiles` VALUES (5,'Sarthak','00000000000','sarthak@kaizenque.com','00000000000','00000000000','B+','00000000000','00000000000','00000000000','00000000000','Developer','developer','1977-07-06','2025-05-06','1746708713374.pdf','k544534534',NULL,NULL,NULL,NULL,NULL),(11,'Ayan Khan','6393755232','ayan.khan@kaizenque.com','9696362350','8707287841','B+','117/Q/227-B, Sharda Nagar, Kanpur 208025','Zolo Virgo, Banneghatta Road Near Christ University','8393 6768 6576','FUF67316','Developer','Developer Intern','2002-12-04','2025-04-14','1746789285122-logo.jpg','K0007','1746789285121-logo.pdf','1746789285121-logo.pdf','[\"1746789285121-logo.pdf\"]','[\"1746789285121-logo.pdf\"]','[]'),(12,'HR','00000000','hr@kaizenque.com','0000000000','00000000','O-','000000000','00000000','0000000','0000000','HR','hr','2021-06-09','2025-05-14','1746792166591-logo.jpg','k65','1746792166591-logo.pdf',NULL,'[]','[]','[]');
/*!40000 ALTER TABLE `employee_profiles` ENABLE KEYS */;
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
