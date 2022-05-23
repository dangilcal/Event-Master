import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosFinalizadosComponent } from './eventos-finalizados.component';

describe('EventosFinalizadosComponent', () => {
  let component: EventosFinalizadosComponent;
  let fixture: ComponentFixture<EventosFinalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosFinalizadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosFinalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
