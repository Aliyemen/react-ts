import { Title } from "./sheared/Title";
import { TitleConfirm } from "./sheared/TitleConfirm";
import { styled } from '@stitches/react';
import  Confirm  from '../assets/Confirm.png';
import { FaExclamationCircle } from "@react-icons/all-files/fa/FaExclamationCircle";


const ContenteRow = styled('div', {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '444px',
  });

  const ContenteColumn = styled('div', {
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '800px',
    flexWrap:"wrap",
  });

  const TextAlert = styled('p', {
    marginBottom: '19px',
    marginTop:'15px',
    color: '#f0b86d',
    fontSize: 15,
    fontWeight:'bold',
  });

function Confirmation() {
    return (
        <ContenteRow>
        <Title title="Sucesso!"  label="" description="" subDescription="" />
        <ContenteColumn>
            <img src={Confirm}  alt="logo" />
            <TitleConfirm   label="Sua conta foi cadastrada com sucesso!" description="Agurade que nossa equipe está validando os dado informados." subDescription=" Enviaremos a confirmação o mais breve possivel em seu email." />
            <TextAlert> <FaExclamationCircle /> Foi enviado um email com os próximas passos </TextAlert>

        </ContenteColumn>
        </ContenteRow>
    )
}

export default Confirmation;