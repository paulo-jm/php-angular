<?php

namespace Doador\Controller\Factory;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Zend\ServiceManager\Factory\FactoryInterface;
use Interop\Container\ContainerInterface;
use Doador\Controller\DoadorController;

/**
 * Description of DoadorController
 *
 * @author Paulo Jose Moreira
 */
class DoadorControllerFactory implements FactoryInterface {

    public function __invoke(ContainerInterface $container, $requestedName, Array $options = null) {

        $entityManager = $container->get('doctrine.entitymanager.orm_default');

        $inputFilter = new \Doador\InputFilter\DoadorPersistInputFilter($entityManager);
        $form = new \Doador\Form\DoadorForm($entityManager);
        $form->setInputFilter($inputFilter->getInputFilter());

        return new DoadorController($entityManager, $form);
    }

}
