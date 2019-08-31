import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { HeroComponent } from '../hero/hero.component';
import { Directive, Input } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[routerLink]',
  // tslint:disable-next-line: use-host-property-decorator
  host: { '(click)': 'onClick()' }
})
// tslint:disable-next-line: directive-class-suffix
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('Heroes Component (Deep Tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES: Hero[];

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'Spider Dude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'Super Dude', strength: 55 }
    ];
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    TestBed.configureTestingModule({
      declarations: [HeroesComponent, HeroComponent, RouterLinkDirectiveStub],
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ]
    });
    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should render each hero as a HeroComponent', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();

    const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));
    expect(heroComponentDEs.length).toEqual(3);
    heroComponentDEs.forEach((x, index) => {
      expect(x.componentInstance.hero).toEqual(HEROES[index]);
    });
  });

  it(`should call heroService.deleteHero when Hero Component's delete
    button is clicked`, () => {
      spyOn(fixture.componentInstance, 'delete');
      mockHeroService.getHeroes.and.returnValue(of(HEROES));
      fixture.detectChanges();

      const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));

      // (heroComponentDEs[0].componentInstance as HeroComponent).delete.emit(undefined);
      // heroComponentDEs[0].query(By.css('button')).triggerEventHandler('click', { stopPropagation: () => { } });
      heroComponentDEs[0].triggerEventHandler('delete', null);

      expect(fixture.componentInstance.delete).toHaveBeenCalledWith(HEROES[0]);
    });

  it('should add a new hero to hero list when add button is clicked', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    const heroToAdd: Hero = { id: 5, name: 'Mr. Ice', strength: 40 };
    mockHeroService.addHero.and.returnValue(of(heroToAdd));
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    const addButton = fixture.debugElement.queryAll(By.css('button'))[0];

    inputElement.value = heroToAdd.name;
    addButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));
    const addedHero = heroComponentDEs.find(x => (x.componentInstance as HeroComponent).hero.name === heroToAdd.name);
    expect(addedHero).toBeDefined();
    expect((addedHero.componentInstance as HeroComponent).hero).toEqual(heroToAdd);
  });

  it('should have the correct route for the first hero', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));

    const routerLink = heroComponentDEs[0]
      .query(By.directive(RouterLinkDirectiveStub))
      .injector.get(RouterLinkDirectiveStub);

    heroComponentDEs[0].query(By.css('a')).triggerEventHandler('click', null);
    expect(routerLink.navigatedTo).toBe(`/detail/${HEROES[0].id}`);
  });

});
