import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { DOCUMENT, Location, PopStateEvent } from '@angular/common';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import PerfectScrollbar from 'perfect-scrollbar';
import $ from 'jquery';
import { WINDOW } from 'src/window';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  private _window = inject(WINDOW);
  private _document = inject(DOCUMENT);

  constructor(public location: Location, private router: Router) { }

  ngOnInit() {
    const isWindows = true; //navigator.platform.indexOf('Win') > -1 ? true : false;

    if (isWindows && !this._document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
      // if we are on windows OS we activate the perfectScrollbar function

      this._document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
    } else {
      this._document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
    }
    const elemMainPanel = this._document.querySelector('.main-panel');
    const elemSidebar = this._document.querySelector('.sidebar .sidebar-wrapper');

    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (event.url !== this.lastPoppedUrl) {
          // this.yScrollStack.push(this._window.scrollY);
        }
      } else if (event instanceof NavigationEnd) {
        if (event.url === this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          // this._window.scrollTo(0, this.yScrollStack.pop());
        } else {
          // this._window.scrollTo(0, 0);
        }
      }
    });
    this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      elemMainPanel.scrollTop = 0;
      elemSidebar.scrollTop = 0;
    });
    // if (this._window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
    //   // TODO document why this block is empty

    // }

    // const window_width = $(this._window).width();
    const $sidebar = $('.sidebar');
    const $sidebar_responsive = $('body > .navbar-collapse');
    const $sidebar_img_container = $sidebar.find('.sidebar-background');


    // if (window_width > 767) {
    //   if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
    //     $('.fixed-plugin .dropdown').addClass('open');
    //   }

    // }

    const self = this;
    $('.fixed-plugin a').click(function (event) {
      /*
          Alex if we click on switch, stop propagation of the event,
          so the dropdown will not be hide, otherwise we set the  section active
      */
      if ($(this).hasClass('switch-trigger')) {
        if (event.stopPropagation) {
          event.stopPropagation();
        } else if (self._window.event) {
          self._window.event.cancelBubble = true;
        }
      }
    });

    $('.fixed-plugin .badge').click(function () {


      $(this).siblings().removeClass('active');
      $(this).addClass('active');

      const new_color = $(this).data('color');

      if ($sidebar.length !== 0) {
        $sidebar.attr('data-color', new_color);
      }

      if ($sidebar_responsive.length !== 0) {
        $sidebar_responsive.attr('data-color', new_color);
      }
    });

    $('.fixed-plugin .img-holder').click(function () {
      const $full_page_background = $('.full-page-background');

      $(this).parent('li').siblings().removeClass('active');
      $(this).parent('li').addClass('active');


      const new_image = $(this).find('img').attr('src');

      if ($sidebar_img_container.length !== 0) {
        $sidebar_img_container.fadeOut('fast', function () {
          $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
          $sidebar_img_container.fadeIn('fast');
        });
      }

      if ($full_page_background.length !== 0) {

        $full_page_background.fadeOut('fast', function () {
          $full_page_background.css('background-image', 'url("' + new_image + '")');
          $full_page_background.fadeIn('fast');
        });
      }

      if ($sidebar_responsive.length !== 0) {
        $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
      }
    });
  }
  ngAfterViewInit() {
    this.runOnRouteChange();
  }
  isMaps(path) {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (path === titlee) {
      return false;
    } else {
      return true;
    }
  }
  runOnRouteChange(): void {
    // if (this._window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
    //   const elemMainPanel = this._document.querySelector('.main-panel');
    //   const ps = new PerfectScrollbar(elemMainPanel);
    //   ps.update();
    // }
  }
  isMac(): boolean {
    let bool = false;
    // if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
    //   bool = true;
    // }
    return bool;
  }

}
