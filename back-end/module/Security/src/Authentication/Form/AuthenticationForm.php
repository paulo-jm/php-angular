<?php

namespace Security\Authentication\Form;

use Zend\Form\Form;
use Zend\Hydrator\ClassMethods as ClassMethodsHydrator;
use Security\Authentication\Mapping\Entity\Authenticator;

class AuthenticationForm extends Form {

    public function __construct() {
        // we want to ignore the name passed
        parent::__construct('AuthenticationForm');

        $this->setHydrator(new ClassMethodsHydrator(false))
                ->setObject(new Authenticator());

        $this->setAttribute('method', 'post');

        $this->add(array(
            'name' => 'usuario',
            'type' => 'Text',
        ));

        $this->add(array(
            'name' => 'senha',
            'type' => 'Text',
        ));
    }

}
