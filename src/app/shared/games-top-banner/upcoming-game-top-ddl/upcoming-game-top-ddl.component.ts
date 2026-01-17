import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'osl-upcoming-game-top-ddl',
  templateUrl: './upcoming-game-top-ddl.component.html',
  styleUrls: ['./upcoming-game-top-ddl.component.css']
})
export class UpcomingGameTopDdlComponent implements OnInit {
  selectedValue: string = "";
  isOpen = false;
  options = [
    { label: 'Select a sport', value: 'select-a-sport' },
    { label: 'Boys Basketball', value: 'boys-basketball' },
    { label: 'Girls Basketball', value: 'girls-basketball' },
  ];
  

  constructor(private elementRef: ElementRef) {
    this.selectedValue = 'select-a-sport';
  }

  ngOnInit(): void {
  }


  get selectedLabel(): string {
    return this.options.find(option => option.value === this.selectedValue)?.label ?? 'Select a sport';
  }

  toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: { label: string; value: string }): void {
    this.selectedValue = option.value;
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

}
