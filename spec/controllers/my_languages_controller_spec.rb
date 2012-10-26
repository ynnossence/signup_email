require 'spec_helper'

describe MyLanguagesController do

  describe "GET 'index'" do
    it "returns http success" do
      get 'index'
      response.should be_success
    end
  end

  describe "GET 'checklist'" do
    it "returns http success" do
      get 'checklist'
      response.should be_success
    end
  end

end
