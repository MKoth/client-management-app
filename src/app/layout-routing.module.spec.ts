import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";

import { AppComponent } from './app.component'
import { routes } from './layout-routing.module';

describe('Router: App', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)]
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);
        router.initialNavigation();
    });

    it('navigate to "" redirects you to /dashboard', fakeAsync(() => {
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/dashboard');
    }));

    it('navigate to "orders" takes you to /orders', fakeAsync(() => {
        router.navigate(['orders']);
        tick();
        expect(location.path()).toBe('/orders');
    }));

    it('navigate to "random url like not-existing-url" takes you to /dashboard', fakeAsync(() => {
        router.navigate(['not-existing-url']);
        tick();
        expect(location.path()).toBe('/dashboard');
    }));
});