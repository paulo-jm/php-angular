<?php

namespace Contribuicao\Form;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Zend\Form\Form;

use DoctrineModule\Stdlib\Hydrator\DoctrineObject as DoctrineHydrator;

class ApadrinhadoForm extends Form {

    public function __construct($entityManager) {
    
        parent::__construct("ApadrinhadoForm");

        $hydrator = new DoctrineHydrator($entityManager, 'Contribuicao/Mapping/Entity/Apadrinhado');
        $this->setObject(new \Contribuicao\Mapping\Entity\Apadrinhado());
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
        
        $contribuicao = new Fieldset\ContribuicaoFieldset($entityManager);
        $this->add($contribuicao);

    }
}
