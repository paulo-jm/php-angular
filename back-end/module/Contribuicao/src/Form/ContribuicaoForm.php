<?php

namespace Contribuicao\Form;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Zend\Form\Form;

use DoctrineModule\Stdlib\Hydrator\DoctrineObject as DoctrineHydrator;

class ContribuicaoForm extends Form {

    public function __construct($entityManager) {
    
        parent::__construct("ContribuicaoForm");

        $hydrator = new DoctrineHydrator($entityManager, 'Contribuicao/Mapping/Entity/Contribuicao');
        $this->setObject(new \Contribuicao\Mapping\Entity\Contribuicao());
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
        
        $this->add(array(
            'name' => 'tipo',
            'type' => 'Text',
        ));

    }
}
