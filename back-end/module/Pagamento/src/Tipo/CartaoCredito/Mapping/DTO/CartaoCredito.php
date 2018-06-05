<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of CartaoCredito
 *
 * @author Paulo Jose Moreira
 */
class CartaoCredito {

    public $nome;
    public $numeroCartao;
    public $nomeImpressoCartao;
    public $dataValidade;
    public $bandeira;

    function getNome() {
        return $this->nome;
    }

    function getNumeroCartao() {
        return $this->numeroCartao;
    }

    function getNomeImpressoCartao() {
        return $this->nomeImpressoCartao;
    }

    function getDataValidade() {
        return $this->dataValidade;
    }

    function getBandeira() {
        return $this->bandeira;
    }

    function setNome($nome) {
        $this->nome = $nome;
    }

    function setNumeroCartao($numeroCartao) {
        $this->numeroCartao = $numeroCartao;
    }

    function setNomeImpressoCartao($nomeImpressoCartao) {
        $this->nomeImpressoCartao = $nomeImpressoCartao;
    }

    function setDataValidade($dataValidade) {
        $this->dataValidade = $dataValidade;
    }

    function setBandeira($bandeira) {
        $this->bandeira = $bandeira;
    }

}
