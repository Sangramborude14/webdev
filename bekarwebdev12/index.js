let stock = {
    Fruits : ["strawberry","grapes","apple","banana"],
    liquid : ["water","ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","pea"]
}

let is_shop_open = true;

function time(ms){
    return new Promise((resolve,reject) => { 
        if (is_shop_open){
            setTimeout(resolve,ms);
        }else{
            reject(console.log(`shop is closed`));
        }
    })
}

async function kitchen () {
 try{
    await time(2000);
    console.log(`${stock.Fruits[0]} was selected`)
    await time(0);
    console.log(`Production has started`)
    await time(2000);
    console.log(`the fruit was cut`)
    await time(1000);
    console.log(`water and ice was selected`)
    await time(1000);
    console.log(`start the machine`)
    await time(2000);
    console.log(`cone was placed on holder`)
    await time(3000);
    console.log(`chocolate was selected`)
    await time(2000);
    console.log(`ice cream was served`)
 }
 catch(error){console.log(`customer left`)}
 finally{console.log(`day ended shop is closed`)}
}

kitchen();

