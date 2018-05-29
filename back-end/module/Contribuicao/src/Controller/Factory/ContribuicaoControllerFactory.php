<?php

namespace Contribuicao\Controller\Factory;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Zend\ServiceManager\Factory\FactoryInterface;
use Interop\Container\ContainerInterface;

use Contribuicao\Controller\ContribuicaoController;
/**
 * Description of ContribuicaoControllerFactory
 *
 * @author Paulo Jose Moreira
 */
class ContribuicaoControllerFactory implements FactoryInterface {
   
    public function __invoke(ContainerInterface $container, $requestedName, Array $options = null) {    
        $entityManager = $container->get('doctrine.entitymanager.orm_default');
        
        $inputFilter = new \Contribuicao\InputFilter\ContribuicaoPersistInputFilter($entityManager);
        $form = new \Contribuicao\Form\ContribuicaoForm($entityManager);
        $form->setInputFilter($inputFilter->getInputFilter());
        
        return new ContribuicaoController($entityManager, $form);

    }
    
}
