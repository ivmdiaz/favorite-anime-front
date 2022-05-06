import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListBaseComponent } from './character-list-base.component';

describe('CharacterListBaseComponent', () => {
  let component: CharacterListBaseComponent;
  let fixture: ComponentFixture<CharacterListBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterListBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
