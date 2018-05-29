<?php
namespace Contribuicao\Mapping\Converter;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
use Contribuicao\Mapping\Entity\Apadrinhado;
/**
 * Description of ApadrinhadoConverter
 *
 * @author Paulo Jose Moreira
 */
class ApadrinhadoConverter {
   
    public static function fromEntity(Apadrinhado $apadrinhado){
        
        $dto = new \Contribuicao\Mapping\DTO\ApadrinhadoDTO();
        $dto->id = $apadrinhado->getId();
        $dto->nome = $apadrinhado->getNome();
        
        $contribuicao = new \Contribuicao\Mapping\DTO\ContribuicaoDTO();
        $contribuicao->id  =  $apadrinhado->getContribuicao()->getId();
        $contribuicao->nome  =  $apadrinhado->getContribuicao()->getNome();
        
        $dto->contribuicao = $contribuicao;
        
        return $dto;
    }
    
    public static function fromEntities($apadrinhados){
        
        $array = array();
        foreach ($apadrinhados as $entity) {
            array_push($array, ApadrinhadoConverter::fromEntity($entity));
        }        
        return $array;       
        
    }
    
}
