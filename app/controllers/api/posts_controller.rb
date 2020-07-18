class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :_set_post, except: %i[index create]

  def index
    render json: Post.all
  end

  def create
    @post = Post.new(_post_params)
    @post.user = current_user
    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
    head :no_content
  end

  def update
    if @post.update _post_params
      render json: @post, status: :ok
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def _set_post
    @post = Post.find params[:id]
  end

  def _post_params
    params.require(:post).permit(:title)
  end
end
