// Compiled by ClojureScript 0.0-2311
goog.provide('csv_visualiser.ednschema');
goog.require('cljs.core');
csv_visualiser.ednschema.ppmap = (function ppmap(m){return ("{\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__6840_SHARP_){return ("  "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__6840_SHARP_))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__6840_SHARP_))+"\n");
}),m)))+"}\n");
});
csv_visualiser.ednschema.pp = (function pp(sch){var iter__4278__auto__ = (function iter__6845(s__6846){return (new cljs.core.LazySeq(null,(function (){var s__6846__$1 = s__6846;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6846__$1);if(temp__4126__auto__)
{var s__6846__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6846__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__6846__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__6848 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__6847 = (0);while(true){
if((i__6847 < size__4277__auto__))
{var schema = cljs.core._nth.call(null,c__4276__auto__,i__6847);cljs.core.chunk_append.call(null,b__6848,("\n;;"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,schema))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,csv_visualiser.ednschema.ppmap,schema)))));
{
var G__6849 = (i__6847 + (1));
i__6847 = G__6849;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6848),iter__6845.call(null,cljs.core.chunk_rest.call(null,s__6846__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6848),null);
}
} else
{var schema = cljs.core.first.call(null,s__6846__$2);return cljs.core.cons.call(null,("\n;;"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Keyword("db","ident","db/ident",-737096).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,schema))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,csv_visualiser.ednschema.ppmap,schema)))),iter__6845.call(null,cljs.core.rest.call(null,s__6846__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,sch);
});
csv_visualiser.ednschema.cardinality = (function cardinality(x){if(cljs.core.map_QMARK_.call(null,x))
{return new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190);
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234);
} else
{return new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190);

}
}
});
csv_visualiser.ednschema.is_object = (function is_object(x){if(cljs.core.map_QMARK_.call(null,x))
{return true;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,x));
} else
{return false;

}
}
});
csv_visualiser.ednschema.schema_type = (function schema_type(x){if(cljs.core.integer_QMARK_.call(null,x))
{return new cljs.core.Keyword("db.type","bigint","db.type/bigint",774640017);
} else
{if(typeof x === 'number')
{return new cljs.core.Keyword("db.type","bigdec","db.type/bigdec",1626126666);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079);
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return schema_type.call(null,cljs.core.first.call(null,x));
} else
{if(cljs.core._EQ_.call(null,Boolean,cljs.core.type.call(null,x)))
{return new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270);
} else
{return new cljs.core.Keyword("db.type","string","db.type/string",1432572808);

}
}
}
}
}
});
csv_visualiser.ednschema.attribute_schema = (function attribute_schema(parent_name,x){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),"#db/id[:db.part/db]",new cljs.core.Keyword("db","ident","db/ident",-737096),cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_name)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,x)))),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),csv_visualiser.ednschema.cardinality.call(null,cljs.core.second.call(null,x)),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),csv_visualiser.ednschema.schema_type.call(null,cljs.core.second.call(null,x)),new cljs.core.Keyword("db.install","_attribute","db.install/_attribute",1853441294),new cljs.core.Keyword("db.part","db","db.part/db",-2028116570)], null);
});
csv_visualiser.ednschema.embedded_schema = (function embedded_schema(root_schema_name,data){return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,csv_visualiser.ednschema.attribute_schema,root_schema_name),data));
});
csv_visualiser.ednschema.object_filter = (function object_filter(x){return (cljs.core.coll_QMARK_.call(null,x)) && (csv_visualiser.ednschema.is_object.call(null,cljs.core.second.call(null,x)));
});
csv_visualiser.ednschema.trim_plural = (function trim_plural(name){return name.substring((0),(cljs.core.count.call(null,name) - (1)));
});
csv_visualiser.ednschema.new_parent_name = (function new_parent_name(data){if(cljs.core.truth_((function (){var and__3541__auto__ = cljs.core.coll_QMARK_.call(null,cljs.core.second.call(null,data));if(and__3541__auto__)
{return cljs.core.first.call(null,data).endsWith("s");
} else
{return and__3541__auto__;
}
})()))
{return csv_visualiser.ednschema.trim_plural.call(null,cljs.core.first.call(null,data));
} else
{return cljs.core.first.call(null,data);
}
});
csv_visualiser.ednschema.external_schema = (function external_schema(data){var schema_func = (function (p1__6850_SHARP_){return csv_visualiser.ednschema.to_schema.call(null,csv_visualiser.ednschema.new_parent_name.call(null,p1__6850_SHARP_),cljs.core.second.call(null,p1__6850_SHARP_));
});return cljs.core.doall.call(null,cljs.core.map.call(null,schema_func,cljs.core.filter.call(null,csv_visualiser.ednschema.object_filter,data)));
});
csv_visualiser.ednschema.to_schema = (function to_schema(root_schema_name,data){if(cljs.core.map_QMARK_.call(null,data))
{return cljs.core.flatten.call(null,cljs.core.conj.call(null,csv_visualiser.ednschema.embedded_schema.call(null,root_schema_name,data),csv_visualiser.ednschema.external_schema.call(null,data)));
} else
{return to_schema.call(null,root_schema_name,cljs.core.first.call(null,data));
}
});

//# sourceMappingURL=ednschema.js.map