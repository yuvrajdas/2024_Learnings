import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDecoratorComponent } from './component-decorator.component';

describe('ComponentDecoratorComponent', () => {
  let component: ComponentDecoratorComponent;
  let fixture: ComponentFixture<ComponentDecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentDecoratorComponent]
    });
    fixture = TestBed.createComponent(ComponentDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
