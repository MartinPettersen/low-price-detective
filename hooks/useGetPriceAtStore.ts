
export const useGetPriceAtStore = (storeCode: any, prices: any[]) => {

    for(let i = 0; i < prices.length; i++) {
        if(prices[i].store.code == storeCode) {
            return prices[i].current_price.price
        }
    }

}