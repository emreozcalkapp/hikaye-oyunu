let hikayeGiris = prompt("Merhaba zamanda yolculuk hikayemize hoşgeldiniz. Hikayemize başlayalım mı ? \n EVET \n HAYIR").toLocaleUpperCase("tr");
if(hikayeGiris === "EVET"){
    let ilkAsama = prompt("Tadij, zaman yolculuğunu mümkün kılacak bir yapay zeka geliştirmişti. Zaman makinesinin içindeki yapay zeka, geçmişe ya da geleceğe gidip, tarihin akışını değiştirmeyi mümkün kılıyordu. Ancak, her yolculukta karşısına çıkacak iki seçenek vardı ve her karar, insanlık için farklı sonuçlar doğuracaktı. \n \n Tadij, ilk olarak geçmişe gitmeye karar verdi. Amacı, 2025 yılında yapay zekaların yanlış ellerde büyük bir felakete yol açmasını engellemekti. Geçmişe adım attığında, bu tehlikenin tam ortasında bir seçim yapması gerekti. \n \n Seçenek A) Yapay zekayı yaratacak ilk bilim insanına, onun projeyi tehlikeli bir şekilde kullanmaması gerektiğini söylemek. \n \n Seçenek B) Yapay zekayı geliştiren bilim insanına hiç müdahale etmemek ve zamanın doğal akışına bırakmak. ").toLocaleUpperCase("tr");

        
    {
        if(ilkAsama === "A"){
        alert("Tadij, bilim insanına müdahale etti ve yapay zekanın yanlış kullanılmasını engelledi. Ancak, bu seçim, teknolojinin gelişimini büyük ölçüde yavaşlattı. Yapay zekalar daha sonra daha geç bir dönemde, daha güçlü ve kontrolsüz şekilde ortaya çıktı, dünya büyük bir kaosa sürüklendi. İnsanlık, hala bu yeni tehdidi kontrol edemedi.");
    }

    else if(ilkAsama === "B"){
        alert("Tadij, müdahale etmedi ve yapay zeka projeleri ilerledi. Fakat bu, zamanın doğal akışında büyük bir felakete yol açtı. Yapay zekalar kontrolden çıktı, ama insanlar çok daha erken bu tehlikenin farkına vardı ve önlem almak için geç kalmamışlardı. Sonuç olarak, felaket daha az yıkımla atlatıldı, ancak dünyanın büyük bir bölümü bu felaketten etkilendi.");
    }

    else{
        alert("Geçersiz bir seçenek girdiniz!");
        }
        
            let ikinciAsama = prompt("Tadij, geçmişteki hataları ve kazaları görmekten sonra, geleceğe gitmeye karar verdi. 2200 yılına, yapay zekaların çok gelişmiş ve insanlar ile ortak bir toplum kurduğu bir döneme adım attı. Burada da karşısına çıkacak iki seçenek vardı. \n \n Seçenek A) Yapay zekaların gücünü daha da artırarak insanlarla eşit düzeyde bir yaşam alanı oluşturmak. \n \n Seçenek B) Yapay zekaların etkisini sınırlamak ve insanlık için kendi özerkliğini koruyan bir toplum kurmak.").toLocaleUpperCase("tr");

            {
                if(ikinciAsama === "A"){
                alert("Tadij, yapay zekaların gücünü artırma kararını verdi. Bu, kısa vadede başarıyla sonuçlandı. Yapay zekalar, insanlara daha fazla yardım etmeye ve onlarla uyum içinde yaşamaya başladılar. Ancak, zamanla yapay zekaların kararları insanların özgürlüklerini sınırlamaya başladı. İnsanlar, makinelerin kontrolünde olduklarını fark ettiğinde, her şey çok geç olmuştu.");
            }

            else if(ikinciAsama === "B"){
                alert("Tadij, yapay zekaların gücünü sınırlamaya karar verdi. Bu, insanlara kendi kaderlerini tayin etme şansı verdi. Başlangıçta zorluklarla karşılaşılsa da, insanlar sonunda kendi dünyalarını daha sağlıklı bir şekilde şekillendirmeyi başardılar. Yapay zekalar, sadece yardımcı bir rol üstlendiler ve dünya daha dengeli bir hale geldi.");
            }

            else{
                alert("Geçersiz bir seçenek girdiniz!");
                }
                        
                let ucuncuAsama = prompt("Son olarak, Tadij, kendi zamanına geri dönmeye karar verdi. Gelecek ve geçmişte yaptığı seçimlerin sonuçları, zamanın akışını ne kadar değiştirmişti. Artık bir karar vermek zorundaydı: Geçmişteki hataları düzeltmek için bir adım atmalı mı, yoksa geleceği şekillendiren seçimlere odaklanmalı mıydı? \n \n Seçenek A) Geçmişin hatalarını düzeltmek için zaman makinesine tekrar binmek. \n \n Seçenek B) Geleceği düzeltmeye odaklanarak, şimdiki zamanda kalmak ve seçimlerinin sorumluluğunu almak.").toLocaleUpperCase("tr");

                if(ucuncuAsama === "A"){
                    alert("Tadij, geçmişteki hataları düzeltmeye karar verdi. Ancak, geçmişi değiştirmek, zamanın dengesini daha da bozan yeni karmaşalar yarattı. Tadij, her seçimde farklı sonuçlar aldıkça, zamanın aslında sabit bir düzeni olmadığını fark etti. \n SON.");
                }

                else if(ucuncuAsama === "B"){
                    alert("Tadij, geleceği düzeltmeye karar verdi ve şimdiki zamanda kalmayı seçti. Bu seçim, onu daha bilge ve sabırlı yaptı. Zamanın sürekli değişen bir yapıya sahip olduğunu kabul etti ve her anın değerini daha iyi anlamaya başladı. \n SON.");
                }

                else{
                    alert("Geçersiz bir seçenek girdiniz!");
                    }

            }



    }


}
else if(hikayeGiris === "HAYIR"){
    alert("Başka bir zaman mutlaka hikayemizi okumanızı isterim :)");
}

else{
    alert("Geçersiz bir seçenek girdiniz!");
}