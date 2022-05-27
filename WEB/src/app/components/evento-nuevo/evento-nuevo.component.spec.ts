import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoNuevoComponent } from './evento-nuevo.component';

describe('EventoNuevoComponent', () => {
  let component: EventoNuevoComponent;
  let fixture: ComponentFixture<EventoNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
