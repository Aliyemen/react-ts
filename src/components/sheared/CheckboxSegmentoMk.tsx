import { styled } from '@stitches/react';
import { gray } from '@radix-ui/colors';
import { CheckIcon } from '@radix-ui/react-icons';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import  Reteador  from '../../assets/Reteador.png';
import  Outros  from '../../assets/Outros.png';


const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: 'White',
  width: 15,
  height: 15,
  borderRadius: 50,
  marginLeft:'-30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px ${gray.gray7}`,
  '&:hover': { backgroundColor: '#4c8db5' },
  '&:focus': { boxShadow: `0 0 0 2px ${gray.gray8}` },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: 'White',
  backgroundColor: '#65d292',
  borderRadius: 50,
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  paddingLeft:10,
  width: 45,
  height: 45,
});

// Exports
export const Checkbox = StyledCheckbox;
export const CheckboxIndicator = StyledIndicator;
export const AvatarImage = StyledImage;
export const Avatar = StyledAvatar;
// Your app...
const Flex = styled('div', { display: 'flex' });
const Label = styled('label', {
  color: '#2e4d59',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
  fontWeight:'bold',
  fontFamily:'revert'
});

const LabelP = styled('p', {
  color: '#2e4d59',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
  fontWeight:'bold',
  fontFamily:'revert',
  paddingLeft: 15,
  paddingTop:10,
  marginBottom: '-5px',
});

const FlexColumn = styled('div', { 
  display: 'flex' ,
  alignItems: 'center', 
  flexDirection:'column',
  borderRadius: 6,
  padding: '0 20px',
  paddingBottom:20,
  paddingRight:40,
  marginLeft:20,
  marginTop:15,
  boxShadow: `0 0 0 2px ${gray.gray3}`,
  '&:hover': {boxShadow: `0 0 0 2px ${gray.gray8}` },
  '&:focus': { boxShadow: `0 0 0 2px ${gray.gray8}` },
  '&[data-state="active"]': {
    boxShadow: `0 0 0 2px ${gray.gray8}`
  },
  
});
function CheckboxSegmentoMk () {
  return (
    <Flex css={{ alignItems: 'flex-start', flexDirection:'column'}}>
       <Label  htmlFor="c1">
          Escolha o segmento de sua empresa :
        </Label>
        <Flex css={{ alignItems: 'center', flexDirection:'row' , marginTop:10,  marginBottom: 30, marginLeft:10 }}>
          <FlexColumn>
          <LabelP>
            <Checkbox defaultChecked id="c1">
              <CheckboxIndicator>
                <CheckIcon />
              </CheckboxIndicator>
            </Checkbox>
            <Avatar>
                <AvatarImage
                  src={Reteador}
                  alt="Colm Tuite"
                />
              </Avatar>
              </LabelP>
            <LabelP>
            Provedores
            </LabelP>
            <LabelP >
              de internet 
            </LabelP>
          </FlexColumn>
          <FlexColumn>
            <LabelP>
              <Checkbox defaultChecked id="c1">
                <CheckboxIndicator>
                  <CheckIcon />
                </CheckboxIndicator>
                
              </Checkbox>
              <Avatar>
                <AvatarImage
                     src={Outros}
                    alt="Colm Tuite"
                  />
                </Avatar>
              </LabelP>
                <LabelP >
                Outros
                </LabelP>
              <LabelP>
                segmentos
              </LabelP>
          </FlexColumn>
        </Flex>
      </Flex>
  );
} 

export default CheckboxSegmentoMk;
