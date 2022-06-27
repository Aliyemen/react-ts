import { styled } from '@stitches/react';
import {  green } from '@radix-ui/colors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ButtonProps = {
    label: string;
    clicked:Function;
    childeBotton:string;

}
const Button = styled('button', {

    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: '0 15px',
    fontSize: '16px',
    lineHeight: 1,
    fontWeight: 500,
    fontFamily:'Baloo 2',
    height: '45px',
    minWidth:'198px',
    variants: {
      variant: {
        green: {
          backgroundColor:' rgba(70,191,120,1)',
          color: 'White',
          '&:hover': { backgroundColor: green.green9 },
          '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
        },
      },
    },
  
    defaultVariants: {
      variant: 'green',
    },
  });
  const ButtonLink = styled('a', {
    padding: '0 20px',
    fontSize: '16px',
    marginTop:10,
    color:'#225162',
  });

const Flex = styled('div', { display: 'flex' });

export function ButtonMk(props: ButtonProps) {
    function clickedButton() {
        console.log('clicked', props.label)
        toast("Otimo, vamos para próximo passo !");
        return props.clicked;
    }
    function goBack(){
      console.log('goback')

    }
    return (
        <> <Flex css={{ marginTop: 20, justifyContent: 'flex-start' }}>
          <Button type="button"  onClick={clickedButton}> {props.label}</Button>
          <ButtonLink onClick={goBack}> <u>{props.childeBotton}</u></ButtonLink>
          <ToastContainer />
        </Flex>
        </>
    )
}
