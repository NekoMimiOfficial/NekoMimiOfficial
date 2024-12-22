#!/bin/sh

rsync -r $PWD/__HOME__ $HOME
rsync -r $PWD/__CONFIG__ $HOME/.config/
