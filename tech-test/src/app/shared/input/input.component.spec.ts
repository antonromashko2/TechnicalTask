import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle process value', () => {
    const spyOnEmit = spyOn(component.processValue, 'emit');
    component.inputValueModel = 'test';
    component.onProcessValue();
    expect(spyOnEmit).toHaveBeenCalled();
  });

  it('should handle value changes', () => {
    const spyOnEmit = spyOn(component.changeValue, 'emit');
    component.inputValueModel = 'test';
    component.onChange();
    expect(spyOnEmit).toHaveBeenCalled();
  });
});
