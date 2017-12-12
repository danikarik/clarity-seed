import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Note } from './note';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NotesService {

  private notesUrl = 'api/notes';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl)
    .pipe(
      tap(notes => this.log(`fetched notes`)),
      catchError(this.handleError('getNotes', []))
    );
  }

  getNote(id: number): Observable<Note> {
    const url = `${this.notesUrl}/${id}`;
    return this.http.get<Note>(url).pipe(
      tap(_ => this.log(`fetched note id=${id}`)),
      catchError(this.handleError<Note>(`getNote id=${id}`))
    );
  }

  /** POST: add a new hero to the server */
  addNote (Note: Note): Observable<Note> {
    console.log(Note);
    return this.http.post<Note>(this.notesUrl, Note, httpOptions).pipe(
      tap((Note: Note) => this.log(`added Note w/ id=${Note.id}`)),
      catchError(this.handleError<Note>('addNote'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteNote (Note: Note | number): Observable<Note> {
    const id = typeof Note === 'number' ? Note : Note.id;
    const url = `${this.notesUrl}/${id}`;

    return this.http.delete<Note>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted note id=${id}`)),
      catchError(this.handleError<Note>('deleteNote'))
    );
  }

  /** PUT: update the hero on the server */
  updateNote (Note: Note): Observable<any> {
    console.log(Note);
    return this.http.put(this.notesUrl, Note, httpOptions).pipe(
      tap(_ => this.log(`updated note id=${Note.id}`)),
      catchError(this.handleError<any>('updateNote'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('NotesService: ' + message);
  }

}
