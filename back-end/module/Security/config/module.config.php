<?php

namespace Security;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Zend\Router\Http\Literal;
use Zend\Router\Http\Segment;
use Zend\Authentication\AuthenticationService;


return [
    
    'controllers' => [
        'factories' => [
            Authentication\Controller\AuthenticationController::class => Authentication\Controller\Factory\AuthenticationControllerFactory::class,
        ],
    ],
    'service_manager' => [
        'factories' => [
            AuthenticationService::class => Authentication\Service\Factory\AuthenticationServiceFactory::class,
            Authentication\Adapter\AuthenticationAdapter::class => Authentication\Adapter\Factory\AuthenticationAdapterFactory::class,
            Authentication\Service\AuthenticationManagerService::class => Authentication\Service\Factory\AuthenticationManagerServiceFactory::class,
        ],
    ],
    // The following section is new and should be added to your file:
    'router' => [
        'routes' => [
            'security' => [
                'type' => Literal::class,
                'options' => [
                    'route' => '/authentication',
                    'defaults' => [
                        'controller' => Authentication\Controller\AuthenticationController::class,
                        'action' => 'login',
                    ],
                ],
                'may_terminate' => true,
                'child_routes' => array(
                    'login' => array(
                        'type' => Segment::class,
                        'options' => [
                            'route' => '/login',
                            'defaults' => [
                                'controller' => Authentication\Controller\AuthenticationController::class,
                                'action' => 'login',
                            ],
                        ],
                    ),
                    'logout' => array(
                        'type' => Segment::class,
                        'options' => [
                            'route' => '/logout',
                            'defaults' => [
                                'controller' => Authentication\Controller\AuthenticationController::class,
                                'action' => 'logout',
                            ],
                        ],
                    ),
                )
            ],
        ],
    ],
    'view_manager' => [
        'strategies' => [
            'ViewJsonStrategy',
        ],
    ],
];
