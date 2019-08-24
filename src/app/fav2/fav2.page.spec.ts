import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fav2Page } from './fav2.page';

describe('Fav2Page', () => {
  let component: Fav2Page;
  let fixture: ComponentFixture<Fav2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Fav2Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fav2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
