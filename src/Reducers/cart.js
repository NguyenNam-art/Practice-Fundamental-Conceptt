import * as types from './../Constants/Actiontypes'
var data = JSON.parse(localStorage.getItem('CART'));

var initialState =  [
    {
        product : {
            id : 1,
            name : 'Nike Air Max 270 React ENG Travis Scott Cactus',
            image : 'https://stockx.imgix.net/Nike-Air-Max-270-React-Travis-Scott-1.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1590692067&w=1000',
            conds : true,
            price : '523$',
            inventory : 10
        },
        quantity : 5
    }
];
const cart = (state = initialState,action) =>{
    switch(action.type){
        case types.ADD_TO_CART :
            console.log(action)
            return [...state]
        default : return [...state];
    }
}
export default cart;