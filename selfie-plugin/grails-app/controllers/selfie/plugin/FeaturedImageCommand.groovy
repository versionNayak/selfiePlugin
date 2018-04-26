package demo

import grails.validation.Validateable
import org.springframework.web.multipart.MultipartFile

class FeaturedImageCommand implements Validateable {
    MultipartFile featuredImageFile
    String loginId
    Integer version

    static constraints = {
        loginId nullable: false
        version nullable: false
        featuredImageFile  validator: { val, obj ->
            if ( val == null ) {
                return false
            }
            if ( val.empty ) {
                return false
            }

//            ['jpeg', 'jpg', 'png'].any { extension -> // <1>
//                 val.originalFilename?.toLowerCase()?.endsWith(extension)
//            }
        }
    }
}
