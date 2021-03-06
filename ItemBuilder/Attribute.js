const attributeNames = {
    OuchPower: "Physical Power",
    ZapPower: "EnergyPower",
    OuchieArmor: "Physcial Armor",
    SizzleArmor: "Energy Armor",
    FlatOuchiePenetration: "Physical Penetration",
    FlatSizzlePenetration: "Energy Penetration",
    MovementSpeed: "Movement Speed",
    Health: "Health",
    HealthRegenRate: "HealthRegenRate",
    Mana: "Mana",
    ManaRegenRate: "ManaRegenRate",
    PCTCDR: "Cooldown Reduction",
    AttackSpeed: "Attack Speed",
    LifeSteal: "LifeSteal",
    CritChance: "CritChance"
    
}

const heroAttributeNames = {

    health: "Health",
    healthRegen: "HealthRegenRate",
    mana: "Mana",
    manaRegen: "ManaRegenRate",
    physicalArmor: "OuchieArmor",
    energyArmor: "SizzleArmor",
    movespeed: "MovementSpeed",

    healthPerLevel: "Health per Level",
    healthRegenPerLevel: "Health Regeneration per Level",
    manaPerLevel: "Mana per Level",
    manaRegenPerLevel: "Mana Regeneration per Level",
    physicalArmorPerLevel: "Physical Armor per Level",
    energyArmorPerLevel: "Energy Armor per Level"
}

function heroAttributeToAttribute(heroAttribute){
    
    return attributeNames[heroAttributeNames[heroAttribute]];
}

function attributesAsDictionary(attributes){
    let attributesDictionary = {};

    for(var i in attributes){
        
        attributesDictionary[attributes[i].attributeName] = attributes[i];

        //console.log(attributes[i].attributeName);
    }
    //console.log("Dictionary Creation complete\n\n")

    return attributesDictionary;
}

class Attribute{
    constructor(name, value, rank, details){

        this.attributeName = (name === undefined)? "Physical Power": name ;
        this.value = (value === undefined)? 0 : value;
        this.rankValue = (rank === undefined)? 0 : rank;
        this.details = (details === undefined)? "" : details;
    }  
    
    createAttribute(name, value, rank, details) {
        this.attributeName = name;
        this.value = value;
        this.rankValue = rank;
        this.details = details;
    }
}
