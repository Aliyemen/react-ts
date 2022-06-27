import logo from './logo.svg'
import './App.css'
import  TabsMk  from './components/TabsMk'
import { styled } from '@stitches/react';


const Contente = styled('div', {
  display:'flex',
  alignItems: 'left',
  justifyContent: 'left',
  flexDirection: 'row',
  flexWrap:"wrap",
  
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
  
});

function App() {

  return (
    <div className="App">
      <div className="App-Body">
        <Contente>
        <FlexColumn css={ {width:100, alignItems: 'left', marginLeft:'-300px', marginRight:250  }}>
          <img src={logo} className="App-logo" alt="logo" />
        </FlexColumn>
        <FlexColumn>
        <TabsMk />
        </FlexColumn>
        </Contente>
      </div>
    </div>
  )
}

export default App
