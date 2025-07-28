import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagasinItemComponent } from './magasin-item.component';

describe('MagasinItemComponent', () => {
  let component: MagasinItemComponent;
  let fixture: ComponentFixture<MagasinItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagasinItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagasinItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
