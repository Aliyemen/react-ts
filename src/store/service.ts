import { Login } from "../models/login";
import { Validion } from "../models/validion";
import { Company } from "../models/company";

import { createApiService } from "../service";

export const createLoginService = () => {
    const service = createApiService('/api');

    const postLogin = (login: Login): Promise<any> => {
        return service.post('/register', login);
    }

    const postValidtion = (validion: Validion): Promise<any> => {
        return service.post('/validion', validion);
    }

    const postCompany = (company: Company): Promise<any> => {
        return service.post('/validion', company);
    }
    
    const acceptPolicyChange = (id: string): Promise<any> => {
        return service.post('/terms-policies/accept/' + id, {
            type: [
                'termo',
                'politica'
            ]
        });
    }

    return { postLogin, acceptPolicyChange, postValidtion, postCompany };
}