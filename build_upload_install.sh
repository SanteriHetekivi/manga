#!/usr/bin/env bash

rm -rf dist &&
python3 -m build &&
python3 -m twine upload dist/* --verbose &&
pip install --upgrade manga_searcher==0.0.1