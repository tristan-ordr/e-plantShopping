export interface StateHolderInterface {
    cart: CartSliceInterface,
    auth: {}
}

export interface CartSliceInterface {
    items: CartItemInterface[]
}

export interface CartItemInterface {
    name: string
    image: string
    cost: string
    quantity: number
}