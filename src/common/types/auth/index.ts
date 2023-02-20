import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

export type LoginPageType<TFieldValues extends FieldValues = FieldValues,
    TContext = any, > = {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>;

}

export type RegisterPageType<TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    > = {
    navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>

}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean
}


interface IPublicUser {
    id: number | null,
    firstName: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string
    watchlist: [IWatchlist]
}

interface IWatchlist {
    id: number | null,
    name: string,
    assetId: string,
    createdAt: string,
    updatedAt: string,
    user: number | null
}