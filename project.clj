(defproject csv-visualiser "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.521"]
                 [om "0.7.1"]
                 [sablono "0.2.20"]
                 [testdouble/clojurescript.csv "0.1.1"]
                 [com.cognitect/transit-cljs "0.8.184"]
                 [inflections "0.9.9"]]

  :plugins [[lein-cljsbuild "1.1.6"]]
  ;:source-paths ["src"]

  :cljsbuild {
    :builds [{;:id "csv-visualiser"
              :source-paths ["src"]
              :compiler {
                :output-to "public/out/main/csv_visualiser.js"
                :output-dir "public/out"
                :optimizations :none
                :source-map true}}]})
