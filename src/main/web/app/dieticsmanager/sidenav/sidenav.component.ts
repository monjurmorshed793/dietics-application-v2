import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, BreakpointState} from "@angular/cdk/layout";
import {BREAKPOINTS} from "@angular/flex-layout";

const SMALL_WIDTH_BREAKPOINT=720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  showFiller = false;
  public isScreenSmall?: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState)=>{
        this.isScreenSmall = state.matches;
      });
  }

}
