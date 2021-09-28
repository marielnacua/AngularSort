import { Component, OnInit } from '@angular/core';
import { ParticipantService } from './participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent{

  title = 'List of Participants';
  participants;
  event;

  constructor(service: ParticipantService) {
    this.event = this.participants = service.getParticipants();
  }

  show(){
    this.event = this.participants
  }

  sortGender(gender: string){
    this.event = this.participants.filter(participant => participant.gender === gender)
  }
}
