import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainLayoutComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
    console.log('run constructor');
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  menuItems = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      icon: 'analytics'
    },
    {
      name: 'Company',
      children: [
        {
          name: 'Info',
          link: '/company/info',
          icon: 'info'
        },
        {
          name: 'Media',
          link: '/company/media',
          icon: 'add_a_photo'
        },
        {
          name: 'Social Links',
          link: '/company/social-links',
          icon: 'chat'
        },
        {
          name: 'Working time',
          link: '/company/working-time',
          icon: 'grid_on'
        }
      ]
    },
    {
      name: 'Users',
      children: [
        {
          name: 'Users',
          link: '/users/users',
          icon: 'account_box'
        },
        {
          name: 'Groups',
          link: '/users/groups',
          icon: 'group'
        }
      ]
    },
    {
      name: 'Services',
      children: [
        {
          name: 'Services',
          link: '/services/services',
          icon: 'attach_money'
        },
        {
          name: 'Categories',
          link: '/services/categories',
          icon: 'category'
        }
      ]
    },
    {
      name: 'Staff',
      children: [
        {
          name: 'Staff',
          link: '/staff/staff',
          icon: 'work'
        },
        {
          name: 'Schedule',
          link: '/staff/schedule',
          icon: 'calendar_today'
        }
      ]
    },
    {
      name: 'Widget',
      children: [
        {
          name: 'Form Design',
          link: '/widget/form-design',
          icon: 'dynamic_form'
        },
        {
          name: 'Button Design',
          link: '/widget/button-design',
          icon: 'smart_button'
        },
        {
          name: 'Widget Code',
          link: '/widget/code',
          icon: 'code'
        }
      ]
    },
    {
      name: 'Orders',
      link: '/orders',
      icon: 'widgets'
    }
  ]

}
