import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginClientComponent } from 'src/modules/client/components/login-client/login-client.component';
import { CartService } from 'src/modules/shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'shoe-store';
  cartNumberBadge=0;
  constructor(public dialog: MatDialog,private cartService:CartService) {
  
  }
  ngOnInit(): void {
    this.cartService.cart.subscribe(res=>{
      this.cartNumberBadge=res.length;
    })
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(LoginClientComponent, {
      width: '250px',
    });
  }
}
