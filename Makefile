phony: build clean

build: clean
	bundle init
	echo "gem 'github-pages', group: :jekyll_plugins" >> Gemfile
	bundle install
	bundle exec jekyll build

dev: clean build
	bundle exec jekyll serve

clean:
	rm -f Gemfile
	rm -f Gemfile.lock
	rm -rf _site/