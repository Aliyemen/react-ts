import React from 'react';
import { useState } from "react"
import { styled } from '@stitches/react';
import {  mauve, gray, green } from '@radix-ui/colors';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import Company from './Company';
import Validation from './Validation';
import Register from './Register';
import Confirmation from './Confirmation';
import Documents from './Documents';


type stepsProp = {
    label: string;
    index:string;
    variant: string;

}

const StyledTabs = styled(TabsPrimitive.Root, {
  marginBottom :'23px',
  marginTop:'46px',
  maxWidth:'844px',
  height:'54px',
  borderRadius:'25px',
  display: 'flex',
  flexDirection: 'column',
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: `1px solid ${mauve.mauve6}`,
  backgroundColor: 'white',
  borderRadius:'25px',
  marginBottom :'23px',
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  padding: '0 20px',
  height: '53px',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius:'25px',
  paddingTop:5,
  fontSize: 15,
  fontWeight:'bold',
  lineHeight: 1,
  color: '#264e5d',
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 25 },
  '&:last-child': { borderTopRightRadius: 25 },
  '&:hover': { color: '#8cc9a5' , '& span':{ color:'#264e5d'} },
  '&[data-state="active"]': {
    color: 'white',
    backgroundColor: '#4c8db5',
    width:'721px',
    height:'54px',
    borderRadius:'25px',
    borderBottomStyle: 'none',
    '& span':{ color:'white'},
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${gray.gray9}` },
  variants: {
    variant: {
      white: {
        backgroundColor: 'white',
        color: '#264e5d',
        '& span':{ color:'#8cc9a5'},
        '&:hover': { backgroundColor: green.green9,color:'white',  '& span':{ color:'white'}, },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}`, color:'white', '& span':{ color:'white'}, },
      },
      green: {
        backgroundColor:' rgba(70,191,120,1)',
        color: 'White',
        '& span':{ color:'white'},
        '&:hover': { backgroundColor: green.green9 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
      },
    },
  },

  defaultVariants: {
    variant: 'white',
  },

});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,
  alignItems: 'left',
  justifyContent: 'left',
  backgroundColor: 'white',
  borderRadius:'25px',
  textAlign: 'left',
  outline: 'none',
});

// Exports
export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;

// Your app...
const Box = styled('div', {});

const Text = styled('div', {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});



 function TabsMk() {
    const [stpes, setStepes] = useState<stepsProp[]>([
        {index:'1', label: 'Usuário', variant:'white'},
        {index:'2', label: 'Validação', variant:'white'},
        {index:'3', label: 'Empresa', variant:'white'},
        {index:'4', label: 'Documentos', variant:'white'},
        {index:'5', label: 'Confirmação', variant:'white'},
    ]);
  return (
      <Box css={{}}>
        <Tabs defaultValue="1">
          <TabsList aria-label="Manage your account">
          { 
              stpes.map( step =>{
                  return <TabsTrigger  variant={step.variant} value={step.index} key={step.index}><p> <span>{step.index} </span> {step.label} </p></TabsTrigger>
              })
          }
          </TabsList>
          <TabsContent value="1">
            <Register />
          </TabsContent>
          <TabsContent value="2">
            <Validation />
          </TabsContent>
          <TabsContent value="3">
            <Company />
          </TabsContent>
          <TabsContent value="4">
            <Documents />
          </TabsContent>
          <TabsContent value="5">
            <Confirmation />
          </TabsContent>
        </Tabs>
      </Box>
    );
  }

export default TabsMk;