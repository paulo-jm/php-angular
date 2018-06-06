<?php

namespace Application\Controller;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\JsonModel;
use Zend\Http\Response as HttpResponse;
use Zend\Json\Json;
use Zend\Form\Form;
use Zend\Paginator\Paginator;
use DoctrineORMModule\Paginator\Adapter\DoctrinePaginator as DoctrineAdapter;
use Doctrine\ORM\Tools\Pagination\Paginator as ORMPaginator;
use Doctrine\ORM\EntityManager;

/**
 * Description of ApplicationAbstracController
 *
 * @author Paulo Jose Moreira
 */
abstract class ApplicationAbstracController extends AbstractActionController {

    protected $entityManager;
    protected $form;

    public function __construct(EntityManager $entityManager, Form $form) {
        $this->entityManager = $entityManager;
        $this->form = $form;
    }

    public function paginateAction() {

        $filter = $this->params()->fromQuery('filter');
        $sort = $this->params()->fromQuery('sort', "desc");
        $column = $this->params()->fromQuery('column', "id");
        $page = $this->params()->fromQuery('page', 1);
        $limit = $this->params()->fromQuery('limit', 10);

        if (!empty($filter)) {
            $filter = Json::decode($filter, Json::TYPE_ARRAY);
        }

        $query = $this->getPaginateQuery($filter, $column, $sort);

        $adapter = new DoctrineAdapter(new ORMPaginator($query, false));
        $paginator = new Paginator($adapter);
        $paginator->setDefaultItemCountPerPage($limit);
        $paginator->setCurrentPageNumber($page);

        return new JsonModel([
            'total' => $paginator->getTotalItemCount(),
            'totalPerPage' => $paginator->getItemCountPerPage(),
            'currentPage' => $paginator->getCurrentPageNumber(),
            'firstPage' => 1,
            'lastPage' => $paginator->count(),
            'data' => $this->getEntities($paginator)
        ]);
    }

    public function findAllAction() {

        $contribuicao = $this->getRepository()->findAll();

        if (empty($contribuicao)) {
            $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_204);
            return $this->getResponse();
        }

        $jsonModel = new JsonModel($this->getEntities($contribuicao));
        return $jsonModel;
    }

    public function findByIdAction() {

        $id = (int) $this->params()->fromRoute('id', 0);
        if (!$id) {
            $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_422);
            return $this->getResponse();
        }

        $repository = $this->getRepository();
        $entity = $repository->find($id);

        if ($entity) {
            return new JsonModel(json_decode(json_encode($this->getEntity($entity)), TRUE));
        } else {
            $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_422);
            return new JsonModel($this->form->getMessages());
        }

        $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_200);
        return $this->getResponse();
    }

    public function createAction() {

        $request = $this->getRequest();
        if ($request->isPost()) {

            $body = $request->getContent();
            if (!empty($body)) {
                $object = Json::decode($body, Json::TYPE_ARRAY);
                $this->form->setData($object);
            }
            if ($this->form->isValid()) {
                $entity = $this->form->getData();
                $this->entityManager->persist($entity) .
                        $this->entityManager->flush();

                $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_201);
                $this->getResponse()->getHeaders()
                        ->addHeaders(
                                array(
                                    'Location' => $this->getLocation($entity),
                                )
                );
                return new JsonModel(json_decode(json_encode($this->getEntity($entity)), TRUE));
            } else {
                $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_400);
                return new JsonModel($this->form->getMessages());
            }
        }
        
        $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_200);
        return $this->getResponse();
    }

    public function updateAction() {

        $id = (int) $this->params()->fromRoute('id', 0);
        if (!$id) {
            $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_422);
            return $this->getResponse();
        }

        $request = $this->getRequest();
        if ($request->isPut()) {

            $repository = $this->getRepository();
            $entity = $repository->find($id);
            $this->form->bind($entity);

            $body = $request->getContent();
            if (!empty($body)) {
                $object = Json::decode($body, Json::TYPE_ARRAY);
                $this->form->setData($object);
            }
            if ($this->form->isValid()) {

                $entity = $this->form->getData();
                $this->entityManager->flush();

                $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_200);
                return new JsonModel(json_decode(json_encode($this->getEntity($entity)), TRUE));
            } else {
                $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_400);
                return new JsonModel($this->form->getMessages());
            }
        }
        $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_200);
        return $this->getResponse();
    }

    public function inactiveAction() {

        $id = (int) $this->params()->fromRoute('id', 0);
        if (!$id) {
            $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_422);
            return $this->getResponse();
        }

        $request = $this->getRequest();
        if ($request->isDelete()) {

            $repository = $this->getRepository();
            $entity = $repository->find($id);
            $entity->setActive(false);
            $this->entityManager->flush();


            $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_200);
            return $this->getResponse();
        }
        $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_200);
        return $this->getResponse();
    }

    public function activeAction() {

        $id = (int) $this->params()->fromRoute('id', 0);
        if (!$id) {
            $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_422);
            return $this->getResponse();
        }

        $request = $this->getRequest();
        if ($request->isPost()) {

            $repository = $this->getRepository();
            $entity = $repository->find($id);
            $entity->setActive(true);
            $this->entityManager->flush();


            $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_200);
            return $this->getResponse();
        }
        
        $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_200);
        return $this->getResponse();
    }

    protected function getEntities($paginator) {
        $data = array();
        foreach ($paginator as $item) {
            array_push($data, $item);
        }

        return $data;
    }

    protected function getEntity($entity) {
        return $entity;
    }

    abstract protected function getLocation($entity);

    abstract protected function getRepository();

    abstract protected function getPaginateQuery($filter, $sort, $order);
}
