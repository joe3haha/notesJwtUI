import { Component, OnInit } from '@angular/core';
import { Note } from '../Note';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  private notesUrl = 'http://localhost:8080/notes';

  httpOptions = {
  	headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  note : Note = {
  	title : '',
  	message : '',
  	id: '',
	creatorUserName: ''
  }

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void{
  	this.httpService.createNote(this.note).subscribe(()=>
  	 this.router.navigate(['home']) );
  	
  }

  goBack(): void{
  	this.router.navigate(['home']);
  }

}