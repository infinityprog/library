import RPi.GPIO as GPIO #permet d'utiliser les pins GPIO du PI
import requests #permet de dialoguer avec le serveur
import time #pour que le PI aie la notion du temps

GPIO.setmode(GPIO.BCM) #permet d'utiliser les pin GPIO et non celle noté sur le PI
GPIO.setwarnings(False)

X = 0#restet des variables en début de prog
TEMP = 0#restet des variables en début de prog
IN = 0

DELAY_RELAY = 0.5#Temps en milliseconde permettant au laser d'arriver sur les LDR
DURING = 30#"temps" que le programme boucle dans la detection des LDR avant que le programme revienne a la partie détection du PIR
URL = 'https://library-raspberry-ws.herokuapp.com/passage/more'

LDR_1 = 18#Pin GPIO.18 du PI
LDR_2 = 25#Pin GPIO.25 du PI
PIR = 23#Pin GPIO.23 du PI
RELAY = 24#Pin GPIO.24 du PI

GPIO.setup(PIR, GPIO.IN)#SET des pin en entrées
GPIO.setup(LDR_1, GPIO.IN)#SET des pin en entrées
GPIO.setup(LDR_2, GPIO.IN)#SET des pin en entrées
GPIO.setup(RELAY,GPIO.OUT)#SET de la pin de sortie pour le transistor
GPIO.output(RELAY, GPIO.LOW) # on coupe les LASERS

while True : #"Void loop"

    while X == 0: #tant que X vaut 0

        print("En attente d'une détection") #pour bien vérifier dans la boite de dialogue le code est a cet endroit la

        Detected = GPIO.wait_for_edge(PIR, GPIO.RISING) #en attente d'un Flanc montant de la par du capteur PIR, afin de rentrer une seule fois dans le code

        if Detected is None : #si il ne détecte rien , il ne fait rien

            print() #il ne fait rien

        else: #si il détecte quelque chose, alors X = 1 , ce qui veut dire qu'il va sortie de la boucle while et il va continuer le code

            X += 1 #j'aurais très bien pu utiliser une "break" permettant ainsi de sortir de la boucle et de continuer le programme

    while (TEMP < DURING):

        GPIO.output(RELAY, GPIO.HIGH)# on allume les LASERS

        time.sleep(DELAY_RELAY)

        if (GPIO.input(LDR_1) == 1) and (GPIO.input(LDR_2) == 1) : #si les 2 faisceaux sont coupé , alors c'est qu'il y a quelqu'un sous la porte et devant les capteurs

            print("Une personne est sous la porte")

            break #permet de sortir d'une boucle (dans ce cas ci, la boucle for)

        elif (GPIO.input(LDR_1) == 1) and (GPIO.input(LDR_2) == 0) : #si le faisceau du côté à l'extérieur de la biblio est coupé en prémier , alors c'est qu'un personne rentre

            IN = 1

            break #permet de sortir d'une boucle (dans ce cas ci, la boucle for) 

        elif (GPIO.input(LDR_1) == 0) and (GPIO.input(LDR_2) == 1): #si le faisceau du côté à l'intérieur de la biblio est coupé en prémier , alors c'est qu'un personne sort

            print("Une personne est sortie de la bibliothèque") # requête prersonne -1

            break #permet de sortir d'une boucle (dans ce cas ci, la boucle for) 

        else:

                TEMP += 1

                print(".") # en attente d'une coupure de faisceau

    if IN == 1 :

        res = requests.get(URL)

        print(res.json(),' personnes sont dans la bibliothèque')

    GPIO.output(RELAY, GPIO.LOW) # on coupe les LASERS

    X = 0 #reset de la variable X permettant de rerentrer dans la boucle du capteur PIR
    IN = 0
    TEMP = 0
    
    continue # permet de revenir a la première boucle while