<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of MetodoPagamento
 *
 * @author Paulo Jose Moreira
 */
class CartaoCreditoMetodo {

    public $id;
    public $bandeira;
    public $token;
    public $codigoSeguranca;
    public $cartaoTruncado;
    public $doador;

    function getId() {
        return $this->id;
    }

    function getBandeira() {
        return $this->bandeira;
    }

    function getToken() {
        return $this->token;
    }

    function getCodigoSeguranca() {
        return $this->codigoSeguranca;
    }

    function getCartaoTruncado() {
        return $this->cartaoTruncado;
    }

    function getDoador() {
        return $this->doador;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setBandeira($bandeira) {
        $this->bandeira = $bandeira;
    }

    function setToken($token) {
        $this->token = $token;
    }

    function setCodigoSeguranca($codigoSeguranca) {
        $this->codigoSeguranca = $codigoSeguranca;
    }

    function setCartaoTruncado($cartaoTruncado) {
        $this->cartaoTruncado = $cartaoTruncado;
    }

    function setDoador($doador) {
        $this->doador = $doador;
    }

}
