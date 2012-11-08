require 'spec_helper'

describe OrderProcess::SelectPagesController do

  describe "GET 'default'" do
    it "returns http success" do
      get 'default'
      response.should be_success
    end
  end

  describe "GET 'alternative'" do
    it "returns http success" do
      get 'alternative'
      response.should be_success
    end
  end

end
