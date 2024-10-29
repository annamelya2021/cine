
import { Component, OnInit } from '@angular/core';
import { SalasService } from '../services/salas.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrl: './salas.component.css'
})
export class SalasComponent implements OnInit {
  halls: any[] = [];

  constructor(private salasService: SalasService) {}

  ngOnInit(): void {
    this.salasService.getHalls().subscribe((data) => {
      this.halls = data;
    });
  }
}
