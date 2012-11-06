class TranslatorsController < ApplicationController
  
  layout :layout

  def index
  end

  def index_firstrun
  end

  def various_components
  end

  def layout
  	case action_name
  	when "index"
  		"with_sidebar_footer"
    when "index_firstrun"
      "with_sidebar_footer"
  	else
  		"default"
  	end
  end

end
