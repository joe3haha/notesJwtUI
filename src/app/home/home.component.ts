import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Note } from '../Note' 
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  response : Note[];
  selectedNote: Note;
  hidden=true;
  deleted: boolean = false;

  constructor(private httpService: HttpServiceService,
  			  private router: Router) { }

  ngOnInit() {
  	this.httpService.getNotes()
  		.subscribe(response => this.response = response);
  }

  onSelect(note: Note){
  	this.selectedNote = note;
  	this.hidden=false;
  }

  updateHidden(event){
  	this.hidden=true;
  }

  toCreate(){
  	this.router.navigate(['/create']);
  }

  removeNote(note: Note){
  	let obj : any = note.id;
  	this.response = this.response.filter(n => n !== note);
  	this.httpService.deleteNote(obj).subscribe();
  	this.showNoteDeleted();
  }


  showNoteDeleted(): void {
   this.deleted = true;
   setTimeout(function() {
       this.deleted = false;
   }.bind(this), 3000);
  }

}
