class User < ActiveRecord::Base
  attr_accessible :name
  mount_uploader :avatar, AvatarUploader
end
