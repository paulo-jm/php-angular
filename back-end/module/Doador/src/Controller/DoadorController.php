<?php

namespace Doador\Controller;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Zend\Form\Form;
use Doctrine\ORM\EntityManager;
use Application\Controller\ApplicationAbstracController;

/**
 * Description of DoadorController
 *
 * @author Paulo Jose Moreira
 */
class DoadorController extends ApplicationAbstracController {

    protected $entityManager;
    protected $form;

    public function __construct(EntityManager $entityManager, Form $form) {
        parent::__construct($entityManager, $form);
    }

    protected function getLocation($entity) {
        return $this->url()->fromRoute('doador', ['action' => 'findById', 'id' => $entity->getId()]);
    }

    protected function getRepository() {
        return $this->entityManager->getRepository('Doador\Mapping\Entity\Doador');
    }

    protected function getPaginateQuery($filter, $column, $sort) {

        $queryBuilder = $this->entityManager->createQueryBuilder();

        $queryBuilder->select('d')
                ->from(\Doador\Mapping\Entity\Doador::class, 'd')
                ->orderBy("d.{$column}", $sort)
                ->where('1 = 1');

        if (is_array($filter)) {
            if (array_key_exists("nome", $filter) && !empty($filter['nome'])) {
                $queryBuilder->andWhere("d.nome like '%{$filter['nome']}%'");
            }
        }

        return $queryBuilder->getQuery();
    }
    
    protected function getEntity($entity) {
       return \Doador\Mapping\Converter\DoadorConverter::fromEntity($entity);
    }

    protected function getEntities($paginator) {
        return \Doador\Mapping\Converter\DoadorConverter::fromEntities($paginator);
    }

}
