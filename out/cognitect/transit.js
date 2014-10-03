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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__7986_7990 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__7987_7991 = null;var count__7988_7992 = (0);var i__7989_7993 = (0);while(true){
if((i__7989_7993 < count__7988_7992))
{var k_7994 = cljs.core._nth.call(null,chunk__7987_7991,i__7989_7993);var v_7995 = (b[k_7994]);(a[k_7994] = v_7995);
{
var G__7996 = seq__7986_7990;
var G__7997 = chunk__7987_7991;
var G__7998 = count__7988_7992;
var G__7999 = (i__7989_7993 + (1));
seq__7986_7990 = G__7996;
chunk__7987_7991 = G__7997;
count__7988_7992 = G__7998;
i__7989_7993 = G__7999;
continue;
}
} else
{var temp__4126__auto___8000 = cljs.core.seq.call(null,seq__7986_7990);if(temp__4126__auto___8000)
{var seq__7986_8001__$1 = temp__4126__auto___8000;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7986_8001__$1))
{var c__4309__auto___8002 = cljs.core.chunk_first.call(null,seq__7986_8001__$1);{
var G__8003 = cljs.core.chunk_rest.call(null,seq__7986_8001__$1);
var G__8004 = c__4309__auto___8002;
var G__8005 = cljs.core.count.call(null,c__4309__auto___8002);
var G__8006 = (0);
seq__7986_7990 = G__8003;
chunk__7987_7991 = G__8004;
count__7988_7992 = G__8005;
i__7989_7993 = G__8006;
continue;
}
} else
{var k_8007 = cljs.core.first.call(null,seq__7986_8001__$1);var v_8008 = (b[k_8007]);(a[k_8007] = v_8008);
{
var G__8009 = cljs.core.next.call(null,seq__7986_8001__$1);
var G__8010 = null;
var G__8011 = (0);
var G__8012 = (0);
seq__7986_7990 = G__8009;
chunk__7987_7991 = G__8010;
count__7988_7992 = G__8011;
i__7989_7993 = G__8012;
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
var G__8013 = (i + (2));
var G__8014 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__8013;
ret = G__8014;
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
var _ = this;var ret = [];var seq__8015_8019 = cljs.core.seq.call(null,v);var chunk__8016_8020 = null;var count__8017_8021 = (0);var i__8018_8022 = (0);while(true){
if((i__8018_8022 < count__8017_8021))
{var x_8023 = cljs.core._nth.call(null,chunk__8016_8020,i__8018_8022);ret.push(x_8023);
{
var G__8024 = seq__8015_8019;
var G__8025 = chunk__8016_8020;
var G__8026 = count__8017_8021;
var G__8027 = (i__8018_8022 + (1));
seq__8015_8019 = G__8024;
chunk__8016_8020 = G__8025;
count__8017_8021 = G__8026;
i__8018_8022 = G__8027;
continue;
}
} else
{var temp__4126__auto___8028 = cljs.core.seq.call(null,seq__8015_8019);if(temp__4126__auto___8028)
{var seq__8015_8029__$1 = temp__4126__auto___8028;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8015_8029__$1))
{var c__4309__auto___8030 = cljs.core.chunk_first.call(null,seq__8015_8029__$1);{
var G__8031 = cljs.core.chunk_rest.call(null,seq__8015_8029__$1);
var G__8032 = c__4309__auto___8030;
var G__8033 = cljs.core.count.call(null,c__4309__auto___8030);
var G__8034 = (0);
seq__8015_8019 = G__8031;
chunk__8016_8020 = G__8032;
count__8017_8021 = G__8033;
i__8018_8022 = G__8034;
continue;
}
} else
{var x_8035 = cljs.core.first.call(null,seq__8015_8029__$1);ret.push(x_8035);
{
var G__8036 = cljs.core.next.call(null,seq__8015_8029__$1);
var G__8037 = null;
var G__8038 = (0);
var G__8039 = (0);
seq__8015_8019 = G__8036;
chunk__8016_8020 = G__8037;
count__8017_8021 = G__8038;
i__8018_8022 = G__8039;
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
var _ = this;var ret = [];var seq__8040_8044 = cljs.core.seq.call(null,v);var chunk__8041_8045 = null;var count__8042_8046 = (0);var i__8043_8047 = (0);while(true){
if((i__8043_8047 < count__8042_8046))
{var x_8048 = cljs.core._nth.call(null,chunk__8041_8045,i__8043_8047);ret.push(x_8048);
{
var G__8049 = seq__8040_8044;
var G__8050 = chunk__8041_8045;
var G__8051 = count__8042_8046;
var G__8052 = (i__8043_8047 + (1));
seq__8040_8044 = G__8049;
chunk__8041_8045 = G__8050;
count__8042_8046 = G__8051;
i__8043_8047 = G__8052;
continue;
}
} else
{var temp__4126__auto___8053 = cljs.core.seq.call(null,seq__8040_8044);if(temp__4126__auto___8053)
{var seq__8040_8054__$1 = temp__4126__auto___8053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8040_8054__$1))
{var c__4309__auto___8055 = cljs.core.chunk_first.call(null,seq__8040_8054__$1);{
var G__8056 = cljs.core.chunk_rest.call(null,seq__8040_8054__$1);
var G__8057 = c__4309__auto___8055;
var G__8058 = cljs.core.count.call(null,c__4309__auto___8055);
var G__8059 = (0);
seq__8040_8044 = G__8056;
chunk__8041_8045 = G__8057;
count__8042_8046 = G__8058;
i__8043_8047 = G__8059;
continue;
}
} else
{var x_8060 = cljs.core.first.call(null,seq__8040_8054__$1);ret.push(x_8060);
{
var G__8061 = cljs.core.next.call(null,seq__8040_8054__$1);
var G__8062 = null;
var G__8063 = (0);
var G__8064 = (0);
seq__8040_8044 = G__8061;
chunk__8041_8045 = G__8062;
count__8042_8046 = G__8063;
i__8043_8047 = G__8064;
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
var _ = this;var ret = [];var seq__8065_8069 = cljs.core.seq.call(null,v);var chunk__8066_8070 = null;var count__8067_8071 = (0);var i__8068_8072 = (0);while(true){
if((i__8068_8072 < count__8067_8071))
{var x_8073 = cljs.core._nth.call(null,chunk__8066_8070,i__8068_8072);ret.push(x_8073);
{
var G__8074 = seq__8065_8069;
var G__8075 = chunk__8066_8070;
var G__8076 = count__8067_8071;
var G__8077 = (i__8068_8072 + (1));
seq__8065_8069 = G__8074;
chunk__8066_8070 = G__8075;
count__8067_8071 = G__8076;
i__8068_8072 = G__8077;
continue;
}
} else
{var temp__4126__auto___8078 = cljs.core.seq.call(null,seq__8065_8069);if(temp__4126__auto___8078)
{var seq__8065_8079__$1 = temp__4126__auto___8078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8065_8079__$1))
{var c__4309__auto___8080 = cljs.core.chunk_first.call(null,seq__8065_8079__$1);{
var G__8081 = cljs.core.chunk_rest.call(null,seq__8065_8079__$1);
var G__8082 = c__4309__auto___8080;
var G__8083 = cljs.core.count.call(null,c__4309__auto___8080);
var G__8084 = (0);
seq__8065_8069 = G__8081;
chunk__8066_8070 = G__8082;
count__8067_8071 = G__8083;
i__8068_8072 = G__8084;
continue;
}
} else
{var x_8085 = cljs.core.first.call(null,seq__8065_8079__$1);ret.push(x_8085);
{
var G__8086 = cljs.core.next.call(null,seq__8065_8079__$1);
var G__8087 = null;
var G__8088 = (0);
var G__8089 = (0);
seq__8065_8069 = G__8086;
chunk__8066_8070 = G__8087;
count__8067_8071 = G__8088;
i__8068_8072 = G__8089;
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
, "handlers": (function (){var x8099 = cljs.core.clone.call(null,handlers);x8099.forEach = ((function (x8099,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__8100 = cljs.core.seq.call(null,coll);var chunk__8101 = null;var count__8102 = (0);var i__8103 = (0);while(true){
if((i__8103 < count__8102))
{var vec__8104 = cljs.core._nth.call(null,chunk__8101,i__8103);var k = cljs.core.nth.call(null,vec__8104,(0),null);var v = cljs.core.nth.call(null,vec__8104,(1),null);f.call(null,v,k);
{
var G__8106 = seq__8100;
var G__8107 = chunk__8101;
var G__8108 = count__8102;
var G__8109 = (i__8103 + (1));
seq__8100 = G__8106;
chunk__8101 = G__8107;
count__8102 = G__8108;
i__8103 = G__8109;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8100);if(temp__4126__auto__)
{var seq__8100__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8100__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__8100__$1);{
var G__8110 = cljs.core.chunk_rest.call(null,seq__8100__$1);
var G__8111 = c__4309__auto__;
var G__8112 = cljs.core.count.call(null,c__4309__auto__);
var G__8113 = (0);
seq__8100 = G__8110;
chunk__8101 = G__8111;
count__8102 = G__8112;
i__8103 = G__8113;
continue;
}
} else
{var vec__8105 = cljs.core.first.call(null,seq__8100__$1);var k = cljs.core.nth.call(null,vec__8105,(0),null);var v = cljs.core.nth.call(null,vec__8105,(1),null);f.call(null,v,k);
{
var G__8114 = cljs.core.next.call(null,seq__8100__$1);
var G__8115 = null;
var G__8116 = (0);
var G__8117 = (0);
seq__8100 = G__8114;
chunk__8101 = G__8115;
count__8102 = G__8116;
i__8103 = G__8117;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x8099,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x8099;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__8098 = obj;G__8098.push(kfn.call(null,k),vfn.call(null,v));
return G__8098;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t8121 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t8121 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta8122){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta8122 = meta8122;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t8121.cljs$lang$type = true;
cognitect.transit.t8121.cljs$lang$ctorStr = "cognitect.transit/t8121";
cognitect.transit.t8121.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/t8121");
});
cognitect.transit.t8121.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t8121.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t8121.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t8121.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t8121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8123){var self__ = this;
var _8123__$1 = this;return self__.meta8122;
});
cognitect.transit.t8121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8123,meta8122__$1){var self__ = this;
var _8123__$1 = this;return (new cognitect.transit.t8121(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta8122__$1));
});
cognitect.transit.__GT_t8121 = (function __GT_t8121(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta8122){return (new cognitect.transit.t8121(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta8122));
});
}
return (new cognitect.transit.t8121(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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