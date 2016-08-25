"use strict";
class UtilMath {
    constructor() {
    }

    static mean(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var i, j, sum = 0, mean = {};
        var obj = Object.keys(list.getValue(i));
        var count = obj.length;
        for (j = 0; j < count; j++) {
            for (i = 0; i < len; i++) {
                sum += parseFloat(list.getValue(i)[obj[j]]);
            }
            mean[j] = parseFloat(sum / len);
            ;
        }
        return parseFloat(mean);
    }
    
      static sum(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var i, j, sum = {};
        var total = 0;
        var count,obj;
        for (i = 0; i < len; i++) {
            obj = Object.keys(list.getValue(i));
            count = obj.length;
            for (j = 0; j < count; j++) {
                if(!sum[obj[j]]){
                    sum[obj[j]] = 0;
                }
                sum[obj[j]] += parseFloat(list.getValue(i)[obj[j]]);
            }
        }
        return sum;
    }
    
    
    static sumSquared(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var i, j, square = new Array();
        var count = Object.keys(list.getValue(0)).length;
        for (j = 0; j < count; j++) {
            for (i = 0; i < len; i++) {
                square[j] += Math.pow((list.getValue(i))[j], 2);
            }
        }
        return square;
    }
    
    static sumProduct(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var i, j, product = new Array();
        var count = Object.keys(list.getValue(0)).length;
        for (i = 0; i < len; i++) {
            for (j = 0; j < count; j+=2) {
                product[i] += ((list.getValue(i))[j] * (list.getValue(i))[j+1]);
            }
        }
        return product;
    }

    static stdDeviation(list) {
        var mean = UtilMath.mean(list)
        var len = list.length;
        var i, deviation = 0;
        for (i = 0; i < len; i++) {
            deviation += Math.pow((parseFloat(list.getValue(i)) - mean), 2);
        }
        deviation = parseFloat(deviation / (len - 1))
        deviation = parseFloat(Math.sqrt(deviation));
        return deviation;
    }

}
module.exports = UtilMath;
