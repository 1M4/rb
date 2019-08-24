import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fem1Page } from './fem1.page';

describe('Fem1Page', () => {
  let component: Fem1Page;
  let fixture: ComponentFixture<Fem1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Fem1Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fem1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
