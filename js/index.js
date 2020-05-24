'use strict';
/*
const user =
{
    name: "name1",
    surname: "surname1",
    age: 20,
    isMale: true
};
const userjson = JSON.stringify(user);
const parseuser = JSON.parse(userjson);
console.log(userjson);
console.log(parseuser);
*/
/*
const users=[];
for(let i=0; i<5; i++){
    users.push({
        name: `name ${i}`,
        surname: `surname ${i}`,
        }

    )
}
const jsonusers = JSON.stringify(users);
const parseUsers = JSON.parse(jsonusers);
console.log(users);
console.log(jsonusers);
console.log(parseUsers);
*/

/*
// 1 способ
const promise1 = new Promise(fun1);
function fun1(resolve,reject){
    console.log("I am running!");
}
// 2 способ
const promise2 = new Promise(
    function (resolve,reject) {
        console.log("I am running!");
    }
);
*/

/*
// Задача загрузить users.json с помощью XMLHttpRequest. создать функцию
function loadUsers() {
    const request = new XMLHttpRequest();
    let users=null;
    // обработчик на загрузку
    request.onload = function () {
        users=JSON.parse(request.responseText);
        console.log(users);
    };
    request.onerror = function () {
        throw new Error(`${this.status}:${this.statusText}`);
    };
    request.open("GET","./users.json");
    request.send();
    return users;
};
//const users=loadUsers();
//loadUsers(console.log, console.error);
*/

/*
// переписываем на промис и передаем функцию
const loadUserPromise = new Promise(loadUsers);
loadUserPromise
    .then(console.log)
    .catch(console.error);

*/

/*
async function f(){
    const users=await loadUserPromise;
    console.log(users);
}
f();
*/

// !!! метод fetch() загрузка данных
/*
fetch('./users.json')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.error(err);
    });
*/
/*
fetch('./users.json')
    .then(response => response.json())
    .then(console.log)
    .catch(console.error);

//-----------------------------------
const fetchPromise = fetch('./users.json');
const parseJSONPromise = fetchPromise
    .then(response => response.json())
    .catch(console.error);
parseJSONPromise
    .then(console.log)
    .catch(console.error);
*/

/*
// Задача: создать промис который возвращает обещание
// 1 способ
const promise1 = new Promise(resolve => {
    resolve(5);
});
console.log(promise1);
// 2 способ
const promise2 = Promise.resolve(5);
console.log(promise2);
// 3 способ
const promise3 = Promise.resolve(20);
promise3.then(console.log);
async function getResolvedPromise(value) {
    const promiseValue = await promise3;
    console.log(promiseValue);
}
//const promise3 = getResolvedPromise(5);
//console.log(promise3);
*/

/*
//Задача:
//1) Создать promise для каждого типа (number, boolean, string, symbol, null, undefined, object )
//2) создат ь асинхронную функцию для их console.log
const promise1 = Promise.resolve(700);
async function logData() {
    const promiseVal1 = await promise1;
    console.log(promiseVal1);
}
*/

/*
// reject. отказ
const promise10 = Promise.reject(700);
promise10
    .then(console.log)
    .catch(console.error);
async function logData() {
    try{
        const promiseValue = await promise10;
        console.log(promiseValue);
    } catch (e) {
        console.error(e);
    }
}
*/


//Методы Promise: Promise.race(), Promise.all(), Promise.allSettled()

function myfun(resolve, reject){
    setTimeout(function(){
        if(Math.random() > 0.2){
            resolve("success!");
        }
        reject(new Error("error"));
    },1000)
}

const arrayPromise = [
    new Promise(myfun),
    new Promise(myfun),
    new Promise(myfun),
    new Promise(myfun),
    new Promise(myfun)
];

foo();

async function foo(){
    try{
        const result = await Promise.all(arrayPromise);
        console.log(result);
    } catch(e){
        console.error(e);
    }
}


























