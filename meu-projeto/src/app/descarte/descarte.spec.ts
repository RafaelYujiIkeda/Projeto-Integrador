import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Descarte } from './descarte';

describe('Descarte', () => {
  let component: Descarte;
  let fixture: ComponentFixture<Descarte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Descarte]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Descarte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
