// Compiled by ClojureScript 0.0-2311
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__7976_7980 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__7977_7981 = null;var count__7978_7982 = (0);var i__7979_7983 = (0);while(true){
if((i__7979_7983 < count__7978_7982))
{var k_7984 = cljs.core._nth.call(null,chunk__7977_7981,i__7979_7983);var v_7985 = (b[k_7984]);(a[k_7984] = v_7985);
{
var G__7986 = seq__7976_7980;
var G__7987 = chunk__7977_7981;
var G__7988 = count__7978_7982;
var G__7989 = (i__7979_7983 + (1));
seq__7976_7980 = G__7986;
chunk__7977_7981 = G__7987;
count__7978_7982 = G__7988;
i__7979_7983 = G__7989;
continue;
}
} else
{var temp__4126__auto___7990 = cljs.core.seq.call(null,seq__7976_7980);if(temp__4126__auto___7990)
{var seq__7976_7991__$1 = temp__4126__auto___7990;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7976_7991__$1))
{var c__4309__auto___7992 = cljs.core.chunk_first.call(null,seq__7976_7991__$1);{
var G__7993 = cljs.core.chunk_rest.call(null,seq__7976_7991__$1);
var G__7994 = c__4309__auto___7992;
var G__7995 = cljs.core.count.call(null,c__4309__auto___7992);
var G__7996 = (0);
seq__7976_7980 = G__7993;
chunk__7977_7981 = G__7994;
count__7978_7982 = G__7995;
i__7979_7983 = G__7996;
continue;
}
} else
{var k_7997 = cljs.core.first.call(null,seq__7976_7991__$1);var v_7998 = (b[k_7997]);(a[k_7997] = v_7998);
{
var G__7999 = cljs.core.next.call(null,seq__7976_7991__$1);
var G__8000 = null;
var G__8001 = (0);
var G__8002 = (0);
seq__7976_7980 = G__7999;
chunk__7977_7981 = G__8000;
count__7978_7982 = G__8001;
i__7979_7983 = G__8002;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__8003 = (i + (2));
var G__8004 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__8003;
ret = G__8004;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__8005_8009 = cljs.core.seq.call(null,v);var chunk__8006_8010 = null;var count__8007_8011 = (0);var i__8008_8012 = (0);while(true){
if((i__8008_8012 < count__8007_8011))
{var x_8013 = cljs.core._nth.call(null,chunk__8006_8010,i__8008_8012);ret.push(x_8013);
{
var G__8014 = seq__8005_8009;
var G__8015 = chunk__8006_8010;
var G__8016 = count__8007_8011;
var G__8017 = (i__8008_8012 + (1));
seq__8005_8009 = G__8014;
chunk__8006_8010 = G__8015;
count__8007_8011 = G__8016;
i__8008_8012 = G__8017;
continue;
}
} else
{var temp__4126__auto___8018 = cljs.core.seq.call(null,seq__8005_8009);if(temp__4126__auto___8018)
{var seq__8005_8019__$1 = temp__4126__auto___8018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8005_8019__$1))
{var c__4309__auto___8020 = cljs.core.chunk_first.call(null,seq__8005_8019__$1);{
var G__8021 = cljs.core.chunk_rest.call(null,seq__8005_8019__$1);
var G__8022 = c__4309__auto___8020;
var G__8023 = cljs.core.count.call(null,c__4309__auto___8020);
var G__8024 = (0);
seq__8005_8009 = G__8021;
chunk__8006_8010 = G__8022;
count__8007_8011 = G__8023;
i__8008_8012 = G__8024;
continue;
}
} else
{var x_8025 = cljs.core.first.call(null,seq__8005_8019__$1);ret.push(x_8025);
{
var G__8026 = cljs.core.next.call(null,seq__8005_8019__$1);
var G__8027 = null;
var G__8028 = (0);
var G__8029 = (0);
seq__8005_8009 = G__8026;
chunk__8006_8010 = G__8027;
count__8007_8011 = G__8028;
i__8008_8012 = G__8029;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__8030_8034 = cljs.core.seq.call(null,v);var chunk__8031_8035 = null;var count__8032_8036 = (0);var i__8033_8037 = (0);while(true){
if((i__8033_8037 < count__8032_8036))
{var x_8038 = cljs.core._nth.call(null,chunk__8031_8035,i__8033_8037);ret.push(x_8038);
{
var G__8039 = seq__8030_8034;
var G__8040 = chunk__8031_8035;
var G__8041 = count__8032_8036;
var G__8042 = (i__8033_8037 + (1));
seq__8030_8034 = G__8039;
chunk__8031_8035 = G__8040;
count__8032_8036 = G__8041;
i__8033_8037 = G__8042;
continue;
}
} else
{var temp__4126__auto___8043 = cljs.core.seq.call(null,seq__8030_8034);if(temp__4126__auto___8043)
{var seq__8030_8044__$1 = temp__4126__auto___8043;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8030_8044__$1))
{var c__4309__auto___8045 = cljs.core.chunk_first.call(null,seq__8030_8044__$1);{
var G__8046 = cljs.core.chunk_rest.call(null,seq__8030_8044__$1);
var G__8047 = c__4309__auto___8045;
var G__8048 = cljs.core.count.call(null,c__4309__auto___8045);
var G__8049 = (0);
seq__8030_8034 = G__8046;
chunk__8031_8035 = G__8047;
count__8032_8036 = G__8048;
i__8033_8037 = G__8049;
continue;
}
} else
{var x_8050 = cljs.core.first.call(null,seq__8030_8044__$1);ret.push(x_8050);
{
var G__8051 = cljs.core.next.call(null,seq__8030_8044__$1);
var G__8052 = null;
var G__8053 = (0);
var G__8054 = (0);
seq__8030_8034 = G__8051;
chunk__8031_8035 = G__8052;
count__8032_8036 = G__8053;
i__8033_8037 = G__8054;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__8055_8059 = cljs.core.seq.call(null,v);var chunk__8056_8060 = null;var count__8057_8061 = (0);var i__8058_8062 = (0);while(true){
if((i__8058_8062 < count__8057_8061))
{var x_8063 = cljs.core._nth.call(null,chunk__8056_8060,i__8058_8062);ret.push(x_8063);
{
var G__8064 = seq__8055_8059;
var G__8065 = chunk__8056_8060;
var G__8066 = count__8057_8061;
var G__8067 = (i__8058_8062 + (1));
seq__8055_8059 = G__8064;
chunk__8056_8060 = G__8065;
count__8057_8061 = G__8066;
i__8058_8062 = G__8067;
continue;
}
} else
{var temp__4126__auto___8068 = cljs.core.seq.call(null,seq__8055_8059);if(temp__4126__auto___8068)
{var seq__8055_8069__$1 = temp__4126__auto___8068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8055_8069__$1))
{var c__4309__auto___8070 = cljs.core.chunk_first.call(null,seq__8055_8069__$1);{
var G__8071 = cljs.core.chunk_rest.call(null,seq__8055_8069__$1);
var G__8072 = c__4309__auto___8070;
var G__8073 = cljs.core.count.call(null,c__4309__auto___8070);
var G__8074 = (0);
seq__8055_8059 = G__8071;
chunk__8056_8060 = G__8072;
count__8057_8061 = G__8073;
i__8058_8062 = G__8074;
continue;
}
} else
{var x_8075 = cljs.core.first.call(null,seq__8055_8069__$1);ret.push(x_8075);
{
var G__8076 = cljs.core.next.call(null,seq__8055_8069__$1);
var G__8077 = null;
var G__8078 = (0);
var G__8079 = (0);
seq__8055_8059 = G__8076;
chunk__8056_8060 = G__8077;
count__8057_8061 = G__8078;
i__8058_8062 = G__8079;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
, "handlers": (function (){var x8089 = cljs.core.clone.call(null,handlers);x8089.forEach = ((function (x8089,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__8090 = cljs.core.seq.call(null,coll);var chunk__8091 = null;var count__8092 = (0);var i__8093 = (0);while(true){
if((i__8093 < count__8092))
{var vec__8094 = cljs.core._nth.call(null,chunk__8091,i__8093);var k = cljs.core.nth.call(null,vec__8094,(0),null);var v = cljs.core.nth.call(null,vec__8094,(1),null);f.call(null,v,k);
{
var G__8096 = seq__8090;
var G__8097 = chunk__8091;
var G__8098 = count__8092;
var G__8099 = (i__8093 + (1));
seq__8090 = G__8096;
chunk__8091 = G__8097;
count__8092 = G__8098;
i__8093 = G__8099;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8090);if(temp__4126__auto__)
{var seq__8090__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8090__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__8090__$1);{
var G__8100 = cljs.core.chunk_rest.call(null,seq__8090__$1);
var G__8101 = c__4309__auto__;
var G__8102 = cljs.core.count.call(null,c__4309__auto__);
var G__8103 = (0);
seq__8090 = G__8100;
chunk__8091 = G__8101;
count__8092 = G__8102;
i__8093 = G__8103;
continue;
}
} else
{var vec__8095 = cljs.core.first.call(null,seq__8090__$1);var k = cljs.core.nth.call(null,vec__8095,(0),null);var v = cljs.core.nth.call(null,vec__8095,(1),null);f.call(null,v,k);
{
var G__8104 = cljs.core.next.call(null,seq__8090__$1);
var G__8105 = null;
var G__8106 = (0);
var G__8107 = (0);
seq__8090 = G__8104;
chunk__8091 = G__8105;
count__8092 = G__8106;
i__8093 = G__8107;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x8089,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x8089;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__8088 = obj;G__8088.push(kfn.call(null,k),vfn.call(null,v));
return G__8088;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t8111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t8111 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta8112){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta8112 = meta8112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t8111.cljs$lang$type = true;
cognitect.transit.t8111.cljs$lang$ctorStr = "cognitect.transit/t8111";
cognitect.transit.t8111.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/t8111");
});
cognitect.transit.t8111.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t8111.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t8111.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t8111.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t8111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8113){var self__ = this;
var _8113__$1 = this;return self__.meta8112;
});
cognitect.transit.t8111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8113,meta8112__$1){var self__ = this;
var _8113__$1 = this;return (new cognitect.transit.t8111(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta8112__$1));
});
cognitect.transit.__GT_t8111 = (function __GT_t8111(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta8112){return (new cognitect.transit.t8111(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta8112));
});
}
return (new cognitect.transit.t8111(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map