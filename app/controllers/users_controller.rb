require 'pry'
class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new(params)
    @uploader = User.new.avatar
    @uploader.success_action_redirect = "" #This needs to be empty! Nill will produce an error in Amazon S3
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      #To post-process thumbnails and other version sizes this has to be executed in a background job:
      #@user.remote_avatar_url = @user.avatar.direct_fog_url(:with_path => true)
      redirect_to @user, notice: 'User was successfully created. Waiting for Avatar to be processed. Refresh at will'
    else
      render action: "new"
    end
  end
end
