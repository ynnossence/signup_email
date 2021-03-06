SignupEmail::Application.routes.draw do

  get "order_process/select_pages/default"
  get "order_process/select_pages/alternative"
  get "order_process/select_pages/default_with_sidebar"
  get "order_process/select_pages/alternative_with_sidebar"

  get "client/mysites"
  get "client/account_details"
  get "client/register_your_details"
  get "client/select_your_subscription"
  get "client/add_your_website"
  get "client/add_snippet"
  get "client/add_snippet_loading"
  get "client/add_snippet_detected"
  get "client/add_snippet_not_detected"

  get "translators/account/default"
  get "translators/account/account_details_firstrun"


  get "translators/account/nodata"
  get "translators/account/edit"
  get "translators/account/withdraw_earnings"
  get "translators/account/withdraw_earnings_firstrun"
  get "translators/account/editanother"
  get "translators/account/withdrawal_method"
  get "translators/account/withdrawal_method_firstrun"


  get "translators/dashboard/index"
  get "translators/dashboard/index_firstrun"


  get "translators/my_translations/index"
  get "translators/my_translations/index_firstrun"
  get "translators/my_translations/accept_task_firstrun"
  get "translators/my_languages/index"
  get "translators/my_languages/index_firstrun"
  get "translators/my_languages/setbid_firstrun"

  
  get "translators/my_languages/checklist"
 

  get "translators/index"
  get "translators/index_firstrun"

  get "translators/various_components"

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  root :to => 'translators#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
