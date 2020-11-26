import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import {MemberHistoryService} from './member-history.service';

@Component({
  selector: 'app-member-history',
  templateUrl: './member-history.component.html',
  styleUrls: ['./member-history.component.css']
})
export class MemberHistoryComponent implements OnInit {
  member;
  records = [];
  constructor(
    private memberHistoryService: MemberHistoryService,
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
    this.member = this.memberService.getMember(1);
    this.records = this.memberHistoryService.getRecords();
  }

  addRecord(rec){
    try{
      this.memberHistoryService.addRecord(rec);
      window.alert("New record added.");
    }catch(e){
      window.alert("An error occurred.");
    }
  }

}
