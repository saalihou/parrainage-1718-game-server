var questions = [
    {
        "question" : "Le nombre qui suit le nombre 4 en base 5 est",
        "choix" : [10,5,0],
        "bonne_reponse" : 0
    },
    {
        "question" : "Combien y'a t-il d'octets dans un ko (kilo-octet) ?",
        "choix" : [1000,1024,1048],
        "bonne_reponse" : 0
    },
    {
        "question" : "Un clavier français est un clavier ?",
        "choix" : ["AZERTY","QWERTY","Type 12"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Sous Windows XP, la configuration est enregistré dans ?",
        "choix" : ["Le fichier autoexec.bat"," Le fichier win.ini","la base de registre"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Le HTML est un langage dit",
        "choix" : ["Encode","Crypte","Balise"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Qu'est-ce que le BIOS ?",
        "choix" : ["C'est l'outil de configuration de la carte mère","C'est un jeu","Rien"],
        "bonne_reponse" : 0
    },
    {
        "question" : "A l'installation de Windows, qu'est-il préconisé de faire ?",
        "choix" : ["Une seule partition","Deux partitions","Dix partitions"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Qui a invente le langage C",
        "choix" : ["Denis Ritchie","Tim Bernes Lee","Christophe Carper"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Que signifie ESP?",
        "choix" : ["Excellence dans la Solidarite et le Partage","Ecole Superieure Polytechnique","Ecole Superieure de Peche"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Que signifie AJAX?",
        "choix" : ["Asynchronous Java And XML ","Asynchronous Javascript And XML","Asynchronous JEE And XML"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Que signifie JSON?",
        "choix" : ["Java Object Notation","Javascript Object Notation","JEE Object Notation"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Pour sélectionner un fichier, j'utilise ...",
        "choix" : ["Le clic droit","Le clic gauche","La molette"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Quel logiciel est fourni avec Windows pour dessiner ?",
        "choix" : ["Paint","Photoshop","Notepad"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Pour aller sur Internet, j'utilise :",
        "choix" : ["un navigateur","un aviateur","un explorateur"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Pour me connecter à Internet, j'utilise ...",
        "choix" : ["Une carte bluetooth","Une carte-infrarouge","une carte reseau"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Comment se nomme le format de codage le plus courant des pages Internet ?",
        "choix" : ["Java","HTTP","HTML"],
        "bonne_reponse" : 1
    },
    {
        "question" : "XML:",
        "choix" : ["est un format de description de données","ne permet pas de séparer le contenu de la présentation","est un langage de programmation"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Quel logiciel est utilise pour faire des presentations?",
        "choix" : ["Microsoft Office","Microsoft Powerpoint","Winrar"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Qui a invente Linux?",
        "choix" : ["Lindan Mallkof","Linux Torvalds","Linus Torvalds"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Que signifie www ?",
        "choix" : ["World Window Web","Web World Wide","World Wide Web"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Que signifie HTTP?",
        "choix" : ["Hypertext Transport Protocol","Hypertext Transfert Protocol","Hyphertext Transfert Protocol"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Que signifie FSF?",
        "choix" : ["Foundation of Senegal for Families","Free Software Foundation","Foundation of Software Free"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Que signifie FTP ?",
        "choix" : ["Fichier de Tranfert des Protocoles","File Transport Protocol","File Transfert Protocol"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Parmi les adresses IP suivantes, laquelle n’est pas valide :",
        "choix" : ["1.2.3.4","192.168.1.0","10.256.11.9"],
        "bonne_reponse" : 2
    },
    {
        "question" : "La commande « ping » sert à :  ",
        "choix" : ["rien","verifier le temps de reponse d'une machine distante","Trouver l'emplacement d'une machine"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Que signifie URL?",
        "choix" : ["Unified Resource Locator","Uniform Remote Localisation","Uniform Resource Locator"],
        "bonne_reponse" : 2
    },
    {
        "question" : "UML est:",
        "choix" : ["La meme chose que Merise","un type de port","un langage de modelisation"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Qu'est-ce qu'un upgrade ?",
        "choix" : ["une mis a jour","Le chargement d'un fichier informatique vers un ordinateur","Un systeme d'exploitation"],
        "bonne_reponse" : 0
    },
    {
        "question" : "De combien de couches dispose le modele OSI?",
        "choix" : ["10","5","7"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Je sers a trouver l'adresse MAC d'une station dont l'adresse IP est connue, je suis:",
        "choix" : ["ICMP","DNS","ARP"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Protocole de resolution d'adresses IP:",
        "choix" : ["IPv4","DNS","IPv6"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Internet est un reseau:",
        "choix" : ["local","dont la couverture est mondiale","qui appartient a une seule firme"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Pour accéder à Internet, l'utilisateur doit utiliser les services d'un :",
        "choix" : ["programmeur","electronicien","fournisseur d'acces"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Comment s'appelle la possibilité d'envoyer un fichier via le courrier électronique ?",
        "choix" : ["piece jointe","document","piece securisee"],
        "bonne_reponse" : 0
    },
    {
        "question" : "La construction des pages Web est basée sur un langage de formatage. Il s'agit du langage :",
        "choix" : ["HTTP","Javascript","HTML"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Un réseau LAN peut relier Bruxelles et Londres :",
        "choix" : ["Non","Oui","Parfois"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Un réseau Ethernet véhicule les informations dans  :",
        "choix" : ["un paquet","un datagramme","une trame"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Une adresse IPv4 est composée de",
        "choix" : ["4 nombres compris entre 0 et 256","4 nombres compris entre 0 et 255","6 octets"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Un algorithme est :",
        "choix" : ["Un programme ecrit en Pascal","un programme ecrit en html","une suite d'actions à exécuter, de la première à la dernière."],
        "bonne_reponse" : 2
    },
    {
        "question" : "Parmi les éléments suivants, quel est celui qui permet de stocker une valeur ?",
        "choix" : ["onstante","variable","expression"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Comment s'appelle l'action qui soustrait un d'une variable ? Une: ",
        "choix" : ["decrementation","incremantation","soustraction de un"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Quelle est la structure qui permet de choisir une action parmi deux possibles ? Une :",
        "choix" : ["sequence","alternative","repetitive"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Pour définir un formulaire, j'utilise la paire :",
        "choix" : ["<form></form","<p></p>","<formulaire></formulaire>"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Identifier l'intrus: ",
        "choix" : ["Chrome","Safari","WinRar"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Identifier l'intrus: ",
        "choix" : ["Office","Powerpoint","Photoshop"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Identifier l'intrus: ",
        "choix" : ["Photoshop","Illustrator","Chrome"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Quel fruit represente le logo d'apple?",
        "choix" : ["Banane","Ananas","Pomme"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Qui a cree le concept d'Open Source",
        "choix" : ["Richard Richmond","Richard Depardieu","Richard Stallman"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Wi-Fi signifie ",
        "choix" : ["Windows Fidelity","Windows Fi","Wireles-Fidelity"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Wi-Fi permet de créer un réseau :",
        "choix" : ["filaire sans fil","sans fil","filaire"],
        "bonne_reponse" : 1
    },
    {
        "question" : "IP signifie :",
        "choix" : ["Internet Procedure","Internet Protocol","Inside Procedure"],
        "bonne_reponse" : 1
    },
    {
        "question" : "L'adresse IPv4 0.0.0.0 est utilisée par une machine quand elle :",
        "choix" : [" ne dispose pas encore d'une adresse IP","fonctionne correctement","souhaite se déconnecter du réseau"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Si je réalise un ET logique (au niveau binaire) entre une adresse IPv4 et un masque, j'obtiens :",
        "choix" : ["l'adresse de l'hôte"," l'adresse du réseau","le masque"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Le protocole DHCP est il routable ?",
        "choix" : ["Parfois","Oui","Non"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Combien de couches du modéle OSI gére 1 Hub ?",
        "choix" : ["2","4","1"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Quel est le port usuel du protocole FTP?",
        "choix" : ["53","21","110"],
        "bonne_reponse" : 21
    },
    {
        "question" : "Quel est la commande permettant de restaurer le master boot record sous MSDOS ?",
        "choix" : ["Fdisk /mbr","fdisk /r /w","Fdisk /all"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Quel est la commande permettant de vérifier la route utilisée entre l'hôte local et un hôte distant ?",
        "choix" : ["TRACERT","ROUTE","NSLOOKUP"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Quel est la topologie logique du type de réseau token ring ?",
        "choix" : ["Anneau","Etoile","Bus"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Quel est la topologie logique du type de réseau Ethernet ?",
        "choix" : ["ETOILE","BUS","ANNEAU"],
        "bonne_reponse" : 1
    },
    {
        "question" : "HTTP :// WWW.GOOGLE.fr est un nom de domaine pleinement qualifié quel est son terme exact ?",
        "choix" : ["UDP","FQDN","RIP"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Qu'est ce que le LAN ?",
        "choix" : ["Le LAN est un cable permettant de relier 2 cartes Ethernet","Le LAN (Local Area Network) est un réseau local","Le LAN est une nouvelle norme d'accés à distance pour les Modems de type V92"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Qu'elles seront les touches à appuyer en raccourci clavier pour copier un fichier ?",
        "choix" : ["CTRL + X","CTRL + C","CTRL + V"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Comment s'appelle un réseau composé de PC qui sont tous clients et serveurs ?",
        "choix" : ["Reseau LAN","Peer to Peer","Reseau WAN"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Quel est la commande permettant d'afficher un cache d'adresses IP résolues en Adresse MAC ?",
        "choix" : ["ARP","ICMP","PAP"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Qu'elles seront les touches à appuyer en raccourci clavier pour selectionner tous les fichiers d' un dossier ?",
        "choix" : ["CTRL + V","CTRL + C","CTRL + A"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Quel est le périphérique qui gére la couche physique et la sous couche MAC ?",
        "choix" : ["La carte reseau","Le modem","Le switch"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Quel est le protocole permettant d'attribuer des adresses IP automatiquement et dynamiquement ?",
        "choix" : ["DNS","DHCP","ARP"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Quel est la commande permettant d'afficher ou modifier la table de routage ?",
        "choix" : ["TRACERT","ROUTE","IPCONFIG"],
        "bonne_reponse" : 1
    },
    {
        "question" : "quel est l'impédence des câbles coaxiaux ?",
        "choix" : ["50 ohms","120 ohms","2 ohms"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Quel est le service permettant de résoudre les adresses IP en nom netbios ?",
        "choix" : ["Wins","DNS","DHCP"],
        "bonne_reponse" : 0
    },
    {
        "question" : "Qu'elles seront les touches à appuyer en raccourci clavier pour renommer un dossier ?",
        "choix" : ["Alt+Tab","F2","F5"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Une adresse IP contient combien d'octets en tout?",
        "choix" : ["8 octets","5 octets","4 octets"],
        "bonne_reponse" : 2
    },
    {
        "question" : "Combien de couches du modéle OSI gére 1 répeteur ?",
        "choix" : ["4","1","2"],
        "bonne_reponse" : 1
    },
    {
        "question" : "le masque de sous réseau 255.255.0.0 correspond à quel classe ?",
        "choix" : ["Y","B","Z"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Qu'elles seront les touches à appuyer en raccourci clavier pour ouvrir l'explorateur de Windows ?",
        "choix" : ["Windows+R","Windows+E","Windows+pause"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Tout le monde connait aujourd'hui Internet, quelle en est l'origine ?",
        "choix" : ["Arpinet","Arpanet","World wide web"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Le binaire ne comporte que des ...",
        "choix" : ["1 et 2","0 et 1"," 0 et 2"],
        "bonne_reponse" : 1
    },
    {
        "question" : "Qui sont les fondateurs de Google ?",
        "choix" : ["Jobs et Wozniak","Page et Brin","Gates et Allen"],
        "bonne_reponse" : 1
    }

]