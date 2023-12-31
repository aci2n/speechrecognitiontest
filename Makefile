PY := python3.8
VENV := source .venv/bin/activate

init:
	$(PY) -m venv .venv
	$(VENV) && \
	$(PY) -m pip install --upgrade pip -r requirements.txt

run:
	$(VENV) && \
	$(PY) main.py

clean:
	rm -rf .venv

.PHONY: init run clean
