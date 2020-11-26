import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  member = {
    id: 1,
    name: "يوسف راضي"
  };

  constructor() { }

  getMember(id){
    return this.member;
  }
}
