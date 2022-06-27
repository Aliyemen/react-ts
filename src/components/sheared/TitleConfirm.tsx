import { styled } from '@stitches/react';

type ConfirmProps = {
    description: string;
    subDescription:string;
    label: string;

}
const Contente = styled('div', {
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    fontFamily:'Baloo 2',
  });


  
  const TextLabel = styled('p', {
    marginTop:'-15px',
    marginBottom: '30px',
    color: '#6fcc95',
    fontSize: 20,
    fontWeight:'bold',
  });
  const TextDescription = styled('p', {
    marginBottom: '19px',
    marginTop:'-15px',
    color: '#225162',
    fontSize: 15,
    fontWeight:'bold',
  });

  const TextSubDescription = styled('p', {
    marginBottom: '19px',
    marginTop:'-15px',
    color: '#225162',
    fontSize: 15,
  });

  

export function TitleConfirm(props: ConfirmProps) {
    return (
        <Contente>
            <TextLabel> {props.label}</TextLabel>
            <TextDescription>{props.description}</TextDescription>
            <TextSubDescription>{props.subDescription}</TextSubDescription>
        </Contente>
    )
}