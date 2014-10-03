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
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__6729_6733 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__6730_6734 = null;var count__6731_6735 = (0);var i__6732_6736 = (0);while(true){
if((i__6732_6736 < count__6731_6735))
{var k_6737 = cljs.core._nth.call(null,chunk__6730_6734,i__6732_6736);var v_6738 = (b[k_6737]);(a[k_6737] = v_6738);
{
var G__6739 = seq__6729_6733;
var G__6740 = chunk__6730_6734;
var G__6741 = count__6731_6735;
var G__6742 = (i__6732_6736 + (1));
seq__6729_6733 = G__6739;
chunk__6730_6734 = G__6740;
count__6731_6735 = G__6741;
i__6732_6736 = G__6742;
continue;
}
} else
{var temp__4126__auto___6743 = cljs.core.seq.call(null,seq__6729_6733);if(temp__4126__auto___6743)
{var seq__6729_6744__$1 = temp__4126__auto___6743;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6729_6744__$1))
{var c__4309__auto___6745 = cljs.core.chunk_first.call(null,seq__6729_6744__$1);{
var G__6746 = cljs.core.chunk_rest.call(null,seq__6729_6744__$1);
var G__6747 = c__4309__auto___6745;
var G__6748 = cljs.core.count.call(null,c__4309__auto___6745);
var G__6749 = (0);
seq__6729_6733 = G__6746;
chunk__6730_6734 = G__6747;
count__6731_6735 = G__6748;
i__6732_6736 = G__6749;
continue;
}
} else
{var k_6750 = cljs.core.first.call(null,seq__6729_6744__$1);var v_6751 = (b[k_6750]);(a[k_6750] = v_6751);
{
var G__6752 = cljs.core.next.call(null,seq__6729_6744__$1);
var G__6753 = null;
var G__6754 = (0);
var G__6755 = (0);
seq__6729_6733 = G__6752;
chunk__6730_6734 = G__6753;
count__6731_6735 = G__6754;
i__6732_6736 = G__6755;
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
var G__6756 = (i + (2));
var G__6757 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__6756;
ret = G__6757;
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
var _ = this;var ret = [];var seq__6758_6762 = cljs.core.seq.call(null,v);var chunk__6759_6763 = null;var count__6760_6764 = (0);var i__6761_6765 = (0);while(true){
if((i__6761_6765 < count__6760_6764))
{var x_6766 = cljs.core._nth.call(null,chunk__6759_6763,i__6761_6765);ret.push(x_6766);
{
var G__6767 = seq__6758_6762;
var G__6768 = chunk__6759_6763;
var G__6769 = count__6760_6764;
var G__6770 = (i__6761_6765 + (1));
seq__6758_6762 = G__6767;
chunk__6759_6763 = G__6768;
count__6760_6764 = G__6769;
i__6761_6765 = G__6770;
continue;
}
} else
{var temp__4126__auto___6771 = cljs.core.seq.call(null,seq__6758_6762);if(temp__4126__auto___6771)
{var seq__6758_6772__$1 = temp__4126__auto___6771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6758_6772__$1))
{var c__4309__auto___6773 = cljs.core.chunk_first.call(null,seq__6758_6772__$1);{
var G__6774 = cljs.core.chunk_rest.call(null,seq__6758_6772__$1);
var G__6775 = c__4309__auto___6773;
var G__6776 = cljs.core.count.call(null,c__4309__auto___6773);
var G__6777 = (0);
seq__6758_6762 = G__6774;
chunk__6759_6763 = G__6775;
count__6760_6764 = G__6776;
i__6761_6765 = G__6777;
continue;
}
} else
{var x_6778 = cljs.core.first.call(null,seq__6758_6772__$1);ret.push(x_6778);
{
var G__6779 = cljs.core.next.call(null,seq__6758_6772__$1);
var G__6780 = null;
var G__6781 = (0);
var G__6782 = (0);
seq__6758_6762 = G__6779;
chunk__6759_6763 = G__6780;
count__6760_6764 = G__6781;
i__6761_6765 = G__6782;
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
var _ = this;var ret = [];var seq__6783_6787 = cljs.core.seq.call(null,v);var chunk__6784_6788 = null;var count__6785_6789 = (0);var i__6786_6790 = (0);while(true){
if((i__6786_6790 < count__6785_6789))
{var x_6791 = cljs.core._nth.call(null,chunk__6784_6788,i__6786_6790);ret.push(x_6791);
{
var G__6792 = seq__6783_6787;
var G__6793 = chunk__6784_6788;
var G__6794 = count__6785_6789;
var G__6795 = (i__6786_6790 + (1));
seq__6783_6787 = G__6792;
chunk__6784_6788 = G__6793;
count__6785_6789 = G__6794;
i__6786_6790 = G__6795;
continue;
}
} else
{var temp__4126__auto___6796 = cljs.core.seq.call(null,seq__6783_6787);if(temp__4126__auto___6796)
{var seq__6783_6797__$1 = temp__4126__auto___6796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6783_6797__$1))
{var c__4309__auto___6798 = cljs.core.chunk_first.call(null,seq__6783_6797__$1);{
var G__6799 = cljs.core.chunk_rest.call(null,seq__6783_6797__$1);
var G__6800 = c__4309__auto___6798;
var G__6801 = cljs.core.count.call(null,c__4309__auto___6798);
var G__6802 = (0);
seq__6783_6787 = G__6799;
chunk__6784_6788 = G__6800;
count__6785_6789 = G__6801;
i__6786_6790 = G__6802;
continue;
}
} else
{var x_6803 = cljs.core.first.call(null,seq__6783_6797__$1);ret.push(x_6803);
{
var G__6804 = cljs.core.next.call(null,seq__6783_6797__$1);
var G__6805 = null;
var G__6806 = (0);
var G__6807 = (0);
seq__6783_6787 = G__6804;
chunk__6784_6788 = G__6805;
count__6785_6789 = G__6806;
i__6786_6790 = G__6807;
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
var _ = this;var ret = [];var seq__6808_6812 = cljs.core.seq.call(null,v);var chunk__6809_6813 = null;var count__6810_6814 = (0);var i__6811_6815 = (0);while(true){
if((i__6811_6815 < count__6810_6814))
{var x_6816 = cljs.core._nth.call(null,chunk__6809_6813,i__6811_6815);ret.push(x_6816);
{
var G__6817 = seq__6808_6812;
var G__6818 = chunk__6809_6813;
var G__6819 = count__6810_6814;
var G__6820 = (i__6811_6815 + (1));
seq__6808_6812 = G__6817;
chunk__6809_6813 = G__6818;
count__6810_6814 = G__6819;
i__6811_6815 = G__6820;
continue;
}
} else
{var temp__4126__auto___6821 = cljs.core.seq.call(null,seq__6808_6812);if(temp__4126__auto___6821)
{var seq__6808_6822__$1 = temp__4126__auto___6821;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6808_6822__$1))
{var c__4309__auto___6823 = cljs.core.chunk_first.call(null,seq__6808_6822__$1);{
var G__6824 = cljs.core.chunk_rest.call(null,seq__6808_6822__$1);
var G__6825 = c__4309__auto___6823;
var G__6826 = cljs.core.count.call(null,c__4309__auto___6823);
var G__6827 = (0);
seq__6808_6812 = G__6824;
chunk__6809_6813 = G__6825;
count__6810_6814 = G__6826;
i__6811_6815 = G__6827;
continue;
}
} else
{var x_6828 = cljs.core.first.call(null,seq__6808_6822__$1);ret.push(x_6828);
{
var G__6829 = cljs.core.next.call(null,seq__6808_6822__$1);
var G__6830 = null;
var G__6831 = (0);
var G__6832 = (0);
seq__6808_6812 = G__6829;
chunk__6809_6813 = G__6830;
count__6810_6814 = G__6831;
i__6811_6815 = G__6832;
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
, "handlers": (function (){var x6842 = cljs.core.clone.call(null,handlers);x6842.forEach = ((function (x6842,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (f){var coll = this;var seq__6843 = cljs.core.seq.call(null,coll);var chunk__6844 = null;var count__6845 = (0);var i__6846 = (0);while(true){
if((i__6846 < count__6845))
{var vec__6847 = cljs.core._nth.call(null,chunk__6844,i__6846);var k = cljs.core.nth.call(null,vec__6847,(0),null);var v = cljs.core.nth.call(null,vec__6847,(1),null);f.call(null,v,k);
{
var G__6849 = seq__6843;
var G__6850 = chunk__6844;
var G__6851 = count__6845;
var G__6852 = (i__6846 + (1));
seq__6843 = G__6849;
chunk__6844 = G__6850;
count__6845 = G__6851;
i__6846 = G__6852;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6843);if(temp__4126__auto__)
{var seq__6843__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6843__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__6843__$1);{
var G__6853 = cljs.core.chunk_rest.call(null,seq__6843__$1);
var G__6854 = c__4309__auto__;
var G__6855 = cljs.core.count.call(null,c__4309__auto__);
var G__6856 = (0);
seq__6843 = G__6853;
chunk__6844 = G__6854;
count__6845 = G__6855;
i__6846 = G__6856;
continue;
}
} else
{var vec__6848 = cljs.core.first.call(null,seq__6843__$1);var k = cljs.core.nth.call(null,vec__6848,(0),null);var v = cljs.core.nth.call(null,vec__6848,(1),null);f.call(null,v,k);
{
var G__6857 = cljs.core.next.call(null,seq__6843__$1);
var G__6858 = null;
var G__6859 = (0);
var G__6860 = (0);
seq__6843 = G__6857;
chunk__6844 = G__6858;
count__6845 = G__6859;
i__6846 = G__6860;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x6842,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers))
;
return x6842;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,handlers){
return (function (obj,k,v){var G__6841 = obj;G__6841.push(kfn.call(null,k),vfn.call(null,v));
return G__6841;
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
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t6864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t6864 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta6865){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta6865 = meta6865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t6864.cljs$lang$type = true;
cognitect.transit.t6864.cljs$lang$ctorStr = "cognitect.transit/t6864";
cognitect.transit.t6864.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cognitect.transit/t6864");
});
cognitect.transit.t6864.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t6864.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t6864.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t6864.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t6864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6866){var self__ = this;
var _6866__$1 = this;return self__.meta6865;
});
cognitect.transit.t6864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6866,meta6865__$1){var self__ = this;
var _6866__$1 = this;return (new cognitect.transit.t6864(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta6865__$1));
});
cognitect.transit.__GT_t6864 = (function __GT_t6864(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6865){return (new cognitect.transit.t6864(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta6865));
});
}
return (new cognitect.transit.t6864(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
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