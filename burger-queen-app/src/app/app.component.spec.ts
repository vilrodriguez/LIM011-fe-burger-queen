import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent]
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'burger-queen-app'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		// tslint:disable-next-line: indent
		expect(app.title).toEqual('burger-queen-app');
	});

	it('should render title', () => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('.content span').textContent).toContain(
			'burger-queen-app app is running!'
		);
	});
});
