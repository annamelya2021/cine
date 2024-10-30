import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Seat {
  id: string;
  row: number;
  number: number;
  type: 'regular' | 'vip';
  selected: boolean;
  reserved: boolean;
}

@Component({
  selector: 'app-reserve-seats',
  templateUrl: './reserve-seats.component.html',
  styleUrls: ['./reserve-seats.component.css']
})
export class ReserveSeatsComponent implements OnInit {
  sessionTime: string | null = null;
  hall: string | null = null;

  seats: Seat[][] = [];
  selectedSeats: Seat[] = [];
  totalPrice: number = 0;

  regularSeatPrice: number = 10;
  vipSeatPrice: number = 20;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.sessionTime = params['time'];
      this.hall = params['hall'];
      this.generateSeats();
    });
  }

  generateSeats(): void {
    const rows = this.hall === 'Sala Bilbao' ? 10 : 8;
    const seatsPerRow = this.hall === 'Sala Bilbao' ? 12 : 10;

    for (let i = 0; i < rows; i++) {
      const row: Seat[] = [];
      for (let j = 0; j < seatsPerRow; j++) {
        const isVipRow = i === rows - 1;
        const seatType = isVipRow ? 'vip' : 'regular';
        const isReserved = Math.random() < 0.1;

        row.push({
          id: `${i}-${j}`,
          row: i + 1,
          number: j + 1,
          type: seatType,
          selected: false,
          reserved: isReserved
        });
      }
      this.seats.push(row);
    }
  }

  selectSeat(seat: Seat): void {
    if (seat.reserved) return;

    if (!seat.selected) {
      this.selectedSeats.push(seat);
    } else {
      this.selectedSeats = this.selectedSeats.filter(s => s.id !== seat.id);
    }
    seat.selected = !seat.selected;
    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    this.totalPrice = this.selectedSeats.reduce((total, seat) => {
      return total + (seat.type === 'vip' ? this.vipSeatPrice : this.regularSeatPrice);
    }, 0);
  }

  purchaseTickets(): void {
    prompt(`Gracias por la compra! Escribe tu coreo para enviar tus tickets! Total: ${this.totalPrice} EUR, cantidad: ${this.selectedSeats.length}`);
    this.resetSelection();
  }

  resetSelection(): void {
    this.selectedSeats.forEach(seat => seat.selected = false);
    this.selectedSeats = [];
    this.totalPrice = 0;
  }
}
