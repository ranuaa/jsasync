function selamatDatang (response) {
    return new Promise((resolve, reject) => { 
        resolve (document.getElementById("attas").innerHTML = "Selamat Datang Di toko Kami");
    })
}

function loading (waktu) {
    return new Promise((resolve) => { 
        setTimeout(resolve, waktu);
    })
}

function namaBarang (barang) {
        var select = document.getElementById('sel1');
        var isi = select.options[select.selectedIndex].value;
        return isi
    }

function titleHeader () {
    var title = document.getElementById("headerKategori");
    return title;
}

function coba1(pilihan) {
    var jud = titleHeader();
        return new Promise((resolve, reject) => {
            if (pilihan === "Laptop") {
                resolve (
                    // 1
                jud.innerHTML = "Anda Berada Di Kategori " + pilihan,
                document.getElementById("toko1").innerHTML = "intelofficial",
                document.getElementById("nama1").innerHTML = "ASUS VIVOBOOK E E410KAO-HD422",
                document.getElementById("harga1").innerHTML = "Rp5.089.000",
                document.getElementById("keterangan1").innerHTML ="ASUS VIVOBOOK E E410KAO-HD422 (14 HD ,Intel® Celeron® N4500/UMA/4G/512G PCIE/WHITE/WIN 11)",
                document.getElementById("gambar1").src ="https://cf.shopee.co.id/file/29a77b15d9697d7ebb1234f32695f48a",
    
                // 2
                document.getElementById("toko2").innerHTML = "intelofficial",
                document.getElementById("nama2").innerHTML = "ASUS VIVOBOOK E E410KAO-HD422",
                document.getElementById("harga2").innerHTML = "Rp5.089.000",
                document.getElementById("keterangan2").innerHTML ="ASUS VIVOBOOK E E410KAO-HD422 (14 HD ,Intel® Celeron® N4500/UMA/4G/512G PCIE/WHITE/WIN 11)",
                document.getElementById("gambar2").src ="https://cf.shopee.co.id/file/29a77b15d9697d7ebb1234f32695f48a",
    
                // 3
                document.getElementById("toko3").innerHTML = "intelofficial",
                document.getElementById("nama3").innerHTML = "DELL VOSTRO V5310-I5-8-512S",
                document.getElementById("harga3").innerHTML = "Rp15.895.000",
                document.getElementById("keterangan3").innerHTML ="DELL VOSTRO V5310-I5-8-512S - i5-1130H/8GB/512GB/13.3 FHD/WIN11/GREY",
                document.getElementById("gambar3").src ="https://cf.shopee.co.id/file/ec624649aa0432dba6397288bb8f113e",
                document.getElementById("kardus1").style.display = "block",
                document.getElementById("kardus2").style.display = "block",
                document.getElementById("kardus3").style.display = "block",
                document.getElementById("boddy").style.background = "white"
                )
    } else {
        reject (
            jud.innerHTML = "Anda Berada Di Kategori " + pilihan,
        )
    }
    })
    }




function coba2(pilihan) {
    var jud = titleHeader();

    return new Promise((resolve, reject) => {
        if (pilihan === "Handphone") {
        resolve (
            // 1
            jud.innerHTML = "Anda Berada Di Kategori " + pilihan,
            document.getElementById("toko1").innerHTML = "Erafone",
            document.getElementById("nama1").innerHTML = "Apple iPhone 11 64GB",
            document.getElementById("harga1").innerHTML = "Rp7.499.000",
            document.getElementById("keterangan1").innerHTML ="Rekam video 4K, potret yang indah, dan lanskap yang lebih luas dengan sistem kamera ganda yang sepenuhnya baru. Ambil foto berpencahayaan rendah terbaik dengan mode Malam",
            document.getElementById("gambar1").src ="https://cf.shopee.co.id/file/4b25cee7bfed4380b46ae1c631485cfe",

            // 2
            document.getElementById("toko2").innerHTML = "Erafone",
            document.getElementById("nama2").innerHTML = "Apple iPhone 13 Pro 512GB",
            document.getElementById("harga2").innerHTML = "Rp23.999.000",
            document.getElementById("keterangan2").innerHTML ="iPhone 13 Pro. Pembaruan sistem kamera Pro yang terbesar. Layar Super Retina XDR dengan ProMotion untuk penggunaan yang terasa lebih cepat dan responsif. Chip A15 Bionic yang secepat kilat. Desain kokoh dan lompatan besar dalam kekuatan baterai.",
            document.getElementById("gambar2").src ="https://cf.shopee.co.id/file/43dbe5c2b568a5dc22c9d9ca879a3647",
        
            //card 3
        
            document.getElementById("toko3").innerHTML = "Erafone",
            document.getElementById("nama3").innerHTML = "Apple iPhone 12 64GB",
            document.getElementById("harga3").innerHTML = "Rp11.499.000",
            document.getElementById("keterangan3").innerHTML ="iPhone 12. Layar Super Retina XDR 6,1 inci yang begitu cerah.(1) Ceramic Shield dengan ketahanan jatuh empat kali lebih baik.(2)Fotografi pencahayaan rendah yang menakjubkan dengan mode Malam di semua kamera",
            document.getElementById("gambar3").src ="https://cf.shopee.co.id/file/39e2404cfe9f94797d0813f7605a8153",
            document.getElementById("kardus1").style.display = "block",
            document.getElementById("kardus2").style.display = "block",
            document.getElementById("kardus3").style.display = "block",
            document.getElementById("boddy").style.background = "white"
        )
    } else {
        reject (
            jud.innerHTML = "Anda Berada Di Kategori " + pilihan,
        )
    }
    })
    
}

function coba3(pilihan) {
    var jud = titleHeader();

    return new Promise((resolve, reject) => {
        if (pilihan === "Smart TV") {
            resolve (
                // 1
            jud.innerHTML = "Anda Berada Di Kategori " + pilihan,
            document.getElementById("toko1").innerHTML = "Xiaomi Official",
            document.getElementById("nama1").innerHTML = "Xiaomi Mi TV 4 43 inch",
            document.getElementById("harga1").innerHTML = "Rp3.299.000",
            document.getElementById("keterangan1").innerHTML ="Xiaomi Mi TV 4 43 inch Full HD LED Smart TV - Patchwall OS 3.0 Netflix Bluetooth Garansi Resmi",
            document.getElementById("gambar1").src ="https://cf.shopee.co.id/file/806feedceba958a919b3c1f3a1258afb",

                //card 2

            document.getElementById("toko2").innerHTML = "Xiaomi Official",
            document.getElementById("nama2").innerHTML = "Xiaomi Mi TV 4 43 Bezel-Less Smart TV",
            document.getElementById("harga2").innerHTML = "Rp3.499.000",
            document.getElementById("keterangan2").innerHTML ="Xiaomi Mi TV 4 43 inch Bezel-Less Smart TV - AndroidTV Google Assistant - Patchwall 3.0 + Netflix - DTS",
            document.getElementById("gambar2").src ="https://cf.shopee.co.id/file/c3d7f08f1def4d954afb9c159db93c23",

            //card 3

            document.getElementById("toko3").innerHTML = "Xiaomi Official",
            document.getElementById("nama3").innerHTML = "Xiaomi TV A2 43",
            document.getElementById("harga3").innerHTML = "Rp3.899.000",
            document.getElementById("keterangan3").innerHTML ="Xiaomi TV A2 43 Layar 4K Ultra HD Dolby Vpilihanon HDR 10 Android TV Google Play Netflix Disney",
            document.getElementById("gambar3").src ="https://cf.shopee.co.id/file/6121193a58e904fc464cd8755fa2c286",
            document.getElementById("kardus1").style.display = "block",
            document.getElementById("kardus2").style.display = "block",
            document.getElementById("kardus3").style.display = "block",
            document.getElementById("boddy").style.background = "white"
            )
        }else {
            reject (
                jud.innerHTML = "Anda Berada Di Kategori " + pilihan,
            )
        }
    })
    
}

function coba4(pilihan) {
    var jud = titleHeader();

    return new Promise((resolve, reject) => {
        if (pilihan === "Kulkas") {
            resolve (
                // 1
        jud.innerHTML = "Anda Berada Di Kategori " + pilihan,
        document.getElementById("toko1").innerHTML = "LG Official Shop",
        document.getElementById("nama1").innerHTML = "LG Kulkas 2 Pintu GN-B195SQMT",
        document.getElementById("harga1").innerHTML = "Rp3.200.000",
        document.getElementById("keterangan1").innerHTML ="- Multi Air Flow - Moist Balance Crisper - LED Lighting - Pendinginan Cepat & Merata - Rak dengan Tempered Glass - Kapasitas Box Buah dan Sayuran yang Lebih Besar",
        document.getElementById("gambar1").src ="https://cf.shopee.co.id/file/51955dd2536921ab084aafaf3ab72979",

            //card 2

        document.getElementById("toko2").innerHTML = "LG Official Shop",
        document.getElementById("nama2").innerHTML = "LG New InstaView Door-in-Door™ - GC-X257CQES",
        document.getElementById("harga2").innerHTML = "Rp34.360.000",
        document.getElementById("keterangan2").innerHTML ="- LG Instaview™ terbaru dengan window 23% lebih lebar - Dilengkapi UVnano™ pada nozzle dispenser yang dapat menghilangkan 99,99% bakteri - LinearCooling menjaga kesegaran bahan makanan lebih lama - DoorCooling+ memberikan suhu dingin lebih cepat &  merata",
        document.getElementById("gambar2").src ="https://cf.shopee.co.id/file/b6b1d32a2342da8c4eddcf2e988644a7",

        //card 3

        document.getElementById("toko3").innerHTML = "LG Official Shop",
        document.getElementById("nama3").innerHTML = "LG New Side by Side Refrigerator - GC-B257JQYL",
        document.getElementById("harga3").innerHTML = "Rp14.220.000",
        document.getElementById("keterangan3").innerHTML ="- LinearCooling menjaga kesegaran bahan makanan lebih lama - Kapasitas lebih besar untuk menyimpan bahan makanan untuk keluarga - LG ThinQ untuk mengatur & kontrol suhu kulkas dengan smartphone - Kapasitas: 688L gross / 643L net",
        document.getElementById("gambar3").src ="https://cf.shopee.co.id/file/8ea9aa4a458e42b74159bdfbbf3629cf",
        document.getElementById("kardus1").style.display = "block",
        document.getElementById("kardus2").style.display = "block",
        document.getElementById("kardus3").style.display = "block",
        document.getElementById("boddy").style.background = "white"
        
            )
        } else {
            reject (
                jud.innerHTML = "Anda Berada Di Kategori " + pilihan,
            )
        }
    })
    
}

function coba5(pilihan) {
    var jud = titleHeader();

    return new Promise((resolve, reject) => {
        if (pilihan === "Kulkas") {
            resolve (
                // 1
        jud.innerHTML = "Anda Berada Di Kategori " + pilihan,
        document.getElementById("toko1").innerHTML = "LG Official Shop",
        document.getElementById("nama1").innerHTML = "LG Kulkas 2 Pintu GN-B195SQMT",
        document.getElementById("harga1").innerHTML = "Rp3.200.000",
        document.getElementById("keterangan1").innerHTML ="- Multi Air Flow - Moist Balance Crisper - LED Lighting - Pendinginan Cepat & Merata - Rak dengan Tempered Glass - Kapasitas Box Buah dan Sayuran yang Lebih Besar",
        document.getElementById("gambar1").src ="https://cf.shopee.co.id/file/51955dd2536921ab084aafaf3ab72979",

            //card 2

        document.getElementById("toko2").innerHTML = "LG Official Shop",
        document.getElementById("nama2").innerHTML = "LG New InstaView Door-in-Door™ - GC-X257CQES",
        document.getElementById("harga2").innerHTML = "Rp34.360.000",
        document.getElementById("keterangan2").innerHTML ="- LG Instaview™ terbaru dengan window 23% lebih lebar - Dilengkapi UVnano™ pada nozzle dispenser yang dapat menghilangkan 99,99% bakteri - LinearCooling menjaga kesegaran bahan makanan lebih lama - DoorCooling+ memberikan suhu dingin lebih cepat &  merata",
        document.getElementById("gambar2").src ="https://cf.shopee.co.id/file/b6b1d32a2342da8c4eddcf2e988644a7",

        //card 3

        document.getElementById("toko3").innerHTML = "LG Official Shop",
        document.getElementById("nama3").innerHTML = "LG New Side by Side Refrigerator - GC-B257JQYL",
        document.getElementById("harga3").innerHTML = "Rp14.220.000",
        document.getElementById("keterangan3").innerHTML ="- LinearCooling menjaga kesegaran bahan makanan lebih lama - Kapasitas lebih besar untuk menyimpan bahan makanan untuk keluarga - LG ThinQ untuk mengatur & kontrol suhu kulkas dengan smartphone - Kapasitas: 688L gross / 643L net",
        document.getElementById("gambar3").src ="https://cf.shopee.co.id/file/8ea9aa4a458e42b74159bdfbbf3629cf"
        )
    } else if (pilihan === "Sepeda"){
        resolve (
             // 1
        jud.innerHTML = "Anda Berada Di Kategori " + pilihan,
        document.getElementById("toko1").innerHTML = "Pacific Bike Official",
        document.getElementById("nama1").innerHTML = "Sepeda MTB 26 AT 2689 XT AVIATOR",
        document.getElementById("harga1").innerHTML = "Rp1.900.000",
        document.getElementById("keterangan1").innerHTML ="Frame : Hi-Ten Steel MTB XC 26 Fork : Aviator Suspension Fork 26, Travel 120mm Lock out Shifter : 3x8 Speed Brakes : Mechanical Disc Brake  Crankset : 24/34/42 T Pedal : Plastic Hub : Pacific 36H Rims : Aviator Alloy Single Wall 26 Tires : Vee Rubber 26 x2.20 Seatpost : Hi-Ten Steel 28.6x300mm Stem : Alloy Ext: 50mm HandleBar : Hi-ten Steel W:1.4x740mm *",
        document.getElementById("gambar1").src ="https://cf.shopee.co.id/file/c15adec6768c7489e37708eee6d35b48",


            //card 2

        document.getElementById("toko2").innerHTML = "Pacific Bike Official",
        document.getElementById("nama2").innerHTML = "Sepeda MTB 20\" VIPER 3.0\" PACIFIC",
        document.getElementById("harga2").innerHTML = "Rp2.200.000",
        document.getElementById("keterangan2").innerHTML ="Color Nero Red / Nero Blue / Astro Blue / Nero Yellow Frame Hi-Ten Steel MTB XC Frame 20\″ Fork Hi-Ten Steel Suspension Fork 20\″, Travel 90mmShifterShimano SL-RS35 7 Speed Rear Derailleur Shimano RD-TY21 7 SpeedRear Shock AYOI SU-S03 750 Lbs Brakes Mechanical Disc brake Crankset Steel 42T Freewheel Freewheel 7 speed, 14-28T F/R Hub	36H Rim	Hi-Ten Steel Single Wall 20\″ Tires Kenda 20×3.0 Seatpost Hi-Ten Steel Ø: 28.6×200mm Stem Alloy Ext: 45mm Handlebar Hi-Ten Steel W: 620mm",
        document.getElementById("gambar2").src ="https://cf.shopee.co.id/file/7d13653504c42906dac38dff7707317b",

        //card 3

        document.getElementById("toko3").innerHTML = "Pacific Bike Official",
        document.getElementById("nama3").innerHTML = "Sepeda MTB 27.5 INVERT 100 PACIFIC",
        document.getElementById("harga3").innerHTML = "Rp2.650.000",
        document.getElementById("keterangan3").innerHTML ="Color : Steel Blue / Noir Red / Noir Orange / Cool Grey Frame : Hi-Ten Steel MTB XC 27.5\″ Fork	: Pacific 6061 Suspension Fork 27.5″, Travel 120 mm, Lock Out Shifter : Shimano EF-500 3×7 Speed Front Derailleur : Shimano Tourney FD-TZ500 3 Speed Rear Derailleur : Shimano Tourney FD-TY300 7 Speed Brakes : Pacific BX-351 Mechanical Disc Brake Crankset : Pacific Alloy 24/34/42 T Pedal : Plastic Pedal : Plastic",
        document.getElementById("gambar3").src ="https://cf.shopee.co.id/file/3edfd68d267cd03a4a592fc3b8fca4b7",
        document.getElementById("kardus1").style.display = "block",
        document.getElementById("kardus2").style.display = "block",
        document.getElementById("kardus3").style.display = "block",
        document.getElementById("boddy").style.background = "white"
            )
        } else {
            reject (
                jud.innerHTML = "Anda Berada Di Kategori " + pilihan,
            )
        }
    })
    

}

// document.getElementById("kardus1").style.display = "none"

function coba6(pilihan){
    var jud = titleHeader();
    return new Promise((resolve, reject) => {
      if (pilihan === "Kekasih") {
        resolve (
                // 1
        document.getElementById("kardus1").style.display = "none",
        document.getElementById("kardus2").style.display = "none",
        document.getElementById("kardus3").style.display = "none",
        document.getElementById("boddy").style.background = "url(https://simplefreethemes.com/wp-content/uploads/2017/04/Subsign.png)"
        ),
        document.getElementById("boddy").style.backgroundSize = "cover"
      }else{
        reject (
            jud.innerHTML = "Anda Berada Di Kategori   " + pilihan,
        )
      }
    })
    
}


async function ok () {
    try {
        
        const resp1 =  coba1(namaBarang())
        const resp2 =  coba2(namaBarang())
        const resp3 =  coba3(namaBarang())
        const resp4 =  coba4(namaBarang())
        const resp5 =  coba5(namaBarang())
        const resp6 = coba6(namaBarang())
        const wakwak =  await loading(4000);
        const ucapan = selamatDatang();
    } catch (error) {
        console.log(error);
    }
}

ok();