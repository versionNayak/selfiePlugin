package demo

import grails.config.Config
import grails.core.support.GrailsConfigurationAware
import groovy.transform.CompileStatic

@SuppressWarnings('GrailsStatelessService')
@CompileStatic
class UploadPointOfInterestFeaturedImageService implements GrailsConfigurationAware {

    PointOfInterestGormService pointOfInterestGormService

    String cdnFolder
    String cdnRootUrl

    @Override
    void setConfiguration(Config co) {
        cdnFolder = co.getRequiredProperty('grails.guides.cdnFolder')
       // cdnRootUrl = co.getRequiredProperty('grails.guides.cdnRootUrl')
    }

    @SuppressWarnings('JavaIoPackageAccess')
    void uploadPhoto(FeaturedImageCommand cmd) {

        String filename = "photo.png"
        def folderPath = "${cdnFolder}/exampro/${cmd.loginId}" as String
        def folder = new File(folderPath)
        if ( !folder.exists() ) {
            folder.mkdirs()
        }
        def path = "${folderPath}/${filename}" as String
        cmd.featuredImageFile.transferTo(new File(path))

         def f = new File(path)
     
  
    }
    
     @SuppressWarnings('JavaIoPackageAccess')
    void uploadAdhar(FeaturedImageCommand cmd) {

        String filename = "adhar.png"
        def folderPath = "${cdnFolder}/exampro/${cmd.loginId}" as String
        def folder = new File(folderPath)
        if ( !folder.exists() ) {
            folder.mkdirs()
        }
        def path = "${folderPath}/${filename}" as String
        cmd.featuredImageFile.transferTo(new File(path))

         def f = new File(path)
     
  
    }
}
