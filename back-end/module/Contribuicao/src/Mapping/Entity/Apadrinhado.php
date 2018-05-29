<?php

namespace Contribuicao\Mapping\Entity;

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
 * @ORM\Table(name="apadrinhado")
 */
class Apadrinhado {

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
     * @ORM\ManyToOne(targetEntity="Contribuicao\Mapping\Entity\Contribuicao", fetch="LAZY")
     * @ORM\JoinColumn(name="contribuicao_fk", referencedColumnName="id")
     */
    public $contribuicao;

    function getId() {
        return $this->id;
    }

    function getNome() {
        return $this->nome;
    }

    function getContribuicao() {
        return $this->contribuicao;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setNome($nome) {
        $this->nome = $nome;
    }

    function setContribuicao($contribuicao) {
        $this->contribuicao = $contribuicao;
    }

}
