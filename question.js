function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri,
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevapKontrol = function(cevap){
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("Hangisi javascript paket paket yönetim uygulamasıdır ? ",{a : "Node.js",b : "Nuget",c : "Npm"},"a"),
    new Soru("Hangisi .net paket paket yönetim uygulamasıdır ? ",{a : "Node.js",b : "Nuget",c : "Npm"},"b"),
    new Soru("Hangisi .net paket paket yönetim uygulamasıdır ? ",{a : "Node.js",b : "Nuget",c : "Npm"},"c"),
    new Soru("Hangisi .net paket paket yönetim uygulamasıdır ? ",{a : "Node.js",b : "Nuget",c : "Npm"},"a")
]