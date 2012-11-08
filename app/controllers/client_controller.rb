class ClientController < ApplicationController

	layout :layout

  def mysites
  end

  def layout
  	case action_name
  	when "mysites_firstrun"
      "withchecklist"
  	else
  		"default"
  	end
  end

end
