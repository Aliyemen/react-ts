import { styled } from '@stitches/react';
import { gray, green } from '@radix-ui/colors';
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import {useState} from "react";
import React from 'react';
import DialogSelfe from './DialogSelfe';

type documentesProp = {
  model: string;
  description: string;
  label: string;
  type:string;
  icon: string;
  status:string;

}
type filEvent = {
  target:{
    files:[]
  }
}

// Your app...
const Flex = styled('div', { display: 'flex' });
const Label = styled('label', {
  color: '#2e4d59',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
  fontWeight:'bold',
  fontFamily:'revert',
  paddingLeft: 15,
  paddingTop :15,
});

const LabelP = styled('p', {
  color: '#2e4d59',
  fontSize: 14,
  lineHeight: 1,
  userSelect: 'none',
  fontFamily:'revert',
  paddingLeft: 15,
  marginBottom: '-5px',
});

const IconEnviado = styled(FaCheckCircle, {
  color: '#8cc9a5',
  fontWeight:'bold',
  marginRight:5
});

const FlexColumn = styled('div', { 
  display: 'flex' ,
  alignItems: 'left', 
  flexDirection:'column',
  borderRadius: 6,
  padding: '0 20px',
  paddingBottom:20,
  paddingRight:40,
  width:500,
  marginLeft:10,
  marginTop:15,
  textAlign:'left',
  boxShadow: `0 0 0 2px ${gray.gray3}`,
  '&:hover': {boxShadow: `0 0 0 2px ${gray.gray8}` },
  '&:focus': { boxShadow: `0 0 0 2px ${gray.gray8}` },
  '&[data-state="active"]': {
    boxShadow: `0 0 0 2px ${gray.gray8}`
  },
  
});

const FlexColumnStart = styled('div', { 
  display: 'flex' ,
  alignItems: 'start', 
  flexDirection:'column',
  borderRadius: 6,
  padding: '0 20px',
  paddingBottom:20,
  paddingRight:40,
  marginTop:15,
  textAlign:'left',
  width:400,
});

const FlexColumnEnd = styled('div', { 
  display: 'flex' ,
  alignItems: 'end', 
  flexDirection:'column',
  paddingTop:40,
  paddingLeft:60,
  width:10,
  textAlign:'end',
});

const ButtonEnviar = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  padding: '0 15px',
  flexDirection:'row-reverse',
  fontSize: '14px',
  lineHeight: 1,
  fontWeight: 500,
  fontFamily:'Baloo 2',
  height: '25px',
  minWidth:'40px',
  marginLeft: 50,
  variants: {
    variant: {
      gray: {
        backgroundColor:'#1f5266',
        color: 'White',
        '&:hover': { backgroundColor: green.green9 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
        '&[data-state="active"]': {
          color: '#1f5266',
          backgroundColor: 'White',
          width:'721px',
          height:'54px',
          borderBottomStyle: 'none',
        },
      },
      green: {
        color: '#46bf78',
        backgroundColor: 'White',
        '&:hover': { backgroundColor: green.green9 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
    },
    },
  },

  defaultVariants: {
    variant: 'green',
  },
});

function EnviarDocumentos (props:documentesProp  ) {
  const hiddenFileInput = React.useRef(null);
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  function changeHandler(event){
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};
  function handleSubmission(selectedFile) {
		const formData = new FormData();

		formData.append('File', selectedFile);
  }

 
  const [documentos, setDocumentos] = useState<documentesProp[]>([
    {label: 'Contrato social', model: 'contrate', description:'Envie o contrato social completo da empresa', type:'file', icon:'<IconEnviado/>' ,status:'Enviado'},
    {label: 'RG ou CNH do responsável ou sócio',model: 'documento', description:'Envie uma cópia do documento de pessoa físicia', type:'file', icon:'<IconEnviado/>', status:'Enviar'},
    {label: 'Selfie com documento',model: 'image', description:'Tire uma selfie segurando o documento de identifcação', type:'imagem', icon:'<IconEnviado/>' , status:'Enviar'},
  
])
function getButton(document:documentesProp) {
  if (document.type =='file'){
    return <ButtonEnviar  variant={document.status =='Enviado' ?  'green': 'gray' } onClick={handleSubmission}> {document.status}</ButtonEnviar>
    
  }
  return <DialogSelfe status={document.status} />
}

  return (
    <Flex css={{ alignItems: 'flex-start', flexDirection:'column'}}>
       <Label  htmlFor="c1">
          Envie os documentos abaixo
        </Label>
            {
              documentos.map(document =>{
                return (
                      <Flex css={{ alignItems: 'left ', flexDirection:'row' , marginTop:10, marginLeft:10}}>
                        <FlexColumn>
                          <Flex css={{ alignItems: 'left ', flexDirection:'row' }}>
                            <FlexColumnStart>
                              <Label>{
                                    document.status =='Enviado' ? <IconEnviado /> : ''
                                }
                                  {document.label}
                                </Label>
                                <LabelP>
                                  {document.description}
                                </LabelP>
                              </FlexColumnStart>
                              <FlexColumnEnd>
                              <input
                                  name="file"
                                  onChange={changeHandler}
                                  type={document.type}
                                  style={{ display: "none" }}
                                  multiple={false}
                                />
                                {
                                  getButton(document)
                                 
                                }
                              </FlexColumnEnd>
                          </Flex>
                        </FlexColumn>
                      </Flex>
                )
              })
              
            }
        
      </Flex>
  );
} 

export default EnviarDocumentos;
