class TranslatorsController < ApplicationController
  
  layout :layout

  def index
  end

  def various_components
  end

  def layout
  	case action_name
  	when "index"
  		"signup_email"
  	else
  		"default"
  	end
  end

end
