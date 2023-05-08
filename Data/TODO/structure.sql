-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 22 fév. 2021 à 10:30
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+01:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : id16165775_lebonimenteurgame
--

-- --------------------------------------------------------

--
-- Structure de la table admins
--

DROP TABLE IF EXISTS admins;
CREATE TABLE IF NOT EXISTS admins (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) DEFAULT NULL,
  userName VARCHAR(100) NOT NULL,
  mdp VARCHAR(100) NOT NULL,
  active TINYINT(1) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table gamemodes
--

DROP TABLE IF EXISTS gamemodes;
CREATE TABLE IF NOT EXISTS gamemodes (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(300) NOT NULL DEFAULT '',
  active TINYINT(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table packs
--

DROP TABLE IF EXISTS packs;
CREATE TABLE IF NOT EXISTS packs (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(300) DEFAULT NULL,
  active TINYINT(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table subjects
--

DROP TABLE IF EXISTS subjects;
CREATE TABLE IF NOT EXISTS subjects (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  active TINYINT(1) NOT NULL DEFAULT '1',
  validated TINYINT(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Structure de la table ispartof
--

DROP TABLE IF EXISTS ispartof;
CREATE TABLE IF NOT EXISTS ispartof (
    subject_id INTEGER NOT NULL,
    pack_id INTEGER NOT NULL,
    PRIMARY KEY (subject_id,pack_id),
    CONSTRAINT fk_subject_id_ispartof FOREIGN KEY (subject_id) REFERENCES subjects (id),
    CONSTRAINT fk_pack_id_ispartof FOREIGN KEY (pack_id) REFERENCES packs (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table isplayed
--

DROP TABLE IF EXISTS isplayed;
CREATE TABLE IF NOT EXISTS isplayed (
    subject_id INTEGER NOT NULL,
    gamemode_id INTEGER NOT NULL,
    PRIMARY KEY (subject_id,gamemode_id),
    CONSTRAINT fk_subject_id_isplayed FOREIGN KEY (subject_id) REFERENCES subjects (id),
    CONSTRAINT fk_gamemode_id_isplayed FOREIGN KEY (gamemode_id) REFERENCES gamemodes (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
