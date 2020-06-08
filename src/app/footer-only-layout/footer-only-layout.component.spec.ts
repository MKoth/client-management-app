import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FooterOnlyLayoutComponent } from './footer-only-layout.component';

describe('FooterOnlyLayoutComponent', () => {
  let component: FooterOnlyLayoutComponent;
  let fixture: ComponentFixture<FooterOnlyLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterOnlyLayoutComponent ]
    });
    fixture = TestBed.createComponent(FooterOnlyLayoutComponent);
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
});
