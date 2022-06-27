export interface Resource {
    user: ResourceRegister;
    validtion: ResourceRegister;
    company: ResourceRegister;
    documentes: ResourceRegister;
    confirm: ResourceRegister;

}

export interface ResourceRegister {
    title: string;
    label: string;
    description: string;
    subDescription: string;
    email:string;
    fullName:string;
    mobile:string;
    politic:string;
    contrate:string;
    textContrate:string;
    accpetContrate:string;
    contrateName:string;
    contrateDesc:string;
    register:string;
    aceite:string;
}

export interface ResourceHeader {
    useCase: string;
    faq: string;
    api: string;
    enter: string;
    register: string;
}