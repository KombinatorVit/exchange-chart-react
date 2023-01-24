export type LoginPageType = {
    setEmail: (value: string) => void
    setPassword: (value: string) => void
    navigate: (to: string) => void
}

export type RegisterPageType = {
    setEmail: (e: string) => void
    setPassword: (e: string) => void
    setRepeatPassword: (e: string) => void
    setFirstName: (e: string) => void
    setUsername: (e: string) => void
    navigate: (to: string) => void

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