import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  matSnackBar: MatSnackBar;

  constructor(private snackBar: MatSnackBar) {
    this.matSnackBar = snackBar;
  }

  public successfullyAddedItem() {
    this.matSnackBar.open('Task added', '', {
      duration: 3000,
      panelClass: ['snackbar-success'],
    });
  }

  public unableToAddItem() {
    this.matSnackBar.open('There was an error, please try again later', '', {
      duration: 3000,
      panelClass: ['snackbar-error'],
    });
  }
}
