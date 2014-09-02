edn-schema-visualiser
=====================

Takes a JSON structure and displays the Datomic schema for it.

* checkout
* lein cljsbuild once
* Open index.html
* Drop in a json file from your local machine

Will attempt to create a Datomic EDN schema representation.  You will need to add your own optional attributes (like :db/index, :db/doc and :db/isComponent).  You will probably also want to change the types (:db/bigint and :db/bigdec are assumed).  Where an attribute is a collection of objects and the name ends with 's', the namespace will have the 's' removed.

With hat-tip to @annapawlicka for writing all the om ceremony!

dashboard.json containing:

```
{
 "title":"My dashboard",
  "structure":"4-8",
  "rows": [{
   "columns": [{
    "class":"col-md-4",
    "widgets":[{
     "type":"stuff-widget",
     "config": {
      "limit": 12,
      "mylist":[1,2,3],
      "myobject":{"a":"b"}
     }
    },{
     "type":"weather-widget"
    }]
   }]
  }]}
```

becomes:

```
;;dashboard
{
  :db/id #db/id[:db.part/db]
  :db/ident :dashboard/title
  :db/cardinality :db.cardinality/one
  :db/valueType :db.type/string
  :db.install/_attribute :db.part/db
}
{
  :db/id #db/id[:db.part/db]
  :db/ident :dashboard/structure
  :db/cardinality :db.cardinality/one
  :db/valueType :db.type/string
  :db.install/_attribute :db.part/db
}
{
  :db/id #db/id[:db.part/db]
  :db/ident :dashboard/rows
  :db/cardinality :db.cardinality/many
  :db/valueType :db.type/ref
  :db.install/_attribute :db.part/db
}

;;row
{
  :db/id #db/id[:db.part/db]
  :db/ident :row/columns
  :db/cardinality :db.cardinality/many
  :db/valueType :db.type/ref
  :db.install/_attribute :db.part/db
}

;;column
{
  :db/id #db/id[:db.part/db]
  :db/ident :column/class
  :db/cardinality :db.cardinality/one
  :db/valueType :db.type/string
  :db.install/_attribute :db.part/db
}
{
  :db/id #db/id[:db.part/db]
  :db/ident :column/widgets
  :db/cardinality :db.cardinality/many
  :db/valueType :db.type/ref
  :db.install/_attribute :db.part/db
}

;;widget
{
  :db/id #db/id[:db.part/db]
  :db/ident :widget/type
  :db/cardinality :db.cardinality/one
  :db/valueType :db.type/string
  :db.install/_attribute :db.part/db
}
{
  :db/id #db/id[:db.part/db]
  :db/ident :widget/config
  :db/cardinality :db.cardinality/one
  :db/valueType :db.type/ref
  :db.install/_attribute :db.part/db
}

;;config
{
  :db/id #db/id[:db.part/db]
  :db/ident :config/limit
  :db/cardinality :db.cardinality/one
  :db/valueType :db.type/bigint
  :db.install/_attribute :db.part/db
}
{
  :db/id #db/id[:db.part/db]
  :db/ident :config/mylist
  :db/cardinality :db.cardinality/many
  :db/valueType :db.type/bigint
  :db.install/_attribute :db.part/db
}
{
  :db/id #db/id[:db.part/db]
  :db/ident :config/myobject
  :db/cardinality :db.cardinality/one
  :db/valueType :db.type/ref
  :db.install/_attribute :db.part/db
}

;;myobject
{
  :db/id #db/id[:db.part/db]
  :db/ident :myobject/a
  :db/cardinality :db.cardinality/one
  :db/valueType :db.type/string
  :db.install/_attribute :db.part/db
}
```
