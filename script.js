// Seleccionar el contenedor de boxes y su pseudo-elemento :before
const boxes = document.querySelector(".boxes");
const boxes_pseudo = window.getComputedStyle(boxes, ":before");

// Seleccionar todos los elementos con la clase "box"
const box = document.querySelectorAll(".box");

// Seleccionar elementos del menú de Cold War
const coldMeun = document.querySelectorAll("#cold li");
const coldWar_meun_bg = document.querySelector(".cold");

// Seleccionar elementos del menú de Modern Warfare
const modernMeun = document.querySelectorAll("#modern li");
const modern_meun_bg = document.querySelector(".modern");

// Evento de mouseenter para cada elemento con clase "box"
box.forEach((ele, index) => {
    ele.addEventListener("mouseenter", (e) => {
        // Remover la clase "active" de todos los elementos "box"
        box.forEach((rest) => rest.classList.remove("active"));
        // Agregar la clase "active" al elemento actual
        ele.classList.add("active");

        // Verificar si el elemento actual es "active"
        if (ele.classList[2] == "active") {
            // Cambiar la imagen de fondo de boxes según el índice
            if (index === 0) {
                // Call of Duty Vanguard 🦇
                boxes.style.setProperty(
                    "--bgFrame",
                    "url('https://cdn.realsport101.com/images/ncavvykf/gfinityesports/ffb41d4dd3cbbc5611c5adb14b415aedeaed10ca-1920x1099.jpg?rect=0,9,1920,1081&w=700&h=394&dpr=2')"
                );
            }

            if (index === 1) {
                // Call of Duty Warzone 🪖
                boxes.style.setProperty(
                    "--bgFrame",
                    "url('https://assets2.rockpapershotgun.com/call-of-duty-warzone-rebirth-island.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/call-of-duty-warzone-rebirth-island.jpg')"
                );
            }

            if (index === 2) {
                // Call of Duty Cold War 🧊
                boxes.style.setProperty(
                    "--bgFrame",
                    "url('https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/feature/BOCW-ALPHA-TOUT.jpg')"
                );
                // Restablecer el fondo original y quitar la clase "active" ❌
                coldMeun.forEach((rest) => rest.classList.remove("active"));
                coldWar_meun_bg.style.setProperty(
                    "--cold",
                    'url("https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/feature/BOCW-ALPHA-TOUT.jpg")'
                );
            }

            if (index === 3) {
                // Call of Duty Modern 💀
                boxes.style.setProperty(
                    "--bgFrame",
                    "url('https://arabhardware.net/storage/uploads/2022-01/thumb-1920-1050665main61eaed9b30b82.jpg')"
                );
                // Restablecer el fondo original y quitar la clase "active" ❌
                modernMeun.forEach((rest) => rest.classList.remove("active"));
                modern_meun_bg.style.setProperty(
                    "--modern",
                    'url("https://arabhardware.net/storage/uploads/2022-01/thumb-1920-1050665main61eaed9b30b82.jpg")'
                );
            }
        }
    });
});

// Evento de mouseover para cada elemento del menú de Cold War
coldMeun.forEach((ele) => {
    ele.addEventListener("mouseover", () => {
        // Remover la clase "active" de todos los elementos del menú de Cold War
        coldMeun.forEach((rest) => rest.classList.remove("active"));
        // Agregar la clase "active" al elemento actual
        ele.classList.add("active");

        // Cambiar el fondo según el texto del elemento actual
        if (ele.innerText === "CAMPAÑA") {
            coldWar_meun_bg.style.setProperty(
                "--cold",
                'url("https://www.nme.com/wp-content/uploads/2020/09/blackopscoldwar-credit-activision@2000x1270-1.jpg")'
            );
            boxes.style.setProperty(
                "--bgFrame",
                "url('https://www.nme.com/wp-content/uploads/2020/09/blackopscoldwar-credit-activision@2000x1270-1.jpg')"
            );
        }

        if (ele.innerText === "MULTIJUGADOR") {
            coldWar_meun_bg.style.setProperty(
                "--cold",
                'url("https://cdn.mos.cms.futurecdn.net/i3Gh5G3T6ceHSYGteW6KDB.jpg")'
            );
            boxes.style.setProperty(
                "--bgFrame",
                "url('https://cdn.mos.cms.futurecdn.net/i3Gh5G3T6ceHSYGteW6KDB.jpg')"
            );
        }

        if (ele.innerText === "COMPETITIVO") {
            coldWar_meun_bg.style.setProperty(
                "--cold",
                'url("https://www.callofduty.com/content/dam/atvi/treyarch/treyarch-touchui/blog/feature/2021/season_1/lp/CDL_blog.jpg")'
            );
            boxes.style.setProperty(
                "--bgFrame",
                "url('https://www.callofduty.com/content/dam/atvi/treyarch/treyarch-touchui/blog/feature/2021/season_1/lp/CDL_blog.jpg')"
            );
        }

        if (ele.innerText === "ZOMBIES") {
            coldWar_meun_bg.style.setProperty(
                "--cold",
                'url("https://www.gamingtalker.it/wp-content/uploads/2021/02/Call-Of-Duty_Black_ops_cold_War_FBZ_Shot_Blog.jpg")'
            );
            boxes.style.setProperty(
                "--bgFrame",
                "url('https://www.gamingtalker.it/wp-content/uploads/2021/02/Call-Of-Duty_Black_ops_cold_War_FBZ_Shot_Blog.jpg')"
            );
        }
    });
});

// Evento de mouseover para cada elemento del menú de Modern Warfare
modernMeun.forEach((ele) => {
    ele.addEventListener("mouseover", () => {
        // Remover la clase "active" de todos los elementos del menú de Modern Warfare
        modernMeun.forEach((rest) => rest.classList.remove("active"));
        // Agregar la clase "active" al elemento actual
        ele.classList.add("active");

        // Cambiar el fondo según el texto del elemento actual
        if (ele.innerText === "CAMPAÑA") {
            modern_meun_bg.style.setProperty(
                "--modern",
                'url("https://www.theouterhaven.net/wp-content/uploads/2019/09/call-of-duty-modern-warfare-beta-bg-art-01-ps4-us-10sep19-e1569414154876.jpg")'
            );
            boxes.style.setProperty(
                "--bgFrame",
                "url('https://www.theouterhaven.net/wp-content/uploads/2019/09/call-of-duty-modern-warfare-beta-bg-art-01-ps4-us-10sep19-e1569414154876.jpg')"
            );
        }

        if (ele.innerText === "MULTIJUGADOR") {
            modern_meun_bg.style.setProperty(
                "--modern",
                'url("https://www.gamespot.com/a/uploads/original/1578/15787979/3651964-cod%20mw%20season%203.jpg")'
            );
            boxes.style.setProperty(
                "--bgFrame",
                "url('https://www.gamespot.com/a/uploads/original/1578/15787979/3651964-cod%20mw%20season%203.jpg')"
            );
        }

        if (ele.innerText === "COOPERATIVO") {
            modern_meun_bg.style.setProperty(
                "--modern",
                'url("https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/body/mw-launch-body-screens/MW-SPOPS-01.jpg")'
            );
            boxes.style.setProperty(
                "--bgFrame",
                "url('https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/body/mw-launch-body-screens/MW-SPOPS-01.jpg')"
            );
        }
    });
});
