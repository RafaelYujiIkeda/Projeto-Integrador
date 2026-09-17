import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ecopontos } from './ecopontos';

describe('Ecopontos', () => {
  let component: Ecopontos;
  let fixture: ComponentFixture<Ecopontos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ecopontos]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Ecopontos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
