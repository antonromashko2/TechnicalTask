import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPagePresentationComponent } from './todo-page.presentation.component';
import {TaskService} from "./services/task.service";

describe('TodoPageComponent', () => {
  let component: TodoPagePresentationComponent;
  let fixture: ComponentFixture<TodoPagePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoPagePresentationComponent ],
      providers: [
        {
          provide: TaskService,
          useValue: jasmine.createSpyObj('TaskService', [], {
            getTasks: () => {},
          }),
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPagePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
