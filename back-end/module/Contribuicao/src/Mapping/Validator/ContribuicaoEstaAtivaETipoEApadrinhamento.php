<?php
namespace Contribuicao\Mapping\Validator;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of ContribuicaoEstaAtivaETipoEApadrinhamento
 *
 * @author Paulo Jose Moreira
 */
class ContribuicaoEstaAtivaETipoEApadrinhamento extends \DoctrineModule\Validator\ObjectExists {

    const TIPO_APADRINHAMENTO = 'A'; // Local phone format.

    /**
     * Error constants
     */
    const ERROR_NO_OBJECT_FOUND = 'noObjectFound';
    const CONTRIBUICAO_INATIVA = 'notActive';
    const CONTRIBUICAO_NAO_E_TIPO_APADRINHAMENTO = 'invalidTipo';

    /**
     * @var array Message templates
     */
    protected $messageTemplates = [
        self::ERROR_NO_OBJECT_FOUND => "No object matching '%value%' was found",
        self::CONTRIBUICAO_INATIVA => "Projeto de doação precisa estar ativo.",
        self::CONTRIBUICAO_NAO_E_TIPO_APADRINHAMENTO => "Não e possivel vincular projeto de doação a um apadrinhado."
    ];

    /**
     * {@inheritDoc}
     */
    public function isValid($value) {
        $cleanedValue = $this->cleanSearchValue($value);
        $match = $this->objectRepository->findOneBy($cleanedValue);
        if (is_object($match) ) {
            
            if(!$match->getAtivo()){
                $this->error(self::CONTRIBUICAO_INATIVA, $value);
                return false;
            } else if($match->getTipo() != self::TIPO_APADRINHAMENTO){
                $this->error(self::CONTRIBUICAO_NAO_E_TIPO_APADRINHAMENTO, $value);
                return false;
            }
            
            return true;
        }
        $this->error(self::ERROR_NO_OBJECT_FOUND, $value);
        return false;
    }

}
