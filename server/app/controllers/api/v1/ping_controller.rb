module Api
  module V1
    class PingController < ApplicationController
      def show
        render json: { status: 'OK' }, status: :ok
      end
    end
  end
end