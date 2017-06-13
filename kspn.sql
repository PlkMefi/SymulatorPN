-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 13 Cze 2017, 15:00
-- Wersja serwera: 10.1.19-MariaDB
-- Wersja PHP: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `kspn`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `artykuly`
--

CREATE TABLE `artykuly` (
  `idArtykulu` int(11) NOT NULL,
  `sciezkaDostepu` varchar(255) CHARACTER SET utf16 COLLATE utf16_polish_ci NOT NULL,
  `autor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `gry`
--

CREATE TABLE `gry` (
  `idUzytkownika` int(11) NOT NULL,
  `idUkladuKostek` int(11) NOT NULL,
  `wynik` int(11) NOT NULL,
  `idGry` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `players`
--

CREATE TABLE `players` (
  `id` int(11) NOT NULL,
  `imie` varchar(100) NOT NULL,
  `nazwisko` varchar(100) NOT NULL,
  `punkty` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `players`
--

INSERT INTO `players` (`id`, `imie`, `nazwisko`, `punkty`) VALUES
(1, 'Adrian', 'Szymanski', 10900),
(2, 'Marcin', 'OpaÅ‚ka', 250),
(3, 'Johny', 'English', 400),
(4, 'Johny', 'Rambo', 0),
(5, 'Armand', 'Franas', 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `stacje`
--

CREATE TABLE `stacje` (
  `idStacji` int(11) NOT NULL,
  `nazwa` varchar(255) CHARACTER SET utf16 COLLATE utf16_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `typykont`
--

CREATE TABLE `typykont` (
  `idTypuKonta` int(11) NOT NULL,
  `nazwa` varchar(100) CHARACTER SET utf16 COLLATE utf16_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `typykont`
--

INSERT INTO `typykont` (`idTypuKonta`, `nazwa`) VALUES
(0, 'Administrator'),
(1, 'User');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `typykostek`
--

CREATE TABLE `typykostek` (
  `idTypuKostki` int(11) NOT NULL,
  `nazwa` varchar(100) CHARACTER SET utf16 COLLATE utf16_polish_ci NOT NULL,
  `sciezkaDostepu` varchar(255) CHARACTER SET utf16 COLLATE utf16_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ukladykostek`
--

CREATE TABLE `ukladykostek` (
  `id` int(11) NOT NULL,
  `idTypuKostki` int(11) NOT NULL,
  `idStacji` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE `uzytkownicy` (
  `idUzytkownika` int(11) NOT NULL,
  `idTypuKonta` int(11) NOT NULL,
  `login` varchar(100) CHARACTER SET utf16 COLLATE utf16_polish_ci NOT NULL,
  `haslo` varchar(100) CHARACTER SET utf16 COLLATE utf16_polish_ci NOT NULL,
  `imie` varchar(100) CHARACTER SET utf16 COLLATE utf16_polish_ci NOT NULL,
  `nazwisko` varchar(100) CHARACTER SET utf16 COLLATE utf16_polish_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf16 COLLATE utf16_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`idUzytkownika`, `idTypuKonta`, `login`, `haslo`, `imie`, `nazwisko`, `email`) VALUES
(0, 0, 'SUPERADMIN', 'superadmin', 'Maciej', 'Łoś', 'mlos@symulator.pl'),
(1, 1, 'adriano512', 'adriano512', 'Adrian', 'Szymanski', 'a.szymanski7@o2.pl'),
(2, 1, 'arnold', 'boczek', 'Arnold', 'Boczek', 'ab@o2.pl'),
(3, 1, 'johny', 'english', 'Johny', 'English', 'johny12@o2.pl'),
(4, 1, 'marcin	', 'opalka', 'Marcin', 'Opalka', 'mo@o2.pl'),
(5, 1, 'armand', 'franas', 'Armand', 'Franas', 'af@o2.pl'),
(6, 1, 'johny1234', 'rambo1234', 'Johny', 'Rambo', 'jr@o2.pl');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `artykuly`
--
ALTER TABLE `artykuly`
  ADD PRIMARY KEY (`idArtykulu`);

--
-- Indexes for table `gry`
--
ALTER TABLE `gry`
  ADD PRIMARY KEY (`idGry`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stacje`
--
ALTER TABLE `stacje`
  ADD PRIMARY KEY (`idStacji`);

--
-- Indexes for table `typykont`
--
ALTER TABLE `typykont`
  ADD PRIMARY KEY (`idTypuKonta`);

--
-- Indexes for table `typykostek`
--
ALTER TABLE `typykostek`
  ADD PRIMARY KEY (`idTypuKostki`);

--
-- Indexes for table `ukladykostek`
--
ALTER TABLE `ukladykostek`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  ADD PRIMARY KEY (`idUzytkownika`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `players`
--
ALTER TABLE `players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
