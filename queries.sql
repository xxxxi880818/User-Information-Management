
--Table structure for table `user_info`
CREATE TABLE `user_info` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(250) NOT NULL,
  `last_name` varchar(250) NOT NULL,
  `mobile` VARCHAR(20) NOT NULL,
  `title` VARCHAR(20),
  `email_address` VARCHAR(255) NOT NULL,
  `address_line_1` VARCHAR(255) NOT NULL,
  `address_line_2` VARCHAR(255),
  `town` VARCHAR(255) NOT NULL,
  `county_city` VARCHAR(255) NOT NULL,
  `eircode` VARCHAR(20),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--Dumping data for table `user_info`

INSERT INTO user_info (first_name, last_name, mobile, title, email_address, address_line_1, address_line_2, Town, county_city, eircode)
VALUES
('John', 'Doe', '1234567890', 'Mr', 'john.doe@example.com', '123 Main St', 'Apt 101', 'New York', 'New York', '10001'),
('Jane', 'Smith', '0987654321', 'Ms', 'jane.smith@example.com', '456 Elm St', NULL, 'Los Angeles', 'California', '90001'),
('Michael', 'Johnson', '5551234567', 'Dr', 'michael.johnson@example.com', '789 Oak St', 'Suite 202', 'Chicago', 'Illinois', '60601');

