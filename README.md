<img src="http://assets.angular.schule/header-angular-mitpizza.png">

**Speaker:** Ferdinand Malcher<br>
**Datum:** 11. April 2018<br>
**Ort:** Hochschule für Telekommunikation Leipzig<br>

<hr>

**Schön, dass ihr dabei seid!**  
In dieser Veranstaltung lernt ihr in wenigen Stunden, wie ihr Webanwendungen mit Angular entwickelt.
Wir machen einen Vortrag mit Workshop – zum Mitmachen! Der Quelltext unserer Beispielanwendung ist während des Workshops in diesem GitHub-Repo verfügbar:
> **https://github.com/angular-schule/2018-04-meetup-hft-leipzig**

**Wenn ihr mitcoden möchtet, solltet ihr einen eigenen Laptop mitbringen und ein paar Vorbereitungen treffen.**


## Benötigte Software

1. Node.js **8.9** oder höher: [https://nodejs.org](https://nodejs.org)
2. Visual Studio Code: [https://code.visualstudio.com](https://code.visualstudio.com)
   * [Angular-Schule: Extension Pack](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack) für Visual Studio Code 
3. Google Chrome: [https://www.google.com/chrome/](https://www.google.com/chrome/)



## Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl könnt ihr die CLI installieren:

```
npm install -g @angular/cli@next
```

> Wir haben hier explizit das Tag `next` angegeben. Damit bekommen wir die neue Version `6.0.0`, die aktuell noch nicht releaset ist.


Überprüft bitte anschließend die Versionen, damit wir vor Ort alle auf dem gleichen Stand sind.
```
node -v
> Erwartet: v8.9.x oder höher

npm -v
> Erwartet: 5.x oder höher

ng -v
> Erwartet: 6.0.0-rc.0
```


## Startprojekt erzeugen

Bitte legt das Übungsprojekt schon vor Beginn des Workshops an.
Die Angular CLI nimmt uns die meisten Schritte schon ab.
Was die Parameter im Einzelnen bedeuten, besprechen wir natürlich noch!

Führt in eurem Arbeitsverzeichnis die folgenden Befehle aus:

```
ng new pizza-rating --routing --style=scss
cd pizza-rating
ng serve
```

Achtung! Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Wartet bitte beim Schritt `Installing packages for tooling via npm.` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit dem Text "Welcome to app" erscheinen!
Wenn bei allen Teilnehmern das Grundgerüst steht, können wir ohne Zeitverlust loslegen.

![Screenshot CLI](http://assets.angular.schule/chrome_cli_welcome.png)



Sollte es zu einer Fehlermeldung kommen, dann sendet uns den Fehlertext einfach per Mail an [team@angular.schule](mailto:team@angular.schule).



### Wir freuen uns schon! 🙂

Bei Fragen wendet euch einfach direkt an das Angular-Schule-Team:  
[team@angular.schule](mailto:team@angular.schule)

<hr>

<img src="http://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; 2018 https://angular.schule, Stand: 05.04.2018


