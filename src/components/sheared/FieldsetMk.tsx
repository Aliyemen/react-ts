import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';
import InputMask from "react-input-mask";

type InputProps = {
    label: string;
    model:string;
    width:number;

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
  
  const Input = styled('input', {
    all: 'unset',
    flex: '1 0 auto',
    borderRadius: 6,
    padding: '0 10px',
    fontSize: 15,
    lineHeight: 1,
    color: gray.gray10,
    boxShadow: `0 0 0 1px ${gray.gray8}`,
    height: 35,
    width:`${(props: { width: any; }) => props.width}px`,
    '&:focus': { boxShadow: `0 0 0 2px ${gray.gray9}` },
  });
  const InputMaskMk = styled(InputMask, {
    all: 'unset',
    flex: '1 0 auto',
    borderRadius: 6,
    padding: '0 10px',
    fontSize: 15,
    lineHeight: 1,
    color: gray.gray10,
    boxShadow: `0 0 0 1px ${gray.gray8}`,
    height: 35,
    width:`${(props: { width: any; }) => props.width}px`,
    '&:focus': { boxShadow: `0 0 0 2px ${gray.gray9}` },
  });
export function FieldsetMk(props: InputProps) {
    function getInput(props :InputProps){
      if( ['mobile','phone'].includes(props.model) ){
        return <InputMaskMk width={props.width} mask='(99) 99999-9999'  id={props.model} defaultValue="" />
      }
      return  <Input width={props.width} id={props.model} defaultValue="" />
    }
    return (
        <Fieldset>
          <Label htmlFor={props.model}>{props.label}</Label>
          {
           getInput(props)
          }
          
        </Fieldset>
    )
}