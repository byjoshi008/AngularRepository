import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';

describe('HeroesComponent', () => {


  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'Spider Dude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'Super Dude', strength: 55 }
    ];
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {
    it('should remove indicated hero from the heroes list', () => {
      component.heroes = HEROES;
      const heroToBeDeleted = HEROES[2];
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.delete(heroToBeDeleted);
      const deletedHero = component.heroes.find(x => x.id === heroToBeDeleted.id);
      expect(deletedHero).toBe(undefined);
    });

    it('should call deleteHero with correct parameter', () => {
      component.heroes = HEROES;
      const heroToBeDeleted = HEROES[2];
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.delete(heroToBeDeleted);
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(heroToBeDeleted);
    });
  });
});
