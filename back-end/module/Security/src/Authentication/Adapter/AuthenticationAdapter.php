<?php

namespace Security\Authentication\Adapter;

use Zend\Authentication\Adapter\AdapterInterface;
use Zend\Authentication\Result;
use Security\Authentication\Mapping\Entity\User;

class AuthenticationAdapter implements AdapterInterface {

    private $entityManager;
    private $password;
    private $username;

    public function __construct(\Doctrine\ORM\EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function setPassword(string $password): void {
        $this->password = $password;
    }

    public function setUsername(string $username): void {
        $this->username = $username;
    }

    /**
     * Performs an authentication attempt
     *
     * @return Result
     */
    public function authenticate() {

    

        if ($this->username && $this->password) {

            if ($this->username == 'admin' && $this->password == 'admin') {
                return new Result(
                    Result::SUCCESS, 
                    $this->username, 
                    ['Authenticated successfully.']);        
            }

            return new Result(Result::FAILURE_CREDENTIAL_INVALID, $this->username);
        }

        return new Result(Result::FAILURE_IDENTITY_NOT_FOUND, $this->username);
    }

}
