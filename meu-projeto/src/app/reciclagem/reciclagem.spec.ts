import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reciclagem } from './reciclagem';

describe('Reciclagem', () => {
  let component: Reciclagem;
  let fixture: ComponentFixture<Reciclagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reciclagem]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Reciclagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
