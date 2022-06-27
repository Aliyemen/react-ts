import { ButtonMk } from "./sheared/ButtonMk";
import { Title } from "./sheared/Title";
import { FieldsetPhoneMk } from './sheared/FieldsetPhoneMk';
import { FieldsetCodeMk } from './sheared/FieldsetCodeMk';
import "bootstrap/dist/css/bootstrap.min.css";


function Validation() {
    
      function confirmOk(){
        console.log('confirmOk')
  
      }
    return (
        <div className='col-sx-12'>
            <Title title="Validação da conta"  label="Validação enviada para seu celular" description="Enviamos uma mensagem SMS com o coódigo de confirmação" subDescription="para o celular abaixo:" />
            <FieldsetPhoneMk label='' model='mobile' width={200} />
            <FieldsetCodeMk label='Informe o Código de verificação' model='confirm0'/>
            <ButtonMk label="Confirmar" childeBotton="Voltar" clicked={confirmOk} />
        </div>
    )
}

export default Validation