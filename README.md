edn-schema-visualiser
=====================

Takes a JSON structure and displays the Datomic schema for it.

checkout
lein cljsbuild once
Open index.html
Drop in a json file from your local machine

Will attempt to create a Datomic EDN schema representation.  You will need to add your own optional attributes (like :db/index, :db/doc and :db/isComponent).  You will probably also want to change the types (:db/bigint and :db/bigdec are assumed).  Where an attribute is a collection of objects and the name ends with 's', the namespace will have the 's' removed.

With hat-tip to @annapawlicka for writing all the om ceremony!
