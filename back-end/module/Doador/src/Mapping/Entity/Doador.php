<?php

namespace Doador\Mapping\Entity;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Doctrine\ORM\Mapping as ORM;

/**
 * Description of Doador
 *
 * @author Paulo Jose Moreira
 * 
 * @ORM\Entity
 * @ORM\Table(name="doador")
 */
class Doador {

    /**
     * @ORM\Id
     * @ORM\Column(name="id")
     * @ORM\GeneratedValue
     */
    public $id;

    /**
     * @ORM\Column(name="nome")  
     */
    public $nome;

    /**
     * @ORM\Column(name="telefone")  
     */
    public $telefone;

    public function __construct() {
        
    }

    function getId() {
        return $this->id;
    }

    function getNome() {
        return $this->nome;
    }

    function getTelefone() {
        return $this->telefone;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setNome($nome) {
        $this->nome = $nome;
    }

    function setTelefone($telefone) {
        $this->telefone = $telefone;
    }

}
