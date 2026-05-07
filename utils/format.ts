


export const formatPrice = (price:number) =>{
    const value = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency:"USD",
        minimumFractionDigits:0,
        maximumFractionDigits:0,
    }).format(price)
    return value;

}
export const formatQuantity = (quantity:number , noun:string) =>{
    return quantity === 1 ? `${quantity} ${noun}` : `${quantity} ${noun}s`;
}
