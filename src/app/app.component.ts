import { Component } from '@angular/core';

interface CensusRecord {
  year: number;
  taker: string;
  people: number;
  street: string;
  city: string;
  state: string;
  zip: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  censusRecords: CensusRecord[] = [];
  newRecord: CensusRecord = this.getEmptyRecord();
  editingRecord: CensusRecord = this.getEmptyRecord();
  editingIndex: number | null = null;

  addRecord() {
    this.censusRecords.push({...this.newRecord});
    this.newRecord = this.getEmptyRecord();
  }

  editRecord(index: number) {
    this.editingIndex = index;
    this.editingRecord = {...this.censusRecords[index]};
  }

  updateRecord() {
    if (this.editingIndex !== null) {
      this.censusRecords[this.editingIndex] = {...this.editingRecord};
      this.cancelEdit();
    }
  }

  deleteRecord(index: number) {
    this.censusRecords.splice(index, 1);
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editingRecord = this.getEmptyRecord();
  }

  private getEmptyRecord(): CensusRecord {
    return {
      year: 0,
      taker: '',
      people: 0,
      street: '',
      city: '',
      state: '',
      zip: ''
    };
  }
}