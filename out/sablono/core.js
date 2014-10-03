// Compiled by ClojureScript 0.0-2311
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__8116__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__8115 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__8115,(0),null);var body = cljs.core.nthnext.call(null,vec__8115,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__8116 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8116__delegate.call(this,args);};
G__8116.cljs$lang$maxFixedArity = 0;
G__8116.cljs$lang$applyTo = (function (arglist__8117){
var args = cljs.core.seq(arglist__8117);
return G__8116__delegate(args);
});
G__8116.cljs$core$IFn$_invoke$arity$variadic = G__8116__delegate;
return G__8116;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4278__auto__ = (function iter__8122(s__8123){return (new cljs.core.LazySeq(null,(function (){var s__8123__$1 = s__8123;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8123__$1);if(temp__4126__auto__)
{var s__8123__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8123__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__8123__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__8125 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__8124 = (0);while(true){
if((i__8124 < size__4277__auto__))
{var args = cljs.core._nth.call(null,c__4276__auto__,i__8124);cljs.core.chunk_append.call(null,b__8125,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__8126 = (i__8124 + (1));
i__8124 = G__8126;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8125),iter__8122.call(null,cljs.core.chunk_rest.call(null,s__8123__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8125),null);
}
} else
{var args = cljs.core.first.call(null,s__8123__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__8122.call(null,cljs.core.rest.call(null,s__8123__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4278__auto__ = (function iter__8131(s__8132){return (new cljs.core.LazySeq(null,(function (){var s__8132__$1 = s__8132;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8132__$1);if(temp__4126__auto__)
{var s__8132__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8132__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__8132__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__8134 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__8133 = (0);while(true){
if((i__8133 < size__4277__auto__))
{var style = cljs.core._nth.call(null,c__4276__auto__,i__8133);cljs.core.chunk_append.call(null,b__8134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__8135 = (i__8133 + (1));
i__8133 = G__8135;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8134),iter__8131.call(null,cljs.core.chunk_rest.call(null,s__8132__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8134),null);
}
} else
{var style = cljs.core.first.call(null,s__8132__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__8131.call(null,cljs.core.rest.call(null,s__8132__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__8136){
var styles = cljs.core.seq(arglist__8136);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to8137 = (function() { 
var link_to8137__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to8137 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to8137__delegate.call(this,url,content);};
link_to8137.cljs$lang$maxFixedArity = 1;
link_to8137.cljs$lang$applyTo = (function (arglist__8138){
var url = cljs.core.first(arglist__8138);
var content = cljs.core.rest(arglist__8138);
return link_to8137__delegate(url,content);
});
link_to8137.cljs$core$IFn$_invoke$arity$variadic = link_to8137__delegate;
return link_to8137;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to8137);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to8139 = (function() { 
var mail_to8139__delegate = function (e_mail,p__8140){var vec__8142 = p__8140;var content = cljs.core.nth.call(null,vec__8142,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3553__auto__ = content;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to8139 = function (e_mail,var_args){
var p__8140 = null;if (arguments.length > 1) {
  p__8140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to8139__delegate.call(this,e_mail,p__8140);};
mail_to8139.cljs$lang$maxFixedArity = 1;
mail_to8139.cljs$lang$applyTo = (function (arglist__8143){
var e_mail = cljs.core.first(arglist__8143);
var p__8140 = cljs.core.rest(arglist__8143);
return mail_to8139__delegate(e_mail,p__8140);
});
mail_to8139.cljs$core$IFn$_invoke$arity$variadic = mail_to8139__delegate;
return mail_to8139;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to8139);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list8144 = (function unordered_list8144(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4278__auto__ = (function iter__8149(s__8150){return (new cljs.core.LazySeq(null,(function (){var s__8150__$1 = s__8150;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8150__$1);if(temp__4126__auto__)
{var s__8150__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8150__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__8150__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__8152 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__8151 = (0);while(true){
if((i__8151 < size__4277__auto__))
{var x = cljs.core._nth.call(null,c__4276__auto__,i__8151);cljs.core.chunk_append.call(null,b__8152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__8153 = (i__8151 + (1));
i__8151 = G__8153;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8152),iter__8149.call(null,cljs.core.chunk_rest.call(null,s__8150__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8152),null);
}
} else
{var x = cljs.core.first.call(null,s__8150__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__8149.call(null,cljs.core.rest.call(null,s__8150__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list8144);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list8154 = (function ordered_list8154(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4278__auto__ = (function iter__8159(s__8160){return (new cljs.core.LazySeq(null,(function (){var s__8160__$1 = s__8160;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8160__$1);if(temp__4126__auto__)
{var s__8160__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8160__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__8160__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__8162 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__8161 = (0);while(true){
if((i__8161 < size__4277__auto__))
{var x = cljs.core._nth.call(null,c__4276__auto__,i__8161);cljs.core.chunk_append.call(null,b__8162,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__8163 = (i__8161 + (1));
i__8161 = G__8163;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8162),iter__8159.call(null,cljs.core.chunk_rest.call(null,s__8160__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8162),null);
}
} else
{var x = cljs.core.first.call(null,s__8160__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__8159.call(null,cljs.core.rest.call(null,s__8160__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list8154);
/**
* Create an image element.
*/
sablono.core.image8164 = (function() {
var image8164 = null;
var image8164__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image8164__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image8164 = function(src,alt){
switch(arguments.length){
case 1:
return image8164__1.call(this,src);
case 2:
return image8164__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image8164.cljs$core$IFn$_invoke$arity$1 = image8164__1;
image8164.cljs$core$IFn$_invoke$arity$2 = image8164__2;
return image8164;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image8164);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__8165_SHARP_,p2__8166_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8165_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__8166_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__8167_SHARP_,p2__8168_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8167_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__8168_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field8169 = (function() {
var color_field8169 = null;
var color_field8169__1 = (function (name__5028__auto__){return color_field8169.call(null,name__5028__auto__,null);
});
var color_field8169__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5028__auto__,value__5029__auto__);
});
color_field8169 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return color_field8169__1.call(this,name__5028__auto__);
case 2:
return color_field8169__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field8169.cljs$core$IFn$_invoke$arity$1 = color_field8169__1;
color_field8169.cljs$core$IFn$_invoke$arity$2 = color_field8169__2;
return color_field8169;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field8169);
/**
* Creates a date input field.
*/
sablono.core.date_field8170 = (function() {
var date_field8170 = null;
var date_field8170__1 = (function (name__5028__auto__){return date_field8170.call(null,name__5028__auto__,null);
});
var date_field8170__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5028__auto__,value__5029__auto__);
});
date_field8170 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return date_field8170__1.call(this,name__5028__auto__);
case 2:
return date_field8170__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field8170.cljs$core$IFn$_invoke$arity$1 = date_field8170__1;
date_field8170.cljs$core$IFn$_invoke$arity$2 = date_field8170__2;
return date_field8170;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field8170);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field8171 = (function() {
var datetime_field8171 = null;
var datetime_field8171__1 = (function (name__5028__auto__){return datetime_field8171.call(null,name__5028__auto__,null);
});
var datetime_field8171__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5028__auto__,value__5029__auto__);
});
datetime_field8171 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return datetime_field8171__1.call(this,name__5028__auto__);
case 2:
return datetime_field8171__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field8171.cljs$core$IFn$_invoke$arity$1 = datetime_field8171__1;
datetime_field8171.cljs$core$IFn$_invoke$arity$2 = datetime_field8171__2;
return datetime_field8171;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field8171);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field8172 = (function() {
var datetime_local_field8172 = null;
var datetime_local_field8172__1 = (function (name__5028__auto__){return datetime_local_field8172.call(null,name__5028__auto__,null);
});
var datetime_local_field8172__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5028__auto__,value__5029__auto__);
});
datetime_local_field8172 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return datetime_local_field8172__1.call(this,name__5028__auto__);
case 2:
return datetime_local_field8172__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field8172.cljs$core$IFn$_invoke$arity$1 = datetime_local_field8172__1;
datetime_local_field8172.cljs$core$IFn$_invoke$arity$2 = datetime_local_field8172__2;
return datetime_local_field8172;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field8172);
/**
* Creates a email input field.
*/
sablono.core.email_field8173 = (function() {
var email_field8173 = null;
var email_field8173__1 = (function (name__5028__auto__){return email_field8173.call(null,name__5028__auto__,null);
});
var email_field8173__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5028__auto__,value__5029__auto__);
});
email_field8173 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return email_field8173__1.call(this,name__5028__auto__);
case 2:
return email_field8173__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field8173.cljs$core$IFn$_invoke$arity$1 = email_field8173__1;
email_field8173.cljs$core$IFn$_invoke$arity$2 = email_field8173__2;
return email_field8173;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field8173);
/**
* Creates a file input field.
*/
sablono.core.file_field8174 = (function() {
var file_field8174 = null;
var file_field8174__1 = (function (name__5028__auto__){return file_field8174.call(null,name__5028__auto__,null);
});
var file_field8174__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5028__auto__,value__5029__auto__);
});
file_field8174 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return file_field8174__1.call(this,name__5028__auto__);
case 2:
return file_field8174__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field8174.cljs$core$IFn$_invoke$arity$1 = file_field8174__1;
file_field8174.cljs$core$IFn$_invoke$arity$2 = file_field8174__2;
return file_field8174;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field8174);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field8175 = (function() {
var hidden_field8175 = null;
var hidden_field8175__1 = (function (name__5028__auto__){return hidden_field8175.call(null,name__5028__auto__,null);
});
var hidden_field8175__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5028__auto__,value__5029__auto__);
});
hidden_field8175 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return hidden_field8175__1.call(this,name__5028__auto__);
case 2:
return hidden_field8175__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field8175.cljs$core$IFn$_invoke$arity$1 = hidden_field8175__1;
hidden_field8175.cljs$core$IFn$_invoke$arity$2 = hidden_field8175__2;
return hidden_field8175;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field8175);
/**
* Creates a month input field.
*/
sablono.core.month_field8176 = (function() {
var month_field8176 = null;
var month_field8176__1 = (function (name__5028__auto__){return month_field8176.call(null,name__5028__auto__,null);
});
var month_field8176__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5028__auto__,value__5029__auto__);
});
month_field8176 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return month_field8176__1.call(this,name__5028__auto__);
case 2:
return month_field8176__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field8176.cljs$core$IFn$_invoke$arity$1 = month_field8176__1;
month_field8176.cljs$core$IFn$_invoke$arity$2 = month_field8176__2;
return month_field8176;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field8176);
/**
* Creates a number input field.
*/
sablono.core.number_field8177 = (function() {
var number_field8177 = null;
var number_field8177__1 = (function (name__5028__auto__){return number_field8177.call(null,name__5028__auto__,null);
});
var number_field8177__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5028__auto__,value__5029__auto__);
});
number_field8177 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return number_field8177__1.call(this,name__5028__auto__);
case 2:
return number_field8177__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field8177.cljs$core$IFn$_invoke$arity$1 = number_field8177__1;
number_field8177.cljs$core$IFn$_invoke$arity$2 = number_field8177__2;
return number_field8177;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field8177);
/**
* Creates a password input field.
*/
sablono.core.password_field8178 = (function() {
var password_field8178 = null;
var password_field8178__1 = (function (name__5028__auto__){return password_field8178.call(null,name__5028__auto__,null);
});
var password_field8178__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5028__auto__,value__5029__auto__);
});
password_field8178 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return password_field8178__1.call(this,name__5028__auto__);
case 2:
return password_field8178__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field8178.cljs$core$IFn$_invoke$arity$1 = password_field8178__1;
password_field8178.cljs$core$IFn$_invoke$arity$2 = password_field8178__2;
return password_field8178;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field8178);
/**
* Creates a range input field.
*/
sablono.core.range_field8179 = (function() {
var range_field8179 = null;
var range_field8179__1 = (function (name__5028__auto__){return range_field8179.call(null,name__5028__auto__,null);
});
var range_field8179__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5028__auto__,value__5029__auto__);
});
range_field8179 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return range_field8179__1.call(this,name__5028__auto__);
case 2:
return range_field8179__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field8179.cljs$core$IFn$_invoke$arity$1 = range_field8179__1;
range_field8179.cljs$core$IFn$_invoke$arity$2 = range_field8179__2;
return range_field8179;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field8179);
/**
* Creates a search input field.
*/
sablono.core.search_field8180 = (function() {
var search_field8180 = null;
var search_field8180__1 = (function (name__5028__auto__){return search_field8180.call(null,name__5028__auto__,null);
});
var search_field8180__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5028__auto__,value__5029__auto__);
});
search_field8180 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return search_field8180__1.call(this,name__5028__auto__);
case 2:
return search_field8180__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field8180.cljs$core$IFn$_invoke$arity$1 = search_field8180__1;
search_field8180.cljs$core$IFn$_invoke$arity$2 = search_field8180__2;
return search_field8180;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field8180);
/**
* Creates a tel input field.
*/
sablono.core.tel_field8181 = (function() {
var tel_field8181 = null;
var tel_field8181__1 = (function (name__5028__auto__){return tel_field8181.call(null,name__5028__auto__,null);
});
var tel_field8181__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5028__auto__,value__5029__auto__);
});
tel_field8181 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return tel_field8181__1.call(this,name__5028__auto__);
case 2:
return tel_field8181__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field8181.cljs$core$IFn$_invoke$arity$1 = tel_field8181__1;
tel_field8181.cljs$core$IFn$_invoke$arity$2 = tel_field8181__2;
return tel_field8181;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field8181);
/**
* Creates a text input field.
*/
sablono.core.text_field8182 = (function() {
var text_field8182 = null;
var text_field8182__1 = (function (name__5028__auto__){return text_field8182.call(null,name__5028__auto__,null);
});
var text_field8182__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5028__auto__,value__5029__auto__);
});
text_field8182 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return text_field8182__1.call(this,name__5028__auto__);
case 2:
return text_field8182__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field8182.cljs$core$IFn$_invoke$arity$1 = text_field8182__1;
text_field8182.cljs$core$IFn$_invoke$arity$2 = text_field8182__2;
return text_field8182;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field8182);
/**
* Creates a time input field.
*/
sablono.core.time_field8183 = (function() {
var time_field8183 = null;
var time_field8183__1 = (function (name__5028__auto__){return time_field8183.call(null,name__5028__auto__,null);
});
var time_field8183__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5028__auto__,value__5029__auto__);
});
time_field8183 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return time_field8183__1.call(this,name__5028__auto__);
case 2:
return time_field8183__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field8183.cljs$core$IFn$_invoke$arity$1 = time_field8183__1;
time_field8183.cljs$core$IFn$_invoke$arity$2 = time_field8183__2;
return time_field8183;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field8183);
/**
* Creates a url input field.
*/
sablono.core.url_field8184 = (function() {
var url_field8184 = null;
var url_field8184__1 = (function (name__5028__auto__){return url_field8184.call(null,name__5028__auto__,null);
});
var url_field8184__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5028__auto__,value__5029__auto__);
});
url_field8184 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return url_field8184__1.call(this,name__5028__auto__);
case 2:
return url_field8184__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field8184.cljs$core$IFn$_invoke$arity$1 = url_field8184__1;
url_field8184.cljs$core$IFn$_invoke$arity$2 = url_field8184__2;
return url_field8184;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field8184);
/**
* Creates a week input field.
*/
sablono.core.week_field8185 = (function() {
var week_field8185 = null;
var week_field8185__1 = (function (name__5028__auto__){return week_field8185.call(null,name__5028__auto__,null);
});
var week_field8185__2 = (function (name__5028__auto__,value__5029__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5028__auto__,value__5029__auto__);
});
week_field8185 = function(name__5028__auto__,value__5029__auto__){
switch(arguments.length){
case 1:
return week_field8185__1.call(this,name__5028__auto__);
case 2:
return week_field8185__2.call(this,name__5028__auto__,value__5029__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field8185.cljs$core$IFn$_invoke$arity$1 = week_field8185__1;
week_field8185.cljs$core$IFn$_invoke$arity$2 = week_field8185__2;
return week_field8185;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field8185);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box8186 = (function() {
var check_box8186 = null;
var check_box8186__1 = (function (name){return check_box8186.call(null,name,null);
});
var check_box8186__2 = (function (name,checked_QMARK_){return check_box8186.call(null,name,checked_QMARK_,"true");
});
var check_box8186__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box8186 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box8186__1.call(this,name);
case 2:
return check_box8186__2.call(this,name,checked_QMARK_);
case 3:
return check_box8186__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box8186.cljs$core$IFn$_invoke$arity$1 = check_box8186__1;
check_box8186.cljs$core$IFn$_invoke$arity$2 = check_box8186__2;
check_box8186.cljs$core$IFn$_invoke$arity$3 = check_box8186__3;
return check_box8186;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box8186);
/**
* Creates a radio button.
*/
sablono.core.radio_button8187 = (function() {
var radio_button8187 = null;
var radio_button8187__1 = (function (group){return radio_button8187.call(null,group,null);
});
var radio_button8187__2 = (function (group,checked_QMARK_){return radio_button8187.call(null,group,checked_QMARK_,"true");
});
var radio_button8187__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button8187 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button8187__1.call(this,group);
case 2:
return radio_button8187__2.call(this,group,checked_QMARK_);
case 3:
return radio_button8187__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button8187.cljs$core$IFn$_invoke$arity$1 = radio_button8187__1;
radio_button8187.cljs$core$IFn$_invoke$arity$2 = radio_button8187__2;
radio_button8187.cljs$core$IFn$_invoke$arity$3 = radio_button8187__3;
return radio_button8187;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button8187);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options8188 = (function() {
var select_options8188 = null;
var select_options8188__1 = (function (coll){return select_options8188.call(null,coll,null);
});
var select_options8188__2 = (function (coll,selected){var iter__4278__auto__ = (function iter__8197(s__8198){return (new cljs.core.LazySeq(null,(function (){var s__8198__$1 = s__8198;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8198__$1);if(temp__4126__auto__)
{var s__8198__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8198__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__8198__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__8200 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__8199 = (0);while(true){
if((i__8199 < size__4277__auto__))
{var x = cljs.core._nth.call(null,c__4276__auto__,i__8199);cljs.core.chunk_append.call(null,b__8200,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8203 = x;var text = cljs.core.nth.call(null,vec__8203,(0),null);var val = cljs.core.nth.call(null,vec__8203,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__8203,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options8188.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__8205 = (i__8199 + (1));
i__8199 = G__8205;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8200),iter__8197.call(null,cljs.core.chunk_rest.call(null,s__8198__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8200),null);
}
} else
{var x = cljs.core.first.call(null,s__8198__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8204 = x;var text = cljs.core.nth.call(null,vec__8204,(0),null);var val = cljs.core.nth.call(null,vec__8204,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__8204,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options8188.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__8197.call(null,cljs.core.rest.call(null,s__8198__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,coll);
});
select_options8188 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options8188__1.call(this,coll);
case 2:
return select_options8188__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options8188.cljs$core$IFn$_invoke$arity$1 = select_options8188__1;
select_options8188.cljs$core$IFn$_invoke$arity$2 = select_options8188__2;
return select_options8188;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options8188);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down8206 = (function() {
var drop_down8206 = null;
var drop_down8206__2 = (function (name,options){return drop_down8206.call(null,name,options,null);
});
var drop_down8206__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down8206 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down8206__2.call(this,name,options);
case 3:
return drop_down8206__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down8206.cljs$core$IFn$_invoke$arity$2 = drop_down8206__2;
drop_down8206.cljs$core$IFn$_invoke$arity$3 = drop_down8206__3;
return drop_down8206;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down8206);
/**
* Creates a text area element.
*/
sablono.core.text_area8207 = (function() {
var text_area8207 = null;
var text_area8207__1 = (function (name){return text_area8207.call(null,name,null);
});
var text_area8207__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area8207 = function(name,value){
switch(arguments.length){
case 1:
return text_area8207__1.call(this,name);
case 2:
return text_area8207__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area8207.cljs$core$IFn$_invoke$arity$1 = text_area8207__1;
text_area8207.cljs$core$IFn$_invoke$arity$2 = text_area8207__2;
return text_area8207;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area8207);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label8208 = (function label8208(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label8208);
/**
* Creates a submit button.
*/
sablono.core.submit_button8209 = (function submit_button8209(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button8209);
/**
* Creates a form reset button.
*/
sablono.core.reset_button8210 = (function reset_button8210(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button8210);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to8211 = (function() { 
var form_to8211__delegate = function (p__8212,body){var vec__8214 = p__8212;var method = cljs.core.nth.call(null,vec__8214,(0),null);var action = cljs.core.nth.call(null,vec__8214,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to8211 = function (p__8212,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to8211__delegate.call(this,p__8212,body);};
form_to8211.cljs$lang$maxFixedArity = 1;
form_to8211.cljs$lang$applyTo = (function (arglist__8215){
var p__8212 = cljs.core.first(arglist__8215);
var body = cljs.core.rest(arglist__8215);
return form_to8211__delegate(p__8212,body);
});
form_to8211.cljs$core$IFn$_invoke$arity$variadic = form_to8211__delegate;
return form_to8211;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to8211);

//# sourceMappingURL=core.js.map