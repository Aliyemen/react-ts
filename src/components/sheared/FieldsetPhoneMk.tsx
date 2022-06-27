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
 
export function FieldsetPhoneMk(props: InputProps) {
  function onChangeNumber(e: { target: { value: any; }; }){
    console.log('onChangeNumber', e.target.value)
  }
    return (
        <Fieldset>
          <Label htmlFor={props.model}>{props.label}</Label>
          <InputMask  mask='(99) 99999-9999' 
            value={props.model} 
            onChange={onChangeNumber}
            style={{
              borderRadius: 25,
              padding: '0 20px',
              fontSize: 15,
              height:'45px',
              color: gray.gray10,
              boxShadow: `0 0 0 0px ${gray.gray7}`,
              width: `${props.width}px`,
          }} id={props.model}  />
        </Fieldset>
    )
}