import { listLazyRoutes } from "@angular/compiler/src/aot/lazy_routes";

declare const Autodesk: any;

export function ToolbarExtension(this:typeof ToolbarExtension, viewer:any, option:any){
    Autodesk.Viewing.Extension.call(this,viewer,option);



}

ToolbarExtension.prototype = Object.create(Autodesk.Viewing.Extension.prototype);
ToolbarExtension.prototype.constructor = ToolbarExtension;
ToolbarExtension.prototype.load = function() {
    alert('ToolbarExtension is loaded!');
    return true;
  };
  
  ToolbarExtension.prototype.unload = function() {
    alert('ToolbarExtension is now unloaded!');
    return true;
  };
  
  Autodesk.Viewing.theExtensionManager.registerExtension('ToolbarExtension', ToolbarExtension);