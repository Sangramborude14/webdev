let stock = {
    Fruits : ["strawberry","grapes","apple","banana"],
    liquid : ["water","ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","pea"]
}


function order(fruit,callback) {
    setTimeout(() => {
        console.log(`${stock.Fruits[fruit]} was selected`);
        callback();
    },2000);//two seconds to place order
 
}
function production(){

    setTimeout(() => {console.log(`production has started`)//immediate response
                    setTimeout(() => {
                        console.log("the fruit has been chopped");//2 seconds to chop fruits
                        setTimeout(() => {
                            console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);//1 second to add water
                            
                            setTimeout(() => {console.log(`the machine was started`)//1 second to start machine
                                    setTimeout(() => {
                                        console.log(`${stock.holder[0]} was selected`);//2 sec to select holder
                                        
                                    setTimeout(() => {console.log(`${stock.toppings[0]} was added as a topping `)}) // 3 sec to add a topping
                                        
                                        setTimeout(() => {
                                            console.log(`serve icecream`) // serve icecream
                                        },2000)
                                    },2000);
                            },1000)
                        },1000);
                    },2000);
    },0)
}
order(0,production);