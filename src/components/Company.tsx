import {useState} from "react";
import { ButtonMk } from "./sheared/ButtonMk";
import { Title } from "./sheared/Title";
import { FieldsetMk } from './sheared/FieldsetMk';
import { styled } from '@stitches/react';
import SelectMk from "./sheared/SelectMk";
import CheckboxSegmentoMk from "./sheared/CheckboxSegmentoMk";

type formProp = {
    model: string;
    label: string;
    width:number;
    widthColum:number;

}

const Contente = styled('div', {
    display: 'flex' ,
    alignItems: 'left',
    justifyContent: 'left',
    flexDirection: 'row',
    width: '550px',
    flexWrap:"wrap",
    
  });

  const ContenteName = styled('div', {
    display: 'flex' ,
    flexDirection: 'column',
    marginLeft:5,
    
  });
function Company() {
    const [forms, setForms] = useState<formProp[]>([
        {label: 'CNPJ', model: 'cnpj', width:246, widthColum:550},
        {label: 'Razão social', model: 'company', width:319, widthColum:350},
        {label: 'Telefone', model: 'phone', width:207, widthColum:120},
        {label: 'CEP', model: 'cep', width:143, widthColum:550},
        {label: 'Endereço', model: 'address', width:549, widthColum:550},
        {label: 'Número', model: 'number', width:100, widthColum:140},
        {label: 'Complemento', model: 'complment', width:150 , widthColum:190},
        {label: 'Bairro', model: 'zone', width:150, widthColum:160},
    ])

    return (
        <div style={{
            marginLeft:'42px',
        }}>
        <Title title="Cadastre sua empresa"  
        label="" 
        description="Agora cadastre as informações de sua empresa para criar sua conta empresarial" 
        subDescription="customizada para o seu negócio" />
        <Contente>
            <CheckboxSegmentoMk />
            <SelectMk/>
            { 
                forms.map( form =>{
                    return <ContenteName css={{width : form.widthColum}}>
                        <FieldsetMk label={form.label} model={form.model} width={form.width} key={form.model} />
                    </ContenteName> 
                })
            }
        
        </Contente>
        <hr style={{ borderTop:'1px solid  #feffff'}}/>
            <ButtonMk label="Cadastrar" childeBotton="Voltar" clicked={setForms} />
        </div>
    )
}

export default Company