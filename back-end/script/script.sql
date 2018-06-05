-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: db_mysql
-- Generation Time: 05-Jun-2018 às 01:49
-- Versão do servidor: 5.7.22
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assisten_sistema`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `apadrinhado`
--

CREATE TABLE `apadrinhado` (
  `id` int(11) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `contribuicao_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Estrutura da tabela `contribuicao`
--

CREATE TABLE `contribuicao` (
  `id` int(11) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `contribuicao_tipo` varchar(25) NOT NULL,
  `ativo` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Estrutura da tabela `doador`
--

CREATE TABLE `doador` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `telefone` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `doador`
--

--
-- Indexes for table `apadrinhado`
--
ALTER TABLE `apadrinhado`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contribuicao`
--
ALTER TABLE `contribuicao`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doador`
--
ALTER TABLE `doador`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apadrinhado`
--
ALTER TABLE `apadrinhado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `contribuicao`
--
ALTER TABLE `contribuicao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `doador`
--
ALTER TABLE `doador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
