<?php
namespace Pagamento\Tipo\CartaoCredito\Controller;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\JsonModel;
use Zend\Http\Response as HttpResponse;
use Zend\Json\Json;
/**
 * Description of BandeiraController
 *
 * @author Paulo Jose Moreira
 */
class BandeiraController extends AbstractActionController {
    
    function findAllAction() {
        
        $jsonModel = new JsonModel([
            "Visa",
            "Master",
            "Amex",
            "Elo",
            "Aura",
            "JCB",
            "Diners",
            "Discover",
        ]);
        
        return $jsonModel;
        
    }
    
}
