import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberHistoryService {
  public records = [{id: 1, date: "Jun 1, 2019", status: "حفظ", notes : "لا يوجد ملاحظات", old: "الناس", new: "البقرة"}];

  constructor() { }

  addRecord(record){
    this.records.push(record);
  }

  clearHistory(){
    this.records = [];
    return this.records;
  }

  getRecords(){
    return this.records;
  }

}
