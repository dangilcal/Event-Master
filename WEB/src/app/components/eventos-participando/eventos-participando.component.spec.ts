import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosParticipandoComponent } from './eventos-participando.component';

describe('EventosParticipandoComponent', () => {
  let component: EventosParticipandoComponent;
  let fixture: ComponentFixture<EventosParticipandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosParticipandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosParticipandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
