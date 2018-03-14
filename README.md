# Scoreboard
Scoreboard for wrestling

Anzeigetafel für Ringkampf

Dokumentation für die Erstellung des Skripts für die Anzeigetafel eines Ringkampfes

Anforderungen an das Programm:
- Anzeigetafel für das Publikum
- Eingabe durch Juroren
- Historie die für die Öffentlichkeit sichtbar ist
- Sicherheit: Nur die Juroren können eingeben, die Öffentlichkeit darf die Daten nicht ändern

Was muss das Programm können:
- Ein Ringkampf hat n Runden
- Erwachsene kämpfen 3 Min.
- Kinder kämpfen 2 Min.
- Mehrere Ringkämpfe finden gleichzeitig statt


Möglichkeiten der Umsetzung:
- Lokaler Raspberry Pi an einer Anzeige, über den alle Daten gespeichert und angezeigt werden


# Scoreboard Boilerplate

Virtual Enviroment Möglich

Set up Django:
```
> pip3 install Django
> django-admin startproject Scoreboard
> python3 manage.py startapp board
> python3 manage.py runserver
```
Für Datenbanken:
```
> python3 manage.py makemigrations 
> python3 manage.py migrate
```
oder falls migrations auf eine spezielle App wie board
```
> python3 manage.py makemigrations board
> python3 manage.py migrate
```

Superuser erstellen:
```
> python3 manage.py createsuperuser
```
Auf Superuser zugreifen:
http://127.0.0.1:8000/admin/

https://www.techiediaries.com/create-react-app-django/

