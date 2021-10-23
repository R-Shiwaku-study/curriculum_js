class Taiyaki {

    constructor(anko, cream, cheese) {
        this.anko = anko;
        this.cream = cream;
        this.cheese = cheese;
    }
}
let flavor = new Taiyaki('あんこ', 'クリーム','チーズ');
console.log('中身は' + flavor.anko + 'です')
console.log('中身は' + flavor.cream + 'です')
console.log('中身は' + flavor.cheese + 'です')


