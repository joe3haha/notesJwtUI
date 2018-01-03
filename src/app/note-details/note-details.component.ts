import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../Note';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  @Input() note: Note;
  @Input() hidden: boolean;
  @Output() hiddenChange = new EventEmitter<boolean>();

  httpOptions = {
  	headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private httpService: HttpServiceService) { }

  ngOnInit() {
  }

  onSubmit(){
  	this.hidden = true;
  	this.hiddenChange.emit(true);
  	let noteToEdit = {title:this.note.title, message:this.note.message};
  	this.httpService.updateNote(this.note).subscribe();
  }

  goBack(){
  	this.hidden = true;
  	this.hiddenChange.emit(true);
  }
  

}