import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Fem1Page } from './fem1.page';
describe('Fem1Page', () => {
    let component;
    let fixture;
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
//# sourceMappingURL=fem1.page.spec.js.map