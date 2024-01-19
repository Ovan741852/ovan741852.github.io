System.register("chunks:///_virtual/CompLobby.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var n,t,e,c;return{setters:[function(o){n=o.inheritsLoose},function(o){t=o.cclegacy,e=o._decorator,c=o.Component}],execute:function(){var r;t._RF.push({},"6e14biyGYRHUJI7IwiNEKXi","CompLobby",void 0);var i=e.ccclass;e.property,o("CompLobby",i("CompLobby")(r=function(o){function t(){for(var n,t=arguments.length,e=new Array(t),c=0;c<t;c++)e[c]=arguments[c];return(n=o.call.apply(o,[this].concat(e))||this).classCommon=void 0,n.compCommon=void 0,n}n(t,o);var e=t.prototype;return e.saySomething=function(){console.log("something")},e.start=function(){this.node.getComponents(c).forEach((function(o){}))},e.update=function(o){},t}(c))||r);t._RF.pop()}}}));

System.register("chunks:///_virtual/ModuleLobby",["./CompLobby.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/ModuleLobby', 'chunks:///_virtual/ModuleLobby'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});