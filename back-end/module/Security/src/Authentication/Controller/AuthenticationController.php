<?php

namespace Security\Authentication\Controller;

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
use Zend\Authentication\Result;
use Security\Authentication\Service\AuthenticationManagerService;

/**
 * Description of AuthenticationController
 *
 * @author Paulo Jose Moreira
 */
class AuthenticationController extends AbstractActionController {

    protected $authManager;
    protected $form;

    public function __construct($authManager, Form $form) {
        $this->authManager = $authManager;
        $this->form = $form;
    }

    public function loginAction() {

        $request = $this->getRequest();
        if ($request->isPost()) {

            $body = $request->getContent();
            if (!empty($body)) {
                $object = Json::decode($body, Json::TYPE_ARRAY);
                $this->form->setData($object);
            }
            if ($this->form->isValid()) {
                $authenticator = $this->form->getData();

                try {
                    // Perform login attempt.
                    $result = $this->authManager->login($authenticator->getUsuario(), $authenticator->getSenha(), false);

                    // Check result.
                    if ($result->getCode() == Result::SUCCESS) {
                        $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_200);
                    } else {
                        $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_401);
                    }
                    return $this->getResponse();
                    
                } catch (\Exception $exc) {
                    $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_409);
                    return new JsonModel(array("messagem" => $exc->getMessage()));
                }
            } else {
                $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_400);
                return new JsonModel($this->form->getMessages());
            }
        } else {
            $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_405);
            return $this->getResponse();
        }
    }

    public function logoutAction() {

        $request = $this->getRequest();
        if ($request->isPost()) {
            try {
                $this->authManager->logout();
                $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_200);
            } catch (\Exception $ex) {
                $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_412);
            }
        } else {
            $this->getResponse()->setStatusCode(HttpResponse::STATUS_CODE_405);
        }
        return $this->getResponse();
    }

}
