import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { ConfigService } from './config.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends { id: number }> {

  entityName: string = '';
  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  error$: Subject<string> = new Subject();

  constructor(
    public config: ConfigService,
    public http: HttpClient,
    @Inject('entityName') entityName: string,
  ) {
    this.entityName = entityName;
  }

  getAll(): void {
    this.http.get<T[]>(`${this.config.apiUrl}/${this.entityName}`)
      .subscribe(
        list => this.list$.next(list),
        err => console.error(err)
      );
  }

  get(id: number): Observable<T> {
    
    return this.http.get<T>(`${this.config.apiUrl}/${this.entityName}/${id}`);
  
}

  create(entity: T): void {
    this.http.post<T>(
      `${this.config.apiUrl}/${this.entityName}`,
      entity).subscribe( () => this.getAll() 
      );
  }

  update(entity: T): void {
    this.http.patch<T>(
      `${this.config.apiUrl}/${this.entityName}/${entity.id}`,
      entity).subscribe(
        ()=>this.getAll()
    );
  }

  remove(entity: T): void {
    this.http.delete<T>(
      `${this.config.apiUrl}/${this.entityName}/${entity.id}`)
      .subscribe(
      () => this.getAll()
    );
  }

  like(key: string, value: string, limit: number = 10): Observable<T[]> {
    key = `${key}_like`;
    const query = `${this.config.apiUrl}/${this.entityName}?${key}=${value}&_limit=${limit}`;
    return this.http.get<T[]>(query);
  }

  fullText(value: string): Observable<T[]> {
    const query = `${this.config.apiUrl}/${this.entityName}?q=${value}`;
    return this.http.get<T[]>(query);
  }

}
