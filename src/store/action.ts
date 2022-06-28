import { notification } from "antd";
import { Login } from "../models/login"

import { createLoginService } from "./service";

export enum AppActionType {
    POST_REGISTER = '[LOGIN] Register',
}

export interface navigatorAction {
    login(login: Login, nextPath?: string): void,
    
}


export const loginActions = ((): navigatorAction => {
    const loginService = createLoginService();
    const actions = {
        login: (): any => {
            return { type: AppActionType.POST_REGISTER }
        },
    }
        
    function login(login: Login, nextPath?: string){
        return (dispath: any) => {
            dispath(actions.login());
            loginService.postLogin(login).then(user => {
            }).catch(error => { console.log(JSON.stringify(error))});
        }

    }

 
    return {
        login
    }
})