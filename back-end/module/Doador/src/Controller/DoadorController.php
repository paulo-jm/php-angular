<?php

namespace Doador\Controller;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\JsonModel;
use Zend\Json\Json;
use Zend\Http\Response as HttpResponse;
use Doctrine\ORM\EntityManager;
use Doador\Mapping\Entity\Doador;
use Doador\InputFilter\DoadorPersistInputFilter;

/**
 * Description of DoadorController
 *
 * @author Paulo Jose Moreira
 */
class DoadorController extends AbstractActionController {

    private $entityManager;

    public function __construct(EntityManager $entityManager) {
        $this->entityManager = $entityManager;
    }

    public function createAction() {

        $inputFilter = new DoadorPersistInputFilter();
        $form = new \Doador\Form\DoadorForm($this->entityManager);

        $request = $this->getRequest();
        if ($request->isPost()) {
            
            $form->setInputFilter($inputFilter->getInputFilter());
            $body = $request->getContent();
            if (!empty($body)) {
                $object = Json::decode($body, Json::TYPE_ARRAY);
                $form->setData($object);
            }
            
            if ($form->isValid()) {
                $doador = $form->getData();

                $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_201);
                return $this->getResponse();
            } else {
                $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_400);
                $messages = $form->getMessages();
                return new JsonModel($messages);
            }
            
        } else if($request->is) {
            $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_405);
            return $this->getResponse();
        }
        
    }

    public function findAllAction() {

        $doadores = $this->entityManager->getRepository(Doador::class)->findAll();

        if (empty($doadores)) {
            $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_204);
            return new JsonModel();
        }

        $jsonModel = new JsonModel($doadores);
        return $jsonModel;
        
    }

    public function updateAction() {
        
    }

    public function inactiveAction() {
        
    }

}
