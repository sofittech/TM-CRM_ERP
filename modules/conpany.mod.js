exports.name = "societe";
exports.version = "1.00";
exports.enabled = true;
exports.description = "Gestion des clients, contacts et fournisseurs";
exports.rights = [{
        "desc": "Lire les societes",
        "perm": {
            "read": true
        }
    },
    {
        "desc": "Creer modifier les societes",
        "perm": {
            "write": false
        }
    },
    {
        "desc": "Supprimer les societes",
        "perm": {
            "delete": false
        }
    },
    {
        "desc": "Exporter les societes",
        "perm": {
            "export": false
        }
    },
    {
        "desc": "Affecter des commerciaux",
        "perm": {
            "commercial": false
        }
    },
    {
        "desc": "Afficher les statistiques des ventes",
        "perm": {
            "stats": false
        }
    },
    {
        "desc": "Consulter tous les tiers par utilisateurs internes (sinon uniquement si contact commercial). Non effectif pour utilisateurs externes (tjs limités à eux-meme).",
        "perm": {
            "seeAll": false
        }
    },
    {
        "desc": "Modifier et gerer la segmentation",
        "perm": {
            "segmentation": false
        }
    },
    {
        "desc": "Modifier l'entité auquel est attaché le compte",
        "perm": {
            "entity": false
        }
    }
];
exports.menus = {
    "menu:organizations": {
        "position": 20,
        "perms": "societe.read",
        "enabled": "$conf->organizations->enabled",
        "usertype": 2,
        "icon": "fa-building-o",
        "title": "Organizations",
        "submenus": {
            "menu:customers": {
                "position": 10,
                "url": "/erp/#!/societe?type=PROSPECT_CUSTOMER",
                "perms": "societe.read",
                "enabled": "$conf->societe->enabled",
                "usertype": 2,
                "title": "companies:ListCustomersShort",
                "fk_menu": "menu:companies",
                "icon": "fa-institution"
            },
            "menu:contacts": {
                "position": 20,
                "url": "/erp/#!/contact",
                "perms": "contact.read",
                "enabled": "$conf->societe->enabled",
                "usertype": 2,
                "title": "companies:ListOfContacts",
                "fk_menu": "menu:companies",
                "icon": "fa-users"
            },
            "menu:suppliers": {
                "position": 10,
                "url": "/erp/#!/societe/supplier?type=SUPPLIER_SUBCONTRACTOR",
                "perms": "societe.read",
                "enabled": "$conf->societe->enabled",
                "usertype": 2,
                "title": "companies:ListOfSuppliersShort",
                "fk_menu": "menu:companies",
                "icon": "fa-institution"
            },
            "menu:thirdpartystats": {
                "position": 80,
                "url": "/erp/#!/societe/stats",
                "perms": "societe.stats",
                "enabled": "$conf->societe->enabled",
                "usertype": 2,
                "title": "orders:BillsStatistics",
                "fk_menu": "menu:companies",
                "icon": "fa-institution"
            }
        }
    }
};