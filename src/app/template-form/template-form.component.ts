import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  
 
  @Input() form;
  usuario: any = {
    nome: '',
    email: ''};
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form.value);
  }

}
