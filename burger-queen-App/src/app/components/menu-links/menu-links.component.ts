import { Component, OnInit } from '@angular/core';
import { MenuNameService } from 'src/app/services/menu-name-service.service';

@Component({
	selector: 'app-menu-links',
	templateUrl: './menu-links.component.html',
	styleUrls: ['./menu-links.component.scss']
})
export class MenuLinksComponent implements OnInit {
<<<<<<< HEAD
  menuString: string;
  breakfastButton: string;
  lunchButton: string;
  drinksButton: string;
  sideDishesButton: string;

  constructor(private menuNameService: MenuNameService) {
    this.breakfastButton = 'D';
    this.lunchButton = 'P';
    this.drinksButton = 'B';
    this.sideDishesButton = 'A';

    this.menuNameService.currentString.subscribe(string => {
      this.menuString = string;
    });
  }

  evento(name) {
    const string = name;
    this.menuNameService.changeString(string);
  }

  ngOnInit(): void {
  }
=======
	menuString: string;
	breakfastButton: string;
	lunchButton: string;
	drinksButton: string;
	sideDishesButton: string;

	constructor(private menuNameService: MenuNameService) {
		this.breakfastButton = 'D';
		this.lunchButton = 'P';
		this.drinksButton = 'B';
		this.sideDishesButton = 'A';

		this.menuNameService.currentString.subscribe((value) => {
			this.menuString = value;
		});
	}

	evento(name) {
		this.menuNameService.changeString(name);
	}
>>>>>>> c5e17eeeffd3a926e79277400cf3bb0a2e20de75

	ngOnInit(): void {}
}
