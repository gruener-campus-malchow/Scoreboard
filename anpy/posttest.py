#!C:/Python27/python
# -*- coding: UTF-8 -*-
import os
import datetime

print "Content-Type: text/plain;charset=utf-8"
print

print "Hello World!"
print

print(
    datetime.datetime.fromtimestamp(
        int(os.path.getmtime(os.path.dirname(os.path.realpath(__file__)) + "/index.html"))
    ).strftime('%Y-%m-%d %H:%M:%S')
)
