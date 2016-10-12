import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BugFreeFrontEndAppComponent } from '../app/bug-free-front-end.component';

beforeEachProviders(() => [BugFreeFrontEndAppComponent]);

describe('App: BugFreeFrontEnd', () => {
  it('should create the app',
      inject([BugFreeFrontEndAppComponent], (app: BugFreeFrontEndAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'bug-free-front-end works!\'',
      inject([BugFreeFrontEndAppComponent], (app: BugFreeFrontEndAppComponent) => {
    expect(app.title).toEqual('bug-free-front-end works!');
  }));
});
