require 'pry'
class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new(params)
    @uploader = User.new.avatar
    #This needs empty!
    @uploader.success_action_redirect = ""#new_avatar_url
  end

  def create
    @user = User.new(params[:user])
    #binding.pry
    if @user.save
      #@user.remote_avatar_url = @user.avatar.direct_fog_url(:with_path => true)
      redirect_to @user, notice: 'User was successfully created. Waiting for Avatar to be processed. Refresh at will'
    else
      render action: "new"
    end
  end
end
