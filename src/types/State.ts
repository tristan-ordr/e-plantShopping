export interface StateHolderInterface {
    cart: CartStateInterface,
    auth: AuthStateInterface
}

export interface CartStateInterface {
    items: CartItemInterface[]
}

export interface CartItemInterface {
    name: string
    image: string
    cost: string
    quantity: number
}

export interface AuthStateInterface {
    token: string | null
    refresh: string | null
}