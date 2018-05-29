<?php

namespace Doador\Form;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Zend\Form\Form;
use DoctrineModule\Stdlib\Hydrator\DoctrineObject as DoctrineHydrator;

class DoadorForm extends Form {

    public function __construct($entityManager) {
        // we want to ignore the name passed
        parent::__construct('doador');

        $hydrator = new DoctrineHydrator($entityManager, 'Doador/Mapping/Entity/Doador');
        $this->setObject(new \Doador\Mapping\Entity\Doador());
        $this->setHydrator($hydrator);

        $this->setAttribute('method', 'post');

        $this->add(array(
            'name' => 'id',
            'type' => 'Text',
        ));

        $this->add(array(
            'name' => 'nome',
            'type' => 'Text',
        ));

    }
}
