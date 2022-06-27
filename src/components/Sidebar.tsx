import { useState } from "react"
import { Step } from "./sheared/Step";

type stepsProp = {
    label: string;
    index:number;
    className: string;

}
export function Sidebar() {
    const [stpes, setStepes] = useState<stepsProp[]>([
        {index:1, label: 'Usuário', className:''},
        {index:2, label: 'Validação', className:''},
        {index:3, label: 'Empresa', className:''},
        {index:4, label: 'Documentos', className:''},
        {index:5, label: 'Confirmação', className:''},
       
    ])
    return (
        <> <div className="row clearfix" style={{
            marginBottom :'23px',
            marginTop:'46px',
            color:'black',
            backgroundColor:"white",
            width:'721px',
            height:'55px',
            borderRadius:'25px',
            fontSize:'14px',
            flexDirection: "row",
          
        }}>
            { 
                stpes.map( step =>{
                    return <Step index={step.index}  label={step.label}  className={step.className} />
                })
            }
            
        </div></>
    )
}

