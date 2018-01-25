class AdminController < ActionController::Base
  layout 'admin/application'
  protect_from_forgery with: :exception
end
