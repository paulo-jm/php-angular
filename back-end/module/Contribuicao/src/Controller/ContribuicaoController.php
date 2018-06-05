<?php

namespace Contribuicao\Controller;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Zend\Form\Form;
use Doctrine\ORM\EntityManager;
use Application\Controller\ApplicationAbstracController;

/**
 * Description of ContribuicaoController
 *
 * @author Paulo Jose Moreira
 */
class ContribuicaoController extends ApplicationAbstracController {

    protected $entityManager;
    protected $form;

    public function __construct(EntityManager $entityManager, Form $form) {
        parent::__construct($entityManager, $form);
    }

    protected function getLocation($entity) {
        return $this->url()->fromRoute('contribuicao/contribuicao', ['action' => 'findById', 'id' => $entity->getId()]);
    }

    protected function getRepository() {
        return $this->entityManager->getRepository('Contribuicao\Mapping\Entity\Contribuicao');
    }

    protected function getPaginateQuery($filter, $column, $sort) {
          
        $queryBuilder = $this->entityManager->createQueryBuilder();
        
        $queryBuilder->select('p')
            ->from(\Contribuicao\Mapping\Entity\Contribuicao::class, 'p')
            ->orderBy("p.{$column}", $sort)
            ->where('1 = 1');
            
            if(is_array($filter)) {
                if(array_key_exists("nome",$filter) && !empty($filter['nome'])){
                   $queryBuilder->andWhere("p.nome like '%{$filter['nome']}%'");
                }

                if(array_key_exists("ativo",$filter) && !empty($filter['ativo'])){
                   $queryBuilder->andWhere("p.ativo = {$filter['ativo']}");
                }

                if(array_key_exists("tipo",$filter) && !empty($filter['tipo'])){
                   $queryBuilder->andWhere("p.tipo = '{$filter['tipo']}'");
                }
            }
        
        return $queryBuilder->getQuery();
        
    }

}
