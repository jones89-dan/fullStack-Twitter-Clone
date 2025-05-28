module Api
  class TweetsController < ApplicationController
    # Index all the tweets
    def index
      @tweets = Tweet.all.order(created_at: :desc)
      render 'api/tweets/index'
    end

    # Create a new tweet and associate with user
    def create
      token = cookies.signed[:twitter_session_token]
      session = Session.find_by(token: token)
      user = session.user
      @tweet = user.tweets.new(tweet_params)

    # Removed to test new tweet POST
     if @tweet.save
      #  TweetMailer.notify(@tweet).deliver!
       render 'api/tweets/create'
     end
    end

    # Destroy a users tweet
    def destroy
      # check if a current token exists
      token = cookies.signed[:twitter_session_token]
      session = Session.find_by(token: token)

      # if not return error
      return render json: { success: false } unless session

      # find user and tweet
      user = session.user
      tweet = Tweet.find_by(id: params[:id])

      # check if tweet belongs to the user and destroy true
      if tweet and tweet.user == user and tweet.destroy
        render json: {
          success: true
        }
      else
        render json: {
          success: false
        }
      end
    end

    # index users tweets
    def index_by_user
      user = User.find_by(username: params[:username])
      if user
        @tweets = user.tweets
        render 'api/tweets/index'
      end
    end


    # Get the current users tweet count
    def user_tweet_count
      #get user based on the session token
      token = cookies.signed[:twitter_session_token]
      session = Session.find_by(token: token)
      user = session.user
      #get count of the users tweet
      @tweet_count = user.tweets.count
      render 'api/tweets/count'
    end 

    private
      # tweet params
      def tweet_params
        params.require(:tweet).permit(:message, :image)
      end
  end
end
