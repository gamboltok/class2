document.addEventListener('DOMContentLoaded', (event)=>{
'use strict';
event.preventDefault();

function Car(mark, color, speed){
    this.mark = mark;
    this.color = color;
    this.speed = speed;
    this.user = false;
    this.engineStart = function(){
        if(this.user){
            console.log('двигатель был запущен');
        }else{
            console.log('невозможно запустить двигатель без водителя');
        }

    };
}

const ww = new Car('Wolkswagen', 'red', 0);

Car.prototype.engineOff = function(){   
    if(this.user && this.speed == 0){
        console.log('двигатель был выключен');
    }else{
        console.log('невозможно выключить двигатель пока машина едет, скиньте скорость до');
    }
};

function showResult(){
    ww.speed = 10;
    ww.user = false; 
    console.log(ww.engineStart()); //попытка запустить двигатель без водителя
    ww.user = true; 
    console.log(ww.engineStart()); //попытка запустить двигатель с водителем
    
    console.log(ww.engineOff()); //попытка выключить двигатель на скорости > 0
    ww.speed = 0;
    console.log(ww.engineOff()); //попытка выключить двигатель на скорости 0
}

showResult();

});