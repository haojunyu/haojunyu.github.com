#!/bin/bash
# coding:   utf-8
# Author:   hjy
# Gmail:    haojunyu2012@gmail.com
# Detail:   此脚本用于，目前适用于ubuntu版本


if which apt-get > /dev/null; then
    echo "You are using Ubuntu!"
elif which yum > /dev/null; then
    echo "You are using CentOs!"
elif which brew > /dev/null; then
    echo "You are using Mac OS X!"
fi

