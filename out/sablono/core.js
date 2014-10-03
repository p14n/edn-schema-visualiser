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
var G__11834__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__11833 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__11833,(0),null);var body = cljs.core.nthnext.call(null,vec__11833,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__11834 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11834__delegate.call(this,args);};
G__11834.cljs$lang$maxFixedArity = 0;
G__11834.cljs$lang$applyTo = (function (arglist__11835){
var args = cljs.core.seq(arglist__11835);
return G__11834__delegate(args);
});
G__11834.cljs$core$IFn$_invoke$arity$variadic = G__11834__delegate;
return G__11834;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4294__auto__ = (function iter__11840(s__11841){return (new cljs.core.LazySeq(null,(function (){var s__11841__$1 = s__11841;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11841__$1);if(temp__4126__auto__)
{var s__11841__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11841__$2))
{var c__4292__auto__ = cljs.core.chunk_first.call(null,s__11841__$2);var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);var b__11843 = cljs.core.chunk_buffer.call(null,size__4293__auto__);if((function (){var i__11842 = (0);while(true){
if((i__11842 < size__4293__auto__))
{var args = cljs.core._nth.call(null,c__4292__auto__,i__11842);cljs.core.chunk_append.call(null,b__11843,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__11844 = (i__11842 + (1));
i__11842 = G__11844;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11843),iter__11840.call(null,cljs.core.chunk_rest.call(null,s__11841__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11843),null);
}
} else
{var args = cljs.core.first.call(null,s__11841__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__11840.call(null,cljs.core.rest.call(null,s__11841__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4294__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4294__auto__ = (function iter__11849(s__11850){return (new cljs.core.LazySeq(null,(function (){var s__11850__$1 = s__11850;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11850__$1);if(temp__4126__auto__)
{var s__11850__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11850__$2))
{var c__4292__auto__ = cljs.core.chunk_first.call(null,s__11850__$2);var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);var b__11852 = cljs.core.chunk_buffer.call(null,size__4293__auto__);if((function (){var i__11851 = (0);while(true){
if((i__11851 < size__4293__auto__))
{var style = cljs.core._nth.call(null,c__4292__auto__,i__11851);cljs.core.chunk_append.call(null,b__11852,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__11853 = (i__11851 + (1));
i__11851 = G__11853;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11852),iter__11849.call(null,cljs.core.chunk_rest.call(null,s__11850__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11852),null);
}
} else
{var style = cljs.core.first.call(null,s__11850__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__11849.call(null,cljs.core.rest.call(null,s__11850__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4294__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__11854){
var styles = cljs.core.seq(arglist__11854);
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
sablono.core.link_to11855 = (function() { 
var link_to11855__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to11855 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to11855__delegate.call(this,url,content);};
link_to11855.cljs$lang$maxFixedArity = 1;
link_to11855.cljs$lang$applyTo = (function (arglist__11856){
var url = cljs.core.first(arglist__11856);
var content = cljs.core.rest(arglist__11856);
return link_to11855__delegate(url,content);
});
link_to11855.cljs$core$IFn$_invoke$arity$variadic = link_to11855__delegate;
return link_to11855;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to11855);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to11857 = (function() { 
var mail_to11857__delegate = function (e_mail,p__11858){var vec__11860 = p__11858;var content = cljs.core.nth.call(null,vec__11860,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3569__auto__ = content;if(cljs.core.truth_(or__3569__auto__))
{return or__3569__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to11857 = function (e_mail,var_args){
var p__11858 = null;if (arguments.length > 1) {
  p__11858 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to11857__delegate.call(this,e_mail,p__11858);};
mail_to11857.cljs$lang$maxFixedArity = 1;
mail_to11857.cljs$lang$applyTo = (function (arglist__11861){
var e_mail = cljs.core.first(arglist__11861);
var p__11858 = cljs.core.rest(arglist__11861);
return mail_to11857__delegate(e_mail,p__11858);
});
mail_to11857.cljs$core$IFn$_invoke$arity$variadic = mail_to11857__delegate;
return mail_to11857;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to11857);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list11862 = (function unordered_list11862(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4294__auto__ = (function iter__11867(s__11868){return (new cljs.core.LazySeq(null,(function (){var s__11868__$1 = s__11868;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11868__$1);if(temp__4126__auto__)
{var s__11868__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11868__$2))
{var c__4292__auto__ = cljs.core.chunk_first.call(null,s__11868__$2);var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);var b__11870 = cljs.core.chunk_buffer.call(null,size__4293__auto__);if((function (){var i__11869 = (0);while(true){
if((i__11869 < size__4293__auto__))
{var x = cljs.core._nth.call(null,c__4292__auto__,i__11869);cljs.core.chunk_append.call(null,b__11870,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__11871 = (i__11869 + (1));
i__11869 = G__11871;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11870),iter__11867.call(null,cljs.core.chunk_rest.call(null,s__11868__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11870),null);
}
} else
{var x = cljs.core.first.call(null,s__11868__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__11867.call(null,cljs.core.rest.call(null,s__11868__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4294__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list11862);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list11872 = (function ordered_list11872(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4294__auto__ = (function iter__11877(s__11878){return (new cljs.core.LazySeq(null,(function (){var s__11878__$1 = s__11878;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11878__$1);if(temp__4126__auto__)
{var s__11878__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11878__$2))
{var c__4292__auto__ = cljs.core.chunk_first.call(null,s__11878__$2);var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);var b__11880 = cljs.core.chunk_buffer.call(null,size__4293__auto__);if((function (){var i__11879 = (0);while(true){
if((i__11879 < size__4293__auto__))
{var x = cljs.core._nth.call(null,c__4292__auto__,i__11879);cljs.core.chunk_append.call(null,b__11880,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__11881 = (i__11879 + (1));
i__11879 = G__11881;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11880),iter__11877.call(null,cljs.core.chunk_rest.call(null,s__11878__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11880),null);
}
} else
{var x = cljs.core.first.call(null,s__11878__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__11877.call(null,cljs.core.rest.call(null,s__11878__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4294__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list11872);
/**
* Create an image element.
*/
sablono.core.image11882 = (function() {
var image11882 = null;
var image11882__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image11882__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image11882 = function(src,alt){
switch(arguments.length){
case 1:
return image11882__1.call(this,src);
case 2:
return image11882__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image11882.cljs$core$IFn$_invoke$arity$1 = image11882__1;
image11882.cljs$core$IFn$_invoke$arity$2 = image11882__2;
return image11882;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image11882);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__11883_SHARP_,p2__11884_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11883_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__11884_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__11885_SHARP_,p2__11886_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11885_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__11886_SHARP_));
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
sablono.core.color_field11887 = (function() {
var color_field11887 = null;
var color_field11887__1 = (function (name__5044__auto__){return color_field11887.call(null,name__5044__auto__,null);
});
var color_field11887__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5044__auto__,value__5045__auto__);
});
color_field11887 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return color_field11887__1.call(this,name__5044__auto__);
case 2:
return color_field11887__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field11887.cljs$core$IFn$_invoke$arity$1 = color_field11887__1;
color_field11887.cljs$core$IFn$_invoke$arity$2 = color_field11887__2;
return color_field11887;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field11887);
/**
* Creates a date input field.
*/
sablono.core.date_field11888 = (function() {
var date_field11888 = null;
var date_field11888__1 = (function (name__5044__auto__){return date_field11888.call(null,name__5044__auto__,null);
});
var date_field11888__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5044__auto__,value__5045__auto__);
});
date_field11888 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return date_field11888__1.call(this,name__5044__auto__);
case 2:
return date_field11888__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field11888.cljs$core$IFn$_invoke$arity$1 = date_field11888__1;
date_field11888.cljs$core$IFn$_invoke$arity$2 = date_field11888__2;
return date_field11888;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field11888);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field11889 = (function() {
var datetime_field11889 = null;
var datetime_field11889__1 = (function (name__5044__auto__){return datetime_field11889.call(null,name__5044__auto__,null);
});
var datetime_field11889__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5044__auto__,value__5045__auto__);
});
datetime_field11889 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return datetime_field11889__1.call(this,name__5044__auto__);
case 2:
return datetime_field11889__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field11889.cljs$core$IFn$_invoke$arity$1 = datetime_field11889__1;
datetime_field11889.cljs$core$IFn$_invoke$arity$2 = datetime_field11889__2;
return datetime_field11889;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field11889);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field11890 = (function() {
var datetime_local_field11890 = null;
var datetime_local_field11890__1 = (function (name__5044__auto__){return datetime_local_field11890.call(null,name__5044__auto__,null);
});
var datetime_local_field11890__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5044__auto__,value__5045__auto__);
});
datetime_local_field11890 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return datetime_local_field11890__1.call(this,name__5044__auto__);
case 2:
return datetime_local_field11890__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field11890.cljs$core$IFn$_invoke$arity$1 = datetime_local_field11890__1;
datetime_local_field11890.cljs$core$IFn$_invoke$arity$2 = datetime_local_field11890__2;
return datetime_local_field11890;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field11890);
/**
* Creates a email input field.
*/
sablono.core.email_field11891 = (function() {
var email_field11891 = null;
var email_field11891__1 = (function (name__5044__auto__){return email_field11891.call(null,name__5044__auto__,null);
});
var email_field11891__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5044__auto__,value__5045__auto__);
});
email_field11891 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return email_field11891__1.call(this,name__5044__auto__);
case 2:
return email_field11891__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field11891.cljs$core$IFn$_invoke$arity$1 = email_field11891__1;
email_field11891.cljs$core$IFn$_invoke$arity$2 = email_field11891__2;
return email_field11891;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field11891);
/**
* Creates a file input field.
*/
sablono.core.file_field11892 = (function() {
var file_field11892 = null;
var file_field11892__1 = (function (name__5044__auto__){return file_field11892.call(null,name__5044__auto__,null);
});
var file_field11892__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5044__auto__,value__5045__auto__);
});
file_field11892 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return file_field11892__1.call(this,name__5044__auto__);
case 2:
return file_field11892__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field11892.cljs$core$IFn$_invoke$arity$1 = file_field11892__1;
file_field11892.cljs$core$IFn$_invoke$arity$2 = file_field11892__2;
return file_field11892;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field11892);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field11893 = (function() {
var hidden_field11893 = null;
var hidden_field11893__1 = (function (name__5044__auto__){return hidden_field11893.call(null,name__5044__auto__,null);
});
var hidden_field11893__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5044__auto__,value__5045__auto__);
});
hidden_field11893 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return hidden_field11893__1.call(this,name__5044__auto__);
case 2:
return hidden_field11893__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field11893.cljs$core$IFn$_invoke$arity$1 = hidden_field11893__1;
hidden_field11893.cljs$core$IFn$_invoke$arity$2 = hidden_field11893__2;
return hidden_field11893;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field11893);
/**
* Creates a month input field.
*/
sablono.core.month_field11894 = (function() {
var month_field11894 = null;
var month_field11894__1 = (function (name__5044__auto__){return month_field11894.call(null,name__5044__auto__,null);
});
var month_field11894__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5044__auto__,value__5045__auto__);
});
month_field11894 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return month_field11894__1.call(this,name__5044__auto__);
case 2:
return month_field11894__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field11894.cljs$core$IFn$_invoke$arity$1 = month_field11894__1;
month_field11894.cljs$core$IFn$_invoke$arity$2 = month_field11894__2;
return month_field11894;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field11894);
/**
* Creates a number input field.
*/
sablono.core.number_field11895 = (function() {
var number_field11895 = null;
var number_field11895__1 = (function (name__5044__auto__){return number_field11895.call(null,name__5044__auto__,null);
});
var number_field11895__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5044__auto__,value__5045__auto__);
});
number_field11895 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return number_field11895__1.call(this,name__5044__auto__);
case 2:
return number_field11895__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field11895.cljs$core$IFn$_invoke$arity$1 = number_field11895__1;
number_field11895.cljs$core$IFn$_invoke$arity$2 = number_field11895__2;
return number_field11895;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field11895);
/**
* Creates a password input field.
*/
sablono.core.password_field11896 = (function() {
var password_field11896 = null;
var password_field11896__1 = (function (name__5044__auto__){return password_field11896.call(null,name__5044__auto__,null);
});
var password_field11896__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5044__auto__,value__5045__auto__);
});
password_field11896 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return password_field11896__1.call(this,name__5044__auto__);
case 2:
return password_field11896__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field11896.cljs$core$IFn$_invoke$arity$1 = password_field11896__1;
password_field11896.cljs$core$IFn$_invoke$arity$2 = password_field11896__2;
return password_field11896;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field11896);
/**
* Creates a range input field.
*/
sablono.core.range_field11897 = (function() {
var range_field11897 = null;
var range_field11897__1 = (function (name__5044__auto__){return range_field11897.call(null,name__5044__auto__,null);
});
var range_field11897__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5044__auto__,value__5045__auto__);
});
range_field11897 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return range_field11897__1.call(this,name__5044__auto__);
case 2:
return range_field11897__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field11897.cljs$core$IFn$_invoke$arity$1 = range_field11897__1;
range_field11897.cljs$core$IFn$_invoke$arity$2 = range_field11897__2;
return range_field11897;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field11897);
/**
* Creates a search input field.
*/
sablono.core.search_field11898 = (function() {
var search_field11898 = null;
var search_field11898__1 = (function (name__5044__auto__){return search_field11898.call(null,name__5044__auto__,null);
});
var search_field11898__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5044__auto__,value__5045__auto__);
});
search_field11898 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return search_field11898__1.call(this,name__5044__auto__);
case 2:
return search_field11898__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field11898.cljs$core$IFn$_invoke$arity$1 = search_field11898__1;
search_field11898.cljs$core$IFn$_invoke$arity$2 = search_field11898__2;
return search_field11898;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field11898);
/**
* Creates a tel input field.
*/
sablono.core.tel_field11899 = (function() {
var tel_field11899 = null;
var tel_field11899__1 = (function (name__5044__auto__){return tel_field11899.call(null,name__5044__auto__,null);
});
var tel_field11899__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5044__auto__,value__5045__auto__);
});
tel_field11899 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return tel_field11899__1.call(this,name__5044__auto__);
case 2:
return tel_field11899__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field11899.cljs$core$IFn$_invoke$arity$1 = tel_field11899__1;
tel_field11899.cljs$core$IFn$_invoke$arity$2 = tel_field11899__2;
return tel_field11899;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field11899);
/**
* Creates a text input field.
*/
sablono.core.text_field11900 = (function() {
var text_field11900 = null;
var text_field11900__1 = (function (name__5044__auto__){return text_field11900.call(null,name__5044__auto__,null);
});
var text_field11900__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5044__auto__,value__5045__auto__);
});
text_field11900 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return text_field11900__1.call(this,name__5044__auto__);
case 2:
return text_field11900__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field11900.cljs$core$IFn$_invoke$arity$1 = text_field11900__1;
text_field11900.cljs$core$IFn$_invoke$arity$2 = text_field11900__2;
return text_field11900;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field11900);
/**
* Creates a time input field.
*/
sablono.core.time_field11901 = (function() {
var time_field11901 = null;
var time_field11901__1 = (function (name__5044__auto__){return time_field11901.call(null,name__5044__auto__,null);
});
var time_field11901__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5044__auto__,value__5045__auto__);
});
time_field11901 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return time_field11901__1.call(this,name__5044__auto__);
case 2:
return time_field11901__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field11901.cljs$core$IFn$_invoke$arity$1 = time_field11901__1;
time_field11901.cljs$core$IFn$_invoke$arity$2 = time_field11901__2;
return time_field11901;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field11901);
/**
* Creates a url input field.
*/
sablono.core.url_field11902 = (function() {
var url_field11902 = null;
var url_field11902__1 = (function (name__5044__auto__){return url_field11902.call(null,name__5044__auto__,null);
});
var url_field11902__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5044__auto__,value__5045__auto__);
});
url_field11902 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return url_field11902__1.call(this,name__5044__auto__);
case 2:
return url_field11902__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field11902.cljs$core$IFn$_invoke$arity$1 = url_field11902__1;
url_field11902.cljs$core$IFn$_invoke$arity$2 = url_field11902__2;
return url_field11902;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field11902);
/**
* Creates a week input field.
*/
sablono.core.week_field11903 = (function() {
var week_field11903 = null;
var week_field11903__1 = (function (name__5044__auto__){return week_field11903.call(null,name__5044__auto__,null);
});
var week_field11903__2 = (function (name__5044__auto__,value__5045__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5044__auto__,value__5045__auto__);
});
week_field11903 = function(name__5044__auto__,value__5045__auto__){
switch(arguments.length){
case 1:
return week_field11903__1.call(this,name__5044__auto__);
case 2:
return week_field11903__2.call(this,name__5044__auto__,value__5045__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field11903.cljs$core$IFn$_invoke$arity$1 = week_field11903__1;
week_field11903.cljs$core$IFn$_invoke$arity$2 = week_field11903__2;
return week_field11903;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field11903);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box11904 = (function() {
var check_box11904 = null;
var check_box11904__1 = (function (name){return check_box11904.call(null,name,null);
});
var check_box11904__2 = (function (name,checked_QMARK_){return check_box11904.call(null,name,checked_QMARK_,"true");
});
var check_box11904__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box11904 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box11904__1.call(this,name);
case 2:
return check_box11904__2.call(this,name,checked_QMARK_);
case 3:
return check_box11904__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box11904.cljs$core$IFn$_invoke$arity$1 = check_box11904__1;
check_box11904.cljs$core$IFn$_invoke$arity$2 = check_box11904__2;
check_box11904.cljs$core$IFn$_invoke$arity$3 = check_box11904__3;
return check_box11904;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box11904);
/**
* Creates a radio button.
*/
sablono.core.radio_button11905 = (function() {
var radio_button11905 = null;
var radio_button11905__1 = (function (group){return radio_button11905.call(null,group,null);
});
var radio_button11905__2 = (function (group,checked_QMARK_){return radio_button11905.call(null,group,checked_QMARK_,"true");
});
var radio_button11905__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button11905 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button11905__1.call(this,group);
case 2:
return radio_button11905__2.call(this,group,checked_QMARK_);
case 3:
return radio_button11905__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button11905.cljs$core$IFn$_invoke$arity$1 = radio_button11905__1;
radio_button11905.cljs$core$IFn$_invoke$arity$2 = radio_button11905__2;
radio_button11905.cljs$core$IFn$_invoke$arity$3 = radio_button11905__3;
return radio_button11905;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button11905);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options11906 = (function() {
var select_options11906 = null;
var select_options11906__1 = (function (coll){return select_options11906.call(null,coll,null);
});
var select_options11906__2 = (function (coll,selected){var iter__4294__auto__ = (function iter__11915(s__11916){return (new cljs.core.LazySeq(null,(function (){var s__11916__$1 = s__11916;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11916__$1);if(temp__4126__auto__)
{var s__11916__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11916__$2))
{var c__4292__auto__ = cljs.core.chunk_first.call(null,s__11916__$2);var size__4293__auto__ = cljs.core.count.call(null,c__4292__auto__);var b__11918 = cljs.core.chunk_buffer.call(null,size__4293__auto__);if((function (){var i__11917 = (0);while(true){
if((i__11917 < size__4293__auto__))
{var x = cljs.core._nth.call(null,c__4292__auto__,i__11917);cljs.core.chunk_append.call(null,b__11918,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11921 = x;var text = cljs.core.nth.call(null,vec__11921,(0),null);var val = cljs.core.nth.call(null,vec__11921,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__11921,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options11906.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__11923 = (i__11917 + (1));
i__11917 = G__11923;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11918),iter__11915.call(null,cljs.core.chunk_rest.call(null,s__11916__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11918),null);
}
} else
{var x = cljs.core.first.call(null,s__11916__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11922 = x;var text = cljs.core.nth.call(null,vec__11922,(0),null);var val = cljs.core.nth.call(null,vec__11922,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__11922,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options11906.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__11915.call(null,cljs.core.rest.call(null,s__11916__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4294__auto__.call(null,coll);
});
select_options11906 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options11906__1.call(this,coll);
case 2:
return select_options11906__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options11906.cljs$core$IFn$_invoke$arity$1 = select_options11906__1;
select_options11906.cljs$core$IFn$_invoke$arity$2 = select_options11906__2;
return select_options11906;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options11906);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down11924 = (function() {
var drop_down11924 = null;
var drop_down11924__2 = (function (name,options){return drop_down11924.call(null,name,options,null);
});
var drop_down11924__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down11924 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down11924__2.call(this,name,options);
case 3:
return drop_down11924__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down11924.cljs$core$IFn$_invoke$arity$2 = drop_down11924__2;
drop_down11924.cljs$core$IFn$_invoke$arity$3 = drop_down11924__3;
return drop_down11924;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down11924);
/**
* Creates a text area element.
*/
sablono.core.text_area11925 = (function() {
var text_area11925 = null;
var text_area11925__1 = (function (name){return text_area11925.call(null,name,null);
});
var text_area11925__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area11925 = function(name,value){
switch(arguments.length){
case 1:
return text_area11925__1.call(this,name);
case 2:
return text_area11925__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area11925.cljs$core$IFn$_invoke$arity$1 = text_area11925__1;
text_area11925.cljs$core$IFn$_invoke$arity$2 = text_area11925__2;
return text_area11925;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area11925);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label11926 = (function label11926(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label11926);
/**
* Creates a submit button.
*/
sablono.core.submit_button11927 = (function submit_button11927(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button11927);
/**
* Creates a form reset button.
*/
sablono.core.reset_button11928 = (function reset_button11928(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button11928);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to11929 = (function() { 
var form_to11929__delegate = function (p__11930,body){var vec__11932 = p__11930;var method = cljs.core.nth.call(null,vec__11932,(0),null);var action = cljs.core.nth.call(null,vec__11932,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to11929 = function (p__11930,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to11929__delegate.call(this,p__11930,body);};
form_to11929.cljs$lang$maxFixedArity = 1;
form_to11929.cljs$lang$applyTo = (function (arglist__11933){
var p__11930 = cljs.core.first(arglist__11933);
var body = cljs.core.rest(arglist__11933);
return form_to11929__delegate(p__11930,body);
});
form_to11929.cljs$core$IFn$_invoke$arity$variadic = form_to11929__delegate;
return form_to11929;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to11929);

//# sourceMappingURL=core.js.map