class OrderProcess::SelectPagesController < ApplicationController
  
  layout :layout

  def default
  end

  def alternative
  end

  def layout
  	case action_name
  	when "firstruns"
      "withchecklist"
  	else
  		"order"
  	end
  end

end
