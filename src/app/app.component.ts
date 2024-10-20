
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AnalyticService, AuthService, SocketioService } from './_services/_index';
import { handleSocketGuestMessage, handleSocketReadingInfo } from './_shares/common';
import { SK_GUEST_MESSAGE_RESPONSE, SK_READING_INFO_REALTIME_UPDATE } from './_shares/constant';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { ReadingInfoService } from '@services/reading-info/reading-info.service';
import { WINDOW } from 'src/window';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  public initialData: any;
  public visibleData: any;
  private _window = inject(WINDOW);

  constructor(
    private analyticService: AnalyticService,
    private socketService: SocketioService,
    private authService: AuthService,
    private router: Router,
    private titleService: Title,
    private readingInfoService: ReadingInfoService
  ) {
  }

  ngOnInit(): void {
    // this.analyticService.logAccess()
    //   .subscribe(_ => { }, _ => { });
    this.socketService.setupSocketConnection();
    if (this.authService.isMember()) {
      this.readingInfoService.getReadingInfo();
    }
    this.checkSocket();
    this.initAutoTitle();
    // this._window.onbeforeunload = () => this.ngOnDestroy();
  }

  initAutoTitle() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(`${title}`);
        }
      });
  }

  ngOnDestroy() {
    this.socketService.disconnect();
    if (this.authService.isMember()) {
      this.readingInfoService.updateReadingInfo();
    }
  }

  checkSocket() {
    const isAdmin = this.authService.isAdmin();
    if (isAdmin) {
      this.socketService.subcribeChanel(SK_GUEST_MESSAGE_RESPONSE, handleSocketGuestMessage, this);
    }
    const isMember = this.authService.isMember();
    if (isMember) {
      this.socketService.subcribeChanel(SK_READING_INFO_REALTIME_UPDATE, handleSocketReadingInfo, this);
    }
  }
}
