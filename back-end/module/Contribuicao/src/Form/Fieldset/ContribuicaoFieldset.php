<?php

namespace Contribuicao\Form\Fieldset;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Zend\InputFilter\InputFilterProviderInterface;
use DoctrineModule\Stdlib\Hydrator\DoctrineObject as DoctrineHydrator;

class ContribuicaoFieldset extends \Zend\Form\Fieldset implements InputFilterProviderInterface {

    private $entityManager;

    public function __construct($entityManager) {

        parent::__construct("contribuicao");

        $this->entityManager = $entityManager;
        $hydrator = new DoctrineHydrator($this->entityManager, 'Contribuicao/Mapping/Entity/Contribuicao');
        $this->setObject(new \Contribuicao\Mapping\Entity\Contribuicao());
        $this->setHydrator($hydrator);

        $this->add(array(
            'name' => 'id',
            'type' => 'Text',
        ));
    }

    public function getInputFilterSpecification() {
        return array(
            'id' => array(
                'required' => true,
                'filters' => array(
                    array('name' => 'Int'),
                ),
                'validators' => array(
                    array(
                        'name' => '\DoctrineModule\Validator\ObjectExists',
                        'options' => array(
                            'object_repository' => $this->entityManager->getRepository(\Contribuicao\Mapping\Entity\Contribuicao::class),
                            'fields' => ['id'],
                        ),
                    ),
                ),
            )
        );
    }

}
