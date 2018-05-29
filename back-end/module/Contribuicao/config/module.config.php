<?php

namespace Contribuicao;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Zend\Router\Http\Segment;
use Doctrine\ORM\Mapping\Driver\AnnotationDriver;

return [
    'controllers' => [
        'factories' => [
            Controller\ApadrinhadoController::class => Controller\Factory\ApadrinhadoControllerFactory::class,
            Controller\ContribuicaoController::class => Controller\Factory\ContribuicaoControllerFactory::class,
        ],
    ],
    // The following section is new and should be added to your file:
    'router' => [
        'routes' => [
            'contribuicao' => [
                'type' => \Zend\Router\Http\Literal::class,
                'options' => [
                    'route' => '/contribuicao',
                    'constraints' => [
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id' => '[0-9]+',
                    ],
                    'defaults' => [
                        'controller' => Controller\ContribuicaoController::class,
                        'action' => 'paginate',
                    ],
                ],
                'may_terminate' => true,
                'child_routes' => array(
                    'contribuicao' => array(
                        'type' => Segment::class,
                        'options' => [
                            'route' => '/contribuicao[/:action][/:id]',
                            'constraints' => [
                                'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                                'id' => '[0-9]+',
                            ],
                            'defaults' => [
                                'controller' => Controller\ContribuicaoController::class,
                                'action' => 'paginate',
                            ],
                        ],
                    ),
                    'apadrinhado' => array(
                        'type' => Segment::class,
                        'options' => [
                            'route' => '/apadrinhado[/:action][/:id]',
                            'constraints' => [
                                'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                                'id' => '[0-9]+',
                            ],
                            'defaults' => [
                                'controller' => Controller\ApadrinhadoController::class,
                                'action' => 'paginate',
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
    'doctrine' => [
        'driver' => [
            'Contribuicao\Mapping\Entity\ApadrinhadoDriver' => [
                'class' => AnnotationDriver::class,
                'cache' => 'array',
                'paths' => [__DIR__ . '/../src/Mapping/Entity']
            ],
            'Contribuicao\Mapping\Entity\ContribuicaoDriver' => [
                'class' => AnnotationDriver::class,
                'cache' => 'array',
                'paths' => [__DIR__ . '/../src/Mapping/Entity']
            ],
            'orm_default' => [
                'drivers' => [
                    'Contribuicao\Mapping\Entity\Apadrinhado' => 'Contribuicao\Mapping\Entity\ApadrinhadoDriver',
                    'Contribuicao\Mapping\Entity\Contribuicao' => 'Contribuicao\Mapping\Entity\ContribuicaoDriver',
                ]
            ]
        ]
    ]
];
