run:
	make calendar
	make weather
	make news	

install:
	pip install --upgrade google-api-python-client
	pip install feedparser

calendar:
	python calendarModule.py

weather:
	python weatherModule.py

news:
	python newsModule.py
