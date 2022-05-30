import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePresentacionComponent } from './home-presentacion.component';

describe('HomePresentacionComponent', () => {
  let component: HomePresentacionComponent;
  let fixture: ComponentFixture<HomePresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePresentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
