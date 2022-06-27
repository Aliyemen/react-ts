import EnviarDocumentos from "./sheared/EnviarDocumentos";
import { Title } from "./sheared/Title";
import { styled } from '@stitches/react';
import {ButtonMkEnd} from "./sheared/ButtonMkEnd";

const LabelP = styled('p', {
    color: '#2e4d59',
    fontSize: 14,
    lineHeight: 1,
    userSelect: 'none',
    fontFamily:'inherit',
    paddingLeft: 20,
    marginTop:20,
  });
function Documents() {
    function setform(e:any){
        console.log('setform', e);

    }
    return (
        <><Title title="Envie os documentos"  label="" description="Para concluir o processo de cadastro, você deve enviar os documentos da empesa" subDescription="e de identificação sua como responsável pela empresa." />
            <EnviarDocumentos model={"documento"} description={"confirmacao"} label={"documento"} type={"file"} icon={""} status={""} />
            <LabelP><u>Não sou o responsável ou sócio da empresa</u></LabelP>
            <ButtonMkEnd label={"Continuar"} clicked={setform} childeBotton={""} />
        </>
    )
}

export default Documents