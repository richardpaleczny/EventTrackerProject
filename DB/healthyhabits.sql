-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema healthyhabitsdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `healthyhabitsdb` ;

-- -----------------------------------------------------
-- Schema healthyhabitsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `healthyhabitsdb` DEFAULT CHARACTER SET utf8 ;
USE `healthyhabitsdb` ;

-- -----------------------------------------------------
-- Table `healthy_habits`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `healthy_habits` ;

CREATE TABLE IF NOT EXISTS `healthy_habits` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `activity` VARCHAR(500) NOT NULL,
  `recommended_time` INT(50) NULL,
  `recommended_amount` INT(50) NULL,
  `time_spent` INT(50) NULL,
  `goal_met` TINYINT NULL,
  `feeling_rating` INT(50) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS healthyhabits@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'healthyhabits'@'localhost' IDENTIFIED BY 'healthyhabits';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'healthyhabits'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `healthy_habits`
-- -----------------------------------------------------
START TRANSACTION;
USE `healthyhabitsdb`;
INSERT INTO `healthy_habits` (`id`, `activity`, `recommended_time`, `recommended_amount`, `time_spent`, `goal_met`, `feeling_rating`) VALUES (1, 'Meditation', 30, 1, 30, 1, 10);
INSERT INTO `healthy_habits` (`id`, `activity`, `recommended_time`, `recommended_amount`, `time_spent`, `goal_met`, `feeling_rating`) VALUES (2, 'Water Consumption', 0, 8, 0, 0, 5);
INSERT INTO `healthy_habits` (`id`, `activity`, `recommended_time`, `recommended_amount`, `time_spent`, `goal_met`, `feeling_rating`) VALUES (3, 'Daily Caloric Intake', 0, 2500, 0, 1, 5);
INSERT INTO `healthy_habits` (`id`, `activity`, `recommended_time`, `recommended_amount`, `time_spent`, `goal_met`, `feeling_rating`) VALUES (4, 'Exercise', 60, 1, 60, 1, 9);
INSERT INTO `healthy_habits` (`id`, `activity`, `recommended_time`, `recommended_amount`, `time_spent`, `goal_met`, `feeling_rating`) VALUES (5, 'Medication Taken', 0, 0, 0, 1, 8);
INSERT INTO `healthy_habits` (`id`, `activity`, `recommended_time`, `recommended_amount`, `time_spent`, `goal_met`, `feeling_rating`) VALUES (6, 'Less than X Time Spent on Timewaster', 30, 0, 60, 0, 3);
INSERT INTO `healthy_habits` (`id`, `activity`, `recommended_time`, `recommended_amount`, `time_spent`, `goal_met`, `feeling_rating`) VALUES (7, 'Time in Nature', 30, 1, 30, 1, 7);
INSERT INTO `healthy_habits` (`id`, `activity`, `recommended_time`, `recommended_amount`, `time_spent`, `goal_met`, `feeling_rating`) VALUES (8, 'Bed on Time', 0, 0, 0, 1, 7);
INSERT INTO `healthy_habits` (`id`, `activity`, `recommended_time`, `recommended_amount`, `time_spent`, `goal_met`, `feeling_rating`) VALUES (9, 'Wake up on Time', 0, 0, 0, 0, 3);
INSERT INTO `healthy_habits` (`id`, `activity`, `recommended_time`, `recommended_amount`, `time_spent`, `goal_met`, `feeling_rating`) VALUES (10, 'Self-relaxation time', 60, 0, 60, 1, 8);
INSERT INTO `healthy_habits` (`id`, `activity`, `recommended_time`, `recommended_amount`, `time_spent`, `goal_met`, `feeling_rating`) VALUES (11, 'Time Spent Learning', 60, 0, 40, 0, 2);
INSERT INTO `healthy_habits` (`id`, `activity`, `recommended_time`, `recommended_amount`, `time_spent`, `goal_met`, `feeling_rating`) VALUES (12, 'Time Spent Planning Future Goals', 30, 0, 30, 1, 6);

COMMIT;

