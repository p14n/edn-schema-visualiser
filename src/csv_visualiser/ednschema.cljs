(ns csv-visualiser.ednschema)

;;(reverse (partition-by #(namespace (:db/ident %)) (to-schema "dash" d)))


(defn cardinality [x]
  (cond 
   (map? x) :db.cardinality/one
   (coll? x) :db.cardinality/many 
   :default :db.cardinality/one))

(defn is-object [x]
  (cond
   (map? x) true
   (coll? x) (map? (first x))
   :default false))

(defn schema-type [x]
  (cond 
   (integer? x) :db.type/bigint
   (number? x) :db.type/bigdec
   (map? x) :db.type/ref
   (coll? x) (schema-type (first x))
   (= js.Boolean (type x)) :db.type/boolean 
   :default :db.type/string))

(defn attribute-schema [parent-name x]
  (do {:db/id "#db/id[:db.part/db]"
       :db/ident (keyword (str parent-name "/" (first x)))
       :db/cardinality  (cardinality (second x))
       :db/valueType  (schema-type (second x))
       :db.install/_attribute :db.part/db}))

(defn embedded-schema [root-schema-name data]
  (doall (map (partial attribute-schema root-schema-name) data)))

(defn object-filter [x]
  (and (coll? x) (is-object (second x))))

(declare to-schema)

(defn external-schema [data]
  (doall (map #(apply to-schema %) (filter object-filter data))))

(defn to-schema [root-schema-name data]
  (if (map? data)
    (flatten (conj
              ;;Get the embedded schema of the attributes
              (embedded-schema root-schema-name data)
              ;;Get the external schema definition of the atributes
              (external-schema data)))
    (to-schema root-schema-name (first data))))
