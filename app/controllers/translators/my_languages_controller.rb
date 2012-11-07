class Translators::MyLanguagesController < ApplicationController
  
  layout :layout

  def index
  end

  def checklist
  end

  def index_firstrun
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
