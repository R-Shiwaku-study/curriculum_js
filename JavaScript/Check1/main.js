let numbers = [2, 5, 12, 13, 15, 18, 22];
isEven();

function isEven() {
    for(i = 0; i< numbers.length; i++){
        if(numbers[i] % 2 ===0){
            var num = numbers[i]
            console.log(num + 'は偶数です');
        }
    }  
}
class Car{
    constructor(gass,num){
        this.gass = gass;
        this.num = num;
    }
}

let carKinds = new Car(20.5,1234);
function getNumGas(){
    console.log('ガソリンは' + carKinds.gass + 'です。' + 'ナンバーは' + carKinds.num + 'です。')
}
getNumGas();