<?php
namespace Security\Authentication\Controller\Factory;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
use Zend\ServiceManager\Factory\FactoryInterface;
use Interop\Container\ContainerInterface;

use Security\Authentication\Service\AuthenticationManagerService;
/**
 * Description of AuthenticationControllerFactory
 *
 * @author Paulo Jose Moreira
 */
class AuthenticationControllerFactory implements FactoryInterface {
    public function __invoke(ContainerInterface $container, $requestedName, Array $options = null) {
        $authManager = $container->get(AuthenticationManagerService::class);

        $inputFilter = new \Security\Authentication\InputFilter\AuthenticationInputFilter();
        $form = new \Security\Authentication\Form\AuthenticationForm();
        $form->setInputFilter($inputFilter->getInputFilter());

        return new \Security\Authentication\Controller\AuthenticationController($authManager, $form);
    }
}
