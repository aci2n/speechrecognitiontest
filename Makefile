PY := python3
VENV := source .venv/bin/activate

init:
	$(PY) -m venv .venv
	$(VENV) && \
	$(PY) -m pip install --upgrade pip -r requirements.txt

run: init
	$(VENV) && \
	$(PY) main.py

.PHONY: init run
