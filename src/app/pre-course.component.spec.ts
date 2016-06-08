import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PreCourseAppComponent } from '../app/pre-course.component';

beforeEachProviders(() => [PreCourseAppComponent]);

describe('App: PreCourse', () => {
  it('should create the app',
      inject([PreCourseAppComponent], (app: PreCourseAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'pre-course works!\'',
      inject([PreCourseAppComponent], (app: PreCourseAppComponent) => {
    expect(app.title).toEqual('pre-course works!');
  }));
});
