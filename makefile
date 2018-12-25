deploy:
	git checkout source
	jekyll build
	git add -A
	git commit -m "update source"
	cp -r _site /tmp/
	git push origin source
	echo "===========push source==========="
	git checkout master
	rm -r ./*
	cp -r /tmp/_site/* ./
	rm -r /tmp/_site
	git add -A
	git commit -m "deploy blog"
	git push -u origin master:master
	echo "=========deploy github succeed=========="
	git push -u gitcafe master:gitcafe-pages
	echo "=========deploy gitcafe succeed=========="
	git checkout source

