// import { CollapsibleWellComponent } from './../../common/collapsible-well.component';
// import { UpVoteComponent } from './upvote.component';
import { VoterService } from './voter.service';
import { AuthService } from './../../user/auth.service';
import { SessionListComponent } from './session-list.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { DurationPipe } from '../shared';
import { By } from '@angular/platform-browser';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { username: 'joe'}
    };
    let mockVoterService = { userHasVoted: () => true};

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        // UpVoteComponent,
        DurationPipe,
        // CollapsibleWellComponent
      ],
      providers: [
        {provide: AuthService, useValue: mockAuthService},
        {provide: VoterService, useValue: mockVoterService},
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have the correct session tittle', () => {
      component.sessions = [
        {id: 3, name: 'session 1', presenter: 'joe', duration: 1, level: 'beginner',
          abstract: 'abstract', voters: ['john', 'bob']
        }
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      // expect(element.querySelector('[well-title]').textContent).toContain('session 1');
      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('session 1');
    });
  });
});
