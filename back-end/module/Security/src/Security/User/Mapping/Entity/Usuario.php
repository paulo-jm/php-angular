<?php

namespace Security\User\Mapping\Entity;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of User
 *
 * @author Paulo Jose Moreira
 */
class Usuario {

    private $id;
    private $user;
    private $password;

    function getUser() {
        return $this->user;
    }

    function getPassword() {
        return $this->password;
    }

    function setUser($user) {
        $this->user = $user;
    }

    function setPassword($password) {
        $this->password = $password;
    }

}
