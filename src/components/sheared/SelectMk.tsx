import { styled } from '@stitches/react';
import { green, gray } from '@radix-ui/colors';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';
import {useState} from "react";

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  flex: '1 0 auto',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 6,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  height: 35,
  width:'420px',
  gap: 5,
  width:540,
  marginBottom:20,
  backgroundColor: 'white',
  color: gray.gray10,
  boxShadow: `0 0 0 1px ${gray.gray8}`,
  '&:hover': { backgroundColor:  green.green3 , boxShadow: `0 0 0 2px ${gray.gray9}` },
  '&:focus': { boxShadow: `0 0 0 2px ${gray.gray9}` },
});

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 25,
	alignItems: 'center',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
});

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 15,
  lineHeight: 1,
  color: gray.gray10,
  borderRadius: 25,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: green.green3,
    pointerEvents: 'none',
  },
  '&:focus': {
    backgroundColor: green.green8,
    color: 'White',
  },
});

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 15,
  lineHeight: '25px',
  color: gray.gray7,
});

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor:  green.green6,
  margin: 5,
});

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'end',
  justifyContent: 'end',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'end',
  height: 25,
  backgroundColor: 'white',
  color:  green.green11,
  cursor: 'default',
};

const Label = styled('label', {
	fontSize: 15,
	lineHeight: 1,
	marginBottom: 10,
	color: '#264e5d',
	fontWeight:'bold',
	display: 'block',
});

const StyledChevronDownIcon = styled(ChevronDownIcon, {
  color:  green.green6,
	paddingLeft:100,
});
const StyledChevronUpIcon = styled(ChevronUpIcon, {
  color:  green.green6,
	paddingLeft:100,
});


const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles);

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles);

// Exports
export const Select = SelectPrimitive.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = SelectPrimitive.Icon;
export const SelectContent = StyledContent;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectPrimitive.Group;
export const SelectItem = StyledItem;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;

// Your app...
const Box = styled('div', {});

type typesOfCompanies = {
    text: string;
    value: string;

}

 function SelectMk() {
    const [typesOfCompany, setTypesOfCompany] = useState<typesOfCompanies[]>([
				{text: 'Outro', value: ''},
        {text: 'EIRELI', value: 'EIRELI'},
        {text: 'Empresário Individual', value: 'Individual'},
        {text: 'Sociedade Simples', value: 'Simples'},
        {text: 'Sociedade Anônima', value: 'Anonima'},
        {text: 'Sociedade Limitada Unipessoal', value: 'Unipessoal'},
        {text: 'MEI', value: 'MEI'},
       
    ])
    return(
      <Box>
				<Label htmlFor='typesOfCompany'>Tipo de empresa</Label>
        <Select defaultValue="Individual">
          <SelectTrigger aria-label="typesOfCompany">
            <SelectValue />
            <SelectIcon>
              <StyledChevronDownIcon />
            </SelectIcon>
          </SelectTrigger>
          <SelectContent>
            <SelectScrollUpButton>
              <StyledChevronUpIcon />
            </SelectScrollUpButton>
            <SelectViewport>
              <SelectGroup>
                <SelectLabel>Selecione o tipo de empresa</SelectLabel>
									{
										typesOfCompany.map( company =>{
													return <>
															<SelectItem value={company.value}>
																	<SelectItemText>{company.text}</SelectItemText>
																			<SelectItemIndicator>
																					<CheckIcon />
																			</SelectItemIndicator>
															</SelectItem>
													</> 
											})
			
									}
              </SelectGroup>
            </SelectViewport>
            <SelectScrollDownButton>
              <ChevronDownIcon />
            </SelectScrollDownButton>
          </SelectContent>
        </Select>
      </Box>
    );
} 

export default SelectMk;