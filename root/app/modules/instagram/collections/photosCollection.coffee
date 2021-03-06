#
# Instagram Photos collection
#
define [
  'backbone'
  'modules/instagram/models/photoModel'
], (Backbone, PhotoModel) ->
  class PhotosCollection extends Backbone.Collection
    model: PhotoModel
    url: 'https://api.instagram.com/v1/media/search?callback=?'

    parse: (response) ->
      return response.data

