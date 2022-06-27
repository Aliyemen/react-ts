import { styled } from '@stitches/react';

type TitleProps = {
    description: string;
    subDescription:string;
    title: string;
    label: string;

}
const Contente = styled('div', {
    alignItems: 'left',
    justifyContent: 'left',
    fontFamily:'Baloo 2',
  });

const TextTitle = styled('div', {
    marginBottom: '0px',
    color: '#225162',
    fontSize: 18,
    fontWeight:'bold',
    
  });

  const LineTitile = styled('p', {
    marginTop:'0px',
    marginBottom: '43px',
    color: '#6fcc95',
    width:'35px;',
    borderTop: '5px solid #6fcc95',
    borderRadius: '5px;'
  });
  
  const TextLabel = styled('p', {
    marginTop:'-15px',
    marginBottom: '30px',
    color: '#6fcc95',
    fontSize: 15,
    fontWeight:'bold',
  });
  const TextDescription = styled('p', {
    marginBottom: '19px',
    marginTop:'-15px',
    color: '#49626d',
    fontSize: 15,
  });

export function Title(props: TitleProps) {
    return (
        <Contente>
            <TextTitle> {props.title}
                <LineTitile />
            </TextTitle>
            <TextLabel> {props.label}</TextLabel>
            <TextDescription>{props.description}</TextDescription>
            <TextDescription>{props.subDescription}</TextDescription>
        </Contente>
    )
}