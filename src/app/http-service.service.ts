import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Note } from './Note';  
import { User } from './User';

@Injectable()
export class HttpServiceService {

   private loginUrl = 'http://localhost:8080/login';
   private noteUrl = 'http://localhost:8080/note';
   private notesUrl = 'http://localhost:8080/notes';
   private createUserUrl = 'http://localhost:8080/createuser';



   constructor(private http: HttpClient) { }

    login(username: string, password: string) : Observable<any>{

   	 let httpOptions = {
    	 headers: new HttpHeaders({ 'Content-Type': 'application/json'})
   	  };

   	  const body = {
        username, password
      }

      return this.http.post<any>(this.loginUrl, body,{observe: 'response'});
    }

    getNotes () : Observable<Array<Note>> {
	  return this.http.get(this.notesUrl)
	  			 .map((data: any) => {
	  			 	return data as Note[];
	  			 });
  	}

  	createUser(username: string, password: string) : Observable<any>{

   	 let httpOptions = {
    	 headers: new HttpHeaders({ 'Content-Type': 'application/json'})
   	  };

   	  const body = {
        username, password
      }
      return this.http.post<any>(this.createUserUrl, body,{observe: 'response'});
    }

    createNote(note : Note) : Observable<any>{
      let httpOptions = {
    	 headers: new HttpHeaders({ 'Content-Type': 'application/json'})
   	  };

      return this.http.post<any>(this.noteUrl, note,{observe: 'response'});
    }

    deleteNote(id : string): Observable<any>{
    	return this.http.delete<any>(this.noteUrl+'/'+id, {observe: 'response'});
    }

    updateNote(note : Note): Observable<any>{
    	return this.http.put<any>(this.noteUrl+'/'+note.id,note,{observe: 'response'});
    }
}
