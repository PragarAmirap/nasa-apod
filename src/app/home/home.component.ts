import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date='';
  urlForFetch:string=''
  apiurl: string='https://api.nasa.gov/planetary/apod?api_key=DEFyLIrqem0iApZ07nObhyOeoos6JrEISMy5afFR'
  data: any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
  
  getData(){
    let url= "https://api.nasa.gov/planetary/apod?api_key=DEFyLIrqem0iApZ07nObhyOeoos6JrEISMy5afFR";
    if(this.date !=''){
    this.http.get(this.urlForFetch= this.apiurl+'&date='+this.date).subscribe(
      response =>{
        console.log(response);
        this.data = response;
      }
    );}else{
      this.http.get(url).subscribe(
        response =>{
          console.log(response);
          this.data = response;
        }
      );}
  };
}
