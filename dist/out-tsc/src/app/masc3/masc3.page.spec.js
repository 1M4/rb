import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Masc3Page } from './masc3.page';
describe('Masc3Page', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Masc3Page],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(Masc3Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=masc3.page.spec.js.map