<?php

namespace Contribuicao\InputFilter;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Zend\InputFilter\InputFilter;
use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;
use Doctrine\ORM\EntityManager;

class ApadrinhadoPersistInputFilter implements InputFilterAwareInterface {

    protected $inputFilter;
    protected $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->inputFilter = new InputFilter();
        $this->entityManager = $entityManager;
    }

    public function getInputFilter(): InputFilterInterface {

        $this->inputFilter->add(array(
            'name' => 'id',
            'required' => false,
            'filters' => array(
                array('name' => 'Int'),
            ),
        ));

        $this->inputFilter->add(array(
            'name' => 'nome',
            'required' => true,
            'filters' => array(
                array('name' => 'StripTags'),
                array('name' => 'StringTrim'),
            ),
            'validators' => array(
                array(
                    'name' => 'StringLength',
                    'options' => array(
                        'encoding' => 'UTF-8',
                        'min' => 1,
                        'max' => 100,
                    ),
                ),
                array(
                    'name' => 'DoctrineModule\Validator\UniqueObject',
                    'options' => array(
                        'object_manager' => $this->entityManager,
                        'object_repository' => $this->entityManager->getRepository('Contribuicao\Mapping\Entity\Apadrinhado'),
                        'fields' => array('nome'),
                        'use_context' => true
                    ),
                ),
            ),
        ));
        
        $this->inputFilter->add(array(
            'name' => 'contribuicao',
            'required' => true,
            'validators' => array(
                array(
                    'name' => \Contribuicao\Mapping\Validator\ContribuicaoEstaAtivaETipoEApadrinhamento::class,
                    'options' => array(
                        'object_repository' => $this->entityManager->getRepository(\Contribuicao\Mapping\Entity\Contribuicao::class),
                        'fields' => ['id'],
                    ),
                ),
            ),
        ));

        return $this->inputFilter;
    }

    public function setInputFilter(InputFilterInterface $inputFilter): InputFilterAwareInterface {
        throw new \Exception("Not used");
    }

}
