import {useState} from "react";
import { ButtonMk } from "./sheared/ButtonMk";
import { Title } from "./sheared/Title";
import { FieldsetMk } from './sheared/FieldsetMk';
import { styled } from '@stitches/react';
import CheckboxMk from "./sheared/CheckboxMk";
import i18n from '../i18n/i18next';
import "bootstrap/dist/css/bootstrap.min.css";

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
    marginLeft:10,
    
  });
function Register() {
    const [forms, setForms] = useState<formProp[]>([
        {label: i18n.t(`resource.user.email`), model: 'email', width:383 , widthColum: 550},
        {label: i18n.t(`resource.user.fullName`), model: 'fullName', width:271, widthColum: 330},
        {label: i18n.t(`resource.user.mobile`), model: 'mobile', width:175, widthColum: 200},
    ])

    return (
        <div className='col-sx-12' style={{
            marginLeft:'42px',
        }}>
        <Title title={i18n.t(`resource.user.title`)}
        label={i18n.t(`resource.user.label`)}
        description={i18n.t(`resource.user.description`)}
        subDescription={i18n.t(`resource.user.subDescription`)} />
        <Contente className='col-sx-12'>
            { 
                forms.map( form =>{
                    return <ContenteName className='col-sx-12' css={{width : form.widthColum}}>
                        <FieldsetMk label={form.label} model={form.model} width={form.width} key={form.model} />
                    </ContenteName> 
                })
            }
        <CheckboxMk />
        
        </Contente>
        <hr style={{ borderTop:'1px solid  #feffff'}}/>
            <ButtonMk label={i18n.t(`resource.user.register`)} childeBotton="" clicked={setForms} />
        </div>
    )
}

export default Register