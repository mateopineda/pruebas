"use strict";
var UtilMath = require('../clases/UtilMath');
class Regression {
    constructor() {
    }
    
    static betaOne(list) {
        var sum = UtilMath.sum(list)
        var mean = UtilMath.mean(list) 
        var square = UtilMath.sumSquared(list)
        var product = UtilMath.sumProduct(list); 
        var len = list.length;
        console.log("Dios",sum.itemOne)
        var betaOne = ((product - (len * ( mean[0] * mean[1])))/((square[0] - (len * Math.pow(mean[0], 2)))));
        return betaOne;
    }
    
    static betaZero(list) {
        var betaOne = Regression.betaOne(list)
        var mean = UtilMath.mean(list) 
        var betaZero = (mean[1] - (betaOne * mean[0])) 
        return betaZero;
    }
    
    static correlation(list) {
        var sum = UtilMath.sum(list)
        var mean = UtilMath.mean(list) 
        var square = UtilMath.sumSquared(list)
        var product = UtilMath.sumProduct(list); 
        var len = list.length;
        var correlationNum = ((len * product) - (sum[0] * sum[1]));
        var correlationDen = Math.sqrt((len * (square[0]) - (Math.pow(sum[0], 2))) * (len * (square[1]) - (Math.pow(sum[1], 2))));
        var correlation = correlationNum/correlationDen;
        return correlation;
    }
    
    static rSquared(list) {
        var r = Regression.correlation(list)
        return Math.pow(r, 2);
    }
    
    static prediction(list) {
        var betaOne = Regression.betaOne(list)
        var betaZero = Regression.betaZero(list)
        return (betaZero + (betaOne * 386));
    }

}
module.exports = Regression;