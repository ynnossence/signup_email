class Translators::MyTranslationsController < ApplicationController
  
  layout :layout

  def index
  end

  def accept_task_firstrun
  end

def layout
	case action_name
    when "index"
      "default"
  	else
  		"withchecklist"
  	end
end


end
