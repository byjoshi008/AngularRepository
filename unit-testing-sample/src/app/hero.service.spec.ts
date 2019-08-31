import { TestBed, inject } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { httpClientInMemBackendServiceFactory } from 'angular-in-memory-web-api';

describe('Hero Service', () => {

  let mockMessageService;
  let service: HeroService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        { provide: MessageService, useValue: mockMessageService }
      ]
    });

    service = TestBed.get(HeroService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  describe('getHero', () => {
    it('should call get with the correct URL', () => {
      service.getHero(4).subscribe();
      const req = httpTestingController.expectOne('api/heroes/4');
      req.flush({ id: '4', name: 'SuperDude', strength: 100 });
      httpTestingController.verify();
    });
  });

});
