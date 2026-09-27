# Build both CV versions. Shared content lives in shared_data/.
all: website professional

website:
	cd cv-website && latexmk -pdf cv.tex

professional:
	cd cv-professional && latexmk -pdf cv.tex

clean:
	cd cv-website && latexmk -c cv.tex
	cd cv-professional && latexmk -c cv.tex

.PHONY: all website professional clean
