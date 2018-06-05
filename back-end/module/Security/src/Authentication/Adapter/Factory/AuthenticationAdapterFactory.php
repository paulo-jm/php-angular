<?php

namespace Security\Authentication\Adapter\Factory;

use Zend\ServiceManager\Factory\FactoryInterface;
use Interop\Container\ContainerInterface;

use Security\Authentication\Adapter\AuthenticationAdapter;

class AuthenticationAdapterFactory implements FactoryInterface {

    public function __invoke(ContainerInterface $container, $requestedName, Array $options = null) {
        $entityManager = $container->get('doctrine.entitymanager.orm_default');
        return new AuthenticationAdapter($entityManager);
    }

}
