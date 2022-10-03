import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nombre: string='';
  fecha: Date;
  grupoEtario: string = '';
  edadPersona: any;

  

  constructor() {
    
  }

  enviar(){
    this.DefinidRangoEdades(this.nombre,this.fecha)
  }

  DefinidRangoEdades(_nombre: string, _fechaNacimiento: Date){

    let fechaNacimiento = new Date(_fechaNacimiento)
    let fechaHoy = new Date()

    let edad = fechaHoy.getFullYear() - fechaNacimiento.getFullYear()
    this.edadPersona = edad;

    if (edad >= 0 && edad <=11){
      this.grupoEtario = 'Niñez'
    }

    if (edad >= 0 && edad <=11){
      this.grupoEtario = 'Niñez'
    }

    if(edad >11 && edad<= 18){
      this.grupoEtario = 'Adolescencia'
    }

    if (edad >18 && edad <30){
      this.grupoEtario = 'Juventud'
    }

    if (edad >=30 && edad <60){
      this.grupoEtario = 'Adultez'
    }

    if (edad >= 60 ){
      this.grupoEtario = 'Vejez'
    }



    console.log("DAtos")
    console.log(_nombre, _fechaNacimiento)
    console.log(edad);
 


  }

}