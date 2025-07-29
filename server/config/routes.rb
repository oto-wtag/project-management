Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "ping" => "ping#show", as: :ping

      get "routes" => "rails/health#show", as: :health_check
    end
  end
end