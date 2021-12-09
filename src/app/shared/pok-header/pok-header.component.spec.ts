import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokHeaderComponent } from './pok-header.component';

describe('PokHeaderComponent', () => {
  let component: PokHeaderComponent;
  let fixture: ComponentFixture<PokHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
