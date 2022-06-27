import { notification } from "antd";
import { Login } from "models/login/login"
import { appActions } from "store/app/action";
import { auth } from "utils/auth";
import { getJwt } from "utils/utils";
import { createLoginService } from "./service";

export enum AppActionType {
    POST_REGISTER = '[LOGIN] Register',
    POST_REGISTER_SUCCESS = '[LOGIN] Register Success',
    POST_REGISTER_ERROR = '[LOGIN] Register Error',
    POST_COMPLETE_REGISTER = '[LOGIN] Complete Register',
    POST_COMPLETE_REGISTER_SUCCESS = '[LOGIN] Complete Register Success',
    POST_COMPLETE_REGISTER_ERROR = '[LOGIN] Complete Error',
    POST_LOGIN = '[LOGIN] Login',
    POST_LOGIN_SUCCESS = '[LOGIN] Login Success',
    POST_LOGIN_ERROR = '[LOGIN] Login Error',
    POST_LOGOUT = '[LOGIN] Logout',
    POST_LOGOUT_SUCCESS = '[LOGIN] Logout Success',
    POST_LOGOUT_ERROR = '[LOGIN] Logout Error',
    POST_REFRESH_TOKEN = '[LOGIN] Refresh Token',
    POST_REFRESH_TOKEN_SUCCESS = '[LOGIN] Refresh Token Success',
    POST_REFRESH_TOKEN_ERROR = '[LOGIN] Refresh Token Error',
    POST_FORGOT_PASSWORD = '[LOGIN] Forgot Password',
    POST_FORGOT_PASSWORD_SUCCESS = '[LOGIN] Forgot Password Success',
    POST_FORGOT_PASSWORD_ERROR = '[LOGIN] Forgot Password Error',
    POST_VERIFY_EMAIL = '[LOGIN] Verify Email',
    POST_VERIFY_EMAIL_SUCCESS = '[LOGIN] Verify Email Success',
    POST_VERIFY_EMAIL_ERROR = '[LOGIN] Verify Email Error',
    CONFIRM_REGISTER = '[LOGIN] Confirm Register',
    CHANGE_SCREEN = '[LOGIN] Change Screen',
    CHANGE_VERIFY_EMAIL = '[LOGIN] Change Verify Email',
    CHANGE_VERIFY_TERMS = '[LOGIN] Change Verify Terms',
    GET_USER_EMAIL = '[LOGIN] User Email',
    GET_USER_EMAIL_SUCCESS = '[LOGIN] User Email Success',
    GET_USER_EMAIL_ERROR = '[LOGIN] User Email Error',
    ACCEPT_POLICY_CHANGE = '[LOGIN] Accept Policy Change',
    ACCEPT_POLICY_CHANGE_SUCCESS = '[LOGIN] Accept Policy Change Success',
    ACCEPT_POLICY_CHANGE_ERROR = '[LOGIN] Accept Policy Change Error',
    SET_USER = '[LOGIN] Set User',
    CLEAR_USER = '[LOGIN] Clear User'
}

export interface navigatorAction {
    login(login: Login, nextPath?: string): void,
    changeScreen(screen: 'login' | 'forgotPassword' | 'sendPassword' | 'newPassword' | 'verifyEmail'): void
    logout(): void,
    getUserInfo(): void,
    refreshToken(token: string, expire: Date): void,
    forceRefreshToken(): void,
    acceptPolicyChange(id: string): void,
}

let timeout: NodeJS.Timeout;

export const loginActions = ((): navigatorAction => {
    const loginService = createLoginService();
    const appAction = appActions();
    const actions = {
        login: (): any => {
            return { type: AppActionType.POST_LOGIN }
        },
        loginSuccess: (): any => {
            return { type: AppActionType.POST_LOGIN_SUCCESS }
        },
        loginError: (): any => {
            return { type: AppActionType.POST_LOGIN_ERROR }
        },
        logout: (): any => {
            return { type: AppActionType.POST_LOGOUT }
        },
        logoutSuccess: (): any => {
            return { type: AppActionType.POST_LOGOUT_SUCCESS }
        },
        logoutError: (): any => {
            return { type: AppActionType.POST_LOGOUT_ERROR }
        },
        refreshToken: (): any => {
            return { type: AppActionType.POST_REFRESH_TOKEN }
        },
        refreshTokenSuccess: (): any => {
            return { type: AppActionType.POST_REFRESH_TOKEN_SUCCESS }
        },
        refreshTokenError: (): any => {
            return { type: AppActionType.POST_REFRESH_TOKEN_ERROR }
        },
        changeScreen: (screen: string): any => {
            return { type: AppActionType.CHANGE_SCREEN, payload: screen }
        },
        getUserEmail: (): any => {
            return { type: AppActionType.GET_USER_EMAIL }
        },
        getUserEmailSuccess: (email: string): any => {
            return { type: AppActionType.GET_USER_EMAIL_SUCCESS, payload: email }
        },
        getUserEmailError: (): any => {
            return { type: AppActionType.GET_USER_EMAIL_ERROR }
        },
        setUser: (name: any, email: any, firstName: any, lastName: any, telephone: any, cpf: any, orgId: any, isAdmin: boolean): any => {
            return { type: AppActionType.SET_USER, payload: { name, email, firstName, lastName, telephone, cpf, orgId, isAdmin } }
        },
        clearUser: (): any => {
            return { type: AppActionType.CLEAR_USER }
        },
        acceptNewPolicy: (): any => {
            return { type: AppActionType.ACCEPT_POLICY_CHANGE }
        },
        acceptNewPolicySuccess: (): any => {
            return { type: AppActionType.ACCEPT_POLICY_CHANGE_SUCCESS }
        },
        acceptNewPolicyError: (): any => {
            return { type: AppActionType.ACCEPT_POLICY_CHANGE_ERROR }
        },
        changeVerifyTerms: (changedTerms: string): any => {
            return { type: AppActionType.CHANGE_VERIFY_TERMS, payload: changedTerms }
        },
    }

    function login(login: Login, nextPath?: string) {
        return (dispath: any) => {
            dispath(actions.login());

            loginService.postLogin(login).then(user => {
                const userInfo = getJwt(user.access_token);
                const isAdmin: boolean = userInfo?.resource_access['marketplace-admin-frontend']?.roles?.includes('admin') ?? false;
                if (isAdmin === true) {
                    dispath(actions.loginSuccess());
                    auth.setAuth({
                        userid: login.username,
                        expires_in: user.expires_in,
                        refresh_expires_in: user.refresh_expires_in,
                        refresh_token: user.refresh_token,
                        token: user.access_token
                    });
                    let date = new Date();
                    date.setSeconds(user.refresh_expires_in);
                    dispath(appAction.goTo(nextPath ?? '/'));
                    setTimeout(() => {
                        dispath(getUserInfo());
                    }, 0)
                } else {
                    notification.error({
                        message: 'Usuário sem permissão',
                        placement: 'bottomLeft'
                    })
                    dispath(actions.loginError());
                }
            }).catch(error => {
                if (timeout != null)
                    clearTimeout(timeout);
                dispath(actions.loginError());
                if (getRequiredActions('termos', error.response).length > 0) {
                    dispath(actions.changeVerifyTerms(getRequiredActions('termos', error.response).join(',')));
                }
            })
        }
    }

    function getUserInfo() {
        return (dispath: any) => {
            if (auth.isAuthenticated()) {
                const user = auth.getAuth();
                let date = new Date();
                date.setSeconds(user.refresh_expires_in);
                timeout = setTimeout(() => {
                    dispath(refreshToken(user.refresh_token, date));
                }, (user.expires_in * 1000) - 10000);
                if (!user.token) {
                    loginService.postRefreshToken(user.refresh_token).then(user => {
                        const userInfo = getJwt(user.access_token);
                        const isAdmin: boolean = userInfo?.resource_access['marketplace-admin-frontend']?.roles?.includes('admin') ?? false;
                        if (isAdmin)
                            dispath(actions.setUser(userInfo.name, userInfo.email, userInfo.given_name, userInfo.family_name, userInfo.telephone, userInfo.cpf, userInfo.organization_ids && userInfo.organization_ids.length > 0 ? userInfo.organization_ids[0] : null, isAdmin));
                        else
                            dispath(logout('/unauthorized'));
                    })
                } else {
                    const userInfo = getJwt(user.token);
                    const isAdmin: boolean = userInfo?.resource_access['marketplace-admin-frontend']?.roles?.includes('admin') ?? false;
                    if (isAdmin)
                        dispath(actions.setUser(userInfo.name, userInfo.email, userInfo.given_name, userInfo.family_name, userInfo.telephone, userInfo.cpf, userInfo.organization_ids && userInfo.organization_ids.length > 0 ? userInfo.organization_ids[0] : null, isAdmin));
                    else
                        dispath(logout('/unauthorized'));
                }
            }
        }
    }

    function refreshToken(token: string, expire: Date) {
        return (dispath: any) => {
            if (expire > new Date()) {
                dispath(actions.refreshToken());

                loginService.postRefreshToken(token).then(user => {
                    dispath(actions.refreshTokenSuccess());
                    const userAuth = auth.getAuth()
                    auth.setAuth({
                        userid: userAuth.userid,
                        expires_in: user.expires_in,
                        refresh_expires_in: user.refresh_expires_in,
                        refresh_token: user.refresh_token,
                        token: user.access_token
                    });
                    const userInfo = getJwt(user.access_token);
                    auth.setAuth({ ...(auth.getAuth()), 'token': user.access_token });
                    const isAdmin: boolean = userInfo?.resource_access['marketplace-admin-frontend']?.roles?.includes('admin') ?? false;
                    if (isAdmin)
                        dispath(actions.setUser(userInfo.name, userInfo.email, userInfo.given_name, userInfo.family_name, userInfo.telephone, userInfo.cpf, userInfo.organization_ids && userInfo.organization_ids.length > 0 ? userInfo.organization_ids[0] : null, isAdmin));
                    else
                        dispath(logout('/unauthorized'));
                    let date = new Date();
                    date.setSeconds(user.refresh_expires_in);
                    if (timeout != null)
                        clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        dispath(refreshToken(user.refresh_token, date));
                    }, (user.expires_in * 1000) - 10000);

                }).catch(() => {
                    dispath(actions.refreshTokenError());
                    if (timeout != null)
                        clearTimeout(timeout);
                })
            } else {
                dispath(logout());
            }
        }
    }

    function forceRefreshToken() {
        return (dispath: any) => {
            const userAuth = auth.getAuth()
            loginService.postRefreshToken(userAuth.refresh_token).then(user => {
                const userInfo = getJwt(user.access_token);
                auth.setAuth({ ...(auth.getAuth()), 'token': user.access_token });
                const isAdmin: boolean = userInfo?.resource_access['marketplace-admin-frontend']?.roles?.includes('admin') ?? false;
                if (isAdmin)
                    dispath(actions.setUser(userInfo.name, userInfo.email, userInfo.given_name, userInfo.family_name, userInfo.telephone, userInfo.cpf, userInfo.organization_ids && userInfo.organization_ids.length > 0 ? userInfo.organization_ids[0] : null, isAdmin));
                else
                    dispath(logout('/unauthorized'));
            })
        }
    }

    function logout(path?: string) {
        return (dispath: any) => {
            if (auth.getAuth().token !== null) {
                dispath(actions.logout());
                const refreshToken = auth.getAuth().refresh_token;
                loginService.postLogout(refreshToken).then(() => {
                    auth.logout();
                    dispath(actions.logoutSuccess());
                    dispath(appAction.goTo(path ?? '/login'));
                }).catch(() => {
                    auth.logout();
                    dispath(actions.logoutError());
                    dispath(appAction.goTo(path ?? '/login'));
                });
            }
        }
    }

    function changeScreen(screen: string) {
        return (dispath: any) => {
            dispath(actions.changeScreen(screen));
        }
    }

    function acceptPolicyChange(id: string) {
        return (dispath: any) => {
            dispath(actions.acceptNewPolicy());

            loginService.acceptPolicyChange(id).then(x => {
                dispath(actions.acceptNewPolicySuccess());
            }).catch(error => {
                dispath(actions.acceptNewPolicyError());
            })
        }
    }

    function getRequiredActions(type: string, response: any) {
        if (response?.data?.params?.requiredActions === undefined || response?.data?.params?.requiredActions === null) {
            return []
        }

        switch (type) {
            case 'termos':
                return response?.data?.params?.requiredActions.filter((action: string) => action === 'termo' || action === 'politica')
            default:
                return []
        }
    }

    return {
        login, changeScreen, refreshToken, logout, getUserInfo, forceRefreshToken, acceptPolicyChange
    }
})