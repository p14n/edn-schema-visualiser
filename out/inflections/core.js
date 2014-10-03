// Compiled by ClojureScript 0.0-2311
goog.provide('inflections.core');
goog.require('cljs.core');
goog.require('no.en.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('no.en.core');
goog.require('clojure.walk');
goog.require('clojure.string');

/**
* @constructor
* @param {*} pattern
* @param {*} replacement
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
inflections.core.Rule = (function (pattern,replacement,__meta,__extmap){
this.pattern = pattern;
this.replacement = replacement;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
inflections.core.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4139__auto__,k__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;return cljs.core._lookup.call(null,this__4139__auto____$1,k__4140__auto__,null);
});
inflections.core.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4141__auto__,k8761,else__4142__auto__){var self__ = this;
var this__4141__auto____$1 = this;var G__8763 = (((k8761 instanceof cljs.core.Keyword))?k8761.fqn:null);switch (G__8763) {
case "replacement":
return self__.replacement;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k8761,else__4142__auto__);

}
});
inflections.core.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4153__auto__,writer__4154__auto__,opts__4155__auto__){var self__ = this;
var this__4153__auto____$1 = this;var pr_pair__4156__auto__ = ((function (this__4153__auto____$1){
return (function (keyval__4157__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,cljs.core.pr_writer,""," ","",opts__4155__auto__,keyval__4157__auto__);
});})(this__4153__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4154__auto__,pr_pair__4156__auto__,"#inflections.core.Rule{",", ","}",opts__4155__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"replacement","replacement",-1836238839),self__.replacement],null))], null),self__.__extmap));
});
inflections.core.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4137__auto__){var self__ = this;
var this__4137__auto____$1 = this;return self__.__meta;
});
inflections.core.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4133__auto__){var self__ = this;
var this__4133__auto____$1 = this;return (new inflections.core.Rule(self__.pattern,self__.replacement,self__.__meta,self__.__extmap,self__.__hash));
});
inflections.core.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4143__auto__){var self__ = this;
var this__4143__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
inflections.core.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4134__auto__){var self__ = this;
var this__4134__auto____$1 = this;var h__3964__auto__ = self__.__hash;if(!((h__3964__auto__ == null)))
{return h__3964__auto__;
} else
{var h__3964__auto____$1 = cljs.core.hash_imap.call(null,this__4134__auto____$1);self__.__hash = h__3964__auto____$1;
return h__3964__auto____$1;
}
});
inflections.core.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4135__auto__,other__4136__auto__){var self__ = this;
var this__4135__auto____$1 = this;if(cljs.core.truth_((function (){var and__3541__auto__ = other__4136__auto__;if(cljs.core.truth_(and__3541__auto__))
{return ((this__4135__auto____$1.constructor === other__4136__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4135__auto____$1,other__4136__auto__));
} else
{return and__3541__auto__;
}
})()))
{return true;
} else
{return false;
}
});
inflections.core.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4148__auto__,k__4149__auto__){var self__ = this;
var this__4148__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"replacement","replacement",-1836238839),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__4149__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4148__auto____$1),self__.__meta),k__4149__auto__);
} else
{return (new inflections.core.Rule(self__.pattern,self__.replacement,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4149__auto__)),null));
}
});
inflections.core.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4146__auto__,k__4147__auto__,G__8760){var self__ = this;
var this__4146__auto____$1 = this;var pred__8764 = cljs.core.keyword_identical_QMARK_;var expr__8765 = k__4147__auto__;if(cljs.core.truth_(pred__8764.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__8765)))
{return (new inflections.core.Rule(G__8760,self__.replacement,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__8764.call(null,new cljs.core.Keyword(null,"replacement","replacement",-1836238839),expr__8765)))
{return (new inflections.core.Rule(self__.pattern,G__8760,self__.__meta,self__.__extmap,null));
} else
{return (new inflections.core.Rule(self__.pattern,self__.replacement,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4147__auto__,G__8760),null));
}
}
});
inflections.core.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4151__auto__){var self__ = this;
var this__4151__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"replacement","replacement",-1836238839),self__.replacement],null))], null),self__.__extmap));
});
inflections.core.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4138__auto__,G__8760){var self__ = this;
var this__4138__auto____$1 = this;return (new inflections.core.Rule(self__.pattern,self__.replacement,G__8760,self__.__extmap,self__.__hash));
});
inflections.core.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4144__auto__,entry__4145__auto__){var self__ = this;
var this__4144__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4145__auto__))
{return cljs.core._assoc.call(null,this__4144__auto____$1,cljs.core._nth.call(null,entry__4145__auto__,(0)),cljs.core._nth.call(null,entry__4145__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4144__auto____$1,entry__4145__auto__);
}
});
inflections.core.Rule.cljs$lang$type = true;
inflections.core.Rule.cljs$lang$ctorPrSeq = (function (this__4173__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"inflections.core/Rule");
});
inflections.core.Rule.cljs$lang$ctorPrWriter = (function (this__4173__auto__,writer__4174__auto__){return cljs.core._write.call(null,writer__4174__auto__,"inflections.core/Rule");
});
inflections.core.__GT_Rule = (function __GT_Rule(pattern,replacement){return (new inflections.core.Rule(pattern,replacement));
});
inflections.core.map__GT_Rule = (function map__GT_Rule(G__8762){return (new inflections.core.Rule(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__8762),new cljs.core.Keyword(null,"replacement","replacement",-1836238839).cljs$core$IFn$_invoke$arity$1(G__8762),null,cljs.core.dissoc.call(null,G__8762,new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"replacement","replacement",-1836238839))));
});
inflections.core.add_rule_BANG_ = (function add_rule_BANG_(rules,rule){if(!(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,rules)),rule)))
{return cljs.core.swap_BANG_.call(null,rules,cljs.core.conj,rule);
} else
{return null;
}
});
/**
* Returns a seq of rules, where the pattern and replacement must be
* given in pairs of two elements.
* @param {...*} var_args
*/
inflections.core.slurp_rules = (function() { 
var slurp_rules__delegate = function (patterns_and_replacements){return cljs.core.map.call(null,(function (p1__8768_SHARP_){return cljs.core.apply.call(null,inflections.core.__GT_Rule,p1__8768_SHARP_);
}),cljs.core.partition.call(null,(2),patterns_and_replacements));
};
var slurp_rules = function (var_args){
var patterns_and_replacements = null;if (arguments.length > 0) {
  patterns_and_replacements = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return slurp_rules__delegate.call(this,patterns_and_replacements);};
slurp_rules.cljs$lang$maxFixedArity = 0;
slurp_rules.cljs$lang$applyTo = (function (arglist__8769){
var patterns_and_replacements = cljs.core.seq(arglist__8769);
return slurp_rules__delegate(patterns_and_replacements);
});
slurp_rules.cljs$core$IFn$_invoke$arity$variadic = slurp_rules__delegate;
return slurp_rules;
})()
;
inflections.core.resolve_rule = (function resolve_rule(rule,word){var pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(rule);var replacement = new cljs.core.Keyword(null,"replacement","replacement",-1836238839).cljs$core$IFn$_invoke$arity$1(rule);if(cljs.core.truth_(cljs.core.re_find.call(null,pattern,word)))
{return clojure.string.replace.call(null,word,pattern,replacement);
} else
{return null;
}
});
inflections.core.resolve_rules = (function resolve_rules(rules,word){return cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__8770_SHARP_){return inflections.core.resolve_rule.call(null,p1__8770_SHARP_,word);
}),rules)));
});
/**
* Resets the list of plural rules.
*/
inflections.core.reset_rules_BANG_ = (function reset_rules_BANG_(rules){return cljs.core.reset_BANG_.call(null,rules,cljs.core.PersistentVector.EMPTY);
});
inflections.core._STAR_uncountable_words_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 81, ["gossip",null,"sadness",null,"space",null,"happiness",null,"blood",null,"silver",null,"cotton",null,"species",null,"mist",null,"paper",null,"education",null,"wine",null,"up",null,"food",null,"sugar",null,"gold",null,"literature",null,"pork",null,"lightning",null,"sheep",null,"shopping",null,"fresh",null,"news",null,"pepper",null,"experience",null,"milk",null,"honey",null,"oxygen",null,"fiction",null,"luck",null,"vinegar",null,"coffee",null,"ground",null,"peanut",null,"confusion",null,"tennis",null,"power",null,"meat",null,"butter",null,"music",null,"luggage",null,"love",null,"grass",null,"knowledge",null,"time",null,"cheese",null,"jam",null,"thunder",null,"electricity",null,"gum",null,"sunshine",null,"history",null,"snow",null,"money",null,"wool",null,"rice",null,"series",null,"liquid",null,"equipment",null,"pressure",null,"oil",null,"information",null,"steam",null,"chewing",null,"petrol",null,"research",null,"patience",null,"toothpaste",null,"speed",null,"entertainment",null,"wood",null,"tea",null,"art",null,"washing",null,"forgiveness",null,"traffic",null,"alcohol",null,"ice",null,"homework",null,"fish",null,"air",null], null), null));
inflections.core.ICountable = (function (){var obj8772 = {};return obj8772;
})();
inflections.core.countable_QMARK_ = (function countable_QMARK_(x){if((function (){var and__3541__auto__ = x;if(and__3541__auto__)
{return x.inflections$core$ICountable$countable_QMARK_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return x.inflections$core$ICountable$countable_QMARK_$arity$1(x);
} else
{var x__4180__auto__ = (((x == null))?null:x);return (function (){var or__3553__auto__ = (inflections.core.countable_QMARK_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (inflections.core.countable_QMARK_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICountable.countable?",x);
}
}
})().call(null,x);
}
});
/**
* Returns true if `x` is uncountable, otherwise false.
*/
inflections.core.uncountable_QMARK_ = (function uncountable_QMARK_(x){return cljs.core.not.call(null,inflections.core.countable_QMARK_.call(null,x));
});
/**
* Adds `word` to the set of `*uncountable-words*`.
*/
inflections.core.add_uncountable_BANG_ = (function add_uncountable_BANG_(word){return cljs.core.swap_BANG_.call(null,inflections.core._STAR_uncountable_words_STAR_,cljs.core.conj,clojure.string.lower_case.call(null,cljs.core.name.call(null,word)));
});
/**
* Delete `word` from the set of `*uncountable-words*`.
*/
inflections.core.delete_uncountable_BANG_ = (function delete_uncountable_BANG_(word){return cljs.core.swap_BANG_.call(null,inflections.core._STAR_uncountable_words_STAR_,cljs.core.disj,clojure.string.lower_case.call(null,cljs.core.name.call(null,word)));
});
(inflections.core.ICountable["string"] = true);
(inflections.core.countable_QMARK_["string"] = (function (s){return !(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,inflections.core._STAR_uncountable_words_STAR_),clojure.string.lower_case.call(null,s)));
}));
cljs.core.Symbol.prototype.inflections$core$ICountable$ = true;
cljs.core.Symbol.prototype.inflections$core$ICountable$countable_QMARK_$arity$1 = (function (s){var s__$1 = this;return inflections.core.countable_QMARK_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1)));
});
cljs.core.Keyword.prototype.inflections$core$ICountable$ = true;
cljs.core.Keyword.prototype.inflections$core$ICountable$countable_QMARK_$arity$1 = (function (s){var s__$1 = this;return inflections.core.countable_QMARK_.call(null,cljs.core.name.call(null,s__$1));
});
inflections.core._STAR_plural_rules_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
inflections.core.Plural = (function (){var obj8774 = {};return obj8774;
})();
inflections.core.plural = (function plural(x){if((function (){var and__3541__auto__ = x;if(and__3541__auto__)
{return x.inflections$core$Plural$plural$arity$1;
} else
{return and__3541__auto__;
}
})())
{return x.inflections$core$Plural$plural$arity$1(x);
} else
{var x__4180__auto__ = (((x == null))?null:x);return (function (){var or__3553__auto__ = (inflections.core.plural[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (inflections.core.plural["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Plural.plural",x);
}
}
})().call(null,x);
}
});
(inflections.core.Plural["string"] = true);
(inflections.core.plural["string"] = (function (s){if(cljs.core.truth_((function (){var or__3553__auto__ = clojure.string.blank_QMARK_.call(null,s);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return inflections.core.uncountable_QMARK_.call(null,s);
}
})()))
{return s;
} else
{return inflections.core.resolve_rules.call(null,cljs.core.rseq.call(null,cljs.core.deref.call(null,inflections.core._STAR_plural_rules_STAR_)),s);
}
}));
cljs.core.Symbol.prototype.inflections$core$Plural$ = true;
cljs.core.Symbol.prototype.inflections$core$Plural$plural$arity$1 = (function (k){var k__$1 = this;return cljs.core.symbol.call(null,inflections.core.plural.call(null,cljs.core.name.call(null,k__$1)));
});
cljs.core.Keyword.prototype.inflections$core$Plural$ = true;
cljs.core.Keyword.prototype.inflections$core$Plural$plural$arity$1 = (function (k){var k__$1 = this;return cljs.core.keyword.call(null,inflections.core.plural.call(null,cljs.core.name.call(null,k__$1)));
});
/**
* Define rule(s) to map words from singular to plural.
* 
* Examples: (plural! #"$(?i)" "s")
* (plural! #"(ax|test)is$(?i)" "$1es"
* #"(octop|vir)us$(?i)" "$1i")
* @param {...*} var_args
*/
inflections.core.plural_BANG_ = (function() { 
var plural_BANG___delegate = function (patterns_and_replacements){var seq__8779 = cljs.core.seq.call(null,cljs.core.apply.call(null,inflections.core.slurp_rules,patterns_and_replacements));var chunk__8780 = null;var count__8781 = (0);var i__8782 = (0);while(true){
if((i__8782 < count__8781))
{var rule = cljs.core._nth.call(null,chunk__8780,i__8782);inflections.core.add_rule_BANG_.call(null,inflections.core._STAR_plural_rules_STAR_,rule);
{
var G__8783 = seq__8779;
var G__8784 = chunk__8780;
var G__8785 = count__8781;
var G__8786 = (i__8782 + (1));
seq__8779 = G__8783;
chunk__8780 = G__8784;
count__8781 = G__8785;
i__8782 = G__8786;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8779);if(temp__4126__auto__)
{var seq__8779__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8779__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__8779__$1);{
var G__8787 = cljs.core.chunk_rest.call(null,seq__8779__$1);
var G__8788 = c__4309__auto__;
var G__8789 = cljs.core.count.call(null,c__4309__auto__);
var G__8790 = (0);
seq__8779 = G__8787;
chunk__8780 = G__8788;
count__8781 = G__8789;
i__8782 = G__8790;
continue;
}
} else
{var rule = cljs.core.first.call(null,seq__8779__$1);inflections.core.add_rule_BANG_.call(null,inflections.core._STAR_plural_rules_STAR_,rule);
{
var G__8791 = cljs.core.next.call(null,seq__8779__$1);
var G__8792 = null;
var G__8793 = (0);
var G__8794 = (0);
seq__8779 = G__8791;
chunk__8780 = G__8792;
count__8781 = G__8793;
i__8782 = G__8794;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var plural_BANG_ = function (var_args){
var patterns_and_replacements = null;if (arguments.length > 0) {
  patterns_and_replacements = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return plural_BANG___delegate.call(this,patterns_and_replacements);};
plural_BANG_.cljs$lang$maxFixedArity = 0;
plural_BANG_.cljs$lang$applyTo = (function (arglist__8795){
var patterns_and_replacements = cljs.core.seq(arglist__8795);
return plural_BANG___delegate(patterns_and_replacements);
});
plural_BANG_.cljs$core$IFn$_invoke$arity$variadic = plural_BANG___delegate;
return plural_BANG_;
})()
;
inflections.core.init_plural_rules_BANG_ = (function init_plural_rules_BANG_(){return inflections.core.plural_BANG_.call(null,/$/i,"s",/s$/i,"s",/(ax|test)is$/i,"$1es",/(octop|vir)us$/i,"$1i",/(alias|status)$/i,"$1es",/(bu)s$/i,"$1ses",/(buffal|tomat)o$/i,"$1oes",/([ti])um$/i,"$1a",/sis$/i,"ses",/(?:([^f])fe|([lr])f)$/i,"$1$2ves",/(hive)$/i,"$1s",/([^aeiouy]|qu)y$/i,"$1ies",/(x|ch|ss|sh)$/i,"$1es",/(matr|vert|ind)(?:ix|ex)$/i,"$1ices",/([m|l])ouse$/i,"$1ice",/^(ox)$/i,"$1en",/(quiz)$/i,"$1zes");
});
inflections.core._STAR_singular_rules_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
inflections.core.Singular = (function (){var obj8797 = {};return obj8797;
})();
inflections.core.singular = (function singular(x){if((function (){var and__3541__auto__ = x;if(and__3541__auto__)
{return x.inflections$core$Singular$singular$arity$1;
} else
{return and__3541__auto__;
}
})())
{return x.inflections$core$Singular$singular$arity$1(x);
} else
{var x__4180__auto__ = (((x == null))?null:x);return (function (){var or__3553__auto__ = (inflections.core.singular[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (inflections.core.singular["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Singular.singular",x);
}
}
})().call(null,x);
}
});
(inflections.core.Singular["string"] = true);
(inflections.core.singular["string"] = (function (s){if(inflections.core.uncountable_QMARK_.call(null,s))
{return s;
} else
{var or__3553__auto__ = inflections.core.resolve_rules.call(null,cljs.core.rseq.call(null,cljs.core.deref.call(null,inflections.core._STAR_singular_rules_STAR_)),s);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return s;
}
}
}));
cljs.core.Symbol.prototype.inflections$core$Singular$ = true;
cljs.core.Symbol.prototype.inflections$core$Singular$singular$arity$1 = (function (k){var k__$1 = this;return cljs.core.symbol.call(null,inflections.core.singular.call(null,cljs.core.name.call(null,k__$1)));
});
cljs.core.Keyword.prototype.inflections$core$Singular$ = true;
cljs.core.Keyword.prototype.inflections$core$Singular$singular$arity$1 = (function (k){var k__$1 = this;return cljs.core.keyword.call(null,inflections.core.singular.call(null,cljs.core.name.call(null,k__$1)));
});
/**
* Define rule(s) to map words from singular to plural.
* 
* Examples: (singular! #"(n)ews$(?i)" "$1ews")
* (singular! #"(m)ovies$(?i)" "$1ovie"
* #"([m|l])ice$(?i)" "$1ouse")
* @param {...*} var_args
*/
inflections.core.singular_BANG_ = (function() { 
var singular_BANG___delegate = function (patterns_and_replacements){var seq__8802 = cljs.core.seq.call(null,cljs.core.apply.call(null,inflections.core.slurp_rules,patterns_and_replacements));var chunk__8803 = null;var count__8804 = (0);var i__8805 = (0);while(true){
if((i__8805 < count__8804))
{var rule = cljs.core._nth.call(null,chunk__8803,i__8805);inflections.core.add_rule_BANG_.call(null,inflections.core._STAR_singular_rules_STAR_,rule);
{
var G__8806 = seq__8802;
var G__8807 = chunk__8803;
var G__8808 = count__8804;
var G__8809 = (i__8805 + (1));
seq__8802 = G__8806;
chunk__8803 = G__8807;
count__8804 = G__8808;
i__8805 = G__8809;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8802);if(temp__4126__auto__)
{var seq__8802__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8802__$1))
{var c__4309__auto__ = cljs.core.chunk_first.call(null,seq__8802__$1);{
var G__8810 = cljs.core.chunk_rest.call(null,seq__8802__$1);
var G__8811 = c__4309__auto__;
var G__8812 = cljs.core.count.call(null,c__4309__auto__);
var G__8813 = (0);
seq__8802 = G__8810;
chunk__8803 = G__8811;
count__8804 = G__8812;
i__8805 = G__8813;
continue;
}
} else
{var rule = cljs.core.first.call(null,seq__8802__$1);inflections.core.add_rule_BANG_.call(null,inflections.core._STAR_singular_rules_STAR_,rule);
{
var G__8814 = cljs.core.next.call(null,seq__8802__$1);
var G__8815 = null;
var G__8816 = (0);
var G__8817 = (0);
seq__8802 = G__8814;
chunk__8803 = G__8815;
count__8804 = G__8816;
i__8805 = G__8817;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var singular_BANG_ = function (var_args){
var patterns_and_replacements = null;if (arguments.length > 0) {
  patterns_and_replacements = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return singular_BANG___delegate.call(this,patterns_and_replacements);};
singular_BANG_.cljs$lang$maxFixedArity = 0;
singular_BANG_.cljs$lang$applyTo = (function (arglist__8818){
var patterns_and_replacements = cljs.core.seq(arglist__8818);
return singular_BANG___delegate(patterns_and_replacements);
});
singular_BANG_.cljs$core$IFn$_invoke$arity$variadic = singular_BANG___delegate;
return singular_BANG_;
})()
;
inflections.core.init_singular_rules_BANG_ = (function init_singular_rules_BANG_(){return inflections.core.singular_BANG_.call(null,/s$/i,"",/(ss)$/i,"$1",/(n)ews$/i,"$1ews",/([ti])a$/i,"$1um",/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1$2sis",/(^analy)(sis|ses)$/i,"$1sis",/([^f])ves$/i,"$1fe",/(hive)s$/i,"$1",/(tive)s$/i,"$1",/([lr])ves$/i,"$1f",/([^aeiouy]|qu)ies$/i,"$1y",/(s)eries$/i,"$1eries",/(m)ovies$/i,"$1ovie",/(x|ch|ss|sh)es$/i,"$1",/([m|l])ice$/i,"$1ouse",/(bus)(es)?$/i,"$1",/(o)es$/i,"$1",/(shoe)s$/i,"$1",/(cris|ax|test)(is|es)$/i,"$1is",/(octop|vir)(us|i)$/i,"$1us",/(alias|status)(es)?$/i,"$1",/^(ox)en/i,"$1",/(vert|ind)ices$/i,"$1ex",/(matr)ices$/i,"$1ix",/(quiz)zes$/i,"$1",/(database)s$/i,"$1");
});
inflections.core._STAR_irregular_words_STAR_ = cljs.core.atom.call(null,cljs.core.sorted_set.call(null));
inflections.core.Irregular = (function (){var obj8820 = {};return obj8820;
})();
inflections.core.irregular_QMARK_ = (function irregular_QMARK_(x){if((function (){var and__3541__auto__ = x;if(and__3541__auto__)
{return x.inflections$core$Irregular$irregular_QMARK_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return x.inflections$core$Irregular$irregular_QMARK_$arity$1(x);
} else
{var x__4180__auto__ = (((x == null))?null:x);return (function (){var or__3553__auto__ = (inflections.core.irregular_QMARK_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (inflections.core.irregular_QMARK_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Irregular.irregular?",x);
}
}
})().call(null,x);
}
});
/**
* Add `singular` and `plural` to the set of `*irregular-words*`.
*/
inflections.core.add_irregular_BANG_ = (function add_irregular_BANG_(singular,plural){var singular__$1 = clojure.string.lower_case.call(null,cljs.core.name.call(null,singular));var plural__$1 = clojure.string.lower_case.call(null,cljs.core.name.call(null,plural));inflections.core.delete_uncountable_BANG_.call(null,singular__$1);
inflections.core.delete_uncountable_BANG_.call(null,plural__$1);
inflections.core.singular_BANG_.call(null,cljs.core.re_pattern.call(null,("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(plural__$1)+"$")),singular__$1);
inflections.core.plural_BANG_.call(null,cljs.core.re_pattern.call(null,("^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular__$1)+"$")),plural__$1);
cljs.core.swap_BANG_.call(null,inflections.core._STAR_irregular_words_STAR_,cljs.core.conj,singular__$1);
return cljs.core.swap_BANG_.call(null,inflections.core._STAR_irregular_words_STAR_,cljs.core.conj,plural__$1);
});
/**
* Delete `singular` and `plural` from the set of *irregular-words*.
*/
inflections.core.delete_irregular_BANG_ = (function delete_irregular_BANG_(singular,plural){var singular__$1 = clojure.string.lower_case.call(null,cljs.core.name.call(null,singular));var plural__$1 = clojure.string.lower_case.call(null,cljs.core.name.call(null,plural));cljs.core.swap_BANG_.call(null,inflections.core._STAR_irregular_words_STAR_,cljs.core.disj,singular__$1);
return cljs.core.swap_BANG_.call(null,inflections.core._STAR_irregular_words_STAR_,cljs.core.disj,plural__$1);
});
(inflections.core.Irregular["string"] = true);
(inflections.core.irregular_QMARK_["string"] = (function (s){return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,inflections.core._STAR_irregular_words_STAR_),clojure.string.lower_case.call(null,s));
}));
cljs.core.Symbol.prototype.inflections$core$Irregular$ = true;
cljs.core.Symbol.prototype.inflections$core$Irregular$irregular_QMARK_$arity$1 = (function (k){var k__$1 = this;return inflections.core.irregular_QMARK_.call(null,cljs.core.name.call(null,k__$1));
});
cljs.core.Keyword.prototype.inflections$core$Irregular$ = true;
cljs.core.Keyword.prototype.inflections$core$Irregular$irregular_QMARK_$arity$1 = (function (k){var k__$1 = this;return inflections.core.irregular_QMARK_.call(null,cljs.core.name.call(null,k__$1));
});
inflections.core.init_irregular_words_BANG_ = (function init_irregular_words_BANG_(){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__8821_SHARP_){return inflections.core.add_irregular_BANG_.call(null,cljs.core.first.call(null,p1__8821_SHARP_),cljs.core.second.call(null,p1__8821_SHARP_));
}),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["amenity","amenities"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["child","children"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cow","kine"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foot","feet"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["louse","lice"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mailman","mailmen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["man","men"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mouse","mice"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["move","moves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ox","oxen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["person","people"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sex","sexes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tooth","teeth"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["woman","women"], null)], null)));
});
inflections.core.ICamelCase = (function (){var obj8823 = {};return obj8823;
})();
inflections.core._camel_case = (function _camel_case(x,mode){if((function (){var and__3541__auto__ = x;if(and__3541__auto__)
{return x.inflections$core$ICamelCase$_camel_case$arity$2;
} else
{return and__3541__auto__;
}
})())
{return x.inflections$core$ICamelCase$_camel_case$arity$2(x,mode);
} else
{var x__4180__auto__ = (((x == null))?null:x);return (function (){var or__3553__auto__ = (inflections.core._camel_case[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (inflections.core._camel_case["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICamelCase.-camel-case",x);
}
}
})().call(null,x,mode);
}
});
(inflections.core.ICamelCase["string"] = true);
(inflections.core._camel_case["string"] = (function (x,mode){if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"lower","lower",1120320821)))
{return inflections.core._camel_case.call(null,x,clojure.string.lower_case);
} else
{if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"upper","upper",246243906)))
{return inflections.core._camel_case.call(null,x,clojure.string.upper_case);
} else
{if(cljs.core.fn_QMARK_.call(null,mode))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,x)))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,inflections.core._camel_case.call(null,x,null)))));
} else
{return clojure.string.replace.call(null,clojure.string.replace.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),/\/(.?)/,(function (p1__8824_SHARP_){return ("::"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,p1__8824_SHARP_,(1)))));
})),/(^|_|-)(.)/,(function (p1__8825_SHARP_){var vec__8826 = p1__8825_SHARP_;var f = cljs.core.nth.call(null,vec__8826,(0),null);var r = cljs.core.nth.call(null,vec__8826,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["-",null,"_",null], null), null).call(null,f)))?clojure.string.upper_case.call(null,f):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(r)?clojure.string.upper_case.call(null,r):null)));
}));

}
}
}
}));
cljs.core.Symbol.prototype.inflections$core$ICamelCase$ = true;
cljs.core.Symbol.prototype.inflections$core$ICamelCase$_camel_case$arity$2 = (function (x,mode){var x__$1 = this;return cljs.core.symbol.call(null,inflections.core._camel_case.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)),mode));
});
cljs.core.Keyword.prototype.inflections$core$ICamelCase$ = true;
cljs.core.Keyword.prototype.inflections$core$ICamelCase$_camel_case$arity$2 = (function (x,mode){var x__$1 = this;return cljs.core.keyword.call(null,inflections.core._camel_case.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)))),mode));
});
(inflections.core.ICamelCase["null"] = true);
(inflections.core._camel_case["null"] = (function (_,___$1){return null;
}));
/**
* Convert `x` to camel case. By default, camel-case converts to
* UpperCamelCase. If the argument to camel-case is set to :lower then
* camel-case produces lowerCamelCase. The camel-case fn will also convert
* "/" to "::" which is useful for converting paths to namespaces.
* 
* Examples:
* 
* (camel-case "active_record")
* ;=> "ActiveRecord"
* 
* (camel-case "active_record" :lower)
* ;=> "activeRecord"
* 
* (camel-case "active_record/errors")
* ;=> "ActiveRecord::Errors"
* 
* (camel-case "active_record/errors" :lower)
* ;=> "activeRecord::Errors"
* @param {...*} var_args
*/
inflections.core.camel_case = (function() { 
var camel_case__delegate = function (x,p__8827){var vec__8829 = p__8827;var mode = cljs.core.nth.call(null,vec__8829,(0),null);return inflections.core._camel_case.call(null,x,mode);
};
var camel_case = function (x,var_args){
var p__8827 = null;if (arguments.length > 1) {
  p__8827 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return camel_case__delegate.call(this,x,p__8827);};
camel_case.cljs$lang$maxFixedArity = 1;
camel_case.cljs$lang$applyTo = (function (arglist__8830){
var x = cljs.core.first(arglist__8830);
var p__8827 = cljs.core.rest(arglist__8830);
return camel_case__delegate(x,p__8827);
});
camel_case.cljs$core$IFn$_invoke$arity$variadic = camel_case__delegate;
return camel_case;
})()
;
inflections.core.ICapitalize = (function (){var obj8832 = {};return obj8832;
})();
inflections.core._capitalize = (function _capitalize(x){if((function (){var and__3541__auto__ = x;if(and__3541__auto__)
{return x.inflections$core$ICapitalize$_capitalize$arity$1;
} else
{return and__3541__auto__;
}
})())
{return x.inflections$core$ICapitalize$_capitalize$arity$1(x);
} else
{var x__4180__auto__ = (((x == null))?null:x);return (function (){var or__3553__auto__ = (inflections.core._capitalize[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (inflections.core._capitalize["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICapitalize.-capitalize",x);
}
}
})().call(null,x);
}
});
(inflections.core.ICapitalize["string"] = true);
(inflections.core._capitalize["string"] = (function (x){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,x)))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,x)))));
}));
cljs.core.Symbol.prototype.inflections$core$ICapitalize$ = true;
cljs.core.Symbol.prototype.inflections$core$ICapitalize$_capitalize$arity$1 = (function (x){var x__$1 = this;return cljs.core.symbol.call(null,inflections.core._capitalize.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1))));
});
cljs.core.Keyword.prototype.inflections$core$ICapitalize$ = true;
cljs.core.Keyword.prototype.inflections$core$ICapitalize$_capitalize$arity$1 = (function (x){var x__$1 = this;return cljs.core.keyword.call(null,inflections.core._capitalize.call(null,cljs.core.name.call(null,x__$1)));
});
(inflections.core.ICapitalize["null"] = true);
(inflections.core._capitalize["null"] = (function (_){return null;
}));
/**
* Convert the first letter in `x` to upper case.
* 
* Examples:
* 
* (capitalize "hello")
* ;=> "Hello"
* 
* (capitalize "HELLO")
* ;=> "Hello"
* 
* (capitalize "abc123")
* ;=> "Abc123"
*/
inflections.core.capitalize = (function capitalize(x){return inflections.core._capitalize.call(null,x);
});
inflections.core.IDasherize = (function (){var obj8834 = {};return obj8834;
})();
inflections.core._dasherize = (function _dasherize(x){if((function (){var and__3541__auto__ = x;if(and__3541__auto__)
{return x.inflections$core$IDasherize$_dasherize$arity$1;
} else
{return and__3541__auto__;
}
})())
{return x.inflections$core$IDasherize$_dasherize$arity$1(x);
} else
{var x__4180__auto__ = (((x == null))?null:x);return (function (){var or__3553__auto__ = (inflections.core._dasherize[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (inflections.core._dasherize["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDasherize.-dasherize",x);
}
}
})().call(null,x);
}
});
(inflections.core.IDasherize["string"] = true);
(inflections.core._dasherize["string"] = (function (x){return clojure.string.replace.call(null,x,/_/,"-");
}));
cljs.core.Symbol.prototype.inflections$core$IDasherize$ = true;
cljs.core.Symbol.prototype.inflections$core$IDasherize$_dasherize$arity$1 = (function (x){var x__$1 = this;return cljs.core.symbol.call(null,inflections.core._dasherize.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1))));
});
cljs.core.Keyword.prototype.inflections$core$IDasherize$ = true;
cljs.core.Keyword.prototype.inflections$core$IDasherize$_dasherize$arity$1 = (function (x){var x__$1 = this;return cljs.core.keyword.call(null,inflections.core._dasherize.call(null,cljs.core.name.call(null,x__$1)));
});
(inflections.core.IDasherize["null"] = true);
(inflections.core._dasherize["null"] = (function (_){return null;
}));
/**
* Replaces all underscores in `x` with dashes.
* 
* Examples:
* 
* (dasherize "puni_puni")
* ;=> "puni-puni"
*/
inflections.core.dasherize = (function dasherize(x){return inflections.core._dasherize.call(null,x);
});
inflections.core.IDemodulize = (function (){var obj8836 = {};return obj8836;
})();
inflections.core._demodulize = (function _demodulize(x){if((function (){var and__3541__auto__ = x;if(and__3541__auto__)
{return x.inflections$core$IDemodulize$_demodulize$arity$1;
} else
{return and__3541__auto__;
}
})())
{return x.inflections$core$IDemodulize$_demodulize$arity$1(x);
} else
{var x__4180__auto__ = (((x == null))?null:x);return (function (){var or__3553__auto__ = (inflections.core._demodulize[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (inflections.core._demodulize["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDemodulize.-demodulize",x);
}
}
})().call(null,x);
}
});
(inflections.core.IDemodulize["string"] = true);
(inflections.core._demodulize["string"] = (function (x){return clojure.string.replace.call(null,x,/^.*(::|\.)/,"");
}));
cljs.core.Symbol.prototype.inflections$core$IDemodulize$ = true;
cljs.core.Symbol.prototype.inflections$core$IDemodulize$_demodulize$arity$1 = (function (x){var x__$1 = this;return cljs.core.symbol.call(null,inflections.core._demodulize.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1))));
});
cljs.core.Keyword.prototype.inflections$core$IDemodulize$ = true;
cljs.core.Keyword.prototype.inflections$core$IDemodulize$_demodulize$arity$1 = (function (x){var x__$1 = this;return cljs.core.keyword.call(null,inflections.core._demodulize.call(null,cljs.core.name.call(null,x__$1)));
});
(inflections.core.IDemodulize["null"] = true);
(inflections.core._demodulize["null"] = (function (_){return null;
}));
/**
* Removes the module part from `x`.
* 
* Examples:
* 
* (demodulize "inflections.MyRecord")
* ;=> "MyRecord"
* 
* (demodulize "ActiveRecord::CoreExtensions::String::Inflections")
* ;=> "Inflections"
* 
* (demodulize "Inflections")
* ;=> "Inflections"
*/
inflections.core.demodulize = (function demodulize(x){return inflections.core._demodulize.call(null,x);
});
inflections.core.IHyphenate = (function (){var obj8838 = {};return obj8838;
})();
inflections.core._hyphenate = (function _hyphenate(x){if((function (){var and__3541__auto__ = x;if(and__3541__auto__)
{return x.inflections$core$IHyphenate$_hyphenate$arity$1;
} else
{return and__3541__auto__;
}
})())
{return x.inflections$core$IHyphenate$_hyphenate$arity$1(x);
} else
{var x__4180__auto__ = (((x == null))?null:x);return (function (){var or__3553__auto__ = (inflections.core._hyphenate[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (inflections.core._hyphenate["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHyphenate.-hyphenate",x);
}
}
})().call(null,x);
}
});
(inflections.core.IHyphenate["string"] = true);
(inflections.core._hyphenate["string"] = (function (x){return clojure.string.lower_case.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,x,/::/,"/"),/([A-Z]+)([A-Z][a-z])/,"$1-$2"),/([a-z\d])([A-Z])/,"$1-$2"),/\s+/,"-"),/_/,"-"));
}));
cljs.core.Symbol.prototype.inflections$core$IHyphenate$ = true;
cljs.core.Symbol.prototype.inflections$core$IHyphenate$_hyphenate$arity$1 = (function (x){var x__$1 = this;return cljs.core.symbol.call(null,inflections.core._hyphenate.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1))));
});
cljs.core.Keyword.prototype.inflections$core$IHyphenate$ = true;
cljs.core.Keyword.prototype.inflections$core$IHyphenate$_hyphenate$arity$1 = (function (x){var x__$1 = this;return cljs.core.keyword.call(null,inflections.core._hyphenate.call(null,cljs.core.name.call(null,x__$1)));
});
(inflections.core.IHyphenate["null"] = true);
(inflections.core._hyphenate["null"] = (function (_){return null;
}));
/**
* Hyphenate x, which is the same as threading `x` through the str,
* underscore and dasherize fns.
* 
* Examples:
* 
* (hyphenate 'Continent)
* ; => "continent"
* 
* (hyphenate "CountryFlag")
* ; => "country-flag"
*/
inflections.core.hyphenate = (function hyphenate(x){return inflections.core._hyphenate.call(null,x);
});
inflections.core.IOrdinalize = (function (){var obj8840 = {};return obj8840;
})();
inflections.core._ordinalize = (function _ordinalize(x){if((function (){var and__3541__auto__ = x;if(and__3541__auto__)
{return x.inflections$core$IOrdinalize$_ordinalize$arity$1;
} else
{return and__3541__auto__;
}
})())
{return x.inflections$core$IOrdinalize$_ordinalize$arity$1(x);
} else
{var x__4180__auto__ = (((x == null))?null:x);return (function (){var or__3553__auto__ = (inflections.core._ordinalize[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (inflections.core._ordinalize["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IOrdinalize.-ordinalize",x);
}
}
})().call(null,x);
}
});
(inflections.core.IOrdinalize["string"] = true);
(inflections.core._ordinalize["string"] = (function (x){var temp__4124__auto__ = no.en.core.parse_integer.call(null,x);if(cljs.core.truth_(temp__4124__auto__))
{var number = temp__4124__auto__;if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.range.call(null,(11),(14))),cljs.core.mod.call(null,number,(100))))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)+"th");
} else
{var modulus = cljs.core.mod.call(null,number,(10));if(cljs.core._EQ_.call(null,modulus,(1)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)+"st");
} else
{if(cljs.core._EQ_.call(null,modulus,(2)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)+"nd");
} else
{if(cljs.core._EQ_.call(null,modulus,(3)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)+"rd");
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)+"th");

}
}
}
}
} else
{return null;
}
}));
(inflections.core.IOrdinalize["number"] = true);
(inflections.core._ordinalize["number"] = (function (x){return inflections.core._ordinalize.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));
}));
cljs.core.Symbol.prototype.inflections$core$IOrdinalize$ = true;
cljs.core.Symbol.prototype.inflections$core$IOrdinalize$_ordinalize$arity$1 = (function (x){var x__$1 = this;return cljs.core.symbol.call(null,inflections.core._ordinalize.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1))));
});
cljs.core.Keyword.prototype.inflections$core$IOrdinalize$ = true;
cljs.core.Keyword.prototype.inflections$core$IOrdinalize$_ordinalize$arity$1 = (function (x){var x__$1 = this;return cljs.core.keyword.call(null,inflections.core._ordinalize.call(null,cljs.core.name.call(null,x__$1)));
});
(inflections.core.IOrdinalize["null"] = true);
(inflections.core._ordinalize["null"] = (function (_){return null;
}));
/**
* Turns `x` into an ordinal string used to denote the position in an
* ordered sequence such as 1st, 2nd, 3rd, 4th, etc.
* 
* Examples:
* 
* (ordinalize "1")
* ;=> "1st"
* 
* (ordinalize "23")
* ;=> "23rd"
*/
inflections.core.ordinalize = (function ordinalize(x){return inflections.core._ordinalize.call(null,x);
});
inflections.core.IParameterize = (function (){var obj8842 = {};return obj8842;
})();
inflections.core._parameterize = (function _parameterize(x,sep){if((function (){var and__3541__auto__ = x;if(and__3541__auto__)
{return x.inflections$core$IParameterize$_parameterize$arity$2;
} else
{return and__3541__auto__;
}
})())
{return x.inflections$core$IParameterize$_parameterize$arity$2(x,sep);
} else
{var x__4180__auto__ = (((x == null))?null:x);return (function (){var or__3553__auto__ = (inflections.core._parameterize[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (inflections.core._parameterize["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IParameterize.-parameterize",x);
}
}
})().call(null,x,sep);
}
});
(inflections.core.IParameterize["string"] = true);
(inflections.core._parameterize["string"] = (function (x,sep){var sep__$1 = (function (){var or__3553__auto__ = sep;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return "-";
}
})();return clojure.string.lower_case.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,x,/[^A-Za-z0-9]+/,sep__$1),/\++/,sep__$1),cljs.core.re_pattern.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep__$1)+"{2,}")),sep__$1),cljs.core.re_pattern.call(null,("(?i)(^"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep__$1)+")|("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep__$1)+"$)")),""));
}));
cljs.core.Symbol.prototype.inflections$core$IParameterize$ = true;
cljs.core.Symbol.prototype.inflections$core$IParameterize$_parameterize$arity$2 = (function (x,sep){var x__$1 = this;return cljs.core.symbol.call(null,inflections.core._parameterize.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)),sep));
});
cljs.core.Keyword.prototype.inflections$core$IParameterize$ = true;
cljs.core.Keyword.prototype.inflections$core$IParameterize$_parameterize$arity$2 = (function (x,sep){var x__$1 = this;return cljs.core.keyword.call(null,inflections.core._parameterize.call(null,cljs.core.name.call(null,x__$1),sep));
});
(inflections.core.IParameterize["null"] = true);
(inflections.core._parameterize["null"] = (function (_,___$1){return null;
}));
/**
* Replaces special characters in `x` with the default separator
* "-". so that it may be used as part of a pretty URL.
* 
* Examples:
* 
* (parameterize "Donald E. Knuth")
* ; => "donald-e-knuth"
* 
* (parameterize "Donald E. Knuth" "_")
* ; => "donald_e_knuth"
* @param {...*} var_args
*/
inflections.core.parameterize = (function() { 
var parameterize__delegate = function (x,p__8843){var vec__8845 = p__8843;var sep = cljs.core.nth.call(null,vec__8845,(0),null);return inflections.core._parameterize.call(null,x,sep);
};
var parameterize = function (x,var_args){
var p__8843 = null;if (arguments.length > 1) {
  p__8843 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return parameterize__delegate.call(this,x,p__8843);};
parameterize.cljs$lang$maxFixedArity = 1;
parameterize.cljs$lang$applyTo = (function (arglist__8846){
var x = cljs.core.first(arglist__8846);
var p__8843 = cljs.core.rest(arglist__8846);
return parameterize__delegate(x,p__8843);
});
parameterize.cljs$core$IFn$_invoke$arity$variadic = parameterize__delegate;
return parameterize;
})()
;
/**
* Attempts to pluralize the word unless count is 1. If plural is
* supplied, it will use that when count is > 1, otherwise it will use
* the inflector to determine the plural form.
* @param {...*} var_args
*/
inflections.core.pluralize = (function() { 
var pluralize__delegate = function (count,singular,p__8847){var vec__8849 = p__8847;var plural = cljs.core.nth.call(null,vec__8849,(0),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(1),count))?singular:(function (){var or__3553__auto__ = plural;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return inflections.core.plural.call(null,singular);
}
})())));
};
var pluralize = function (count,singular,var_args){
var p__8847 = null;if (arguments.length > 2) {
  p__8847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,count,singular,p__8847);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__8850){
var count = cljs.core.first(arglist__8850);
arglist__8850 = cljs.core.next(arglist__8850);
var singular = cljs.core.first(arglist__8850);
var p__8847 = cljs.core.rest(arglist__8850);
return pluralize__delegate(count,singular,p__8847);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
inflections.core.IUnderscore = (function (){var obj8852 = {};return obj8852;
})();
inflections.core._underscore = (function _underscore(x){if((function (){var and__3541__auto__ = x;if(and__3541__auto__)
{return x.inflections$core$IUnderscore$_underscore$arity$1;
} else
{return and__3541__auto__;
}
})())
{return x.inflections$core$IUnderscore$_underscore$arity$1(x);
} else
{var x__4180__auto__ = (((x == null))?null:x);return (function (){var or__3553__auto__ = (inflections.core._underscore[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (inflections.core._underscore["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IUnderscore.-underscore",x);
}
}
})().call(null,x);
}
});
(inflections.core.IUnderscore["string"] = true);
(inflections.core._underscore["string"] = (function (x){return clojure.string.lower_case.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,x,/::/,"/"),/([A-Z\d]+)([A-Z][a-z])/,"$1_$2"),/([a-z\d])([A-Z])/,"$1_$2"),/-/,"_"));
}));
cljs.core.Symbol.prototype.inflections$core$IUnderscore$ = true;
cljs.core.Symbol.prototype.inflections$core$IUnderscore$_underscore$arity$1 = (function (x){var x__$1 = this;return cljs.core.symbol.call(null,inflections.core._underscore.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1))));
});
cljs.core.Keyword.prototype.inflections$core$IUnderscore$ = true;
cljs.core.Keyword.prototype.inflections$core$IUnderscore$_underscore$arity$1 = (function (x){var x__$1 = this;return cljs.core.keyword.call(null,inflections.core._underscore.call(null,cljs.core.name.call(null,x__$1)));
});
(inflections.core.IUnderscore["null"] = true);
(inflections.core._underscore["null"] = (function (_){return null;
}));
/**
* The reverse of camel-case. Makes an underscored, lowercase form from
* the expression in the string. Changes "::" to "/" to convert
* namespaces to paths.
* 
* Examples:
* 
* (underscore "ActiveRecord")
* ;=> "active_record"
* 
* (underscore "ActiveRecord::Errors")
* ;=> "active_record/errors"
*/
inflections.core.underscore = (function underscore(x){return inflections.core._underscore.call(null,x);
});
inflections.core.IForeignKey = (function (){var obj8854 = {};return obj8854;
})();
inflections.core._foreign_key = (function _foreign_key(x,sep){if((function (){var and__3541__auto__ = x;if(and__3541__auto__)
{return x.inflections$core$IForeignKey$_foreign_key$arity$2;
} else
{return and__3541__auto__;
}
})())
{return x.inflections$core$IForeignKey$_foreign_key$arity$2(x,sep);
} else
{var x__4180__auto__ = (((x == null))?null:x);return (function (){var or__3553__auto__ = (inflections.core._foreign_key[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (inflections.core._foreign_key["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IForeignKey.-foreign-key",x);
}
}
})().call(null,x,sep);
}
});
(inflections.core.IForeignKey["string"] = true);
(inflections.core._foreign_key["string"] = (function (x,sep){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,x)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inflections.core.underscore.call(null,inflections.core.hyphenate.call(null,inflections.core.singular.call(null,inflections.core.demodulize.call(null,x)))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3553__auto__ = sep;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return "_";
}
})())+"id");
} else
{return null;
}
}));
cljs.core.Symbol.prototype.inflections$core$IForeignKey$ = true;
cljs.core.Symbol.prototype.inflections$core$IForeignKey$_foreign_key$arity$2 = (function (x,sep){var x__$1 = this;return cljs.core.symbol.call(null,inflections.core._foreign_key.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)),sep));
});
cljs.core.Keyword.prototype.inflections$core$IForeignKey$ = true;
cljs.core.Keyword.prototype.inflections$core$IForeignKey$_foreign_key$arity$2 = (function (x,sep){var x__$1 = this;return cljs.core.keyword.call(null,inflections.core._foreign_key.call(null,cljs.core.name.call(null,x__$1),sep));
});
(inflections.core.IForeignKey["null"] = true);
(inflections.core._foreign_key["null"] = (function (_,___$1){return null;
}));
/**
* Converts `x` into a foreign key. The default separator "_" is
* placed between the name and "id".
* 
* 
* Examples:
* 
* (foreign-key "Message")
* ;=> "message_id"
* 
* (foreign-key "Message" false)
* ;=> "messageid"
* 
* (foreign-key "Admin::Post")
* ;=> "post_id"
* @param {...*} var_args
*/
inflections.core.foreign_key = (function() { 
var foreign_key__delegate = function (x,p__8855){var vec__8857 = p__8855;var sep = cljs.core.nth.call(null,vec__8857,(0),null);return inflections.core._foreign_key.call(null,x,sep);
};
var foreign_key = function (x,var_args){
var p__8855 = null;if (arguments.length > 1) {
  p__8855 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return foreign_key__delegate.call(this,x,p__8855);};
foreign_key.cljs$lang$maxFixedArity = 1;
foreign_key.cljs$lang$applyTo = (function (arglist__8858){
var x = cljs.core.first(arglist__8858);
var p__8855 = cljs.core.rest(arglist__8858);
return foreign_key__delegate(x,p__8855);
});
foreign_key.cljs$core$IFn$_invoke$arity$variadic = foreign_key__delegate;
return foreign_key;
})()
;
/**
* Recursively transform all keys in the map `m` by applying `f` on them.
*/
inflections.core.transform_keys = (function transform_keys(m,f){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.reduce.call(null,(function (memo,key){var value = cljs.core.get.call(null,m,key);return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,memo,key),f.call(null,key),((cljs.core.map_QMARK_.call(null,value))?transform_keys.call(null,value,f):((cljs.core.sequential_QMARK_.call(null,value))?cljs.core.map.call(null,((function (value){
return (function (p1__8859_SHARP_){return transform_keys.call(null,p1__8859_SHARP_,f);
});})(value))
,value):value
)));
}),m,cljs.core.keys.call(null,m));
} else
{return m;
}
});
/**
* Recursively transform all map values of m by applying f on them.
*/
inflections.core.transform_values = (function transform_values(m,f){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.reduce.call(null,(function (memo,key){var value = cljs.core.get.call(null,m,key);return cljs.core.assoc.call(null,memo,key,((cljs.core.map_QMARK_.call(null,value))?transform_values.call(null,value,f):f.call(null,value)));
}),m,cljs.core.keys.call(null,m));
} else
{return m;
}
});
/**
* Recursively apply camel-case on all keys of m.
* @param {...*} var_args
*/
inflections.core.camel_case_keys = (function() { 
var camel_case_keys__delegate = function (m,p__8861){var vec__8863 = p__8861;var mode = cljs.core.nth.call(null,vec__8863,(0),null);return inflections.core.transform_keys.call(null,m,((function (vec__8863,mode){
return (function (p1__8860_SHARP_){return inflections.core.camel_case.call(null,p1__8860_SHARP_,mode);
});})(vec__8863,mode))
);
};
var camel_case_keys = function (m,var_args){
var p__8861 = null;if (arguments.length > 1) {
  p__8861 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return camel_case_keys__delegate.call(this,m,p__8861);};
camel_case_keys.cljs$lang$maxFixedArity = 1;
camel_case_keys.cljs$lang$applyTo = (function (arglist__8864){
var m = cljs.core.first(arglist__8864);
var p__8861 = cljs.core.rest(arglist__8864);
return camel_case_keys__delegate(m,p__8861);
});
camel_case_keys.cljs$core$IFn$_invoke$arity$variadic = camel_case_keys__delegate;
return camel_case_keys;
})()
;
/**
* Recursively apply hyphenate on all keys of m.
*/
inflections.core.hyphenate_keys = (function hyphenate_keys(m){return inflections.core.transform_keys.call(null,m,inflections.core.hyphenate);
});
/**
* Recursively apply hyphenate on all values of m.
*/
inflections.core.hyphenate_values = (function hyphenate_values(m){return inflections.core.transform_values.call(null,m,inflections.core.hyphenate);
});
/**
* Recursively transform all keys of m into strings.
*/
inflections.core.stringify_keys = (function stringify_keys(m){return inflections.core.transform_keys.call(null,m,(function (p1__8865_SHARP_){if((p1__8865_SHARP_ instanceof cljs.core.Keyword))
{return cljs.core.name.call(null,p1__8865_SHARP_);
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8865_SHARP_));
}
}));
});
/**
* Recursively transform all values of m into strings.
*/
inflections.core.stringify_values = (function stringify_values(m){return inflections.core.transform_values.call(null,m,(function (p1__8866_SHARP_){if((p1__8866_SHARP_ instanceof cljs.core.Keyword))
{return cljs.core.name.call(null,p1__8866_SHARP_);
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8866_SHARP_));
}
}));
});
/**
* Recursively apply underscore on all keys of m.
*/
inflections.core.underscore_keys = (function underscore_keys(m){return inflections.core.transform_keys.call(null,m,inflections.core.underscore);
});
/**
* Initialize the Inflections library with defaults.
*/
inflections.core.init_inflections_BANG_ = (function init_inflections_BANG_(){inflections.core.init_plural_rules_BANG_.call(null);
inflections.core.init_singular_rules_BANG_.call(null);
return inflections.core.init_irregular_words_BANG_.call(null);
});
inflections.core.init_inflections_BANG_.call(null);

//# sourceMappingURL=core.js.map