import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {Router} from "@angular/router";

class MockRouter {
  navigateByUrl = () => {
    return {
      then: () => {}
    }
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const testUrl = '/some/test/url';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        {
          provide: Router,
          useClass: MockRouter,
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle redirect', inject([Router], (router: Router) => {
    const spy = spyOn(router, 'navigateByUrl').and.callThrough();
    component.onRedirect('/path');
    expect(spy).toHaveBeenCalledWith('/path');
  }));
});
