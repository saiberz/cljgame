(ns cljgame.core
;  (:use cljgame.views)
  (:require  [ring.adapter.jetty :as jetty]
             [compojure.route :as route]
             [compojure.handler :as handler]
             [net.cgrand.enlive-html :as html]
             [ring.adapter.jetty :as jetty]
             [stencil.core :refer [render-string]]
             [selmer.parser :refer [render-file]]
             [compojure.core :refer [defroutes GET context ]]))

(defroutes handler
  (route/resources "/")
  (GET "/home" [] (render-file "public/home.html" {}))
  (GET "/" [] (render-file "public/index.html" {}))
  )

(defn -main []
  (jetty/run-jetty #'handler
                   {:port (Integer. (or (System/getenv "PORT") "8080"))
                    :join? false}))


(def server (jetty/run-jetty #'handler {:port 8080 :join? false}))

(.start server)
(.stop server)
