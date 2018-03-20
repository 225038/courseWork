import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {People} from "./registration-page/registration.service";

export class BaseCooking{
  private dishName: string;
  private personLogin: string;

  constructor(dishName: string, personLogin: string) {
    this.dishName = dishName;
    this.personLogin = personLogin;
  }

  getdishName(): string {
    return this.dishName;
  }

  setdishName(value: string) {
    this.dishName = value;
  }

  getpersonLogin(): string {
    return this.personLogin;
  }

  setpersonLogin(value: string) {
    this.personLogin = value;
  }
}
export class Cooking{
  id: number;
  personId: number;
  dishId: number;
  ready: boolean;
  given: boolean;

  constructor(personId: number, dishId: number, ready: boolean, id?: number){
    this.personId = personId;
    this.dishId = dishId;
    this.ready = ready;
    this.id = id;
  }

  getId(){
    return this.id;
  }
  getPersonId(){
    return this.personId;
  }
  getDishId(){
    return this.dishId;
  }
  getReady(){
    return this.ready;
  }
  setId(id: number){
    this.id = id;
  }
  setPersonId(personId: number){
    this.personId = personId;
  }
  setDishId(dishId: number){
    this.dishId = dishId;
  }
  setReady(ready: boolean){
    this.ready = ready;
  }

  getGiven(): boolean {
    return this.given;
  }

  setGiven(value: boolean) {
    this.given = value;
  }
}
export class Dish {
  name: string;
  description: string;
  cookingTime: string;

  constructor(name: string, description: string, cookingTime: string){
    this.name = name;
    this.description = description;
    this.cookingTime = cookingTime;
  }

  getName(){
    return this.name;
  }

  getDescription(){
    return this.description;
  }

  getCookingTime(){
    return this.cookingTime;
  }
  setName(name:string){
    this.name = name;
  }
  setDescription(description: string){
    this.description = description;
  }
  setCookingTime(cookingTime: string){
    this.cookingTime = cookingTime;
  }
}



@Injectable()
export class MenuService {

  constructor(private http: HttpClient) { }

  getAllFood(): Observable<any>{
   return this.http.get('http://localhost:8080/getAllFood');
  }

  makeOrder(cooking: BaseCooking){
    return this.http.post('http://localhost:8080/createFoodOrder',cooking);
  }
}
