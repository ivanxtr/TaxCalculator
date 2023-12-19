install:
	docker pull ptsdocker16/interview-test-server

run:
	docker run --init -p 8000:5000 -it --rm ptsdocker16/interview-test-server