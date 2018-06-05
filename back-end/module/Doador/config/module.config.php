<?php
namespace Doador;
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Doctrine\ORM\Mapping\Driver\AnnotationDriver;

return [
    
    'controllers' => [
        'factories' => [
            Controller\DoadorController::class => Controller\Factory\DoadorControllerFactory::class,
        ],
    ],
    
    // The following section is new and should be added to your file:
    'router' => [
        'routes' => [
            'doador' => [
                'type'    => \Segment::class,
                'options' => [
                    'route' => '/doador[/:action[/:id]]',
                    'constraints' => [
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ],
                    'defaults' => [
                        'controller' => Controller\DoadorController::class,
                        'action'     => 'findAll',
                    ],
                ],
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
            'Doador\Mapping\Entity\DoadorDriver' => [
                'class' => AnnotationDriver::class,
                'cache' => 'array',
                'paths' => [__DIR__ . '/../src/Mapping/Entity']
            ],
            'orm_default' => [
                'drivers' => [
                    'Doador\Mapping\Entity\Doador' => 'Doador\Mapping\Entity\DoadorDriver',
                ]
            ]
        ]
    ]  
];
