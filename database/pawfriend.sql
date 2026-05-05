-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: numyspace_db:3306
-- Generation Time: May 05, 2026 at 03:20 AM
-- Server version: 11.0.2-MariaDB-1:11.0.2+maria~ubu2204
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `w25043192`
--

-- --------------------------------------------------------

--
-- Table structure for table `Comment`
--

CREATE TABLE `Comment` (
  `Comment_ID` int(11) NOT NULL,
  `Post_ID` int(11) NOT NULL,
  `User_ID` int(11) NOT NULL,
  `Content` text NOT NULL,
  `Created_at` timestamp NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Comment`
--

INSERT INTO `Comment` (`Comment_ID`, `Post_ID`, `User_ID`, `Content`, `Created_at`, `Updated_at`) VALUES
(1, 1, 3, 'Wow such a cute photo!', '2026-01-20 20:41:54', '2026-01-20 20:41:54'),
(2, 1, 5, 'Take me theree I wanna goo', '2026-01-20 20:52:59', '2026-01-20 20:53:13'),
(3, 1, 6, 'Why are you commenting on your own photo?', '2026-01-22 03:00:00', '2026-01-22 03:00:00'),
(4, 1, 6, 'Shut upp berry', '2026-01-22 03:00:25', '2026-01-22 03:00:25'),
(5, 3, 6, 'Yeah he smol', '2026-01-22 03:00:39', '2026-01-22 03:00:39'),
(6, 2, 6, 'I am thinking of getting a cat and a dog too!!', '2026-01-22 03:01:00', '2026-01-22 03:01:00'),
(7, 1, 3, 'Sry guys i was on his phone', '2026-01-22 03:04:29', '2026-01-22 03:04:29'),
(8, 4, 3, 'Pick a name for them', '2026-01-22 03:04:43', '2026-01-22 03:04:43'),
(9, 4, 3, 'Alrdy hasss', '2026-01-22 03:04:58', '2026-01-22 03:04:58'),
(10, 4, 7, 'They look just like you<3', '2026-01-22 03:06:04', '2026-01-22 03:06:04'),
(12, 5, 3, 'ummm should i be concerned?', '2026-01-22 03:09:31', '2026-01-22 03:09:31'),
(13, 5, 6, 'Yo its so cute', '2026-01-22 03:10:41', '2026-01-22 03:10:41'),
(14, 6, 3, 'Im going there rn', '2026-01-22 03:12:05', '2026-01-22 03:12:05'),
(15, 3, 5, 'Smol but tuff', '2026-01-22 03:23:31', '2026-01-22 03:23:31'),
(16, 7, 6, 'Suppppp you\'re hereee love to see you here man', '2026-01-22 03:35:37', '2026-01-22 03:35:37'),
(17, 5, 9, 'I love hamsters!!', '2026-02-18 00:32:52', '2026-02-18 00:33:04'),
(18, 11, 11, 'sdf', '2026-02-18 14:28:15', '2026-02-18 14:28:15');

-- --------------------------------------------------------

--
-- Table structure for table `Follow`
--

CREATE TABLE `Follow` (
  `Follow_ID` int(11) NOT NULL,
  `Follower_ID` int(11) NOT NULL,
  `Followed_ID` int(11) NOT NULL,
  `Created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Follow`
--

INSERT INTO `Follow` (`Follow_ID`, `Follower_ID`, `Followed_ID`, `Created_at`) VALUES
(2, 5, 3, '2026-01-20 23:58:46'),
(4, 3, 5, '2026-01-21 23:50:18'),
(5, 6, 3, '2026-01-22 02:59:35'),
(6, 6, 5, '2026-01-22 03:01:07'),
(7, 3, 6, '2026-01-22 03:04:34'),
(8, 7, 6, '2026-01-22 03:05:41'),
(9, 7, 3, '2026-01-22 03:05:45'),
(10, 3, 7, '2026-01-22 03:08:58'),
(11, 6, 7, '2026-01-22 03:10:27'),
(12, 5, 6, '2026-01-22 03:23:08'),
(13, 6, 8, '2026-01-22 03:35:11'),
(14, 9, 3, '2026-02-18 00:32:13'),
(15, 9, 8, '2026-02-18 00:32:17'),
(16, 9, 5, '2026-02-18 00:33:27'),
(17, 9, 6, '2026-02-18 00:34:28'),
(18, 9, 7, '2026-02-18 14:32:49'),
(19, 9, 11, '2026-02-18 14:34:39');

-- --------------------------------------------------------

--
-- Table structure for table `Like`
--

CREATE TABLE `Like` (
  `Like_ID` int(11) NOT NULL,
  `Post_ID` int(11) NOT NULL,
  `User_ID` int(11) NOT NULL,
  `Created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Like`
--

INSERT INTO `Like` (`Like_ID`, `Post_ID`, `User_ID`, `Created_at`) VALUES
(2, 1, 3, '2026-01-20 20:40:58'),
(3, 1, 5, '2026-01-20 20:52:51'),
(4, 2, 5, '2026-01-20 23:58:40'),
(5, 2, 3, '2026-01-21 00:24:43'),
(6, 3, 6, '2026-01-22 02:59:31'),
(7, 2, 6, '2026-01-22 02:59:33'),
(8, 1, 6, '2026-01-22 02:59:34'),
(9, 4, 6, '2026-01-22 03:03:42'),
(10, 4, 3, '2026-01-22 03:04:33'),
(11, 4, 7, '2026-01-22 03:05:40'),
(12, 5, 3, '2026-01-22 03:08:59'),
(13, 5, 6, '2026-01-22 03:10:26'),
(14, 6, 3, '2026-01-22 03:11:52'),
(15, 6, 5, '2026-01-22 03:23:05'),
(16, 3, 5, '2026-01-22 03:23:20'),
(17, 7, 6, '2026-01-22 03:35:13'),
(18, 9, 9, '2026-02-18 00:32:10'),
(19, 10, 9, '2026-02-18 00:35:16'),
(20, 9, 10, '2026-02-18 12:09:14'),
(21, 11, 9, '2026-02-18 14:32:53');

-- --------------------------------------------------------

--
-- Table structure for table `pf_accessories`
--

CREATE TABLE `pf_accessories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` enum('hat','collar','toy','background') NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `unlock_type` enum('level','achievement','streak','completions') NOT NULL,
  `unlock_value` int(11) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pf_accessories`
--

INSERT INTO `pf_accessories` (`id`, `name`, `type`, `image_url`, `unlock_type`, `unlock_value`, `description`) VALUES
(23, 'Party Hat', 'hat', 'party-hat', 'level', 2, 'A festive party hat for your pet!'),
(24, 'Baseball Cap', 'hat', 'cap', 'streak', 7, 'Cool cap earned with a 7-day streak'),
(25, 'Crown', 'hat', 'crown', 'level', 5, 'A royal crown for royalty'),
(26, 'Wizard Hat', 'hat', 'wizard-hat', 'level', 8, 'Magical hat for a wise pet'),
(27, 'Top Hat', 'hat', 'top-hat', 'completions', 100, 'Fancy top hat for dedicated owners'),
(28, 'Blue Collar', 'collar', 'collar-blue', 'completions', 1, 'Your first collar!'),
(29, 'Star Collar', 'collar', 'collar-star', 'streak', 3, 'Sparkly star collar'),
(30, 'Rainbow Collar', 'collar', 'collar-rainbow', 'streak', 30, 'The ultimate rainbow collar'),
(31, 'Ball', 'toy', 'ball', 'completions', 10, 'A bouncy ball to play with'),
(32, 'Bone', 'toy', 'bone', 'completions', 25, 'Every dog loves a bone'),
(33, 'Teddy', 'toy', 'teddy', 'completions', 50, 'A cuddly teddy bear friend');

-- --------------------------------------------------------

--
-- Table structure for table `pf_achievements`
--

CREATE TABLE `pf_achievements` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `icon` varchar(50) DEFAULT 'trophy',
  `badge_color` varchar(7) DEFAULT '#FFD700',
  `requirement_type` enum('streak','completions','habits_created','level','days_active') NOT NULL,
  `requirement_value` int(11) NOT NULL,
  `xp_reward` int(11) DEFAULT 20
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pf_achievements`
--

INSERT INTO `pf_achievements` (`id`, `name`, `description`, `icon`, `badge_color`, `requirement_type`, `requirement_value`, `xp_reward`) VALUES
(1, 'First Step', 'Complete your first habit', 'star', '#FFD700', 'completions', 1, 10),
(2, 'Getting Started', 'Create 3 habits', 'plus', '#4CAF50', 'habits_created', 3, 15),
(3, 'Week Warrior', 'Reach a 7-day streak', 'fire', '#FF5722', 'streak', 7, 30),
(4, 'Habit Builder', 'Complete 25 habits total', 'check', '#2196F3', 'completions', 25, 25),
(5, 'Two Week Champion', 'Reach a 14-day streak', 'trophy', '#9C27B0', 'streak', 14, 50),
(6, 'Century Club', 'Complete 100 habits total', 'award', '#E91E63', 'completions', 100, 50),
(7, 'Month Master', 'Reach a 30-day streak', 'crown', '#FF9800', 'streak', 30, 100),
(8, 'Dedicated', 'Be active for 7 days', 'calendar', '#00BCD4', 'days_active', 7, 20),
(9, 'Committed', 'Be active for 30 days', 'calendar', '#607D8B', 'days_active', 30, 50),
(10, 'Level 5', 'Reach pet level 5', 'zap', '#FFD700', 'level', 5, 30),
(11, 'Level 10', 'Reach pet level 10', 'zap', '#FF5722', 'level', 10, 75),
(12, 'Habit Master', 'Create 10 habits', 'list', '#4CAF50', 'habits_created', 10, 40),
(13, 'Unstoppable', 'Complete 500 habits total', 'rocket', '#2196F3', 'completions', 500, 150);

-- --------------------------------------------------------

--
-- Table structure for table `pf_categories`
--

CREATE TABLE `pf_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `icon` varchar(50) DEFAULT 'star',
  `color` varchar(7) DEFAULT '#6C63FF',
  `user_id` int(11) DEFAULT NULL,
  `is_default` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pf_categories`
--

INSERT INTO `pf_categories` (`id`, `name`, `icon`, `color`, `user_id`, `is_default`) VALUES
(1, 'Health', 'heart', '#4CAF50', NULL, 1),
(2, 'Fitness', 'exercise', '#FF5722', NULL, 1),
(3, 'Education', 'book', '#2196F3', NULL, 1),
(4, 'Mindfulness', 'meditate', '#9C27B0', NULL, 1),
(5, 'Productivity', 'code', '#FF9800', NULL, 1),
(6, 'Self-Care', 'sleep', '#E91E63', NULL, 1),
(7, 'Nutrition', 'food', '#00BCD4', NULL, 1),
(8, 'Other', 'star', '#607D8B', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `pf_habits`
--

CREATE TABLE `pf_habits` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `description` text DEFAULT NULL,
  `frequency` enum('daily','weekly') NOT NULL DEFAULT 'daily',
  `time_of_day` enum('morning','afternoon','evening','anytime') DEFAULT 'anytime',
  `scheduled_time` time DEFAULT NULL,
  `color` varchar(7) DEFAULT '#6C63FF',
  `icon` varchar(50) DEFAULT 'star',
  `category_id` int(11) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pf_habits`
--

INSERT INTO `pf_habits` (`id`, `user_id`, `title`, `description`, `frequency`, `time_of_day`, `scheduled_time`, `color`, `icon`, `category_id`, `is_active`, `created_at`) VALUES
(1, 2, 'Do yoga for 20 minutes', '10 yoga poses (each one for 2 minutes)', 'weekly', 'morning', '08:30:00', '#FF6B9D', 'exercise', NULL, 1, '2026-04-13 01:27:14'),
(2, 2, 'Drink water before bed', 'Drink a cup of water before going to sleep.', 'daily', 'evening', '22:30:00', '#2196F3', 'sleep', NULL, 1, '2026-04-13 01:28:43'),
(3, 2, 'Study for 30 mins', 'Study every day for 30 minutes on something.', 'daily', 'afternoon', '20:40:00', '#FF9800', 'book', NULL, 1, '2026-04-13 19:36:15'),
(5, 2, 'Take a cold shower', 'Taking a shower with cold water from head to toe', 'weekly', 'afternoon', NULL, '#F4E0AF', 'star', NULL, 1, '2026-04-26 23:20:48'),
(6, 4, 'Talk a stroll in the evening', 'Taking a walk around the neighbourhood to relax', 'weekly', 'evening', NULL, '#799351', 'walk', NULL, 1, '2026-04-27 22:28:16'),
(7, 4, 'Eat vegan food for a day', 'Just eat food that are vegan and no other stuff', 'weekly', 'anytime', NULL, '#A1DD70', 'food', NULL, 1, '2026-04-28 21:50:00'),
(8, 3, 'Go to gym', 'Workout at the gym everyday', 'daily', 'afternoon', '13:51:00', '#E8A546', 'exercise', NULL, 1, '2026-04-28 21:51:54'),
(9, 4, 'Call home', 'call home and have a update or check up with mom', 'daily', 'evening', '17:45:00', '#F4A58A', 'star', NULL, 1, '2026-04-29 11:42:28'),
(10, 3, 'do something', '', 'daily', 'anytime', NULL, '#799351', 'star', NULL, 1, '2026-04-29 11:43:17'),
(11, 3, 'Go toilet', '', 'daily', 'afternoon', NULL, '#F4E0AF', 'star', NULL, 1, '2026-04-29 11:43:52'),
(12, 4, 'Bake a cake', '', 'weekly', 'anytime', NULL, '#F4A58A', 'food', NULL, 1, '2026-04-29 11:44:49'),
(13, 4, 'Go to therapy', 'Talk about your feeling at therapy', 'daily', 'morning', '09:00:00', '#F4E0AF', 'journal', NULL, 1, '2026-04-29 11:46:54'),
(14, 4, 'Share food to a homeless', 'Be kind to a homeless person by sharing a meal', 'weekly', 'afternoon', NULL, '#8A7558', 'star', NULL, 1, '2026-04-29 11:48:12'),
(15, 4, 'filler', 'Filler', 'daily', 'anytime', NULL, '#F4A58A', 'star', NULL, 1, '2026-04-29 11:50:03'),
(16, 4, 'Cutie', 'Cutie', 'daily', 'anytime', NULL, '#F9C0AB', 'star', NULL, 1, '2026-04-29 11:50:26'),
(17, 4, 'non', '', 'daily', 'evening', '18:57:00', '#F4A58A', 'book', NULL, 1, '2026-04-29 11:51:04'),
(18, 4, 'on', '', 'daily', 'anytime', NULL, '#E8A546', 'star', NULL, 1, '2026-04-29 11:51:43'),
(19, 4, 'n', '', 'daily', 'anytime', NULL, '#799351', 'star', NULL, 1, '2026-04-29 11:52:01'),
(20, 4, 'i', '', 'daily', 'anytime', NULL, '#799351', 'star', NULL, 1, '2026-04-29 11:52:08'),
(21, 3, 'Play football', 'Play football with the flatmates', 'weekly', 'afternoon', NULL, '#8A7558', 'exercise', NULL, 1, '2026-05-03 02:01:07'),
(22, 5, 'Talk to Jules', '', 'daily', 'anytime', NULL, '#EE4E4E', 'journal', NULL, 1, '2026-05-03 02:05:46'),
(23, 5, 'Read about Spider-Man', 'Spider-Man', 'daily', 'anytime', NULL, '#799351', 'book', NULL, 1, '2026-05-03 02:06:17'),
(24, 5, 'Hug Jules', '', 'daily', 'anytime', NULL, '#799351', 'star', NULL, 1, '2026-05-03 02:09:12'),
(25, 5, 'Say I love you jules at least 10 times per minute', '', 'daily', 'anytime', NULL, '#799351', 'journal', NULL, 1, '2026-05-03 02:09:42'),
(26, 5, 'Walk to the center', 'Yay', 'weekly', 'anytime', NULL, '#355F2E', 'walk', NULL, 1, '2026-05-03 02:10:11'),
(27, 5, 'Play football', 'football with the lads', 'weekly', 'afternoon', NULL, '#355F2E', 'exercise', NULL, 1, '2026-05-03 02:11:04'),
(28, 5, 'Go to the gym', 'Be better', 'daily', 'evening', '20:30:00', '#A1DD70', 'exercise', NULL, 1, '2026-05-03 02:11:34'),
(29, 5, 'STUDY', 'i wanna be rich', 'daily', 'anytime', NULL, '#F4E0AF', 'code', NULL, 1, '2026-05-03 02:12:08'),
(30, 5, 'Meditate', 'Hi', 'weekly', 'evening', '20:09:00', '#799351', 'meditate', NULL, 1, '2026-05-03 02:14:38');

-- --------------------------------------------------------

--
-- Table structure for table `pf_habit_completions`
--

CREATE TABLE `pf_habit_completions` (
  `id` int(11) NOT NULL,
  `habit_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `completed_date` date NOT NULL,
  `completed_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pf_habit_completions`
--

INSERT INTO `pf_habit_completions` (`id`, `habit_id`, `user_id`, `completed_date`, `completed_at`) VALUES
(1, 2, 2, '2026-04-13', '2026-04-13 01:28:52'),
(2, 1, 2, '2026-04-13', '2026-04-13 01:28:55'),
(3, 1, 2, '2026-04-15', '2026-04-15 18:43:55'),
(4, 3, 2, '2026-04-15', '2026-04-15 18:43:56'),
(5, 2, 2, '2026-04-15', '2026-04-15 18:43:57'),
(7, 1, 2, '2026-04-17', '2026-04-17 19:44:46'),
(8, 3, 2, '2026-04-17', '2026-04-17 19:44:50'),
(9, 2, 2, '2026-04-17', '2026-04-17 19:44:51'),
(11, 1, 2, '2026-04-18', '2026-04-18 21:33:21'),
(12, 3, 2, '2026-04-18', '2026-04-18 21:33:23'),
(13, 2, 2, '2026-04-18', '2026-04-18 21:33:25'),
(15, 1, 2, '2026-04-19', '2026-04-19 01:34:14'),
(16, 3, 2, '2026-04-19', '2026-04-19 01:34:15'),
(17, 2, 2, '2026-04-19', '2026-04-19 01:34:16'),
(19, 1, 2, '2026-04-20', '2026-04-20 16:07:03'),
(20, 3, 2, '2026-04-20', '2026-04-20 16:07:04'),
(21, 2, 2, '2026-04-21', '2026-04-21 16:43:38'),
(22, 1, 2, '2026-04-21', '2026-04-21 16:43:45'),
(23, 3, 2, '2026-04-21', '2026-04-21 16:43:48'),
(25, 2, 2, '2026-04-22', '2026-04-22 02:09:23'),
(26, 3, 2, '2026-04-27', '2026-04-27 09:01:38'),
(27, 2, 2, '2026-04-27', '2026-04-27 09:01:44'),
(28, 6, 4, '2026-04-27', '2026-04-27 22:28:20'),
(29, 5, 2, '2026-04-27', '2026-04-27 22:36:25'),
(30, 1, 2, '2026-04-28', '2026-04-28 21:37:26'),
(31, 3, 2, '2026-04-28', '2026-04-28 21:47:39'),
(32, 2, 2, '2026-04-28', '2026-04-28 21:47:41'),
(33, 7, 4, '2026-04-28', '2026-04-28 21:50:03'),
(34, 8, 3, '2026-04-28', '2026-04-28 21:51:56'),
(35, 9, 4, '2026-04-29', '2026-04-29 11:42:31'),
(36, 8, 3, '2026-04-29', '2026-04-29 11:43:22'),
(37, 10, 3, '2026-04-29', '2026-04-29 11:43:23'),
(38, 11, 3, '2026-04-29', '2026-04-29 11:43:57'),
(39, 12, 4, '2026-04-29', '2026-04-29 11:44:52'),
(40, 13, 4, '2026-04-29', '2026-04-29 11:46:56'),
(41, 14, 4, '2026-04-29', '2026-04-29 11:48:16'),
(42, 16, 4, '2026-04-29', '2026-04-29 11:50:29'),
(43, 15, 4, '2026-04-29', '2026-04-29 11:50:31'),
(44, 17, 4, '2026-04-29', '2026-04-29 11:51:07'),
(45, 18, 4, '2026-04-29', '2026-04-29 11:51:46'),
(46, 20, 4, '2026-04-29', '2026-04-29 11:52:11'),
(47, 19, 4, '2026-04-29', '2026-04-29 11:52:12'),
(48, 11, 3, '2026-05-03', '2026-05-03 01:32:55'),
(49, 8, 3, '2026-05-03', '2026-05-03 01:33:10'),
(50, 10, 3, '2026-05-03', '2026-05-03 01:33:11'),
(51, 3, 2, '2026-05-03', '2026-05-03 01:37:59'),
(52, 2, 2, '2026-05-03', '2026-05-03 01:38:01'),
(53, 21, 3, '2026-05-03', '2026-05-03 02:01:10'),
(54, 22, 5, '2026-05-03', '2026-05-03 02:05:48'),
(55, 23, 5, '2026-05-03', '2026-05-03 02:06:20'),
(56, 24, 5, '2026-05-03', '2026-05-03 02:09:14'),
(57, 25, 5, '2026-05-03', '2026-05-03 02:09:44'),
(58, 26, 5, '2026-05-03', '2026-05-03 02:10:13'),
(59, 27, 5, '2026-05-03', '2026-05-03 02:11:09'),
(60, 28, 5, '2026-05-03', '2026-05-03 02:11:36'),
(61, 29, 5, '2026-05-03', '2026-05-03 02:12:12'),
(62, 30, 5, '2026-05-03', '2026-05-03 02:14:43');

-- --------------------------------------------------------

--
-- Table structure for table `pf_mood_log`
--

CREATE TABLE `pf_mood_log` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `mood` enum('great','good','okay','bad','terrible') NOT NULL,
  `note` text DEFAULT NULL,
  `log_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pf_mood_log`
--

INSERT INTO `pf_mood_log` (`id`, `user_id`, `mood`, `note`, `log_date`, `created_at`) VALUES
(1, 2, 'good', 'Doing great and getting work done', '2026-04-20', '2026-04-20 19:14:37'),
(2, 2, 'okay', '', '2026-04-21', '2026-04-21 17:10:17'),
(3, 3, 'great', 'Im feeling great because.... i have... the most... beautiful and amazing and perfect...undescribeable girlfriend. thats why~', '2026-05-03', '2026-05-03 01:35:44'),
(4, 5, 'great', 'I feel very very good, because someone created this incredible app. Whoever created this app, must be a very smart and kind person.', '2026-05-03', '2026-05-03 02:07:42');

-- --------------------------------------------------------

--
-- Table structure for table `pf_pet_status`
--

CREATE TABLE `pf_pet_status` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `xp` int(11) DEFAULT 0,
  `level` int(11) DEFAULT 1,
  `stage` enum('puppy','teen','dog') DEFAULT 'puppy'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pf_pet_status`
--

INSERT INTO `pf_pet_status` (`id`, `user_id`, `xp`, `level`, `stage`) VALUES
(1, 1, 0, 1, 'puppy'),
(2, 2, 430, 9, 'dog'),
(3, 3, 105, 3, 'puppy'),
(4, 4, 185, 4, 'teen'),
(5, 5, 115, 3, 'puppy'),
(6, 6, 0, 1, 'puppy');

-- --------------------------------------------------------

--
-- Table structure for table `pf_streaks`
--

CREATE TABLE `pf_streaks` (
  `id` int(11) NOT NULL,
  `habit_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `current_streak` int(11) DEFAULT 0,
  `longest_streak` int(11) DEFAULT 0,
  `last_completed_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pf_streaks`
--

INSERT INTO `pf_streaks` (`id`, `habit_id`, `user_id`, `current_streak`, `longest_streak`, `last_completed_date`) VALUES
(1, 1, 2, 6, 6, '2026-04-28'),
(2, 2, 2, 1, 3, '2026-05-03'),
(3, 3, 2, 1, 5, '2026-05-03'),
(5, 5, 2, 1, 1, '2026-04-27'),
(6, 6, 4, 1, 1, '2026-04-27'),
(7, 7, 4, 1, 1, '2026-04-28'),
(8, 8, 3, 1, 2, '2026-05-03'),
(9, 9, 4, 1, 1, '2026-04-29'),
(10, 10, 3, 1, 1, '2026-05-03'),
(11, 11, 3, 1, 1, '2026-05-03'),
(12, 12, 4, 1, 1, '2026-04-29'),
(13, 13, 4, 1, 1, '2026-04-29'),
(14, 14, 4, 1, 1, '2026-04-29'),
(15, 15, 4, 1, 1, '2026-04-29'),
(16, 16, 4, 1, 1, '2026-04-29'),
(17, 17, 4, 1, 1, '2026-04-29'),
(18, 18, 4, 1, 1, '2026-04-29'),
(19, 19, 4, 1, 1, '2026-04-29'),
(20, 20, 4, 1, 1, '2026-04-29'),
(21, 21, 3, 1, 1, '2026-05-03'),
(22, 22, 5, 1, 1, '2026-05-03'),
(23, 23, 5, 1, 1, '2026-05-03'),
(24, 24, 5, 1, 1, '2026-05-03'),
(25, 25, 5, 1, 1, '2026-05-03'),
(26, 26, 5, 1, 1, '2026-05-03'),
(27, 27, 5, 1, 1, '2026-05-03'),
(28, 28, 5, 1, 1, '2026-05-03'),
(29, 29, 5, 1, 1, '2026-05-03'),
(30, 30, 5, 1, 1, '2026-05-03');

-- --------------------------------------------------------

--
-- Table structure for table `pf_users`
--

CREATE TABLE `pf_users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  `pet_name` varchar(50) DEFAULT 'Buddy',
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pf_users`
--

INSERT INTO `pf_users` (`id`, `name`, `username`, `email`, `password_hash`, `phone`, `avatar_url`, `pet_name`, `created_at`) VALUES
(1, 'Nicolas', 'Npana', 'npana@gmail.com', '$2y$10$pUaF/t0KmEj/a.QriukDZ.xtEa2y7zvEPIdipU29ELxVpAZOqHGbu', NULL, NULL, 'The Goat', '2026-04-11 01:08:22'),
(2, 'Jules', 'Hn_jull', 'hninnnuyeemonhan@gmail.com', '$2y$10$JEPYEN4Vtk/Q6U25f.yBm.SDsHNNLeCerlG7O75QjzgYhDyQ8l9W6', NULL, '/uploads/avatars/user_2_1776799920.jpg', 'Rocky', '2026-04-12 22:20:09'),
(3, 'Nicolas', 'npana7', 'npana7@gmail.com', '$2y$10$Toae29Stq/TWC0Oe/ORF/.E6helmUr5tvprBsfSR7.fVLWZz27zPK', NULL, '/uploads/avatars/user_3_1777773631.webp', 'Holly', '2026-04-19 23:51:59'),
(4, 'Phyu Phyu', 'Kath', 'phyuphyu26@gmail.com', '$2y$10$UTLuZJCX4HFBPvfvSTpoYeFVM9StFLKTK93JUXuMfXYkvtjS/8S12', NULL, NULL, 'Mary', '2026-04-21 16:50:58'),
(5, 'Nicolas Panopoulos', 'nico_goat', 'nicolaspana7@gmail.com', '$2y$10$XYiDAygPB36PdEbc42kaO.ahKNthVozk81YjzHGxgsYATuDeGi2hm', '', '/uploads/avatars/user_5_1777774122.jpeg', 'Buddy', '2026-05-03 02:04:54'),
(6, 'Harriet', 'Harriet_06', 'harriet31@gmail.com', '$2y$10$9u0yTW/MKPLhMSWeqaCqYugTovjuMZ4z2WAT/VYFVqY3Z4gl.Iv5C', NULL, NULL, 'Poggy', '2026-05-04 17:24:41');

-- --------------------------------------------------------

--
-- Table structure for table `pf_user_accessories`
--

CREATE TABLE `pf_user_accessories` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `accessory_id` int(11) NOT NULL,
  `is_equipped` tinyint(1) DEFAULT 0,
  `unlocked_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pf_user_accessories`
--

INSERT INTO `pf_user_accessories` (`id`, `user_id`, `accessory_id`, `is_equipped`, `unlocked_at`) VALUES
(1, 2, 23, 0, '2026-04-17 19:42:54'),
(2, 2, 28, 0, '2026-04-17 19:42:54'),
(3, 2, 31, 0, '2026-04-17 19:44:55'),
(4, 2, 25, 0, '2026-04-19 01:34:26'),
(5, 2, 29, 1, '2026-04-19 01:34:26'),
(6, 2, 26, 1, '2026-04-27 22:07:03'),
(7, 4, 28, 1, '2026-04-27 22:28:26'),
(8, 2, 32, 1, '2026-04-28 21:47:43'),
(9, 3, 28, 0, '2026-04-28 21:51:59'),
(10, 3, 23, 1, '2026-04-29 11:44:01'),
(11, 4, 23, 1, '2026-04-29 11:44:55'),
(12, 4, 31, 0, '2026-04-29 11:51:48'),
(13, 5, 28, 0, '2026-05-03 02:06:28'),
(14, 5, 23, 1, '2026-05-03 02:10:16');

-- --------------------------------------------------------

--
-- Table structure for table `pf_user_achievements`
--

CREATE TABLE `pf_user_achievements` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `achievement_id` int(11) NOT NULL,
  `earned_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pf_user_achievements`
--

INSERT INTO `pf_user_achievements` (`id`, `user_id`, `achievement_id`, `earned_at`) VALUES
(1, 2, 1, '2026-04-17 19:44:46'),
(2, 2, 2, '2026-04-17 19:44:46'),
(3, 2, 10, '2026-04-19 01:34:17'),
(4, 2, 8, '2026-04-21 16:43:38'),
(5, 2, 4, '2026-04-22 02:09:23'),
(6, 4, 1, '2026-04-27 22:28:20'),
(7, 3, 1, '2026-04-28 21:51:56'),
(8, 4, 2, '2026-04-29 11:42:31'),
(9, 3, 2, '2026-04-29 11:43:57'),
(10, 4, 12, '2026-04-29 11:51:46'),
(11, 5, 1, '2026-05-03 02:05:48'),
(12, 5, 2, '2026-05-03 02:09:14');

-- --------------------------------------------------------

--
-- Table structure for table `pf_weekly_reports`
--

CREATE TABLE `pf_weekly_reports` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `week_start` date NOT NULL,
  `week_end` date NOT NULL,
  `total_habits` int(11) DEFAULT 0,
  `completed_count` int(11) DEFAULT 0,
  `completion_rate` decimal(5,2) DEFAULT 0.00,
  `best_streak` int(11) DEFAULT 0,
  `xp_earned` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Post`
--

CREATE TABLE `Post` (
  `Post_ID` int(11) NOT NULL,
  `User_ID` int(11) NOT NULL,
  `Content` text NOT NULL,
  `Media_Type` enum('none','image','video') DEFAULT 'none',
  `Media_URL` varchar(255) DEFAULT NULL,
  `Created_at` timestamp NULL DEFAULT current_timestamp(),
  `Updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Post`
--

INSERT INTO `Post` (`Post_ID`, `User_ID`, `Content`, `Media_Type`, `Media_URL`, `Created_at`, `Updated_at`) VALUES
(1, 3, 'Today we took a walk in Jesmond Dene. Rocky was so happpy playing in the field.', 'image', '/uploads/posts/post_696fe84b8cf7f_1768941643.webp', '2026-01-20 20:40:43', '2026-01-22 00:57:48'),
(2, 5, 'Cant wait to go on a trip with these two', 'image', '/uploads/posts/post_696fefec3d738_1768943596.jpg', '2026-01-20 21:13:16', '2026-01-20 21:13:16'),
(3, 3, '4 months old rocky. miss when he was just a puppy', 'image', '/uploads/posts/post_6971925c625cf_1769050716.webp', '2026-01-22 02:58:36', '2026-01-22 02:58:36'),
(4, 6, 'I adopted themm!! Imma be the best dad', 'image', '/uploads/posts/post_6971938b71171_1769051019.jpg', '2026-01-22 03:03:39', '2026-01-22 03:48:14'),
(5, 7, 'I love her so much. I just wanna squish her in my handss ahhh', 'image', '/uploads/posts/post_6971947e79bc8_1769051262.jpg', '2026-01-22 03:07:42', '2026-01-22 03:07:42'),
(6, 6, 'I miss my pets man. i hope they\'re doing well at my mom\'s house', NULL, NULL, '2026-01-22 03:11:38', '2026-01-22 03:11:38'),
(7, 8, 'What that dawg doingg. Fr tho he has swag', 'video', '/uploads/posts/post_697198ad168a1_1769052333.mp4', '2026-01-22 03:25:33', '2026-01-22 03:25:33'),
(8, 3, 'So manny new people Hii guyss', NULL, NULL, '2026-01-22 03:33:53', '2026-01-22 03:33:53'),
(9, 3, 'Byeee', NULL, NULL, '2026-01-22 04:52:03', '2026-01-22 04:52:03'),
(10, 9, 'I just joined this app hope we can be friends><', NULL, NULL, '2026-02-18 00:35:08', '2026-02-18 00:38:24'),
(11, 11, 'sdaffaff', 'image', '/uploads/posts/post_6995cc75d2822_1771424885.jpg', '2026-02-18 14:28:05', '2026-02-18 14:28:05'),
(12, 9, 'hahhf hgsd', NULL, NULL, '2026-02-18 14:33:45', '2026-02-18 14:33:45');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `User_ID` int(11) NOT NULL,
  `User_Name` varchar(50) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password_Hash` varchar(255) NOT NULL,
  `Bio` text DEFAULT NULL,
  `ProfilePicture` varchar(255) DEFAULT NULL,
  `Created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`User_ID`, `User_Name`, `Name`, `Email`, `Password_Hash`, `Bio`, `ProfilePicture`, `Created_at`) VALUES
(2, 'James_swans', 'James Swann', 'jamessw@gmail.com', '$2y$10$DbtVMfsf1yra/wzqSMH.O..Bp5Xn4ijNZ3FZ5pe.OeT76dgOvy.F.', NULL, NULL, '2026-01-20 02:25:23'),
(3, 'Urs_hninnu', 'Hnin Nu Yee Mon Han', 'hninnuyeemonhan@gmail.com', '$2y$10$a.lBbqb6w9CHZBrv/pUwbu9WJC7PFwOfPXXZYgN//xdje5Bo9JN/.', 'hiiii', '/uploads/avatars/avatar_3_1769052006.jpg', '2026-01-20 02:39:20'),
(4, 'Harriet', 'Harriet Pearson', 'hp223@gmail.com', '$2y$10$4EO1bZNRG22LeuBKVoc9eumY.evpmgel3RcxP1plUraMdAaMFWPNO', NULL, NULL, '2026-01-20 18:28:30'),
(5, 'Nico_BigNose', 'Nicolas', 'nicolas@gmail.com', '$2y$10$LMbVSk9RaXqEBUWOSLGznuKgAHLlkBJ70DN0fHPGIXJhofr3XCBHy', '', '/uploads/avatars/avatar_5_1769052136.jpg', '2026-01-20 20:52:46'),
(6, 'berrythetozo', 'Thuta', 'berrythetozo@gmail.com', '$2y$10$BGN4eDuDJkl.0t38vV8UVee6qA5fCuDReW3gqv8PLjHvE6/9PvlEm', 'Life is short play with yr dog', '/uploads/avatars/avatar_6_1769051961.jpg', '2026-01-22 02:04:08'),
(7, 'Karito', 'Kath', 'phyuphyu@gmail.com', '$2y$10$deq/wZxr4aZeeZWo6bcq9eUEPFr496ecKybDca/Zfuo1hcusdKu1i', '', '/uploads/avatars/avatar_7_1769051914.jpg', '2026-01-22 02:33:35'),
(8, 'shynn_0.5', 'Shynn Thant Naing', 'shynn05@gmail.com', '$2y$10$7YshUyj/sVjgPc438gmBQOrgSuS7aj4ZNdqGhxWwasSF16vZpezuG', 'I got that dog in me! ... Paused!', '/uploads/avatars/avatar_8_1769052382.jpg', '2026-01-22 03:24:57'),
(9, 'Lia_mendes07', 'Lia Mendes', 'liamendes@gmail.com', '$2y$10$jsOZwq6uMQ/TWm2iiDX2QONkpnPTjhwFTDSBlU84t2HNvTKmcejjC', 'Hi john', '/uploads/avatars/avatar_9_1771374847.jpg', '2026-02-18 00:31:48'),
(10, 'Kollybubu', 'Kolly', 'kollysama@gmail.com', '$2y$10$ScSyo.08huo1Lel08LWhbOtO4ZsAMxgbzOSbxpzvcm9amCBtBOudi', NULL, NULL, '2026-02-18 12:09:08'),
(11, 'john', 'John', 'john@example.com', '$2y$10$nWqUlpkNRdc5iTDXKeT/aOH8.N/UKY7DMbDGwW5kzbMwsTG4jn2i6', NULL, NULL, '2026-02-18 14:26:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`Comment_ID`),
  ADD KEY `Post_ID` (`Post_ID`),
  ADD KEY `User_ID` (`User_ID`);

--
-- Indexes for table `Follow`
--
ALTER TABLE `Follow`
  ADD PRIMARY KEY (`Follow_ID`),
  ADD UNIQUE KEY `unique_follow` (`Follower_ID`,`Followed_ID`),
  ADD KEY `Followed_ID` (`Followed_ID`);

--
-- Indexes for table `Like`
--
ALTER TABLE `Like`
  ADD PRIMARY KEY (`Like_ID`),
  ADD UNIQUE KEY `unique_like` (`Post_ID`,`User_ID`),
  ADD KEY `User_ID` (`User_ID`);

--
-- Indexes for table `pf_accessories`
--
ALTER TABLE `pf_accessories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pf_achievements`
--
ALTER TABLE `pf_achievements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pf_categories`
--
ALTER TABLE `pf_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `pf_habits`
--
ALTER TABLE `pf_habits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `pf_habit_completions`
--
ALTER TABLE `pf_habit_completions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_completion` (`habit_id`,`completed_date`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `pf_mood_log`
--
ALTER TABLE `pf_mood_log`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_mood_per_day` (`user_id`,`log_date`);

--
-- Indexes for table `pf_pet_status`
--
ALTER TABLE `pf_pet_status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `pf_streaks`
--
ALTER TABLE `pf_streaks`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_streak` (`habit_id`,`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `pf_users`
--
ALTER TABLE `pf_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `pf_user_accessories`
--
ALTER TABLE `pf_user_accessories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_accessory` (`user_id`,`accessory_id`),
  ADD KEY `accessory_id` (`accessory_id`);

--
-- Indexes for table `pf_user_achievements`
--
ALTER TABLE `pf_user_achievements`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_user_achievement` (`user_id`,`achievement_id`),
  ADD KEY `achievement_id` (`achievement_id`);

--
-- Indexes for table `pf_weekly_reports`
--
ALTER TABLE `pf_weekly_reports`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_weekly_report` (`user_id`,`week_start`);

--
-- Indexes for table `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`Post_ID`),
  ADD KEY `User_ID` (`User_ID`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`User_ID`),
  ADD UNIQUE KEY `User_Name` (`User_Name`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Comment`
--
ALTER TABLE `Comment`
  MODIFY `Comment_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `Follow`
--
ALTER TABLE `Follow`
  MODIFY `Follow_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `Like`
--
ALTER TABLE `Like`
  MODIFY `Like_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `pf_accessories`
--
ALTER TABLE `pf_accessories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `pf_achievements`
--
ALTER TABLE `pf_achievements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `pf_categories`
--
ALTER TABLE `pf_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `pf_habits`
--
ALTER TABLE `pf_habits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `pf_habit_completions`
--
ALTER TABLE `pf_habit_completions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `pf_mood_log`
--
ALTER TABLE `pf_mood_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pf_pet_status`
--
ALTER TABLE `pf_pet_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pf_streaks`
--
ALTER TABLE `pf_streaks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `pf_users`
--
ALTER TABLE `pf_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pf_user_accessories`
--
ALTER TABLE `pf_user_accessories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `pf_user_achievements`
--
ALTER TABLE `pf_user_achievements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `pf_weekly_reports`
--
ALTER TABLE `pf_weekly_reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Post`
--
ALTER TABLE `Post`
  MODIFY `Post_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `User_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Comment`
--
ALTER TABLE `Comment`
  ADD CONSTRAINT `Comment_ibfk_1` FOREIGN KEY (`Post_ID`) REFERENCES `Post` (`Post_ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `Comment_ibfk_2` FOREIGN KEY (`User_ID`) REFERENCES `User` (`User_ID`) ON DELETE CASCADE;

--
-- Constraints for table `Follow`
--
ALTER TABLE `Follow`
  ADD CONSTRAINT `Follow_ibfk_1` FOREIGN KEY (`Follower_ID`) REFERENCES `User` (`User_ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `Follow_ibfk_2` FOREIGN KEY (`Followed_ID`) REFERENCES `User` (`User_ID`) ON DELETE CASCADE;

--
-- Constraints for table `Like`
--
ALTER TABLE `Like`
  ADD CONSTRAINT `Like_ibfk_1` FOREIGN KEY (`Post_ID`) REFERENCES `Post` (`Post_ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `Like_ibfk_2` FOREIGN KEY (`User_ID`) REFERENCES `User` (`User_ID`) ON DELETE CASCADE;

--
-- Constraints for table `pf_categories`
--
ALTER TABLE `pf_categories`
  ADD CONSTRAINT `pf_categories_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `pf_users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `pf_habits`
--
ALTER TABLE `pf_habits`
  ADD CONSTRAINT `pf_habits_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `pf_users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pf_habits_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `pf_categories` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `pf_habit_completions`
--
ALTER TABLE `pf_habit_completions`
  ADD CONSTRAINT `pf_habit_completions_ibfk_1` FOREIGN KEY (`habit_id`) REFERENCES `pf_habits` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pf_habit_completions_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `pf_users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `pf_mood_log`
--
ALTER TABLE `pf_mood_log`
  ADD CONSTRAINT `pf_mood_log_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `pf_users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `pf_pet_status`
--
ALTER TABLE `pf_pet_status`
  ADD CONSTRAINT `pf_pet_status_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `pf_users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `pf_streaks`
--
ALTER TABLE `pf_streaks`
  ADD CONSTRAINT `pf_streaks_ibfk_1` FOREIGN KEY (`habit_id`) REFERENCES `pf_habits` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pf_streaks_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `pf_users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `pf_user_accessories`
--
ALTER TABLE `pf_user_accessories`
  ADD CONSTRAINT `pf_user_accessories_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `pf_users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pf_user_accessories_ibfk_2` FOREIGN KEY (`accessory_id`) REFERENCES `pf_accessories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `pf_user_achievements`
--
ALTER TABLE `pf_user_achievements`
  ADD CONSTRAINT `pf_user_achievements_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `pf_users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pf_user_achievements_ibfk_2` FOREIGN KEY (`achievement_id`) REFERENCES `pf_achievements` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `pf_weekly_reports`
--
ALTER TABLE `pf_weekly_reports`
  ADD CONSTRAINT `pf_weekly_reports_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `pf_users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `Post`
--
ALTER TABLE `Post`
  ADD CONSTRAINT `Post_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `User` (`User_ID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
