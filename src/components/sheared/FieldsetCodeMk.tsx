import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';

type InputProps = {
    label: string;
    model:string;

}
const Fieldset = styled('fieldset', {
    all: 'unset',
    marginBottom: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  });
  
  const Label = styled('label', {
    fontSize: 15,
    lineHeight: 1,
    marginBottom: 10,
    color: '#264e5d',
    fontWeight:'bold',
    display: 'block',
  });

  const ContenteCode = styled('div', {
    alignContent:'space-between',
    
  });
  
  const Input = styled('input', {
    all: 'unset',
    flex: '1 0 auto',
    borderRadius: 6,
    padding: '8 10px',
    width: `43px`,
    marginRight:'8px',
    textAlign:'center',
    fontSize: 20,
    lineHeight: 1,
    color: gray.gray6,
    boxShadow: `0 0 0 1px ${gray.gray8}`,
    height: 35,
    '&:focus': { boxShadow: `0 0 0 2px ${gray.gray9}` , color: gray.gray10,},
  });
  const ButtonLink = styled('a', {
    padding: '0 20px',
    fontSize: '16px',
    marginTop:10,
    color:'#225162',
  });
export function FieldsetCodeMk(props: InputProps) {
  function reenviarCodigo(){
    console.log('reenviar codigo')
  }
    return (
        <Fieldset>
          <Label htmlFor={props.model}>{props.label}</Label>
          <ContenteCode>
            <Input style={{
              width: `43px`,
              marginRight:'8px',
            }} id='cod1' defaultValue="0" />
            <Input id='cod2' defaultValue="0" max-length={1} />
            <Input id='cod3' defaultValue="0"  max-length={1}/>
            <Input id='cod4' defaultValue="0"  max-length={1}/>
            <Input id='cod5' defaultValue="0"  max-length={1}/>
            <Input id='cod6' defaultValue="0"  max-length={1}/>
            <ButtonLink onClick={reenviarCodigo}> <u>Não recebeu o código? Clique para reenviar</u></ButtonLink>
          </ContenteCode>
        </Fieldset>
    )
}