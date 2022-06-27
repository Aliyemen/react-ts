import { styled } from '@stitches/react';

type InputProps = {
    label: string;
    model:string;

}


export function Input(props: InputProps) {
    return (
        <><h1> {props.label}</h1><p> {props.model}</p></>
    )
}

