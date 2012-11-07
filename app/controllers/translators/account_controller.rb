class Translators::AccountController < ApplicationController

  layout :layout

  def default
  end

  def nodata
  end

  def edit
  end

  def withdraw_earnings
  end

  def withdraw_earnings_firstrun
  end

  def editanother
  end

  def withdrawal_method
  end

  def withdrawal_method_firstrun
  end

def layout
  case action_name
    when "withdraw_earnings_firstrun"
      "withchecklist"
    when "withdrawal_method_firstrun"
      "withchecklist"
    else
      "acount_details"
    end
end


end
