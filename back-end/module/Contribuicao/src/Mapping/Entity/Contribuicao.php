<?php

namespace Contribuicao\Mapping\Entity;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Doctrine\ORM\Mapping as ORM;

/**
 * Description of Contribuicao
 *
 * @author Paulo Jose Moreira
 * 
 * @ORM\Entity
 * @ORM\Table(name="contribuicao")
 */
class Contribuicao {

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
     * @ORM\Column(name="contribuicao_tipo")  
     */
    public $tipo;

    /**
     * @ORM\Column(name="ativo", type="boolean",options={"default"= 1})
     */
    public $ativo;

    public function __construct() {
        $this->setAtivo(true);
    }

    function getId() {
        return $this->id;
    }

    function getNome() {
        return $this->nome;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setNome($nome) {
        $this->nome = $nome;
    }

    function getTipo() {
        return $this->tipo;
    }

    function setTipo($tipo) {
        $this->tipo = $tipo;
    }

    function getAtivo() {
        return $this->ativo;
    }

    function setAtivo($ativo) {
        $this->ativo = $ativo;
    }

}
