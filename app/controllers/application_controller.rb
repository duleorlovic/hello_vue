class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :_set_csrf_cookie

  respond_to :html, :json

  def _set_csrf_cookie
    cookies['CSRF-TOKEN'] = form_authenticity_token
  end
end
