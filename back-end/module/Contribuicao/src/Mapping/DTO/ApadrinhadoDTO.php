<?php

namespace Contribuicao\Mapping\DTO;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class ApadrinhadoDTO {

    public $id;

    public $nome;

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
