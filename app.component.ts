import { Component } from '@angular/core';
import { AutodeskForgeViewer } from './autodesk-viewer/autodesk-forge-viewer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  viewercomment: any

  constructor() {}

  ngOnInit() {
    this.follow();
  }

  follow() {
    AutodeskForgeViewer.load3DViewer('assets/sls_amg.max/sls_amg.svf');
  
  }
  // selectArrow(){
  //   AutodeskForgeViewer.selectArrow();
  // }
  // selectText(){
  //   AutodeskForgeViewer.selectText();
  // }
  // selectRectangle(){
  //   AutodeskForgeViewer.selectRectangle();
  // }
  // selectPencil(){
  //   AutodeskForgeViewer.selectPencil();
  // }
  // selectCloud(){
  //   AutodeskForgeViewer.selectCloud();
  // }
  // saveMarkup() {
  //   AutodeskForgeViewer.saveMarkup();
  // }
  snapshot(){
    AutodeskForgeViewer.saveSnapshot();
  }
}