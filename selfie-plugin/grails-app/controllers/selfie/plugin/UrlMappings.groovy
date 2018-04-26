package selfie.plugin

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/selfiePlugin")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
