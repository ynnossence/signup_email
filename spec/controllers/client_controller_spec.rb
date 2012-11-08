require 'spec_helper'

describe ClientController do

  describe "GET 'mysites'" do
    it "returns http success" do
      get 'mysites'
      response.should be_success
    end
  end

end
