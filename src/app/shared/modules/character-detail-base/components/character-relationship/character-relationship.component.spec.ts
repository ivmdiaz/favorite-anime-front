import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRelationshipComponent } from './character-relationship.component';

describe('CharacterRelationshipComponent', () => {
  let component: CharacterRelationshipComponent;
  let fixture: ComponentFixture<CharacterRelationshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterRelationshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
