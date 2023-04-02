// Задание №1**********************************************************************
console.log(' ');
console.log('задание №1');
console.log(' ');
let auto = {
     manufacture: "BMW",
     model: 'X5',
     year: "2022",
     speed: 68,

}
function nunOne (){
    console.log(`Автомобиль марки ${auto.manufacture} ${ auto.model} ${auto.year} года выпуска следует в населенный пункт со средней скоростью ${auto.speed} `);
}
nunOne()
let  distanse = 450
function numOneTwo (){ 
    let t;
   time  = distanse /auto.speed;
   time = Math.floor(time)
   t = time / 4
   time  = distanse /auto.speed + t
  return console.log( `Автомобиль прибудет к назаначенной точке через: ${time.toFixed(2) } часов`); 
}
numOneTwo()
console.log(' ');
// задание №2*********************************************************
console.log("Задание №2");
console.log(' ');
let x;
let fraction = {
    num: 4,
    denominator: 2,
    numtwo: 4,
    denominatortwo: 6,  
    one() {
            x = fraction.num * fraction.denominatortwo + fraction.numtwo * fraction.denominator
            b = fraction.denominator * fraction.denominatortwo
         console.log(`Результат ${x} \\ ${b} `);
    },
    two(){
        x = fraction.num * fraction.denominatortwo - fraction.numtwo * fraction.denominator
        b = fraction.denominator * fraction.denominatortwo
        console.log(`Результат ${x} \\ ${b} `);
    },
    tree(){
        x = fraction.num * fraction.numtwo
        b = fraction.denominator * fraction.denominatortwo
        console.log(`Результат ${x} \\ ${b} `);
    },
    four(){
        x = fraction.num * fraction.denominatortwo 
        b = fraction.denominator * fraction.numtwo
        console.log(`Результат ${x} \\ ${b} `);
    },
    five(){
        x = fraction.num;
        b = fraction.denominator;
            for( i = 2; i <= fraction.num; i++ ){
               if (fraction.num % i == 0 && fraction.denominator % i == 0 ){
                x = fraction.num / i
                b = fraction.denominator / i
                console.log(`Результат ${x} \\ ${b} `);
               }
               
            }
    }
}
fraction.one()
fraction.two()
fraction.tree()
fraction.four()
fraction.five()
// Задание 3****************************************************************************
// // // Задание 3,1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
console.log('Задание №3');
console.log(' ');
let numTree = {
    
        time(){
            a = new Date ( ),

            console.log( `Текушее время  ${a.getHours()} : ${a.getMinutes()}: ${a.getSeconds()}`);
            },

        timesec(sec = 40){
            a = new Date ( )
            let newSec, newMinut;
            newSec = a.getSeconds() + sec;
            newMinut = a.getMinutes();
            if (newSec >= 60) {
                newMinut = newMinut + Math.floor(newSec / 60);
                newSec = newSec - 60 * Math.floor(newSec / 60);
               
            } else {
                newSec += sec;
                // console.log(`Текушее время  ${a.getHours()}:${a.newMinut()}:${a.newSec()}`)
            }
            console.log(`Время с учетом добавленных вами ${sec} секунд  ${a.getHours()}:${newMinut}:${newSec}`)
        },     
        timemin(min = 2){
            a = new Date()
            let newmin , newhour, newmints;

            newmin = a.getMinutes() + min;
            newhour = a.getHours()

            if ( newmin > 60){
                newhour = newhour + Math.floor(newmin / 60)
                newmints = newmin - 60 *  Math.floor (newmin/60 )
            } else {
                newmints = a.getMinutes() + min
                
            }
            console.log(`Время с учетом добавленных вами ${min} минут  : ${newhour}:${newmints}:${a.getSeconds()}`)
           
        },
        
        funktionHour( hour = 20){
            
            a = new Date()
            let newhour ;
            newhour = a.getHours() + hour

            console.log(`Время с учетом добавленных вами ${hour} часов ${newhour}: ${a.getMinutes()}:${a.getSeconds()} `);     
        }            
}
numTree.time()
numTree.timesec()
numTree.timemin()
numTree.funktionHour()














