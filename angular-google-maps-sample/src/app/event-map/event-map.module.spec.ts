import { EventMapModule } from './event-map.module';

describe('EventMapModule', () => {
  let eventMapModule: EventMapModule;

  beforeEach(() => {
    eventMapModule = new EventMapModule();
  });

  it('should create an instance', () => {
    expect(eventMapModule).toBeTruthy();
  });
});
