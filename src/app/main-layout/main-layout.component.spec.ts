import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';
import { RouterLinkDirectiveStub } from '../testing/router-link-directive-stub';
import { By } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';

describe('MainLayoutComponent (with beforeEach)', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;
  let layoutDe: DebugElement;
  let layoutElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLayoutComponent, RouterLinkDirectiveStub ],
      imports: [ MatMenuModule ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('h1 should contain "Clients Management App"', () => {
    const layoutDe: DebugElement = fixture.debugElement;
    const layoutElement: HTMLElement = layoutDe.nativeElement;
    const h1 = layoutElement.querySelector('h1');
    expect(h1.textContent).toEqual('Clients Management App');
  });

  it('should have "mat-nav-list" nodes length same as length of "menuItems" properties', () => {
    const layoutDe: DebugElement = fixture.debugElement;
    const layoutElement: HTMLElement = layoutDe.nativeElement;
    const matNavLists = layoutElement.querySelectorAll('mat-nav-list');
    expect(matNavLists.length).toEqual(component.menuItems.length);
  });

  it('should have "mat-expansion-panel" nodes length same as length of "menuItems" properties with children subproperty', () => {
    const layoutDe: DebugElement = fixture.debugElement;
    const layoutElement: HTMLElement = layoutDe.nativeElement;
    const matExpansionPanels = layoutElement.querySelectorAll('mat-expansion-panel');
    expect(matExpansionPanels.length).toEqual(component.menuItems.filter(item=>item.hasOwnProperty('children')).length);
  });

  it('should have "mat-list-item" nodes inside first "mat-expansion-panel" length same as length of "menuItems" children\'s property\'s length of first item with children property', () => {
    const layoutDe: DebugElement = fixture.debugElement;
    const layoutElement: HTMLElement = layoutDe.nativeElement;
    const matExpansionPanel = layoutElement.querySelector('mat-expansion-panel');
    const matListItems = matExpansionPanel.querySelectorAll('mat-list-item')
    expect(matListItems.length).toEqual(component.menuItems.find(item=>item.hasOwnProperty('children')).children.length);
  });

  it('should have routerLink number same as menu items', () => {
    // find DebugElements with an attached RouterLinkStubDirective
    const linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));

    // get attached link directive instances
    // using each DebugElement's injector
    const routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
    // using reduce to get sum of menu items which should correspond to number of links
    expect(linkDes.length).toBe(component.menuItems.reduce((prevVal, curVal)=>{return prevVal+(curVal.hasOwnProperty('children')?curVal.children.length:1)}, 0));
  });

  it('can click link in template', () => {
    const linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
    const routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));

    const navLinkDe = linkDes[1];   // link DebugElement
    const navLink = routerLinks[1]; // link directive

    expect(navLink.navigatedTo).toBeNull('should not have navigated yet');
    navLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(navLink.navigatedTo).toBe('/company/info');
  })
});
