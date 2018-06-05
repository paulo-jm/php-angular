<?php
namespace Doador\Mapping\Converter;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DoadorConverter
 *
 * @author Paulo Jose Moreira
 */
class DoadorConverter {

    public static function fromEntity(\Doador\Mapping\Entity\Doador $entity) {

        $dto = new \Doador\Mapping\DTO\DoadorDTO();
        $dto->id = $entity->getId();
        $dto->nome = $entity->getNome();
        $dto->telefone = $entity->getTelefone();

        return $dto;
    }

    public static function fromEntities($entities) {

        $array = array();
        foreach ($entities as $entity) {
            array_push($array, DoadorConverter::fromEntity($entity));
        }
        return $array;
    }

}
