run: venv/touchfile
	venv/bin/python main.py

venv:
	python3.8 -m venv venv

venv/touchfile: venv requirements.txt
	venv/bin/python -m pip install -U pip -r requirements.txt
	touch venv/touchfile

clean:
	rm -rf venv

.PHONY: run clean
