class ClientController < ApplicationController

	layout :layout

  def mysites
  end

  def account_details
  end

  def register_your_details
  end


  def layout
  	case action_name
    when "mysites"
      "default"
  	when "account_details"
  		"default"
    else
      "clientwithchecklist"
    end
  end

end
