(function(t){function i(i){for(var a,s,r=i[0],l=i[1],c=i[2],h=0,v=[];h<r.length;h++)s=r[h],n[s]&&v.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(i);while(v.length)v.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],a=!0,r=1;r<e.length;r++){var l=e[r];0!==n[l]&&(a=!1)}a&&(o.splice(i--,1),t=s(s.s=e[0]))}return t}var a={},n={app:0},o=[];function s(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)s.d(e,a,function(i){return t[i]}.bind(null,a));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=i,r=r.slice();for(var c=0;c<r.length;c++)i(r[c]);var d=l;o.push(["56d7","chunk-vendors"]),e()})({"034f":function(t,i,e){"use strict";var a=e("e2a1"),n=e.n(a);n.a},2299:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".paintable,body{position:fixed}.paintable{overflow:hidden;height:100%;width:100%;-webkit-transform:scale(1);transform:scale(1)}.paintable.active{z-index:0}.paintable .canvas{position:relative;background-color:transparent;z-index:-1;position:absolute;left:0;top:0;overflow:hidden;-ms-touch-action:none;touch-action:none}.paintable .canvas.active{z-index:1000}.paintable .canvas.active.back{z-index:999}",""])},"3f8c":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"body{font-family:Helvetica,Arial,sans-serif;position:static!important}#app{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}h3{font-weight:400}.control{margin:20px}.paint{border:5px solid #000;border-radius:5px;margin:40px auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:810px!important;height:810px!important;position:relative!important;overflow:hidden}footer{text-align:center}footer a{color:#777;text-transform:uppercase;text-decoration:none}button{border:0;margin:0 10px 0 0;font-size:14px;padding:10px 15px;opacity:.8;background-color:#13668d;border-radius:3px;color:#fff;cursor:pointer}button:hover{opacity:1}.custom-navigation{position:fixed;top:40px;left:40px;z-index:1001;background-color:#fff}.custom-navigation .controls{margin:10px 0 0 0;border:1px solid #ddd;padding:20px;border-radius:5px}",""])},4226:function(t,i,e){"use strict";var a=e("f763"),n=e.n(a);n.a},"56d7":function(t,i,e){"use strict";e.r(i);var a=e("2b0e"),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"custom-navigation"},[e("button",{on:{click:function(i){t.isActive=!t.isActive}}},[t._v("toggle custom navigation")]),t.isActive?e("div",{staticClass:"controls"},[e("input",{attrs:{type:"range",min:"1",max:"100"},on:{input:function(i){t.dynamicLineWidth=+i.target.value}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"color"},domProps:{value:t.color},on:{input:function(i){i.target.composing||(t.color=i.target.value)}}}),e("br"),e("br"),e("button",{on:{click:t.$refs.paintable.undoDrawingStep}},[t._v("undo")]),e("button",{on:{click:t.$refs.paintable.redoDrawingStep}},[t._v("redo")]),e("button",{on:{click:t.$refs.paintable.clearCanvas}},[t._v("clear")]),e("br"),e("br"),e("button",{on:{click:t.$refs.paintable.saveCurrentCanvasToStorage}},[t._v("\n        save\n      ")]),e("button",{on:{click:t.$refs.paintable.cancelDrawing}},[t._v("cancel")]),e("button",{on:{click:function(i){t.useEraser=!t.useEraser}}},[t._v("\n        "+t._s(t.useEraser?"eraser":"pencil")+"\n      ")])]):t._e()]),e("paintable",{ref:"paintable",staticClass:"paint",attrs:{alwaysOnTop:"",active:t.isActive,width:800,height:800,disableNavigation:t.disableNavigation,hide:t.hidePaintable,horizontalNavigation:!0,navigation:t.navigation,name:t.isFirstPaintable?"my-screen":"my-second-screen",factor:1,lineWidth:t.dynamicLineWidth,lineWidthEraser:20,useEraser:t.useEraser,color:t.color},on:{"toggle-paintable":t.toggledPaintable}},[e("div",{staticClass:"control"},[e("h3",[t._v("\n        Paintable "),e("strong",[t._v(t._s(t.isFirstPaintable?"1":"2"))])]),e("button",{on:{click:function(i){t.hidePaintable=!t.hidePaintable}}},[t._v("show/hide")]),e("button",{on:{click:function(i){t.disableNavigation=!t.disableNavigation}}},[t._v("\n        toggle navigation\n      ")]),e("button",{on:{click:t.navigate}},[t._v("switch to another paintable")])]),e("img",{attrs:{src:"https://source.unsplash.com/collection/837167/800x80"+(t.isFirstPaintable?0:1)}})]),t._m(0)],1)},o=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("footer",[e("a",{staticClass:"github-link",attrs:{_target:"blank",href:"https://github.com/ph1p/vue-paintable"}},[t._v("on github")])])}],s={data(){return{isFirstPaintable:!0,hidePaintable:!1,disableNavigation:!1,dynamicLineWidth:5,isActive:!1,useEraser:!1,color:"#000"}},computed:{navigation(){return{"draw-save":{body:"click here!",activeBody:"<strong>save</strong>"},color:{body:"color"}}}},methods:{navigate(){this.isFirstPaintable=!this.isFirstPaintable},hide(){this.$hidePaintableNavigation()},show(){this.$showPaintableNavigation()},toggledPaintable(t){this.isActive=t}}},r=s,l=(e("034f"),e("2877")),c=Object(l["a"])(r,n,o,!1,null,null,null),d=c.exports,h=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.hide?e("div",{staticClass:"content"},[t._t("default")],2):e("div",{staticClass:"paintable"},[t.disableNavigation?t._e():e("Navigation",{attrs:{horizontalNavigation:t.horizontalNavigation}},[e("div",{attrs:{slot:"paintable-navigation-draw"},slot:"paintable-navigation-draw"})]),e("canvas",{ref:"canvas-"+t.canvasId,staticClass:"canvas back",class:{active:t.isActive||t.alwaysOnTop},style:{pointerEvents:t.isActive?"all":"none",display:!t.canvasIsEmpty||t.isActive?"block":"none"},attrs:{width:t.width,height:t.height}}),e("canvas",{ref:"temp-canvas-"+t.canvasId,staticClass:"canvas",class:{active:t.isActive||t.alwaysOnTop},style:{pointerEvents:t.isActive?"all":"none",display:!t.canvasIsEmpty||t.isActive?"block":"none"},attrs:{width:t.width,height:t.height},on:t._d({},[t.drawMoveEvent,t.drawMove,t.drawStartEvent,t.drawStart,t.drawEndEvent,t.drawEnd])}),e("div",{staticClass:"content"},[t._t("default")],2)],1)},v=[],p=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.paintableView.hidePaintableNavigation?t._e():e("div",{staticClass:"navigation",class:{navigation__horizontalNavigation:t.horizontalNavigation}},[t.isColorPickerOpen?e("div",{staticClass:"navigation__colorPicker"},t._l(t.paintableView.colors,function(i){return e("span",{key:i,class:["navigation__colorPickerColor",{selected:t.paintableView.currentColor===i}],style:{backgroundColor:i},on:{click:function(e){return t.changeColor(i)}}})}),0):t._e(),t.isLineWidthPickerOpen?e("div",{staticClass:"navigation__lineWidthPicker"},[e("label",{attrs:{for:"navigation__lineWidthPickerRange"}},[t._v("("+t._s(t.paintableView.currentLineWidth)+"px):")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.paintableView.currentLineWidth,expression:"paintableView.currentLineWidth"}],attrs:{id:"navigation__lineWidthPickerRange",type:"range",min:"1",max:"100"},domProps:{value:t.paintableView.currentLineWidth},on:{change:function(i){t.isLineWidthPickerOpen=!1},__r:function(i){return t.$set(t.paintableView,"currentLineWidth",i.target.value)}}}),e("div",{staticClass:"navigation__lineWidthPickerDot",style:t.lineWidthStyle})]):t._e(),e("ul",{staticClass:"navigationMenu",class:{active:t.paintableView.isActive}},t._l(t.horizontalNavigation?t.navigation.reverse():t.navigation,function(i){return e("li",{key:i.name,class:"navigationMenu__"+i.name},[t.horizontalNavigation?t._e():e("div",{domProps:{innerHTML:t._s(i.isActive?i.activeBody:i.body)},on:{click:i.click}}),t.paintableView.isActive?e("ul",t._l(i.subNavigation,function(i){return e("li",{key:i.name,class:["navigationMenu__"+i.name,{disabled:i.disabled}]},[e("div",{domProps:{innerHTML:t._s(i.isActive?i.activeBody:i.body)},on:{click:i.click}})])}),0):t._e(),t.horizontalNavigation?e("div",{domProps:{innerHTML:t._s(i.isActive?i.activeBody:i.body)},on:{click:i.click}}):t._e()])}),0)])},u=[],g={name:"paintable-navigation",props:["horizontalNavigation"],data(){return{isColorPickerOpen:!1,isLineWidthPickerOpen:!1,paintableView:this.$parent}},computed:{navigation(){return this.filteredNavigation.map(t=>{if(t.subNavigation&&t.subNavigation.length>0){const i=this.horizontalNavigation?t.subNavigation.reverse():t.subNavigation;t.subNavigation=i.map(t=>{return this.paintableView.navigation&&this.paintableView.navigation[t.name]?Object.assign({},t,this.paintableView.navigation[t.name]):t})}return this.paintableView.navigation&&this.paintableView.navigation[t.name]?Object.assign({},t,this.paintableView.navigation[t.name]):t})},filteredNavigation(){return[{name:"draw-save",body:"draw",activeBody:"save",isActive:this.paintableView.isActive,click:this.togglePainting,subNavigation:[{name:"color",body:"color",disabled:!1,show:this.paintableView.colors.length>0,click:this.openColorPicker},{name:"line-width",body:"line-width",disabled:!1,show:this.paintableView.showLineWidth,click:this.openLineWidthPicker},{name:"undo",body:"undo",disabled:!this.paintableView.undoList.length,show:this.paintableView.showUndoRedo,click:this.paintableView.undoDrawingStep},{name:"redo",body:"redo",disabled:!this.paintableView.redoList.length,show:this.paintableView.showUndoRedo,click:this.paintableView.redoDrawingStep},{name:"delete",body:"delete",disabled:!1,show:!0,click:this.paintableView.clearCanvas},{name:"eraser-pencil",body:"eraser",activeBody:"pencil",isActive:this.paintableView.isEraserActive,disabled:!1,show:!0,click:this.toggleEraserAndPencil},{name:"cancel",body:"cancel",disabled:!1,show:!0,click:this.paintableView.cancelDrawing}].filter(t=>t.show)}]},lineWidthStyle(){return{height:this.paintableView.currentLineWidth+"px",width:this.paintableView.currentLineWidth+"px",backgroundColor:this.paintableView.currentColor}}},methods:{toggleEraserAndPencil(){this.paintableView.isEraserActive=!this.paintableView.isEraserActive},openColorPicker(){this.isColorPickerOpen=!this.isColorPickerOpen,this.isLineWidthPickerOpen=!1},openLineWidthPicker(){this.isLineWidthPickerOpen=!this.isLineWidthPickerOpen,this.isColorPickerOpen=!1},changeColor(t){this.paintableView.currentColor=t,this.paintableView.tempCtx.strokeStyle=this.paintableView.currentColor,this.paintableView.ctx.strokeStyle=this.paintableView.currentColor,this.isColorPickerOpen=!1},togglePainting(){this.paintableView.isActive&&this.paintableView.saveCurrentCanvasToStorage(),this.paintableView.isActive=!this.paintableView.isActive,this.isColorPickerOpen=!1,this.isLineWidthPickerOpen=!1,this.$parent.$emit("toggle-paintable",this.paintableView.isActive)}}},b=g,m=(e("6b54"),Object(l["a"])(b,p,u,!1,null,"65338345",null)),f=m.exports;let w=0,x=0;var y={name:"paintable",components:{Navigation:f},props:{factor:{type:Number,default:1},navigation:{type:Object,default:null},alwaysOnTop:{type:Boolean,default:!0},name:{type:String,required:!0},width:{type:Number,default:window.innerWidth},height:{type:Number,default:window.innerHeight},hide:{type:Boolean,default:!1},showUndoRedo:{type:Boolean,default:!0},showLineWidth:{type:Boolean,default:!0},lineWidth:{type:Number,default:5},lineWidthEraser:{type:Number,default:20},colors:{type:Array,default:()=>["black","#f00","#4481c7","rgba(255, 235, 59, 0.4)","#999","green"]},horizontalNavigation:{type:Boolean,default:!1},disableNavigation:{type:Boolean,default:!1},active:{type:Boolean,default:!1},color:{type:String,default:"#000"},useEraser:{type:Boolean,default:!1}},data(){return{currentColor:this.color,canvasIsEmpty:!1,canvasId:0,isEraserActive:this.useEraser,isActive:this.active,pointCoords:[],redoList:[],undoList:[],currentLineWidth:this.isEraserActive?this.lineWidthEraser:this.lineWidth,tempCanvas:null,tempCtx:null,canvas:null,ctx:null,startedDrawing:!1,drawMoveEvent:"mousemove",drawStartEvent:"mousedown",drawEndEvent:"mouseup",isMouse:!0}},watch:{isActive:"init",name:"init",hide(){this.$nextTick(()=>{this.init()})},lineWidth(t){this.currentLineWidth=t},lineWidthEraser(t){this.currentLineWidth=t},useEraser(t){this.isEraserActive=t},active(t){this.isActive=t},color(t){this.currentColor=t,this.tempCtx.strokeStyle=this.currentColor,this.ctx.strokeStyle=this.currentColor},isEraserActive(t){this.currentLineWidth=t?this.lineWidthEraser:this.lineWidth},currentLineWidth(t){this.ctx.lineWidth=t,this.tempCtx.lineWidth=t}},beforeMount(){this.canvasId=Math.round(1e3*Math.random())},created(){this.isTouch&&(this.drawMoveEvent="touchmove",this.drawStartEvent="touchstart",this.drawEndEvent="touchend",this.isMouse=!1)},mounted(){this.init()},computed:{scalingFactor(){return window.devicePixelRatio||1},isTouch(){return"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0}},methods:{cancelDrawing(){this.loadImageFromStorage(),this.isActive=!1,this.isColorPickerOpen=!1,this.isLineWidthPickerOpen=!1},setItem(t,i){localStorage.setItem(t,i)},async getItem(t){return localStorage.getItem(t)},removeItem(t){localStorage.removeItem(t)},init(){try{this.pointCoords=[],this.tempCanvas=this.$refs["temp-canvas-"+this.canvasId],this.tempCtx=this.tempCanvas.getContext("2d"),this.canvas=this.$refs["canvas-"+this.canvasId],this.ctx=this.canvas.getContext("2d"),this.tempCtx.lineCap="round",this.ctx.lineCap="round",this.tempCtx.lineWidth=this.lineWidth,this.ctx.lineWidth=this.lineWidth,this.tempCtx.strokeStyle=this.currentColor,this.ctx.strokeStyle=this.currentColor,this.setItem(this.name+"-settings",JSON.stringify({width:this.canvas.width,height:this.canvas.height})),this.setCanvasSize(),this.loadImageFromStorage(),this.$emit("toggle-paintable",this.isActive)}catch(t){}},undoDrawingStep(){this.restoreCanvasState(this.undoList,this.redoList)},redoDrawingStep(){this.restoreCanvasState(this.redoList,this.undoList)},restoreCanvasState(t,i){if(this.ctx.globalCompositeOperation="source-over",t.length){const e=t.pop();this.saveCurrentCanvasState(this.canvas,i,!0),this.loadImageFromStorage(e)}},saveCurrentCanvasState(t,i,e){e=e||!1,e||(this.redoList=[]),(i||this.undoList).push(t.toDataURL("image/png"))},async loadImageFromStorage(t){this.clearCanvas();const i=t||await this.getItem(this.name);if(i){let t=new Image;t.onload=(()=>{this.ctx.drawImage(t,0,0),this.canvasIsEmpty=this.isCanvasBlank()}),t.src=i}else this.canvasIsEmpty=this.isCanvasBlank()},setCanvasSize(){w=0,x=0},clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},isCanvasBlank(){this.ctx.globalCompositeOperation="source-over";const t=document.createElement("canvas"),i=t.getContext("2d");return i.clearRect(0,0,this.canvas.width,this.canvas.height),t.width=this.canvas.width,t.height=this.canvas.height,t.toDataURL()===this.canvas.toDataURL()},saveCurrentCanvasToStorage(){this.isEraserActive=!1,this.isCanvasBlank()?(this.removeItem(this.name),this.removeItem(this.name+"-settings")):(this.setItem(this.name,this.canvas.toDataURL("image/png")),this.setItem(this.name+"-settings",JSON.stringify({width:this.canvas.width,height:this.canvas.height}))),this.undoList=[],this.redoList=[],this.canvasIsEmpty=this.isCanvasBlank()},drawStart(t){if(t.preventDefault(),this.isActive){this.isLineWidthPickerOpen=!1,this.isColorPickerOpen=!1,this.startedDrawing=!0,this.saveCurrentCanvasState(this.canvas);const i=this.isMouse?t.clientX:t.targetTouches[0].clientX,e=this.isMouse?t.clientY:t.targetTouches[0].clientY;i&&e&&(w=i*this.factor-this.tempCanvas.getBoundingClientRect().left,x=e*this.factor-this.tempCanvas.getBoundingClientRect().top,this.pointCoords.push({x:w,y:x})),this.tempCtx.globalCompositeOperation="source-over",this.ctx.globalCompositeOperation=this.isEraserActive?"destination-out":"source-over"}},drawEnd(){this.isActive&&(this.drawLine(this.ctx),this.startedDrawing=!1,this.pointCoords=[])},drawLine(t){this.tempCtx.clearRect(0,0,this.canvas.width,this.canvas.height);let i=this.pointCoords[0],e=this.pointCoords[1];if(i.x&&i.y){t.beginPath(),t.moveTo(i.x,i.y);for(let a=1,n=this.pointCoords.length;a<n;a++){let n={x:i.x+(e.x-i.x)/2,y:i.y+(e.y-i.y)/2};t.quadraticCurveTo(i.x,i.y,n.x,n.y),i=this.pointCoords[a],e=this.pointCoords[a+1]}t.lineTo(i.x,i.y),t.stroke(),t.closePath()}},drawMove(t){if(t.preventDefault(),this.isActive&&this.startedDrawing){const i=this.isMouse?t.clientX:t.targetTouches[0].clientX,e=this.isMouse?t.clientY:t.targetTouches[0].clientY;i&&e&&(w=i*this.factor-this.tempCanvas.getBoundingClientRect().left,x=e*this.factor-this.tempCanvas.getBoundingClientRect().top,this.pointCoords.push({x:w,y:x}),this.drawLine(this.isEraserActive?this.ctx:this.tempCtx))}}}},C=y,k=(e("4226"),Object(l["a"])(C,h,v,!1,null,null,null)),_=k.exports;const P={install(t,i){i&&i.setItem&&(_.methods.setItem=i.setItem),i&&i.getItem&&(_.methods.getItem=i.getItem),i&&i.removeItem&&(_.methods.removeItem=i.removeItem),t.component("paintable",_)}};var W=P;a["a"].use(W),new a["a"]({render:t=>t(d)}).$mount("#app")},"67f2":function(t,i,e){var a=e("e833");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("499e").default;n("9703d566",a,!0,{sourceMap:!1,shadowMode:!1})},"6b54":function(t,i,e){"use strict";var a=e("67f2"),n=e.n(a);n.a},e2a1:function(t,i,e){var a=e("3f8c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("499e").default;n("1f50beb8",a,!0,{sourceMap:!1,shadowMode:!1})},e833:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".navigation[data-v-65338345]{position:fixed;right:20px;top:20px;z-index:1005;background-color:#333;border-radius:5px;color:#fff}.navigation .navigationMenu[data-v-65338345],.navigation .navigationMenu ul[data-v-65338345]{list-style:none;padding:0;margin:0}.navigation .navigationMenu li>div[data-v-65338345]{cursor:pointer;padding:12px}.navigation .navigationMenu li.disabled[data-v-65338345]{opacity:.5}.navigation__lineWidthPicker[data-v-65338345]{background:#333;position:absolute;left:-225px;top:0;padding:12px;border-radius:5px;-webkit-box-sizing:border-box;box-sizing:border-box}.navigation__lineWidthPickerDot[data-v-65338345]{margin-top:10px;border-radius:100%}.navigation__lineWidthPickerColor[data-v-65338345]{border-radius:100%;height:15px;width:15px;display:block;margin:0 0 10px;border:2px solid transparent}.navigation__lineWidthPickerColor[data-v-65338345]:last-child{margin:0}.navigation__lineWidthPickerColor.selected[data-v-65338345]{border:2px solid #fff}.navigation__colorPicker[data-v-65338345]{background:#333;position:absolute;left:-60px;top:0;padding:12px;border-radius:5px}.navigation__colorPickerColor[data-v-65338345]{border-radius:100%;height:15px;width:15px;display:block;margin:0 0 10px;border:2px solid transparent}.navigation__colorPickerColor[data-v-65338345]:last-child{margin:0}.navigation__colorPickerColor.selected[data-v-65338345]{border:2px solid #fff}.navigation__horizontalNavigation .navigationMenu li[data-v-65338345],.navigation__horizontalNavigation .navigationMenu ul[data-v-65338345]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}",""])},f763:function(t,i,e){var a=e("2299");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("499e").default;n("46600cf8",a,!0,{sourceMap:!1,shadowMode:!1})}});