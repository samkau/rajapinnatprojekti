-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema rent_a_car_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema rent_a_car_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rent_a_car_db` DEFAULT CHARACTER SET utf8 ;
USE `rent_a_car_db` ;
DROP TABLE IF EXISTS `rent_a_car_db`.`user` ;
DROP TABLE IF EXISTS `rent_a_car_db`.`car` ;
DROP TABLE IF EXISTS `rent_a_car_db`.`rent` ;
-- -----------------------------------------------------
-- Table `rent_a_car_db`.`user`
-- -----------------------------------------------------
CREATE TABLE `rent_a_car_db`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `user_email` VARCHAR(45) NOT NULL UNIQUE,
  `user_phone` INT NOT NULL UNIQUE,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rent_a_car_db`.`car`
-- -----------------------------------------------------
CREATE TABLE `rent_a_car_db`.`car` (
  `car_id` INT NOT NULL AUTO_INCREMENT,
  `license_plate` VARCHAR(45) NOT NULL UNIQUE,
  `brand` VARCHAR(45) NOT NULL,
  `model` VARCHAR(45) NOT NULL,
  `makeyear` INT NOT NULL,
  `owner_id` INT NOT NULL,
  `available` TINYINT(1) NOT NULL,
  `available_from` DATETIME NOT NULL,
  PRIMARY KEY (`car_id`),
  INDEX `fk_car_owner_idx` (`owner_id` ASC),
  CONSTRAINT `fk_car_owner`
    FOREIGN KEY (`owner_id`)
    REFERENCES `rent_a_car_db`.`user` (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rent_a_car_db`.`rent`
-- -----------------------------------------------------
CREATE TABLE `rent_a_car_db`.`rent` (
  `rent_id` INT NOT NULL AUTO_INCREMENT, 
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  `car_id` INT NOT NULL,
  `driving_license_no` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`rent_id`),
  CONSTRAINT `fk_rent_car`
    FOREIGN KEY (`car_id`)
    REFERENCES `rent_a_car_db`.`car` (`car_id`))
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO `rent_a_car_db`.`user` (`user_name`,`user_email`,`user_phone`) VALUES ('Jackson Jackson', 'efwf@wdwf.com', 044400005) ;
INSERT INTO `rent_a_car_db`.`user` (`user_name`,`user_email`,`user_phone`) VALUES ('Billy Boy', 'jjjjf@yyy.com', 044400075) ;
INSERT INTO `rent_a_car_db`.`user` (`user_name`,`user_email`,`user_phone`) VALUES ('Danny Boy', 'jhhhh@lll.com', 044400065) ;
INSERT INTO `rent_a_car_db`.`user` (`user_name`,`user_email`,`user_phone`) VALUES ('Alice Boy', 'oooo@yyy.com', 044400775) ;
INSERT INTO `rent_a_car_db`.`user` (`user_name`,`user_email`,`user_phone`) VALUES ('Bob Boy', 'pppf@yyy.com', 044400895) ;

INSERT INTO `rent_a_car_db`.`car` (`license_plate`,`brand`,`model`,`makeyear`,`owner_id`,`available`,`available_from`) VALUES ('ckc-333', 'toyota', 'yaris dasd2',2000, 1, false, '2019-03-01 17:00:00') ;
INSERT INTO `rent_a_car_db`.`car` (`license_plate`,`brand`,`model`,`makeyear`,`owner_id`,`available`,`available_from`) VALUES ('ckk-313', 'toyota', 'yaris dasd3',2005, 1, true, curdate()) ;
INSERT INTO `rent_a_car_db`.`car` (`license_plate`,`brand`,`model`,`makeyear`,`owner_id`,`available`,`available_from`) VALUES ('xxx-123', 'BMW', 'x1 sdad',1999, 2, true, curdate()) ;
INSERT INTO `rent_a_car_db`.`car` (`license_plate`,`brand`,`model`,`makeyear`,`owner_id`,`available`,`available_from`) VALUES ('ccc-322', 'Audi', 'a3 tdi2',2006, 4, true, curdate()) ;
INSERT INTO `rent_a_car_db`.`car` (`license_plate`,`brand`,`model`,`makeyear`,`owner_id`,`available`,`available_from`) VALUES ('bbb-313', 'Wolkswagen', 'golf 1.2fd',2000, 5, true, curdate()) ;

INSERT INTO `rent_a_car_db`.`rent` (`start_date`,`end_date`,`car_id`,`driving_license_no`) VALUES ('2019-03-01 18:00:00', '2019-03-02 18:00:00', 1, '230487-339N') ;
INSERT INTO `rent_a_car_db`.`rent` (`start_date`,`end_date`,`car_id`,`driving_license_no`) VALUES ('2019-03-20 18:00:00', '2019-03-25 18:00:00', 2, '230487-339N') ;
INSERT INTO `rent_a_car_db`.`rent` (`start_date`,`end_date`,`car_id`,`driving_license_no`) VALUES ('2019-02-26 18:00:00', '2019-03-01 17:00:00', 1, '121266-444M') ;
INSERT INTO `rent_a_car_db`.`rent` (`start_date`,`end_date`,`car_id`,`driving_license_no`) VALUES ('2019-03-01 18:00:00', '2019-03-02 18:00:00', 3, '090998-322ON') ;
INSERT INTO `rent_a_car_db`.`rent` (`start_date`,`end_date`,`car_id`,`driving_license_no`) VALUES ('2019-04-01 18:00:00', '2019-04-06 18:00:00', 5, '230489-588N') ;
