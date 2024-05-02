gem 'rack', '~> 2.2.6'
require 'rack'
require 'byebug'

most_basic_app = Proc.new do
    # 1: a status code
    # 2: a hash of headers
    # 3: a body array that has the content I want to render in my browser.

    ['200', {'Content-Type' => 'text/html'}, ['This is the most basic Rack app.']]
end

most_basic_redirect_app = Proc.new do
    ['302', {'Content-Type' => 'text/html', 'Location' => 'http://www.google.com'}, []]
end

less_basic_app = Proc.new do |env|
    # p env
    res = Rack::Response.new
    res.write('Hello World!')
    res.finish
end

class MyController

    def initialize(req, res)
        @req = req
        @res = res 
    end

    def render_content(content, content_type = 'text/html')
        @res.write(content)
        @res["Content-Type"] = content_type
        nil
    end

    def redirect_to(url)
        @res.status = 302
        @res['Location'] = url
        nil
    end

    def execute
        if @req.path == "/cats"
            render_content("Hello Cats!")
        elsif @req.path == "/dogs"
            redirect_to("/cats")
        elsif @req.path == "/html"
            render_content "<h1>HTML is just a string being sent across the internet after all</h1>"
        else
            @res.status = 404
            render_content "404! Not Found!"
        end
    end
end

app = Proc.new do |env|
    req = Rack::Request.new(env)
    res = Rack::Response.new
    MyController.new(req, res).execute
    res.finish
end

Rack::Server.start({
    app: app,
    Port: 3000
})