-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2024 at 03:03 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lms_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `calendar`
--

CREATE TABLE `calendar` (
  `event_id` int(11) NOT NULL,
  `event_name` varchar(255) NOT NULL,
  `event_start_date` datetime NOT NULL,
  `event_end_date` datetime NOT NULL,
  `category` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `position`
--

CREATE TABLE `position` (
  `position_id` int(11) NOT NULL,
  `position_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `position`
--

INSERT INTO `position` (`position_id`, `position_name`) VALUES
(1, 'IT'),
(2, 'PL'),
(3, 'English'),
(4, 'Training'),
(5, 'Social Development');

-- --------------------------------------------------------

--
-- Table structure for table `request_leave`
--

CREATE TABLE `request_leave` (
  `leave_id` int(11) NOT NULL,
  `type_leave` int(11) NOT NULL,
  `start_leave` varchar(255) NOT NULL,
  `end_leave` varchar(255) NOT NULL,
  `checked` varchar(255) DEFAULT NULL,
  `process` varchar(255) DEFAULT NULL,
  `reason` varchar(225) NOT NULL,
  `date_request` varchar(20) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `type_leave`
--

CREATE TABLE `type_leave` (
  `type_leave_id` int(11) NOT NULL,
  `type_leave_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `type_leave`
--

INSERT INTO `type_leave` (`type_leave_id`, `type_leave_name`) VALUES
(1, 'Vacation'),
(2, 'Sick leave'),
(3, 'Personal leave'),
(4, 'Maternity leave'),
(5, 'Paternity leave'),
(6, 'Bereavement leave'),
(7, 'Training leave'),
(8, 'Birthday'),
(9, 'Work from home');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `lname` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `otp` int(10) DEFAULT NULL,
  `sendInvite` varchar(10) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `position_id` int(11) NOT NULL,
  `position_name` varchar(50) DEFAULT NULL,
  `place` varchar(200) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `manager` int(11) NOT NULL,
  `day_can_leave` int(11) DEFAULT NULL,
  `taken` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `fname`, `lname`, `password`, `email`, `otp`, `sendInvite`, `gender`, `country`, `role`, `position_id`, `position_name`, `place`, `picture`, `manager`, `day_can_leave`, `taken`) VALUES
(1, 'sopanha', 'sin', '$2y$10$k7n.pE8t91elY8dKMiROXOCOVEjlmOP/GlRtlOP44ZlWWC51Hes6e', 'sopanha@gmail.com', 374125, '', 'Male', 'Cambodia', 'admin', 1, NULL, 'Phnom Penh', '65e9ea58cbaec.jpg', 0, NULL, 0),
(2, 'Rin', 'Youern', '$2y$10$KdLvYUBiDsfFUUH.3UmEZeFGAzx28NM4bC7S1l7Ij8uNgxOwSSLgm', 'rin@gmail.com', NULL, '', 'Male', '', 'manager', 1, 'Header IT', '', '66022106dd3f1.jpg', 0, 2, 0),
(3, 'KIm', 'Leang', '$2y$10$WvRiUxn3/BkznFMhl/vbZepQGMtfDEfntvvOt2A7vfXSScO.aH9E6', 'kimleang@gmail.com', NULL, '', 'Female', '', 'manager', 3, 'Header English', '', '6602217e93131.jpg', 0, 2, 0),
(4, 'votey', 'chhoeurn', '$2y$10$slzEopjOslLp5.s7GETjSejCh9nRKJiyAmRWfnb.9lng5h0ajAGsu', 'votey@gmail.com', NULL, '', 'Female', '', 'manager', 2, 'Header PL', '', '66022161aec27.jpg', 0, 2, 0),
(5, 'Chorn', 'Chorn', '$2y$10$MJ9UDmawhZrSEed8XA4Ws.phgPjXxWy0Sk8h03XhSt6QeREX6P9b.', 'Chorn@gmail.com', NULL, '', 'Male', '', 'manager', 4, 'Header Training', '', '6602212881f27.jpg', 0, 2, 0),
(6, 'thida', 'sem', '$2y$10$oe.e1yQbPmG9/1GbuCuD.u2rixcd5b9lIBcRbwdcUSjNayQx0EleS', 'thida@gmail.com', NULL, '', 'female', '', 'manager', 3, 'Leader', '', 'female.jpg', 3, 2, 0),
(7, 'Many', 'Dia', '$2y$10$WHyW5mSEZGo6rwrjih9qjeGgS1skt7BQBLkBkPMAT9ZU2wkPxhErS', 'many@gmail.com', NULL, '', 'Female', '', 'manager', 2, 'Teach', '', 'female.jpg', 4, 2, 0),
(8, 'Dara', 'Kim', '$2y$10$kCaawoOwpgqS1c2LN3ws1OoLtsX4/AIBrfsp5rdYSvTPcCNeFtRLe', 'dara@gmail.com', NULL, '', 'Male', '', 'manager', 4, 'Teach', '', 'man.png', 5, 2, 0),
(9, 'Cheda', 'Him', '$2y$10$U1bVbm.w4HLz9qmGvPhHWO3nCTBeNPfTbs2QAurLN/BnL8oqD/z6e', 'cheda@gmail.com', NULL, '', 'Male', '', 'manager', 1, 'Teach', '', 'man.png', 2, 2, 0),
(12, 'chanda', 'sem', '$2y$10$mX7.oH6v.aTWbB69/2jy6e9/TP46kLYp0wYf0oh.5CtvoNHKRBp6q', 'da@gmail.com', NULL, '', 'Female', '', 'employee', 1, 'teacher', '', 'female.jpg', 9, 2, 0),
(13, 'chanthou', 'va', '$2y$10$XqYacBj0gR720I8r0jw9g.y6GmTg2qpf87J5.uP9obJj005rLt1oa', 'va@gmail.com', NULL, '', 'Male', '', 'employee', 1, 'teacher', '', 'man.png', 9, 2, 0),
(14, 'mala', 'meng', '$2y$10$Z6c/tAKz.eFyrzRAu1BHhOJsTlI1PeGpxYHY2/SL3dhTYzvRrBeaC', 'la@gmail.com', NULL, '', 'Female', '', 'employee', 1, 'teacher', '', 'female.jpg', 9, 2, 0),
(15, 'sally', 'dy', '$2y$10$YsaUlULeL2OIFHiwR6uc7upjxHjdzWqoFNPEM8K8cH9FCHSs964GO', 'sally@gmail.com', NULL, '', 'Female', '', 'employee', 2, 'teacher', '', 'female.jpg', 7, 2, 0),
(16, 'sakong', 'van', '$2y$10$gsOtbNT4rhRz0qmm0a2dNOmAJ5NSJ7suH7uhvBAR1M.i5TqRBjm.m', 'sakong@gmail.com', NULL, '', 'Male', '', 'employee', 2, 'teacher', '', 'man.png', 7, 2, 0),
(17, 'vanda', 'keam', '$2y$10$.4monrhXLbBXGxrF1iYZuuys.S7NBJx0mGrSRw5gtcZjGx4imBYZO', 'vanda@gmail.com', NULL, '', 'Male', '', 'employee', 2, 'teacher', '', 'man.png', 7, 2, 0),
(18, 'hong', 'heng', '$2y$10$Se/ktPp26RlDTsQX5NUVwOpNsko0vYgzWRx3DCXXNWjV7mLNicghe', 'hong@gmail.com', NULL, '', 'Male', '', 'employee', 3, 'teacher', '', 'man.png', 6, 2, 0),
(19, 'fongki', 'meng', '$2y$10$N0Ca41RRbj0otvwHMuduouqemNhJX0jMt2qUl0Sf2Rv2miMWERh8S', 'fong@gmail.com', NULL, '', 'Male', '', 'employee', 3, 'teacher', '', 'man.png', 6, 2, 0),
(20, 'chandy', 'thou', '$2y$10$sgtkXuY9dEc9PlLlZsAGi.9BtK7z6yJ2pqcegxBpXrBq/XYYan5PS', 'chandy@gmail.com', NULL, '', 'Female', '', 'employee', 3, 'teacher', '', 'female.jpg', 6, 2, 0),
(21, 'vany', 'chan', '$2y$10$9Zua9k7OTG2kYzw2xnXWwOMex7BP2sqs2OgaAvFHNHBB.N0DCkyze', 'vanny@gmail.com', NULL, '', 'Female', '', 'employee', 4, 'teacher', '', 'female.jpg', 8, 2, 0),
(22, 'cha', 'em', '$2y$10$5TC3lp4d7Y1aqLDqLgdVaOtmHHp1zk.4dC2OrpvZQl6RAJM0RkqH2', 'cha@gmail.com', NULL, '', 'Male', '', 'employee', 4, 'teacher', '', 'man.png', 9, 2, 0),
(23, 'ryfin', 'sok', '$2y$10$VANs5Tnti1dB4VKuSOfOHOIckhC/nKNgJDJSe47gTVNiuhzRUyxXa', 'ryfin@gmail.com', NULL, '', 'Male', '', 'employee', 4, 'teacher', '', 'man.png', 8, 2, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calendar`
--
ALTER TABLE `calendar`
  ADD PRIMARY KEY (`event_id`),
  ADD KEY `calendar_user_id_foreign` (`user_id`);

--
-- Indexes for table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`position_id`);

--
-- Indexes for table `request_leave`
--
ALTER TABLE `request_leave`
  ADD PRIMARY KEY (`leave_id`),
  ADD KEY `type_leave` (`type_leave`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `type_leave`
--
ALTER TABLE `type_leave`
  ADD PRIMARY KEY (`type_leave_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `users_position_id_foreign` (`position_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calendar`
--
ALTER TABLE `calendar`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `position`
--
ALTER TABLE `position`
  MODIFY `position_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `request_leave`
--
ALTER TABLE `request_leave`
  MODIFY `leave_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `type_leave`
--
ALTER TABLE `type_leave`
  MODIFY `type_leave_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `calendar`
--
ALTER TABLE `calendar`
  ADD CONSTRAINT `calendar_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `request_leave`
--
ALTER TABLE `request_leave`
  ADD CONSTRAINT `request_leave_ibfk_1` FOREIGN KEY (`type_leave`) REFERENCES `type_leave` (`type_leave_id`),
  ADD CONSTRAINT `request_leave_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_position_id_foreign` FOREIGN KEY (`position_id`) REFERENCES `position` (`position_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
