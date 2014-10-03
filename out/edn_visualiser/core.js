// Compiled by ClojureScript 0.0-2311
goog.provide('edn_visualiser.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.dom.classes');
goog.require('goog.dom.classes');
goog.require('sablono.core');
goog.require('cognitect.transit');
goog.require('sablono.core');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('edn_visualiser.ednschema');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('edn_visualiser.ednschema');
goog.require('goog.events');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
edn_visualiser.core.app_model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"contents","contents",-1567174023),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"alert","alert",-571950580),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"root-name","root-name",1886029259),""], null));
/**
* @param {...*} var_args
*/
edn_visualiser.core.log = (function() { 
var log__delegate = function (s){return console.log(cljs.core.apply.call(null,cljs.core.str,s));
};
var log = function (var_args){
var s = null;if (arguments.length > 0) {
  s = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,s);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__6628){
var s = cljs.core.seq(arglist__6628);
return log__delegate(s);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
edn_visualiser.core.by_id = (function by_id(id){return document.getElementById(id);
});
edn_visualiser.core.process_file = (function process_file(file_name,file,cursor){var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));var datas = cognitect.transit.read.call(null,r,file);om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"contents","contents",-1567174023),datas);
return om.core.update_BANG_.call(null,cursor,new cljs.core.Keyword(null,"root-name","root-name",1886029259),file_name.substring((0),file_name.indexOf(".")));
});
edn_visualiser.core.handle_file_select = (function handle_file_select(cursor,evt){evt.stopPropagation();
evt.preventDefault();
var files = evt.dataTransfer.files;var n__4409__auto__ = files.length;var i = (0);while(true){
if((i < n__4409__auto__))
{var rdr_6629 = (new FileReader());var the_file_6630 = (files[i]);rdr_6629.onload = ((function (i,rdr_6629,the_file_6630,n__4409__auto__,files){
return (function (e){var file_content = e.target.result;var file_name = ((cljs.core._EQ_.call(null,";;; ",file_content.substr((0),(4))))?(function (){var idx = file_content.indexOf("\n\n");console.log(idx);
return file_content.slice((4),idx);
})():the_file_6630.name);return edn_visualiser.core.process_file.call(null,file_name,file_content,cursor);
});})(i,rdr_6629,the_file_6630,n__4409__auto__,files))
;
rdr_6629.readAsText(the_file_6630);
{
var G__6631 = (i + (1));
i = G__6631;
continue;
}
} else
{return null;
}
break;
}
});
edn_visualiser.core.handle_drag_over = (function handle_drag_over(evt){evt.stopPropagation();
evt.preventDefault();
return evt.dataTransfer.dropEffect = "copy";
});
edn_visualiser.core.set_up_drop_zone = (function set_up_drop_zone(el,cursor){el.addEventListener("dragover",edn_visualiser.core.handle_drag_over,false);
el.addEventListener("drop",cljs.core.partial.call(null,edn_visualiser.core.handle_file_select,cursor),false);
window.addEventListener("dragover",(function (e){e.stopPropagation();
return e.preventDefault();
}));
return window.addEventListener("drop",(function (e){e.stopPropagation();
return e.preventDefault();
}));
});
edn_visualiser.core.drop_zone = (function drop_zone(cursor,owner){if(typeof edn_visualiser.core.t6637 !== 'undefined')
{} else
{
/**
* @constructor
*/
edn_visualiser.core.t6637 = (function (owner,cursor,drop_zone,meta6638){
this.owner = owner;
this.cursor = cursor;
this.drop_zone = drop_zone;
this.meta6638 = meta6638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
edn_visualiser.core.t6637.cljs$lang$type = true;
edn_visualiser.core.t6637.cljs$lang$ctorStr = "edn-visualiser.core/t6637";
edn_visualiser.core.t6637.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"edn-visualiser.core/t6637");
});
edn_visualiser.core.t6637.prototype.om$core$IRender$ = true;
edn_visualiser.core.t6637.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.p(null,"Drop your JSON here");
});
edn_visualiser.core.t6637.prototype.om$core$IDidMount$ = true;
edn_visualiser.core.t6637.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return edn_visualiser.core.set_up_drop_zone.call(null,edn_visualiser.core.by_id.call(null,"drop-zone"),self__.cursor);
});
edn_visualiser.core.t6637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6639){var self__ = this;
var _6639__$1 = this;return self__.meta6638;
});
edn_visualiser.core.t6637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6639,meta6638__$1){var self__ = this;
var _6639__$1 = this;return (new edn_visualiser.core.t6637(self__.owner,self__.cursor,self__.drop_zone,meta6638__$1));
});
edn_visualiser.core.__GT_t6637 = (function __GT_t6637(owner__$1,cursor__$1,drop_zone__$1,meta6638){return (new edn_visualiser.core.t6637(owner__$1,cursor__$1,drop_zone__$1,meta6638));
});
}
return (new edn_visualiser.core.t6637(owner,cursor,drop_zone,null));
});
edn_visualiser.core.edn_contents_area = (function edn_contents_area(cursor,owner){if(typeof edn_visualiser.core.t6647 !== 'undefined')
{} else
{
/**
* @constructor
*/
edn_visualiser.core.t6647 = (function (owner,cursor,edn_contents_area,meta6648){
this.owner = owner;
this.cursor = cursor;
this.edn_contents_area = edn_contents_area;
this.meta6648 = meta6648;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
edn_visualiser.core.t6647.cljs$lang$type = true;
edn_visualiser.core.t6647.cljs$lang$ctorStr = "edn-visualiser.core/t6647";
edn_visualiser.core.t6647.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"edn-visualiser.core/t6647");
});
edn_visualiser.core.t6647.prototype.om$core$IRender$ = true;
edn_visualiser.core.t6647.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "well well-lg"},(function (){var attrs6650 = edn_visualiser.ednschema.pp.call(null,cljs.core.reverse.call(null,cljs.core.partition_by.call(null,((function (___$1){
return (function (p1__6642_SHARP_){return cljs.core.namespace.call(null,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(p1__6642_SHARP_));
});})(___$1))
,edn_visualiser.ednschema.to_schema.call(null,new cljs.core.Keyword(null,"root-name","root-name",1886029259).cljs$core$IFn$_invoke$arity$1(self__.cursor),new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(self__.cursor)))));return cljs.core.apply.call(null,React.DOM.pre,((cljs.core.map_QMARK_.call(null,attrs6650))?sablono.interpreter.attributes.call(null,attrs6650):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6650))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6650)], null))));
})()));
});
edn_visualiser.core.t6647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6649){var self__ = this;
var _6649__$1 = this;return self__.meta6648;
});
edn_visualiser.core.t6647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6649,meta6648__$1){var self__ = this;
var _6649__$1 = this;return (new edn_visualiser.core.t6647(self__.owner,self__.cursor,self__.edn_contents_area,meta6648__$1));
});
edn_visualiser.core.__GT_t6647 = (function __GT_t6647(owner__$1,cursor__$1,edn_contents_area__$1,meta6648){return (new edn_visualiser.core.t6647(owner__$1,cursor__$1,edn_contents_area__$1,meta6648));
});
}
return (new edn_visualiser.core.t6647(owner,cursor,edn_contents_area,null));
});
edn_visualiser.core.see_my_edn = (function see_my_edn(cursor,owner){if(typeof edn_visualiser.core.t6656 !== 'undefined')
{} else
{
/**
* @constructor
*/
edn_visualiser.core.t6656 = (function (owner,cursor,see_my_edn,meta6657){
this.owner = owner;
this.cursor = cursor;
this.see_my_edn = see_my_edn;
this.meta6657 = meta6657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
edn_visualiser.core.t6656.cljs$lang$type = true;
edn_visualiser.core.t6656.cljs$lang$ctorStr = "edn-visualiser.core/t6656";
edn_visualiser.core.t6656.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"edn-visualiser.core/t6656");
});
edn_visualiser.core.t6656.prototype.om$core$IRender$ = true;
edn_visualiser.core.t6656.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"className": "class page-header"},React.DOM.h1(null,"See my EDN")),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"contents","contents",-1567174023).cljs$core$IFn$_invoke$arity$1(self__.cursor))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"drop-zone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well.well-lg","div.well.well-lg",-202550770),om.core.build.call(null,edn_visualiser.core.drop_zone,self__.cursor)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),om.core.build.call(null,edn_visualiser.core.edn_contents_area,self__.cursor)], null))));
});
edn_visualiser.core.t6656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6658){var self__ = this;
var _6658__$1 = this;return self__.meta6657;
});
edn_visualiser.core.t6656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6658,meta6657__$1){var self__ = this;
var _6658__$1 = this;return (new edn_visualiser.core.t6656(self__.owner,self__.cursor,self__.see_my_edn,meta6657__$1));
});
edn_visualiser.core.__GT_t6656 = (function __GT_t6656(owner__$1,cursor__$1,see_my_edn__$1,meta6657){return (new edn_visualiser.core.t6656(owner__$1,cursor__$1,see_my_edn__$1,meta6657));
});
}
return (new edn_visualiser.core.t6656(owner,cursor,see_my_edn,null));
});
om.core.root.call(null,edn_visualiser.core.see_my_edn,edn_visualiser.core.app_model,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map